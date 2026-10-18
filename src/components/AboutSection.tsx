import React from 'react';
import { Building, MapPin, Award, CheckCircle } from 'lucide-react';
import { motion } from 'motion/react';
import luxuryInteriorLivingImg from '../assets/images/luxury_interior_living_1792330115035.jpg';
import { BUSINESS_INFO } from '../data/properties';
import { useTheme } from '../context/ThemeContext';

export const AboutSection: React.FC = () => {
  const { isDark } = useTheme();

  return (
    <section
      id="about"
      className={`py-16 md:py-24 border-b transition-colors ${
        isDark ? 'bg-[#060B14] border-white/10' : 'bg-white border-[#EFE8DF]'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column: Text & Verified Information */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7 flex flex-col items-start"
          >
            {/* Visual Badge */}
            <div
              className={`inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border text-[11px] font-extrabold uppercase tracking-widest text-[#D96F58] mb-4 ${
                isDark ? 'bg-white/5 border-white/10' : 'bg-[#FAF7F2] border-[#EFE8DF]'
              }`}
            >
              <span>PROPERTY • TRUST • INTEGRITY</span>
            </div>

            <h2
              id="about-heading"
              className={`font-display text-3xl sm:text-4xl md:text-5xl font-black uppercase tracking-tight mb-6 ${
                isDark ? 'text-white' : 'text-[#0B2239]'
              }`}
            >
              ABOUT NASIR REAL ESTATE
            </h2>

            <p className={`text-base sm:text-lg font-normal leading-relaxed mb-6 ${
              isDark ? 'text-slate-200' : 'text-[#202A33]'
            }`}>
              Nasir Real Estate is dedicated to helping clients explore property opportunities with clarity, confidence, and straightforward communication. Serving customers across <strong className={`font-semibold ${isDark ? 'text-amber-300' : 'text-[#0B2239]'}`}>Chenab Nagar, Chiniot</strong> and connecting property corridors, our mission is to make buying, selling, and property advisory simpler and safer.
            </p>

            <p className={`text-sm sm:text-base leading-relaxed mb-8 ${
              isDark ? 'text-slate-300' : 'text-[#68717A]'
            }`}>
              With deep local market familiarity and institutional connection through the <strong className={`font-semibold ${isDark ? 'text-white' : 'text-[#0B2239]'}`}>Chamber of Faisalabad</strong>, our objective is to eliminate guesswork from your real estate transactions. Every client relationship is guided by transparent documentation, verified title deeds, and genuine respect for your family investments.
            </p>

            {/* Verified Fact Highlights */}
            <div className={`grid grid-cols-1 sm:grid-cols-2 gap-4 w-full pt-6 border-t mb-8 ${
              isDark ? 'border-white/10' : 'border-[#EFE8DF]'
            }`}>
              <div
                className={`p-4 rounded-2xl border ${
                  isDark ? 'bg-[#0B1424] border-white/10' : 'bg-[#FAF7F2] border-[#EFE8DF]'
                }`}
              >
                <div className="flex items-center gap-2 mb-1.5">
                  <MapPin className="w-4 h-4 text-[#D96F58]" />
                  <span className={`font-display font-bold text-xs uppercase tracking-wider ${
                    isDark ? 'text-white' : 'text-[#0B2239]'
                  }`}>
                    Primary Service Area
                  </span>
                </div>
                <p className={`text-sm font-semibold ${isDark ? 'text-slate-200' : 'text-[#202A33]'}`}>
                  Chenab Nagar, Chiniot & Surrounding Sectors
                </p>
              </div>

              <div
                className={`p-4 rounded-2xl border ${
                  isDark ? 'bg-[#0B1424] border-white/10' : 'bg-[#FAF7F2] border-[#EFE8DF]'
                }`}
              >
                <div className="flex items-center gap-2 mb-1.5">
                  <Building className="w-4 h-4 text-[#D96F58]" />
                  <span className={`font-display font-bold text-xs uppercase tracking-wider ${
                    isDark ? 'text-white' : 'text-[#0B2239]'
                  }`}>
                    Institutional Connection
                  </span>
                </div>
                <p className={`text-sm font-semibold ${isDark ? 'text-slate-200' : 'text-[#202A33]'}`}>
                  Chamber of Faisalabad Network
                </p>
              </div>
            </div>

            {/* Direct Contact Button */}
            <motion.a
              id="about-whatsapp-cta"
              href={BUSINESS_INFO.whatsappBaseUrl}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              className={`inline-flex items-center gap-2 px-7 py-3.5 rounded-full font-bold text-sm shadow-md transition-all ${
                isDark
                  ? 'bg-white text-[#0B2239] hover:bg-slate-100'
                  : 'bg-[#0B2239] hover:bg-[#07182A] text-white'
              }`}
            >
              <span>Connect with Nasir Real Estate</span>
              <span className="text-[#D96F58] font-bold">&rarr;</span>
            </motion.a>
          </motion.div>

          {/* Right Column: Architectural Image & Badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-5 relative"
          >
            <div
              className={`relative rounded-3xl overflow-hidden shadow-2xl border-4 aspect-[4/5] group ${
                isDark ? 'border-white/10 bg-[#0A1220]' : 'border-[#FAF7F2] bg-[#07182A]'
              }`}
            >
              <img
                src={luxuryInteriorLivingImg}
                alt="Modern luxury interior architectural design"
                referrerPolicy="no-referrer"
                loading="lazy"
                className="w-full h-full object-cover object-center group-hover:scale-106 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent pointer-events-none" />

              <div
                className={`absolute bottom-6 left-6 right-6 p-5 rounded-2xl border shadow-xl backdrop-blur-md ${
                  isDark
                    ? 'bg-[#0C1524]/90 border-white/15 text-white'
                    : 'bg-white/95 border-[#EFE8DF] text-[#0B2239]'
                }`}
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <Award className="w-5 h-5 text-[#D96F58]" />
                    <span className="font-display font-bold text-xs uppercase tracking-wider">
                      Dedicated Service
                    </span>
                  </div>
                  <span className="text-xs font-mono font-bold text-[#D96F58]">
                    03163370864
                  </span>
                </div>
                <p className={`text-xs mt-1 ${isDark ? 'text-slate-300' : 'text-[#68717A]'}`}>
                  Ready to answer your property questions directly on phone or WhatsApp.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
