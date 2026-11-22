export interface TradeInquiryInput {
  name: string;
  email: string;
  phone?: string;
  company?: string;
  inquiryType: string;
  productName?: string;
  destinationPort?: string;
  quantity?: string;
  currencyTerms?: string;
  message?: string;
  sourceForm: 'contact_page' | 'product_modal';
  agreedToTerms: boolean;
}

export interface TradeInquiryResult {
  ok: boolean;
  referenceId: string;
  emailSent: boolean;
  method: 'smtp' | 'resend' | 'formsubmit' | 'formsubmit_activation' | 'logged_only';
  needsActivation?: boolean;
  statusMessage: string;
  recipientEmails: {
    to: string;
    cc: string;
  };
}

export async function submitTradeInquiry(payload: TradeInquiryInput): Promise<TradeInquiryResult> {
  const response = await fetch('/api/inquiries', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(payload),
  });

  const data = await response.json();

  if (!response.ok || !data.ok) {
    throw new Error(data.error || 'Failed to submit inquiry. Please verify your entries and try again.');
  }

  const recipientEmails = data.recipientEmails || {
    to: 'indicore55@gmail.com',
    cc: 'gadrevaibhav7@gmail.com',
  };

  if (data.emailSent) {
    return {
      ok: true,
      referenceId: data.referenceId,
      emailSent: true,
      method: data.method,
      statusMessage: `Inquiry email delivered directly to ${recipientEmails.to}.`,
      recipientEmails,
    };
  }

  // Fallback browser relay via FormSubmit AJAX when server SMTP/Resend secrets are not yet configured
  try {
    const relayPayload: Record<string, string> = {
      'Reference ID': data.referenceId,
      'Buyer Name': payload.name,
      'Business Email': payload.email,
      'Phone / WhatsApp': payload.phone || 'Not provided',
      'Company / Enterprise': payload.company || 'Not provided',
      'Sourcing Category': payload.inquiryType,
      'Product / Grade': payload.productName || 'General Portfolio',
      'Estimated Quantity': payload.quantity || 'Not specified',
      'Destination Port': payload.destinationPort || 'Not specified',
      'Preferred Terms': payload.currencyTerms || 'Not specified',
      'Inquiry Message': payload.message || 'Product quote request',
      _subject: `[Indicore Exports] New ${payload.productName || 'B2B'} Inquiry (${data.referenceId}) from ${payload.name}`,
      _replyto: payload.email,
      _template: 'table',
      _captcha: 'false',
    };

    if (recipientEmails.cc && recipientEmails.cc.toLowerCase() !== recipientEmails.to.toLowerCase()) {
      relayPayload._cc = recipientEmails.cc;
    }

    const fsResponse = await fetch(`https://formsubmit.co/ajax/${encodeURIComponent(recipientEmails.to)}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
      body: JSON.stringify(relayPayload),
    });

    const fsData = await fsResponse.json().catch(() => ({}));
    const isSuccess = fsData.success === true || fsData.success === 'true';

    if (fsResponse.ok && isSuccess) {
      return {
        ok: true,
        referenceId: data.referenceId,
        emailSent: true,
        method: 'formsubmit',
        statusMessage: `Inquiry dispatched to ${recipientEmails.to} (CC: ${recipientEmails.cc}).`,
        recipientEmails,
      };
    }

    const msgText = typeof fsData.message === 'string' ? fsData.message : '';
    const isActivationNeeded = msgText.toLowerCase().includes('activat');

    return {
      ok: true,
      referenceId: data.referenceId,
      emailSent: false,
      needsActivation: isActivationNeeded,
      method: isActivationNeeded ? 'formsubmit_activation' : 'logged_only',
      statusMessage: isActivationNeeded
        ? `One-time email activation required: check ${recipientEmails.to} (including Spam) and click the "Activate Form" link sent by FormSubmit, or use the direct email button below.`
        : msgText || `Inquiry logged (${data.referenceId}). Automatic email relay requires SMTP/Resend configuration or one-time activation.`,
      recipientEmails,
    };
  } catch {
    return {
      ok: true,
      referenceId: data.referenceId,
      emailSent: false,
      method: 'logged_only',
      statusMessage: `Inquiry logged under ${data.referenceId}. Use the direct email button below or configure SMTP in environment secrets for automatic delivery.`,
      recipientEmails,
    };
  }
}

export function buildMailtoHref(
  payload: TradeInquiryInput,
  referenceId: string,
  recipientEmails: { to: string; cc: string } = {
    to: 'indicore55@gmail.com',
    cc: 'gadrevaibhav7@gmail.com',
  }
): string {
  const subject = `[Indicore Exports] ${payload.productName ? payload.productName + ' ' : ''}Inquiry (${referenceId}) - ${payload.name}`;
  const bodyLines = [
    `Reference ID: ${referenceId}`,
    `Buyer Name: ${payload.name}`,
    `Business Email: ${payload.email}`,
    `Phone / WhatsApp: ${payload.phone || 'Not provided'}`,
    `Company: ${payload.company || 'Not provided'}`,
    `Sourcing Category: ${payload.inquiryType}`,
    payload.productName ? `Product / Grade: ${payload.productName}` : null,
    payload.quantity ? `Quantity: ${payload.quantity}` : null,
    payload.destinationPort ? `Destination Port: ${payload.destinationPort}` : null,
    payload.currencyTerms ? `Currency / Terms: ${payload.currencyTerms}` : null,
    ``,
    `Sourcing Specifications / Message:`,
    payload.message || 'Please share pricing and specifications.',
  ].filter((line): line is string => line !== null);

  const params = new URLSearchParams();
  if (recipientEmails.cc && recipientEmails.cc.toLowerCase() !== recipientEmails.to.toLowerCase()) {
    params.set('cc', recipientEmails.cc);
  }
  params.set('subject', subject);
  params.set('body', bodyLines.join('\n'));

  return `mailto:${encodeURIComponent(recipientEmails.to)}?${params.toString()}`;
}
