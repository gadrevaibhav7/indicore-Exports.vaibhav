import React, { useState } from 'react';
import { motion } from 'motion/react';
import { FAQS, METRICS } from '../data';
import { Award, ShieldCheck, BadgeCheck, CheckCircle2, ChevronDown, HelpCircle, FileHeart, Search, X } from 'lucide-react';

export default function WhyChooseUs() {
  const [activeFaqId, setActiveFaqId] = useState<string | null>("fq1");
  const [searchQuery, setSearchQuery] = useState("");

  const toggleFaq = (id: string) => {
    if (activeFaqId === id) {
      setActiveFaqId(null);
    } else {
      setActiveFaqId(id);
    }
  };

  const filteredFaqs = FAQS.filter(faq => {
    const query = searchQuery.toLowerCase();
    return (
      faq.question.toLowerCase().includes(query) ||
      faq.answer.toLowerCase().includes(query) ||
      faq.category.toLowerCase().includes(query)
    );
  });

  const certifications = [
    { name: "FDA Registered Facility", authority: "United States FDA Food Safety Standards" },
    { name: "USDA Organic Certificate", authority: "NPOP India Certified Agriculture" },
    { name: "ISO 22000:2018 Standard", authority: "Hazard Analysis & Critical Process Control" },
    { name: "SGS Purity Attestation", authority: "Quantitative Chromatography Volatile Assessment" },
    { name: "Phytosanitary Certification", authority: "Ministry of Agriculture & Farmer Welfare" }
  ];

  return (
    <section className="py-20 bg-white" id="why-choose-us-section">
      <div className="max-w-7xl mx-auto px-6 md:px-16 space-y-20">
        
        {/* Compliance and Certs Header */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-7 space-y-6">
            <span className="text-xs font-bold font-mono text-spice-gold uppercase tracking-widest bg-spice-gold-light/40 px-3.5 py-1.5 rounded-full inline-block">
              Corporate Trustworthiness
            </span>
            <h2 className="text-3xl md:text-5xl font-display font-bold text-primary-green tracking-tight leading-tight">
              B2B Compliance & Registered Certifications
            </h2>
            <p className="text-text-muted leading-relaxed font-sans text-base md:text-lg">
              We stand behind absolute regulatory compliance. We carry clean, up-to-date certificates, sanitary registry tokens, and chemical clearings required by North American, European, and East Asian customs agencies.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              <div className="flex gap-3 items-start">
                <div className="w-5 h-5 rounded bg-[#e6fcf1] flex items-center justify-center text-primary-green shrink-0 mt-1">
                  <CheckCircle2 className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="font-semibold text-text-charcoal font-sans text-sm">Direct Cooperative Sourcing</h4>
                  <p className="text-xs text-text-muted mt-0.5">Zero brokers. High financial yields given directly back to agrarian farmers.</p>
                </div>
              </div>
              <div className="flex gap-3 items-start">
                <div className="w-5 h-5 rounded bg-[#e6fcf1] flex items-center justify-center text-primary-green shrink-0 mt-1">
                  <CheckCircle2 className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="font-semibold text-text-charcoal font-sans text-sm">Strict Moisture Thresholds</h4>
                  <p className="text-xs text-text-muted mt-0.5">Oven-benchmarked below 10.5% moisture minimizing potential decay.</p>
                </div>
              </div>
              <div className="flex gap-3 items-start">
                <div className="w-5 h-5 rounded bg-[#e6fcf1] flex items-center justify-center text-primary-green shrink-0 mt-1">
                  <CheckCircle2 className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="font-semibold text-text-charcoal font-sans text-sm">Ozone-washed Sanitary Lines</h4>
                  <p className="text-xs text-text-muted mt-0.5">We avoid chemical solvents, prioritizing UV Sterilization channels.</p>
                </div>
              </div>
              <div className="flex gap-3 items-start">
                <div className="w-5 h-5 rounded bg-[#e6fcf1] flex items-center justify-center text-primary-green shrink-0 mt-1">
                  <CheckCircle2 className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="font-semibold text-text-charcoal font-sans text-sm">Carbon-Balanced Sea Freight</h4>
                  <p className="text-xs text-text-muted mt-0.5">We monitor and balance CO2 parameters for oceanic shipping paths.</p>
                </div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-5 bg-surface-ice p-8 rounded-3xl border border-border-sage/40 space-y-6">
            <h3 className="font-display font-bold text-lg text-primary-green flex items-center gap-2">
              <Award className="w-5 h-5 text-spice-gold" />
              <span>International Certifications Registry</span>
            </h3>
            
            <div className="space-y-3">
              {certifications.map((item, index) => (
                <div key={index} className="bg-white p-4 rounded-xl border border-border-sage/20 shadow-sm flex items-start gap-3.5">
                  <BadgeCheck className="w-5 h-5 text-primary-green shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-bold text-sm text-text-charcoal">{item.name}</h4>
                    <p className="text-xs text-text-muted font-mono mt-0.5">{item.authority}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Company metrics row */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 bg-surface-container-low p-8 rounded-2xl border border-border-sage/30">
          {METRICS.map((metric, i) => (
            <div key={i} className="text-center sm:text-left space-y-2">
              <span className="text-3xl md:text-4xl font-display font-bold text-primary-green">{metric.value}</span>
              <h4 className="text-sm font-semibold text-text-charcoal">{metric.label}</h4>
              <p className="text-xs text-text-muted leading-relaxed">{metric.description}</p>
            </div>
          ))}
        </div>

        {/* Trade and Logistics FAQ Accordion */}
        <div className="space-y-8 max-w-4xl mx-auto pt-8">
          <div className="text-center space-y-2">
            <h3 className="font-display text-2xl font-bold text-primary-green">
              B2B Trade & Ocean Logistics FAQs
            </h3>
            <p className="text-text-muted text-sm font-sans">
              Frequently discussed customs clearing, sample dispatch, and payment security benchmarks.
            </p>
          </div>

          {/* FAQ Search Bar */}
          <div className="max-w-xl mx-auto relative px-1">
            <div className="relative">
              <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-5 h-5 text-text-muted/80 pointer-events-none" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search FAQs by question, topic or answers..."
                className="w-full pl-11 pr-10 py-3 text-sm text-text-charcoal bg-white rounded-2xl border border-border-sage/50 focus:ring-2 focus:ring-primary-green/20 focus:border-primary-green outline-none shadow-sm transition-all placeholder:text-text-muted/60"
                id="faq-search-input"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery('')}
                  className="absolute right-3.5 top-1/2 -translate-y-1/2 p-1 rounded-full hover:bg-slate-100 text-text-muted hover:text-text-charcoal transition-colors"
                  title="Clear search"
                  id="faq-clear-search"
                >
                  <X className="w-4 h-4" />
                </button>
              )}
            </div>
            
            {searchQuery && (
              <div className="text-center mt-3 animate-fadeIn">
                <span className="text-[11px] font-mono text-text-muted bg-surface-ice border border-border-sage/30 px-3 py-1 rounded-full inline-block">
                  Showing <strong className="text-primary-green font-bold">{filteredFaqs.length}</strong> matching {filteredFaqs.length === 1 ? 'question' : 'questions'}
                </span>
              </div>
            )}
          </div>

          <div className="space-y-3">
            {filteredFaqs.length === 0 ? (
              <div className="bg-surface-ice border border-dashed border-border-sage/40 rounded-2xl p-10 text-center space-y-3 shadow-inner animate-fadeIn">
                <HelpCircle className="w-8 h-8 text-spice-gold mx-auto opacity-70" />
                <p className="text-sm text-text-muted">
                  No FAQs found matching &ldquo;<span className="font-semibold text-text-charcoal">{searchQuery}</span>&rdquo;
                </p>
                <button
                  onClick={() => setSearchQuery('')}
                  className="text-xs font-bold text-primary-green underline hover:text-primary-green/80 cursor-pointer"
                >
                  Reset search filters
                </button>
              </div>
            ) : (
              filteredFaqs.map((faq) => {
                const isOpen = activeFaqId === faq.id;
                return (
                  <div 
                    key={faq.id} 
                    className="bg-white rounded-2xl border border-border-sage/40 overflow-hidden shadow-sm transition-all"
                  >
                    <button
                      onClick={() => toggleFaq(faq.id)}
                      className="w-full flex justify-between items-center p-6 text-left hover:bg-surface-container-low/40 transition-colors"
                    >
                      <div className="flex gap-3 items-center">
                        <HelpCircle className="w-5 h-5 text-[#fe932c] shrink-0" />
                        <span className="font-semibold text-text-charcoal text-sm md:text-base pr-8">
                          {faq.question}
                        </span>
                      </div>
                      <ChevronDown className={`w-5 h-5 text-primary-green transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`} />
                    </button>
                    
                    {isOpen && (
                      <div className="px-6 pb-6 pt-1 text-sm text-text-muted leading-relaxed border-t border-border-sage/10 bg-surface-ice/50 font-sans">
                        <p>{faq.answer}</p>
                        <div className="mt-3 flex gap-2">
                          <span className="text-[10px] bg-primary-green-light text-primary-green px-2 py-0.5 font-mono font-bold uppercase rounded-md">
                            Topic: {faq.category}
                          </span>
                          <span className="text-[10px] bg-[#eff4ff] text-primary-green px-2 py-0.5 font-mono font-bold uppercase rounded-md">
                            Compliance Standardized
                          </span>
                        </div>
                      </div>
                    )}
                  </div>
                );
              })
            )}
          </div>
        </div>

      </div>
    </section>
  );
}
