import React, { useState } from 'react';
import { Mail, Phone, MapPin, X, Shield, ArrowUp } from 'lucide-react';

interface FooterProps {
  onNavClick: (href: string) => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavClick }) => {
  const [activeLegalModal, setActiveLegalModal] = useState<'privacy' | 'terms' | null>(null);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer id="contact" className="bg-[#0E3437] text-white pt-16 pb-12 border-t border-[#174C4F] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8 pb-12 border-b border-white/10">
          {/* Brand Info */}
          <div className="lg:col-span-4">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-9 h-9 rounded-lg bg-[#E8F4F0] text-[#174C4F] flex items-center justify-center">
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="w-5 h-5 text-[#174C4F]"
                  aria-hidden="true"
                >
                  <path d="M12 4v16" />
                  <path d="M4 12h16" />
                  <circle cx="12" cy="12" r="9" strokeWidth="1.8" className="text-[#82B5A0]" />
                </svg>
              </div>
              <span className="text-xl font-bold tracking-tight text-white">
                CareWell <span className="font-semibold text-[#82B5A0]">Health</span>
              </span>
            </div>

            <p className="text-sm text-[#E8F4F0]/80 leading-relaxed mb-6 max-w-sm">
              Thoughtful, patient-centered healthcare designed to empower informed decisions, proactive wellness, and
              compassionate lifelong care.
            </p>

            <div className="text-xs text-[#82B5A0] bg-[#174C4F]/60 border border-[#82B5A0]/20 rounded-xl p-3 max-w-sm">
              <p className="font-semibold">Patient Note</p>
              <p className="text-[#E8F4F0]/75 mt-0.5">
                For immediate life-threatening medical emergencies, please dial 911 or visit your nearest emergency room.
              </p>
            </div>
          </div>

          {/* Quick Navigation Links */}
          <div className="lg:col-span-2">
            <p className="text-xs font-bold uppercase tracking-wider text-[#82B5A0] mb-4">
              Explore
            </p>
            <ul className="space-y-2.5 text-sm text-[#E8F4F0]/80">
              <li>
                <button
                  type="button"
                  onClick={() => onNavClick('#hero')}
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  Home
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => onNavClick('#services')}
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  Our Services
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => onNavClick('#about')}
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  About Us
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => onNavClick('#how-it-works')}
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  How It Works
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => onNavClick('#faq')}
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  FAQ
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => onNavClick('#booking')}
                  className="text-[#82B5A0] font-semibold hover:text-white transition-colors cursor-pointer"
                >
                  Book Appointment
                </button>
              </li>
            </ul>
          </div>

          {/* Contact Details (Clearly Marked as Placeholders) */}
          <div className="lg:col-span-3">
            <p className="text-xs font-bold uppercase tracking-wider text-[#82B5A0] mb-4">
              Contact Information
            </p>
            <ul className="space-y-3 text-sm text-[#E8F4F0]/80">
              <li className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-[#82B5A0] shrink-0 mt-0.5" aria-hidden="true" />
                <div>
                  <span>100 Health Sciences Way, Suite 400</span>
                  <span className="block text-xs text-[#82B5A0] mt-0.5">(Sample Address Placeholder)</span>
                </div>
              </li>
              <li className="flex items-start gap-2.5">
                <Phone className="w-4 h-4 text-[#82B5A0] shrink-0 mt-0.5" aria-hidden="true" />
                <div>
                  <a href="tel:5550192834" className="hover:text-white transition-colors">
                    (555) 019-2834
                  </a>
                  <span className="block text-xs text-[#82B5A0] mt-0.5">(Sample Phone Placeholder)</span>
                </div>
              </li>
              <li className="flex items-start gap-2.5">
                <Mail className="w-4 h-4 text-[#82B5A0] shrink-0 mt-0.5" aria-hidden="true" />
                <div>
                  <a href="mailto:contact@carewellhealth.example" className="hover:text-white transition-colors">
                    contact@carewellhealth.example
                  </a>
                  <span className="block text-xs text-[#82B5A0] mt-0.5">(Sample Email Placeholder)</span>
                </div>
              </li>
            </ul>
          </div>

          {/* Social Media Link Placeholders */}
          <div className="lg:col-span-3">
            <p className="text-xs font-bold uppercase tracking-wider text-[#82B5A0] mb-4">
              Connect
            </p>
            <p className="text-xs text-[#E8F4F0]/70 mb-3">
              Follow our community health guidance updates:
            </p>
            <div className="flex items-center gap-3 mb-4">
              <a
                href="#contact"
                onClick={(e) => {
                  e.preventDefault();
                  alert('Social links will be connected upon production launch.');
                }}
                className="w-9 h-9 rounded-lg bg-[#174C4F] hover:bg-[#1F5F63] text-white flex items-center justify-center transition-colors focus-visible:outline-2 focus-visible:outline-[#82B5A0]"
                aria-label="CareWell Health on LinkedIn (Demo Link)"
              >
                <span className="text-xs font-bold">in</span>
              </a>
              <a
                href="#contact"
                onClick={(e) => {
                  e.preventDefault();
                  alert('Social links will be connected upon production launch.');
                }}
                className="w-9 h-9 rounded-lg bg-[#174C4F] hover:bg-[#1F5F63] text-white flex items-center justify-center transition-colors focus-visible:outline-2 focus-visible:outline-[#82B5A0]"
                aria-label="CareWell Health on Twitter / X (Demo Link)"
              >
                <span className="text-xs font-bold">X</span>
              </a>
              <a
                href="#contact"
                onClick={(e) => {
                  e.preventDefault();
                  alert('Social links will be connected upon production launch.');
                }}
                className="w-9 h-9 rounded-lg bg-[#174C4F] hover:bg-[#1F5F63] text-white flex items-center justify-center transition-colors focus-visible:outline-2 focus-visible:outline-[#82B5A0]"
                aria-label="CareWell Health on Instagram (Demo Link)"
              >
                <span className="text-xs font-bold">ig</span>
              </a>
            </div>
            <p className="text-[11px] text-[#82B5A0]/80">
              Note: Social profiles and direct channels are demo placeholders.
            </p>
          </div>
        </div>

        {/* Bottom Bar: Legal and Copyright */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#E8F4F0]/70">
          <div className="flex flex-wrap items-center gap-4">
            <span>&copy; {new Date().getFullYear()} CareWell Health. All rights reserved.</span>
            <span className="hidden sm:inline text-white/30">|</span>
            <button
              type="button"
              onClick={() => setActiveLegalModal('privacy')}
              className="hover:text-white underline cursor-pointer"
            >
              Privacy Policy
            </button>
            <span className="text-white/30">·</span>
            <button
              type="button"
              onClick={() => setActiveLegalModal('terms')}
              className="hover:text-white underline cursor-pointer"
            >
              Terms of Use
            </button>
          </div>

          <button
            type="button"
            onClick={scrollToTop}
            className="inline-flex items-center gap-1.5 text-xs text-[#82B5A0] hover:text-white transition-colors cursor-pointer"
            aria-label="Scroll back to top of page"
          >
            <span>Back to top</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>

      {/* Legal Information Modal (Privacy Policy & Terms) */}
      {activeLegalModal && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-xs text-slate-800 animate-fadeIn"
          role="dialog"
          aria-modal="true"
        >
          <div className="bg-white rounded-2xl max-w-xl w-full p-6 sm:p-8 border border-slate-200 shadow-xl relative max-h-[85vh] overflow-y-auto">
            <button
              type="button"
              onClick={() => setActiveLegalModal(null)}
              className="absolute top-5 right-5 p-2 rounded-lg text-slate-400 hover:text-slate-700 hover:bg-slate-100 transition-colors"
              aria-label="Close dialog"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="w-10 h-10 rounded-xl bg-[#E8F4F0] text-[#174C4F] flex items-center justify-center mb-4">
              <Shield className="w-5 h-5" />
            </div>

            {activeLegalModal === 'privacy' ? (
              <div>
                <h3 className="text-xl font-bold text-[#174C4F] mb-3">Privacy Policy Overview</h3>
                <div className="text-xs text-slate-600 space-y-3 leading-relaxed">
                  <p>
                    CareWell Health is dedicated to safeguarding patient confidentiality and maintaining strict standards of
                    privacy governance.
                  </p>
                  <p className="font-semibold text-slate-800">1. Information Collection</p>
                  <p>
                    Contact details provided via our appointment request forms are used exclusively to coordinate scheduling
                    and care inquiries. We do not sell or monetize personal contact data.
                  </p>
                  <p className="font-semibold text-slate-800">2. Demonstration Scope</p>
                  <p>
                    This website is presented as a front-end demonstration. No actual protected health information (PHI) is
                    stored in a database or transmitted to medical providers through this preview.
                  </p>
                  <p className="font-semibold text-slate-800">3. Communication Safeguards</p>
                  <p>
                    In production operations, all digital healthcare communications comply with standard data encryption and
                    applicable health privacy guidelines.
                  </p>
                </div>
              </div>
            ) : (
              <div>
                <h3 className="text-xl font-bold text-[#174C4F] mb-3">Terms of Use</h3>
                <div className="text-xs text-slate-600 space-y-3 leading-relaxed">
                  <p>
                    By viewing or interacting with this website, you acknowledge the following informational terms:
                  </p>
                  <p className="font-semibold text-slate-800">1. Informational Purpose</p>
                  <p>
                    The content on this website is provided for general health literacy and informational coordination only.
                    It does not replace professional medical diagnosis, clinical evaluation, or emergency treatment.
                  </p>
                  <p className="font-semibold text-slate-800">2. Medical Emergencies</p>
                  <p>
                    Never delay seeking medical advice or disregard professional clinical evaluation because of information
                    viewed on this site. For urgent symptoms, immediately contact local emergency services.
                  </p>
                  <p className="font-semibold text-slate-800">3. Demonstration Disclaimer</p>
                  <p>
                    Appointment requests submitted through this website do not constitute a confirmed appointment or
                    establish a formal doctor-patient relationship until confirmed by an authorized healthcare representative.
                  </p>
                </div>
              </div>
            )}

            <div className="mt-6 pt-4 border-t border-slate-100 text-right">
              <button
                type="button"
                onClick={() => setActiveLegalModal(null)}
                className="px-5 py-2 text-xs font-semibold text-white bg-[#174C4F] hover:bg-[#1F5F63] rounded-xl transition-colors cursor-pointer"
              >
                Understood
              </button>
            </div>
          </div>
        </div>
      )}
    </footer>
  );
};
