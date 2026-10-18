import React from 'react';
import { Search, Compass, MessageSquare, PhoneCall } from 'lucide-react';

export const TrustStrip: React.FC = () => {
  const points = [
    {
      id: 'trust-search',
      icon: Search,
      title: 'PROPERTY SEARCH',
      desc: 'Explore opportunities that match your needs.'
    },
    {
      id: 'trust-knowledge',
      icon: Compass,
      title: 'LOCAL KNOWLEDGE',
      desc: 'Focused understanding of the local property market.'
    },
    {
      id: 'trust-comm',
      icon: MessageSquare,
      title: 'CLEAR COMMUNICATION',
      desc: 'Simple and direct guidance throughout your property journey.'
    },
    {
      id: 'trust-contact',
      icon: PhoneCall,
      title: 'EASY CONTACT',
      desc: 'Reach Nasir Real Estate directly by phone or WhatsApp.'
    }
  ];

  return (
    <section id="trust-strip" className="relative z-10 -mt-6 sm:-mt-8 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <div className="bg-white rounded-2xl sm:rounded-3xl shadow-lg border border-[#EFE8DF] p-6 sm:p-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 divide-y sm:divide-y-0 sm:divide-x divide-[#EFE8DF]">
          {points.map((pt, idx) => {
            const Icon = pt.icon;
            return (
              <div
                key={pt.id}
                id={pt.id}
                className={`flex flex-col items-start ${idx !== 0 ? 'pt-5 sm:pt-0 sm:pl-6' : ''} group`}
              >
                <div className="w-11 h-11 rounded-xl bg-[#F8F4EF] group-hover:bg-[#D96F58]/10 text-[#0B2239] group-hover:text-[#D96F58] flex items-center justify-center mb-3.5 transition-colors">
                  <Icon className="w-5 h-5 stroke-[1.8]" />
                </div>
                <h3 className="font-display font-bold text-sm tracking-wider uppercase text-[#0B2239] mb-1.5">
                  {pt.title}
                </h3>
                <p className="text-xs sm:text-sm text-[#68717A] leading-relaxed">
                  {pt.desc}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
