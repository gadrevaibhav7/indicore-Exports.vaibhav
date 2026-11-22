import 'dotenv/config';
import crypto from 'node:crypto';
import fs from 'node:fs/promises';
import path from 'node:path';
import express from 'express';
import type { Request, Response } from 'express';
import nodemailer from 'nodemailer';

const PORT = Number(process.env.PORT) || 3000;
const DATA_DIR = path.resolve(process.cwd(), 'data');
const INQUIRIES_FILE = path.resolve(DATA_DIR, 'inquiries.json');

interface InquiryPayload {
  name: string;
  email: string;
  phone: string;
  company: string;
  inquiryType: string;
  productName: string;
  destinationPort: string;
  quantity: string;
  currencyTerms: string;
  message: string;
  sourceForm: 'contact_page' | 'product_modal';
  agreedToTerms: boolean;
}

interface StoredInquiry extends InquiryPayload {
  referenceId: string;
  createdAt: string;
  deliveryMethod: string;
  emailSent: boolean;
}

const INQUIRY_CATEGORY_LABELS: Record<string, string> = {
  spices: 'Premium Spices & Oils (Pepper, Cardamom, Turmeric, Cumin, Red Chili)',
  areca: 'Biodegradable Areca Palm Tableware (Plates, Platters, Bowls)',
  custom: 'Custom Commercial Packing & Vacuum Seals',
  freight: 'FOB / CIF Container Sea Logistics Consultation',
  samples: 'Commercial Quality Samples Order',
  general: 'General B2B Sourcing Request',
};

function sanitizeHeaderValue(value: string): string {
  return value.replace(/[\r\n\0]+/g, ' ').trim();
}

function sanitizeText(value: unknown, maxLen: number): string {
  if (typeof value !== 'string') return '';
  return value.trim().slice(0, maxLen);
}

function escapeHtml(value: string): string {
  return value
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;');
}

function isValidEmail(email: string): boolean {
  if (!email || email.length > 180) return false;
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

async function persistInquiry(record: StoredInquiry): Promise<void> {
  await fs.mkdir(DATA_DIR, { recursive: true });
  let existing: StoredInquiry[] = [];
  try {
    const raw = await fs.readFile(INQUIRIES_FILE, 'utf8');
    const parsed = JSON.parse(raw);
    if (Array.isArray(parsed)) {
      existing = parsed;
    }
  } catch {
    existing = [];
  }
  existing.unshift(record);
  if (existing.length > 500) {
    existing = existing.slice(0, 500);
  }
  await fs.writeFile(INQUIRIES_FILE, JSON.stringify(existing, null, 2), 'utf8');
}

function buildEmailContent(inquiry: InquiryPayload, referenceId: string) {
  const categoryLabel = INQUIRY_CATEGORY_LABELS[inquiry.inquiryType] || inquiry.inquiryType || 'B2B Trade Inquiry';
  const subject = sanitizeHeaderValue(
    `[Indicore Exports] New ${inquiry.productName ? inquiry.productName : 'B2B'} Inquiry (${referenceId}) from ${inquiry.name}`
  );

  const rows: Array<[string, string]> = [
    ['Reference ID', referenceId],
    ['Source Form', inquiry.sourceForm === 'product_modal' ? 'Product Portfolio Quote Modal' : 'Contact Page Inquiry Form'],
    ['Buyer Name', inquiry.name],
    ['Business Email', inquiry.email],
    ['Phone / WhatsApp', inquiry.phone || 'Not provided'],
    ['Company / Enterprise', inquiry.company || 'Not provided'],
    ['Sourcing Category', categoryLabel],
    ['Product / Grade', inquiry.productName || 'General Portfolio'],
    ['Estimated Quantity', inquiry.quantity || 'Not specified'],
    ['Destination Port', inquiry.destinationPort || 'Not specified'],
    ['Preferred Terms / Currency', inquiry.currencyTerms || 'Not specified'],
    ['Submitted At (UTC)', new Date().toISOString()],
  ];

  const textLines = [
    `NEW B2B TRADE INQUIRY - INDICORE EXPORTS`,
    `========================================`,
    ...rows.map(([label, val]) => `${label}: ${val}`),
    ``,
    `Sourcing Specifications / Message:`,
    inquiry.message || '(No additional message provided)',
  ];

  const htmlRows = rows
    .map(
      ([label, val]) => `
        <tr>
          <td style="padding:10px 14px;border-bottom:1px solid #ece7dc;font-weight:600;color:#404943;width:36%;font-size:13px;background:#fcfbf9;">${escapeHtml(label)}</td>
          <td style="padding:10px 14px;border-bottom:1px solid #ece7dc;color:#121c2a;font-size:13px;">${escapeHtml(val)}</td>
        </tr>`
    )
    .join('');

  const html = `
    <div style="font-family:Inter,Arial,sans-serif;max-width:640px;margin:0 auto;border:1px solid #ece7dc;border-radius:16px;overflow:hidden;background:#ffffff;">
      <div style="background:#0f5238;color:#ffffff;padding:24px 28px;">
        <div style="font-size:11px;letter-spacing:2px;text-transform:uppercase;color:#a8e7c5;font-weight:700;">Indicore Exports Trade Desk</div>
        <h1 style="margin:6px 0 0;font-size:20px;line-height:1.3;">New Commercial Sourcing Inquiry</h1>
        <div style="margin-top:8px;font-size:12px;color:#e6fcf1;">Reference: <strong>${escapeHtml(referenceId)}</strong></div>
      </div>
      <div style="padding:24px 28px;">
        <table style="width:100%;border-collapse:collapse;border:1px solid #ece7dc;border-radius:8px;overflow:hidden;">
          ${htmlRows}
        </table>
        <div style="margin-top:20px;padding:16px;background:#f8f9ff;border:1px solid #d9e3f6;border-radius:12px;">
          <div style="font-size:11px;font-weight:700;text-transform:uppercase;letter-spacing:1px;color:#0f5238;margin-bottom:8px;">Specifications & Message</div>
          <div style="font-size:14px;line-height:1.6;color:#121c2a;white-space:pre-wrap;">${escapeHtml(inquiry.message || 'No additional message provided.')}</div>
        </div>
        <p style="margin-top:20px;font-size:12px;color:#64748b;">
          Reply directly to this email to respond to <strong>${escapeHtml(inquiry.name)}</strong> (${escapeHtml(inquiry.email)}).
        </p>
      </div>
    </div>
  `;

  return { subject, text: textLines.join('\n'), html };
}

async function sendViaSmtp(
  inquiry: InquiryPayload,
  referenceId: string,
  toEmail: string,
  ccEmail: string
): Promise<boolean> {
  const smtpUser = process.env.SMTP_USER?.trim() || process.env.GMAIL_USER?.trim();
  const smtpPass = process.env.SMTP_PASS?.trim() || process.env.GMAIL_APP_PASSWORD?.trim();

  if (!smtpUser || !smtpPass) {
    return false;
  }

  const smtpHost = process.env.SMTP_HOST?.trim() || 'smtp.gmail.com';
  const smtpPort = Number(process.env.SMTP_PORT || 465);

  const transporter = nodemailer.createTransport({
    host: smtpHost,
    port: smtpPort,
    secure: smtpPort === 465,
    auth: {
      user: smtpUser,
      pass: smtpPass,
    },
  });

  const { subject, text, html } = buildEmailContent(inquiry, referenceId);
  const ccList = ccEmail && ccEmail.toLowerCase() !== toEmail.toLowerCase() ? ccEmail : undefined;

  await transporter.sendMail({
    from: `"Indicore Exports Trade Desk" <${sanitizeHeaderValue(smtpUser)}>`,
    to: toEmail,
    cc: ccList,
    replyTo: sanitizeHeaderValue(inquiry.email),
    subject,
    text,
    html,
  });

  return true;
}

async function sendViaResend(
  inquiry: InquiryPayload,
  referenceId: string,
  toEmail: string,
  ccEmail: string
): Promise<boolean> {
  const apiKey = process.env.RESEND_API_KEY?.trim();
  if (!apiKey) return false;

  const fromEmail = process.env.RESEND_FROM_EMAIL?.trim() || 'Indicore Exports <onboarding@resend.dev>';
  const { subject, text, html } = buildEmailContent(inquiry, referenceId);

  const recipients = [toEmail];
  if (ccEmail && ccEmail.toLowerCase() !== toEmail.toLowerCase()) {
    recipients.push(ccEmail);
  }

  const res = await fetch('https://api.resend.com/emails', {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${apiKey}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      from: fromEmail,
      to: recipients,
      reply_to: sanitizeHeaderValue(inquiry.email),
      subject,
      html,
      text,
    }),
  });

  if (!res.ok) {
    const errText = await res.text();
    throw new Error(`Resend API error (${res.status}): ${errText}`);
  }

  return true;
}

async function startServer() {
  const app = express();
  app.set('trust proxy', true);
  app.use(express.json({ limit: '100kb' }));

  app.get('/api/health', (_req: Request, res: Response) => {
    const hasSmtp = Boolean(
      (process.env.SMTP_USER || process.env.GMAIL_USER) &&
        (process.env.SMTP_PASS || process.env.GMAIL_APP_PASSWORD)
    );
    const hasResend = Boolean(process.env.RESEND_API_KEY);
    res.json({
      ok: true,
      emailProviderConfigured: hasSmtp || hasResend,
    });
  });

  app.post('/api/inquiries', async (req: Request, res: Response) => {
    try {
      const body = (req.body ?? {}) as Record<string, unknown>;

      const name = sanitizeText(body.name, 120);
      const email = sanitizeText(body.email, 180);
      const phone = sanitizeText(body.phone, 40);
      const company = sanitizeText(body.company, 160);
      const inquiryType = sanitizeText(body.inquiryType, 80) || 'spices';
      const productName = sanitizeText(body.productName, 160);
      const destinationPort = sanitizeText(body.destinationPort, 120);
      const quantity = sanitizeText(body.quantity, 120);
      const currencyTerms = sanitizeText(body.currencyTerms, 120);
      const message = sanitizeText(body.message, 4000);
      const sourceForm = body.sourceForm === 'product_modal' ? 'product_modal' : 'contact_page';
      const agreedToTerms = Boolean(body.agreedToTerms);

      if (name.length < 2) {
        res.status(400).json({ ok: false, error: 'Please enter your full name.' });
        return;
      }

      if (!isValidEmail(email)) {
        res.status(400).json({ ok: false, error: 'Please enter a valid business email address.' });
        return;
      }

      if (sourceForm === 'contact_page' && message.length < 5) {
        res.status(400).json({ ok: false, error: 'Please include your sourcing specifications or inquiry message.' });
        return;
      }

      if (sourceForm === 'product_modal' && !company) {
        res.status(400).json({ ok: false, error: 'Please enter your company or enterprise name.' });
        return;
      }

      const inquiry: InquiryPayload = {
        name,
        email,
        phone,
        company,
        inquiryType,
        productName,
        destinationPort,
        quantity,
        currencyTerms,
        message,
        sourceForm,
        agreedToTerms,
      };

      const prefix = sourceForm === 'product_modal' ? 'COOP' : 'IND';
      const referenceId = `${prefix}-${crypto.randomInt(100000, 999999)}`;

      const toEmail = process.env.INQUIRY_TO_EMAIL?.trim() || 'indicore55@gmail.com';
      const ccEmail = process.env.INQUIRY_CC_EMAIL?.trim() || 'gadrevaibhav7@gmail.com';

      let emailSent = false;
      let deliveryMethod = 'client_relay';

      try {
        if (await sendViaSmtp(inquiry, referenceId, toEmail, ccEmail)) {
          emailSent = true;
          deliveryMethod = 'smtp';
        } else if (await sendViaResend(inquiry, referenceId, toEmail, ccEmail)) {
          emailSent = true;
          deliveryMethod = 'resend';
        }
      } catch (mailError) {
        console.error('Server email dispatch failed, falling back to browser relay:', mailError);
        emailSent = false;
        deliveryMethod = 'client_relay';
      }

      await persistInquiry({
        ...inquiry,
        referenceId,
        createdAt: new Date().toISOString(),
        deliveryMethod,
        emailSent,
      });

      res.status(200).json({
        ok: true,
        referenceId,
        emailSent,
        method: deliveryMethod,
        recipientEmails: {
          to: toEmail,
          cc: ccEmail,
        },
      });
    } catch (err) {
      console.error('Inquiry submission error:', err);
      res.status(500).json({
        ok: false,
        error: 'Unable to process inquiry right now. Please try again or email indicore55@gmail.com directly.',
      });
    }
  });

  if (process.env.NODE_ENV !== 'production') {
    const { createServer: createViteServer } = await import('vite');
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: 'spa',
    });
    app.use(vite.middlewares);
  } else {
    const distDir = path.resolve(process.cwd(), 'dist');
    app.use(express.static(distDir));
    app.get('*', (_req: Request, res: Response) => {
      res.sendFile(path.resolve(distDir, 'index.html'));
    });
  }

  app.listen(PORT, '0.0.0.0', () => {
    console.log(`Indicore Exports server running on http://0.0.0.0:${PORT}`);
  });
}

startServer().catch((err) => {
  console.error('Failed to start server:', err);
  process.exit(1);
});
