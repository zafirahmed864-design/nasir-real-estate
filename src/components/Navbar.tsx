import React, { useState, useEffect } from 'react';
import { Phone, MessageCircle, Menu, X, ArrowUpRight } from 'lucide-react';
import { Logo } from './Logo';
import { BUSINESS_INFO } from '../data/properties';

interface NavbarProps {
  activeSection?: string;
}

export const Navbar: React.FC<NavbarProps> = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeNav, setActiveNav] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      const sections = ['home', 'properties', 'services', 'why-us', 'about', 'contact'];
      const scrollPos = window.scrollY + 120;

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPos >= top && scrollPos < top + height) {
            setActiveNav(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Home', href: '#home', id: 'home' },
    { label: 'Properties', href: '#properties', id: 'properties' },
    { label: 'Services', href: '#services', id: 'services' },
    { label: 'About', href: '#about', id: 'about' },
    { label: 'Contact', href: '#contact', id: 'contact' },
  ];

  const handleLinkClick = (href: string) => {
    setMobileMenuOpen(false);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header
      id="main-header"
      className={`sticky top-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-white/95 backdrop-blur-md shadow-[0_4px_20px_rgba(11,34,57,0.06)] border-b border-[#EFE8DF] py-3'
          : 'bg-[#F8F4EF] py-4 sm:py-5 border-b border-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Brand Logo */}
          <a
            id="nav-logo"
            href="#home"
            onClick={(e) => {
              e.preventDefault();
              handleLinkClick('#home');
            }}
            className="flex items-center focus:outline-none focus-visible:ring-2 focus-visible:ring-[#D96F58] rounded-lg"
          >
            <Logo size="md" />
          </a>

          {/* Desktop Navigation Links */}
          <nav
            id="desktop-nav"
            className="hidden md:flex items-center gap-1 lg:gap-2 bg-white/70 backdrop-blur-sm px-3 py-1.5 rounded-full border border-[#EFE8DF] shadow-xs"
          >
            {navLinks.map((link) => {
              const isActive = activeNav === link.id;
              return (
                <a
                  key={link.id}
                  id={`nav-link-${link.id}`}
                  href={link.href}
                  onClick={(e) => {
                    e.preventDefault();
                    handleLinkClick(link.href);
                  }}
                  className={`relative px-3.5 py-1.5 text-sm font-semibold transition-all duration-200 rounded-full ${
                    isActive
                      ? 'text-[#0B2239] bg-[#F8F4EF]'
                      : 'text-[#68717A] hover:text-[#0B2239] hover:bg-black/5'
                  }`}
                >
                  {link.label}
                  {isActive && (
                    <span className="absolute bottom-1 left-1/2 -translate-x-1/2 w-1 h-1 bg-[#D96F58] rounded-full" />
                  )}
                </a>
              );
            })}
          </nav>

          {/* Right Action CTAs */}
          <div className="hidden sm:flex items-center gap-3">
            {/* Direct Phone Link */}
            <a
              id="nav-phone-cta"
              href={BUSINESS_INFO.phoneHref}
              className="inline-flex items-center gap-2 px-3 py-2 text-sm font-semibold text-[#0B2239] hover:text-[#D96F58] transition-colors group"
              title="Call Nasir Real Estate"
            >
              <div className="w-8 h-8 rounded-full bg-[#EFE8DF] group-hover:bg-[#D96F58]/10 flex items-center justify-center transition-colors">
                <Phone className="w-4 h-4 text-[#0B2239] group-hover:text-[#D96F58] transition-colors" />
              </div>
              <span className="font-mono tracking-tight">{BUSINESS_INFO.phoneDisplay}</span>
            </a>

            {/* Prominent WhatsApp CTA */}
            <a
              id="nav-whatsapp-cta"
              href={BUSINESS_INFO.whatsappBaseUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-[#D96F58] hover:bg-[#E27A61] text-white px-4 py-2.5 rounded-full text-sm font-semibold shadow-sm hover:shadow-md transition-all duration-200 transform hover:-translate-y-0.5 active:translate-y-0"
            >
              <MessageCircle className="w-4 h-4" />
              <span>WhatsApp Us</span>
            </a>
          </div>

          {/* Mobile Right Bar: WhatsApp Quick CTA + Hamburger */}
          <div className="flex sm:hidden items-center gap-2">
            <a
              id="mobile-quick-whatsapp"
              href={BUSINESS_INFO.whatsappBaseUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="WhatsApp Us"
              className="p-2 rounded-full bg-[#D96F58] text-white shadow-xs"
            >
              <MessageCircle className="w-5 h-5" />
            </a>

            <button
              id="mobile-menu-toggle"
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg text-[#0B2239] hover:bg-black/5 focus:outline-none focus:ring-2 focus:ring-[#D96F58]"
              aria-label={mobileMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Dropdown Navigation Drawer */}
        {mobileMenuOpen && (
          <div
            id="mobile-nav-drawer"
            className="md:hidden mt-3 pt-3 pb-4 border-t border-[#EFE8DF] bg-white rounded-2xl shadow-xl p-4 animate-in fade-in slide-in-from-top-4 duration-200"
          >
            <div className="flex flex-col space-y-1">
              {navLinks.map((link) => {
                const isActive = activeNav === link.id;
                return (
                  <a
                    key={link.id}
                    id={`mobile-link-${link.id}`}
                    href={link.href}
                    onClick={(e) => {
                      e.preventDefault();
                      handleLinkClick(link.href);
                    }}
                    className={`flex items-center justify-between px-4 py-2.5 rounded-xl text-base font-medium transition-colors ${
                      isActive
                        ? 'bg-[#0B2239] text-white font-semibold'
                        : 'text-[#202A33] hover:bg-[#F8F4EF]'
                    }`}
                  >
                    <span>{link.label}</span>
                    <ArrowUpRight className={`w-4 h-4 ${isActive ? 'text-[#D96F58]' : 'text-[#68717A]'}`} />
                  </a>
                );
              })}
            </div>

            {/* Mobile Contact CTAs */}
            <div className="mt-4 pt-4 border-t border-[#EFE8DF] flex flex-col gap-2.5">
              <a
                id="mobile-drawer-call"
                href={BUSINESS_INFO.phoneHref}
                className="flex items-center justify-center gap-2 w-full py-2.5 px-4 rounded-xl bg-[#F8F4EF] text-[#0B2239] font-semibold text-sm border border-[#EFE8DF]"
              >
                <Phone className="w-4 h-4 text-[#D96F58]" />
                <span>Call {BUSINESS_INFO.phoneDisplay}</span>
              </a>

              <a
                id="mobile-drawer-whatsapp"
                href={BUSINESS_INFO.whatsappBaseUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 w-full py-2.5 px-4 rounded-xl bg-[#D96F58] hover:bg-[#E27A61] text-white font-semibold text-sm shadow-xs"
              >
                <MessageCircle className="w-4 h-4" />
                <span>Chat on WhatsApp</span>
              </a>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};
