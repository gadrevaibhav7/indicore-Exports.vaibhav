import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowUpRight } from 'lucide-react';
// @ts-ignore
import companyLogo from '../assets/images/company_logo_1779863648388.png';

interface HeaderProps {
  currentTab: string;
  setTab: (tab: string) => void;
}

export default function Header({ currentTab, setTab }: HeaderProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { label: 'Home', id: 'home' },
    { label: 'Products', id: 'products' },
    { label: 'Our Journey', id: 'journey' },
    { label: 'Why Choose Us', id: 'why' },
    { label: 'Contact Us', id: 'contact' },
  ];

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${
      scrolled 
        ? 'bg-white/95 backdrop-blur-md shadow-md py-4' 
        : 'bg-white/80 backdrop-blur-md shadow-sm py-5'
    }`}>
      <div className="max-w-7xl mx-auto px-6 md:px-16 flex justify-between items-center">
        {/* Brand logo */}
        <div 
          onClick={() => { setTab('home'); setIsOpen(false); }}
          className="flex items-center gap-3 cursor-pointer group"
          id="brand-logo"
        >
          <img 
            src={companyLogo} 
            alt="Indicore Exports Logo" 
            className="w-10 h-10 object-contain rounded-full border border-stone-200/60 bg-stone-50 group-hover:scale-105 transition-transform shadow-xs duration-300"
            referrerPolicy="no-referrer"
          />
          <span className="font-display text-xl md:text-2xl font-bold text-primary-green tracking-tight flex flex-col md:flex-row md:items-baseline">
            Indicore<span className="text-spice-gold font-sans font-medium text-xs tracking-widest uppercase md:ml-1 mt-0.5 md:mt-0">Exports</span>
          </span>
        </div>

        {/* Desktop nav menu */}
        <div className="hidden md:flex items-center gap-10">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => setTab(item.id)}
              className={`font-medium relative py-1 text-sm transition-all duration-200 ${
                currentTab === item.id 
                  ? 'text-primary-green font-bold' 
                  : 'text-text-muted hover:text-primary-green'
              }`}
              id={`nav-${item.id}`}
            >
              {item.label}
              {currentTab === item.id && (
                <span className="absolute bottom-0 left-0 w-full h-[2.5px] bg-primary-green rounded-full" />
              )}
            </button>
          ))}
        </div>

        {/* Main call to actions */}
        <div className="hidden md:flex items-center gap-4">
        </div>

        {/* Mobile menu trigger button */}
        <div className="md:hidden flex items-center">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="p-2 text-primary-green hover:bg-primary-green-light rounded-lg transition-colors"
            id="mobile-menu-trigger"
            aria-label="Toggle Menu"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile nav drawer */}
      {isOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-white border-b border-border-sage shadow-lg z-40 transition-all duration-200">
          <div className="flex flex-col p-6 gap-4">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => {
                  setTab(item.id);
                  setIsOpen(false);
                }}
                className={`text-left font-semibold py-2.5 px-4 rounded-lg transition-all ${
                  currentTab === item.id 
                    ? 'bg-primary-green-light text-primary-green' 
                    : 'text-text-muted hover:bg-surface-container-low hover:text-text-charcoal'
                }`}
                id={`mobile-nav-${item.id}`}
              >
                {item.label}
              </button>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}
