import React from 'react';
import { MessageCircle, Phone, ArrowUpRight, Zap } from 'lucide-react';
import { BUSINESS_INFO } from '../data/properties';

export const WhatsAppBanner: React.FC = () => {
  return (
    <section
      id="whatsapp-cta-banner"
      className="relative overflow-hidden bg-gradient-to-br from-[#07182A] via-[#0B2239] to-[#07182A] text-white py-16 md:py-24"
    >
      {/* Subtle architectural geometric grid lines */}
      <div className="absolute inset-0 opacity-5 pointer-events-none bg-[radial-gradient(#ffffff_1px,transparent_1px)] [background-size:24px_24px]" />
      <div className="absolute -top-24 -right-24 w-96 h-96 rounded-full bg-[#D96F58]/15 blur-3xl pointer-events-none" />
      <div className="absolute -bottom-24 -left-24 w-96 h-96 rounded-full bg-[#0E2E4E]/80 blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        <div className="max-w-3xl mx-auto">
          {/* Eyebrow */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/10 text-xs font-extrabold uppercase tracking-widest text-[#D96F58] mb-6">
            <Zap className="w-3.5 h-3.5 text-[#D96F58]" />
            <span>DIRECT CLIENT ASSISTANCE</span>
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
          <p className="text-base sm:text-lg text-[#94A3B8] font-normal leading-relaxed mb-8 max-w-xl mx-auto">
            Talk directly with Nasir Real Estate and tell us what you're looking for. We assist buyers, sellers, and investors across Chenab Nagar and Chiniot.
          </p>

          {/* Conversion Action Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-6">
            {/* Primary: Chat on WhatsApp */}
            <a
              id="banner-whatsapp-btn"
              href={BUSINESS_INFO.whatsappBaseUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 bg-[#D96F58] hover:bg-[#E27A61] text-white px-8 py-4 rounded-full font-bold text-base shadow-xl hover:shadow-2xl transition-all transform hover:-translate-y-0.5 active:translate-y-0"
            >
              <MessageCircle className="w-5 h-5" />
              <span>CHAT ON WHATSAPP</span>
            </a>

            {/* Secondary: Call Direct */}
            <a
              id="banner-call-btn"
              href={BUSINESS_INFO.phoneHref}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 bg-white/10 hover:bg-white/20 text-white border border-white/20 px-8 py-4 rounded-full font-bold text-base backdrop-blur-md transition-all group"
              title="Call Nasir Real Estate"
            >
              <Phone className="w-5 h-5 text-[#D96F58] group-hover:scale-110 transition-transform" />
              <span className="font-mono">CALL {BUSINESS_INFO.phoneDisplay}</span>
            </a>
          </div>

          {/* Small Line */}
          <div className="flex items-center justify-center gap-3 text-xs sm:text-sm text-[#94A3B8] font-medium tracking-wide">
            <span>Fast</span>
            <span className="text-[#D96F58]">•</span>
            <span>Direct</span>
            <span className="text-[#D96F58]">•</span>
            <span>Convenient</span>
          </div>
        </div>
      </div>
    </section>
  );
};
