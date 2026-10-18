import React from 'react';
import { MapPin, Bed, Bath, Maximize2, MessageCircle, ArrowRight, Eye, ShieldCheck } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { Property } from '../types';
import { BUSINESS_INFO } from '../data/properties';
import { useTheme } from '../context/ThemeContext';

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
  const { isDark } = useTheme();
  const categories = ['All Properties', 'Residential', 'Commercial', 'Plot'];

  const displayedProperties = activeCategory === 'All Properties'
    ? properties
    : properties.filter((p) => p.category === activeCategory);

  return (
    <section
      id="properties"
      aria-labelledby="featured-properties-heading"
      className="py-16 md:py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
    >
      <div id="property-grid-anchor" className="scroll-mt-24" />

      {/* Section Header with Motion */}
      <div className={`flex flex-col md:flex-row md:items-end justify-between mb-12 pb-6 border-b gap-6 ${
        isDark ? 'border-white/10' : 'border-[#EFE8DF]'
      }`}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <span className="text-xs font-bold uppercase tracking-widest text-[#D96F58] mb-1.5 block">
            VERIFIED LISTINGS
          </span>
          <h2
            id="featured-properties-heading"
            className={`font-display text-3xl sm:text-4xl md:text-5xl font-black uppercase tracking-tight ${
              isDark ? 'text-white' : 'text-[#0B2239]'
            }`}
          >
            FEATURED PROPERTIES
          </h2>
          <p className={`mt-2 text-sm sm:text-base max-w-xl leading-relaxed ${
            isDark ? 'text-slate-300' : 'text-[#68717A]'
          }`}>
            Handpicked property opportunities worth exploring in Chenab Nagar, Chiniot, and connecting corridors.
          </p>
        </motion.div>

        {/* Animated Category Filter Tabs (in English) */}
        <div
          role="tablist"
          aria-label="Filter properties by category"
          className={`flex flex-wrap items-center gap-1.5 self-start md:self-end p-1.5 rounded-full border shadow-xs backdrop-blur-md ${
            isDark
              ? 'bg-[#0E1726]/80 border-white/10'
              : 'bg-white border-[#EFE8DF]'
          }`}
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
                className={`relative px-4 sm:px-5 py-2 rounded-full text-xs sm:text-sm font-bold transition-colors cursor-pointer whitespace-nowrap ${
                  isActive
                    ? 'text-white'
                    : isDark
                    ? 'text-slate-400 hover:text-white'
                    : 'text-[#68717A] hover:text-[#0B2239]'
                }`}
              >
                {isActive && (
                  <motion.div
                    layoutId="activeCategoryPill"
                    className={`absolute inset-0 rounded-full shadow-xs -z-10 ${
                      isDark ? 'bg-[#D96F58]' : 'bg-[#0B2239]'
                    }`}
                    transition={{ type: 'spring', stiffness: 350, damping: 28 }}
                  />
                )}
                <span>{cat}</span>
              </button>
            );
          })}
        </div>
      </div>

      {/* Property Cards Grid with AnimatePresence */}
      <motion.div
        layout
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7 sm:gap-8"
      >
        <AnimatePresence mode="popLayout">
          {displayedProperties.map((property, idx) => {
            const whatsappUrl = BUSINESS_INFO.getWhatsAppPropertyUrl(property.title, property.location);

            return (
              <motion.article
                layout
                key={property.id}
                id={`property-card-${property.id}`}
                initial={{ opacity: 0, scale: 0.94, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.92, y: 15 }}
                transition={{ duration: 0.35, delay: idx * 0.05 }}
                whileHover={{ y: -6 }}
                itemScope
                itemType="https://schema.org/SingleFamilyResidence"
                className={`group rounded-3xl border shadow-xl flex flex-col justify-between overflow-hidden transition-all duration-300 ${
                  isDark
                    ? 'bg-[#0B1424]/90 border-white/10 hover:border-[#D96F58]/40 hover:shadow-[0_16px_40px_rgba(0,0,0,0.6)]'
                    : 'bg-white border-[#EFE8DF] hover:shadow-[0_20px_45px_rgba(11,34,57,0.12)]'
                }`}
              >
                {/* Image & Badges */}
                <div className="relative aspect-[16/11] w-full overflow-hidden bg-[#07182A]">
                  <img
                    src={property.image}
                    alt={`${property.title} in ${property.location} - Nasir Real Estate`}
                    referrerPolicy="no-referrer"
                    loading="lazy"
                    itemProp="image"
                    className="w-full h-full object-cover object-center group-hover:scale-108 transition-transform duration-700 ease-out"
                  />

                  {/* Gradient shadow for legibility */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-black/20 pointer-events-none" />

                  {/* Top Badges */}
                  <div className="absolute top-3.5 left-3.5 right-3.5 flex items-center justify-between pointer-events-none">
                    <span className="px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-black/60 backdrop-blur-md text-white border border-white/20 shadow-xs">
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
                  <div className="absolute inset-0 bg-black/40 backdrop-blur-[2px] opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center pointer-events-none group-hover:pointer-events-auto">
                    <motion.button
                      whileTap={{ scale: 0.94 }}
                      onClick={() => onSelectProperty(property)}
                      className="px-4 py-2 rounded-full bg-white text-[#0B2239] font-bold text-xs shadow-lg flex items-center gap-2 cursor-pointer hover:bg-slate-100"
                    >
                      <Eye className="w-3.5 h-3.5 text-[#D96F58]" />
                      <span>Quick View</span>
                    </motion.button>
                  </div>
                </div>

                {/* Card Body */}
                <div className="p-5 sm:p-6 flex-1 flex flex-col justify-between">
                  <div>
                    {/* Area & Sub-location */}
                    <div className="flex items-center justify-between text-xs text-[#D96F58] font-bold mb-1.5">
                      <span className="font-mono">{property.area}</span>
                      <span className="text-[11px] font-medium opacity-80">{property.areaDetail}</span>
                    </div>

                    {/* Title */}
                    <h3
                      itemProp="name"
                      className={`font-display font-bold text-lg leading-snug line-clamp-1 mb-2 group-hover:text-[#D96F58] transition-colors ${
                        isDark ? 'text-white' : 'text-[#0B2239]'
                      }`}
                    >
                      {property.title}
                    </h3>

                    {/* Short Description */}
                    <p
                      itemProp="description"
                      className={`text-xs leading-relaxed line-clamp-2 mb-4 ${
                        isDark ? 'text-slate-300' : 'text-[#68717A]'
                      }`}
                    >
                      {property.shortDescription}
                    </p>

                    {/* Feature specs */}
                    <div className={`py-3 border-y mb-4 ${isDark ? 'border-white/10' : 'border-[#EFE8DF]'}`}>
                      {property.bedrooms ? (
                        <div className="flex items-center justify-between text-xs font-semibold">
                          <div className="flex items-center gap-1.5">
                            <Bed className="w-3.5 h-3.5 text-[#D96F58]" />
                            <span className={isDark ? 'text-slate-200' : 'text-[#202A33]'}>
                              {property.bedrooms} Beds
                            </span>
                          </div>
                          <div className="flex items-center gap-1.5">
                            <Bath className="w-3.5 h-3.5 text-[#D96F58]" />
                            <span className={isDark ? 'text-slate-200' : 'text-[#202A33]'}>
                              {property.bathrooms} Baths
                            </span>
                          </div>
                          <div className="flex items-center gap-1.5">
                            <ShieldCheck className="w-3.5 h-3.5 text-emerald-500" />
                            <span className="text-emerald-500">Verified</span>
                          </div>
                        </div>
                      ) : (
                        <div className="flex items-center justify-between text-xs font-semibold">
                          <div className="flex items-center gap-1.5">
                            <Maximize2 className="w-3.5 h-3.5 text-[#D96F58]" />
                            <span className={isDark ? 'text-slate-200' : 'text-[#202A33]'}>
                              {property.area}
                            </span>
                          </div>
                          <div className="flex items-center gap-1.5">
                            <ShieldCheck className="w-3.5 h-3.5 text-emerald-500" />
                            <span className="text-emerald-500">Direct Registry</span>
                          </div>
                          <div className="text-[11px] text-amber-500 font-mono font-bold">
                            Possession Ready
                          </div>
                        </div>
                      )}
                    </div>
                  </div>

                  {/* Clean Price & Action Footer */}
                  <div className="mt-2">
                    <div className="flex items-baseline justify-between mb-3">
                      <span className="text-[11px] font-bold uppercase tracking-wider opacity-70">
                        Price Demand:
                      </span>
                      <span className="text-sm font-bold text-[#D96F58]">
                        {property.priceDisplay}
                      </span>
                    </div>

                    <div className="flex items-center gap-2">
                      {/* WhatsApp Inquire Button */}
                      <motion.a
                        whileTap={{ scale: 0.95 }}
                        href={whatsappUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1 inline-flex items-center justify-center gap-2 bg-[#D96F58] hover:bg-[#E27A61] text-white py-2.5 px-3 rounded-full text-xs font-bold shadow-xs transition-colors"
                      >
                        <MessageCircle className="w-3.5 h-3.5" />
                        <span>Inquire</span>
                      </motion.a>

                      {/* View Details Button */}
                      <motion.button
                        whileTap={{ scale: 0.95 }}
                        onClick={() => onSelectProperty(property)}
                        className={`inline-flex items-center justify-center gap-1.5 py-2.5 px-4 rounded-full text-xs font-bold border transition-colors cursor-pointer ${
                          isDark
                            ? 'bg-white/5 hover:bg-white/10 text-white border-white/10'
                            : 'bg-[#FAF7F2] hover:bg-[#EFE8DF] text-[#0B2239] border-[#EFE8DF]'
                        }`}
                      >
                        <span>Details</span>
                        <ArrowRight className="w-3 h-3 text-[#D96F58]" />
                      </motion.button>
                    </div>
                  </div>
                </div>
              </motion.article>
            );
          })}
        </AnimatePresence>
      </motion.div>
    </section>
  );
};
