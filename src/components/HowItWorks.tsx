import React from 'react';
import { MessageSquare, Search, PhoneCall, CalendarCheck } from 'lucide-react';

export const HowItWorks: React.FC = () => {
  const steps = [
    {
      num: '01',
      title: 'TELL US WHAT YOU NEED',
      desc: 'Share your preferred location, property type, and requirements.',
      icon: MessageSquare
    },
    {
      num: '02',
      title: 'EXPLORE OPTIONS',
      desc: 'Review suitable property opportunities.',
      icon: Search
    },
    {
      num: '03',
      title: 'ASK QUESTIONS',
      desc: 'Contact us directly for details and discussion.',
      icon: PhoneCall
    },
    {
      num: '04',
      title: 'TAKE THE NEXT STEP',
      desc: 'Arrange a visit or continue your property conversation.',
      icon: CalendarCheck
    }
  ];

  return (
    <section id="process" className="py-16 md:py-24 bg-[#F8F4EF]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-xs font-bold uppercase tracking-widest text-[#D96F58] mb-2 block">
            SIMPLE & TRANSPARENT
          </span>
          <h2
            id="how-it-works-heading"
            className="font-display text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#0B2239] uppercase tracking-tight"
          >
            HOW IT WORKS
          </h2>
          <p className="mt-3 text-sm sm:text-base text-[#68717A]">
            A clean four-step journey to finding or selling property with Nasir Real Estate.
          </p>
        </div>

        {/* Desktop Horizontal / Mobile Vertical Timeline */}
        <div className="relative">
          {/* Desktop Horizontal Connector Line */}
          <div className="hidden lg:block absolute top-1/2 left-12 right-12 h-0.5 border-t-2 border-dashed border-[#CBD5E1] -translate-y-8 -z-0" />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative z-10">
            {steps.map((step, idx) => {
              const Icon = step.icon;
              return (
                <div
                  key={step.num}
                  id={`process-step-${step.num}`}
                  className="bg-white rounded-3xl p-6 sm:p-7 border border-[#EFE8DF] shadow-xs hover:shadow-xl hover:border-[#D96F58]/30 transition-all duration-300 flex flex-col items-start relative group"
                >
                  {/* Step Number Badge */}
                  <div className="flex items-center justify-between w-full mb-6">
                    <span className="font-display font-black text-3xl sm:text-4xl text-[#D96F58] group-hover:scale-105 transition-transform">
                      {step.num}
                    </span>
                    <div className="w-12 h-12 rounded-2xl bg-[#F8F4EF] group-hover:bg-[#0B2239] text-[#0B2239] group-hover:text-white flex items-center justify-center transition-colors">
                      <Icon className="w-5 h-5" />
                    </div>
                  </div>

                  <h3 className="font-display font-bold text-base sm:text-lg text-[#0B2239] uppercase tracking-tight mb-2">
                    {step.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-[#68717A] leading-relaxed">
                    {step.desc}
                  </p>

                  <div className="mt-4 pt-3 border-t border-[#F8F4EF] w-full flex items-center text-[11px] font-semibold text-[#68717A]">
                    <span>Step {idx + 1} of 4</span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};
