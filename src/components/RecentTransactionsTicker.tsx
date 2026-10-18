import React from 'react';
import { ShieldCheck, MapPin, CheckCircle2, TrendingUp } from 'lucide-react';
import { motion } from 'motion/react';
import { useTheme } from '../context/ThemeContext';

export const RecentTransactionsTicker: React.FC = () => {
  const { isDark } = useTheme();

  const updates = [
    { loc: 'Chenab Nagar', text: '10 Marla Residential Plot in Sector 2 — Verified Ownership', tag: 'Verified' },
    { loc: 'Chiniot', text: '1 Kanal Executive Residence on Main Boulevard — Client Consultation', tag: 'Inquired' },
    { loc: 'Chenab Nagar', text: '12 Marla Contemporary Villa — Site Visit Scheduled', tag: 'Active' },
    { loc: 'Chiniot Bypass', text: '1 Kanal High-Yield Commercial Plot — Title Clearance Complete', tag: 'Verified' },
    { loc: 'Chenab Nagar', text: '5 Marla Ready-to-Build Plot — Direct Owner Negotiation', tag: 'Deal In Progress' },
    { loc: 'Chiniot Corridor', text: 'Multi-Storey Commercial Plaza — Investment Review', tag: 'Advisory' },
  ];

  return (
    <div
      className={`border-y py-2.5 overflow-hidden select-none transition-colors ${
        isDark
          ? 'bg-[#0A1220] border-white/10 text-slate-300'
          : 'bg-[#F2ECE1] border-[#E5DDD0] text-slate-700'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 flex items-center">
        {/* Fixed Label on Left */}
        <div className="flex items-center gap-2 pr-4 border-r border-current/20 shrink-0 text-xs font-bold tracking-wider uppercase">
          <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
          <span className="hidden sm:inline">MARKET ACTIVITY:</span>
          <span className="sm:hidden">UPDATES:</span>
        </div>

        {/* Marquee Animation */}
        <div className="overflow-hidden whitespace-nowrap flex-1 ml-4 relative">
          <motion.div
            className="inline-flex items-center gap-8 text-xs font-medium"
            animate={{ x: [0, -1000] }}
            transition={{
              x: {
                repeat: Infinity,
                repeatType: 'loop',
                duration: 28,
                ease: 'linear',
              },
            }}
          >
            {[...updates, ...updates].map((item, idx) => (
              <div key={idx} className="inline-flex items-center gap-2.5">
                <span
                  className={`px-2 py-0.5 rounded text-[10px] font-bold uppercase ${
                    item.tag === 'Verified'
                      ? 'bg-emerald-500/20 text-emerald-400 border border-emerald-500/30'
                      : 'bg-[#D96F58]/20 text-[#D96F58] border border-[#D96F58]/30'
                  }`}
                >
                  {item.tag}
                </span>
                <span className="flex items-center gap-1 font-semibold text-current opacity-90">
                  <MapPin className="w-3 h-3 text-[#D96F58]" />
                  {item.loc}:
                </span>
                <span className="opacity-80">{item.text}</span>
                <span className="opacity-30">/</span>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </div>
  );
};
