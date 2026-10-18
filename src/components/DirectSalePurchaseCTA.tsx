import React from 'react';
import { Home, KeyRound, MessageCircle, Phone, CheckCircle2, Sparkles, ArrowRight } from 'lucide-react';
import { motion } from 'motion/react';
import { BUSINESS_INFO } from '../data/properties';
import { useTheme } from '../context/ThemeContext';

export const DirectSalePurchaseCTA: React.FC = () => {
  const { isDark } = useTheme();

  const buyWhatsAppUrl = BUSINESS_INFO.getWhatsAppCustomUrl(
    'Hello Nasir Real Estate, I am looking to purchase a property in Chenab Nagar / Chiniot. Please contact me with suitable options and details.'
  );

  const sellWhatsAppUrl = BUSINESS_INFO.getWhatsAppCustomUrl(
    'Hello Nasir Real Estate, I want to sell my property in Chenab Nagar / Chiniot. Please contact me to discuss valuation and buyer connection.'
  );

  return (
    <section
      id="sale-purchase-direct"
      className="pt-16 pb-12 md:pt-24 md:pb-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
    >
      {/* Section Header with Motion */}
      <motion.div
        initial={{ opacity: 0, y: 25 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-center max-w-3xl mx-auto mb-14"
      >
        <div
          className={`inline-flex items-center gap-2 px-4 py-1.5 rounded-full border shadow-2xs mb-3 text-xs font-bold tracking-widest uppercase ${
            isDark ? 'bg-white/5 border-white/10 text-[#D96F58]' : 'bg-white border-[#EFE8DF] text-[#D96F58]'
          }`}
        >
          <Sparkles className="w-3.5 h-3.5 text-[#D96F58]" />
          <span>DIRECT REAL ESTATE PATHWAYS</span>
        </div>

        <h2
          id="direct-cta-heading"
          className={`font-display text-3xl sm:text-4xl md:text-5xl font-black uppercase tracking-tight leading-[1.12] ${
            isDark ? 'text-white' : 'text-[#0B2239]'
          }`}
        >
          LOOKING TO BUY OR SELL? <br />
          <span className="text-[#D96F58]">CONTACT US DIRECTLY</span>
        </h2>

        <p
          className={`mt-4 text-sm sm:text-base md:text-lg max-w-2xl mx-auto leading-relaxed ${
            isDark ? 'text-slate-300' : 'text-[#68717A]'
          }`}
        >
          Skip middlemen and lengthy delays. Whether purchasing a family residence or commercial plot, or listing your property at genuine market value in Chenab Nagar & Chiniot, contact Nasir Real Estate directly.
        </p>
      </motion.div>

      {/* Dual Pathways Grid: Buy & Sell with Motion Cards */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-10">
        {/* 1. FOR BUYERS (PURCHASE PROPERTY) */}
        <motion.div
          id="card-buy-property"
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          whileHover={{ y: -6 }}
          transition={{ duration: 0.4 }}
          className={`relative rounded-3xl p-7 sm:p-9 border shadow-xl transition-all duration-300 flex flex-col justify-between group ${
            isDark
              ? 'bg-[#0B1424]/90 border-white/10 hover:border-[#D96F58]/40 hover:shadow-[0_20px_40px_rgba(217,111,88,0.12)]'
              : 'bg-white border-[#EFE8DF] hover:border-[#D96F58]/30 hover:shadow-2xl'
          }`}
        >
          {/* Top category label & icon */}
          <div className="flex items-center justify-between mb-6">
            <span
              className={`px-3.5 py-1 rounded-full text-xs font-bold uppercase tracking-wider ${
                isDark ? 'bg-white/10 text-slate-200' : 'bg-[#FAF7F2] text-[#D96F58] border border-[#EFE8DF]'
              }`}
            >
              FOR BUYERS • PURCHASE
            </span>
            <div className="w-12 h-12 rounded-2xl bg-[#0B2239] text-white flex items-center justify-center group-hover:bg-[#D96F58] transition-colors shadow-xs">
              <Home className="w-6 h-6" />
            </div>
          </div>

          <div>
            <h3
              className={`font-display font-extrabold text-2xl sm:text-3xl mb-3 leading-tight ${
                isDark ? 'text-white' : 'text-[#0B2239]'
              }`}
            >
              Looking to Purchase Property?
            </h3>

            <p className={`text-sm leading-relaxed mb-6 ${isDark ? 'text-slate-300' : 'text-[#68717A]'}`}>
              Share your desired location, property size (5 Marla, 10 Marla, 1 Kanal, or commercial spaces), and budget. We arrange verified site visits and guide you through safe acquisition.
            </p>

            {/* Checklist */}
            <ul className={`space-y-3 mb-8 pt-4 border-t ${isDark ? 'border-white/10' : 'border-[#EFE8DF]'}`}>
              <li className="flex items-start gap-2.5 text-xs sm:text-sm">
                <CheckCircle2 className="w-4 h-4 text-[#D96F58] shrink-0 mt-0.5" />
                <span className={isDark ? 'text-slate-200' : 'text-[#202A33]'}>
                  Verified registry ownership & zero legal disputes
                </span>
              </li>
              <li className="flex items-start gap-2.5 text-xs sm:text-sm">
                <CheckCircle2 className="w-4 h-4 text-[#D96F58] shrink-0 mt-0.5" />
                <span className={isDark ? 'text-slate-200' : 'text-[#202A33]'}>
                  Prime residential houses & ready plots across Chenab Nagar & Chiniot
                </span>
              </li>
              <li className="flex items-start gap-2.5 text-xs sm:text-sm">
                <CheckCircle2 className="w-4 h-4 text-[#D96F58] shrink-0 mt-0.5" />
                <span className={isDark ? 'text-slate-200' : 'text-[#202A33]'}>
                  Direct face-to-face owner negotiation at transparent market rates
                </span>
              </li>
            </ul>
          </div>

          {/* Action Row for Buyers */}
          <div className={`pt-5 border-t flex flex-col sm:flex-row gap-3 ${isDark ? 'border-white/10' : 'border-[#EFE8DF]'}`}>
            <motion.a
              id="btn-whatsapp-buy"
              href={buyWhatsAppUrl}
              target="_blank"
              rel="noopener noreferrer"
              whileTap={{ scale: 0.97 }}
              className="flex-1 inline-flex items-center justify-center gap-2 bg-[#D96F58] hover:bg-[#E27A61] text-white py-3.5 px-5 rounded-full font-bold text-sm shadow-md hover:shadow-lg transition-all"
            >
              <MessageCircle className="w-4 h-4" />
              <span>Inquire to Buy</span>
            </motion.a>

            <motion.a
              id="btn-call-buy"
              href={BUSINESS_INFO.phoneHref}
              whileTap={{ scale: 0.97 }}
              className={`inline-flex items-center justify-center gap-2 py-3.5 px-5 rounded-full font-bold text-sm border transition-colors ${
                isDark
                  ? 'bg-white/5 hover:bg-white/10 text-white border-white/10'
                  : 'bg-[#FAF7F2] hover:bg-[#EFE8DF] text-[#0B2239] border-[#EFE8DF]'
              }`}
              title="Call 03163370864"
            >
              <Phone className="w-4 h-4 text-[#D96F58]" />
              <span className="font-mono">Call {BUSINESS_INFO.phoneDisplay}</span>
            </motion.a>
          </div>
        </motion.div>

        {/* 2. FOR SELLERS (SALE PROPERTY) */}
        <motion.div
          id="card-sell-property"
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          whileHover={{ y: -6 }}
          transition={{ duration: 0.4 }}
          className={`relative rounded-3xl p-7 sm:p-9 border shadow-xl transition-all duration-300 flex flex-col justify-between group ${
            isDark
              ? 'bg-[#0B1424]/90 border-white/10 hover:border-amber-400/40 hover:shadow-[0_20px_40px_rgba(212,175,55,0.12)]'
              : 'bg-white border-[#EFE8DF] hover:border-[#0B2239]/30 hover:shadow-2xl'
          }`}
        >
          {/* Top category label & icon */}
          <div className="flex items-center justify-between mb-6">
            <span
              className={`px-3.5 py-1 rounded-full text-xs font-bold uppercase tracking-wider ${
                isDark ? 'bg-white/10 text-amber-300' : 'bg-[#FAF7F2] text-[#0B2239] border border-[#EFE8DF]'
              }`}
            >
              FOR OWNERS • SALE
            </span>
            <div className="w-12 h-12 rounded-2xl bg-[#0B2239] text-white flex items-center justify-center group-hover:bg-[#162947] transition-colors shadow-xs">
              <KeyRound className="w-6 h-6 text-[#D96F58]" />
            </div>
          </div>

          <div>
            <h3
              className={`font-display font-extrabold text-2xl sm:text-3xl mb-3 leading-tight ${
                isDark ? 'text-white' : 'text-[#0B2239]'
              }`}
            >
              Looking to Sell Your Property?
            </h3>

            <p className={`text-sm leading-relaxed mb-6 ${isDark ? 'text-slate-300' : 'text-[#68717A]'}`}>
              Have a house, commercial building, plot, or plaza to sell? Nasir Real Estate connects your asset with qualified, active buyers ready to transact at fair market value.
            </p>

            {/* Checklist */}
            <ul className={`space-y-3 mb-8 pt-4 border-t ${isDark ? 'border-white/10' : 'border-[#EFE8DF]'}`}>
              <li className="flex items-start gap-2.5 text-xs sm:text-sm">
                <CheckCircle2 className="w-4 h-4 text-[#D96F58] shrink-0 mt-0.5" />
                <span className={isDark ? 'text-slate-200' : 'text-[#202A33]'}>
                  Realistic property valuation grounded in recent verified local transactions
                </span>
              </li>
              <li className="flex items-start gap-2.5 text-xs sm:text-sm">
                <CheckCircle2 className="w-4 h-4 text-[#D96F58] shrink-0 mt-0.5" />
                <span className={isDark ? 'text-slate-200' : 'text-[#202A33]'}>
                  Access to serious, funded private buyers and Chamber network investors
                </span>
              </li>
              <li className="flex items-start gap-2.5 text-xs sm:text-sm">
                <CheckCircle2 className="w-4 h-4 text-[#D96F58] shrink-0 mt-0.5" />
                <span className={isDark ? 'text-slate-200' : 'text-[#202A33]'}>
                  Complete documentation coordination and safe transfer assistance
                </span>
              </li>
            </ul>
          </div>

          {/* Action Row for Sellers */}
          <div className={`pt-5 border-t flex flex-col sm:flex-row gap-3 ${isDark ? 'border-white/10' : 'border-[#EFE8DF]'}`}>
            <motion.a
              id="btn-whatsapp-sell"
              href={sellWhatsAppUrl}
              target="_blank"
              rel="noopener noreferrer"
              whileTap={{ scale: 0.97 }}
              className={`flex-1 inline-flex items-center justify-center gap-2 py-3.5 px-5 rounded-full font-bold text-sm shadow-md hover:shadow-lg transition-all ${
                isDark
                  ? 'bg-white text-[#0B2239] hover:bg-slate-100'
                  : 'bg-[#0B2239] hover:bg-[#07182A] text-white'
              }`}
            >
              <MessageCircle className="w-4 h-4 text-[#D96F58]" />
              <span>List Property with Us</span>
            </motion.a>

            <motion.a
              id="btn-call-sell"
              href={BUSINESS_INFO.phoneHref}
              whileTap={{ scale: 0.97 }}
              className={`inline-flex items-center justify-center gap-2 py-3.5 px-5 rounded-full font-bold text-sm border transition-colors ${
                isDark
                  ? 'bg-white/5 hover:bg-white/10 text-white border-white/10'
                  : 'bg-[#FAF7F2] hover:bg-[#EFE8DF] text-[#0B2239] border-[#EFE8DF]'
              }`}
              title="Call 03163370864"
            >
              <Phone className="w-4 h-4 text-[#D96F58]" />
              <span className="font-mono">Call {BUSINESS_INFO.phoneDisplay}</span>
            </motion.a>
          </div>
        </motion.div>
      </div>

      {/* Direct Real Estate Helpline Banner with Motion */}
      <motion.div
        initial={{ opacity: 0, y: 15 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="bg-gradient-to-r from-[#0B2239] to-[#07182A] text-white rounded-2xl sm:rounded-3xl p-5 sm:p-6 shadow-xl border border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left"
      >
        <div className="flex items-center gap-3.5">
          <div className="w-11 h-11 rounded-2xl bg-[#D96F58] text-white flex items-center justify-center shrink-0 shadow-md">
            <Phone className="w-5 h-5" />
          </div>
          <div>
            <h4 className="font-display font-bold text-sm sm:text-base text-white leading-snug">
              Direct Real Estate Helpline for Sale & Purchase
            </h4>
            <p className="text-xs text-slate-300">
              Monday to Saturday (9:00 AM – 8:00 PM) for Chenab Nagar & Chiniot inquiries
            </p>
          </div>
        </div>

        <div className="flex items-center gap-3 w-full sm:w-auto">
          <a
            id="direct-banner-call"
            href={BUSINESS_INFO.phoneHref}
            className="flex-1 sm:flex-none inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-full bg-white/10 hover:bg-white/20 text-white text-xs font-bold border border-white/20 transition-colors"
          >
            <Phone className="w-3.5 h-3.5 text-[#D96F58]" />
            <span className="font-mono">{BUSINESS_INFO.phoneDisplay}</span>
          </a>

          <a
            id="direct-banner-whatsapp"
            href={BUSINESS_INFO.whatsappBaseUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 sm:flex-none inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-full bg-[#D96F58] hover:bg-[#E27A61] text-white text-xs font-bold shadow-md transition-colors"
          >
            <MessageCircle className="w-3.5 h-3.5" />
            <span>Direct WhatsApp Desk</span>
          </a>
        </div>
      </motion.div>
    </section>
  );
};
