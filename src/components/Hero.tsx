import React from 'react';
import { Phone, MessageCircle, ArrowDown, Sparkles, MapPin, Building2, CheckCircle2 } from 'lucide-react';
import heroVillaImg from '../assets/images/hero_property_villa_1789448557171.jpg';
import { BUSINESS_INFO } from '../data/properties';

interface HeroProps {
  onSelectFeaturedProperty?: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onSelectFeaturedProperty }) => {
  const scrollToProperties = () => {
    const el = document.getElementById('properties');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      id="home"
      className="relative overflow-hidden bg-[#F8F4EF] pt-6 pb-16 md:pt-10 md:pb-24 lg:pt-14 lg:pb-28"
    >
      {/* Subtle architectural background accents inspired by the reference */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#EFE8DF] rounded-full blur-3xl -z-10 opacity-70 pointer-events-none" />
      <div className="absolute -bottom-10 left-10 w-72 h-72 bg-[#D96F58]/10 rounded-full blur-3xl -z-10 pointer-events-none" />
      <div className="hidden lg:block absolute top-20 right-1/3 w-px h-64 bg-[#EFE8DF] -z-10 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          {/* Left Column: Editorial Typography & Conversion CTAs */}
          <div className="lg:col-span-7 flex flex-col items-start">
            {/* Small Eyebrow Badge */}
            <div
              id="hero-eyebrow"
              className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-[#EFE8DF] shadow-2xs mb-6 text-xs font-bold tracking-widest text-[#0B2239] uppercase"
            >
              <span className="w-2 h-2 rounded-full bg-[#D96F58] animate-pulse" />
              <span>NASIR REAL ESTATE</span>
              <span className="text-[#94A3B8]">|</span>
              <span className="text-[#68717A] font-normal normal-case flex items-center gap-1">
                <MapPin className="w-3 h-3 text-[#D96F58]" /> Chenab Nagar & Chiniot
              </span>
            </div>

            {/* Large Dramatic Headline */}
            <h1
              id="hero-headline"
              className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-[68px] font-black text-[#0B2239] leading-[1.06] tracking-tight uppercase mb-6"
            >
              FIND A PLACE <br className="hidden sm:inline" />
              THAT FEELS <br className="hidden sm:inline" />
              LIKE HOME.{' '}
              <span className="block mt-2 text-[#D96F58]">YOUR NEXT PROPERTY</span>
            </h1>

            {/* Supporting Paragraph */}
            <p
              id="hero-subtext"
              className="text-base sm:text-lg text-[#68717A] max-w-xl font-normal leading-relaxed mb-8"
            >
              Discover residential and commercial property opportunities with Nasir Real Estate. Explore the right location, the right property, and the right opportunity.
            </p>

            {/* CTA Group: Primary, Secondary WhatsApp, and Direct Phone */}
            <div className="w-full flex flex-col sm:flex-row items-stretch sm:items-center gap-4 mb-8">
              {/* Primary: Explore Properties */}
              <button
                id="hero-btn-explore"
                onClick={scrollToProperties}
                className="inline-flex items-center justify-center gap-2 bg-[#0B2239] hover:bg-[#07182A] text-white px-7 py-3.5 rounded-full font-semibold text-base shadow-md hover:shadow-lg transition-all duration-200 transform hover:-translate-y-0.5 cursor-pointer"
              >
                <span>Explore Properties</span>
                <ArrowDown className="w-4 h-4 text-[#D96F58]" />
              </button>

              {/* Secondary: WhatsApp Us */}
              <a
                id="hero-btn-whatsapp"
                href={BUSINESS_INFO.whatsappBaseUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 bg-[#D96F58] hover:bg-[#E27A61] text-white px-7 py-3.5 rounded-full font-semibold text-base shadow-md hover:shadow-lg transition-all duration-200 transform hover:-translate-y-0.5"
              >
                <MessageCircle className="w-5 h-5" />
                <span>WhatsApp Us</span>
              </a>

              {/* Direct Clickable Phone Button */}
              <a
                id="hero-phone-link"
                href={BUSINESS_INFO.phoneHref}
                className="inline-flex items-center justify-center gap-2 px-5 py-3.5 rounded-full bg-white hover:bg-[#EFE8DF] text-[#0B2239] border border-[#EFE8DF] font-semibold text-base shadow-xs transition-colors group"
                title="Call 03163370864"
              >
                <Phone className="w-4 h-4 text-[#D96F58] group-hover:scale-110 transition-transform" />
                <span className="font-mono">{BUSINESS_INFO.phoneDisplay}</span>
              </a>
            </div>

            {/* Quick Trust Highlights */}
            <div className="pt-6 border-t border-[#EFE8DF] w-full grid grid-cols-3 gap-3 text-xs sm:text-sm text-[#68717A]">
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-[#D96F58] shrink-0" />
                <span className="font-medium text-[#202A33]">Chenab Nagar</span>
              </div>
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-[#D96F58] shrink-0" />
                <span className="font-medium text-[#202A33]">Chiniot Markets</span>
              </div>
              <div className="flex items-center gap-1.5">
                <Building2 className="w-4 h-4 text-[#D96F58] shrink-0" />
                <span className="font-medium text-[#202A33]">Chamber Affiliation</span>
              </div>
            </div>
          </div>

          {/* Right Column: Architectural Photography & Floating Property Card */}
          <div className="lg:col-span-5 relative mt-4 lg:mt-0">
            {/* Decorative Architectural Offset Card behind image */}
            <div className="absolute -top-4 -right-4 sm:-top-6 sm:-right-6 w-full h-full rounded-3xl bg-[#0B2239] -z-10 transform rotate-1 sm:rotate-2 opacity-95 transition-transform" />
            
            {/* Coral Accent Line */}
            <div className="absolute -bottom-3 -left-3 w-32 h-32 rounded-3xl border-2 border-[#D96F58] -z-10 opacity-60" />

            {/* Main Luxury Architectural Image */}
            <div
              id="hero-image-wrapper"
              className="relative rounded-3xl overflow-hidden shadow-2xl bg-[#07182A] border-4 border-white aspect-[4/3] sm:aspect-[4/3]"
            >
              <img
                id="hero-property-image"
                src={heroVillaImg}
                alt="Contemporary luxury villa exterior in Chenab Nagar"
                referrerPolicy="no-referrer"
                loading="eager"
                className="w-full h-full object-cover object-center transform hover:scale-105 transition-transform duration-700 ease-out"
              />

              {/* Gradient overlay on image bottom */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#07182A]/70 via-transparent to-transparent pointer-events-none" />

              {/* Top corner category badge */}
              <div className="absolute top-4 left-4">
                <span className="px-3 py-1 rounded-full bg-[#0B2239]/80 backdrop-blur-md text-white text-xs font-semibold uppercase tracking-wider border border-white/20">
                  Featured Property
                </span>
              </div>
            </div>

            {/* Floating Property Information Card */}
            <div
              id="hero-floating-card"
              className="absolute -bottom-6 left-4 right-4 sm:left-6 sm:right-auto sm:w-[320px] bg-white/95 backdrop-blur-md p-5 rounded-2xl shadow-xl border border-[#EFE8DF] transform transition-all duration-300 hover:-translate-y-1"
            >
              <div className="flex items-center justify-between mb-1.5">
                <span className="inline-flex items-center gap-1 text-[11px] font-bold uppercase tracking-wider text-[#D96F58]">
                  <Sparkles className="w-3.5 h-3.5" /> FEATURED PROPERTY
                </span>
                <span className="text-xs font-mono font-bold text-[#0B2239] bg-[#F8F4EF] px-2 py-0.5 rounded">
                  12 Marla
                </span>
              </div>

              <h4 className="font-display font-bold text-base text-[#0B2239] leading-snug">
                Modern Family Residence
              </h4>

              <p className="text-xs text-[#68717A] mt-0.5 mb-3">
                Premium location • Spacious design
              </p>

              <div className="flex items-center justify-between pt-2 border-t border-[#EFE8DF]">
                <span className="text-xs font-semibold text-[#202A33]">
                  Chenab Nagar Sector
                </span>
                <button
                  id="hero-view-property-btn"
                  onClick={onSelectFeaturedProperty || scrollToProperties}
                  className="inline-flex items-center gap-1 text-xs font-bold text-[#D96F58] hover:text-[#0B2239] transition-colors cursor-pointer"
                >
                  <span>View Property</span>
                  <span>&rarr;</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
