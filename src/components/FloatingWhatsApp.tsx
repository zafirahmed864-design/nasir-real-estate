import React, { useState } from 'react';
import { MessageCircle, X } from 'lucide-react';
import { BUSINESS_INFO } from '../data/properties';

export const FloatingWhatsApp: React.FC = () => {
  const [showTooltip, setShowTooltip] = useState(false);

  return (
    <div
      id="floating-whatsapp-container"
      className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 z-40 flex items-center gap-2 select-none"
    >
      {/* Tooltip on hover or focus */}
      <div
        id="floating-whatsapp-tooltip"
        className={`hidden sm:flex items-center gap-2 bg-[#0B2239] text-white text-xs font-semibold px-3.5 py-2 rounded-full shadow-lg border border-white/10 transition-all duration-200 pointer-events-none ${
          showTooltip ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-2'
        }`}
      >
        <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
        <span>Chat on WhatsApp</span>
      </div>

      {/* Circular Floating Button with pulse */}
      <a
        id="floating-whatsapp-btn"
        href={BUSINESS_INFO.whatsappBaseUrl}
        target="_blank"
        rel="noopener noreferrer"
        onMouseEnter={() => setShowTooltip(true)}
        onMouseLeave={() => setShowTooltip(false)}
        aria-label="Chat on WhatsApp with Nasir Real Estate"
        className="relative group w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-[#25D366] hover:bg-[#20bd5a] text-white flex items-center justify-center shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-110 active:scale-95 focus:outline-none focus:ring-4 focus:ring-[#25D366]/40"
      >
        {/* Soft pulsating ping ring */}
        <span className="absolute -inset-1 rounded-full bg-[#25D366]/40 animate-ping opacity-75 -z-10" />

        {/* WhatsApp Icon */}
        <MessageCircle className="w-7 h-7 sm:w-8 sm:h-8 fill-current stroke-none" />

        {/* Online Status Dot */}
        <span className="absolute top-1 right-1 w-3.5 h-3.5 bg-white rounded-full flex items-center justify-center shadow-xs">
          <span className="w-2.5 h-2.5 bg-emerald-500 rounded-full" />
        </span>
      </a>
    </div>
  );
};
