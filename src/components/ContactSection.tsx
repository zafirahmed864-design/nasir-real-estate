import React, { useState } from 'react';
import { Phone, MessageCircle, MapPin, Building2, Send, CheckCircle2, AlertCircle } from 'lucide-react';
import { motion } from 'motion/react';
import { BUSINESS_INFO } from '../data/properties';
import { InquiryFormData } from '../types';
import { useTheme } from '../context/ThemeContext';

export const ContactSection: React.FC = () => {
  const { isDark } = useTheme();

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

    const formattedMessage = `Hello Nasir Real Estate,
I am submitting a direct inquiry through your website:

• Name: ${formData.fullName.trim()}
• Phone: ${formData.phone.trim()}
• Requirement: ${formData.propertyRequirement}
• Location: ${formData.preferredLocation}
${formData.message.trim() ? `• Notes: ${formData.message.trim()}` : ''}

Please connect with me with suitable options.`;

    const targetUrl = BUSINESS_INFO.getWhatsAppCustomUrl(formattedMessage);
    window.open(targetUrl, '_blank', 'noopener,noreferrer');
    setIsSubmitted(true);
  };

  return (
    <section
      id="contact"
      className={`py-16 md:py-24 border-t transition-colors ${
        isDark ? 'bg-[#060B14] border-white/10' : 'bg-white border-[#EFE8DF]'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
          {/* Left Column: Contact Information with Motion */}
          <motion.div
            initial={{ opacity: 0, x: -25 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-5 flex flex-col justify-between"
          >
            <div>
              <span className="text-xs font-bold uppercase tracking-widest text-[#D96F58] mb-2 block">
                DIRECT CONTACT DESK
              </span>
              <h2
                id="contact-heading"
                className={`font-display text-3xl sm:text-4xl md:text-5xl font-black uppercase tracking-tight mb-6 ${
                  isDark ? 'text-white' : 'text-[#0B2239]'
                }`}
              >
                LET'S TALK PROPERTY
              </h2>

              <p className={`text-sm sm:text-base leading-relaxed mb-8 ${isDark ? 'text-slate-300' : 'text-[#68717A]'}`}>
                Reach out to discuss your property requirements, schedule a site inspection, or request verified guidance on opportunities in Chenab Nagar and Chiniot.
              </p>

              {/* Verified Information Details Cards */}
              <div className="space-y-4 mb-8">
                {/* Agency */}
                <div
                  className={`flex items-start gap-4 p-4 rounded-2xl border transition-colors ${
                    isDark ? 'bg-[#0B1424] border-white/10' : 'bg-[#FAF7F2] border-[#EFE8DF]'
                  }`}
                >
                  <div className="w-10 h-10 rounded-xl bg-white text-[#0B2239] flex items-center justify-center shrink-0 shadow-2xs">
                    <Building2 className="w-5 h-5 text-[#D96F58]" />
                  </div>
                  <div>
                    <span className="text-[11px] font-bold uppercase tracking-wider opacity-70 block">
                      Real Estate Agency
                    </span>
                    <strong className={`font-display font-bold text-base ${isDark ? 'text-white' : 'text-[#0B2239]'}`}>
                      {BUSINESS_INFO.name}
                    </strong>
                  </div>
                </div>

                {/* Location */}
                <div
                  className={`flex items-start gap-4 p-4 rounded-2xl border transition-colors ${
                    isDark ? 'bg-[#0B1424] border-white/10' : 'bg-[#FAF7F2] border-[#EFE8DF]'
                  }`}
                >
                  <div className="w-10 h-10 rounded-xl bg-white text-[#0B2239] flex items-center justify-center shrink-0 shadow-2xs">
                    <MapPin className="w-5 h-5 text-[#D96F58]" />
                  </div>
                  <div>
                    <span className="text-[11px] font-bold uppercase tracking-wider opacity-70 block">
                      Location & Market
                    </span>
                    <span className={`font-semibold text-sm ${isDark ? 'text-slate-200' : 'text-[#202A33]'}`}>
                      {BUSINESS_INFO.location}
                    </span>
                  </div>
                </div>

                {/* Chamber */}
                <div
                  className={`flex items-start gap-4 p-4 rounded-2xl border transition-colors ${
                    isDark ? 'bg-[#0B1424] border-white/10' : 'bg-[#FAF7F2] border-[#EFE8DF]'
                  }`}
                >
                  <div className="w-10 h-10 rounded-xl bg-white text-[#0B2239] flex items-center justify-center shrink-0 shadow-2xs">
                    <Building2 className="w-5 h-5 text-[#D96F58]" />
                  </div>
                  <div>
                    <span className="text-[11px] font-bold uppercase tracking-wider opacity-70 block">
                      Institutional Connection
                    </span>
                    <span className={`font-semibold text-sm ${isDark ? 'text-slate-200' : 'text-[#202A33]'}`}>
                      {BUSINESS_INFO.chamber}
                    </span>
                  </div>
                </div>

                {/* Phone */}
                <div
                  className={`flex items-start gap-4 p-4 rounded-2xl border transition-colors ${
                    isDark ? 'bg-[#0B1424] border-white/10' : 'bg-[#FAF7F2] border-[#EFE8DF]'
                  }`}
                >
                  <div className="w-10 h-10 rounded-xl bg-white text-[#0B2239] flex items-center justify-center shrink-0 shadow-2xs">
                    <Phone className="w-5 h-5 text-[#D96F58]" />
                  </div>
                  <div>
                    <span className="text-[11px] font-bold uppercase tracking-wider opacity-70 block">
                      Direct Phone & WhatsApp
                    </span>
                    <a
                      href={BUSINESS_INFO.phoneHref}
                      className="font-mono font-bold text-base text-[#D96F58] hover:underline transition-colors"
                    >
                      {BUSINESS_INFO.phoneDisplay}
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Quick Action Buttons */}
            <div className={`grid grid-cols-2 gap-3 pt-4 border-t ${isDark ? 'border-white/10' : 'border-[#EFE8DF]'}`}>
              <motion.a
                id="contact-call-btn"
                href={BUSINESS_INFO.phoneHref}
                whileTap={{ scale: 0.96 }}
                className={`inline-flex items-center justify-center gap-2 py-3 px-4 rounded-full font-bold text-sm shadow-md transition-colors ${
                  isDark
                    ? 'bg-white text-[#0B2239] hover:bg-slate-100'
                    : 'bg-[#0B2239] text-white hover:bg-[#07182A]'
                }`}
              >
                <Phone className="w-4 h-4 text-[#D96F58]" />
                <span>Call Now</span>
              </motion.a>

              <motion.a
                id="contact-whatsapp-btn"
                href={BUSINESS_INFO.whatsappBaseUrl}
                target="_blank"
                rel="noopener noreferrer"
                whileTap={{ scale: 0.96 }}
                className="inline-flex items-center justify-center gap-2 py-3 px-4 rounded-full bg-[#D96F58] hover:bg-[#E27A61] text-white font-bold text-sm shadow-md transition-colors"
              >
                <MessageCircle className="w-4 h-4" />
                <span>WhatsApp Us</span>
              </motion.a>
            </div>
          </motion.div>

          {/* Right Column: Professional Inquiry Form with Motion */}
          <motion.div
            initial={{ opacity: 0, x: 25 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-7"
          >
            <div
              className={`rounded-3xl p-6 sm:p-8 md:p-10 border shadow-2xl relative ${
                isDark
                  ? 'bg-[#0B1424] border-white/15 text-white'
                  : 'bg-[#FAF7F2] border-[#EFE8DF] text-[#0B2239]'
              }`}
            >
              <div className="mb-6">
                <h3 className="font-display font-extrabold text-xl sm:text-2xl mb-1">
                  Send a Direct Inquiry
                </h3>
                <p className={`text-xs sm:text-sm ${isDark ? 'text-slate-300' : 'text-[#68717A]'}`}>
                  Submit your property requirement to automatically prepare your WhatsApp message.
                </p>
              </div>

              {isSubmitted && (
                <div className="mb-6 p-4 rounded-2xl bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs sm:text-sm flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
                  <div>
                    <strong className="font-bold block">Inquiry Ready for WhatsApp!</strong>
                    <span>Your details were formatted and opened in WhatsApp. You can also call us directly at <strong>{BUSINESS_INFO.phoneDisplay}</strong>.</span>
                  </div>
                </div>
              )}

              <form onSubmit={handleSubmit} noValidate className="space-y-4 sm:space-y-5">
                {/* Full Name */}
                <div>
                  <label
                    htmlFor="inquiry-fullname"
                    className="block text-xs font-bold uppercase tracking-wider mb-1.5 opacity-80"
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
                    className={`w-full border rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-[#D96F58] transition-all ${
                      isDark
                        ? 'bg-[#060B14] border-white/10 text-white placeholder-slate-500'
                        : 'bg-white border-[#EFE8DF] text-[#202A33] placeholder-slate-400'
                    } ${errors.fullName ? 'border-rose-500' : ''}`}
                  />
                  {errors.fullName && (
                    <p className="mt-1 text-xs text-rose-500 flex items-center gap-1">
                      <AlertCircle className="w-3.5 h-3.5" />
                      {errors.fullName}
                    </p>
                  )}
                </div>

                {/* Phone */}
                <div>
                  <label
                    htmlFor="inquiry-phone"
                    className="block text-xs font-bold uppercase tracking-wider mb-1.5 opacity-80"
                  >
                    Phone / WhatsApp Number <span className="text-[#D96F58]">*</span>
                  </label>
                  <input
                    id="inquiry-phone"
                    type="tel"
                    required
                    placeholder="e.g. 03163370864"
                    value={formData.phone}
                    onChange={(e) => {
                      setFormData({ ...formData, phone: e.target.value });
                      if (errors.phone) setErrors({ ...errors, phone: '' });
                    }}
                    className={`w-full border rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-[#D96F58] transition-all ${
                      isDark
                        ? 'bg-[#060B14] border-white/10 text-white placeholder-slate-500'
                        : 'bg-white border-[#EFE8DF] text-[#202A33] placeholder-slate-400'
                    } ${errors.phone ? 'border-rose-500' : ''}`}
                  />
                  {errors.phone && (
                    <p className="mt-1 text-xs text-rose-500 flex items-center gap-1">
                      <AlertCircle className="w-3.5 h-3.5" />
                      {errors.phone}
                    </p>
                  )}
                </div>

                {/* Requirement & Location Row */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label
                      htmlFor="inquiry-requirement"
                      className="block text-xs font-bold uppercase tracking-wider mb-1.5 opacity-80"
                    >
                      Property Goal
                    </label>
                    <select
                      id="inquiry-requirement"
                      value={formData.propertyRequirement}
                      onChange={(e) => setFormData({ ...formData, propertyRequirement: e.target.value })}
                      className={`w-full border rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-[#D96F58] transition-all cursor-pointer ${
                        isDark
                          ? 'bg-[#060B14] border-white/10 text-white'
                          : 'bg-white border-[#EFE8DF] text-[#202A33]'
                      }`}
                    >
                      <option value="Buying a Residential House">Buying a House</option>
                      <option value="Buying a Residential Plot">Buying a Plot</option>
                      <option value="Buying Commercial Property">Buying Commercial</option>
                      <option value="Selling a Property">Selling My Property</option>
                      <option value="General Property Consultation">General Inquiry</option>
                    </select>
                  </div>

                  <div>
                    <label
                      htmlFor="inquiry-location"
                      className="block text-xs font-bold uppercase tracking-wider mb-1.5 opacity-80"
                    >
                      Target Location
                    </label>
                    <select
                      id="inquiry-location"
                      value={formData.preferredLocation}
                      onChange={(e) => setFormData({ ...formData, preferredLocation: e.target.value })}
                      className={`w-full border rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-[#D96F58] transition-all cursor-pointer ${
                        isDark
                          ? 'bg-[#060B14] border-white/10 text-white'
                          : 'bg-white border-[#EFE8DF] text-[#202A33]'
                      }`}
                    >
                      <option value="Chenab Nagar">Chenab Nagar</option>
                      <option value="Chiniot">Chiniot</option>
                      <option value="Either / Surrounding Corridors">Either / Surrounding</option>
                    </select>
                  </div>
                </div>

                {/* Optional Message */}
                <div>
                  <label
                    htmlFor="inquiry-message"
                    className="block text-xs font-bold uppercase tracking-wider mb-1.5 opacity-80"
                  >
                    Additional Details (Optional)
                  </label>
                  <textarea
                    id="inquiry-message"
                    rows={3}
                    placeholder="Tell us Marla size, specific sector, or preferred timing..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className={`w-full border rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-[#D96F58] transition-all resize-none ${
                      isDark
                        ? 'bg-[#060B14] border-white/10 text-white placeholder-slate-500'
                        : 'bg-white border-[#EFE8DF] text-[#202A33] placeholder-slate-400'
                    }`}
                  />
                </div>

                {/* Submit Button */}
                <motion.button
                  id="inquiry-submit-btn"
                  type="submit"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full inline-flex items-center justify-center gap-2 bg-[#D96F58] hover:bg-[#E27A61] text-white py-3.5 px-6 rounded-full font-bold text-sm shadow-lg transition-all cursor-pointer"
                >
                  <Send className="w-4 h-4" />
                  <span>Submit Inquiry to WhatsApp</span>
                </motion.button>
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
