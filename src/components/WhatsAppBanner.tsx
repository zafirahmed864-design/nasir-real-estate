import React from 'react';
import { MessageCircle, Phone, Zap } from 'lucide-react';
import { motion } from 'motion/react';
import { BUSINESS_INFO } from '../data/properties';
import { useTheme } from '../context/ThemeContext';

export const WhatsAppBanner: React.FC = () => {
  const { isDark } = useTheme();

  return (
    <section
      id="whatsapp-cta-banner"
      className="relative overflow-hidden bg-gradient-to-br from-[#060B14] via-[#0B1526] to-[#060B14] text-white py-16 md:py-24 border-y border-white/10"
    >
      {/* Animated subtle floating glow orbs */}
      <motion.div
        animate={{ scale: [1, 1.2, 1], opacity: [0.15, 0.3, 0.15] }}
        transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute -top-24 -right-24 w-96 h-96 rounded-full bg-[#D96F58] blur-3xl pointer-events-none"
      />
      <motion.div
        animate={{ scale: [1, 1.25, 1], opacity: [0.1, 0.25, 0.1] }}
        transition={{ duration: 14, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute -bottom-24 -left-24 w-96 h-96 rounded-full bg-amber-500 blur-3xl pointer-events-none"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mx-auto"
        >
          {/* Eyebrow */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/15 text-xs font-extrabold uppercase tracking-widest text-[#D96F58] mb-6">
            <Zap className="w-3.5 h-3.5 text-[#D96F58]" />
            <span>DIRECT CLIENT DESK</span>
          </div>

          {/* Large Heading */}
          <h2
            id="banner-heading"
            className="font-display text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black uppercase tracking-tight leading-tight mb-6"
          >
            READY TO DISCUSS <br className="hidden sm:inline" />
            <span className="text-[#D96F58]">YOUR NEXT PROPERTY?</span>
          </h2>

          {/* Supporting text */}
          <p className="text-base sm:text-lg text-slate-300 font-normal leading-relaxed mb-8 max-w-xl mx-auto">
            Connect directly with Nasir Real Estate. We assist verified buyers, property sellers, and investors across Chenab Nagar and Chiniot.
          </p>

          {/* Conversion Action Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-6">
            {/* Primary: Chat on WhatsApp */}
            <motion.a
              id="banner-whatsapp-btn"
              href={BUSINESS_INFO.whatsappBaseUrl}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.04, y: -2 }}
              whileTap={{ scale: 0.97 }}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 bg-gradient-to-r from-[#D96F58] to-[#C85A42] hover:from-[#E27A61] hover:to-[#D96F58] text-white px-8 py-4 rounded-full font-bold text-base shadow-2xl transition-all"
            >
              <MessageCircle className="w-5 h-5" />
              <span>CHAT ON WHATSAPP</span>
            </motion.a>

            {/* Secondary: Call Direct */}
            <motion.a
              id="banner-call-btn"
              href={BUSINESS_INFO.phoneHref}
              whileHover={{ scale: 1.04, y: -2 }}
              whileTap={{ scale: 0.97 }}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 bg-white/10 hover:bg-white/20 text-white border border-white/20 px-8 py-4 rounded-full font-bold text-base backdrop-blur-md transition-all group"
              title="Call Nasir Real Estate"
            >
              <Phone className="w-5 h-5 text-[#D96F58] group-hover:scale-110 transition-transform" />
              <span className="font-mono">CALL {BUSINESS_INFO.phoneDisplay}</span>
            </motion.a>
          </div>

          {/* Value points */}
          <div className="flex items-center justify-center gap-3 text-xs sm:text-sm text-slate-400 font-medium tracking-wide">
            <span>Direct Negotiations</span>
            <span className="text-[#D96F58]">•</span>
            <span>Verified Registry Titles</span>
            <span className="text-[#D96F58]">•</span>
            <span>Fast Settlement</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
