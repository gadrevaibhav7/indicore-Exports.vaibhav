import React from 'react';
import { ShieldAlert, HelpCircle } from 'lucide-react';
// @ts-ignore
import companyLogo from '../assets/images/company_logo_1779863648388.png';

interface FooterProps {
  setTab: (tab: string) => void;
}

export default function Footer({ setTab }: FooterProps) {
  return (
    <footer className="w-full bg-surface-container-highest/90 border-t border-border-sage/45 font-sans mt-20">
      <div className="max-w-7xl mx-auto px-6 md:px-16 py-12 flex flex-col md:flex-row justify-between items-start gap-12 text-sm">
        
        {/* Left branding text */}
        <div className="max-w-xs space-y-4">
          <div 
            onClick={() => setTab('home')}
            className="flex items-center gap-3 cursor-pointer group"
          >
            <img 
              src={companyLogo} 
              alt="Indicore Exports Logo" 
              className="w-12 h-12 object-contain rounded-full border border-stone-200/60 bg-stone-50 shadow-sm group-hover:scale-105 transition-transform duration-300"
              referrerPolicy="no-referrer"
            />
            <div className="font-display font-bold text-xl md:text-2xl text-primary-green tracking-tight">
              Indicore <span className="text-spice-gold font-sans font-medium text-xs tracking-widest block uppercase">Exports</span>
            </div>
          </div>
          <p className="text-text-muted text-xs md:text-sm leading-relaxed">
            Providing the world with premium Indian spices and eco-friendly areca food service solutions since 2014. Empowering smallholder micro-cooperatives.
          </p>
          
          {/* Social Media Branding Row */}
          <div className="space-y-1.5 pt-1">
            <span className="text-[10px] font-bold font-mono uppercase tracking-widest text-primary-green/90 block">
              Connect With Us
            </span>
            <div className="flex flex-wrap gap-2.5">
              
              {/* LinkedIn */}
              <a 
                href="https://www.linkedin.com/in/vaibhav-gadre-indicore?utm_source=share_via&utm_content=profile&utm_medium=member_android"
                target="_blank"
                rel="noreferrer"
                title="LinkedIn"
                className="w-8 h-8 rounded-full border border-border-sage/40 hover:border-blue-600 bg-white hover:bg-blue-50/20 text-text-muted hover:text-blue-600 flex items-center justify-center transition-all duration-200 shadow-sm"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.779-1.75-1.75s.784-1.75 1.75-1.75 1.75.779 1.75 1.75-.784 1.75-1.75 1.75zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                </svg>
              </a>

              {/* Instagram */}
              <a 
                href="https://www.instagram.com/indicore_exports?igsh=eThlczMyemdwbjVi"
                target="_blank"
                rel="noreferrer"
                title="Instagram"
                className="w-8 h-8 rounded-full border border-border-sage/40 hover:border-pink-600 bg-white hover:bg-pink-50/20 text-text-muted hover:text-pink-600 flex items-center justify-center transition-all duration-200 shadow-sm"
              >
                <svg className="w-4 h-4 fill-none stroke-current stroke-2" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                </svg>
              </a>

              {/* Facebook */}
              <a 
                href="https://www.facebook.com/share/18YcSvUheT/"
                target="_blank"
                rel="noreferrer"
                title="Facebook"
                className="w-8 h-8 rounded-full border border-border-sage/40 hover:border-blue-700 bg-white hover:bg-blue-50/10 text-text-muted hover:text-blue-700 flex items-center justify-center transition-all duration-200 shadow-sm"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"/>
                </svg>
              </a>

              {/* Twitter / X */}
              <a 
                href="https://x.com/indicore"
                target="_blank"
                rel="noreferrer"
                title="Twitter / X"
                className="w-8 h-8 rounded-full border border-border-sage/40 hover:border-neutral-900 bg-white hover:bg-neutral-50 text-text-muted hover:text-neutral-900 flex items-center justify-center transition-all duration-200 shadow-sm"
              >
                <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                </svg>
              </a>

              {/* WhatsApp Business Chat trigger */}
              <a 
                href="https://api.whatsapp.com/send?text=Hello%20Indicore%20Exports,%20I'm%2520interested%20in%20your%20B2B%20Sourcing%20proposals!"
                target="_blank"
                rel="noreferrer"
                title="WhatsApp Trade Desk"
                className="w-8 h-8 rounded-full border border-border-sage/40 hover:border-emerald-600 bg-white hover:bg-emerald-50/20 text-text-muted hover:text-emerald-600 flex items-center justify-center transition-all duration-200 shadow-sm"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.06 5.348 5.397.01 12.008.01c3.202.001 6.212 1.246 8.477 3.513 2.266 2.268 3.507 5.28 3.505 8.484-.004 6.657-5.34 11.997-11.953 11.997-2.005-.001-3.973-.502-5.731-1.456L0 24zm6.59-4.846c1.6.95 3.188 1.449 4.825 1.451 5.436 0 9.86-4.37 9.864-9.799.002-2.63-1.023-5.101-2.885-6.965C16.574 1.978 14.1 .953 11.477.953c-5.44 0-9.866 4.372-9.87 9.802 0 1.64.45 3.238 1.306 4.664l-.991 3.613 3.702-.971c1.37.818 2.87 1.25 4.37 1.25zM17.43 14.33c-.319-.16-1.89-.933-2.185-1.04-.294-.108-.508-.16-.723.16-.214.32-.83.1.04-1.015.11-.186.185-.508.08-.828-.107-.319-.933-2.246-1.28-3.085-.338-.813-.68-.702-.933-.715l-.797-.01c-.276 0-.726.104-1.107.52-.381.417-1.45 1.416-1.45 3.453 0 2.037 1.484 4.008 1.69 4.29.206.28 2.918 4.456 7.07 6.25 1.144.5 2.155.8 2.88 1.033 1.157.368 2.21.316 3.04.192.93-.14 1.89-.772 2.157-1.48.267-.707.267-1.313.188-1.438-.08-.125-.295-.2-.614-.36"/>
                </svg>
              </a>

            </div>
          </div>
        </div>

        {/* Dynamic section links */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-12 flex-1 md:flex-initial">
          <div className="flex flex-col gap-2.5">
            <span className="font-bold text-xs uppercase tracking-widest text-[#0e5138] font-mono">Information</span>
            <button 
              onClick={() => setTab('contact')}
              className="text-left text-xs font-semibold text-text-muted hover:text-spice-gold underline underline-offset-4 decoration-border-sage transition-all duration-200 cursor-pointer"
            >
              Privacy &amp; GDPR Policy
            </button>
            <button 
              onClick={() => setTab('why')}
              className="text-left text-xs font-semibold text-text-muted hover:text-spice-gold underline underline-offset-4 decoration-border-sage transition-all duration-200 cursor-pointer"
            >
              Trade Terms (Incoterms 2020)
            </button>
          </div>

          <div className="flex flex-col gap-2.5">
            <span className="font-bold text-xs uppercase tracking-widest text-[#0e5138] font-mono">Resources</span>
            <button 
              onClick={() => setTab('why')}
              className="text-left text-xs font-semibold text-text-muted hover:text-spice-gold underline underline-offset-4 decoration-border-sage transition-all duration-200"
            >
              Export Certifications
            </button>
            <button 
              onClick={() => setTab('journey')}
              className="text-left text-xs font-semibold text-text-muted hover:text-spice-gold underline underline-offset-4 decoration-border-sage transition-all duration-200"
            >
              Global Logistics
            </button>
          </div>

          <div className="flex flex-col gap-2.5">
            <span className="font-bold text-xs uppercase tracking-widest text-[#0e5138] font-mono">Trade Desk</span>
            <span className="text-xs text-text-muted">
              Mail: <a href="mailto:indicore55@gmail.com" className="hover:text-spice-gold font-medium underline underline-offset-4 decoration-border-sage">{`indicore55@gmail.com`}</a>
            </span>
            <span className="text-xs text-text-muted">
              Call: <a href="tel:+917208151825" className="hover:text-spice-gold font-medium underline underline-offset-4 decoration-border-sage">{`+91 7208151825`}</a>
            </span>
            <button 
              onClick={() => setTab('contact')}
              className="text-left text-xs font-bold text-primary-green hover:text-spice-gold transition-colors block pt-1"
            >
              Trade Inquiry Form &rarr;
            </button>
          </div>
        </div>

        {/* Copyright notice aligned on right */}
        <div className="w-full md:w-auto pt-6 md:pt-0 border-t md:border-t-0 border-border-sage/40 flex flex-col justify-between h-full text-xs text-text-muted font-mono leading-relaxed max-w-sm">
          <p className="text-right md:text-left">
            © 2026 Indicore Exports. All Rights Reserved. Premium Spices & Sustainable Areca Plates.
          </p>
          <div className="flex items-center gap-1.5 mt-3 text-text-muted justify-end md:justify-start">
            <ShieldAlert className="w-3.5 h-3.5 text-primary-green" />
            <span>GDPR, USDA Organic & Food Safe Certified B2B Partner</span>
          </div>
        </div>

      </div>
    </footer>
  );
}
