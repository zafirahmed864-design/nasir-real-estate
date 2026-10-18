import React from 'react';
import { MessageCircle, ShieldCheck, MapPin, Eye, CheckCircle2 } from 'lucide-react';
import luxuryResidenceImg from '../assets/images/luxury_residence_exterior_1789448571396.jpg';
import { BUSINESS_INFO } from '../data/properties';

export const WhyChooseUs: React.FC = () => {
  const benefits = [
    {
      num: '01',
      title: 'LOCAL FOCUS',
      desc: 'In-depth geographic grounding across Chenab Nagar, Chiniot, and adjoining trade avenues ensures you get realistic market assessments.'
    },
    {
      num: '02',
      title: 'CLEAR COMMUNICATION',
      desc: 'No vague jargon, hidden surprises, or artificial hype. We provide straightforward, transparent guidance from initial query to deal closing.'
    },
    {
      num: '03',
      title: 'PROPERTY-FIRST APPROACH',
      desc: 'We prioritize finding the exact property fit for your family or commercial enterprise rather than pushing inappropriate inventory.'
    },
    {
      num: '04',
      title: 'EASY DIRECT CONTACT',
      desc: 'Reach decision-makers immediately through phone or WhatsApp without bureaucratic gatekeepers or waiting days for responses.'
    }
  ];

  return (
    <section id="why-us" className="py-16 md:py-24 bg-[#F8F4EF]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          {/* Left Column: Large Architectural Luxury Photography */}
          <div className="lg:col-span-6 relative">
            {/* Background geometric offset */}
            <div className="absolute -top-4 -left-4 w-full h-full rounded-3xl bg-[#0B2239] -z-10 -rotate-1 sm:-rotate-2 opacity-90" />

            <div className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-white aspect-[4/3] bg-[#07182A]">
              <img
                src={luxuryResidenceImg}
                alt="Luxury modern property architecture in Chiniot"
                referrerPolicy="no-referrer"
                loading="lazy"
                className="w-full h-full object-cover object-center transform hover:scale-105 transition-transform duration-700 ease-out"
              />

              {/* Floating Quality Badge */}
              <div className="absolute bottom-4 left-4 right-4 sm:right-auto bg-[#0B2239]/90 backdrop-blur-md text-white p-4 rounded-2xl border border-white/20 shadow-xl max-w-xs">
                <div className="flex items-center gap-2 mb-1">
                  <ShieldCheck className="w-5 h-5 text-[#D96F58]" />
                  <span className="font-display font-bold text-xs uppercase tracking-wider">
                    TRUSTED LOCAL ADVISOR
                  </span>
                </div>
                <p className="text-[11px] text-[#94A3B8] leading-tight">
                  Connecting Chenab Nagar, Chiniot, and the Chamber of Faisalabad network.
                </p>
              </div>
            </div>
          </div>

          {/* Right Column: Narrative & 4 Benefit Points */}
          <div className="lg:col-span-6 flex flex-col items-start">
            <span className="text-xs font-bold uppercase tracking-widest text-[#D96F58] mb-2 block">
              WHY NASIR REAL ESTATE
            </span>

            <h2
              id="why-us-heading"
              className="font-display text-3xl sm:text-4xl md:text-[44px] font-extrabold text-[#0B2239] uppercase tracking-tight leading-[1.12] mb-5"
            >
              A BETTER PROPERTY EXPERIENCE STARTS WITH THE RIGHT GUIDANCE.
            </h2>

            <p className="text-sm sm:text-base text-[#68717A] leading-relaxed mb-8">
              Navigating property acquisition or disposition requires clarity, realistic local insight, and reliable personal communication. Nasir Real Estate offers a hands-on, trustworthy experience tailored to your specific criteria.
            </p>

            {/* 4 Benefits Stack */}
            <div className="w-full space-y-4 mb-8">
              {benefits.map((b) => (
                <div
                  key={b.num}
                  className="bg-white rounded-2xl p-4 sm:p-5 border border-[#EFE8DF] shadow-xs hover:border-[#D96F58]/40 transition-colors flex gap-4 items-start"
                >
                  <span className="font-mono font-bold text-base sm:text-lg text-[#D96F58] shrink-0 pt-0.5">
                    {b.num}
                  </span>
                  <div>
                    <h3 className="font-display font-bold text-sm sm:text-base text-[#0B2239] uppercase tracking-wide mb-1">
                      {b.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-[#68717A] leading-relaxed">
                      {b.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* Talk to Nasir Real Estate CTA */}
            <a
              id="why-us-talk-btn"
              href={BUSINESS_INFO.whatsappBaseUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2.5 bg-[#D96F58] hover:bg-[#E27A61] text-white px-7 py-3.5 rounded-full font-bold text-sm sm:text-base shadow-md hover:shadow-lg transition-all transform hover:-translate-y-0.5"
            >
              <MessageCircle className="w-5 h-5" />
              <span>Talk to Nasir Real Estate</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
