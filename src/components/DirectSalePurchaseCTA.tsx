import React from 'react';
import { Home, KeyRound, MessageCircle, Phone, ArrowUpRight, CheckCircle2, ShieldCheck, Sparkles } from 'lucide-react';
import { BUSINESS_INFO } from '../data/properties';

export const DirectSalePurchaseCTA: React.FC = () => {
  const buyWhatsAppUrl = BUSINESS_INFO.getWhatsAppCustomUrl(
    'Hello Nasir Real Estate, I am looking to purchase/buy a property in Chenab Nagar / Chiniot. Please contact me with suitable options and details.'
  );

  const sellWhatsAppUrl = BUSINESS_INFO.getWhatsAppCustomUrl(
    'Hello Nasir Real Estate, I want to sell my property in Chenab Nagar / Chiniot. Please contact me to discuss valuation and buyer connection.'
  );

  return (
    <section
      id="sale-purchase-direct"
      className="pt-16 pb-10 md:pt-24 md:pb-14 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
    >
      {/* Section Header */}
      <div className="text-center max-w-3xl mx-auto mb-12">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-[#EFE8DF] shadow-2xs mb-3 text-xs font-bold tracking-widest text-[#D96F58] uppercase">
          <Sparkles className="w-3.5 h-3.5 text-[#D96F58]" />
          <span>DIRECT PROPERTY ASSISTANCE</span>
        </div>

        <h2
          id="direct-cta-heading"
          className="font-display text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#0B2239] uppercase tracking-tight leading-[1.12]"
        >
          LOOKING TO BUY OR SELL? <br />
          <span className="text-[#D96F58]">CONTACT US DIRECTLY</span>
        </h2>

        <p className="mt-4 text-sm sm:text-base md:text-lg text-[#68717A] max-w-2xl mx-auto leading-relaxed">
          Skip lengthy delays and middlemen. Whether you are seeking to purchase a family residence or commercial asset, or looking to sell your property at fair market price in Chenab Nagar & Chiniot, reach Nasir Real Estate directly.
        </p>
      </div>

      {/* Dual Pathways Grid: Buy & Sell */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
        {/* 1. FOR BUYERS (PURCHASE PROPERTY) */}
        <div
          id="card-buy-property"
          className="relative bg-white rounded-3xl p-7 sm:p-9 border border-[#EFE8DF] shadow-lg hover:shadow-2xl hover:border-[#D96F58]/30 transition-all duration-300 flex flex-col justify-between group transform hover:-translate-y-1"
        >
          {/* Top accent badge */}
          <div className="flex items-center justify-between mb-6">
            <span className="px-3.5 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-[#F8F4EF] text-[#D96F58] border border-[#EFE8DF]">
              FOR BUYERS • PURCHASE
            </span>
            <div className="w-12 h-12 rounded-2xl bg-[#0B2239] text-white flex items-center justify-center group-hover:bg-[#D96F58] transition-colors shadow-xs">
              <Home className="w-6 h-6" />
            </div>
          </div>

          <div>
            <h3 className="font-display font-extrabold text-2xl sm:text-3xl text-[#0B2239] mb-3 leading-tight">
              Looking to Purchase Property?
            </h3>

            <p className="text-sm text-[#68717A] leading-relaxed mb-6">
              Tell us your ideal location, property dimensions (5 Marla, 10 Marla, 1 Kanal, or commercial space), and budget. We will connect you directly with verified listings and arranged site visits.
            </p>

            {/* Checklist */}
            <ul className="space-y-2.5 mb-8 pt-4 border-t border-[#EFE8DF]">
              <li className="flex items-start gap-2.5 text-xs sm:text-sm text-[#202A33]">
                <CheckCircle2 className="w-4 h-4 text-[#D96F58] shrink-0 mt-0.5" />
                <span>Verified ownership title & transparent legal checks</span>
              </li>
              <li className="flex items-start gap-2.5 text-xs sm:text-sm text-[#202A33]">
                <CheckCircle2 className="w-4 h-4 text-[#D96F58] shrink-0 mt-0.5" />
                <span>Exclusive residential houses & commercial spots in Chenab Nagar & Chiniot</span>
              </li>
              <li className="flex items-start gap-2.5 text-xs sm:text-sm text-[#202A33]">
                <CheckCircle2 className="w-4 h-4 text-[#D96F58] shrink-0 mt-0.5" />
                <span>Direct negotiation with owners — no fabricated pricing</span>
              </li>
            </ul>
          </div>

          {/* Action Row for Buyers */}
          <div className="pt-5 border-t border-[#EFE8DF] flex flex-col sm:flex-row gap-3">
            <a
              id="btn-whatsapp-buy"
              href={buyWhatsAppUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 inline-flex items-center justify-center gap-2 bg-[#D96F58] hover:bg-[#E27A61] text-white py-3.5 px-5 rounded-full font-bold text-sm shadow-md hover:shadow-lg transition-all"
            >
              <MessageCircle className="w-4 h-4" />
              <span>Inquire to Buy</span>
            </a>

            <a
              id="btn-call-buy"
              href={BUSINESS_INFO.phoneHref}
              className="inline-flex items-center justify-center gap-2 bg-[#F8F4EF] hover:bg-[#EFE8DF] text-[#0B2239] py-3.5 px-5 rounded-full font-bold text-sm border border-[#EFE8DF] transition-colors"
              title="Call 03163370864"
            >
              <Phone className="w-4 h-4 text-[#D96F58]" />
              <span className="font-mono">Call {BUSINESS_INFO.phoneDisplay}</span>
            </a>
          </div>
        </div>

        {/* 2. FOR SELLERS (SALE PROPERTY) */}
        <div
          id="card-sell-property"
          className="relative bg-white rounded-3xl p-7 sm:p-9 border border-[#EFE8DF] shadow-lg hover:shadow-2xl hover:border-[#0B2239]/30 transition-all duration-300 flex flex-col justify-between group transform hover:-translate-y-1"
        >
          {/* Top accent badge */}
          <div className="flex items-center justify-between mb-6">
            <span className="px-3.5 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-[#F8F4EF] text-[#0B2239] border border-[#EFE8DF]">
              FOR OWNERS • SALE
            </span>
            <div className="w-12 h-12 rounded-2xl bg-[#0B2239] text-white flex items-center justify-center group-hover:bg-[#07182A] transition-colors shadow-xs">
              <KeyRound className="w-6 h-6 text-[#D96F58]" />
            </div>
          </div>

          <div>
            <h3 className="font-display font-extrabold text-2xl sm:text-3xl text-[#0B2239] mb-3 leading-tight">
              Looking to Sell Your Property?
            </h3>

            <p className="text-sm text-[#68717A] leading-relaxed mb-6">
              Have a house, commercial building, plot, or plaza to sell? Nasir Real Estate connects your asset with qualified, active buyers ready to transact at true market value.
            </p>

            {/* Checklist */}
            <ul className="space-y-2.5 mb-8 pt-4 border-t border-[#EFE8DF]">
              <li className="flex items-start gap-2.5 text-xs sm:text-sm text-[#202A33]">
                <CheckCircle2 className="w-4 h-4 text-[#D96F58] shrink-0 mt-0.5" />
                <span>Realistic property valuation based on recent neighborhood sales</span>
              </li>
              <li className="flex items-start gap-2.5 text-xs sm:text-sm text-[#202A33]">
                <CheckCircle2 className="w-4 h-4 text-[#D96F58] shrink-0 mt-0.5" />
                <span>Direct exposure to genuine, funded buyers in Chenab Nagar & Chiniot</span>
              </li>
              <li className="flex items-start gap-2.5 text-xs sm:text-sm text-[#202A33]">
                <CheckCircle2 className="w-4 h-4 text-[#D96F58] shrink-0 mt-0.5" />
                <span>Complete documentation and seamless transfer guidance</span>
              </li>
            </ul>
          </div>

          {/* Action Row for Sellers */}
          <div className="pt-5 border-t border-[#EFE8DF] flex flex-col sm:flex-row gap-3">
            <a
              id="btn-whatsapp-sell"
              href={sellWhatsAppUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 inline-flex items-center justify-center gap-2 bg-[#0B2239] hover:bg-[#07182A] text-white py-3.5 px-5 rounded-full font-bold text-sm shadow-md hover:shadow-lg transition-all"
            >
              <MessageCircle className="w-4 h-4 text-[#D96F58]" />
              <span>List Property with Us</span>
            </a>

            <a
              id="btn-call-sell"
              href={BUSINESS_INFO.phoneHref}
              className="inline-flex items-center justify-center gap-2 bg-[#F8F4EF] hover:bg-[#EFE8DF] text-[#0B2239] py-3.5 px-5 rounded-full font-bold text-sm border border-[#EFE8DF] transition-colors"
              title="Call 03163370864"
            >
              <Phone className="w-4 h-4 text-[#D96F58]" />
              <span className="font-mono">Call {BUSINESS_INFO.phoneDisplay}</span>
            </a>
          </div>
        </div>
      </div>

      {/* Direct Hotline Banner */}
      <div className="bg-gradient-to-r from-[#0B2239] to-[#07182A] text-white rounded-2xl sm:rounded-3xl p-5 sm:p-6 shadow-md border border-[#1F3D5C] flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
        <div className="flex items-center gap-3.5">
          <div className="w-10 h-10 rounded-full bg-[#D96F58] text-white flex items-center justify-center shrink-0">
            <Phone className="w-5 h-5" />
          </div>
          <div>
            <h4 className="font-display font-bold text-sm sm:text-base text-white leading-snug">
              Direct Real Estate Helpline for Sale & Purchase
            </h4>
            <p className="text-xs text-[#94A3B8]">
              Available Monday to Saturday (9:00 AM – 8:00 PM) for Chenab Nagar & Chiniot inquiries
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
            className="flex-1 sm:flex-none inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-full bg-[#D96F58] hover:bg-[#E27A61] text-white text-xs font-bold shadow-xs transition-colors"
          >
            <MessageCircle className="w-3.5 h-3.5" />
            <span>Direct WhatsApp Desk</span>
          </a>
        </div>
      </div>
    </section>
  );
};
