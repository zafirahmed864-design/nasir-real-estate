import React, { useState } from 'react';
import { Phone, MessageCircle, MapPin, Building2, Send, CheckCircle2, AlertCircle } from 'lucide-react';
import { BUSINESS_INFO } from '../data/properties';
import { InquiryFormData } from '../types';

export const ContactSection: React.FC = () => {
  const [formData, setFormData] = useState<InquiryFormData>({
    fullName: '',
    phone: '',
    propertyRequirement: 'Buying a Residential House',
    preferredLocation: 'Chenab Nagar',
    message: ''
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitted, setIsSubmitted] = useState(false);

  const validate = () => {
    const errs: Record<string, string> = {};
    if (!formData.fullName.trim()) {
      errs.fullName = 'Please enter your full name';
    }
    if (!formData.phone.trim()) {
      errs.phone = 'Please enter your contact phone number';
    } else if (formData.phone.replace(/[^0-9]/g, '').length < 10) {
      errs.phone = 'Please enter a valid phone number (e.g. 03163370864)';
    }
    return errs;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const validationErrors = validate();

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    setErrors({});

    // Construct cleanly formatted WhatsApp message
    const formattedMessage = `Hello Nasir Real Estate,
I am submitting an inquiry through your website:

• Name: ${formData.fullName.trim()}
• Contact: ${formData.phone.trim()}
• Requirement: ${formData.propertyRequirement}
• Preferred Location: ${formData.preferredLocation}
${formData.message.trim() ? `• Details: ${formData.message.trim()}` : ''}

Please let me know how you can assist me. Thank you!`;

    const targetUrl = BUSINESS_INFO.getWhatsAppCustomUrl(formattedMessage);
    
    // Open WhatsApp in new tab
    window.open(targetUrl, '_blank', 'noopener,noreferrer');
    setIsSubmitted(true);
  };

  return (
    <section id="contact" className="py-16 md:py-24 bg-white border-t border-[#EFE8DF]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
          {/* Left Column: Contact Information */}
          <div className="lg:col-span-5 flex flex-col justify-between">
            <div>
              <span className="text-xs font-bold uppercase tracking-widest text-[#D96F58] mb-2 block">
                GET IN TOUCH
              </span>
              <h2
                id="contact-heading"
                className="font-display text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#0B2239] uppercase tracking-tight mb-6"
              >
                LET'S TALK PROPERTY
              </h2>

              <p className="text-sm sm:text-base text-[#68717A] leading-relaxed mb-8">
                Reach out to discuss your property requirements, arrange a visit, or request guidance on current opportunities in Chenab Nagar and Chiniot.
              </p>

              {/* Verified Information Details Cards */}
              <div className="space-y-4 mb-8">
                {/* Business Name */}
                <div className="flex items-start gap-4 p-4 rounded-2xl bg-[#F8F4EF] border border-[#EFE8DF]">
                  <div className="w-10 h-10 rounded-xl bg-white text-[#0B2239] flex items-center justify-center shrink-0 shadow-2xs">
                    <Building2 className="w-5 h-5 text-[#D96F58]" />
                  </div>
                  <div>
                    <span className="text-[11px] font-bold uppercase tracking-wider text-[#68717A] block">
                      Real Estate Agency
                    </span>
                    <strong className="font-display font-bold text-base text-[#0B2239]">
                      {BUSINESS_INFO.name}
                    </strong>
                  </div>
                </div>

                {/* Location / Area */}
                <div className="flex items-start gap-4 p-4 rounded-2xl bg-[#F8F4EF] border border-[#EFE8DF]">
                  <div className="w-10 h-10 rounded-xl bg-white text-[#0B2239] flex items-center justify-center shrink-0 shadow-2xs">
                    <MapPin className="w-5 h-5 text-[#D96F58]" />
                  </div>
                  <div>
                    <span className="text-[11px] font-bold uppercase tracking-wider text-[#68717A] block">
                      Location & Area
                    </span>
                    <span className="font-semibold text-sm text-[#202A33]">
                      {BUSINESS_INFO.location}
                    </span>
                  </div>
                </div>

                {/* Chamber / Office */}
                <div className="flex items-start gap-4 p-4 rounded-2xl bg-[#F8F4EF] border border-[#EFE8DF]">
                  <div className="w-10 h-10 rounded-xl bg-white text-[#0B2239] flex items-center justify-center shrink-0 shadow-2xs">
                    <Building2 className="w-5 h-5 text-[#D96F58]" />
                  </div>
                  <div>
                    <span className="text-[11px] font-bold uppercase tracking-wider text-[#68717A] block">
                      Chamber / Office Affiliation
                    </span>
                    <span className="font-semibold text-sm text-[#202A33]">
                      {BUSINESS_INFO.chamber}
                    </span>
                  </div>
                </div>

                {/* Direct Phone */}
                <div className="flex items-start gap-4 p-4 rounded-2xl bg-[#F8F4EF] border border-[#EFE8DF]">
                  <div className="w-10 h-10 rounded-xl bg-white text-[#0B2239] flex items-center justify-center shrink-0 shadow-2xs">
                    <Phone className="w-5 h-5 text-[#D96F58]" />
                  </div>
                  <div>
                    <span className="text-[11px] font-bold uppercase tracking-wider text-[#68717A] block">
                      Direct Phone & WhatsApp
                    </span>
                    <a
                      href={BUSINESS_INFO.phoneHref}
                      className="font-mono font-bold text-base text-[#0B2239] hover:text-[#D96F58] transition-colors"
                    >
                      {BUSINESS_INFO.phoneDisplay}
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Quick Contact Buttons */}
            <div className="grid grid-cols-2 gap-3 pt-4 border-t border-[#EFE8DF]">
              <a
                id="contact-call-btn"
                href={BUSINESS_INFO.phoneHref}
                className="inline-flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-[#0B2239] hover:bg-[#07182A] text-white font-bold text-sm shadow-xs transition-colors"
                title="Call 03163370864"
              >
                <Phone className="w-4 h-4 text-[#D96F58]" />
                <span>Call Now</span>
              </a>

              <a
                id="contact-whatsapp-btn"
                href={BUSINESS_INFO.whatsappBaseUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-[#D96F58] hover:bg-[#E27A61] text-white font-bold text-sm shadow-xs transition-colors"
              >
                <MessageCircle className="w-4 h-4" />
                <span>WhatsApp Us</span>
              </a>
            </div>
          </div>

          {/* Right Column: Professional Inquiry Form */}
          <div className="lg:col-span-7">
            <div className="bg-[#F8F4EF] rounded-3xl p-6 sm:p-8 md:p-10 border border-[#EFE8DF] shadow-lg relative">
              <div className="mb-6">
                <h3 className="font-display font-bold text-xl sm:text-2xl text-[#0B2239] mb-1">
                  Send a Direct Inquiry
                </h3>
                <p className="text-xs sm:text-sm text-[#68717A]">
                  Complete the form below to connect instantly on WhatsApp with all your requirements pre-filled.
                </p>
              </div>

              {isSubmitted && (
                <div className="mb-6 p-4 rounded-2xl bg-emerald-50 border border-emerald-200 text-emerald-800 text-xs sm:text-sm flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
                  <div>
                    <strong className="font-bold block">Inquiry Prepared for WhatsApp!</strong>
                    <span>Your details were formatted and opened in WhatsApp. If it didn't open automatically, you can also call us directly at <strong>{BUSINESS_INFO.phoneDisplay}</strong>.</span>
                  </div>
                </div>
              )}

              <form onSubmit={handleSubmit} noValidate className="space-y-4 sm:space-y-5">
                {/* Full Name */}
                <div>
                  <label
                    htmlFor="inquiry-fullname"
                    className="block text-xs font-bold uppercase tracking-wider text-[#0B2239] mb-1.5"
                  >
                    Full Name <span className="text-[#D96F58]">*</span>
                  </label>
                  <input
                    id="inquiry-fullname"
                    type="text"
                    required
                    placeholder="e.g. Muhammad Ahmad"
                    value={formData.fullName}
                    onChange={(e) => {
                      setFormData({ ...formData, fullName: e.target.value });
                      if (errors.fullName) setErrors({ ...errors, fullName: '' });
                    }}
                    className={`w-full bg-white border ${
                      errors.fullName ? 'border-rose-500 ring-1 ring-rose-500' : 'border-[#EFE8DF]'
                    } rounded-xl px-4 py-3 text-sm text-[#202A33] placeholder-[#94A3B8] focus:outline-none focus:ring-2 focus:ring-[#D96F58] transition-all`}
                  />
                  {errors.fullName && (
                    <p className="mt-1 text-xs text-rose-600 flex items-center gap-1">
                      <AlertCircle className="w-3.5 h-3.5" /> {errors.fullName}
                    </p>
                  )}
                </div>

                {/* Phone Number */}
                <div>
                  <label
                    htmlFor="inquiry-phone"
                    className="block text-xs font-bold uppercase tracking-wider text-[#0B2239] mb-1.5"
                  >
                    Phone / WhatsApp Number <span className="text-[#D96F58]">*</span>
                  </label>
                  <input
                    id="inquiry-phone"
                    type="tel"
                    required
                    placeholder="e.g. 03001234567"
                    value={formData.phone}
                    onChange={(e) => {
                      setFormData({ ...formData, phone: e.target.value });
                      if (errors.phone) setErrors({ ...errors, phone: '' });
                    }}
                    className={`w-full bg-white border ${
                      errors.phone ? 'border-rose-500 ring-1 ring-rose-500' : 'border-[#EFE8DF]'
                    } rounded-xl px-4 py-3 text-sm text-[#202A33] placeholder-[#94A3B8] focus:outline-none focus:ring-2 focus:ring-[#D96F58] transition-all font-mono`}
                  />
                  {errors.phone && (
                    <p className="mt-1 text-xs text-rose-600 flex items-center gap-1">
                      <AlertCircle className="w-3.5 h-3.5" /> {errors.phone}
                    </p>
                  )}
                </div>

                {/* Property Requirement & Preferred Location */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label
                      htmlFor="inquiry-requirement"
                      className="block text-xs font-bold uppercase tracking-wider text-[#0B2239] mb-1.5"
                    >
                      Property Requirement
                    </label>
                    <select
                      id="inquiry-requirement"
                      value={formData.propertyRequirement}
                      onChange={(e) => setFormData({ ...formData, propertyRequirement: e.target.value })}
                      className="w-full bg-white border border-[#EFE8DF] rounded-xl px-4 py-3 text-sm text-[#202A33] focus:outline-none focus:ring-2 focus:ring-[#D96F58] transition-all cursor-pointer"
                    >
                      <option value="Buying a Residential House">Buying a Residential House</option>
                      <option value="Selling a Property">Selling a Property</option>
                      <option value="Commercial Plaza or Shop">Commercial Plaza or Shop</option>
                      <option value="Plot / Land Investment">Plot / Land Investment</option>
                      <option value="General Property Consultation">General Property Consultation</option>
                    </select>
                  </div>

                  <div>
                    <label
                      htmlFor="inquiry-location"
                      className="block text-xs font-bold uppercase tracking-wider text-[#0B2239] mb-1.5"
                    >
                      Preferred Location
                    </label>
                    <select
                      id="inquiry-location"
                      value={formData.preferredLocation}
                      onChange={(e) => setFormData({ ...formData, preferredLocation: e.target.value })}
                      className="w-full bg-white border border-[#EFE8DF] rounded-xl px-4 py-3 text-sm text-[#202A33] focus:outline-none focus:ring-2 focus:ring-[#D96F58] transition-all cursor-pointer"
                    >
                      <option value="Chenab Nagar">Chenab Nagar</option>
                      <option value="Chiniot City">Chiniot City</option>
                      <option value="Faisalabad Road Corridor">Faisalabad Road Corridor</option>
                      <option value="Surrounding Punjab Markets">Surrounding Markets</option>
                    </select>
                  </div>
                </div>

                {/* Message */}
                <div>
                  <label
                    htmlFor="inquiry-message"
                    className="block text-xs font-bold uppercase tracking-wider text-[#0B2239] mb-1.5"
                  >
                    Additional Message / Specific Needs
                  </label>
                  <textarea
                    id="inquiry-message"
                    rows={3}
                    placeholder="Tell us about your budget, size preference (Marla/Kanal), or specific timeline..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full bg-white border border-[#EFE8DF] rounded-xl px-4 py-3 text-sm text-[#202A33] placeholder-[#94A3B8] focus:outline-none focus:ring-2 focus:ring-[#D96F58] transition-all resize-none"
                  />
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  id="inquiry-submit-btn"
                  className="w-full inline-flex items-center justify-center gap-2 bg-[#D96F58] hover:bg-[#E27A61] text-white py-4 px-6 rounded-xl font-bold text-sm sm:text-base shadow-md hover:shadow-lg transition-all transform hover:-translate-y-0.5 cursor-pointer"
                >
                  <Send className="w-4 h-4" />
                  <span>SEND INQUIRY VIA WHATSAPP</span>
                </button>

                <p className="text-center text-[11px] text-[#68717A]">
                  Submitting directly formats your message into WhatsApp with zero spam or intermediaries.
                </p>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
