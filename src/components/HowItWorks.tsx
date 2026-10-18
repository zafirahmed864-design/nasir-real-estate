import React from 'react';
import { MessageSquare, Search, PhoneCall, CalendarCheck } from 'lucide-react';
import { motion } from 'motion/react';
import { useTheme } from '../context/ThemeContext';

export const HowItWorks: React.FC = () => {
  const { isDark } = useTheme();

  const steps = [
    {
      num: '01',
      title: 'TELL US YOUR CRITERIA',
      desc: 'Share your preferred location, property dimensions, and budget parameters.',
      icon: MessageSquare
    },
    {
      num: '02',
      title: 'EXPLORE VERIFIED OPTIONS',
      desc: 'Review vetted property opportunities with verified title registries and physical possession status.',
      icon: Search
    },
    {
      num: '03',
      title: 'SITE VISIT & CLARIFICATION',
      desc: 'Inspect the location on-ground and clarify neighborhood zoning, utilities, and road access.',
      icon: PhoneCall
    },
    {
      num: '04',
      title: 'TRANSPARENT CLOSING',
      desc: 'Direct negotiation with the owner and clean documentation transfer through registered authorities.',
      icon: CalendarCheck
    }
  ];

  return (
    <section
      id="process"
      className={`py-16 md:py-24 transition-colors ${
        isDark ? 'bg-[#080E18]' : 'bg-[#FAF7F2]'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-2xl mx-auto mb-16"
        >
          <span className="text-xs font-bold uppercase tracking-widest text-[#D96F58] mb-2 block">
            SIMPLE & SECURE PROCESS
          </span>
          <h2
            id="how-it-works-heading"
            className={`font-display text-3xl sm:text-4xl md:text-5xl font-black uppercase tracking-tight ${
              isDark ? 'text-white' : 'text-[#0B2239]'
            }`}
          >
            HOW IT WORKS
          </h2>
          <p className={`mt-3 text-sm sm:text-base ${isDark ? 'text-slate-300' : 'text-[#68717A]'}`}>
            A clean four-step pathway to finding or selling property with Nasir Real Estate.
          </p>
        </motion.div>

        {/* Timeline Grid with Motion */}
        <div className="relative">
          {/* Connector Line */}
          <div
            className={`hidden lg:block absolute top-1/2 left-12 right-12 h-0.5 border-t-2 border-dashed -translate-y-8 -z-0 ${
              isDark ? 'border-white/10' : 'border-[#CBD5E1]'
            }`}
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative z-10">
            {steps.map((step, idx) => {
              const Icon = step.icon;
              return (
                <motion.div
                  key={step.num}
                  id={`process-step-${step.num}`}
                  initial={{ opacity: 0, y: 25 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: idx * 0.1 }}
                  whileHover={{ y: -6 }}
                  className={`rounded-3xl p-6 sm:p-7 border shadow-xl transition-all duration-300 flex flex-col items-start relative group ${
                    isDark
                      ? 'bg-[#0B1424]/90 border-white/10 hover:border-[#D96F58]/40 hover:shadow-[0_16px_36px_rgba(0,0,0,0.6)]'
                      : 'bg-white border-[#EFE8DF] hover:shadow-2xl hover:border-[#D96F58]/30'
                  }`}
                >
                  {/* Step Number Badge */}
                  <div className="flex items-center justify-between w-full mb-6">
                    <span className="font-display font-black text-3xl sm:text-4xl text-[#D96F58] group-hover:scale-110 transition-transform">
                      {step.num}
                    </span>
                    <div
                      className={`w-12 h-12 rounded-2xl flex items-center justify-center transition-colors shadow-xs ${
                        isDark
                          ? 'bg-white/10 text-white group-hover:bg-[#D96F58]'
                          : 'bg-[#FAF7F2] text-[#0B2239] group-hover:bg-[#0B2239] group-hover:text-white'
                      }`}
                    >
                      <Icon className="w-5 h-5" />
                    </div>
                  </div>

                  <h3
                    className={`font-display font-bold text-base sm:text-lg uppercase tracking-tight mb-2 ${
                      isDark ? 'text-white' : 'text-[#0B2239]'
                    }`}
                  >
                    {step.title}
                  </h3>

                  <p className={`text-xs sm:text-sm leading-relaxed ${isDark ? 'text-slate-300' : 'text-[#68717A]'}`}>
                    {step.desc}
                  </p>

                  <div className={`mt-5 pt-3 border-t w-full flex items-center text-[11px] font-semibold ${
                    isDark ? 'border-white/10 text-slate-400' : 'border-[#FAF7F2] text-[#68717A]'
                  }`}>
                    <span>Phase {idx + 1} of 4</span>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};
