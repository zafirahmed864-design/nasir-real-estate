import React from 'react';
import { Home, Key, TrendingUp, HelpCircle, ArrowUpRight, Check } from 'lucide-react';
import { BUSINESS_INFO } from '../data/properties';

export const Services: React.FC = () => {
  const services = [
    {
      number: '01',
      title: 'BUY PROPERTY',
      icon: Home,
      description: 'Find a property that fits your lifestyle, location preferences, and goals.',
      details: [
        'Curated residential houses & villas in Chenab Nagar',
        'Verified title deeds & legal review assistance',
        'Transparent negotiations directly with sellers'
      ],
      whatsappMsg: 'Hello Nasir Real Estate, I am interested in buying a property in Chenab Nagar / Chiniot. Please assist me with available options.'
    },
    {
      number: '02',
      title: 'SELL PROPERTY',
      icon: Key,
      description: 'Present your property professionally and connect with potential buyers.',
      details: [
        'Accurate local market valuation guidance',
        'Professional presentation to qualified buyers',
        'Smooth transaction coordination from offer to completion'
      ],
      whatsappMsg: 'Hello Nasir Real Estate, I would like to sell my property. Please let me know how you can help me find serious buyers.'
    },
    {
      number: '03',
      title: 'PROPERTY INVESTMENT',
      icon: TrendingUp,
      description: 'Explore property opportunities with a practical, informed approach.',
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
      description: 'Get direct guidance about your property requirements.',
      details: [
        'One-on-one market insights & zoning guidance',
        'Chamber of Faisalabad network connections',
        'Straightforward answers without pressure or ambiguity'
      ],
      whatsappMsg: 'Hello Nasir Real Estate, I need a consultation regarding property requirements and market guidance.'
    }
  ];

  return (
    <section id="services" className="py-16 md:py-24 bg-white border-y border-[#EFE8DF]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <span className="text-xs font-bold uppercase tracking-widest text-[#D96F58] mb-2 block">
            OUR CORE EXPERTISE
          </span>
          <h2
            id="services-heading"
            className="font-display text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#0B2239] uppercase tracking-tight"
          >
            WHAT WE CAN HELP YOU WITH
          </h2>
          <p className="mt-3 text-sm sm:text-base text-[#68717A] max-w-xl">
            Whether you are acquiring a family home, marketing an existing asset, or seeking sound local investment advice, Nasir Real Estate provides direct, professional support.
          </p>
        </div>

        {/* Editorial Numbered Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {services.map((service) => {
            const Icon = service.icon;
            const linkUrl = BUSINESS_INFO.getWhatsAppCustomUrl(service.whatsappMsg);

            return (
              <div
                key={service.number}
                id={`service-card-${service.number}`}
                className="group relative bg-[#F8F4EF] hover:bg-white rounded-3xl p-6 sm:p-7 border border-[#EFE8DF] hover:border-[#D96F58]/30 shadow-xs hover:shadow-xl transition-all duration-300 flex flex-col justify-between transform hover:-translate-y-1.5"
              >
                <div>
                  {/* Top Row: Number & Icon */}
                  <div className="flex items-center justify-between mb-6">
                    <span className="font-display font-black text-2xl sm:text-3xl text-[#0B2239]/30 group-hover:text-[#D96F58] transition-colors">
                      {service.number}
                    </span>
                    <div className="w-12 h-12 rounded-2xl bg-white group-hover:bg-[#0B2239] text-[#0B2239] group-hover:text-white flex items-center justify-center shadow-xs transition-colors">
                      <Icon className="w-5 h-5 stroke-[1.8]" />
                    </div>
                  </div>

                  {/* Heading */}
                  <h3 className="font-display font-bold text-lg sm:text-xl text-[#0B2239] mb-3 tracking-tight">
                    {service.title}
                  </h3>

                  {/* Description */}
                  <p className="text-xs sm:text-sm text-[#68717A] leading-relaxed mb-6">
                    {service.description}
                  </p>

                  {/* Bullet Highlights */}
                  <ul className="space-y-2 mb-6 pt-4 border-t border-[#EFE8DF]">
                    {service.details.map((detail, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-xs text-[#202A33]">
                        <Check className="w-3.5 h-3.5 text-[#D96F58] shrink-0 mt-0.5" />
                        <span className="leading-snug">{detail}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Bottom Trigger Action */}
                <a
                  href={linkUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-between w-full pt-4 border-t border-[#EFE8DF] text-xs font-bold text-[#0B2239] group-hover:text-[#D96F58] transition-colors"
                >
                  <span>Discuss This Service</span>
                  <div className="w-7 h-7 rounded-full bg-white group-hover:bg-[#D96F58] text-[#0B2239] group-hover:text-white flex items-center justify-center transition-colors shadow-2xs">
                    <ArrowUpRight className="w-4 h-4" />
                  </div>
                </a>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
