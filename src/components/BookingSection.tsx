import React, { useState, useEffect } from 'react';
import { Calendar, CheckCircle2, Lock, ArrowRight, RefreshCw, AlertCircle } from 'lucide-react';

interface BookingFormData {
  fullName: string;
  email: string;
  phone: string;
  service: string;
  date: string;
  contactMethod: string;
  message: string;
}

interface BookingSectionProps {
  preselectedService?: string;
  onClearPreselectedService?: () => void;
}

export const BookingSection: React.FC<BookingSectionProps> = ({
  preselectedService,
  onClearPreselectedService,
}) => {
  const [formData, setFormData] = useState<BookingFormData>({
    fullName: '',
    email: '',
    phone: '',
    service: 'Primary Care',
    date: '',
    contactMethod: 'Email',
    message: '',
  });

  const [errors, setErrors] = useState<Partial<Record<keyof BookingFormData, string>>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submittedData, setSubmittedData] = useState<BookingFormData | null>(null);

  // Sync preselected service from Services section "Learn More" / "Book Consultation"
  useEffect(() => {
    if (preselectedService) {
      setFormData((prev) => ({ ...prev, service: preselectedService }));
    }
  }, [preselectedService]);

  // Set minimum date to tomorrow
  const getTomorrowDate = () => {
    const tomorrow = new Date();
    tomorrow.setDate(tomorrow.getDate() + 1);
    return tomorrow.toISOString().split('T')[0];
  };

  const validate = (): boolean => {
    const newErrors: Partial<Record<keyof BookingFormData, string>> = {};

    if (!formData.fullName.trim()) {
      newErrors.fullName = 'Please enter your full name.';
    } else if (formData.fullName.trim().length < 2) {
      newErrors.fullName = 'Full name must be at least 2 characters.';
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email.trim()) {
      newErrors.email = 'Please provide your email address.';
    } else if (!emailRegex.test(formData.email.trim())) {
      newErrors.email = 'Please enter a valid email address.';
    }

    const phoneRegex = /^[\d\s()+-]{7,20}$/;
    if (!formData.phone.trim()) {
      newErrors.phone = 'Please provide a telephone number.';
    } else if (!phoneRegex.test(formData.phone.trim())) {
      newErrors.phone = 'Please enter a valid phone number format.';
    }

    if (!formData.date) {
      newErrors.date = 'Please select a preferred date.';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);

    // Front-end demonstration simulation with a clean timeout
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmittedData({ ...formData });
      if (onClearPreselectedService) {
        onClearPreselectedService();
      }
    }, 600);
  };

  const handleReset = () => {
    setSubmittedData(null);
    setFormData({
      fullName: '',
      email: '',
      phone: '',
      service: 'Primary Care',
      date: '',
      contactMethod: 'Email',
      message: '',
    });
    setErrors({});
  };

  const servicesList = [
    'Primary Care',
    'Virtual Consultations',
    'Preventive Healthcare',
    'Personalized Wellness',
    'General Health Inquiry',
  ];

  return (
    <section id="booking" className="bg-[#174C4F] text-white py-20 lg:py-28 relative overflow-hidden">
      {/* Background ambient accents */}
      <div
        className="absolute top-0 right-0 -mr-20 -mt-20 w-96 h-96 rounded-full bg-[#82B5A0]/10 blur-3xl pointer-events-none"
        aria-hidden="true"
      />
      <div
        className="absolute bottom-0 left-0 -ml-20 -mb-20 w-96 h-96 rounded-full bg-[#E8F4F0]/5 blur-3xl pointer-events-none"
        aria-hidden="true"
      />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Heading */}
        <div className="text-center mb-12 sm:mb-16">
          <div className="flex items-center justify-center gap-2 mb-3">
            <span className="w-5 h-[1.5px] bg-[#82B5A0]" aria-hidden="true" />
            <span className="text-xs font-semibold tracking-wider text-[#82B5A0] uppercase">
              APPOINTMENT REQUEST
            </span>
            <span className="w-5 h-[1.5px] bg-[#82B5A0]" aria-hidden="true" />
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight mb-4">
            Let's Take the Next Step Toward Better Health.
          </h2>
          <p className="text-base sm:text-lg text-[#E8F4F0]/85 max-w-2xl mx-auto leading-relaxed">
            Tell us how we can help, and our team can follow up about your appointment request.
          </p>
        </div>

        {/* Card Container */}
        <div className="bg-white rounded-3xl p-6 sm:p-10 lg:p-12 text-slate-800 shadow-xl border border-white/20">
          {!submittedData ? (
            <form onSubmit={handleSubmit} noValidate className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {/* Full Name */}
                <div>
                  <label htmlFor="fullName" className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-2">
                    Full Name <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    id="fullName"
                    name="fullName"
                    value={formData.fullName}
                    onChange={(e) => {
                      setFormData({ ...formData, fullName: e.target.value });
                      if (errors.fullName) setErrors({ ...errors, fullName: undefined });
                    }}
                    placeholder="e.g. Eleanor Vance"
                    aria-invalid={!!errors.fullName}
                    aria-describedby={errors.fullName ? 'fullName-error' : undefined}
                    className={`w-full px-4 py-3 rounded-xl border text-sm text-slate-900 placeholder:text-slate-400 transition-colors focus:outline-hidden ${
                      errors.fullName
                        ? 'border-red-500 bg-red-50/40 focus:border-red-500'
                        : 'border-[#D0E0DA] bg-[#FAFAF7] focus:border-[#174C4F] focus:bg-white'
                    }`}
                  />
                  {errors.fullName && (
                    <p id="fullName-error" className="text-xs text-red-600 mt-1.5 flex items-center gap-1">
                      <AlertCircle className="w-3.5 h-3.5" />
                      <span>{errors.fullName}</span>
                    </p>
                  )}
                </div>

                {/* Email Address */}
                <div>
                  <label htmlFor="email" className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-2">
                    Email Address <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={(e) => {
                      setFormData({ ...formData, email: e.target.value });
                      if (errors.email) setErrors({ ...errors, email: undefined });
                    }}
                    placeholder="e.g. eleanor@example.com"
                    aria-invalid={!!errors.email}
                    aria-describedby={errors.email ? 'email-error' : undefined}
                    className={`w-full px-4 py-3 rounded-xl border text-sm text-slate-900 placeholder:text-slate-400 transition-colors focus:outline-hidden ${
                      errors.email
                        ? 'border-red-500 bg-red-50/40 focus:border-red-500'
                        : 'border-[#D0E0DA] bg-[#FAFAF7] focus:border-[#174C4F] focus:bg-white'
                    }`}
                  />
                  {errors.email && (
                    <p id="email-error" className="text-xs text-red-600 mt-1.5 flex items-center gap-1">
                      <AlertCircle className="w-3.5 h-3.5" />
                      <span>{errors.email}</span>
                    </p>
                  )}
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {/* Phone Number */}
                <div>
                  <label htmlFor="phone" className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-2">
                    Phone Number <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={(e) => {
                      setFormData({ ...formData, phone: e.target.value });
                      if (errors.phone) setErrors({ ...errors, phone: undefined });
                    }}
                    placeholder="e.g. (555) 234-5678"
                    aria-invalid={!!errors.phone}
                    aria-describedby={errors.phone ? 'phone-error' : undefined}
                    className={`w-full px-4 py-3 rounded-xl border text-sm text-slate-900 placeholder:text-slate-400 transition-colors focus:outline-hidden ${
                      errors.phone
                        ? 'border-red-500 bg-red-50/40 focus:border-red-500'
                        : 'border-[#D0E0DA] bg-[#FAFAF7] focus:border-[#174C4F] focus:bg-white'
                    }`}
                  />
                  {errors.phone && (
                    <p id="phone-error" className="text-xs text-red-600 mt-1.5 flex items-center gap-1">
                      <AlertCircle className="w-3.5 h-3.5" />
                      <span>{errors.phone}</span>
                    </p>
                  )}
                </div>

                {/* Preferred Service */}
                <div>
                  <label htmlFor="service" className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-2">
                    Preferred Service <span className="text-red-500">*</span>
                  </label>
                  <select
                    id="service"
                    name="service"
                    value={formData.service}
                    onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl border border-[#D0E0DA] bg-[#FAFAF7] text-sm text-slate-900 focus:border-[#174C4F] focus:bg-white transition-colors focus:outline-hidden cursor-pointer"
                  >
                    {servicesList.map((svc) => (
                      <option key={svc} value={svc}>
                        {svc}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {/* Preferred Appointment Date */}
                <div>
                  <label htmlFor="date" className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-2">
                    Preferred Date <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="date"
                    id="date"
                    name="date"
                    min={getTomorrowDate()}
                    value={formData.date}
                    onChange={(e) => {
                      setFormData({ ...formData, date: e.target.value });
                      if (errors.date) setErrors({ ...errors, date: undefined });
                    }}
                    aria-invalid={!!errors.date}
                    aria-describedby={errors.date ? 'date-error' : undefined}
                    className={`w-full px-4 py-3 rounded-xl border text-sm text-slate-900 transition-colors focus:outline-hidden ${
                      errors.date
                        ? 'border-red-500 bg-red-50/40 focus:border-red-500'
                        : 'border-[#D0E0DA] bg-[#FAFAF7] focus:border-[#174C4F] focus:bg-white'
                    }`}
                  />
                  {errors.date && (
                    <p id="date-error" className="text-xs text-red-600 mt-1.5 flex items-center gap-1">
                      <AlertCircle className="w-3.5 h-3.5" />
                      <span>{errors.date}</span>
                    </p>
                  )}
                </div>

                {/* Preferred Contact Method */}
                <div>
                  <label htmlFor="contactMethod" className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-2">
                    Preferred Contact Method
                  </label>
                  <select
                    id="contactMethod"
                    name="contactMethod"
                    value={formData.contactMethod}
                    onChange={(e) => setFormData({ ...formData, contactMethod: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl border border-[#D0E0DA] bg-[#FAFAF7] text-sm text-slate-900 focus:border-[#174C4F] focus:bg-white transition-colors focus:outline-hidden cursor-pointer"
                  >
                    <option value="Email">Email</option>
                    <option value="Phone Call">Phone Call</option>
                    <option value="Text / SMS">Text / SMS</option>
                  </select>
                </div>
              </div>

              {/* Additional Message */}
              <div>
                <label htmlFor="message" className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-2">
                  Additional Message <span className="text-slate-400 font-normal lowercase">(optional)</span>
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={3}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder="Share any specific scheduling preferences or general care focus..."
                  className="w-full px-4 py-3 rounded-xl border border-[#D0E0DA] bg-[#FAFAF7] text-sm text-slate-900 placeholder:text-slate-400 focus:border-[#174C4F] focus:bg-white transition-colors focus:outline-hidden"
                />
              </div>

              {/* Submit Button */}
              <div>
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full inline-flex items-center justify-center gap-2 px-8 py-4 text-base font-semibold text-white bg-[#174C4F] hover:bg-[#1F5F63] active:bg-[#0E3437] rounded-xl transition-all shadow-md focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#174C4F] disabled:opacity-70 cursor-pointer"
                >
                  {isSubmitting ? (
                    <>
                      <RefreshCw className="w-5 h-5 animate-spin" />
                      <span>Processing Request...</span>
                    </>
                  ) : (
                    <>
                      <Calendar className="w-5 h-5 text-[#82B5A0]" />
                      <span>Request an Appointment</span>
                    </>
                  )}
                </button>
              </div>

              {/* Privacy Reassurance and Front-end Demonstration Notice */}
              <div className="pt-4 border-t border-[#E8EEEB] space-y-2">
                <div className="flex items-center gap-2 text-xs text-slate-600 justify-center">
                  <Lock className="w-3.5 h-3.5 text-[#174C4F]" aria-hidden="true" />
                  <span>Privacy Reassurance: Your contact details are kept strictly confidential.</span>
                </div>
                <p className="text-[11px] text-slate-600 text-center leading-normal">
                  Front-End Demonstration: This is a design preview. No appointment has been confirmed and no
                  sensitive medical data is transmitted or retained.
                </p>
              </div>
            </form>
          ) : (
            /* Clear, honest success demonstration state */
            <div className="text-center py-6 animate-fadeIn">
              <div className="w-16 h-16 rounded-full bg-[#E8F4F0] text-[#174C4F] flex items-center justify-center mx-auto mb-4">
                <CheckCircle2 className="w-8 h-8 text-[#174C4F]" />
              </div>
              <h3 className="text-2xl font-bold text-[#174C4F] mb-2">
                Appointment Request Received
              </h3>
              <p className="text-sm text-slate-600 max-w-md mx-auto mb-6 leading-relaxed">
                Thank you, <strong className="text-slate-800">{submittedData.fullName}</strong>. In a live environment,
                our coordination team will contact you via {submittedData.contactMethod.toLowerCase()} regarding your
                request for <strong className="text-slate-800">{submittedData.service}</strong>.
              </p>

              {/* Summary Box */}
              <div className="bg-[#FAFAF7] border border-[#E2EBE7] rounded-2xl p-5 max-w-md mx-auto text-left text-xs text-slate-700 space-y-2 mb-6">
                <div className="flex justify-between py-1 border-b border-[#E8EEEB]">
                  <span className="text-slate-500">Service:</span>
                  <span className="font-semibold text-slate-800">{submittedData.service}</span>
                </div>
                <div className="flex justify-between py-1 border-b border-[#E8EEEB]">
                  <span className="text-slate-500">Requested Date:</span>
                  <span className="font-semibold text-slate-800">{submittedData.date}</span>
                </div>
                <div className="flex justify-between py-1 border-b border-[#E8EEEB]">
                  <span className="text-slate-500">Contact Method:</span>
                  <span className="font-semibold text-slate-800">{submittedData.contactMethod} ({submittedData.email})</span>
                </div>
                {submittedData.message && (
                  <div className="pt-1 text-slate-600 italic">
                    "{submittedData.message}"
                  </div>
                )}
              </div>

              <div className="space-y-3">
                <button
                  type="button"
                  onClick={handleReset}
                  className="inline-flex items-center gap-2 px-6 py-2.5 text-sm font-semibold text-[#174C4F] bg-[#E8F4F0] hover:bg-[#D4E8DF] rounded-xl transition-colors cursor-pointer"
                >
                  <RefreshCw className="w-4 h-4" />
                  <span>Submit Another Request</span>
                </button>

                <p className="text-[11px] text-slate-600">
                  Front-End Demonstration Only · No medical records or actual appointments were scheduled.
                </p>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};
