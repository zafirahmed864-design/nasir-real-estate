import React, { useState } from 'react';
import { Calculator, Sparkles, MessageCircle, ArrowRight, CheckCircle2, MapPin } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { BUSINESS_INFO } from '../data/properties';
import { useTheme } from '../context/ThemeContext';

export const PropertyEstimator: React.FC = () => {
  const { isDark } = useTheme();

  const [propType, setPropType] = useState<'Plot' | 'House' | 'Commercial'>('Plot');
  const [size, setSize] = useState<'5 Marla' | '7 Marla' | '10 Marla' | '1 Kanal'>('10 Marla');
  const [location, setLocation] = useState<'Chenab Nagar' | 'Chiniot'>('Chenab Nagar');

  // Realistic estimates guidance based on Chenab Nagar & Chiniot market
  const getEstimate = () => {
    if (propType === 'Plot') {
      if (size === '5 Marla') return { range: 'PKR 35 Lakh - 65 Lakh', note: 'Standard residential plot in developed sector' };
      if (size === '7 Marla') return { range: 'PKR 55 Lakh - 90 Lakh', note: 'Paved street with electricity & water connection' };
      if (size === '10 Marla') return { range: 'PKR 85 Lakh - 1.50 Crore', note: 'Prime block, immediate possession ready' };
      return { range: 'PKR 1.80 Crore - 3.20 Crore', note: 'Executive avenue or corner boulevard plot' };
    }
    if (propType === 'House') {
      if (size === '5 Marla') return { range: 'PKR 90 Lakh - 1.40 Crore', note: 'Modern double-storey 3-bed construction' };
      if (size === '7 Marla') return { range: 'PKR 1.30 Crore - 1.95 Crore', note: 'Solid brick masonry with car porch' };
      if (size === '10 Marla') return { range: 'PKR 1.90 Crore - 3.10 Crore', note: '4-bed luxury finish with dual TV lounge' };
      return { range: 'PKR 3.50 Crore - 5.50 Crore', note: '1 Kanal executive mansion with lawn and garage' };
    }
    // Commercial
    if (size === '5 Marla') return { range: 'PKR 1.10 Crore - 2.20 Crore', note: 'Commercial market front plot/shop' };
    if (size === '7 Marla') return { range: 'PKR 1.70 Crore - 3.00 Crore', note: 'High footfall avenue retail spot' };
    if (size === '10 Marla') return { range: 'PKR 2.50 Crore - 4.50 Crore', note: 'Main road commercial plaza potential' };
    return { range: 'PKR 5.00 Crore - 9.00 Crore+', note: 'Boulevard/Bypass corner commercial complex asset' };
  };

  const estimate = getEstimate();

  const customWhatsAppMsg = `Hello Nasir Real Estate, I used your online Property Estimator for:
- Type: ${propType}
- Size: ${size}
- Location: ${location}
Estimated Range: ${estimate.range}.
Please share verified available options matching this criteria!`;

  const whatsappInquiryUrl = BUSINESS_INFO.getWhatsAppCustomUrl(customWhatsAppMsg);

  return (
    <section id="estimator" className="py-16 md:py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div
        className={`rounded-3xl border shadow-2xl p-6 sm:p-10 lg:p-12 transition-colors relative overflow-hidden ${
          isDark
            ? 'bg-gradient-to-br from-[#0B1424] via-[#09101C] to-[#060B14] border-white/10'
            : 'bg-white border-[#EFE8DF]'
        }`}
      >
        {/* Ambient Decorative Glow */}
        <div className="absolute top-0 right-0 w-80 h-80 bg-[#D96F58]/10 rounded-full blur-3xl -z-10 pointer-events-none" />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          {/* Left Column: Explanatory & Controls */}
          <div className="lg:col-span-7">
            <div
              className={`inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border text-xs font-bold tracking-widest uppercase mb-4 ${
                isDark ? 'bg-white/5 border-white/10 text-amber-300' : 'bg-[#FAF7F2] border-[#EFE8DF] text-[#D96F58]'
              }`}
            >
              <Calculator className="w-3.5 h-3.5 text-[#D96F58]" />
              <span>MARKET VALUATION ASSISTANT</span>
            </div>

            <h2
              className={`font-display text-2xl sm:text-3xl md:text-4xl font-black uppercase tracking-tight mb-4 ${
                isDark ? 'text-white' : 'text-[#0B2239]'
              }`}
            >
              ESTIMATE YOUR PROPERTY <br />
              <span className="text-[#D96F58]">BUDGET & VALUATION</span>
            </h2>

            <p className={`text-xs sm:text-sm leading-relaxed mb-8 ${isDark ? 'text-slate-300' : 'text-[#68717A]'}`}>
              Select your property parameters to get real-time price bracket guidance based on actual local deals in Chenab Nagar and Chiniot.
            </p>

            {/* Parameter 1: Property Type */}
            <div className="mb-6">
              <label className="block text-xs font-bold uppercase tracking-wider mb-2.5 opacity-80">
                1. Select Property Type
              </label>
              <div className="grid grid-cols-3 gap-2 sm:gap-3">
                {(['Plot', 'House', 'Commercial'] as const).map((type) => (
                  <button
                    key={type}
                    type="button"
                    onClick={() => setPropType(type)}
                    className={`py-2.5 px-3 rounded-xl font-bold text-xs sm:text-sm border transition-all cursor-pointer ${
                      propType === type
                        ? isDark
                          ? 'bg-[#D96F58] text-white border-[#D96F58] shadow-md'
                          : 'bg-[#0B2239] text-white border-[#0B2239] shadow-md'
                        : isDark
                        ? 'bg-white/5 border-white/10 text-slate-300 hover:bg-white/10'
                        : 'bg-[#FAF7F2] border-[#EFE8DF] text-[#68717A] hover:bg-[#F2ECE1]'
                    }`}
                  >
                    {type}
                  </button>
                ))}
              </div>
            </div>

            {/* Parameter 2: Size */}
            <div className="mb-6">
              <label className="block text-xs font-bold uppercase tracking-wider mb-2.5 opacity-80">
                2. Select Area / Size
              </label>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 sm:gap-3">
                {(['5 Marla', '7 Marla', '10 Marla', '1 Kanal'] as const).map((s) => (
                  <button
                    key={s}
                    type="button"
                    onClick={() => setSize(s)}
                    className={`py-2.5 px-3 rounded-xl font-bold text-xs border transition-all cursor-pointer ${
                      size === s
                        ? isDark
                          ? 'bg-[#D96F58] text-white border-[#D96F58] shadow-md'
                          : 'bg-[#0B2239] text-white border-[#0B2239] shadow-md'
                        : isDark
                        ? 'bg-white/5 border-white/10 text-slate-300 hover:bg-white/10'
                        : 'bg-[#FAF7F2] border-[#EFE8DF] text-[#68717A] hover:bg-[#F2ECE1]'
                    }`}
                  >
                    {s}
                  </button>
                ))}
              </div>
            </div>

            {/* Parameter 3: Location */}
            <div>
              <label className="block text-xs font-bold uppercase tracking-wider mb-2.5 opacity-80">
                3. Preferred Location
              </label>
              <div className="grid grid-cols-2 gap-2 sm:gap-3">
                {(['Chenab Nagar', 'Chiniot'] as const).map((loc) => (
                  <button
                    key={loc}
                    type="button"
                    onClick={() => setLocation(loc)}
                    className={`py-2.5 px-4 rounded-xl font-bold text-xs sm:text-sm border transition-all cursor-pointer flex items-center justify-center gap-2 ${
                      location === loc
                        ? isDark
                          ? 'bg-[#D96F58] text-white border-[#D96F58] shadow-md'
                          : 'bg-[#0B2239] text-white border-[#0B2239] shadow-md'
                        : isDark
                        ? 'bg-white/5 border-white/10 text-slate-300 hover:bg-white/10'
                        : 'bg-[#FAF7F2] border-[#EFE8DF] text-[#68717A] hover:bg-[#F2ECE1]'
                    }`}
                  >
                    <MapPin className="w-3.5 h-3.5" />
                    <span>{loc}</span>
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column: Live Result Card with Motion */}
          <div className="lg:col-span-5">
            <motion.div
              layout
              className={`p-6 sm:p-8 rounded-2xl border shadow-xl flex flex-col justify-between ${
                isDark
                  ? 'bg-[#0F1B2E] border-white/15 text-white'
                  : 'bg-[#FAF7F2] border-[#EFE8DF] text-[#0B2239]'
              }`}
            >
              <div>
                <span className="text-[11px] font-bold uppercase tracking-widest text-[#D96F58] block mb-1">
                  ESTIMATED MARKET VALUATION
                </span>

                <h3 className="font-display font-extrabold text-lg sm:text-xl mb-4">
                  {size} {propType} in {location}
                </h3>

                {/* Animated Price Range */}
                <div className={`p-4 rounded-xl border mb-5 ${isDark ? 'bg-white/5 border-white/10' : 'bg-white border-[#EFE8DF]'}`}>
                  <span className="text-[10px] uppercase font-bold tracking-wider opacity-70 block mb-1">
                    Guidance Valuation Bracket
                  </span>
                  <motion.div
                    key={`${propType}-${size}-${location}`}
                    initial={{ scale: 0.95, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    className="font-mono text-xl sm:text-2xl font-black text-[#D96F58]"
                  >
                    {estimate.range}
                  </motion.div>
                  <p className="text-xs opacity-80 mt-1">
                    {estimate.note}
                  </p>
                </div>

                <ul className="space-y-2 text-xs mb-6 opacity-90">
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500 shrink-0" />
                    <span>Direct ownership title verification included</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500 shrink-0" />
                    <span>Site inspection and neighborhood survey</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500 shrink-0" />
                    <span>Zero inflated middleman margin</span>
                  </li>
                </ul>
              </div>

              {/* Direct WhatsApp Inquiry Button */}
              <motion.a
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                href={whatsappInquiryUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-center gap-2.5 bg-gradient-to-r from-[#D96F58] to-[#C85A42] hover:from-[#E27A61] hover:to-[#D96F58] text-white py-3.5 px-6 rounded-full font-bold text-xs sm:text-sm shadow-lg transition-all"
              >
                <MessageCircle className="w-4 h-4" />
                <span>Inquire About This Estimate</span>
              </motion.a>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};
