import React, { useState } from 'react';
import { CheckCircle2, MessageCircle, Heart, Shield } from 'lucide-react';

interface AboutUsProps {
  onContactClick: () => void;
}

export const AboutUs: React.FC<AboutUsProps> = ({ onContactClick }) => {
  const [imageError, setImageError] = useState(false);
  const aboutImage = '/src/assets/images/clinic_interior_calm_1792950572270.jpg';

  const keyPoints = [
    {
      title: 'Care that considers the individual.',
      desc: 'We take the time to learn your lifestyle, daily demands, and health concerns so recommendations fit your reality.',
    },
    {
      title: 'Clear communication and practical guidance.',
      desc: 'Complex medical topics translated into transparent, actionable steps without intimidating jargon.',
    },
    {
      title: 'A focus on prevention, wellness, and continuity of care.',
      desc: 'Prioritizing proactive strategies and sustained guidance rather than just one-off symptomatic visits.',
    },
  ];

  return (
    <section id="about" className="bg-white py-20 lg:py-28 relative border-t border-[#E8EEEB]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Healthcare-related Visual Column */}
          <div className="lg:col-span-6 order-2 lg:order-1 relative">
            <div className="relative mx-auto max-w-lg lg:max-w-none">
              <div
                className="absolute -inset-4 bg-[#E8F4F0] rounded-3xl -rotate-1 -z-10"
                aria-hidden="true"
              />
              <div className="rounded-2xl overflow-hidden border border-[#D8E8E1] shadow-md bg-[#FAFAF7] aspect-[4/3] sm:aspect-[4/3]">
                {!imageError ? (
                  <img
                    src={aboutImage}
                    alt="Calm, welcoming consultation space with a care provider listening attentively to a patient"
                    referrerPolicy="no-referrer"
                    onError={() => setImageError(true)}
                    className="w-full h-full object-cover transition-transform duration-700 hover:scale-[1.02]"
                  />
                ) : (
                  <div className="w-full h-full bg-[#E8F4F0] flex flex-col items-center justify-center p-8 text-center">
                    <Heart className="w-12 h-12 text-[#174C4F] mb-3" />
                    <h3 className="text-xl font-bold text-[#174C4F]">Care Built Around You</h3>
                    <p className="text-sm text-slate-600 max-w-sm mt-1">
                      Compassionate consultations in a serene and supportive setting.
                    </p>
                  </div>
                )}
              </div>

              {/* Minimalist Floating Card */}
              <div className="absolute -bottom-5 right-4 sm:-bottom-6 sm:right-6 bg-white border border-[#E2EBE7] rounded-xl p-4 shadow-md max-w-xs hidden sm:block">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-lg bg-[#E8F4F0] text-[#174C4F] flex items-center justify-center shrink-0">
                    <Shield className="w-4 h-4 text-[#174C4F]" />
                  </div>
                  <div>
                    <p className="text-xs font-bold text-[#174C4F]">Unhurried Appointments</p>
                    <p className="text-[11px] text-slate-500">Dedicated listening time with every visit</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Content Column */}
          <div className="lg:col-span-6 order-1 lg:order-2">
            <div className="flex items-center gap-2 mb-3">
              <span className="w-5 h-[1.5px] bg-[#82B5A0]" aria-hidden="true" />
              <span className="text-xs font-semibold tracking-wider text-[#174C4F] uppercase">
                ABOUT CAREWELL HEALTH
              </span>
            </div>

            <h2 className="text-3xl sm:text-4xl font-bold text-[#174C4F] tracking-tight mb-6">
              Healthcare Should Feel Personal.
            </h2>

            <p className="text-base sm:text-lg text-slate-700 leading-relaxed mb-8">
              At CareWell Health, we believe better healthcare starts with listening. Our approach focuses on
              understanding individual needs, providing clear guidance, and helping people navigate their health
              journey with confidence.
            </p>

            {/* Three Supporting Points */}
            <div className="space-y-4 mb-8">
              {keyPoints.map((point) => (
                <div key={point.title} className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-[#174C4F] mt-0.5 shrink-0" aria-hidden="true" />
                  <div>
                    <h3 className="text-sm sm:text-base font-bold text-[#174C4F]">
                      {point.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-600 mt-0.5 leading-relaxed">
                      {point.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* Get in Touch CTA Button */}
            <div>
              <button
                type="button"
                onClick={onContactClick}
                className="inline-flex items-center gap-2 px-6 py-3 text-sm font-semibold text-white bg-[#174C4F] hover:bg-[#1F5F63] active:bg-[#0E3437] rounded-xl transition-all shadow-xs hover:shadow-md focus-visible:outline-2 focus-visible:outline-[#174C4F] cursor-pointer"
              >
                <MessageCircle className="w-4 h-4 text-[#82B5A0]" aria-hidden="true" />
                <span>Get in Touch</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
