import React from 'react';
import { motion } from 'motion/react';
import { STAGES } from '../data';
import { ShieldCheck, Truck, Sparkles, Award, FileText, BadgeCheck, CheckCircle2, Globe } from 'lucide-react';

export default function JourneySection() {
  return (
    <section className="py-20 bg-white" id="our-journey-section">
      <div className="max-w-7xl mx-auto px-6 md:px-16 space-y-24">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <span className="text-xs font-bold font-mono text-spice-gold uppercase tracking-widest bg-spice-gold-light/40 px-3.5 py-1 rounded-full">
            Uncompromising Standards
          </span>
          <h2 className="text-3xl md:text-5xl font-display font-bold text-primary-green tracking-tight">
            Our Farm-to-Export Journey
          </h2>
          <p className="text-text-muted font-sans text-base md:text-lg">
            We operate a unified, fully traceable value chain connecting local agricultural stewardship and micro-farmers with sophisticated global storage and direct-ocean shipping.
          </p>
        </div>

        {/* ================= STAGE 01 SOURCE ================= */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7 }}
          className="space-y-8"
        >
          {/* Header row */}
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 border-b border-border-sage pb-4">
            <div>
              <span className="text-spice-gold font-mono font-bold text-xs uppercase tracking-widest block mb-1">STAGE 01</span>
              <h3 className="text-2xl md:text-3xl font-display font-bold text-primary-green">
                Sustainable Sourcing
              </h3>
            </div>
            <p className="text-text-muted text-sm md:text-base max-w-md">
              We partner directly with local multi-generational farmers who employ traditional, biochemical-free cultivation in biodiversity-rich spice gardens.
            </p>
          </div>

          {/* Grid layout exactly matching image */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
            <div className="md:col-span-8 group relative overflow-hidden rounded-2xl h-[450px] shadow-md hover:shadow-xl transition-all duration-300">
              <img 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" 
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuAl8wjP1eYwQfknHx88KHuhoNw_dnoNGlwmvkDbjh2D0FoVexwyX1VccBbAaYzRc3jYQAzWPzlvrA0uFdUTACqIqEyumGPU_AeacwwJZZAanaJ03x2R9uulMMjBxpR1g4Mq-UKXATzY3NhcHL3S4ql5J7dafTDjca8eYTQtC5_yDb8FZmnm8o22adF88zvdlytk5rUWUcdG0Zm3YRQapzu97JIERQS42r3Ker-4anLPDzdI93gnX5rzMCR5DrbASxRNr3gsFwR-izk"
                alt="Macro green cardamom pods" 
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-neutral-dark/80 via-transparent to-transparent" />
              <div className="absolute bottom-6 left-6 right-6">
                <span className="text-xs uppercase font-semibold font-mono text-[#a8e7c5] tracking-widest block mb-1">ORIGIN REGISTERED</span>
                <p className="text-lg font-bold text-white tracking-wide">Traditional Cardamom Groves, Kerala</p>
              </div>
            </div>

            <div className="md:col-span-4 group relative overflow-hidden rounded-2xl h-[450px] shadow-md hover:shadow-xl transition-all duration-300">
              <img 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" 
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuB7GnZtqrqvntfawyEhzApmz3L2wgmUbdp942pKuQ4KSTEtMZh6q6tTu8gRZDKLRLRjK4A18bh2liEP9Fi6GlbniGLDhsOsfcxOfa6cQVxhlMsM1tmf4uz8wVadI7P4E_-gVKWsb9xfI8qY1lHtYnN_w4cFXGLxzue5zhlHwj4r1malzrs5vfYaACjkTB9d5_pT4mtNpqqrGLz-ain1Gy7ujeLOcqaG2uluYolmDKltuRf3YpEIC5i2oTU6v6-wIzJRyuKEGBO-4p4"
                alt="Areca palm plantation in Karnataka" 
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-neutral-dark/80 via-transparent to-transparent" />
              <div className="absolute bottom-6 left-6 right-6">
                <span className="text-xs uppercase font-semibold font-mono text-[#ffdcc3] tracking-widest block mb-1">SUSTAINABLE HARVESTS</span>
                <p className="text-lg font-bold text-white tracking-wide">Areca Palm Plantations</p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* ================= STAGE 02 QUALITY ================= */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7 }}
          className="space-y-8"
        >
          {/* Header row */}
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 border-b border-border-sage pb-4">
            <div>
              <span className="text-spice-gold font-mono font-bold text-xs uppercase tracking-widest block mb-1">STAGE 02</span>
              <h3 className="text-2xl md:text-3xl font-display font-bold text-primary-green">
                Quality Custody
              </h3>
            </div>
            <p className="text-text-muted text-sm md:text-base max-w-md">
              Rigorous physical evaluation for humidity benchmarks, essential elements, and microbiological safety levels guarantees the finest exports.
            </p>
          </div>

          {/* Sizing matches image */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
            <div className="md:col-span-4 flex flex-col gap-4">
              <div className="group relative overflow-hidden rounded-2xl h-[280px] shadow-inner border border-border-sage">
                <img 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" 
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuCIBjWVf4W-qtqWbIGX1EXlX1HWiUhXgcW6-_OK145TI_usIbcnJaeHi9ah-DKA93gLKNO4_7Cc8ubvNkCXTbaDkysWJoMg-Cg7ReSayLCPiWqhEN4ue-dUfTkfRN27yaBfbn-8sETH5Ucx6McN-ZdwMNkQKbCg0H3Tav5hlMTqQXybpnCOYC031Jr5sdcshYKUgf0XrSgh0C-bGDXSakEYFVEyqRaW_m4QCg2NBIhtfJAaUdAf3xgJL5FmeRPPzdrAxSexh3331XY"
                  alt="Specialist analyzing spice sample" 
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="p-5 bg-[#eff4ff] rounded-2xl border border-[#d0dbed]">
                <h4 className="font-display font-semibold text-lg text-primary-green mb-1">
                  Purity Analysis
                </h4>
                <p className="text-sm text-text-muted font-sans leading-relaxed">
                  Chromatography tests and spectro-photometric analyses verify volatile oil contents and ensure pristine, toxin-free inputs.
                </p>
              </div>
            </div>

            <div className="md:col-span-8 group relative overflow-hidden rounded-2xl h-[395px] md:h-full shadow-md">
              <img 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-103" 
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuCPVA0w37OUA3m31Nno1N3d_K8Y5oBZYUSATxMguvF2Z7bkeIztSretsmz1yq_S0YguB7p9w3guvPdmTd65rhFHfGtWdQzfwqaHYjUP9Y0jmyB4d9cXjP_q9jjGHoffF7L5LtuzOiriOmjMnqh9Xhr6Z6-G0RaYa5JkT9Xp7TMvpo-L1t0o3tzCcOlSsun-xW8xtj8F_PP9b1gXUxpH6up0RpzS19vLt12qbu1Vc_wsZT5F2oMJXNP8vx9w_AxH45VGiwaChRDJoVk"
                alt="Precision spice conveyor sorting" 
                referrerPolicy="no-referrer"
              />
              <div className="absolute top-4 right-4 bg-primary-green text-white px-3.5 py-1.5 rounded-full font-mono text-xs font-semibold tracking-wider uppercase border border-white/20 shadow-md">
                FDA Certified Lab
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-neutral-dark/85 via-transparent to-transparent" />
              <div className="absolute bottom-6 left-6 right-6">
                <p className="text-xl font-bold font-display text-white tracking-wide">Multi-tier Inspection Process</p>
                <p className="text-xs text-neutral-light/80 font-sans mt-1">Every custom batch is documented, serialised, and logged for 100% downstream traceability.</p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* ================= STAGE 03 ECO-PROCESSING ================= */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7 }}
          className="p-8 md:p-12 bg-surface-container-low rounded-3xl border border-border-sage/40 space-y-8"
        >
          {/* Header row */}
          <div>
            <span className="text-spice-gold font-mono font-bold text-xs uppercase tracking-widest block mb-1">STAGE 03</span>
            <h2 className="text-2xl md:text-3xl font-display font-semibold text-primary-green mt-1">
              Eco-Friendly Processing
            </h2>
          </div>

          {/* 4 subcards matching exactly the 4 pictures provided */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            
            {/* Sun Drying */}
            <div className="group cursor-pointer space-y-3">
              <div className="aspect-[4/5] rounded-xl overflow-hidden relative shadow-sm hover:shadow-lg transition-all duration-300">
                <img 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" 
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuDbm_UjgbeK86tCwk-ovtx0JaMlFdmqpEdCcX7R-LGvwJiVJ_eEysTj6_uh3sPFdApQli-4igz_IgL5RIJhcvbN64odWmp6Drwe2o-A99_u6DVWbwITelgsHhjE3zEtQr8eFEgfyCbP9m3-9Vbjw22opFEbWZWRRu_m1ENRHfSN06MlvHsO9UCfXmOr5ml9xKXlgKb4ifXDIyPcBRLQmzyyaD-tg0b8SaLN3RsjDdTZ3Ci1RZreOvVu5x0w5y7xw9cWVjYWsDFh1E8"
                  alt="Areca leaf washing/drying" 
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-4 text-white">
                  <p className="font-mono text-xs font-bold uppercase tracking-wider text-[#ffdcc3]">Stage 03.1</p>
                  <p className="font-display font-semibold text-sm">Natural Sun Drying</p>
                </div>
              </div>
              <p className="text-sm font-semibold text-primary-green block px-1">Solar-assisted moisture reduction</p>
            </div>

            {/* UV Sterilisation */}
            <div className="group cursor-pointer space-y-3">
              <div className="aspect-[4/5] rounded-xl overflow-hidden relative shadow-sm hover:shadow-lg transition-all duration-300">
                <img 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" 
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuDLKeBWL0iqa2ARdaLEnhMBVJKvYYZaX33y2fA94O0XEnPsng58FSvmaBRrpHueWHk1r83sW4ujbdQfutNI6ACm6574aZYUe3i7Klgmuc-apQuWeGily37SYtL92KYVYtuCDGi6FzhIs_v2Xc4SGDAGWpvGZBwFPRIbjBfjeOIJ5uKlTjiY6V4oGxweFsOsBAnxhRhYktzTPPQJD8ZoWQjme2VXQZbmAr1nwfKHT6aw0AAsdC5UQ_7BpiOyEEV9TUIMuwKxYabjI2Y"
                  alt="Ultraviolet light compartment steriliser" 
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-4 text-white">
                  <p className="font-mono text-xs font-bold uppercase tracking-wider text-[#ffdcc3]">Stage 03.2</p>
                  <p className="font-display font-semibold text-sm">UV Sterilization</p>
                </div>
              </div>
              <p className="text-sm font-semibold text-primary-green block px-1">Non-chemical microbial control</p>
            </div>

            {/* Heat Pressed Plate */}
            <div className="group cursor-pointer space-y-3">
              <div className="aspect-[4/5] rounded-xl overflow-hidden relative shadow-sm hover:shadow-lg transition-all duration-300">
                <img 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" 
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuB58xK8Ju-nFVb7BbQQchjkMZ2vyB6Qq_IAwBnQqrTpK7eMFYEEb17xyfdu8X5l5biZYRa0xb5dzhx3PKS64WaUUjbfXeyPdDAB8MszmroXo1avBiML7Pfh8BwutQLFtyKVmC4cDguCiANneTOmcy9xJz5czLvdo-NF6Bkfb_W9eJGCZdFMaLbMlOW5SLwkyumU-HZpGs-5CjmCPh1eOtQeM1-4WqtiEV8AuHl3ZTaaF2J8NaT1xsy1DOMklvYtDWNthiqk5aHEND8"
                  alt="High quality finished Areca Plates stacked" 
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-4 text-white">
                  <p className="font-mono text-xs font-bold uppercase tracking-wider text-[#ffdcc3]">Stage 03.3</p>
                  <p className="font-display font-semibold text-sm">Precision Molding</p>
                </div>
              </div>
              <p className="text-sm font-semibold text-primary-green block px-1">Heat-pressed without binders</p>
            </div>

            {/* Temperature Controlled Storage */}
            <div className="group cursor-pointer space-y-3">
              <div className="aspect-[4/5] rounded-xl overflow-hidden relative shadow-sm hover:shadow-lg transition-all duration-300">
                <img 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" 
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuD2V4BGSSXIAOl57fUGDOiHx47ZgJNEapq4FPE9aTK3ws-Sn31yeJqqXDQ03ogeJ7A4ouZfVf4s1-7VjC7Zot8zkUkbaTTetNyzcxY-OqqUL-n98KC9ojbFVastS2F2691E8Y4Z_xLE1Iae5yVZOYwJf_Alu9zfteZEH_JHRrSe-or3mwZg4TND2ctnCZw3ua_RNAlybfpCUpXw1zNdXN6MTevEL5Zs76OQSnv2J8TAPhnVyTeWErHhXbKZJ-V5tdvqzqcNR3a2lsY"
                  alt="Silos and storage systems for spices" 
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-4 text-white">
                  <p className="font-mono text-xs font-bold uppercase tracking-wider text-[#ffdcc3]">Stage 03.4</p>
                  <p className="font-display font-semibold text-sm">Controlled Storage</p>
                </div>
              </div>
              <p className="text-sm font-semibold text-primary-green block px-1">Flavor preservation systems</p>
            </div>

          </div>
        </motion.div>

        {/* ================= STAGE 04 LOGISTICS ================= */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7 }}
          className="space-y-8 animate-fadeIn"
        >
          {/* Header row */}
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 border-b border-border-sage pb-4 font-sans">
            <div>
              <span className="text-spice-gold font-mono font-bold text-xs uppercase tracking-widest block mb-1">STAGE 04</span>
              <h3 className="text-2xl md:text-3xl font-display font-bold text-primary-green">
                Global Logistics
              </h3>
            </div>
            <p className="text-text-muted text-sm md:text-base max-w-md">
              From our doorstep to your port of destination, we handle physical packaging parameters, custom trade compliance documents, and tracking.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-stretch">
            {/* Cargo Cranes twilight image */}
            <div className="relative group overflow-hidden rounded-2xl min-h-[420px] shadow-lg flex items-center justify-center">
              <img 
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-103" 
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuChUBsKTpYDJWR8aoCMWe_NORAixPB6DFfN0tCQX3PGrPEq7ByzX_UQzdZbuN3cX-pvlBlIxAv6JhIZ1hGgMZwLh6tkIhZHWEQTpU8m7qrp_xJvaAqlXdwEz57xd97vcomqzxIwYMmuZzxazEHQu2ZLEd5VCuOfoTxlD0BLKslejwBrf153ziUekOONS937W6ZsRsjZZQ2DkEpqhNDPIi6TE4YKK7jAbsHMa4TtBOQWAnDggm_OZwOMlxOXtMawj7nFw_Mk0JvN_RQ" 
                alt="Twilight seaport cargo transit container hubs"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-neutral-dark/45" />
              
              <div className="relative z-10 text-center text-white px-6 py-10 space-y-4">
                <div className="w-16 h-16 rounded-full bg-white/20 hover:bg-white/35 backdrop-blur-md mx-auto flex items-center justify-center border border-white/20 shadow-xl transition-all duration-300">
                  <Globe className="w-8 h-8 text-[#ffdcc3]" />
                </div>
                <h4 className="text-2xl md:text-3xl font-display font-bold tracking-tight">
                  Shipping to 40+ Countries
                </h4>
                <p className="text-sm text-neutral-light/80 font-sans max-w-sm mx-auto">
                  Seamless export routes covering Europe, North America, Middle East, and APAC with secure custom bonds.
                </p>
              </div>
            </div>

            {/* List side */}
            <div className="flex flex-col justify-between gap-4">
              
              {/* Packaging card */}
              <div className="bg-[#e6eeff] hover:bg-[#dee9fc] hover:shadow transition-all p-6 rounded-2xl flex gap-4 border border-border-sage/20">
                <div className="w-12 h-12 rounded-xl bg-primary-green flex items-center justify-center text-white shrink-0 shadow-md">
                  <ShieldCheck className="w-6 h-6" />
                </div>
                <div className="space-y-1">
                  <h4 className="font-display font-semibold text-lg text-primary-green">Vacuum-Sealed Packaging</h4>
                  <p className="text-sm text-text-muted leading-relaxed font-sans">
                    Industrial-grade multi-barrier humidity protectors, gas-flush vacuum pouches, and robust moisture-proof liners protecting premium spice aromatics.
                  </p>
                </div>
              </div>

              {/* Documentation card */}
              <div className="bg-[#e6eeff] hover:bg-[#dee9fc] hover:shadow transition-all p-6 rounded-2xl flex gap-4 border border-border-sage/20 font-sans">
                <div className="w-12 h-12 rounded-xl bg-primary-green flex items-center justify-center text-white shrink-0 shadow-md">
                  <FileText className="w-5 h-5" />
                </div>
                <div className="space-y-1">
                  <h4 className="font-display font-semibold text-lg text-primary-green">Seamless Certification</h4>
                  <p className="text-sm text-text-muted leading-relaxed">
                    SGS / Bureau Veritas chemical reports, phytosanitary declarations, customs bill of ladings, country of origin certs, and COAs delivered on-time.
                  </p>
                </div>
              </div>

              {/* Port Tracking Card with active orange tint/highlight */}
              <div className="bg-[#eff4ff] hover:shadow-md border-2 border-spice-gold/40 p-6 rounded-2xl flex gap-4 transition-all">
                <div className="w-12 h-12 rounded-xl bg-spice-gold flex items-center justify-center text-white shrink-0 shadow-md">
                  <Truck className="w-5 h-5 text-spice-gold-light" />
                </div>
                <div className="space-y-1">
                  <h4 className="font-display font-semibold text-lg text-primary-green flex items-center gap-2">
                    Port-to-Port Tracking
                    <span className="text-[10px] bg-spice-gold text-white font-mono px-2 py-0.5 rounded-full uppercase tracking-widest font-bold">
                      ACTIVE
                    </span>
                  </h4>
                  <p className="text-sm text-text-muted leading-relaxed">
                    Hourly dynamic telemetry reports on container status, marine temperatures, and expected landing timings at the destination harbor buffer.
                  </p>
                </div>
              </div>

            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
