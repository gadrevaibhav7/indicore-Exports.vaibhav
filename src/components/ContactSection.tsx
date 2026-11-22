import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import {
  Mail,
  Phone,
  MapPin,
  Clock,
  Send,
  CheckCircle2,
  Building2,
  ShieldCheck,
  AlertCircle,
  ExternalLink,
  Package,
  Anchor,
} from 'lucide-react';
import {
  submitTradeInquiry,
  buildMailtoHref,
  type TradeInquiryInput,
  type TradeInquiryResult,
} from '../utils/inquiryClient';

interface ContactFormState {
  name: string;
  email: string;
  phone: string;
  company: string;
  inquiryType: string;
  quantity: string;
  destinationPort: string;
  message: string;
  agreedToTerms: boolean;
}

const INITIAL_FORM_STATE: ContactFormState = {
  name: '',
  email: '',
  phone: '',
  company: '',
  inquiryType: 'spices',
  quantity: '',
  destinationPort: '',
  message: '',
  agreedToTerms: true,
};

export default function ContactSection() {
  const [formData, setFormData] = useState<ContactFormState>(INITIAL_FORM_STATE);
  const [submitting, setSubmitting] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [submissionResult, setSubmissionResult] = useState<TradeInquiryResult | null>(null);
  const [submittedPayload, setSubmittedPayload] = useState<TradeInquiryInput | null>(null);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errorMessage) setErrorMessage(null);
  };

  const handleCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, checked } = e.target;
    setFormData((prev) => ({ ...prev, [name]: checked }));
    if (errorMessage) setErrorMessage(null);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMessage(null);

    const trimmedName = formData.name.trim();
    const trimmedEmail = formData.email.trim();
    const trimmedMessage = formData.message.trim();

    if (trimmedName.length < 2) {
      setErrorMessage('Please enter your full name.');
      return;
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(trimmedEmail)) {
      setErrorMessage('Please enter a valid business email address.');
      return;
    }

    if (trimmedMessage.length < 5) {
      setErrorMessage('Please describe your sourcing specifications or inquiry details.');
      return;
    }

    if (!formData.agreedToTerms) {
      setErrorMessage('Please confirm the trade confidentiality authorization checkbox before submitting.');
      return;
    }

    const payload: TradeInquiryInput = {
      name: trimmedName,
      email: trimmedEmail,
      phone: formData.phone.trim(),
      company: formData.company.trim(),
      inquiryType: formData.inquiryType,
      quantity: formData.quantity.trim(),
      destinationPort: formData.destinationPort.trim(),
      message: trimmedMessage,
      sourceForm: 'contact_page',
      agreedToTerms: formData.agreedToTerms,
    };

    setSubmitting(true);
    try {
      const result = await submitTradeInquiry(payload);
      setSubmittedPayload(payload);
      setSubmissionResult(result);
    } catch (err) {
      setErrorMessage(
        err instanceof Error
          ? err.message
          : 'Unable to dispatch inquiry right now. Please try again or email indicore55@gmail.com.'
      );
    } finally {
      setSubmitting(false);
    }
  };

  const resetForm = () => {
    setFormData(INITIAL_FORM_STATE);
    setSubmissionResult(null);
    setSubmittedPayload(null);
    setErrorMessage(null);
  };

  return (
    <section
      className="bg-gradient-to-b from-[#fcfbf9] to-[#f4f1ea] py-16 md:py-24"
      id="contact-page-wrapper"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-16">
        {/* Over-heading layout */}
        <div className="max-w-3xl mx-auto text-center mb-16 space-y-4">
          <span
            className="font-mono tracking-widest text-[#904d00] text-xs uppercase font-bold block"
            id="contact-subtitle"
          >
            Reliable B2B Global Trade Partners
          </span>
          <h1
            className="text-3xl md:text-5xl font-display font-bold text-[#121c2a] leading-tight tracking-tight"
            id="contact-title"
          >
            Establish Commercial Sourcing
          </h1>
          <p className="text-[#404943] text-sm md:text-base leading-relaxed">
            Reach out directly to our trade desk to request bulk samples, technical specifications,
            customs documents, or port logistics arrangements.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Column 1: Direct Contact Details & Accreditations (5 cols) */}
          <div className="lg:col-span-5 space-y-8">
            {/* Quick Cards Info */}
            <div className="bg-white rounded-3xl border border-[#ece7dc] p-8 space-y-8 shadow-sm">
              <h2 className="font-display font-bold text-2xl text-[#121c2a]">
                Contact Information
              </h2>

              <div className="space-y-6">
                {/* Email address */}
                <div className="flex gap-4 items-start" id="info-email-block">
                  <div className="w-11 h-11 rounded-2xl bg-[#e6eee9] flex items-center justify-center text-[#0f5238] shrink-0">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-stone-400 block">
                      Direct Email
                    </span>
                    <a
                      href="mailto:indicore55@gmail.com"
                      className="text-[#121c2a] font-sans font-semibold hover:text-[#0f5238] transition-colors leading-relaxed tracking-tight text-base break-all"
                    >
                      indicore55@gmail.com
                    </a>
                    <p className="text-xs text-stone-500 mt-0.5">
                      Response guaranteed within 12 Indian trade hours.
                    </p>
                  </div>
                </div>

                {/* Phone contact */}
                <div className="flex gap-4 items-start" id="info-phone-block">
                  <div className="w-11 h-11 rounded-2xl bg-[#e6eee9] flex items-center justify-center text-[#0f5238] shrink-0">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-stone-400 block">
                      Phone Number
                    </span>
                    <a
                      href="tel:+917208151825"
                      className="text-[#121c2a] font-sans font-semibold hover:text-[#0f5238] transition-colors leading-relaxed tracking-tight text-base"
                    >
                      +91 7208151825
                    </a>
                    <p className="text-xs text-stone-500 mt-0.5">
                      Available for WhatsApp and direct international dials.
                    </p>
                  </div>
                </div>

                {/* Headquarters Office */}
                <div className="flex gap-4 items-start" id="info-address-block">
                  <div className="w-11 h-11 rounded-2xl bg-[#e6eee9] flex items-center justify-center text-[#0f5238] shrink-0">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-stone-400 block">
                      Registered Headquarters
                    </span>
                    <p className="text-[#121c2a] font-sans font-semibold leading-relaxed text-sm">
                      Mumbai / Unjha Agri-Trade Axis, India
                    </p>
                    <p className="text-xs text-stone-500 mt-0.5">
                      Interfacing with Mundra (INMUN1) and Nhava Sheva (INNSA1) container terminals.
                    </p>
                  </div>
                </div>

                {/* Export Hours */}
                <div className="flex gap-4 items-start" id="info-hours-block">
                  <div className="w-11 h-11 rounded-2xl bg-[#e6eee9] flex items-center justify-center text-[#0f5238] shrink-0">
                    <Clock className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-stone-400 block">
                      Trade Desk Working Hours
                    </span>
                    <p className="text-[#121c2a] font-sans font-semibold text-sm">
                      Monday – Saturday, 08:30 – 19:30 (IST)
                    </p>
                    <p className="text-xs text-stone-500 mt-0.5">
                      Closed on officially recognized Indian National dry holidays.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* B2B Sourcing Accreditations Check list */}
            <div className="bg-[#f0ece3]/50 border border-[#ece7dc] rounded-3xl p-6 space-y-4">
              <span className="text-[10px] font-bold font-mono text-[#0f5238] uppercase tracking-wider block">
                Trade Accreditations & Standards
              </span>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                <div className="flex items-center gap-2.5 bg-white py-2 px-3 rounded-xl border border-[#ece7dc]/60">
                  <ShieldCheck className="w-4 h-4 text-[#0f5238] shrink-0" />
                  <span className="text-xs font-bold text-[#121c2a]">100% Traceability</span>
                </div>
                <div className="flex items-center gap-2.5 bg-white py-2 px-3 rounded-xl border border-[#ece7dc]/60">
                  <ShieldCheck className="w-4 h-4 text-[#0f5238] shrink-0" />
                  <span className="text-xs font-bold text-[#121c2a]">USDA Approved</span>
                </div>
                <div className="flex items-center gap-2.5 bg-white py-2 px-3 rounded-xl border border-[#ece7dc]/60">
                  <ShieldCheck className="w-4 h-4 text-[#0f5238] shrink-0" />
                  <span className="text-xs font-bold text-[#121c2a]">FSSAI Registered</span>
                </div>
                <div className="flex items-center gap-2.5 bg-white py-2 px-3 rounded-xl border border-[#ece7dc]/60">
                  <ShieldCheck className="w-4 h-4 text-[#0f5238] shrink-0" />
                  <span className="text-xs font-bold text-[#121c2a]">Areca Bio-Certified</span>
                </div>
              </div>
            </div>
          </div>

          {/* Column 2: B2B Sourcing Intent & Inquiry Form (7 cols) */}
          <div className="lg:col-span-7 bg-white rounded-3xl border border-[#ece7dc] p-8 shadow-sm relative">
            <AnimatePresence mode="wait">
              {!submissionResult ? (
                <motion.form
                  key="inquiry-form-active"
                  id="b2b-trade-inquiry-form"
                  onSubmit={handleSubmit}
                  noValidate
                  className="space-y-6"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="border-b border-stone-100 pb-4 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
                    <div>
                      <h3 className="font-display font-bold text-2xl text-[#121c2a]">
                        Commercial Inquiry Form
                      </h3>
                      <p className="text-xs text-stone-500 mt-1">
                        All inquiry details are routed directly to our export desk at{' '}
                        <span className="font-semibold text-[#0f5238]">indicore55@gmail.com</span>.
                      </p>
                    </div>
                  </div>

                  {errorMessage && (
                    <div
                      role="alert"
                      className="flex items-start gap-2.5 bg-red-50 border border-red-200 text-red-800 px-4 py-3 rounded-xl text-xs font-medium"
                    >
                      <AlertCircle className="w-4 h-4 text-red-600 shrink-0 mt-0.5" />
                      <span>{errorMessage}</span>
                    </div>
                  )}

                  {/* Row 1: Name & Email */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div className="space-y-1.5">
                      <label htmlFor="name-input" className="block text-xs font-bold text-[#121c2a]">
                        Your Name <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="text"
                        id="name-input"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        placeholder="John Doe"
                        className="w-full px-4 py-3 bg-[#fcfbf9] border border-[#ece7dc] rounded-xl text-sm text-[#121c2a] focus:outline-none focus:border-[#0f5238] focus:ring-1 focus:ring-[#0f5238]/20 transition-all"
                      />
                    </div>

                    <div className="space-y-1.5">
                      <label htmlFor="email-input" className="block text-xs font-bold text-[#121c2a]">
                        Business Email <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="email"
                        id="email-input"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        placeholder="buyer@globalfoods.com"
                        className="w-full px-4 py-3 bg-[#fcfbf9] border border-[#ece7dc] rounded-xl text-sm text-[#121c2a] focus:outline-none focus:border-[#0f5238] focus:ring-1 focus:ring-[#0f5238]/20 transition-all"
                      />
                    </div>
                  </div>

                  {/* Row 2: Phone & Company */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div className="space-y-1.5">
                      <label htmlFor="phone-input" className="block text-xs font-bold text-[#121c2a]">
                        Phone / WhatsApp Number
                      </label>
                      <input
                        type="tel"
                        id="phone-input"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="+1 (555) 019-2834"
                        className="w-full px-4 py-3 bg-[#fcfbf9] border border-[#ece7dc] rounded-xl text-sm text-[#121c2a] focus:outline-none focus:border-[#0f5238] focus:ring-1 focus:ring-[#0f5238]/20 transition-all"
                      />
                    </div>

                    <div className="space-y-1.5">
                      <label htmlFor="company-input" className="block text-xs font-bold text-[#121c2a]">
                        Enterprise / Organization
                      </label>
                      <div className="relative">
                        <input
                          type="text"
                          id="company-input"
                          name="company"
                          value={formData.company}
                          onChange={handleChange}
                          placeholder="Global Agri Ltd."
                          className="w-full pl-10 pr-4 py-3 bg-[#fcfbf9] border border-[#ece7dc] rounded-xl text-sm text-[#121c2a] focus:outline-none focus:border-[#0f5238] focus:ring-1 focus:ring-[#0f5238]/20 transition-all"
                        />
                        <Building2 className="w-4 h-4 text-stone-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                      </div>
                    </div>
                  </div>

                  {/* Row 3: Sourcing Category */}
                  <div className="space-y-1.5">
                    <label
                      htmlFor="inquiryType-select"
                      className="block text-xs font-bold text-[#121c2a]"
                    >
                      Primary Sourcing Category
                    </label>
                    <select
                      id="inquiryType-select"
                      name="inquiryType"
                      value={formData.inquiryType}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-[#fcfbf9] border border-[#ece7dc] rounded-xl text-sm text-[#121c2a] focus:outline-none focus:border-[#0f5238] transition-all cursor-pointer"
                    >
                      <option value="spices">
                        Premium Spices & Oils (Pepper, Cardamom, Turmeric, Cumin, Red Chili)
                      </option>
                      <option value="areca">
                        Biodegradable Areca Palm Tableware (Plates, Platters, Bowls)
                      </option>
                      <option value="custom">Custom Commercial Packing & Vacuum Seals</option>
                      <option value="freight">FOB / CIF Container Sea Logistics Consultation</option>
                      <option value="samples">Commercial Quality Samples Order</option>
                    </select>
                  </div>

                  {/* Row 4: Quantity & Destination Port */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div className="space-y-1.5">
                      <label htmlFor="quantity-input" className="block text-xs font-bold text-[#121c2a]">
                        Estimated Order Quantity
                      </label>
                      <div className="relative">
                        <input
                          type="text"
                          id="quantity-input"
                          name="quantity"
                          value={formData.quantity}
                          onChange={handleChange}
                          placeholder="e.g. 5 MT / 1x 20ft FCL / 10,000 pcs"
                          className="w-full pl-10 pr-4 py-3 bg-[#fcfbf9] border border-[#ece7dc] rounded-xl text-sm text-[#121c2a] focus:outline-none focus:border-[#0f5238] focus:ring-1 focus:ring-[#0f5238]/20 transition-all"
                        />
                        <Package className="w-4 h-4 text-stone-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                      </div>
                    </div>

                    <div className="space-y-1.5">
                      <label
                        htmlFor="destinationPort-input"
                        className="block text-xs font-bold text-[#121c2a]"
                      >
                        Destination Port / Country
                      </label>
                      <div className="relative">
                        <input
                          type="text"
                          id="destinationPort-input"
                          name="destinationPort"
                          value={formData.destinationPort}
                          onChange={handleChange}
                          placeholder="e.g. Rotterdam / Dubai / New York"
                          className="w-full pl-10 pr-4 py-3 bg-[#fcfbf9] border border-[#ece7dc] rounded-xl text-sm text-[#121c2a] focus:outline-none focus:border-[#0f5238] focus:ring-1 focus:ring-[#0f5238]/20 transition-all"
                        />
                        <Anchor className="w-4 h-4 text-stone-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                      </div>
                    </div>
                  </div>

                  {/* Message details */}
                  <div className="space-y-1.5">
                    <label htmlFor="message-input" className="block text-xs font-bold text-[#121c2a]">
                      Your Sourcing Specifications & Inquiry Details{' '}
                      <span className="text-red-500">*</span>
                    </label>
                    <textarea
                      id="message-input"
                      name="message"
                      rows={5}
                      required
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Please specify product grades, estimated quantity (MT), target port of destination, packaging requirements, or questions regarding certifications..."
                      className="w-full px-4 py-3 bg-[#fcfbf9] border border-[#ece7dc] rounded-xl text-sm text-[#121c2a] focus:outline-none focus:border-[#0f5238] focus:ring-1 focus:ring-[#0f5238]/20 transition-all resize-y"
                    ></textarea>
                  </div>

                  {/* GDPR trade standards checkbox */}
                  <div className="flex items-start gap-3 pt-1">
                    <input
                      type="checkbox"
                      id="agreedToTerms-checkbox"
                      name="agreedToTerms"
                      checked={formData.agreedToTerms}
                      onChange={handleCheckboxChange}
                      className="mt-1 w-4 h-4 rounded border-stone-300 text-[#0f5238] focus:ring-[#0f5238] cursor-pointer"
                    />
                    <label
                      htmlFor="agreedToTerms-checkbox"
                      className="text-xs text-stone-500 leading-relaxed cursor-pointer select-none"
                    >
                      I authorize Indicore Exports to record and email my inquiry specifications to
                      their trade desk. All contact data follows GDPR food trade confidentiality
                      guidelines.
                    </label>
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    disabled={submitting}
                    className="w-full bg-[#0f5238] hover:bg-[#0a3b27] text-white py-3.5 px-6 rounded-xl font-bold font-sans text-xs tracking-wider uppercase transition-all flex items-center justify-center gap-2 cursor-pointer shadow-md active:scale-98 disabled:opacity-80"
                    id="submit-inquiry-button"
                  >
                    {submitting ? (
                      <>
                        <div className="w-4 h-4 rounded-full border-2 border-stone-200 border-t-transparent animate-spin" />
                        <span>Sending Inquiry to Trade Desk...</span>
                      </>
                    ) : (
                      <>
                        <span>Submit Inquiry Directly to Email</span>
                        <Send className="w-3.5 h-3.5" />
                      </>
                    )}
                  </button>
                </motion.form>
              ) : (
                <motion.div
                  key="inquiry-form-success"
                  id="b2b-trade-inquiry-success"
                  className="py-8 text-center space-y-6 flex flex-col items-center justify-center"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.4, ease: 'easeOut' }}
                >
                  <div
                    className={`w-16 h-16 rounded-full flex items-center justify-center shadow-sm ${
                      submissionResult.emailSent
                        ? 'bg-[#e6eee9] text-[#0f5238]'
                        : 'bg-amber-50 text-amber-700 border border-amber-200'
                    }`}
                  >
                    {submissionResult.emailSent ? (
                      <CheckCircle2 className="w-10 h-10" />
                    ) : (
                      <Mail className="w-9 h-9" />
                    )}
                  </div>

                  <div className="space-y-2">
                    <h3 className="font-display font-bold text-3xl text-primary-green">
                      {submissionResult.emailSent ? 'Inquiry Sent to Trade Desk' : 'Inquiry Logged'}
                    </h3>
                    <p className="text-xs font-mono bg-[#e0f5ff] text-[#0284c7] px-3 py-1 rounded-md inline-block font-bold">
                      {submissionResult.referenceId}
                    </p>
                    <p className="text-[#404943] text-sm max-w-md mx-auto leading-relaxed pt-2">
                      Thank you, <strong>{submittedPayload?.name}</strong>.{' '}
                      {submissionResult.statusMessage}
                    </p>
                  </div>

                  {submissionResult.method === 'formsubmit' && (
                    <div className="bg-emerald-50 border border-emerald-200 text-emerald-900 rounded-xl px-4 py-3 text-xs max-w-md text-left leading-relaxed">
                      <strong>Note for site owner:</strong> If this is the first inquiry submitted
                      from this website URL, check{' '}
                      <strong>{submissionResult.recipientEmails.to}</strong> (including Spam) once
                      and click FormSubmit&apos;s <em>&ldquo;Activate Form&rdquo;</em> link so
                      all submissions arrive straight in your inbox.
                    </div>
                  )}

                  {!submissionResult.emailSent && (
                    <div className="bg-amber-50 border border-amber-200 text-amber-900 rounded-xl px-4 py-3 text-xs max-w-md text-left leading-relaxed">
                      {submissionResult.statusMessage}
                    </div>
                  )}

                  {/* Details Summary receipt */}
                  <div className="bg-[#fcfbf9] border border-[#ece7dc] rounded-2xl p-5 text-left w-full text-xs space-y-3 max-w-md font-sans">
                    <span className="font-bold text-[10px] font-mono text-stone-400 block uppercase border-b border-stone-100 pb-1.5">
                      Submitted Inquiry Summary
                    </span>
                    <div className="grid grid-cols-3 gap-1">
                      <span className="text-stone-400 font-medium">Enterprise:</span>
                      <span className="col-span-2 text-text-charcoal font-semibold">
                        {submittedPayload?.company || 'Not Specified'}
                      </span>
                    </div>
                    <div className="grid grid-cols-3 gap-1">
                      <span className="text-stone-400 font-medium">Category:</span>
                      <span className="col-span-2 text-text-charcoal font-semibold uppercase font-mono text-[10px]">
                        {submittedPayload?.inquiryType}
                      </span>
                    </div>
                    <div className="grid grid-cols-3 gap-1">
                      <span className="text-stone-400 font-medium">Quantity:</span>
                      <span className="col-span-2 text-text-charcoal font-semibold">
                        {submittedPayload?.quantity || 'Not Specified'}
                      </span>
                    </div>
                    <div className="grid grid-cols-3 gap-1">
                      <span className="text-stone-400 font-medium">Port:</span>
                      <span className="col-span-2 text-text-charcoal font-semibold">
                        {submittedPayload?.destinationPort || 'Not Specified'}
                      </span>
                    </div>
                    <div className="grid grid-cols-3 gap-1">
                      <span className="text-stone-400 font-medium">Callback Email:</span>
                      <span className="col-span-2 text-text-charcoal font-semibold break-all">
                        {submittedPayload?.email}
                      </span>
                    </div>
                    <div className="grid grid-cols-3 gap-1">
                      <span className="text-stone-400 font-medium">Phone Support:</span>
                      <span className="col-span-2 text-text-charcoal font-semibold">
                        {submittedPayload?.phone || 'Not Provided'}
                      </span>
                    </div>
                  </div>

                  <div className="flex flex-wrap items-center justify-center gap-3 pt-2">
                    {submittedPayload && (
                      <a
                        href={buildMailtoHref(
                          submittedPayload,
                          submissionResult.referenceId,
                          submissionResult.recipientEmails
                        )}
                        className="inline-flex items-center gap-1.5 px-5 py-2.5 rounded-xl bg-[#0f5238] hover:bg-[#0a3b27] text-white font-bold text-xs transition-all shadow-sm"
                      >
                        <Mail className="w-3.5 h-3.5" />
                        <span>Open Copy in Email App</span>
                        <ExternalLink className="w-3 h-3" />
                      </a>
                    )}
                    <button
                      onClick={resetForm}
                      className="px-6 py-2.5 rounded-xl border border-stone-200 hover:border-[#0f5238] font-bold text-xs text-text-charcoal hover:text-[#0f5238] transition-all bg-white cursor-pointer"
                    >
                      Create Another Inquiry
                    </button>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}
