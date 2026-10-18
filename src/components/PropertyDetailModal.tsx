import React, { useState } from 'react';
import { X, MapPin, Bed, Bath, Maximize2, MessageCircle, Phone, CheckCircle2, Share2, Tag, ShieldCheck, Compass } from 'lucide-react';
import { Property } from '../types';
import { BUSINESS_INFO } from '../data/properties';

interface PropertyDetailModalProps {
  property: Property | null;
  onClose: () => void;
}

export const PropertyDetailModal: React.FC<PropertyDetailModalProps> = ({ property, onClose }) => {
  if (!property) return null;

  const [selectedImgIndex, setSelectedImgIndex] = useState(0);
  const [copied, setCopied] = useState(false);

  const whatsappUrl = BUSINESS_INFO.getWhatsAppPropertyUrl(property.title, property.location);

  const handleShare = () => {
    navigator.clipboard.writeText(window.location.href);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div
      id="property-detail-modal"
      className="fixed inset-0 z-50 overflow-y-auto bg-black/75 backdrop-blur-sm flex items-center justify-center p-4 sm:p-6"
      onClick={onClose}
    >
      <div
        className="relative bg-white w-full max-w-4xl rounded-3xl shadow-2xl overflow-hidden border border-[#EFE8DF] my-8 animate-in fade-in zoom-in-95 duration-200"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          aria-label="Close modal"
          className="absolute top-4 right-4 z-20 w-10 h-10 rounded-full bg-white/90 hover:bg-white text-[#0B2239] flex items-center justify-center shadow-lg transition-colors cursor-pointer"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="grid grid-cols-1 lg:grid-cols-12 max-h-[85vh] overflow-y-auto">
          {/* Left: Image Gallery */}
          <div className="lg:col-span-7 bg-[#07182A] flex flex-col justify-between">
            <div className="relative aspect-[4/3] w-full bg-black/40">
              <img
                src={property.gallery[selectedImgIndex] || property.image}
                alt={property.title}
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover object-center"
              />
              <div className="absolute top-4 left-4">
                <span className="px-3 py-1 rounded-full bg-[#0B2239]/90 backdrop-blur-md text-white text-xs font-bold uppercase tracking-wider border border-white/20">
                  {property.category}
                </span>
              </div>
            </div>

            {/* Gallery Thumbnails */}
            {property.gallery && property.gallery.length > 1 && (
              <div className="p-3 bg-[#0B2239] flex items-center gap-2 overflow-x-auto">
                {property.gallery.map((img, idx) => (
                  <button
                    key={idx}
                    onClick={() => setSelectedImgIndex(idx)}
                    className={`relative w-16 h-12 rounded-lg overflow-hidden shrink-0 border-2 transition-all cursor-pointer ${
                      selectedImgIndex === idx ? 'border-[#D96F58] opacity-100 scale-105' : 'border-transparent opacity-60 hover:opacity-90'
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
          <div className="lg:col-span-5 p-6 sm:p-7 flex flex-col justify-between bg-white">
            <div>
              {/* Category & Location */}
              <div className="flex items-center justify-between gap-2 mb-2">
                <span className="inline-flex items-center gap-1 text-xs font-bold uppercase tracking-wider text-[#D96F58]">
                  <Tag className="w-3 h-3" /> {property.category}
                </span>
                <button
                  onClick={handleShare}
                  className="text-xs text-[#68717A] hover:text-[#0B2239] flex items-center gap-1 cursor-pointer"
                  title="Share link"
                >
                  <Share2 className="w-3.5 h-3.5" />
                  <span>{copied ? 'Copied!' : 'Share'}</span>
                </button>
              </div>

              <h3 className="font-display text-xl sm:text-2xl font-bold text-[#0B2239] leading-tight mb-1">
                {property.title}
              </h3>

              <div className="flex items-center gap-1 text-xs text-[#68717A] mb-4">
                <MapPin className="w-3.5 h-3.5 text-[#D96F58]" />
                <span>{property.location} • {property.areaDetail}</span>
              </div>

              {/* Price / Demand Box */}
              <div className="p-4 rounded-2xl bg-[#F8F4EF] border border-[#EFE8DF] mb-5">
                <span className="text-[11px] font-bold uppercase tracking-wider text-[#68717A] block mb-1">
                  Price / Demand
                </span>
                <div className="flex items-center justify-between gap-3">
                  <div>
                    <span className="font-display font-extrabold text-lg text-[#0B2239] block">
                      Available on Request
                    </span>
                    <span className="text-[11px] text-[#68717A]">
                      Direct negotiation • No middleman fee
                    </span>
                  </div>
                  <a
                    href={whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-1.5 px-4 py-2 rounded-xl bg-[#25D366] hover:bg-[#20bd5a] text-white text-xs font-bold shadow-xs transition-colors shrink-0"
                  >
                    <MessageCircle className="w-3.5 h-3.5 fill-current" />
                    <span>Inquire Demand</span>
                  </a>
                </div>
              </div>

              {/* Key Specs */}
              <div className="grid grid-cols-3 gap-2 py-3 border-y border-[#EFE8DF] mb-5 text-center">
                {property.category === 'Residential' ? (
                  <>
                    <div className="p-2 rounded-xl bg-[#F8F4EF]/60">
                      <Bed className="w-4 h-4 mx-auto text-[#0B2239] mb-1" />
                      <span className="text-xs font-bold text-[#0B2239] block">{property.bedrooms} Beds</span>
                      <span className="text-[10px] text-[#68717A]">Bedrooms</span>
                    </div>
                    <div className="p-2 rounded-xl bg-[#F8F4EF]/60">
                      <Bath className="w-4 h-4 mx-auto text-[#0B2239] mb-1" />
                      <span className="text-xs font-bold text-[#0B2239] block">{property.bathrooms} Baths</span>
                      <span className="text-[10px] text-[#68717A]">Bathrooms</span>
                    </div>
                  </>
                ) : property.category === 'Plot' ? (
                  <>
                    <div className="p-2 rounded-xl bg-[#F8F4EF]/60">
                      <ShieldCheck className="w-4 h-4 mx-auto text-[#0B2239] mb-1" />
                      <span className="text-xs font-bold text-[#0B2239] block">Verified</span>
                      <span className="text-[10px] text-[#68717A]">Clear Registry</span>
                    </div>
                    <div className="p-2 rounded-xl bg-[#F8F4EF]/60">
                      <Compass className="w-4 h-4 mx-auto text-[#0B2239] mb-1" />
                      <span className="text-xs font-bold text-[#0B2239] block">Ready</span>
                      <span className="text-[10px] text-[#68717A]">Possession</span>
                    </div>
                  </>
                ) : (
                  <>
                    <div className="p-2 rounded-xl bg-[#F8F4EF]/60">
                      <span className="text-xs font-bold text-[#0B2239] block mt-2">Commercial</span>
                      <span className="text-[10px] text-[#68717A]">Category</span>
                    </div>
                    <div className="p-2 rounded-xl bg-[#F8F4EF]/60">
                      <span className="text-xs font-bold text-[#0B2239] block mt-2">Prime</span>
                      <span className="text-[10px] text-[#68717A]">Zoning</span>
                    </div>
                  </>
                )}

                <div className="p-2 rounded-xl bg-[#F8F4EF]/60">
                  <Maximize2 className="w-4 h-4 mx-auto text-[#0B2239] mb-1" />
                  <span className="text-xs font-bold text-[#0B2239] block truncate px-0.5">{property.area}</span>
                  <span className="text-[10px] text-[#68717A]">Dimension</span>
                </div>
              </div>

              {/* Description */}
              <div className="mb-5">
                <h4 className="text-xs font-bold uppercase tracking-wider text-[#0B2239] mb-1.5">
                  About This Property
                </h4>
                <p className="text-xs sm:text-sm text-[#68717A] leading-relaxed">
                  {property.fullDescription}
                </p>
              </div>

              {/* Features List */}
              <div className="mb-6">
                <h4 className="text-xs font-bold uppercase tracking-wider text-[#0B2239] mb-2">
                  Key Amenities & Highlights
                </h4>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-1.5">
                  {property.features.map((feat, idx) => (
                    <li key={idx} className="flex items-start gap-1.5 text-xs text-[#202A33]">
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#D96F58] shrink-0 mt-0.5" />
                      <span>{feat}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Direct Inquiry Action Bar */}
            <div className="pt-4 border-t border-[#EFE8DF] flex flex-col sm:flex-row gap-2.5">
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 inline-flex items-center justify-center gap-2 bg-[#25D366] hover:bg-[#20bd5a] text-white py-3 px-4 rounded-xl font-bold text-sm shadow-md transition-colors"
              >
                <MessageCircle className="w-4 h-4 fill-current" />
                <span>Inquire on WhatsApp</span>
              </a>

              <a
                href={BUSINESS_INFO.phoneHref}
                className="inline-flex items-center justify-center gap-1.5 bg-[#0B2239] hover:bg-[#07182A] text-white py-3 px-4 rounded-xl font-bold text-sm transition-colors"
                title="Call 03163370864"
              >
                <Phone className="w-4 h-4 text-[#D96F58]" />
                <span className="font-mono">Call</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
