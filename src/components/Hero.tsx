import React, { useState } from 'react';
import { Calendar, ArrowRight, ShieldCheck } from 'lucide-react';

interface HeroProps {
  onBookClick: () => void;
  onExploreServicesClick: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onBookClick, onExploreServicesClick }) => {
  const [imageError, setImageError] = useState(false);

  // Exact provided Cloudinary hero image URL
  const heroImageUrl =
    'https://res.cloudinary.com/l2aq5ral/image/upload/v1792950309/www.beatsnoop.com-3000-BiGSsMZjex.jpg';

  return (
    <section id="hero" className="relative bg-[#FAFAF7] overflow-hidden pt-8 pb-16 lg:pt-14 lg:pb-24">
      {/* Subtle organic background tint element */}
      <div
        className="absolute top-0 right-0 -mr-24 -mt-24 w-96 h-96 rounded-full bg-[#E8F4F0]/60 blur-3xl pointer-events-none"
        aria-hidden="true"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          {/* Left Column: Editorial Value Proposition */}
          <div className="lg:col-span-7 flex flex-col justify-center">
            {/* Introductory Label: Clean unboxed typographic kicker */}
            <div className="flex items-center gap-2 mb-4">
              <span className="w-6 h-[1.5px] bg-[#82B5A0]" aria-hidden="true" />
              <span className="text-xs font-semibold tracking-wider text-[#174C4F] uppercase">
                YOUR HEALTH, OUR PRIORITY
              </span>
            </div>

            {/* Main Headline */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[3.25rem] font-bold text-[#174C4F] leading-[1.15] tracking-tight mb-6 text-balance">
              Compassionate Care. <br className="hidden sm:inline" />
              Better Health. <br className="hidden sm:inline" />
              <span className="text-[#20696D]">A Healthier You.</span>
            </h1>

            {/* Supporting Paragraph */}
            <p className="text-base sm:text-lg text-slate-700 leading-relaxed max-w-2xl mb-8">
              Your health journey deserves personal attention. Discover thoughtful healthcare, trusted guidance, and
              convenient access to care designed around your needs.
            </p>

            {/* Primary & Secondary CTAs */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 mb-8">
              <button
                type="button"
                onClick={onBookClick}
                className="inline-flex items-center justify-center gap-2 px-7 py-3.5 text-base font-semibold text-white bg-[#174C4F] hover:bg-[#1F5F63] active:bg-[#0E3437] rounded-xl transition-all shadow-sm hover:shadow-md focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#174C4F] cursor-pointer"
              >
                <Calendar className="w-5 h-5 text-[#82B5A0]" aria-hidden="true" />
                <span>Book an Appointment</span>
              </button>

              <button
                type="button"
                onClick={onExploreServicesClick}
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 text-base font-semibold text-[#174C4F] bg-[#E8F4F0] hover:bg-[#D5EAE2] active:bg-[#C4E0D6] border border-[#D0E5DD] rounded-xl transition-all focus-visible:outline-2 focus-visible:outline-[#174C4F] cursor-pointer"
              >
                <span>Explore Our Services</span>
                <ArrowRight className="w-4 h-4 text-[#174C4F] transition-transform group-hover:translate-x-0.5" aria-hidden="true" />
              </button>
            </div>

            {/* Trust-oriented line underneath */}
            <div className="flex items-center gap-2 text-xs sm:text-sm font-medium text-slate-600 border-t border-[#E8EEEB] pt-4">
              <span>Personalized Care</span>
              <span className="text-[#82B5A0]" aria-hidden="true">•</span>
              <span>Professional Guidance</span>
              <span className="text-[#82B5A0]" aria-hidden="true">•</span>
              <span>Patient First</span>
            </div>
          </div>

          {/* Right Column: Hero Visual Container preserving the specified image */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              {/* Subtle decorative background frame */}
              <div
                className="absolute inset-0 bg-[#E8F4F0] rounded-3xl -rotate-2 transform scale-102 -z-10"
                aria-hidden="true"
              />

              {/* Image Frame */}
              <div className="relative rounded-2xl overflow-hidden border border-[#D5E6E0] shadow-md bg-white aspect-[4/5] sm:aspect-[4/5] lg:aspect-[4/5]">
                {!imageError ? (
                  <img
                    src={heroImageUrl}
                    alt="Healthcare professional ready to assist patient with compassionate, personalized guidance"
                    referrerPolicy="no-referrer"
                    onError={() => setImageError(true)}
                    className="w-full h-full object-cover object-[center_18%] transition-transform duration-700 hover:scale-[1.02]"
                  />
                ) : (
                  /* Zero-broken-image graceful fallback */
                  <div className="w-full h-full bg-[#E8F4F0] flex flex-col items-center justify-center p-8 text-center">
                    <div className="w-16 h-16 rounded-full bg-[#174C4F] text-[#E8F4F0] flex items-center justify-center mb-4">
                      <ShieldCheck className="w-8 h-8" />
                    </div>
                    <h2 className="text-xl font-bold text-[#174C4F] mb-2">CareWell Health</h2>
                    <p className="text-sm text-slate-600">
                      Personalized and compassionate healthcare consultations tailored to your life.
                    </p>
                  </div>
                )}

                {/* Subtle soft gradient overlay at bottom edge for contrast refinement */}
                <div
                  className="absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-black/15 to-transparent pointer-events-none"
                  aria-hidden="true"
                />
              </div>

              {/* Subtle floating reassurance badge */}
              <div className="absolute -bottom-4 -left-4 sm:bottom-4 sm:-left-6 bg-white/95 backdrop-blur-xs border border-[#E2EBE7] rounded-xl px-4 py-3 shadow-md hidden sm:flex items-center gap-3">
                <div className="w-8 h-8 rounded-lg bg-[#E8F4F0] text-[#174C4F] flex items-center justify-center">
                  <ShieldCheck className="w-4 h-4 text-[#174C4F]" aria-hidden="true" />
                </div>
                <div>
                  <p className="text-xs font-bold text-[#174C4F]">Attentive & Patient-Focused</p>
                  <p className="text-[11px] text-slate-500">Every consultation is unhurried</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
