import React from 'react';
import { motion } from 'motion/react';
import { Globe, ShieldCheck, Award, ArrowUpRight } from 'lucide-react';

interface HeroProps {
  onLearnMore: () => void;
  onBrowseProducts: () => void;
}

export default function Hero({ onLearnMore, onBrowseProducts }: HeroProps) {
  return (
    <section className="relative min-h-[660px] lg:min-h-[730px] flex items-center overflow-hidden pt-20">
      {/* Background Image Container */}
      <div className="absolute inset-0 z-0">
        <img 
          className="w-full h-full object-cover object-center" 
          src="https://lh3.googleusercontent.com/aida-public/AB6AXuD87zhWvsqUmSXTYhWiUWyqr_bEvY5Tk-1K4SiwmjopmIGimyYqwkdN5J841FMBnNDCbAcIJaOM8hX4tlk-Gepv1tmFgSz53qRRPWEgNQ5Ix3k3VaL8zW4U7cBY781LjR__igKiTv7gLRGPl-TPRNrIAQk-8nE4MIU3u9qHUkyFLhE0wPzuV4uprGXbTwMQ2rZBrLfniWml6mjc3iw3yM91gsFnLS_HGvYnc4kOGY1zi-tGGBuNmtvpEGk55EMTSZEycV1SNpSj50k"
          alt="Lush, misty cardamom and areca palm agricultural valley" 
          referrerPolicy="no-referrer"
        />
        {/* Cinematic gradient shading */}
        <div className="absolute inset-0 bg-gradient-to-t from-neutral-dark/95 via-neutral-dark/45 to-neutral-dark/20" />
      </div>

      {/* Main Content Area */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-16 w-full text-white">
        <div className="max-w-3xl space-y-6">
          {/* Subtle B2B credential badge */}
          <motion.div 
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2.5 bg-primary-green/85 backdrop-blur-md px-4 py-1.5 rounded-full border border-primary-green-light/20 shadow-lg text-primary-gold"
          >
            <ShieldCheck className="w-4 h-4 text-primary-fixed" />
            <span className="text-xs uppercase tracking-wider font-semibold font-mono text-primary-fixed">
              Quality-Inspected & Certified B2B Trade Supply
            </span>
          </motion.div>

          {/* Heading */}
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight leading-tight"
          >
            Our Farm-to-Export Journey
          </motion.h1>

          {/* Tagline */}
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="text-lg md:text-xl text-neutral-light/90 max-w-2xl leading-relaxed font-sans"
          >
            Experience the meticulous path of our premium spices and areca products, from the sun-drenched groves of South India to the global stage. Sustainability and strict physical hygiene parameters at every step.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="flex flex-wrap gap-4 pt-3"
          >
            <button
              onClick={onLearnMore}
              className="px-8 py-3.5 rounded-full bg-primary-green text-white hover:bg-primary-green-hover shadow-xl font-medium text-sm flex items-center gap-2 transition-all active:scale-95 duration-200"
              id="hero-learn-more"
            >
              <span>Explore our Sourcing Stages</span>
              <ArrowUpRight className="w-4 h-4" />
            </button>
            <button
              onClick={onBrowseProducts}
              className="px-8 py-3.5 rounded-full bg-transparent text-white border border-white hover:bg-white/10 font-medium text-sm transition-all active:scale-95 duration-200"
              id="hero-browse-products"
            >
              Download Export Catalog
            </button>
          </motion.div>
        </div>

        {/* Floating Grid Specs Summary */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-6 bg-white/10 backdrop-blur-md rounded-2xl p-6 md:p-8 mt-16 border border-white/10 shadow-2xl"
        >
          <div className="space-y-1">
            <span className="block text-xs uppercase tracking-widest text-[#a8e7c5] font-mono font-medium">Spices Sourced</span>
            <span className="block text-2xl md:text-3xl font-display font-bold text-white">100% Raw</span>
            <span className="block text-xs text-neutral-light/70 font-sans">Standardized laboratory tested</span>
          </div>
          <div className="space-y-1">
            <span className="block text-xs uppercase tracking-widest text-[#ffd39e] font-mono font-medium">SGS Inspected</span>
            <span className="block text-2xl md:text-3xl font-display font-bold text-white">Zero Fillers</span>
            <span className="block text-xs text-neutral-light/70 font-sans">Pure whole & split grades</span>
          </div>
          <div className="space-y-1">
            <span className="block text-xs uppercase tracking-widest text-[#a8e7c5] font-mono font-medium">Biodegradability</span>
            <span className="block text-2xl md:text-3xl font-display font-bold text-white">100% Compost</span>
            <span className="block text-xs text-neutral-light/70 font-sans">Areca leaf products</span>
          </div>
          <div className="space-y-1">
            <span className="block text-xs uppercase tracking-widest text-[#ffd39e] font-mono font-medium">B2B Trade Route</span>
            <span className="block text-2xl md:text-3xl font-display font-bold text-white">40+ Ports</span>
            <span className="block text-xs text-neutral-light/70 font-sans">Global direct logistics</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
