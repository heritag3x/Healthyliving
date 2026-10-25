import React from 'react';
import { Calendar, ArrowRight, ShieldCheck } from 'lucide-react';

interface FinalCTAProps {
  onBookClick: () => void;
}

export const FinalCTA: React.FC<FinalCTAProps> = ({ onBookClick }) => {
  return (
    <section className="bg-white py-20 lg:py-28 relative border-t border-[#E8EEEB]">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-[#E8F4F0] rounded-3xl p-8 sm:p-14 lg:p-16 border border-[#D0E5DC] text-center relative overflow-hidden shadow-xs">
          {/* Subtle decorative background circles */}
          <div
            className="absolute -top-16 -right-16 w-64 h-64 rounded-full bg-white/40 blur-2xl pointer-events-none"
            aria-hidden="true"
          />
          <div
            className="absolute -bottom-16 -left-16 w-64 h-64 rounded-full bg-[#82B5A0]/20 blur-2xl pointer-events-none"
            aria-hidden="true"
          />

          <div className="relative z-10 max-w-2xl mx-auto">
            <div className="w-12 h-12 rounded-xl bg-[#174C4F] text-[#E8F4F0] flex items-center justify-center mx-auto mb-6 shadow-xs">
              <ShieldCheck className="w-6 h-6 text-[#82B5A0]" aria-hidden="true" />
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#174C4F] tracking-tight mb-5 text-balance">
              Your Well-Being Deserves Attention.
            </h2>

            <p className="text-base sm:text-lg text-slate-700 leading-relaxed mb-8">
              Take the next step toward a more informed, supported approach to your health.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <button
                type="button"
                onClick={onBookClick}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 text-base font-semibold text-white bg-[#174C4F] hover:bg-[#1F5F63] active:bg-[#0E3437] rounded-xl transition-all shadow-md focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#174C4F] cursor-pointer"
              >
                <Calendar className="w-5 h-5 text-[#82B5A0]" aria-hidden="true" />
                <span>Book an Appointment</span>
              </button>
            </div>

            <p className="text-xs text-slate-500 mt-6">
              Thoughtful care tailored to your needs · No obligation appointment request
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
