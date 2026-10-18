import React from 'react';
import { Phone, MessageCircle, ArrowDown, MapPin, Building2, CheckCircle2, Shield, Sparkles } from 'lucide-react';
import { motion } from 'motion/react';
import heroVillaImg from '../assets/images/hero_property_villa_1789448557171.jpg';
import { BUSINESS_INFO } from '../data/properties';
import { useTheme } from '../context/ThemeContext';

interface HeroProps {
  onSelectFeaturedProperty?: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onSelectFeaturedProperty }) => {
  const { isDark } = useTheme();

  const scrollToProperties = () => {
    const el = document.getElementById('properties');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.12,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 25 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] },
    },
  };

  return (
    <section
      id="home"
      className={`relative overflow-hidden pt-8 pb-16 md:pt-14 md:pb-24 lg:pt-18 lg:pb-28 transition-colors ${
        isDark
          ? 'bg-[#060B14] text-white bg-luxury-grid-dark'
          : 'bg-[#FAF7F2] text-[#0B2239] bg-luxury-grid-light'
      }`}
    >
      {/* Ambient Glowing Floating Orbs with Motion */}
      <motion.div
        animate={{
          scale: [1, 1.15, 1],
          opacity: isDark ? [0.2, 0.35, 0.2] : [0.12, 0.22, 0.12],
          x: [0, 20, 0],
        }}
        transition={{ duration: 12, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute top-10 right-10 w-96 h-96 bg-gradient-to-br from-[#D96F58] to-amber-500 rounded-full blur-3xl -z-10 pointer-events-none"
      />
      <motion.div
        animate={{
          scale: [1, 1.2, 1],
          opacity: isDark ? [0.15, 0.28, 0.15] : [0.1, 0.18, 0.1],
          y: [0, -25, 0],
        }}
        transition={{ duration: 15, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute -bottom-20 left-10 w-80 h-80 bg-[#0B2239] rounded-full blur-3xl -z-10 pointer-events-none"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          {/* Left Column: Editorial Typography & Animated Entrances */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="lg:col-span-7 flex flex-col items-start"
          >
            {/* Eyebrow Badge */}
            <motion.div
              variants={itemVariants}
              id="hero-eyebrow"
              className={`inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full border shadow-xs mb-6 text-xs font-bold tracking-widest uppercase backdrop-blur-md ${
                isDark
                  ? 'bg-[#0E1726]/80 border-white/10 text-slate-200'
                  : 'bg-white border-[#EFE8DF] text-[#0B2239]'
              }`}
            >
              <span className="w-2 h-2 rounded-full bg-[#D96F58] animate-ping" />
              <span>NASIR REAL ESTATE</span>
              <span className="text-[#94A3B8]">|</span>
              <span className="font-normal normal-case flex items-center gap-1 text-[#D96F58]">
                <MapPin className="w-3.5 h-3.5" /> Chenab Nagar & Chiniot
              </span>
            </motion.div>

            {/* Dramatic Luxury Headline */}
            <motion.h1
              variants={itemVariants}
              id="hero-headline"
              className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-[70px] font-black leading-[1.05] tracking-tight uppercase mb-6"
            >
              FIND A PLACE <br className="hidden sm:inline" />
              THAT FEELS <br className="hidden sm:inline" />
              LIKE HOME.{' '}
              <span className="block mt-2 text-[#D96F58] drop-shadow-xs">
                YOUR NEXT PROPERTY
              </span>
            </motion.h1>

            {/* Supporting Value Proposition */}
            <motion.p
              variants={itemVariants}
              id="hero-subtext"
              className={`text-base sm:text-lg max-w-xl font-normal leading-relaxed mb-8 ${
                isDark ? 'text-slate-300' : 'text-[#5C6670]'
              }`}
            >
              Discover verified residential and commercial property opportunities with Nasir Real Estate. Explore the right location, the right property, and direct owner pricing in Chenab Nagar & Chiniot.
            </motion.p>

            {/* CTA Group: Explore, WhatsApp, Phone */}
            <motion.div
              variants={itemVariants}
              className="w-full flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 mb-10"
            >
              {/* Primary: Explore Properties */}
              <motion.button
                id="hero-btn-explore"
                onClick={scrollToProperties}
                whileHover={{ scale: 1.03, y: -2 }}
                whileTap={{ scale: 0.97 }}
                className={`inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full font-bold text-sm sm:text-base shadow-lg transition-all cursor-pointer ${
                  isDark
                    ? 'bg-white text-[#0B2239] hover:bg-slate-100'
                    : 'bg-[#0B2239] text-white hover:bg-[#07182A]'
                }`}
              >
                <span>Explore Properties</span>
                <ArrowDown className="w-4 h-4 text-[#D96F58]" />
              </motion.button>

              {/* Secondary: WhatsApp Us */}
              <motion.a
                id="hero-btn-whatsapp"
                href={BUSINESS_INFO.whatsappBaseUrl}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.03, y: -2 }}
                whileTap={{ scale: 0.97 }}
                className="inline-flex items-center justify-center gap-2 bg-gradient-to-r from-[#D96F58] to-[#C85A42] hover:from-[#E27A61] hover:to-[#D96F58] text-white px-7 py-3.5 rounded-full font-bold text-sm sm:text-base shadow-lg transition-all"
              >
                <MessageCircle className="w-4 h-4" />
                <span>WhatsApp Us</span>
              </motion.a>

              {/* Direct Clickable Phone Button */}
              <motion.a
                id="hero-phone-link"
                href={BUSINESS_INFO.phoneHref}
                whileHover={{ scale: 1.03, y: -2 }}
                whileTap={{ scale: 0.97 }}
                className={`inline-flex items-center justify-center gap-2 px-5 py-3.5 rounded-full border font-bold text-sm sm:text-base shadow-xs transition-colors ${
                  isDark
                    ? 'bg-[#0E1726]/80 hover:bg-[#152238] border-white/10 text-white'
                    : 'bg-white hover:bg-[#F2ECE1] border-[#EFE8DF] text-[#0B2239]'
                }`}
                title="Call 03163370864"
              >
                <Phone className="w-4 h-4 text-[#D96F58]" />
                <span className="font-mono">{BUSINESS_INFO.phoneDisplay}</span>
              </motion.a>
            </motion.div>

            {/* Quick Proof Metrics Strip */}
            <motion.div
              variants={itemVariants}
              className={`pt-6 border-t w-full grid grid-cols-3 gap-4 text-xs sm:text-sm ${
                isDark ? 'border-white/10 text-slate-300' : 'border-[#EFE8DF] text-[#68717A]'
              }`}
            >
              <div>
                <span className="block font-mono font-black text-xl sm:text-2xl text-[#D96F58]">
                  15+
                </span>
                <span className="text-[11px] sm:text-xs font-medium uppercase tracking-wider opacity-80">
                  Years Local Insight
                </span>
              </div>
              <div>
                <span className="block font-mono font-black text-xl sm:text-2xl text-[#D96F58]">
                  1,200+
                </span>
                <span className="text-[11px] sm:text-xs font-medium uppercase tracking-wider opacity-80">
                  Verified Inquiries
                </span>
              </div>
              <div>
                <span className="block font-mono font-black text-xl sm:text-2xl text-[#D96F58]">
                  100%
                </span>
                <span className="text-[11px] sm:text-xs font-medium uppercase tracking-wider opacity-80">
                  Clear Land Titles
                </span>
              </div>
            </motion.div>
          </motion.div>

          {/* Right Column: Architectural Image & Interactive Floating Card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.92, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.25, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-5 relative mt-6 lg:mt-0"
          >
            {/* Architectural Backdrop Frame with Glow */}
            <div
              className={`absolute -top-4 -right-4 sm:-top-6 sm:-right-6 w-full h-full rounded-3xl -z-10 transform rotate-1 sm:rotate-2 transition-transform ${
                isDark ? 'bg-[#0E1726] border border-amber-400/20 shadow-2xl' : 'bg-[#0B2239] opacity-90'
              }`}
            />
            
            <div className="absolute -bottom-3 -left-3 w-32 h-32 rounded-3xl border-2 border-[#D96F58] -z-10 opacity-50" />

            {/* Main Luxury Architectural Image */}
            <div
              id="hero-image-wrapper"
              className={`relative rounded-3xl overflow-hidden shadow-2xl border-4 aspect-[4/3] group ${
                isDark ? 'border-white/10 bg-[#0A1220]' : 'border-white bg-[#07182A]'
              }`}
            >
              <img
                id="hero-property-image"
                src={heroVillaImg}
                alt="Contemporary luxury villa exterior in Chenab Nagar"
                referrerPolicy="no-referrer"
                loading="eager"
                className="w-full h-full object-cover object-center group-hover:scale-106 transition-transform duration-700 ease-out"
              />

              {/* Gradient overlay on image bottom */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent pointer-events-none" />

              {/* Shimmer light sweep effect on card */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 pointer-events-none bg-gradient-to-r from-transparent via-white/15 to-transparent -translate-x-full group-hover:translate-x-full transition-all duration-1000 ease-in-out" />

              {/* Top corner category badge */}
              <div className="absolute top-4 left-4">
                <span className="px-3.5 py-1 rounded-full bg-black/60 backdrop-blur-md text-white text-xs font-bold uppercase tracking-wider border border-white/20">
                  Featured Residence
                </span>
              </div>
            </div>

            {/* Floating Property Information Card with Motion */}
            <motion.div
              id="hero-floating-card"
              whileHover={{ y: -4 }}
              className={`absolute -bottom-6 left-4 right-4 sm:left-6 sm:right-auto sm:w-[330px] p-5 rounded-2xl shadow-2xl border backdrop-blur-xl transition-all ${
                isDark
                  ? 'bg-[#0C1524]/95 border-white/15 text-white'
                  : 'bg-white/95 border-[#EFE8DF] text-[#0B2239]'
              }`}
            >
              <div className="flex items-center justify-between mb-2">
                <span className="inline-flex items-center gap-1 text-[11px] font-bold uppercase tracking-wider text-[#D96F58]">
                  <Sparkles className="w-3.5 h-3.5" /> FEATURED SELECTION
                </span>
                <span
                  className={`text-xs font-mono font-bold px-2 py-0.5 rounded ${
                    isDark ? 'bg-white/10 text-amber-300' : 'bg-[#FAF7F2] text-[#0B2239]'
                  }`}
                >
                  12 Marla
                </span>
              </div>

              <h4 className="font-display font-bold text-base leading-snug">
                Modern Family Residence
              </h4>

              <p className={`text-xs mt-0.5 mb-3 ${isDark ? 'text-slate-300' : 'text-[#68717A]'}`}>
                Available on Request • Chenab Nagar Enclave
              </p>

              <div className={`flex items-center justify-between pt-2.5 border-t ${isDark ? 'border-white/10' : 'border-[#EFE8DF]'}`}>
                <span className="text-xs font-semibold opacity-90">
                  Sector 1
                </span>
                <button
                  id="hero-view-property-btn"
                  onClick={onSelectFeaturedProperty || scrollToProperties}
                  className="inline-flex items-center gap-1.5 text-xs font-bold text-[#D96F58] hover:underline cursor-pointer"
                >
                  <span>View Details</span>
                  <span>&rarr;</span>
                </button>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
