import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Check, 
  X, 
  Building2, 
  Mail, 
  User, 
  MapPin, 
  Globe, 
  CheckCircle,
  HardDrive,
  Leaf,
  Flame,
  ShieldCheck,
  Award,
  ArrowRight,
  AlertCircle,
  ExternalLink
} from 'lucide-react';
import {
  submitTradeInquiry,
  buildMailtoHref,
  type TradeInquiryInput,
  type TradeInquiryResult,
} from '../utils/inquiryClient';

interface InquiryForm {
  name: string;
  email: string;
  company: string;
  port: string;
  quantity: string;
  notes: string;
}

export default function ProductsSection() {
  const [activeInquiryItem, setActiveInquiryItem] = useState<{
    name: string;
    category: string;
    image: string;
    gradeText?: string;
  } | null>(null);

  const [submissionResult, setSubmissionResult] = useState<TradeInquiryResult | null>(null);
  const [submittedPayload, setSubmittedPayload] = useState<TradeInquiryInput | null>(null);
  const [submitting, setSubmitting] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [catalogNotice, setCatalogNotice] = useState<string | null>(null);
  const [formData, setFormData] = useState<InquiryForm>({
    name: '',
    email: '',
    company: '',
    port: '',
    quantity: '1000',
    notes: ''
  });

  const handleOpenInquiry = (itemName: string, category: string, image: string, gradeText?: string) => {
    setActiveInquiryItem({ name: itemName, category, image, gradeText });
    setSubmissionResult(null);
    setSubmittedPayload(null);
    setSubmitting(false);
    setErrorMessage(null);
  };

  const handleCloseInquiry = () => {
    setActiveInquiryItem(null);
    setSubmissionResult(null);
    setSubmittedPayload(null);
    setErrorMessage(null);
    setFormData({
      name: '',
      email: '',
      company: '',
      port: '',
      quantity: '1000',
      notes: ''
    });
  };

  const handleInquiryChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    if (errorMessage) setErrorMessage(null);
  };

  const handleInquirySubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!activeInquiryItem) return;

    setErrorMessage(null);
    if (!formData.name.trim() || !formData.email.trim() || !formData.company.trim() || !formData.port.trim()) {
      setErrorMessage("Please fill out all required fields (Name, Email, Company, and Destination Port).");
      return;
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email.trim())) {
      setErrorMessage("Please enter a valid business email address.");
      return;
    }

    const payload: TradeInquiryInput = {
      name: formData.name.trim(),
      email: formData.email.trim(),
      company: formData.company.trim(),
      inquiryType: activeInquiryItem.category,
      productName: activeInquiryItem.gradeText
        ? `${activeInquiryItem.name} (${activeInquiryItem.gradeText})`
        : activeInquiryItem.name,
      destinationPort: formData.port.trim(),
      quantity: formData.quantity.trim(),
      currencyTerms: formData.notes.trim(),
      message: `Quote request for ${activeInquiryItem.name}. Destination Port: ${formData.port.trim()}. Quantity: ${formData.quantity.trim() || 'Standard Trial MOQ'}. Terms/Notes: ${formData.notes.trim() || 'Standard FOB/CIF'}`,
      sourceForm: 'product_modal',
      agreedToTerms: true,
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
          : "Unable to dispatch inquiry right now. Please try again."
      );
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <section className="bg-white" id="exact-products-portfolio">
      
      {/* 1. Header Banner Hero Grid */}
      <div className="max-w-7xl mx-auto px-6 md:px-12 py-16 md:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Text Block */}
          <div className="lg:col-span-7 space-y-6">
            <span className="text-[#904d00] font-mono tracking-widest text-xs uppercase font-bold block">
              GLOBAL EXPORT STANDARDS
            </span>
            <h1 className="text-4xl md:text-[52px] font-display font-bold text-[#121c2a] leading-[1.1] tracking-tight">
              Our Premium Product Portfolio
            </h1>
            <p className="text-[#404943] font-sans text-base md:text-lg leading-relaxed max-w-2xl">
              Discover the essence of Indian agriculture through our curated selection of high-grade spices and eco-conscious lifestyle products, exported with integrity to the global market.
            </p>
          </div>

          {/* Right Image Block */}
          <div className="lg:col-span-5">
            <div className="relative aspect-[4/3] rounded-[32px] overflow-hidden shadow-lg border border-gray-100">
              <img 
                src="https://images.unsplash.com/photo-1596797038530-2c107229654b?q=80&w=800&auto=format&fit=crop" 
                alt="Indicore Premium Spices Selection Heap" 
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
          </div>

        </div>
      </div>

      {/* 2. Spices Section */}
      <div className="bg-[#fcfbf9] border-t border-[#f0ece3] py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          
          {/* Title & Description Container */}
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
            <div className="space-y-3 max-w-2xl">
              <h2 className="text-3xl font-display font-bold text-[#0f5238]">
                Aromatic Indian Spices
              </h2>
              <p className="text-[#404943] text-sm md:text-base leading-relaxed">
                Sourced directly from the spice heartlands of India, our products undergo rigorous quality checks for curcumin content, moisture levels, and purity.
              </p>
            </div>

            {/* ISO Certification Badge */}
            <div className="bg-white border border-[#e8dfcf] text-[#904d00] px-4 py-2.5 rounded-full flex items-center gap-2 text-xs font-mono font-bold tracking-wider uppercase shadow-sm self-start md:self-end">
              <Award className="w-4 h-4 text-spice-gold" />
              <span>ISO 22000 & HACCP CERTIFIED</span>
            </div>
          </div>

          {/* 3-Card Grid for Spices */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            
            {/* Card 1: Premium Turmeric */}
            <div className="bg-white rounded-2xl border border-[#ece7dc] overflow-hidden shadow-sm hover:shadow-md transition-all duration-300 flex flex-col h-full group">
              <div className="relative aspect-[4/3] overflow-hidden bg-gray-50 border-b border-[#ece7dc]">
                <img 
                  src="/src/assets/images/premium_turmeric_1779866562764.png" 
                  alt="Premium Turmeric" 
                  className="w-full h-full object-cover group-hover:scale-102 transition-transform duration-500"
                  referrerPolicy="no-referrer"
                />
                <span className="absolute top-4 left-4 inline-block bg-[#0f5238] text-white text-[10px] font-bold px-3 py-1.5 rounded-full uppercase tracking-wider font-mono shadow-sm">
                  5.5% Curcumin
                </span>
              </div>
              <div className="p-6 flex flex-col flex-1">
                <h3 className="font-display font-bold text-xl text-[#121c2a] mb-4">
                  Premium Turmeric
                </h3>
                
                {/* Specifications List */}
                <div className="space-y-3 text-sm flex-1 mb-6 border-t border-[#ece7dc]/50 pt-4">
                  <div className="flex items-center justify-between">
                    <span className="text-[#404943]/70 font-sans">Moisture</span>
                    <span className="text-[#121c2a] font-semibold">Max 10%</span>
                  </div>
                  <div className="h-px bg-gray-100" />
                  <div className="flex items-center justify-between">
                    <span className="text-[#404943]/70 font-sans">Grade</span>
                    <span className="text-[#121c2a] font-semibold">Nizamabad/Salem</span>
                  </div>
                </div>

                <button 
                  onClick={() => handleOpenInquiry("Premium Turmeric", "spices", "/src/assets/images/premium_turmeric_1779866562764.png", "5.5% Curcumin / Nizamabad")}
                  className="w-full py-3 px-4 rounded-xl border border-[#d1d5db] hover:border-[#904d00] text-[#121c2a] font-sans font-bold text-xs tracking-wider uppercase bg-white hover:bg-[#fcfbf9] transition-all text-center cursor-pointer"
                >
                  Inquire Now
                </button>
              </div>
            </div>

            {/* Card 2: Tellicherry Black Pepper */}
            <div className="bg-white rounded-2xl border border-[#ece7dc] overflow-hidden shadow-sm hover:shadow-md transition-all duration-300 flex flex-col h-full group">
              <div className="relative aspect-[4/3] overflow-hidden bg-gray-50 border-b border-[#ece7dc]">
                <img 
                  src="/src/assets/images/tellicherry_black_pepper_1779866718970.png" 
                  alt="Tellicherry Black Pepper" 
                  className="w-full h-full object-cover group-hover:scale-102 transition-transform duration-500"
                  referrerPolicy="no-referrer"
                />
                <span className="absolute top-4 left-4 inline-block bg-[#0f5238] text-white text-[10px] font-bold px-3 py-1.5 rounded-full uppercase tracking-wider font-mono shadow-sm">
                  Grade 550GL
                </span>
              </div>
              <div className="p-6 flex flex-col flex-1">
                <h3 className="font-display font-bold text-xl text-[#121c2a] mb-4">
                  Tellicherry Black Pepper
                </h3>
                
                {/* Specifications List */}
                <div className="space-y-3 text-sm flex-1 mb-6 border-t border-[#ece7dc]/50 pt-4">
                  <div className="flex items-center justify-between">
                    <span className="text-[#404943]/70 font-sans">Piperine</span>
                    <span className="text-[#121c2a] font-semibold">Min 4.0%</span>
                  </div>
                  <div className="h-px bg-gray-100" />
                  <div className="flex items-center justify-between">
                    <span className="text-[#404943]/70 font-sans">Origin</span>
                    <span className="text-[#121c2a] font-semibold">Malabar Coast</span>
                  </div>
                </div>

                <button 
                  onClick={() => handleOpenInquiry("Tellicherry Black Pepper", "spices", "/src/assets/images/tellicherry_black_pepper_1779866718970.png", "Grade 550GL / Malabar Sourced")}
                  className="w-full py-3 px-4 rounded-xl border border-[#d1d5db] hover:border-[#904d00] text-[#121c2a] font-sans font-bold text-xs tracking-wider uppercase bg-white hover:bg-[#fcfbf9] transition-all text-center cursor-pointer"
                >
                  Inquire Now
                </button>
              </div>
            </div>

            {/* Card 3: Green Cardamom */}
            <div className="bg-white rounded-2xl border border-[#ece7dc] overflow-hidden shadow-sm hover:shadow-md transition-all duration-300 flex flex-col h-full group">
              <div className="relative aspect-[4/3] overflow-hidden bg-gray-50 border-b border-[#ece7dc]">
                <img 
                  src="/src/assets/images/green_cardamom_1779866378325.png" 
                  alt="Green Cardamom" 
                  className="w-full h-full object-cover group-hover:scale-102 transition-transform duration-500"
                  referrerPolicy="no-referrer"
                />
                <span className="absolute top-4 left-4 inline-block bg-[#0f5238] text-white text-[10px] font-bold px-3 py-1.5 rounded-full uppercase tracking-wider font-mono shadow-sm">
                  8mm Bold
                </span>
              </div>
              <div className="p-6 flex flex-col flex-1">
                <h3 className="font-display font-bold text-xl text-[#121c2a] mb-4">
                  Green Cardamom
                </h3>
                
                {/* Specifications List */}
                <div className="space-y-3 text-sm flex-1 mb-6 border-t border-[#ece7dc]/50 pt-4">
                  <div className="flex items-center justify-between">
                    <span className="text-[#404943]/70 font-sans">Moisture</span>
                    <span className="text-[#121c2a] font-semibold">Max 12%</span>
                  </div>
                  <div className="h-px bg-gray-100" />
                  <div className="flex items-center justify-between">
                    <span className="text-[#404943]/70 font-sans">Variety</span>
                    <span className="text-[#121c2a] font-semibold">Alleppey Green</span>
                  </div>
                </div>

                <button 
                  onClick={() => handleOpenInquiry("Green Cardamom", "spices", "/src/assets/images/green_cardamom_1779866378325.png", "8mm Bold / Alleppey Green")}
                  className="w-full py-3 px-4 rounded-xl border border-[#d1d5db] hover:border-[#904d00] text-[#121c2a] font-sans font-bold text-xs tracking-wider uppercase bg-white hover:bg-[#fcfbf9] transition-all text-center cursor-pointer"
                >
                  Inquire Now
                </button>
              </div>
            </div>

          </div>

          {/* 4. Horizontal Products (Row 2 structure below Spices Grid) */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            
            {/* Horizontal Card 1: Dried Red Chili */}
            <div className="bg-white rounded-2xl border border-[#ece7dc] overflow-hidden flex flex-col md:flex-row shadow-sm hover:shadow-md transition-all duration-300 md:h-[220px]">
              
              {/* Left Image Section */}
              <div className="md:w-[45%] h-48 md:h-full shrink-0 relative bg-gray-50 border-b md:border-b-0 md:border-r border-[#ece7dc]">
                <img 
                  src="/src/assets/images/dried_red_chilli_1779866860493.png" 
                  alt="Dried Red Chili" 
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>

              {/* Right Content Section */}
              <div className="p-6 flex flex-col justify-between flex-1 gap-4">
                <div className="space-y-1.5">
                  <h3 className="font-display font-bold text-xl text-[#121c2a]">
                    Dried Red Chili
                  </h3>
                  <p className="text-[#404943] text-xs leading-relaxed line-clamp-2">
                    Export quality Guntur Sannam varieties with consistent SHU levels.
                  </p>
                  
                  {/* Badges container */}
                  <div className="flex flex-wrap gap-2 pt-1">
                    <span className="bg-[#e0f5ff] text-[#0284c7] text-[10px] font-bold px-2.5 py-1 rounded-md font-sans">
                      Stemless
                    </span>
                    <span className="bg-[#e0f5ff] text-[#0284c7] text-[10px] font-bold px-2.5 py-1 rounded-md font-sans">
                      Moisture: 10%
                    </span>
                  </div>
                </div>

                <button 
                  onClick={() => handleOpenInquiry("Dried Red Chili", "spices", "/src/assets/images/dried_red_chilli_1779866860493.png", "Stemless Guntur Sannam")}
                  className="bg-[#0f5238] hover:bg-[#0a3b27] text-white font-sans font-bold text-xs tracking-wider uppercase py-3 px-6 rounded-xl transition-all cursor-pointer active:scale-97 text-center block w-full md:w-auto self-start"
                >
                  Inquire Now
                </button>
              </div>

            </div>

            {/* Horizontal Card 2: Pure Cumin Seeds */}
            <div className="bg-white rounded-2xl border border-[#ece7dc] overflow-hidden flex flex-col md:flex-row shadow-sm hover:shadow-md transition-all duration-300 md:h-[220px]">
              
              {/* Left Image Section */}
              <div className="md:w-[45%] h-48 md:h-full shrink-0 relative bg-gray-50 border-b md:border-b-0 md:border-r border-[#ece7dc]">
                <img 
                  src="https://images.unsplash.com/photo-1509358271058-acd22cc93898?q=80&w=600&auto=format&fit=crop" 
                  alt="Pure Cumin Seeds" 
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>

              {/* Right Content Section */}
              <div className="p-6 flex flex-col justify-between flex-1 gap-4">
                <div className="space-y-1.5">
                  <h3 className="font-display font-bold text-xl text-[#121c2a]">
                    Pure Cumin Seeds
                  </h3>
                  <p className="text-[#404943] text-xs leading-relaxed line-clamp-2">
                    Machine cleaned, Grade A Jeera from the fields of Gujarat.
                  </p>
                  
                  {/* Badges container */}
                  <div className="flex flex-wrap gap-2 pt-1">
                    <span className="bg-[#e0f5ff] text-[#0284c7] text-[10px] font-bold px-2.5 py-1 rounded-md font-sans">
                      Purity: 99.5%
                    </span>
                    <span className="bg-[#e0f5ff] text-[#0284c7] text-[10px] font-bold px-2.5 py-1 rounded-md font-sans">
                      Europe Grade
                    </span>
                  </div>
                </div>

                <button 
                  onClick={() => handleOpenInquiry("Pure Cumin Seeds", "spices", "https://images.unsplash.com/photo-1509358271058-acd22cc93898?q=80&w=600&auto=format&fit=crop", "Grade A Singapore 99.5% Pure")}
                  className="bg-[#0f5238] hover:bg-[#0a3b27] text-white font-sans font-bold text-xs tracking-wider uppercase py-3 px-6 rounded-xl transition-all cursor-pointer active:scale-97 text-center block w-full md:w-auto self-start"
                >
                  Inquire Now
                </button>
              </div>

            </div>

            {/* Horizontal Card 3: Aromatic Jeera Powder */}
            <div className="bg-white rounded-2xl border border-[#ece7dc] overflow-hidden flex flex-col md:flex-row shadow-sm hover:shadow-md transition-all duration-300 md:h-[220px]">
              
              {/* Left Image Section */}
              <div className="md:w-[45%] h-48 md:h-full shrink-0 relative bg-gray-50 border-b md:border-b-0 md:border-r border-[#ece7dc]">
                <img 
                  src="/src/assets/images/premium_jeera_powder_1779867756589.png" 
                  alt="Aromatic Jeera Powder" 
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>

              {/* Right Content Section */}
              <div className="p-6 flex flex-col justify-between flex-1 gap-4">
                <div className="space-y-1.5">
                  <h3 className="font-display font-bold text-xl text-[#121c2a]">
                    Jeera Powder
                  </h3>
                  <p className="text-[#404943] text-xs leading-relaxed line-clamp-2">
                    Finely stone-ground Sortex-cleaned seeds preserving aromatic oils.
                  </p>
                  
                  {/* Badges container */}
                  <div className="flex flex-wrap gap-2 pt-1">
                    <span className="bg-[#e0f5ff] text-[#0284c7] text-[10px] font-bold px-2.5 py-1 rounded-md font-sans">
                      1.8% Volatile Oil
                    </span>
                    <span className="bg-[#e0f5ff] text-[#0284c7] text-[10px] font-bold px-2.5 py-1 rounded-md font-sans">
                      100% Pure
                    </span>
                  </div>
                </div>

                <button 
                  onClick={() => handleOpenInquiry("Aromatic Jeera Powder", "spices", "/src/assets/images/premium_jeera_powder_1779867756589.png", "Premium Fine Ground / Sortex Cleaned")}
                  className="bg-[#0f5238] hover:bg-[#0a3b27] text-white font-sans font-bold text-xs tracking-wider uppercase py-3 px-6 rounded-xl transition-all cursor-pointer active:scale-97 text-center block w-full md:w-auto self-start"
                >
                  Inquire Now
                </button>
              </div>

            </div>

          </div>

        </div>
      </div>

      {/* 5. Areca Dinnerware Products Section */}
      <div className="bg-[#f3f6ff] py-16 md:py-24 border-t border-[#dce3f6]">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          
          {/* Section Central Header */}
          <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
            <span className="text-[#904d00] font-mono tracking-widest text-xs uppercase font-bold block">
              SUSTAINABLE LIVING
            </span>
            <h2 className="text-3xl md:text-4xl font-display font-bold text-[#121c2a] leading-tight">
              Eco-Friendly Areca Palm Leaf Dinnerware
            </h2>
            <p className="text-[#404943] font-sans text-sm md:text-base leading-relaxed">
              100% natural, biodegradable, and compostable. Our dinnerware is made from naturally fallen palm leaves, involving no tree cutting.
            </p>
          </div>

          {/* 4 Feature Parameter Cards */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 px-2 mb-16">
            
            <div className="bg-white rounded-xl p-4 border border-[#e2e8f6] shadow-2xs flex items-center gap-3">
              <div className="bg-[#e6fcf1] text-[#0f5238] p-2 rounded-lg shrink-0">
                <HardDrive className="w-4 h-4" />
              </div>
              <span className="text-xs font-semibold text-[#121c2a] font-sans">Microwave Safe</span>
            </div>

            <div className="bg-white rounded-xl p-4 border border-[#e2e8f6] shadow-2xs flex items-center gap-3">
              <div className="bg-[#e6fcf1] text-[#0f5238] p-2 rounded-lg shrink-0">
                <Leaf className="w-4 h-4" />
              </div>
              <span className="text-xs font-semibold text-[#121c2a] font-sans">100% Compostable</span>
            </div>

            <div className="bg-white rounded-xl p-4 border border-[#e2e8f6] shadow-2xs flex items-center gap-3">
              <div className="bg-[#e6fcf1] text-[#0f5238] p-2 rounded-lg shrink-0">
                <Flame className="w-4 h-4" />
              </div>
              <span className="text-xs font-semibold text-[#121c2a] font-sans">Heat Resistant</span>
            </div>

            <div className="bg-white rounded-xl p-4 border border-[#e2e8f6] shadow-2xs flex items-center gap-3">
              <div className="bg-[#e6fcf1] text-[#0f5238] p-2 rounded-lg shrink-0">
                <ShieldCheck className="w-4 h-4" />
              </div>
              <span className="text-xs font-semibold text-[#121c2a] font-sans">Leak Proof</span>
            </div>

          </div>

          {/* 4-Column Tableware Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            
            {/* Plate 1: Round Plates */}
            <div className="bg-white rounded-2xl border border-[#e2e8f6] overflow-hidden flex flex-col justify-between shadow-xs hover:shadow-md transition-all duration-300">
              <div className="aspect-[1/1] overflow-hidden bg-gray-50 border-b border-gray-100">
                <img 
                  src="/src/assets/images/areca_round_plates_1779867044847.png" 
                  alt="Round Plates (10 inches)" 
                  className="w-full h-full object-cover hover:scale-103 transition-transform duration-500"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="p-5 space-y-4">
                <div className="space-y-1">
                  <span className="text-[#904d00] text-[10px] font-bold font-mono uppercase tracking-wider block">
                    Standard Size
                  </span>
                  <h3 className="font-display font-bold text-lg text-[#121c2a] leading-snug">
                    Round Plates (10")
                  </h3>
                </div>
                <button 
                  onClick={() => handleOpenInquiry("Round Plates (10\")", "areca", "/src/assets/images/areca_round_plates_1779867044847.png", "Standard Size (10-inch dinner)")}
                  className="w-full bg-[#0f5238] hover:bg-[#0a3b27] text-white py-3 px-4 rounded-xl font-bold font-sans text-xs uppercase tracking-wider transition-all text-center cursor-pointer active:scale-97"
                >
                  Inquire Now
                </button>
              </div>
            </div>

            {/* Plate 2: Square Plates */}
            <div className="bg-white rounded-2xl border border-[#e2e8f6] overflow-hidden flex flex-col justify-between shadow-xs hover:shadow-md transition-all duration-300">
              <div className="aspect-[1/1] overflow-hidden bg-gray-50 border-b border-gray-100">
                <img 
                  src="/src/assets/images/areca_square_plates_1779867203958.png" 
                  alt="Square Plates (8 inches)" 
                  className="w-full h-full object-cover hover:scale-103 transition-transform duration-500"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="p-5 space-y-4">
                <div className="space-y-1">
                  <span className="text-[#904d00] text-[10px] font-bold font-mono uppercase tracking-wider block">
                    Modern Look
                  </span>
                  <h3 className="font-display font-bold text-lg text-[#121c2a] leading-snug">
                    Square Plates (8")
                  </h3>
                </div>
                <button 
                  onClick={() => handleOpenInquiry("Square Plates (8\")", "areca", "/src/assets/images/areca_square_plates_1779867203958.png", "Modern Square Lunch (8-inch)")}
                  className="w-full bg-[#0f5238] hover:bg-[#0a3b27] text-white py-3 px-4 rounded-xl font-bold font-sans text-xs uppercase tracking-wider transition-all text-center cursor-pointer active:scale-97"
                >
                  Inquire Now
                </button>
              </div>
            </div>

            {/* Plate 3: Rectangular Platters */}
            <div className="bg-white rounded-2xl border border-[#e2e8f6] overflow-hidden flex flex-col justify-between shadow-xs hover:shadow-md transition-all duration-300">
              <div className="aspect-[1/1] overflow-hidden bg-gray-50 border-b border-gray-100">
                <img 
                  src="/src/assets/images/areca_rectangular_platters_1779867389232.png" 
                  alt="Rectangular Platters" 
                  className="w-full h-full object-cover hover:scale-103 transition-transform duration-500"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="p-5 space-y-4">
                <div className="space-y-1">
                  <span className="text-[#904d00] text-[10px] font-bold font-mono uppercase tracking-wider block">
                    Catering Pro
                  </span>
                  <h3 className="font-display font-bold text-lg text-[#121c2a] leading-snug">
                    Rectangular Platters
                  </h3>
                </div>
                <button 
                  onClick={() => handleOpenInquiry("Rectangular Platters", "areca", "/src/assets/images/areca_rectangular_platters_1779867389232.png", "Serving platters / Heavy Duty")}
                  className="w-full bg-[#0f5238] hover:bg-[#0a3b27] text-white py-3 px-4 rounded-xl font-bold font-sans text-xs uppercase tracking-wider transition-all text-center cursor-pointer active:scale-97"
                >
                  Inquire Now
                </button>
              </div>
            </div>

            {/* Plate 4: Deep Bowls */}
            <div className="bg-white rounded-2xl border border-[#e2e8f6] overflow-hidden flex flex-col justify-between shadow-xs hover:shadow-md transition-all duration-300">
              <div className="aspect-[1/1] overflow-hidden bg-gray-50 border-b border-gray-100">
                <img 
                  src="/src/assets/images/areca_deep_bowls_1779867563044.png" 
                  alt="Deep Bowls (6 inches)" 
                  className="w-full h-full object-cover hover:scale-103 transition-transform duration-500"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="p-5 space-y-4">
                <div className="space-y-1">
                  <span className="text-[#904d00] text-[10px] font-bold font-mono uppercase tracking-wider block">
                    Deep & Sturdy
                  </span>
                  <h3 className="font-display font-bold text-lg text-[#121c2a] leading-snug">
                    Deep Bowls (6")
                  </h3>
                </div>
                <button 
                  onClick={() => handleOpenInquiry("Deep Bowls (6\")", "areca", "/src/assets/images/areca_deep_bowls_1779867563044.png", "6-inch soup bowl premium")}
                  className="w-full bg-[#0f5238] hover:bg-[#0a3b27] text-white py-3 px-4 rounded-xl font-bold font-sans text-xs uppercase tracking-wider transition-all text-center cursor-pointer active:scale-97"
                >
                  Inquire Now
                </button>
              </div>
            </div>

          </div>

        </div>
      </div>

      {/* 6. Footer Call To Action Box (Banner block) */}
      <div className="bg-white py-16 px-6 md:px-12">
        <div className="max-w-6xl mx-auto">
          <div className="bg-[#0f5238] rounded-3xl p-8 md:p-12 text-center text-white relative overflow-hidden shadow-xl space-y-6">
            
            {/* Overlay glow/circles to mimic the clean curve design of the banner */}
            <div className="absolute top-0 right-0 w-80 h-80 bg-white/5 rounded-full -mr-16 -mt-16 pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-48 h-48 bg-white/5 rounded-full -ml-12 -mb-12 pointer-events-none" />

            <div className="relative z-10 space-y-4 max-w-3xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-display font-bold leading-tight">
                Ready to Elevate Your Supply Chain?
              </h2>
              <p className="text-[#a8e7c5] text-sm md:text-base font-sans max-w-2xl mx-auto">
                Connect with our export division for bulk pricing, customized packaging, and global logistics solutions tailored to your market needs.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row justify-center items-center gap-4 relative z-10 pt-4">
              <button
                type="button"
                onClick={() => {
                  setCatalogNotice("Commercial Spices & Plate Export Catalog request noted — click Contact Sales Agent to receive the full PDF via email.");
                  setTimeout(() => setCatalogNotice(null), 5000);
                }}
                className="bg-[#a8e7c5] hover:bg-[#8fd8ad] text-[#0f5238] font-bold py-3.5 px-8 rounded-full text-xs tracking-wider uppercase transition-all shadow active:scale-95 font-sans cursor-pointer text-center w-full sm:w-auto"
              >
                Download Catalog
              </button>
              <button 
                onClick={() => handleOpenInquiry("General Sourcing Request", "general", "https://images.unsplash.com/photo-1596797038530-2c107229654b?q=80&w=800&auto=format&fit=crop", "All-In-One Port Logistics")}
                className="border border-white/60 hover:border-white hover:bg-white/10 text-white font-bold py-3.5 px-8 rounded-full text-xs tracking-wider uppercase transition-all active:scale-95 font-sans cursor-pointer text-center w-full sm:w-auto"
              >
                Contact Sales Agent
              </button>
            </div>
            {catalogNotice && (
              <p className="relative z-10 text-xs text-[#e6fcf1] bg-white/10 border border-white/20 rounded-xl px-4 py-2 max-w-lg mx-auto">
                {catalogNotice}
              </p>
            )}

          </div>
        </div>
      </div>

      {/* B2B Interactive Inquiry Dialog Modal */}
      <AnimatePresence>
        {activeInquiryItem && (
          <div className="fixed inset-0 z-50 overflow-y-auto flex items-center justify-center p-4">
            {/* Modal Ambient Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={handleCloseInquiry}
              className="absolute inset-0 bg-black/60 backdrop-blur-xs"
            />

            {/* Modal Body Container */}
            <motion.div
              initial={{ scale: 0.95, y: 15, opacity: 0 }}
              animate={{ scale: 1, y: 0, opacity: 1 }}
              exit={{ scale: 0.95, y: 15, opacity: 0 }}
              transition={{ duration: 0.25 }}
              className="relative w-full max-w-2xl bg-white rounded-3xl overflow-hidden shadow-2xl border border-gray-100 z-10"
            >
              
              {/* Header */}
              <div className="bg-[#0f5238] px-6 py-4 flex items-center justify-between text-white">
                <div className="flex items-center gap-3">
                  <Globe className="w-5 h-5 text-[#a8e7c5]" />
                  <div>
                    <span className="text-[10px] uppercase tracking-wider font-mono text-[#a8e7c5] block">B2B Sourcing Portal</span>
                    <h3 className="font-display font-bold text-base md:text-lg">Request Custom Soft Quote</h3>
                  </div>
                </div>
                <button
                  onClick={handleCloseInquiry}
                  className="p-1.5 rounded-full hover:bg-white/10 text-white transition-all cursor-pointer"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Form Content */}
              <div className="p-6 md:p-8 max-h-[75vh] overflow-y-auto">
                {!submissionResult ? (
                  <form onSubmit={handleInquirySubmit} noValidate className="space-y-4">
                    {errorMessage && (
                      <div
                        role="alert"
                        className="flex items-start gap-2 bg-red-50 border border-red-200 text-red-800 px-3.5 py-2.5 rounded-xl text-xs font-medium"
                      >
                        <AlertCircle className="w-4 h-4 text-red-600 shrink-0 mt-0.5" />
                        <span>{errorMessage}</span>
                      </div>
                    )}
                    
                    {/* Item indicator */}
                    <div className="flex items-center gap-4 bg-gray-50 p-4 rounded-xl border border-gray-200/50">
                      <img 
                        src={activeInquiryItem.image} 
                        alt={activeInquiryItem.name} 
                        className="w-16 h-16 object-cover rounded-lg border border-gray-200"
                        referrerPolicy="no-referrer"
                      />
                      <div>
                        {activeInquiryItem.gradeText && (
                          <span className="text-[10px] font-mono text-[#904d00] uppercase font-bold block">
                            {activeInquiryItem.gradeText}
                          </span>
                        )}
                        <h4 className="font-sans font-bold text-base text-[#121c2a] leading-tight">
                          {activeInquiryItem.name}
                        </h4>
                        <span className="text-xs text-gray-500 font-medium">Category: {activeInquiryItem.category === 'spices' ? 'Agriculture Spice' : 'Biodegradable Tableware'}</span>
                      </div>
                    </div>

                    {/* Inputs */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div className="space-y-1">
                        <label className="text-xs font-bold text-[#121c2a] flex items-center gap-1.5">
                          <User className="w-3.5 h-3.5 text-gray-400" />
                          <span>Your Name *</span>
                        </label>
                        <input
                          type="text"
                          name="name"
                          required
                          value={formData.name}
                          onChange={handleInquiryChange}
                          placeholder="e.g. Johnathan Miller"
                          className="w-full bg-[#fcfbf9] rounded-xl px-4 py-3 text-sm border border-gray-200 outline-none focus:border-[#0f5238] focus:bg-white transition-all font-sans"
                        />
                      </div>

                      <div className="space-y-1">
                        <label className="text-xs font-bold text-[#121c2a] flex items-center gap-1.5">
                          <Mail className="w-3.5 h-3.5 text-gray-400" />
                          <span>Business Email *</span>
                        </label>
                        <input
                          type="email"
                          name="email"
                          required
                          value={formData.email}
                          onChange={handleInquiryChange}
                          placeholder="buyer@importsupply.com"
                          className="w-full bg-[#fcfbf9] rounded-xl px-4 py-3 text-sm border border-gray-200 outline-none focus:border-[#0f5238] focus:bg-white transition-all font-sans"
                        />
                      </div>

                      <div className="space-y-1">
                        <label className="text-xs font-bold text-[#121c2a] flex items-center gap-1.5">
                          <Building2 className="w-3.5 h-3.5 text-gray-400" />
                          <span>Company Name *</span>
                        </label>
                        <input
                          type="text"
                          name="company"
                          required
                          value={formData.company}
                          onChange={handleInquiryChange}
                          placeholder="Global Food Imports LLC"
                          className="w-full bg-[#fcfbf9] rounded-xl px-4 py-3 text-sm border border-gray-200 outline-none focus:border-[#0f5238] focus:bg-white transition-all font-sans"
                        />
                      </div>

                      <div className="space-y-1">
                        <label className="text-xs font-bold text-[#121c2a] flex items-center gap-1.5">
                          <MapPin className="w-3.5 h-3.5 text-gray-400" />
                          <span>Destination Port *</span>
                        </label>
                        <input
                          type="text"
                          name="port"
                          required
                          value={formData.port}
                          onChange={handleInquiryChange}
                          placeholder="Rotterdam / Port of Hamburg"
                          className="w-full bg-[#fcfbf9] rounded-xl px-4 py-3 text-sm border border-gray-200 outline-none focus:border-[#0f5238] focus:bg-white transition-all font-sans"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div className="space-y-1">
                        <label className="text-xs font-bold text-[#121c2a]">
                          Target Order Quantity
                        </label>
                        <input
                          type="text"
                          name="quantity"
                          value={formData.quantity}
                          onChange={handleInquiryChange}
                          placeholder="e.g. 5 Metric Tons / 10,000 Pcs"
                          className="w-full bg-[#fcfbf9] rounded-xl px-4 py-3 text-sm border border-gray-200 outline-none focus:border-[#0f5238] focus:bg-white transition-all font-sans"
                        />
                      </div>

                      <div className="space-y-1">
                        <label className="text-xs font-bold text-[#121c2a]">
                          Preferred Currency / Terms
                        </label>
                        <input
                          type="text"
                          name="notes"
                          placeholder="CIF / FOB, USD / EUR pricing"
                          value={formData.notes}
                          onChange={handleInquiryChange}
                          className="w-full bg-[#fcfbf9] rounded-xl px-4 py-3 text-sm border border-gray-200 outline-none focus:border-[#0f5238] focus:bg-white transition-all font-sans"
                        />
                      </div>
                    </div>

                    <div className="pt-4 border-t border-gray-100 flex items-center justify-between gap-4">
                      <p className="text-[11px] text-gray-500 font-sans flex items-center gap-1">
                        <Check className="w-3.5 h-3.5 text-green-600 shrink-0" />
                        <span>SGS Inspected Lab Compliance Guaranteed</span>
                      </p>
                      
                      <button
                        type="submit"
                        disabled={submitting}
                        className="bg-[#0f5238] hover:bg-[#0a3b27] disabled:bg-gray-300 text-white font-bold px-6 py-3 rounded-xl text-xs uppercase tracking-wider transition-all cursor-pointer flex items-center justify-center gap-1.5 shadow"
                      >
                        {submitting ? (
                          <>
                            <div className="w-3 h-3 border-2 border-white border-t-transparent rounded-full animate-spin" />
                            <span>Dispatching Sourcing Alert...</span>
                          </>
                        ) : (
                          <>
                            <span>Submit Sourcing Inquiry</span>
                            <ArrowRight className="w-3.5 h-3.5" />
                          </>
                        )}
                      </button>
                    </div>

                  </form>
                ) : (
                  /* Success */
                  <div className="py-8 text-center space-y-6">
                    <div className="w-14 h-14 bg-green-50 text-green-600 rounded-full flex items-center justify-center mx-auto border border-green-200">
                      <CheckCircle className="w-8 h-8" />
                    </div>
                    
                    <div className="space-y-2">
                      <h3 className="font-display font-bold text-xl text-[#121c2a]">
                        {submissionResult.emailSent ? 'Sourcing Inquiry Sent to Email!' : 'Sourcing Inquiry Logged'}
                      </h3>
                      <p className="text-gray-500 text-sm max-w-md mx-auto">
                        Thank you, <span className="font-semibold text-black">{submittedPayload?.name}</span>. Your bulk trade request for <span className="font-bold text-[#0f5238]">{activeInquiryItem.name}</span> has been logged under ID <span className="font-mono text-[#904d00] font-bold bg-[#ffdcc3] px-1.5 py-0.5 rounded text-xs">{submissionResult.referenceId}</span>.
                      </p>
                      <p className="text-xs text-[#0f5238] font-medium max-w-md mx-auto">
                        {submissionResult.statusMessage}
                      </p>
                    </div>

                    <div className="bg-[#f3f6ff] p-4 rounded-xl text-xs font-mono text-left max-w-md mx-auto space-y-1.5 text-gray-700 border border-[#d9e3f6]">
                      <div><span className="text-gray-400">Importer:</span> {submittedPayload?.company}</div>
                      <div><span className="text-gray-400">Custom Port:</span> {submittedPayload?.destinationPort}</div>
                      <div><span className="text-gray-400">Requested Volume:</span> {submittedPayload?.quantity || "Standard Trial MOQ"}</div>
                    </div>

                    <p className="text-xs text-gray-500">
                      An export consultant will reply to <span className="text-black font-semibold">{submittedPayload?.email}</span> within 12 business hours.
                    </p>

                    <div className="flex flex-wrap items-center justify-center gap-3">
                      {submittedPayload && (
                        <a
                          href={buildMailtoHref(
                            submittedPayload,
                            submissionResult.referenceId,
                            submissionResult.recipientEmails
                          )}
                          className="inline-flex items-center gap-1.5 bg-white border border-[#0f5238] text-[#0f5238] hover:bg-[#e6fcf1] py-2 px-4 rounded-lg font-bold text-xs uppercase tracking-wider transition-all"
                        >
                          <Mail className="w-3.5 h-3.5" />
                          <span>Send via Email App</span>
                          <ExternalLink className="w-3 h-3" />
                        </a>
                      )}
                      <button
                        onClick={handleCloseInquiry}
                        className="bg-[#0f5238] hover:bg-[#0a3b27] text-white py-2 px-6 rounded-lg font-bold text-xs uppercase tracking-wider transition-all cursor-pointer"
                      >
                        Return to Portfolio
                      </button>
                    </div>
                  </div>
                )}
              </div>

            </motion.div>
          </div>
        )}
      </AnimatePresence>

    </section>
  );
}
