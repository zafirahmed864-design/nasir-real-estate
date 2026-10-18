import React, { useState, useEffect } from 'react';
import { Phone, MessageCircle, Menu, X, Sun, Moon } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { Logo } from './Logo';
import { BUSINESS_INFO } from '../data/properties';
import { useTheme } from '../context/ThemeContext';

export const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeNav, setActiveNav] = useState('home');
  const { theme, toggleTheme, isDark } = useTheme();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      const sections = ['home', 'properties', 'sale-purchase-direct', 'services', 'why-us', 'about', 'contact'];
      const scrollPos = window.scrollY + 140;

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
    { label: 'Buy & Sell', href: '#sale-purchase-direct', id: 'sale-purchase-direct' },
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
          ? isDark
            ? 'bg-[#080E18]/90 backdrop-blur-xl shadow-[0_10px_30px_rgba(0,0,0,0.5)] border-b border-white/10 py-3'
            : 'bg-white/90 backdrop-blur-xl shadow-[0_10px_30px_rgba(11,34,57,0.06)] border-b border-[#EFE8DF] py-3'
          : isDark
          ? 'bg-[#060B14]/70 backdrop-blur-md py-4 sm:py-5 border-b border-transparent'
          : 'bg-[#FAF7F2]/80 backdrop-blur-md py-4 sm:py-5 border-b border-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between gap-6">
          {/* Zone 1: Brand Wordmark / Logo */}
          <a
            id="nav-logo"
            href="#home"
            onClick={(e) => {
              e.preventDefault();
              handleLinkClick('#home');
            }}
            className="flex items-center focus:outline-none focus-visible:ring-2 focus-visible:ring-[#D96F58] rounded-xl shrink-0"
          >
            <Logo size="md" variant={isDark ? 'light' : 'dark'} />
          </a>

          {/* Zone 2: Navigation Links with Animated Pill Indicator */}
          <nav
            id="desktop-nav"
            className={`hidden lg:flex items-center gap-1 px-3 py-1.5 rounded-full border shadow-2xs backdrop-blur-md ${
              isDark
                ? 'bg-[#0E1726]/80 border-white/10 text-slate-300'
                : 'bg-white/80 border-[#EFE8DF] text-[#68717A]'
            }`}
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
                  className={`relative px-4 py-1.5 text-xs font-semibold tracking-wide transition-colors whitespace-nowrap rounded-full ${
                    isActive
                      ? isDark
                        ? 'text-white'
                        : 'text-[#0B2239]'
                      : isDark
                      ? 'text-slate-400 hover:text-white'
                      : 'text-[#68717A] hover:text-[#0B2239]'
                  }`}
                >
                  {isActive && (
                    <motion.span
                      layoutId="navActiveIndicator"
                      className={`absolute inset-0 rounded-full -z-10 shadow-xs ${
                        isDark ? 'bg-gradient-to-r from-[#D96F58] to-[#C85A42]' : 'bg-[#0B2239]'
                      }`}
                      transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                    />
                  )}
                  <span className={isActive ? 'text-white' : undefined}>{link.label}</span>
                </a>
              );
            })}
          </nav>

          {/* Zone 3: Luxury Theme Switcher + Direct Phone + WhatsApp CTA */}
          <div className="flex items-center gap-2 sm:gap-3 shrink-0">
            {/* Animated Theme Toggle Button */}
            <motion.button
              id="theme-toggle-btn"
              type="button"
              whileTap={{ scale: 0.9 }}
              whileHover={{ scale: 1.05 }}
              onClick={toggleTheme}
              aria-label={isDark ? 'Switch to Light Theme' : 'Switch to Luxury Dark Theme'}
              className={`p-2.5 rounded-full border transition-colors flex items-center justify-center cursor-pointer ${
                isDark
                  ? 'bg-[#101A2C] border-white/10 text-amber-300 hover:bg-[#16233B]'
                  : 'bg-white border-[#EFE8DF] text-slate-700 hover:bg-slate-100'
              }`}
              title={isDark ? 'Switch to Light Mode' : 'Switch to Luxury Dark Theme'}
            >
              <AnimatePresence mode="wait" initial={false}>
                <motion.div
                  key={theme}
                  initial={{ rotate: -90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: 90, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  {isDark ? <Sun className="w-4 h-4 text-amber-300" /> : <Moon className="w-4 h-4 text-slate-700" />}
                </motion.div>
              </AnimatePresence>
            </motion.button>

            {/* Direct Phone Link (Desktop) */}
            <a
              id="nav-phone-cta"
              href={BUSINESS_INFO.phoneHref}
              className={`hidden md:inline-flex items-center gap-2 px-3.5 py-2 text-xs font-semibold rounded-full border transition-all ${
                isDark
                  ? 'bg-[#0E1726]/60 border-white/10 text-slate-200 hover:border-[#D96F58]/50 hover:text-white'
                  : 'bg-white border-[#EFE8DF] text-[#0B2239] hover:border-[#D96F58]/50 hover:text-[#D96F58]'
              }`}
              title="Call Nasir Real Estate"
            >
              <Phone className="w-3.5 h-3.5 text-[#D96F58]" />
              <span className="font-mono">{BUSINESS_INFO.phoneDisplay}</span>
            </a>

            {/* Prominent WhatsApp CTA Button */}
            <motion.a
              id="nav-whatsapp-cta"
              href={BUSINESS_INFO.whatsappBaseUrl}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              className="inline-flex items-center gap-2 bg-gradient-to-r from-[#D96F58] to-[#C85A42] hover:from-[#E27A61] hover:to-[#D96F58] text-white px-4 sm:px-5 py-2 sm:py-2.5 rounded-full text-xs sm:text-sm font-bold shadow-md hover:shadow-lg transition-all"
            >
              <MessageCircle className="w-4 h-4" />
              <span>WhatsApp Us</span>
            </motion.a>

            {/* Mobile Hamburger Toggle */}
            <motion.button
              id="mobile-menu-toggle"
              type="button"
              whileTap={{ scale: 0.9 }}
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className={`lg:hidden p-2 rounded-xl border transition-colors ${
                isDark
                  ? 'bg-[#101A2C] border-white/10 text-white'
                  : 'bg-white border-[#EFE8DF] text-[#0B2239]'
              }`}
              aria-label={mobileMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </motion.button>
          </div>
        </div>

        {/* Mobile Dropdown Navigation Drawer with Framer Motion */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              id="mobile-nav-drawer"
              initial={{ opacity: 0, height: 0, y: -10 }}
              animate={{ opacity: 1, height: 'auto', y: 0 }}
              exit={{ opacity: 0, height: 0, y: -10 }}
              transition={{ duration: 0.25, ease: 'easeOut' }}
              className={`lg:hidden mt-3 p-4 rounded-2xl border shadow-2xl overflow-hidden ${
                isDark
                  ? 'bg-[#0C1524] border-white/10'
                  : 'bg-white border-[#EFE8DF]'
              }`}
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
                      className={`flex items-center justify-between px-4 py-2.5 rounded-xl text-sm font-semibold transition-all ${
                        isActive
                          ? isDark
                            ? 'bg-[#D96F58] text-white'
                            : 'bg-[#0B2239] text-white'
                          : isDark
                          ? 'text-slate-300 hover:bg-white/5'
                          : 'text-[#202A33] hover:bg-[#FAF7F2]'
                      }`}
                    >
                      <span>{link.label}</span>
                      <span className="text-xs opacity-60">&rarr;</span>
                    </a>
                  );
                })}
              </div>

              {/* Mobile Quick Contact */}
              <div className="mt-4 pt-4 border-t border-white/10 flex flex-col gap-2">
                <a
                  id="mobile-drawer-call"
                  href={BUSINESS_INFO.phoneHref}
                  className={`flex items-center justify-center gap-2 w-full py-2.5 px-4 rounded-xl font-bold text-xs border ${
                    isDark
                      ? 'bg-[#101A2C] border-white/10 text-white'
                      : 'bg-[#FAF7F2] border-[#EFE8DF] text-[#0B2239]'
                  }`}
                >
                  <Phone className="w-3.5 h-3.5 text-[#D96F58]" />
                  <span>Call {BUSINESS_INFO.phoneDisplay}</span>
                </a>

                <a
                  id="mobile-drawer-whatsapp"
                  href={BUSINESS_INFO.whatsappBaseUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 w-full py-2.5 px-4 rounded-xl bg-[#D96F58] hover:bg-[#E27A61] text-white font-bold text-xs shadow-md"
                >
                  <MessageCircle className="w-3.5 h-3.5" />
                  <span>Chat on WhatsApp</span>
                </a>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </header>
  );
};
