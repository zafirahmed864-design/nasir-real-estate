import React, { useState } from 'react';
import { X, MapPin, Bed, Bath, Maximize2, MessageCircle, Phone, CheckCircle2, Share2, Tag, ShieldCheck } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { Property } from '../types';
import { BUSINESS_INFO } from '../data/properties';
import { useTheme } from '../context/ThemeContext';

interface PropertyDetailModalProps {
  property: Property | null;
  onClose: () => void;
}

export const PropertyDetailModal: React.FC<PropertyDetailModalProps> = ({ property, onClose }) => {
  const { isDark } = useTheme();
  const [selectedImgIndex, setSelectedImgIndex] = useState(0);
  const [copied, setCopied] = useState(false);

  if (!property) return null;

  const whatsappUrl = BUSINESS_INFO.getWhatsAppPropertyUrl(property.title, property.location);

  const handleShare = () => {
    navigator.clipboard.writeText(window.location.href);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <AnimatePresence>
      <div
        id="property-detail-modal"
        className="fixed inset-0 z-50 overflow-y-auto bg-black/80 backdrop-blur-md flex items-center justify-center p-4 sm:p-6"
        onClick={onClose}
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.94, y: 15 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.94, y: 15 }}
          transition={{ duration: 0.25, ease: 'easeOut' }}
          className={`relative w-full max-w-4xl rounded-3xl shadow-2xl overflow-hidden border my-8 ${
            isDark ? 'bg-[#0B1424] border-white/15 text-white' : 'bg-white border-[#EFE8DF] text-[#0B2239]'
          }`}
          onClick={(e) => e.stopPropagation()}
        >
          {/* Close Button */}
          <button
            onClick={onClose}
            aria-label="Close modal"
            className="absolute top-4 right-4 z-20 w-10 h-10 rounded-full bg-black/60 hover:bg-black/80 text-white flex items-center justify-center shadow-lg transition-colors cursor-pointer border border-white/20"
          >
            <X className="w-5 h-5" />
          </button>

          <div className="grid grid-cols-1 lg:grid-cols-12 max-h-[85vh] overflow-y-auto">
            {/* Left: Image Gallery */}
            <div className="lg:col-span-7 bg-[#07182A] flex flex-col justify-between">
              <div className="relative aspect-[4/3] w-full bg-black/40 overflow-hidden">
                <AnimatePresence mode="wait">
                  <motion.img
                    key={selectedImgIndex}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.2 }}
                    src={property.gallery[selectedImgIndex] || property.image}
                    alt={property.title}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover object-center"
                  />
                </AnimatePresence>
                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1 rounded-full bg-black/70 backdrop-blur-md text-white text-xs font-bold uppercase tracking-wider border border-white/20">
                    {property.category}
                  </span>
                </div>
              </div>

              {/* Gallery Thumbnails */}
              {property.gallery && property.gallery.length > 1 && (
                <div className="p-3 bg-[#060B14] flex items-center gap-2 overflow-x-auto border-t border-white/10">
                  {property.gallery.map((img, idx) => (
                    <button
                      key={idx}
                      onClick={() => setSelectedImgIndex(idx)}
                      className={`relative w-16 h-12 rounded-lg overflow-hidden shrink-0 border-2 transition-all cursor-pointer ${
                        selectedImgIndex === idx
                          ? 'border-[#D96F58] opacity-100 scale-105'
                          : 'border-transparent opacity-60 hover:opacity-90'
                      }`}
                    >
                      <img
                        src={img}
                        alt={`Thumbnail ${idx + 1}`}
                        referrerPolicy="no-referrer"
                        className="w-full h-full object-cover"
                      />
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* Right / Bottom: Specifications & Inquiry */}
            <div
              className={`lg:col-span-5 p-6 sm:p-7 flex flex-col justify-between ${
                isDark ? 'bg-[#0B1424]' : 'bg-white'
              }`}
            >
              <div>
                {/* Category & Location */}
                <div className="flex items-center justify-between gap-2 mb-2">
                  <span className="inline-flex items-center gap-1 text-xs font-bold uppercase tracking-wider text-[#D96F58]">
                    <Tag className="w-3 h-3" /> {property.category}
                  </span>
                  <button
                    onClick={handleShare}
                    className="text-xs opacity-70 hover:opacity-100 flex items-center gap-1 cursor-pointer"
                    title="Share link"
                  >
                    <Share2 className="w-3.5 h-3.5" />
                    <span>{copied ? 'Copied!' : 'Share'}</span>
                  </button>
                </div>

                <h3 className="font-display text-xl sm:text-2xl font-bold leading-tight mb-1">
                  {property.title}
                </h3>

                <div className="flex items-center gap-1 text-xs opacity-80 mb-4">
                  <MapPin className="w-3.5 h-3.5 text-[#D96F58]" />
                  <span>{property.location} • {property.areaDetail}</span>
                </div>

                {/* Price Demand Box */}
                <div
                  className={`p-4 rounded-2xl border mb-5 ${
                    isDark ? 'bg-white/5 border-white/10' : 'bg-[#FAF7F2] border-[#EFE8DF]'
                  }`}
                >
                  <span className="text-[11px] font-bold uppercase tracking-wider opacity-70 block mb-1">
                    Price / Demand
                  </span>
                  <div className="flex items-center justify-between gap-3">
                    <div>
                      <span className="font-display font-black text-lg text-[#D96F58] block">
                        Available on Request
                      </span>
                      <span className="text-[11px] opacity-70">
                        Direct owner negotiation
                      </span>
                    </div>
                    <motion.a
                      whileTap={{ scale: 0.95 }}
                      href={whatsappUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center gap-1.5 px-4 py-2 rounded-xl bg-[#D96F58] hover:bg-[#E27A61] text-white text-xs font-bold shadow-xs transition-colors shrink-0"
                    >
                      <MessageCircle className="w-3.5 h-3.5" />
                      <span>Inquire Demand</span>
                    </motion.a>
                  </div>
                </div>

                {/* Key Specs */}
                <div
                  className={`grid grid-cols-3 gap-2 py-3 border-y mb-5 text-center text-xs font-semibold ${
                    isDark ? 'border-white/10' : 'border-[#EFE8DF]'
                  }`}
                >
                  {property.bedrooms ? (
                    <>
                      <div>
                        <Bed className="w-4 h-4 mx-auto text-[#D96F58] mb-1" />
                        <span>{property.bedrooms} Beds</span>
                      </div>
                      <div>
                        <Bath className="w-4 h-4 mx-auto text-[#D96F58] mb-1" />
                        <span>{property.bathrooms} Baths</span>
                      </div>
                      <div>
                        <ShieldCheck className="w-4 h-4 mx-auto text-emerald-500 mb-1" />
                        <span className="text-emerald-500">Verified</span>
                      </div>
                    </>
                  ) : (
                    <>
                      <div>
                        <Maximize2 className="w-4 h-4 mx-auto text-[#D96F58] mb-1" />
                        <span>{property.area}</span>
                      </div>
                      <div>
                        <ShieldCheck className="w-4 h-4 mx-auto text-emerald-500 mb-1" />
                        <span className="text-emerald-500">Title Clear</span>
                      </div>
                      <div>
                        <Tag className="w-4 h-4 mx-auto text-amber-500 mb-1" />
                        <span className="text-amber-500">Possession</span>
                      </div>
                    </>
                  )}
                </div>

                {/* Description */}
                <div className="mb-5">
                  <h4 className="text-xs font-bold uppercase tracking-wider mb-1.5 opacity-80">
                    Overview
                  </h4>
                  <p className={`text-xs leading-relaxed ${isDark ? 'text-slate-300' : 'text-[#68717A]'}`}>
                    {property.fullDescription}
                  </p>
                </div>

                {/* Feature Highlights */}
                <div className="mb-6">
                  <h4 className="text-xs font-bold uppercase tracking-wider mb-2 opacity-80">
                    Key Features
                  </h4>
                  <ul className="grid grid-cols-1 gap-1.5 text-xs">
                    {property.features.map((feat, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <CheckCircle2 className="w-3.5 h-3.5 text-[#D96F58] shrink-0 mt-0.5" />
                        <span className={isDark ? 'text-slate-300' : 'text-[#202A33]'}>{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Bottom Quick Contact */}
              <div className={`pt-4 border-t flex gap-2.5 ${isDark ? 'border-white/10' : 'border-[#EFE8DF]'}`}>
                <motion.a
                  whileTap={{ scale: 0.96 }}
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 inline-flex items-center justify-center gap-2 py-3 px-4 rounded-full bg-[#D96F58] hover:bg-[#E27A61] text-white font-bold text-xs shadow-md transition-all"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>Inquire on WhatsApp</span>
                </motion.a>

                <motion.a
                  whileTap={{ scale: 0.96 }}
                  href={BUSINESS_INFO.phoneHref}
                  className={`inline-flex items-center justify-center gap-2 py-3 px-4 rounded-full font-bold text-xs border transition-colors ${
                    isDark
                      ? 'bg-white/10 hover:bg-white/20 text-white border-white/20'
                      : 'bg-[#FAF7F2] hover:bg-[#EFE8DF] text-[#0B2239] border-[#EFE8DF]'
                  }`}
                  title="Call Agent"
                >
                  <Phone className="w-4 h-4 text-[#D96F58]" />
                  <span>Call</span>
                </motion.a>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
