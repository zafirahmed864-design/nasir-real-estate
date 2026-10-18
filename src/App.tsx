import React, { useState } from 'react';
import { ThemeProvider, useTheme } from './context/ThemeContext';
import { Navbar } from './components/Navbar';
import { RecentTransactionsTicker } from './components/RecentTransactionsTicker';
import { Hero } from './components/Hero';
import { TrustStrip } from './components/TrustStrip';
import { DirectSalePurchaseCTA } from './components/DirectSalePurchaseCTA';
import { FeaturedProperties } from './components/FeaturedProperties';
import { PropertyEstimator } from './components/PropertyEstimator';
import { Services } from './components/Services';
import { WhyChooseUs } from './components/WhyChooseUs';
import { AboutSection } from './components/AboutSection';
import { HowItWorks } from './components/HowItWorks';
import { WhatsAppBanner } from './components/WhatsAppBanner';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { FloatingWhatsApp } from './components/FloatingWhatsApp';
import { PropertyDetailModal } from './components/PropertyDetailModal';
import { HostingerModal } from './components/HostingerModal';
import { PROPERTIES } from './data/properties';
import { Property } from './types';

function AppContent() {
  const { isDark } = useTheme();
  const [selectedProperty, setSelectedProperty] = useState<Property | null>(null);
  const [isHostingerGuideOpen, setIsHostingerGuideOpen] = useState(false);
  const [activeCategory, setActiveCategory] = useState<string>('All Properties');

  const handleSelectFeaturedProperty = () => {
    // Find the primary featured property (Modern Family Residence / Villa)
    const featured = PROPERTIES.find((p) => p.id === 'prop-3') || PROPERTIES[0];
    setSelectedProperty(featured);
  };

  return (
    <div
      className={`min-h-screen flex flex-col selection:bg-[#D96F58] selection:text-white transition-colors duration-300 ${
        isDark ? 'bg-[#060B14] text-white' : 'bg-[#FAF7F2] text-[#202A33]'
      }`}
    >
      {/* 1. Sticky Navigation Header with Theme Toggle */}
      <Navbar />

      {/* 2. Live Market Activity Ticker */}
      <RecentTransactionsTicker />

      <main className="flex-1">
        {/* 3. Dramatic Luxury Hero Section with Framer Motion */}
        <Hero onSelectFeaturedProperty={handleSelectFeaturedProperty} />

        {/* 4. Trust & Core Introduction Strip */}
        <TrustStrip />

        {/* 5. Direct Sale & Purchase Contact Section (English CTAs & Direct Contact) */}
        <DirectSalePurchaseCTA />

        {/* 6. Featured Properties Grid with Animated Filter Tabs */}
        <FeaturedProperties
          properties={PROPERTIES}
          activeCategory={activeCategory}
          onSelectCategory={(cat) => setActiveCategory(cat)}
          onSelectProperty={(prop) => setSelectedProperty(prop)}
        />

        {/* 7. Interactive Property Valuation & Budget Estimator */}
        <PropertyEstimator />

        {/* 8. Services Section (Editorial Numbered Bento Cards) */}
        <Services />

        {/* 9. Why Choose Nasir Real Estate (Split Layout with High-Res Photography) */}
        <WhyChooseUs />

        {/* 10. About Section (Verified Location, Chamber, Purpose) */}
        <AboutSection />

        {/* 11. How It Works (4-Phase Pathway) */}
        <HowItWorks />

        {/* 12. Strong Dark Navy WhatsApp CTA Banner */}
        <WhatsAppBanner />

        {/* 13. Contact Section & Direct WhatsApp Form */}
        <ContactSection />
      </main>

      {/* 14. Luxury Dark Footer */}
      <Footer onOpenHostingerGuide={() => setIsHostingerGuideOpen(true)} />

      {/* 15. Fixed Floating WhatsApp Conversion Button */}
      <FloatingWhatsApp />

      {/* 16. Property Details Modal with Gallery Lightbox */}
      <PropertyDetailModal
        property={selectedProperty}
        onClose={() => setSelectedProperty(null)}
      />

      {/* 17. Hostinger & Netlify Deployment Guide Modal */}
      <HostingerModal
        isOpen={isHostingerGuideOpen}
        onClose={() => setIsHostingerGuideOpen(false)}
      />
    </div>
  );
}

export default function App() {
  return (
    <ThemeProvider>
      <AppContent />
    </ThemeProvider>
  );
}
