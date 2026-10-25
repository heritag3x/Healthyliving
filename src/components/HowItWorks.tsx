import React from 'react';
import { Search, CalendarCheck2, UserCheck, Calendar } from 'lucide-react';

interface HowItWorksProps {
  onBookClick: () => void;
}

export const HowItWorks: React.FC<HowItWorksProps> = ({ onBookClick }) => {
  const steps = [
    {
      step: '01',
      title: 'Choose Your Service',
      description: 'Explore the available healthcare services and find the option that best suits your needs.',
      icon: Search,
    },
    {
      step: '02',
      title: 'Book Your Appointment',
      description: 'Submit an appointment request using the booking form.',
      icon: CalendarCheck2,
    },
    {
      step: '03',
      title: 'Receive Personalized Guidance',
      description: 'Connect with the appropriate healthcare professional and discuss your needs.',
      icon: UserCheck,
    },
  ];

  return (
    <section id="how-it-works" className="bg-[#FAFAF7] py-20 lg:py-28 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <div className="max-w-3xl mx-auto text-center mb-16 lg:mb-20">
          <div className="flex items-center justify-center gap-2 mb-3">
            <span className="w-5 h-[1.5px] bg-[#82B5A0]" aria-hidden="true" />
            <span className="text-xs font-semibold tracking-wider text-[#174C4F] uppercase">
              SIMPLE & STREAMLINED
            </span>
            <span className="w-5 h-[1.5px] bg-[#82B5A0]" aria-hidden="true" />
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-[#174C4F] tracking-tight mb-4">
            Getting the Care You Need Is Simple
          </h2>
          <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
            We have designed every step of our process to be clear, transparent, and respectful of your time.
          </p>
        </div>

        {/* 3 Steps in Visually Connected Process */}
        <div className="relative mb-16">
          {/* Subtle horizontal connecting line on desktop */}
          <div
            className="hidden lg:block absolute top-14 left-[16%] right-[16%] h-[2px] bg-[#D4EAE0] -z-0"
            aria-hidden="true"
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-10 relative z-10">
            {steps.map((item) => {
              const Icon = item.icon;
              return (
                <div
                  key={item.step}
                  className="bg-white rounded-2xl border border-[#E2EBE7] p-8 text-center flex flex-col items-center shadow-xs hover:shadow-md transition-shadow relative"
                >
                  {/* Step Badge */}
                  <div className="w-12 h-12 rounded-xl bg-[#E8F4F0] text-[#174C4F] border border-[#D0E5DD] flex items-center justify-center text-sm font-bold tracking-wider mb-5">
                    {item.step}
                  </div>

                  {/* Icon Circle */}
                  <div className="w-12 h-12 rounded-full bg-[#FAFAF7] text-[#174C4F] flex items-center justify-center mb-4">
                    <Icon className="w-6 h-6 stroke-[1.8]" />
                  </div>

                  {/* Title */}
                  <h3 className="text-lg sm:text-xl font-bold text-[#174C4F] mb-3">
                    {item.title}
                  </h3>

                  {/* Description */}
                  <p className="text-sm text-slate-600 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>

        {/* Clear Book Your Appointment CTA */}
        <div className="text-center">
          <button
            type="button"
            onClick={onBookClick}
            className="inline-flex items-center justify-center gap-2 px-8 py-3.5 text-base font-semibold text-white bg-[#174C4F] hover:bg-[#1F5F63] active:bg-[#0E3437] rounded-xl transition-all shadow-xs hover:shadow-md focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#174C4F] cursor-pointer"
          >
            <Calendar className="w-5 h-5 text-[#82B5A0]" aria-hidden="true" />
            <span>Book Your Appointment</span>
          </button>
        </div>
      </div>
    </section>
  );
};
