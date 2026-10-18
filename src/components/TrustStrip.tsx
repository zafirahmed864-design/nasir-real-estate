import React from 'react';
import { Search, Compass, MessageSquare, PhoneCall } from 'lucide-react';
import { motion } from 'motion/react';
import { useTheme } from '../context/ThemeContext';

export const TrustStrip: React.FC = () => {
  const { isDark } = useTheme();

  const points = [
    {
      id: 'trust-search',
      icon: Search,
      title: 'PROPERTY SEARCH',
      desc: 'Explore verified residential houses, ready plots, and commercial opportunities.'
    },
    {
      id: 'trust-knowledge',
      icon: Compass,
      title: 'LOCAL GROUNDING',
      desc: 'Direct market insight across Chenab Nagar, Chiniot, and connecting corridors.'
    },
    {
      id: 'trust-comm',
      icon: MessageSquare,
      title: 'CLEAR ADVISORY',
      desc: 'Transparent guidance on documentation, pricing, and ownership verification.'
    },
    {
      id: 'trust-contact',
      icon: PhoneCall,
      title: 'DIRECT CONTACT',
      desc: 'Reach Nasir Real Estate directly via phone or WhatsApp with zero broker delay.'
    }
  ];

  return (
    <section id="trust-strip" className="relative z-10 -mt-6 sm:-mt-8 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className={`rounded-2xl sm:rounded-3xl shadow-xl border p-6 sm:p-8 backdrop-blur-xl transition-colors ${
          isDark
            ? 'bg-[#0B1424]/90 border-white/10 text-white'
            : 'bg-white border-[#EFE8DF] text-[#0B2239]'
        }`}
      >
        <div className={`grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 divide-y sm:divide-y-0 sm:divide-x ${
          isDark ? 'divide-white/10' : 'divide-[#EFE8DF]'
        }`}>
          {points.map((pt, idx) => {
            const Icon = pt.icon;
            return (
              <motion.div
                key={pt.id}
                id={pt.id}
                whileHover={{ y: -3 }}
                transition={{ duration: 0.2 }}
                className={`flex flex-col items-start ${idx !== 0 ? 'pt-5 sm:pt-0 sm:pl-6' : ''} group`}
              >
                <div
                  className={`w-12 h-12 rounded-2xl flex items-center justify-center mb-4 transition-all duration-300 ${
                    isDark
                      ? 'bg-white/5 group-hover:bg-[#D96F58]/20 text-[#D96F58] border border-white/5 group-hover:border-[#D96F58]/40'
                      : 'bg-[#FAF7F2] group-hover:bg-[#D96F58]/10 text-[#0B2239] group-hover:text-[#D96F58]'
                  }`}
                >
                  <Icon className="w-5 h-5 stroke-[1.8]" />
                </div>
                <h3 className="font-display font-bold text-xs sm:text-sm tracking-wider uppercase mb-1.5">
                  {pt.title}
                </h3>
                <p className={`text-xs sm:text-sm leading-relaxed ${isDark ? 'text-slate-300' : 'text-[#68717A]'}`}>
                  {pt.desc}
                </p>
              </motion.div>
            );
          })}
        </div>
      </motion.div>
    </section>
  );
};
