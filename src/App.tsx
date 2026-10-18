import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { TrustStrip } from './components/TrustStrip';
import { DirectSalePurchaseCTA } from './components/DirectSalePurchaseCTA';
import { FeaturedProperties } from './components/FeaturedProperties';
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

export default function App() {
  const [selectedProperty, setSelectedProperty] = useState<Property | null>(null);
  const [isHostingerGuideOpen, setIsHostingerGuideOpen] = useState(false);
  const [activeCategory, setActiveCategory] = useState<string>('All Properties');

  const handleSelectFeaturedProperty = () => {
    // Find the primary featured property (Modern Family Residence / Villa)
    const featured = PROPERTIES.find((p) => p.id === 'prop-3') || PROPERTIES[0];
    setSelectedProperty(featured);
  };

  return (
    <div className="min-h-screen bg-[#F8F4EF] text-[#202A33] flex flex-col selection:bg-[#D96F58] selection:text-white">
      {/* 1. Sticky Navigation Header */}
      <Navbar />

      <main className="flex-1">
        {/* 2. Dramatic Hero Section */}
        <Hero onSelectFeaturedProperty={handleSelectFeaturedProperty} />

        {/* 3. Trust & Core Introduction Strip */}
        <TrustStrip />

        {/* 4. Direct Sale & Purchase Contact Section */}
        <DirectSalePurchaseCTA />

        {/* 5. Featured Properties Grid */}
        <FeaturedProperties
          properties={PROPERTIES}
          activeCategory={activeCategory}
          onSelectCategory={(cat) => setActiveCategory(cat)}
          onSelectProperty={(prop) => setSelectedProperty(prop)}
        />

        {/* 6. Services Section (What We Can Help You With) */}
        <Services />

        {/* 7. Why Choose Nasir Real Estate (Split Layout) */}
        <WhyChooseUs />

        {/* 8. About Section (Verified Location, Chamber, Purpose) */}
        <AboutSection />

        {/* 9. How It Works (4-Step Timeline) */}
        <HowItWorks />

        {/* 10. Strong Dark Navy WhatsApp CTA Banner */}
        <WhatsAppBanner />

        {/* 11. Contact Section & Direct WhatsApp Form */}
        <ContactSection />
      </main>

      {/* 13. Dark Navy Footer */}
      <Footer onOpenHostingerGuide={() => setIsHostingerGuideOpen(true)} />

      {/* 14. Fixed Floating WhatsApp Conversion Button */}
      <FloatingWhatsApp />

      {/* 15. Property Details Modal */}
      <PropertyDetailModal
        property={selectedProperty}
        onClose={() => setSelectedProperty(null)}
      />

      {/* 16. Hostinger Deployment Guide Modal */}
      <HostingerModal
        isOpen={isHostingerGuideOpen}
        onClose={() => setIsHostingerGuideOpen(false)}
      />
    </div>
  );
}
