import React from 'react';
import { Building, MapPin, Award, CheckCircle } from 'lucide-react';
import { BUSINESS_INFO } from '../data/properties';

export const AboutSection: React.FC = () => {
  return (
    <section id="about" className="py-16 md:py-24 bg-white border-b border-[#EFE8DF]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column: Text & Verified Information */}
          <div className="lg:col-span-7 flex flex-col items-start">
            {/* Visual Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#F8F4EF] border border-[#EFE8DF] text-[11px] font-extrabold uppercase tracking-widest text-[#D96F58] mb-4">
              <span>PROPERTY • TRUST • SERVICE</span>
            </div>

            <h2
              id="about-heading"
              className="font-display text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#0B2239] uppercase tracking-tight mb-6"
            >
              ABOUT NASIR REAL ESTATE
            </h2>

            {/* Prompt's Verified Content */}
            <p className="text-base sm:text-lg text-[#202A33] font-normal leading-relaxed mb-6">
              Nasir Real Estate is focused on helping clients explore property opportunities with clarity, confidence, and straightforward communication. Serving customers around <strong className="font-semibold text-[#0B2239]">Chenab Nagar, Chiniot</strong> and connected property markets, the business aims to make buying, selling, and property inquiries simpler.
            </p>

            <p className="text-sm sm:text-base text-[#68717A] leading-relaxed mb-8">
              With deep local market familiarity and institutional connection through the <strong className="font-semibold text-[#0B2239]">Chamber of Faisalabad</strong>, our objective is to remove guesswork from your real estate transactions. Every client relationship is guided by transparent information, timely communication, and respect for your investments.
            </p>

            {/* Verified Fact Highlights */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 w-full pt-6 border-t border-[#EFE8DF] mb-8">
              <div className="p-4 rounded-2xl bg-[#F8F4EF] border border-[#EFE8DF]">
                <div className="flex items-center gap-2 mb-1.5 text-[#0B2239]">
                  <MapPin className="w-4 h-4 text-[#D96F58]" />
                  <span className="font-display font-bold text-xs uppercase tracking-wider">
                    Primary Service Area
                  </span>
                </div>
                <p className="text-sm font-semibold text-[#202A33]">
                  Chenab Nagar, Chiniot & Surrounding Sectors
                </p>
              </div>

              <div className="p-4 rounded-2xl bg-[#F8F4EF] border border-[#EFE8DF]">
                <div className="flex items-center gap-2 mb-1.5 text-[#0B2239]">
                  <Building className="w-4 h-4 text-[#D96F58]" />
                  <span className="font-display font-bold text-xs uppercase tracking-wider">
                    Chamber / Office Connection
                  </span>
                </div>
                <p className="text-sm font-semibold text-[#202A33]">
                  Chamber of Faisalabad
                </p>
              </div>
            </div>

            {/* Direct Contact Button */}
            <a
              id="about-whatsapp-cta"
              href={BUSINESS_INFO.whatsappBaseUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-[#0B2239] hover:bg-[#07182A] text-white px-7 py-3.5 rounded-full font-semibold text-sm transition-all"
            >
              <span>Connect with Nasir Real Estate</span>
              <span className="text-[#D96F58] font-bold">&rarr;</span>
            </a>
          </div>

          {/* Right Column: Architectural Image & Badge */}
          <div className="lg:col-span-5 relative">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-[#F8F4EF] aspect-[4/5] bg-[#07182A]">
              <img
                src="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1200&q=80"
                alt="Modern property architectural design"
                referrerPolicy="no-referrer"
                loading="lazy"
                className="w-full h-full object-cover object-center transform hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#07182A]/80 via-transparent to-transparent pointer-events-none" />

              <div className="absolute bottom-6 left-6 right-6 p-5 rounded-2xl bg-white/95 backdrop-blur-md border border-[#EFE8DF] shadow-lg">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <Award className="w-5 h-5 text-[#D96F58]" />
                    <span className="font-display font-bold text-xs uppercase tracking-wider text-[#0B2239]">
                      Dedicated Service
                    </span>
                  </div>
                  <span className="text-xs font-mono font-bold text-[#D96F58]">
                    03163370864
                  </span>
                </div>
                <p className="text-xs text-[#68717A] mt-1">
                  Ready to answer your property questions on phone or WhatsApp.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
