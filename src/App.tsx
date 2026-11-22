import React, { useState } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import JourneySection from './components/JourneySection';
import WhyChooseUs from './components/WhyChooseUs';
import ProductsSection from './components/ProductsSection';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';
import { motion, AnimatePresence } from 'motion/react';
import { ArrowUpRight, CheckCircle2, Award, Users, Anchor, Leaf } from 'lucide-react';

export default function App() {
  const [currentTab, setTab] = useState<string>('home');
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  const triggerToast = (msg: string) => {
    setToastMessage(msg);
    setTimeout(() => {
      setToastMessage(null);
    }, 3500);
  };

  // Handle CTA buttons triggering Catalog simulated download
  const handleDownloadCatalog = () => {
    triggerToast("📥 Commercial Spices & Plate Export Catalog downloaded successfully!");
  };

  const handleRequestSpecs = (itemName: string) => {
    triggerToast(`📄 ${itemName} specifications sheet downloaded successfully!`);
  };

  return (
    <div className="min-h-screen flex flex-col justify-between bg-surface-ice font-sans overflow-x-hidden antialiased">
      {/* Dynamic Floating Toast feedback */}
      <AnimatePresence>
        {toastMessage && (
          <motion.div 
            initial={{ opacity: 0, y: 50, x: "-50%" }}
            animate={{ opacity: 1, y: 0, x: "-50%" }}
            exit={{ opacity: 0, y: 30, x: "-50%" }}
            className="fixed bottom-8 left-1/2 -translate-x-1/2 z-[200] max-w-sm bg-primary-green hover:bg-primary-green-hover text-white px-5 py-3 rounded-2xl shadow-2xl flex items-center gap-3 border border-primary-green-light/10 font-sans"
          >
            <div className="w-2.5 h-2.5 rounded-full bg-spice-gold animate-ping shrink-0" />
            <span className="text-xs font-semibold tracking-wide leading-relaxed">{toastMessage}</span>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Sticky Top Nav Menu */}
      <Header currentTab={currentTab} setTab={setTab} />

      {/* Primary Screens Routing wrapper */}
      <main className="flex-grow pt-20">
        <AnimatePresence mode="wait">
          {currentTab === 'home' && (
            <motion.div
              key="home"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.4 }}
              className="space-y-20 pb-12"
            >
              {/* Giant sunrise plantations landscape banner */}
              <Hero 
                onLearnMore={() => {
                  setTab('journey');
                  window.scrollTo({ top: 100, behavior: 'smooth' });
                }} 
                onBrowseProducts={() => {
                  setTab('products');
                  window.scrollTo({ top: 100, behavior: 'smooth' });
                }} 
              />

              {/* Home highlights: Cooperative sustainable farming overview */}
              <section className="max-w-7xl mx-auto px-6 md:px-16 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
                <div className="lg:col-span-5 relative group overflow-hidden rounded-3xl h-[420px] shadow-lg">
                  <img 
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuAl8wjP1eYwQfknHx88KHuhoNw_dnoNGlwmvkDbjh2D0FoVexwyX1VccBbAaYzRc3jYQAzWPzlvrA0uFdUTACqIqEyumGPU_AeacwwJZZAanaJ03x2R9uulMMjBxpR1g4Mq-UKXATzY3NhcHL3S4ql5J7dafTDjca8eYTQtC5_yDb8FZmnm8o22adF88zvdlytk5rUWUcdG0Zm3YRQapzu97JIERQS42r3Ker-4anLPDzdI93gnX5rzMCR5DrbASxRNr3gsFwR-izk" 
                    alt="Direct cooperative sourcing Kerala cardamom" 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-103"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-neutral-dark/85 to-transparent p-6 text-white text-xs">
                    <p className="font-bold text-lg leading-snug">Grown in rich Western Ghats valleys</p>
                    <p className="opacity-80 mt-1 font-sans">Organic micro-climates preserve natural volatile oil density.</p>
                  </div>
                </div>

                <div className="lg:col-span-7 space-y-6">
                  <span className="text-xs font-bold font-mono text-spice-gold uppercase tracking-widest bg-spice-gold-light/40 px-3 py-1.5 rounded-full">
                    A True Agro-Heritage Model
                  </span>
                  <h2 className="text-3xl md:text-5xl font-display font-bold text-primary-green tracking-tight leading-tight">
                    Bridging Indian Smallholders with Global B2B Commerce
                  </h2>
                  <p className="text-text-muted leading-relaxed font-sans text-base">
                    For over a decade, Indicore Exports has integrated remote agricultural stewardship with highly optimized sea logistics. We eliminate layers of middlemen to support clean, bio-secure harvests of bold green cardamom, hot Malabar pepper, and organic finger turmeric.
                  </p>
                  
                  {/* Visual features bullets */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm font-sans">
                    <div className="flex gap-2.5 items-start">
                      <Users className="w-5 h-5 text-spice-gold mt-0.5 shrink-0" />
                      <div>
                        <h4 className="font-semibold text-text-charcoal leading-snug">Empowering Agrarian Cooperatives</h4>
                        <p className="text-xs text-text-muted mt-0.5">Sourced through multi-generational farming syndicates across India.</p>
                      </div>
                    </div>
                    <div className="flex gap-2.5 items-start">
                      <Leaf className="w-5 h-5 text-spice-gold mt-0.5 shrink-0" />
                      <div>
                        <h4 className="font-semibold text-text-charcoal leading-snug">Pesticide & Chemical-Free</h4>
                        <p className="text-xs text-[#404943] mt-0.5">Natural sunlight drying techniques keeping our soil footprint pristine.</p>
                      </div>
                    </div>
                  </div>

                  <div className="pt-3">
                    <button 
                      onClick={() => setTab('journey')}
                      className="inline-flex items-center gap-2 bg-primary-green hover:bg-primary-green-hover text-white px-7 py-3 rounded-full font-bold text-xs tracking-wider uppercase shadow-md transition-all active:scale-95 cursor-pointer"
                    >
                      <span>Explore Sourcing & Processing Stages</span>
                      <ArrowUpRight className="w-4 h-4 text-primary-fixed" />
                    </button>
                  </div>
                </div>
              </section>

              {/* Sample Preview grid highlighting key crops */}
              <section className="bg-surface-container-low py-16 border-t border-b border-border-sage/30">
                <div className="max-w-7xl mx-auto px-6 md:px-16 space-y-10">
                  <div className="text-center space-y-2">
                    <span className="text-xs font-bold font-mono text-primary-green uppercase tracking-widest">Selected Sourcing Focus</span>
                    <h3 className="text-2xl md:text-3.5xl font-display font-bold text-primary-green">
                      Premium Cardamom & Sustainable Tableware
                    </h3>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
                    {/* Crop Card 1 */}
                    <div className="bg-white p-5 rounded-2xl border border-border-sage/20 shadow-sm flex flex-col justify-between gap-5 group">
                      <div className="space-y-4">
                        <div className="aspect-[16/10] rounded-xl overflow-hidden bg-slate-100">
                          <img 
                            src="https://lh3.googleusercontent.com/aida-public/AB6AXuAl8wjP1eYwQfknHx88KHuhoNw_dnoNGlwmvkDbjh2D0FoVexwyX1VccBbAaYzRc3jYQAzWPzlvrA0uFdUTACqIqEyumGPU_AeacwwJZZAanaJ03x2R9uulMMjBxpR1g4Mq-UKXATzY3NhcHL3S4ql5J7dafTDjca8eYTQtC5_yDb8FZmnm8o22adF88zvdlytk5rUWUcdG0Zm3YRQapzu97JIERQS42r3Ker-4anLPDzdI93gnX5rzMCR5DrbASxRNr3gsFwR-izk" 
                            alt="Direct cooperative sourcing Kerala cardamom" 
                            className="w-full h-full object-cover group-hover:scale-103 transition-transform duration-500"
                            referrerPolicy="no-referrer"
                          />
                        </div>
                        <h4 className="font-display font-bold text-lg text-primary-green">AGEB Premium Sized Cardamom</h4>
                        <p className="text-xs text-text-muted leading-relaxed font-sans">
                          Washed with pure deepwell sanitised waters, dried inside solar-assisted ovens, and vacuum-sealed under multi-layered barrier pouches to preserve maximum therapeutic volatile essential oils.
                        </p>
                      </div>
                      <button 
                        onClick={() => handleRequestSpecs("AGEB Premium Sized Cardamom")}
                        className="text-xs font-bold text-[#904d00] hover:text-[#703c00] flex items-center gap-1.5 self-start"
                      >
                        <span>Request specifications sheet</span>
                        <ArrowUpRight className="w-4 h-4" />
                      </button>
                    </div>

                    {/* Crop Card 2 */}
                    <div className="bg-white p-5 rounded-2xl border border-border-sage/20 shadow-sm flex flex-col justify-between gap-5 group">
                      <div className="space-y-4">
                        <div className="aspect-[16/10] rounded-xl overflow-hidden bg-slate-100">
                          <img 
                            src="https://lh3.googleusercontent.com/aida-public/AB6AXuB58xK8Ju-nFVb7BbQQchjkMZ2vyB6Qq_IAwBnQqrTpK7eMFYEEb17xyfdu8X5l5biZYRa0xb5dzhx3PKS64WaUUjbfXeyPdDAB8MszmroXo1avBiML7Pfh8BwutQLFtyKVmC4cDguCiANneTOmcy9xJz5czLvdo-NF6Bkfb_W9eJGCZdFMaLbMlOW5SLwkyumU-HZpGs-5CjmCPh1eOtQeM1-4WqtiEV8AuHl3ZTaaF2J8NaT1xsy1DOMklvYtDWNthiqk5aHEND8" 
                            alt="Compostable areca leaf tableware" 
                            className="w-full h-full object-cover group-hover:scale-103 transition-transform duration-500"
                            referrerPolicy="no-referrer"
                          />
                        </div>
                        <h4 className="font-display font-bold text-lg text-primary-green">Gold Class Biodegradable Tableware</h4>
                        <p className="text-xs text-text-muted leading-relaxed font-sans">
                          Pressed carefully using sanitized leaf sheaths shed naturally by Areca palm groves. High resistance parameters for microwaves and cold freezers without binders or fake glues.
                        </p>
                      </div>
                      <button 
                        onClick={() => handleRequestSpecs("Gold Class Biodegradable Tableware")}
                        className="text-xs font-bold text-[#904d00] hover:text-[#703c00] flex items-center gap-1.5 self-start"
                      >
                        <span>Request specifications sheet</span>
                        <ArrowUpRight className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                </div>
              </section>

              {/* Ready to Partner B2B call to action */}
              <section className="bg-[#2d6a4f] text-white py-20 text-center relative overflow-hidden">
                <div className="absolute inset-0 z-0 opacity-10">
                  <div className="absolute -top-12 -left-12 w-64 h-64 rounded-full bg-white blur-3xl animate-pulse" />
                  <div className="absolute bottom-12 right-12 w-96 h-96 rounded-full bg-white blur-3xl animate-pulse" />
                </div>
                
                <div className="relative z-10 max-w-4xl mx-auto px-6 md:px-16 space-y-6">
                  <h2 className="text-3xl md:text-5xl font-display font-bold tracking-tight">
                    Ready to Partner with Excellence?
                  </h2>
                  <p className="text-[#a8e7c5] max-w-2xl mx-auto text-base md:text-lg">
                    Join our premier global network of buyers who prioritize raw hygiene sustainability and certified quality. Take advantage of custom packaging.
                  </p>
                  <div className="flex flex-col sm:flex-row justify-center gap-4 pt-4">
                    <button 
                      onClick={handleDownloadCatalog}
                      className="bg-[#0f5238] hover:bg-[#0a3b27] text-white font-bold py-3.5 px-8 rounded-full text-xs tracking-wider uppercase transition-all shadow-lg active:scale-95 font-sans cursor-pointer mx-auto"
                    >
                      Download Export Catalog
                    </button>
                  </div>
                </div>
              </section>

              {/* Secure Sea Port Logistics Gateway Key Photo Section */}
              <section className="max-w-7xl mx-auto px-6 md:px-16 pt-4" id="port-logistics-showcase">
                <div className="bg-white rounded-3xl border border-[#ece7dc] overflow-hidden shadow-sm">
                  <div className="grid grid-cols-1 lg:grid-cols-12">
                    
                    {/* Left text column */}
                    <div className="lg:col-span-5 p-8 md:p-12 space-y-6 flex flex-col justify-center">
                      <div className="space-y-2">
                        <span className="text-xs font-bold font-mono text-spice-gold uppercase tracking-widest block">
                          FOB & CIF Sea Port Channels
                        </span>
                        <h3 className="text-2xl md:text-3xl font-display font-bold text-primary-green tracking-tight leading-snug">
                          Global Maritime Export Interface
                        </h3>
                      </div>
                      
                      <p className="text-xs md:text-sm text-text-muted leading-relaxed font-sans">
                        Our processed spice cargos and certified areca leaf dinnerware containers depart daily from India's most advanced automated terminals, Nhava Sheva (INNSA1) and Mundra (INMUN1). We guarantee full vessel freight synchronization, temperature-regulated vacuum seals, and instant container tracking records.
                      </p>

                      <div className="border-t border-stone-100 pt-6 space-y-3">
                        <div className="flex items-center gap-3">
                          <div className="w-2.5 h-2.5 rounded-full bg-[#0f5238]" />
                          <span className="text-xs font-bold text-text-charcoal font-sans">Mundra (INMUN1) – West-Coast Terminal</span>
                        </div>
                        <div className="flex items-center gap-3">
                          <div className="w-2.5 h-2.5 rounded-full bg-[#0f5238]" />
                          <span className="text-xs font-bold text-text-charcoal font-sans">Nhava Sheva (INNSA1) – Jawaharlal Nehru Port</span>
                        </div>
                        <div className="flex items-center gap-3">
                          <div className="w-2.5 h-2.5 rounded-full bg-[#0f5238]" />
                          <span className="text-xs font-bold text-text-charcoal font-sans">100% Insured Sea Containers & Custom Packing</span>
                        </div>
                      </div>
                    </div>

                    {/* Right dynamic image column */}
                    <div className="lg:col-span-7 h-64 md:h-[380px] lg:h-full min-h-[300px] relative">
                      <img 
                        src="/src/assets/images/mundra_sea_port_logistics_1779868513059.png" 
                        alt="Mundra Sea Port Cargo Export Terminal Logistics" 
                        className="w-full h-full object-cover"
                        referrerPolicy="no-referrer"
                      />
                      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-transparent to-neutral-dark/30 mix-blend-multiply" />
                      <div className="absolute bottom-4 right-4 bg-white/90 backdrop-blur-xs px-3.5 py-1.5 rounded-lg border border-stone-200 text-[10px] font-mono font-bold text-[#0f5238] tracking-wider uppercase">
                        Indicore Shipping Gateway
                      </div>
                    </div>

                  </div>
                </div>
              </section>
            </motion.div>
          )}

          {currentTab === 'products' && (
            <motion.div
              key="products"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.35 }}
            >
              <ProductsSection />
            </motion.div>
          )}

          {currentTab === 'journey' && (
            <motion.div
              key="journey"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.35 }}
            >
              <JourneySection />
            </motion.div>
          )}

          {currentTab === 'why' && (
            <motion.div
              key="why"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.35 }}
            >
              <WhyChooseUs />
            </motion.div>
          )}

          {currentTab === 'contact' && (
            <motion.div
              key="contact"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.35 }}
            >
              <ContactSection />
            </motion.div>
          )}
        </AnimatePresence>
      </main>

      {/* Corporate footer links block */}
      <Footer setTab={setTab} />
    </div>
  );
}
