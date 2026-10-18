import React from 'react';
import { MapPin, Bed, Bath, Maximize2, MessageCircle, ArrowRight, Eye, ShieldCheck, Compass, CheckCircle2 } from 'lucide-react';
import { Property } from '../types';
import { BUSINESS_INFO } from '../data/properties';

interface FeaturedPropertiesProps {
  properties: Property[];
  onSelectProperty: (property: Property) => void;
  onResetFilters?: () => void;
  activeCategory?: string;
  onSelectCategory?: (category: string) => void;
}

export const FeaturedProperties: React.FC<FeaturedPropertiesProps> = ({
  properties,
  onSelectProperty,
  onResetFilters,
  activeCategory = 'All Properties',
  onSelectCategory
}) => {
  const categories = ['All Properties', 'Residential', 'Commercial', 'Plot'];

  const displayedProperties = activeCategory === 'All Properties'
    ? properties
    : properties.filter((p) => p.category === activeCategory);

  return (
    <section
      id="properties"
      aria-labelledby="featured-properties-heading"
      className="py-14 md:py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
    >
      {/* Anchor for nav scrolling */}
      <div id="property-grid-anchor" className="scroll-mt-24" />

      {/* Section Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 pb-6 border-b border-[#EFE8DF] gap-6">
        <div>
          <span className="text-xs font-bold uppercase tracking-widest text-[#D96F58] mb-1.5 block">
            VERIFIED LISTINGS
          </span>
          <h2
            id="featured-properties-heading"
            className="font-display text-3xl sm:text-4xl md:text-5xl font-black text-[#0B2239] uppercase tracking-tight"
          >
            FEATURED PROPERTIES
          </h2>
          <p className="mt-2 text-sm sm:text-base text-[#68717A] max-w-xl leading-relaxed">
            Handpicked property opportunities worth exploring in Chenab Nagar, Chiniot, and connecting corridors.
          </p>
        </div>

        {/* Category Filter Pills (in English) */}
        <div
          role="tablist"
          aria-label="Filter properties by category"
          className="flex flex-wrap items-center gap-1.5 self-start md:self-end bg-white p-1.5 rounded-full border border-[#EFE8DF] shadow-xs"
        >
          {categories.map((cat) => {
            const isActive = activeCategory === cat;
            return (
              <button
                key={cat}
                role="tab"
                aria-selected={isActive}
                id={`filter-tab-${cat.toLowerCase().replace(/\s+/g, '-')}`}
                type="button"
                onClick={() => onSelectCategory && onSelectCategory(cat)}
                className={`px-4 sm:px-5 py-2 rounded-full text-xs sm:text-sm font-bold transition-all cursor-pointer ${
                  isActive
                    ? 'bg-[#0B2239] text-white shadow-xs'
                    : 'text-[#68717A] hover:text-[#0B2239] hover:bg-[#F8F4EF]'
                }`}
              >
                {cat}
              </button>
            );
          })}
        </div>
      </div>

      {/* Property Cards Grid */}
      {displayedProperties.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7 sm:gap-8">
          {displayedProperties.map((property) => {
            const whatsappUrl = BUSINESS_INFO.getWhatsAppPropertyUrl(property.title, property.location);

            return (
              <article
                key={property.id}
                id={`property-card-${property.id}`}
                itemScope
                itemType="https://schema.org/SingleFamilyResidence"
                className="group bg-white rounded-3xl border border-[#EFE8DF] shadow-[0_4px_20px_rgba(11,34,57,0.05)] hover:shadow-[0_16px_40px_rgba(11,34,57,0.12)] transition-all duration-300 flex flex-col justify-between overflow-hidden transform hover:-translate-y-1.5"
              >
                {/* Image & Badges */}
                <div className="relative aspect-[16/11] w-full overflow-hidden bg-[#07182A]">
                  <img
                    src={property.image}
                    alt={`${property.title} in ${property.location} - Nasir Real Estate`}
                    referrerPolicy="no-referrer"
                    loading="lazy"
                    itemProp="image"
                    className="w-full h-full object-cover object-center group-hover:scale-106 transition-transform duration-700 ease-out"
                  />

                  {/* Gradient shadow for legibility */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0B2239]/80 via-transparent to-black/20 pointer-events-none" />

                  {/* Top Badges */}
                  <div className="absolute top-3.5 left-3.5 right-3.5 flex items-center justify-between pointer-events-none">
                    <span className="px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-[#0B2239]/90 backdrop-blur-md text-white border border-white/20 shadow-xs">
                      {property.category}
                    </span>
                    <span
                      className={`px-2.5 py-0.5 rounded-full text-[11px] font-extrabold uppercase tracking-wider ${
                        property.category === 'Plot'
                          ? 'bg-amber-500 text-white'
                          : property.badge === 'Luxury House'
                          ? 'bg-[#D96F58] text-white'
                          : 'bg-white/95 text-[#0B2239]'
                      } shadow-xs`}
                    >
                      {property.badge}
                    </span>
                  </div>

                  {/* Clean Bottom Overlay: Location & Purpose */}
                  <div className="absolute bottom-3 left-3.5 right-3.5 flex items-center justify-between text-white pointer-events-none">
                    <div className="flex items-center gap-1 text-xs font-semibold drop-shadow-sm">
                      <MapPin className="w-3.5 h-3.5 text-[#D96F58]" />
                      <span className="truncate">{property.location}</span>
                    </div>

                    <span className="text-[11px] font-bold px-2.5 py-0.5 rounded-full bg-white/20 backdrop-blur-md border border-white/25">
                      {property.purpose}
                    </span>
                  </div>

                  {/* Quick View Button overlay on hover */}
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-200 bg-black/35 backdrop-blur-[2px]">
                    <button
                      type="button"
                      onClick={() => onSelectProperty(property)}
                      className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-white text-[#0B2239] hover:bg-[#D96F58] hover:text-white text-xs font-bold shadow-lg transition-all transform scale-95 group-hover:scale-100 cursor-pointer"
                    >
                      <Eye className="w-3.5 h-3.5" />
                      <span>View Specifications</span>
                    </button>
                  </div>
                </div>

                {/* Card Body */}
                <div className="p-5 sm:p-6 flex flex-col flex-1 justify-between">
                  <div>
                    {/* Area Detail */}
                    <div className="text-xs font-semibold text-[#D96F58] mb-1.5 flex items-center gap-1">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#D96F58]" />
                      <span className="truncate">{property.areaDetail}</span>
                    </div>

                    {/* Property Title */}
                    <h3
                      itemProp="name"
                      className="font-display text-lg sm:text-xl font-bold text-[#0B2239] group-hover:text-[#D96F58] transition-colors leading-snug mb-2.5"
                    >
                      {property.title}
                    </h3>

                    {/* Short Description */}
                    <p
                      itemProp="description"
                      className="text-xs sm:text-sm text-[#68717A] line-clamp-2 mb-4 leading-relaxed"
                    >
                      {property.shortDescription}
                    </p>

                    {/* Specifications Grid: House vs Plot vs Commercial */}
                    <div className="grid grid-cols-3 gap-2 py-3 border-y border-[#EFE8DF] mb-4 text-center text-xs">
                      {property.category === 'Residential' ? (
                        <>
                          <div className="flex flex-col items-center justify-center">
                            <span className="text-[#68717A] flex items-center gap-1 text-[11px]">
                              <Bed className="w-3.5 h-3.5 text-[#0B2239]" /> Beds
                            </span>
                            <span className="font-bold text-[#0B2239] mt-0.5">{property.bedrooms}</span>
                          </div>
                          <div className="flex flex-col items-center justify-center border-x border-[#EFE8DF]">
                            <span className="text-[#68717A] flex items-center gap-1 text-[11px]">
                              <Bath className="w-3.5 h-3.5 text-[#0B2239]" /> Baths
                            </span>
                            <span className="font-bold text-[#0B2239] mt-0.5">{property.bathrooms}</span>
                          </div>
                        </>
                      ) : property.category === 'Plot' ? (
                        <>
                          <div className="flex flex-col items-center justify-center">
                            <span className="text-[#68717A] flex items-center gap-1 text-[11px]">
                              <ShieldCheck className="w-3.5 h-3.5 text-[#0B2239]" /> Status
                            </span>
                            <span className="font-bold text-[#0B2239] mt-0.5">Verified Title</span>
                          </div>
                          <div className="flex flex-col items-center justify-center border-x border-[#EFE8DF]">
                            <span className="text-[#68717A] flex items-center gap-1 text-[11px]">
                              <Compass className="w-3.5 h-3.5 text-[#0B2239]" /> Possession
                            </span>
                            <span className="font-bold text-[#0B2239] mt-0.5">Ready</span>
                          </div>
                        </>
                      ) : (
                        <>
                          <div className="flex flex-col items-center justify-center">
                            <span className="text-[#68717A] text-[11px]">Zoning</span>
                            <span className="font-bold text-[#0B2239] mt-0.5">Commercial</span>
                          </div>
                          <div className="flex flex-col items-center justify-center border-x border-[#EFE8DF]">
                            <span className="text-[#68717A] text-[11px]">Footfall</span>
                            <span className="font-bold text-[#0B2239] mt-0.5">High Transit</span>
                          </div>
                        </>
                      )}

                      <div className="flex flex-col items-center justify-center">
                        <span className="text-[#68717A] flex items-center gap-1 text-[11px]">
                          <Maximize2 className="w-3.5 h-3.5 text-[#0B2239]" /> Dimension
                        </span>
                        <span className="font-bold text-[#0B2239] mt-0.5 truncate max-w-full px-1">
                          {property.area}
                        </span>
                      </div>
                    </div>

                    {/* Quick Feature Bullet Highlights */}
                    <div className="space-y-1 mb-4">
                      {property.features.slice(0, 2).map((feat, idx) => (
                        <div key={idx} className="flex items-center gap-1.5 text-[11px] text-[#4F5963]">
                          <CheckCircle2 className="w-3 h-3 text-[#D96F58] shrink-0" />
                          <span className="truncate">{feat}</span>
                        </div>
                      ))}
                    </div>

                    {/* Price Status Indicator (No Numerical Price, as requested) */}
                    <div className="flex items-center justify-between py-2 px-3 rounded-xl bg-[#F8F4EF] border border-[#EFE8DF] mb-3.5">
                      <span className="text-[11px] font-semibold text-[#68717A] uppercase tracking-wider">
                        Price Demand
                      </span>
                      <span className="text-xs font-extrabold text-[#0B2239]">
                        Available on Request
                      </span>
                    </div>
                  </div>

                  {/* Actions: Direct WhatsApp Button right below price, plus Details button */}
                  <div className="grid grid-cols-2 gap-2 pt-1">
                    <button
                      type="button"
                      id={`view-details-${property.id}`}
                      onClick={() => onSelectProperty(property)}
                      className="inline-flex items-center justify-center gap-1.5 py-2.5 px-3 rounded-xl bg-[#F8F4EF] hover:bg-[#0B2239] text-[#0B2239] hover:text-white text-xs font-bold transition-all cursor-pointer"
                    >
                      <span>Full Details</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </button>

                    <a
                      id={`card-whatsapp-${property.id}`}
                      href={whatsappUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center gap-1.5 py-2.5 px-3 rounded-xl bg-[#25D366] hover:bg-[#20bd5a] text-white text-xs font-bold shadow-xs transition-colors"
                      title="Inquire demand on WhatsApp"
                    >
                      <MessageCircle className="w-3.5 h-3.5 fill-current" />
                      <span>WhatsApp Demand</span>
                    </a>
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      ) : (
        /* Zero Results Friendly State */
        <div
          id="no-properties-fallback"
          className="bg-white rounded-3xl p-8 sm:p-12 text-center border border-[#EFE8DF] shadow-md max-w-2xl mx-auto my-6"
        >
          <div className="w-16 h-16 rounded-full bg-[#D96F58]/10 text-[#D96F58] flex items-center justify-center mx-auto mb-4">
            <MessageCircle className="w-8 h-8 text-[#D96F58]" />
          </div>
          <h3 className="font-display text-xl font-bold text-[#0B2239] mb-2">
            No listings currently active in this category
          </h3>
          <p className="text-sm text-[#68717A] max-w-md mx-auto mb-6 leading-relaxed">
            We maintain confidential and unlisted inventory for both houses and plots in Chenab Nagar & Chiniot. Get in touch directly for custom requirements.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
            {onResetFilters && (
              <button
                onClick={onResetFilters}
                className="w-full sm:w-auto px-5 py-2.5 rounded-full bg-[#F8F4EF] hover:bg-[#EFE8DF] text-[#0B2239] text-xs font-bold transition-colors cursor-pointer"
              >
                View All Properties
              </button>
            )}
            <a
              href={BUSINESS_INFO.whatsappBaseUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-2.5 rounded-full bg-[#D96F58] hover:bg-[#E27A61] text-white text-xs font-bold shadow-sm transition-colors"
            >
              <MessageCircle className="w-4 h-4" />
              <span>Inquire with Nasir Real Estate</span>
            </a>
          </div>
        </div>
      )}
    </section>
  );
};
