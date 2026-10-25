import React, { useState, useEffect, useCallback } from 'react';
import { ChevronLeft, ChevronRight, Quote, Info } from 'lucide-react';

interface SampleTestimonial {
  quote: string;
  author: string;
  serviceCategory: string;
  context: string;
}

export const Testimonials: React.FC = () => {
  const sampleTestimonials: SampleTestimonial[] = [
    {
      quote:
        'For the first time in years, I felt genuinely heard during an appointment. The guidance was practical, unhurried, and completely focused on my daily routine rather than quick generalizations.',
      author: 'Sarah M.',
      serviceCategory: 'Primary Care Consult',
      context: 'Ongoing health management',
    },
    {
      quote:
        'The virtual consultation saved me hours of commuting. The doctor was attentive, thoroughly reviewed my history, and sent clear follow-up notes immediately after our call.',
      author: 'David K.',
      serviceCategory: 'Virtual Consultation',
      context: 'Routine wellness check',
    },
    {
      quote:
        'Preventive health always felt overwhelming before CareWell. Breaking down screening milestones into clear steps made taking charge of my well-being feel manageable and empowering.',
      author: 'Elena R.',
      serviceCategory: 'Preventive Healthcare',
      context: 'Annual health planning',
    },
    {
      quote:
        'The care team helped me align my wellness goals with a realistic plan I can actually maintain. Having continuous guidance made all the difference.',
      author: 'Marcus T.',
      serviceCategory: 'Personalized Wellness',
      context: 'Lifestyle and habit coaching',
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  const handleNext = useCallback(() => {
    setCurrentIndex((prev) => (prev + 1) % sampleTestimonials.length);
  }, [sampleTestimonials.length]);

  const handlePrev = useCallback(() => {
    setCurrentIndex((prev) => (prev - 1 + sampleTestimonials.length) % sampleTestimonials.length);
  }, [sampleTestimonials.length]);

  useEffect(() => {
    if (!isAutoPlaying) return;
    const timer = setInterval(() => {
      handleNext();
    }, 6000);
    return () => clearInterval(timer);
  }, [isAutoPlaying, handleNext]);

  return (
    <section className="bg-white py-20 lg:py-28 border-t border-[#E8EEEB] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <div className="max-w-3xl mx-auto text-center mb-14">
          <div className="flex items-center justify-center gap-2 mb-3">
            <span className="w-5 h-[1.5px] bg-[#82B5A0]" aria-hidden="true" />
            <span className="text-xs font-semibold tracking-wider text-[#174C4F] uppercase">
              PATIENT EXPERIENCES
            </span>
            <span className="w-5 h-[1.5px] bg-[#82B5A0]" aria-hidden="true" />
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-[#174C4F] tracking-tight mb-4">
            Care That Starts With Listening
          </h2>
          <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
            Every patient’s health narrative is unique. Here is how thoughtful, attentive guidance helps people take
            charge of their care.
          </p>

          {/* Clear Ethical Disclaimer: Not implying fictional reviews are genuine */}
          <div className="mt-4 inline-flex items-center gap-2 text-xs text-slate-500 bg-[#FAFAF7] border border-[#E2EBE7] px-3 py-1.5 rounded-lg">
            <Info className="w-3.5 h-3.5 text-[#174C4F] shrink-0" aria-hidden="true" />
            <span>Sample Patient Reflections · Representative placeholders for future verified feedback</span>
          </div>
        </div>

        {/* Carousel Container */}
        <div
          className="max-w-4xl mx-auto"
          onMouseEnter={() => setIsAutoPlaying(false)}
          onMouseLeave={() => setIsAutoPlaying(true)}
          role="region"
          aria-label="Patient Reflections Carousel"
          aria-roledescription="carousel"
        >
          <div className="bg-[#FAFAF7] rounded-3xl border border-[#E2EBE7] p-8 sm:p-12 lg:p-14 relative shadow-xs">
            {/* Minimalist Quote Mark */}
            <Quote className="w-12 h-12 text-[#82B5A0]/40 mb-6 stroke-[1.5]" aria-hidden="true" />

            {/* Testimonial Quote */}
            <div aria-live="polite">
              <blockquote className="text-lg sm:text-xl lg:text-2xl text-slate-800 leading-relaxed font-normal mb-8 min-h-[100px] flex items-center">
                “{sampleTestimonials[currentIndex].quote}”
              </blockquote>
            </div>

            {/* Bottom Row: Attribution & Carousel Controls */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-6 pt-6 border-t border-[#E8EEEB]">
              {/* Attribution (Zero-Pill discipline: unboxed metadata with separators) */}
              <div>
                <p className="text-base font-bold text-[#174C4F]">
                  {sampleTestimonials[currentIndex].author}
                </p>
                <div className="flex items-center gap-2 text-xs sm:text-sm text-slate-500 mt-0.5">
                  <span>{sampleTestimonials[currentIndex].serviceCategory}</span>
                  <span className="text-[#82B5A0]" aria-hidden="true">·</span>
                  <span>{sampleTestimonials[currentIndex].context}</span>
                </div>
              </div>

              {/* Accessible Controls: Prev, Indicator Dots, Next */}
              <div className="flex items-center gap-3">
                <button
                  type="button"
                  onClick={handlePrev}
                  className="w-10 h-10 rounded-full border border-[#D0E0DA] bg-white text-[#174C4F] hover:bg-[#E8F4F0] flex items-center justify-center transition-colors focus-visible:outline-2 focus-visible:outline-[#174C4F] cursor-pointer"
                  aria-label="Previous testimonial"
                >
                  <ChevronLeft className="w-5 h-5" />
                </button>

                {/* Step Indicators */}
                <div className="flex items-center gap-1.5 px-2">
                  {sampleTestimonials.map((_, idx) => (
                    <button
                      key={idx}
                      type="button"
                      onClick={() => setCurrentIndex(idx)}
                      className={`h-2 rounded-full transition-all cursor-pointer ${
                        idx === currentIndex ? 'w-6 bg-[#174C4F]' : 'w-2 bg-[#D0E0DA] hover:bg-slate-400'
                      }`}
                      aria-label={`Go to slide ${idx + 1}`}
                      aria-current={idx === currentIndex ? 'true' : 'false'}
                    />
                  ))}
                </div>

                <button
                  type="button"
                  onClick={handleNext}
                  className="w-10 h-10 rounded-full border border-[#D0E0DA] bg-white text-[#174C4F] hover:bg-[#E8F4F0] flex items-center justify-center transition-colors focus-visible:outline-2 focus-visible:outline-[#174C4F] cursor-pointer"
                  aria-label="Next testimonial"
                >
                  <ChevronRight className="w-5 h-5" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
