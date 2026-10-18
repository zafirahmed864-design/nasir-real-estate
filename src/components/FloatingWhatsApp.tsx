import React, { useState } from 'react';
import { MessageCircle } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { BUSINESS_INFO } from '../data/properties';

export const FloatingWhatsApp: React.FC = () => {
  const [showTooltip, setShowTooltip] = useState(false);

  return (
    <div
      id="floating-whatsapp-container"
      className="fixed bottom-5 right-5 sm:bottom-7 sm:right-7 z-40 flex items-center gap-2 select-none"
    >
      {/* Animated Tooltip on hover */}
      <AnimatePresence>
        {showTooltip && (
          <motion.div
            initial={{ opacity: 0, x: 10, scale: 0.9 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            exit={{ opacity: 0, x: 10, scale: 0.9 }}
            transition={{ duration: 0.18 }}
            className="hidden sm:flex items-center gap-2 bg-[#060B14]/90 text-white text-xs font-bold px-3.5 py-2 rounded-full shadow-2xl border border-white/20 backdrop-blur-md pointer-events-none"
          >
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            <span>Chat on WhatsApp</span>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Circular Floating Button with pulse */}
      <motion.a
        id="floating-whatsapp-btn"
        href={BUSINESS_INFO.whatsappBaseUrl}
        target="_blank"
        rel="noopener noreferrer"
        onMouseEnter={() => setShowTooltip(true)}
        onMouseLeave={() => setShowTooltip(false)}
        whileHover={{ scale: 1.08 }}
        whileTap={{ scale: 0.92 }}
        aria-label="Chat on WhatsApp with Nasir Real Estate"
        className="relative group w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-[#25D366] hover:bg-[#20bd5a] text-white flex items-center justify-center shadow-2xl transition-shadow cursor-pointer"
      >
        {/* Soft pulsating ping ring */}
        <span className="absolute -inset-1 rounded-full bg-[#25D366]/40 animate-ping opacity-60 -z-10" />

        {/* WhatsApp Icon */}
        <MessageCircle className="w-7 h-7 sm:w-8 sm:h-8 fill-current stroke-none" />

        {/* Online Status Dot */}
        <span className="absolute top-1 right-1 w-3.5 h-3.5 bg-white rounded-full flex items-center justify-center shadow-xs">
          <span className="w-2.5 h-2.5 bg-emerald-500 rounded-full" />
        </span>
      </motion.a>
    </div>
  );
};
