import React from 'react';
import { MessageCircle, ShieldCheck, MapPin, CheckCircle2 } from 'lucide-react';
import { motion } from 'motion/react';
import luxuryResidenceImg from '../assets/images/luxury_residence_exterior_1789448571396.jpg';
import { BUSINESS_INFO } from '../data/properties';
import { useTheme } from '../context/ThemeContext';

export const WhyChooseUs: React.FC = () => {
  const { isDark } = useTheme();

  const benefits = [
    {
      num: '01',
      title: 'LOCAL FOCUS & VERIFICATION',
      desc: 'In-depth geographic grounding across Chenab Nagar, Chiniot, and adjoining trade avenues ensures realistic market values and clean titles.'
    },
    {
      num: '02',
      title: 'TRANSPARENT NEGOTIATION',
      desc: 'No vague jargon, hidden surprises, or artificial markup. We facilitate straightforward, face-to-face discussions from initial visit to registry.'
    },
    {
      num: '03',
      title: 'PROPERTY-FIRST APPROACH',
      desc: 'We prioritize finding the exact property fit for your family residence or commercial project rather than pushing unwanted inventory.'
    },
    {
      num: '04',
      title: 'DIRECT ACCESSIBILITY',
      desc: 'Connect with decision-makers immediately through phone or WhatsApp without bureaucratic gatekeepers or waiting days for responses.'
    }
  ];

  return (
    <section
      id="why-us"
      className={`py-16 md:py-24 transition-colors ${
        isDark ? 'bg-[#080E18]' : 'bg-[#FAF7F2]'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          {/* Left Column: Large Architectural Luxury Photography */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-6 relative"
          >
            {/* Background geometric offset */}
            <div
              className={`absolute -top-4 -left-4 w-full h-full rounded-3xl -z-10 -rotate-1 sm:-rotate-2 transition-transform ${
                isDark ? 'bg-[#0E1726] border border-amber-400/20' : 'bg-[#0B2239] opacity-90'
              }`}
            />

            <div
              className={`relative rounded-3xl overflow-hidden shadow-2xl border-4 aspect-[4/3] group ${
                isDark ? 'border-white/10 bg-[#0A1220]' : 'border-white bg-[#07182A]'
              }`}
            >
              <img
                src={luxuryResidenceImg}
                alt="Luxury modern property architecture in Chiniot"
                referrerPolicy="no-referrer"
                loading="lazy"
                className="w-full h-full object-cover object-center group-hover:scale-106 transition-transform duration-700 ease-out"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent pointer-events-none" />

              {/* Floating Quality Badge with Motion */}
              <motion.div
                whileHover={{ y: -3 }}
                className="absolute bottom-4 left-4 right-4 sm:right-auto bg-[#0B2239]/90 backdrop-blur-md text-white p-4 rounded-2xl border border-white/20 shadow-xl max-w-xs"
              >
                <div className="flex items-center gap-2 mb-1">
                  <ShieldCheck className="w-5 h-5 text-[#D96F58]" />
                  <span className="font-display font-bold text-xs uppercase tracking-wider">
                    TRUSTED LOCAL ADVISOR
                  </span>
                </div>
                <p className="text-[11px] text-slate-300 leading-tight">
                  Chenab Nagar, Chiniot, and Chamber of Faisalabad network affiliation.
                </p>
              </motion.div>
            </div>
          </motion.div>

          {/* Right Column: Narrative & 4 Benefit Points */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-6 flex flex-col items-start"
          >
            <span className="text-xs font-bold uppercase tracking-widest text-[#D96F58] mb-2 block">
              WHY NASIR REAL ESTATE
            </span>

            <h2
              id="why-us-heading"
              className={`font-display text-3xl sm:text-4xl md:text-[44px] font-black uppercase tracking-tight leading-[1.12] mb-5 ${
                isDark ? 'text-white' : 'text-[#0B2239]'
              }`}
            >
              A BETTER PROPERTY EXPERIENCE STARTS WITH THE RIGHT GUIDANCE.
            </h2>

            <p className={`text-sm sm:text-base leading-relaxed mb-8 ${isDark ? 'text-slate-300' : 'text-[#68717A]'}`}>
              Navigating property acquisition or disposition requires clarity, realistic market insight, and reliable personal communication. Nasir Real Estate offers a hands-on, trustworthy experience tailored to your exact criteria.
            </p>

            {/* 4 Benefits Stack */}
            <div className="w-full space-y-3.5 mb-8">
              {benefits.map((b, idx) => (
                <motion.div
                  key={b.num}
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.35, delay: idx * 0.08 }}
                  whileHover={{ x: 4 }}
                  className={`rounded-2xl p-4 sm:p-5 border shadow-xs transition-all flex gap-4 items-start ${
                    isDark
                      ? 'bg-[#0B1424]/90 border-white/10 hover:border-[#D96F58]/40'
                      : 'bg-white border-[#EFE8DF] hover:border-[#D96F58]/40'
                  }`}
                >
                  <span className="font-mono font-bold text-base sm:text-lg text-[#D96F58] shrink-0 pt-0.5">
                    {b.num}
                  </span>
                  <div>
                    <h3
                      className={`font-display font-bold text-sm sm:text-base uppercase tracking-wide mb-1 ${
                        isDark ? 'text-white' : 'text-[#0B2239]'
                      }`}
                    >
                      {b.title}
                    </h3>
                    <p className={`text-xs sm:text-sm leading-relaxed ${isDark ? 'text-slate-300' : 'text-[#68717A]'}`}>
                      {b.desc}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Talk to Nasir Real Estate CTA */}
            <motion.a
              id="why-us-talk-btn"
              href={BUSINESS_INFO.whatsappBaseUrl}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              className="inline-flex items-center gap-2.5 bg-[#D96F58] hover:bg-[#E27A61] text-white px-7 py-3.5 rounded-full font-bold text-sm sm:text-base shadow-lg transition-all"
            >
              <MessageCircle className="w-5 h-5" />
              <span>Talk to Nasir Real Estate</span>
            </motion.a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
