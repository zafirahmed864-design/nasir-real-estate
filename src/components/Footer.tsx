import React from 'react';
import { Phone, MessageCircle, MapPin, Building2, Server, ArrowUp } from 'lucide-react';
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
    { label: 'Services', href: '#services' },
    { label: 'About', href: '#about' },
    { label: 'Contact', href: '#contact' },
  ];

  return (
    <footer id="main-footer" className="bg-[#07182A] text-white pt-16 pb-12 border-t border-[#1F3D5C]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-12 pb-14 border-b border-[#1F3D5C]">
          {/* Column 1: Brand & Tagline */}
          <div className="lg:col-span-4">
            <div className="mb-5">
              <Logo variant="light" size="lg" />
            </div>
            <p className="text-sm text-[#94A3B8] leading-relaxed max-w-sm mb-6">
              Professional property guidance with direct, straightforward communication. Helping clients discover and acquire real estate opportunities in Chenab Nagar, Chiniot, and surrounding Punjab markets.
            </p>
            <div className="flex items-center gap-3">
              <div className="px-3 py-1 rounded-md bg-[#0E2E4E] border border-[#1F3D5C] text-[11px] font-semibold text-[#CBD5E1]">
                Chenab Nagar & Chiniot
              </div>
              <div className="px-3 py-1 rounded-md bg-[#0E2E4E] border border-[#1F3D5C] text-[11px] font-semibold text-[#CBD5E1]">
                Chamber of Faisalabad
              </div>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div className="lg:col-span-2">
            <h4 className="font-display font-bold text-xs uppercase tracking-widest text-[#D96F58] mb-5">
              QUICK LINKS
            </h4>
            <ul className="space-y-3 text-sm text-[#94A3B8]">
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

          {/* Column 3: Contact Details */}
          <div className="lg:col-span-3">
            <h4 className="font-display font-bold text-xs uppercase tracking-widest text-[#D96F58] mb-5">
              CONTACT
            </h4>
            <ul className="space-y-3.5 text-sm text-[#94A3B8]">
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

          {/* Column 4: Connect & Deployment */}
          <div className="lg:col-span-3">
            <h4 className="font-display font-bold text-xs uppercase tracking-widest text-[#D96F58] mb-5">
              CONNECT
            </h4>
            <div className="flex flex-col gap-2.5 mb-6">
              <a
                id="footer-whatsapp-btn"
                href={BUSINESS_INFO.whatsappBaseUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 bg-[#D96F58] hover:bg-[#E27A61] text-white py-2.5 px-4 rounded-xl text-xs font-bold transition-colors"
              >
                <MessageCircle className="w-4 h-4" />
                <span>WhatsApp Us</span>
              </a>

              <a
                id="footer-call-btn"
                href={BUSINESS_INFO.phoneHref}
                className="inline-flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 text-white py-2.5 px-4 rounded-xl text-xs font-bold border border-white/10 transition-colors"
                title="Call 03163370864"
              >
                <Phone className="w-4 h-4 text-[#D96F58]" />
                <span className="font-mono">Call {BUSINESS_INFO.phoneDisplay}</span>
              </a>
            </div>

            {/* Hostinger Deployment Guide trigger */}
            <button
              id="footer-hostinger-btn"
              onClick={onOpenHostingerGuide}
              className="inline-flex items-center gap-1.5 text-xs text-[#94A3B8] hover:text-white transition-colors cursor-pointer"
            >
              <Server className="w-3.5 h-3.5 text-[#D96F58]" />
              <span className="underline underline-offset-2">Hostinger Deployment Guide</span>
            </button>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#68717A]">
          <div>
            © 2026 Nasir Real Estate. All Rights Reserved.
          </div>

          <div className="text-center sm:text-right flex items-center gap-4">
            <span className="text-[#94A3B8] font-medium">Built for better property decisions.</span>
            <button
              onClick={scrollToTop}
              className="w-8 h-8 rounded-full bg-white/5 hover:bg-white/10 text-white flex items-center justify-center transition-colors cursor-pointer"
              title="Back to top"
              aria-label="Back to top"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
