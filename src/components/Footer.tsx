import React from 'react';
import { Phone, MessageCircle, MapPin, Building2, Server, ArrowUp, Globe } from 'lucide-react';
import { motion } from 'motion/react';
import { Logo } from './Logo';
import { BUSINESS_INFO } from '../data/properties';

interface FooterProps {
  onOpenHostingerGuide: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenHostingerGuide }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const navLinks = [
    { label: 'Home', href: '#home' },
    { label: 'Properties', href: '#properties' },
    { label: 'Buy & Sell Hub', href: '#sale-purchase-direct' },
    { label: 'Services', href: '#services' },
    { label: 'Valuation Estimator', href: '#estimator' },
    { label: 'About', href: '#about' },
    { label: 'Contact', href: '#contact' },
  ];

  return (
    <footer id="main-footer" className="bg-[#050912] text-white pt-16 pb-12 border-t border-white/10 select-none">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-12 pb-14 border-b border-white/10">
          {/* Column 1: Brand & Overview */}
          <div className="lg:col-span-4">
            <div className="mb-5">
              <Logo variant="light" size="lg" />
            </div>
            <p className="text-sm text-slate-400 leading-relaxed max-w-sm mb-6">
              Professional real estate advisory with direct, straightforward communication. Helping clients discover and acquire verified property opportunities in Chenab Nagar, Chiniot, and connecting corridors.
            </p>
            <div className="flex flex-wrap items-center gap-2.5">
              <span className="px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs font-semibold text-slate-300">
                Chenab Nagar & Chiniot
              </span>
              <span className="px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs font-semibold text-amber-300">
                Chamber of Faisalabad
              </span>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div className="lg:col-span-2">
            <h4 className="font-display font-bold text-xs uppercase tracking-widest text-[#D96F58] mb-5">
              EXPLORE
            </h4>
            <ul className="space-y-2.5 text-xs sm:text-sm text-slate-400">
              {navLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="hover:text-white transition-colors hover:translate-x-1 inline-block transform duration-150"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Contact & Market Details */}
          <div className="lg:col-span-3">
            <h4 className="font-display font-bold text-xs uppercase tracking-widest text-[#D96F58] mb-5">
              OFFICE & DESK
            </h4>
            <ul className="space-y-3.5 text-xs sm:text-sm text-slate-400">
              <li className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-[#D96F58] shrink-0 mt-0.5" />
                <span className="text-white font-medium">{BUSINESS_INFO.location}</span>
              </li>
              <li className="flex items-start gap-2.5">
                <Building2 className="w-4 h-4 text-[#D96F58] shrink-0 mt-0.5" />
                <span>{BUSINESS_INFO.chamber}</span>
              </li>
              <li className="flex items-start gap-2.5">
                <Phone className="w-4 h-4 text-[#D96F58] shrink-0 mt-0.5" />
                <a
                  href={BUSINESS_INFO.phoneHref}
                  className="text-white hover:text-[#D96F58] font-mono font-bold transition-colors"
                >
                  {BUSINESS_INFO.phoneDisplay}
                </a>
              </li>
            </ul>
          </div>

          {/* Column 4: Direct Action & Deployment Help */}
          <div className="lg:col-span-3">
            <h4 className="font-display font-bold text-xs uppercase tracking-widest text-[#D96F58] mb-5">
              DIRECT DESK
            </h4>
            <div className="flex flex-col gap-2.5 mb-6">
              <motion.a
                id="footer-whatsapp-btn"
                href={BUSINESS_INFO.whatsappBaseUrl}
                target="_blank"
                rel="noopener noreferrer"
                whileTap={{ scale: 0.96 }}
                className="inline-flex items-center justify-center gap-2 bg-[#D96F58] hover:bg-[#E27A61] text-white py-2.5 px-4 rounded-xl text-xs font-bold transition-colors shadow-md"
              >
                <MessageCircle className="w-4 h-4" />
                <span>WhatsApp Us Directly</span>
              </motion.a>

              <motion.a
                id="footer-call-btn"
                href={BUSINESS_INFO.phoneHref}
                whileTap={{ scale: 0.96 }}
                className="inline-flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 text-white py-2.5 px-4 rounded-xl text-xs font-bold border border-white/10 transition-colors"
                title="Call 03163370864"
              >
                <Phone className="w-4 h-4 text-[#D96F58]" />
                <span className="font-mono">Call {BUSINESS_INFO.phoneDisplay}</span>
              </motion.a>
            </div>

            {/* Deployment Guides */}
            <div className="space-y-2">
              <button
                id="footer-hostinger-btn"
                onClick={onOpenHostingerGuide}
                className="inline-flex items-center gap-1.5 text-xs text-slate-400 hover:text-white transition-colors cursor-pointer"
              >
                <Server className="w-3.5 h-3.5 text-[#D96F58]" />
                <span className="underline underline-offset-2">Hostinger Deployment Guide</span>
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <div>
            © 2026 Nasir Real Estate. All Rights Reserved. Chenab Nagar & Chiniot.
          </div>

          <div className="text-center sm:text-right flex items-center gap-4">
            <span className="text-slate-400 font-medium">Ready for Netlify & Hostinger deployment.</span>
            <motion.button
              whileTap={{ scale: 0.9 }}
              whileHover={{ scale: 1.1 }}
              onClick={scrollToTop}
              aria-label="Scroll to top"
              className="w-9 h-9 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-colors cursor-pointer"
            >
              <ArrowUp className="w-4 h-4 text-[#D96F58]" />
            </motion.button>
          </div>
        </div>
      </div>
    </footer>
  );
};
