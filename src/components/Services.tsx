import React from 'react';
import { Home, Key, TrendingUp, HelpCircle, ArrowUpRight, Check } from 'lucide-react';
import { motion } from 'motion/react';
import { BUSINESS_INFO } from '../data/properties';
import { useTheme } from '../context/ThemeContext';

export const Services: React.FC = () => {
  const { isDark } = useTheme();

  const services = [
    {
      number: '01',
      title: 'BUY PROPERTY',
      icon: Home,
      description: 'Find a property that fits your lifestyle, location preferences, and family goals.',
      details: [
        'Curated residential houses & villas in Chenab Nagar',
        'Verified title deeds & legal review assistance',
        'Direct negotiations directly with registered owners'
      ],
      whatsappMsg: 'Hello Nasir Real Estate, I am interested in buying a property in Chenab Nagar / Chiniot. Please assist me with available options.'
    },
    {
      number: '02',
      title: 'SELL PROPERTY',
      icon: Key,
      description: 'Present your property professionally and connect with qualified buyers.',
      details: [
        'Realistic local market valuation guidance',
        'Direct connection to serious, verified investors',
        'Smooth transaction coordination from offer to completion'
      ],
      whatsappMsg: 'Hello Nasir Real Estate, I would like to sell my property. Please let me know how you can help me find serious buyers.'
    },
    {
      number: '03',
      title: 'PROPERTY INVESTMENT',
      icon: TrendingUp,
      description: 'Explore high-growth opportunities with practical, data-backed insight.',
      details: [
        'High-growth plots and commercial avenues in Chiniot',
        'Rental yield analysis for multi-story plazas & shops',
        'Long-term capital appreciation recommendations'
      ],
      whatsappMsg: 'Hello Nasir Real Estate, I want to explore property investment opportunities in the Chiniot & Chenab Nagar region.'
    },
    {
      number: '04',
      title: 'PROPERTY CONSULTATION',
      icon: HelpCircle,
      description: 'Get clear, one-on-one advisory about your specific property requirements.',
      details: [
        'Zoning guidance and municipal approval review',
        'Chamber of Faisalabad network connections',
        'Straightforward answers without pressure or ambiguity'
      ],
      whatsappMsg: 'Hello Nasir Real Estate, I need a consultation regarding property requirements and market guidance.'
    }
  ];

  return (
    <section
      id="services"
      className={`py-16 md:py-24 border-y transition-colors ${
        isDark ? 'bg-[#060B14] border-white/10' : 'bg-white border-[#EFE8DF]'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="max-w-3xl mb-14"
        >
          <span className="text-xs font-bold uppercase tracking-widest text-[#D96F58] mb-2 block">
            OUR CORE EXPERTISE
          </span>
          <h2
            id="services-heading"
            className={`font-display text-3xl sm:text-4xl md:text-5xl font-black uppercase tracking-tight ${
              isDark ? 'text-white' : 'text-[#0B2239]'
            }`}
          >
            WHAT WE CAN HELP YOU WITH
          </h2>
          <p className={`mt-3 text-sm sm:text-base max-w-xl ${isDark ? 'text-slate-300' : 'text-[#68717A]'}`}>
            Whether acquiring a family home, marketing an existing asset, or seeking sound local investment advice, Nasir Real Estate provides direct, professional support.
          </p>
        </motion.div>

        {/* Editorial Numbered Cards Grid with Motion */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {services.map((service, idx) => {
            const Icon = service.icon;
            const linkUrl = BUSINESS_INFO.getWhatsAppCustomUrl(service.whatsappMsg);

            return (
              <motion.div
                key={service.number}
                id={`service-card-${service.number}`}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.08 }}
                whileHover={{ y: -6 }}
                className={`group relative rounded-3xl p-6 sm:p-7 border shadow-xl transition-all duration-300 flex flex-col justify-between ${
                  isDark
                    ? 'bg-[#0B1424]/90 border-white/10 hover:border-[#D96F58]/40 hover:shadow-[0_16px_36px_rgba(0,0,0,0.6)]'
                    : 'bg-[#FAF7F2] hover:bg-white border-[#EFE8DF] hover:border-[#D96F58]/30 hover:shadow-2xl'
                }`}
              >
                <div>
                  {/* Top Row: Number & Icon */}
                  <div className="flex items-center justify-between mb-6">
                    <span className="font-display font-black text-2xl sm:text-3xl text-[#D96F58]">
                      {service.number}
                    </span>
                    <div
                      className={`w-12 h-12 rounded-2xl flex items-center justify-center shadow-xs transition-colors ${
                        isDark
                          ? 'bg-white/10 text-white group-hover:bg-[#D96F58]'
                          : 'bg-white text-[#0B2239] group-hover:bg-[#0B2239] group-hover:text-white'
                      }`}
                    >
                      <Icon className="w-5 h-5 stroke-[1.8]" />
                    </div>
                  </div>

                  {/* Heading */}
                  <h3
                    className={`font-display font-bold text-lg sm:text-xl mb-3 tracking-tight ${
                      isDark ? 'text-white' : 'text-[#0B2239]'
                    }`}
                  >
                    {service.title}
                  </h3>

                  {/* Description */}
                  <p className={`text-xs sm:text-sm leading-relaxed mb-6 ${isDark ? 'text-slate-300' : 'text-[#68717A]'}`}>
                    {service.description}
                  </p>

                  {/* Bullet Highlights */}
                  <ul className={`space-y-2 mb-6 pt-4 border-t ${isDark ? 'border-white/10' : 'border-[#EFE8DF]'}`}>
                    {service.details.map((detail, dIdx) => (
                      <li key={dIdx} className="flex items-start gap-2 text-xs">
                        <Check className="w-3.5 h-3.5 text-[#D96F58] shrink-0 mt-0.5" />
                        <span className={`leading-snug ${isDark ? 'text-slate-300' : 'text-[#202A33]'}`}>{detail}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Bottom Trigger Action */}
                <motion.a
                  whileTap={{ scale: 0.95 }}
                  href={linkUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`inline-flex items-center justify-between w-full py-2.5 px-4 rounded-xl text-xs font-bold border transition-all ${
                    isDark
                      ? 'bg-white/5 hover:bg-white/10 text-slate-200 border-white/10'
                      : 'bg-white hover:bg-[#FAF7F2] text-[#0B2239] border-[#EFE8DF]'
                  }`}
                >
                  <span>Inquire on WhatsApp</span>
                  <ArrowUpRight className="w-3.5 h-3.5 text-[#D96F58]" />
                </motion.a>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
