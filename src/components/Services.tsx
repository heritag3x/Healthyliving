import React, { useState } from 'react';
import { Stethoscope, Video, ShieldAlert, Sparkles, ArrowRight, Check, X, Calendar } from 'lucide-react';

export interface ServiceItem {
  id: string;
  title: string;
  shortDesc: string;
  detailedDesc: string;
  benefits: string[];
  icon: React.ComponentType<{ className?: string }>;
}

export const servicesData: ServiceItem[] = [
  {
    id: 'primary-care',
    title: 'Primary Care',
    shortDesc: 'Routine health consultations, general health guidance, and ongoing care coordination.',
    detailedDesc:
      'Our primary care consultations serve as the foundational touchpoint for your long-term health. We review your overall well-being, manage ongoing questions, and coordinate any specialized guidance you might require.',
    benefits: [
      'Comprehensive general health reviews',
      'Continuous care coordination across health visits',
      'Unhurried consultations with dedicated time for your questions',
      'Medication reviews and lifestyle guidance',
    ],
    icon: Stethoscope,
  },
  {
    id: 'virtual-consultations',
    title: 'Virtual Consultations',
    shortDesc: 'Convenient access to healthcare professionals through online consultations, where available.',
    detailedDesc:
      'Connect safely and securely from the comfort of your home or workspace. Our virtual consultation platform makes healthcare advice accessible without unnecessary travel or waiting room delays.',
    benefits: [
      'Secure, high-definition telehealth audio/video sessions',
      'Follow-up appointments and lab review discussions',
      'Flexible scheduling options including early and late slots',
      'Clear digital summaries provided after each consultation',
    ],
    icon: Video,
  },
  {
    id: 'preventive-healthcare',
    title: 'Preventive Healthcare',
    shortDesc: 'Health screenings, wellness education, and guidance on maintaining healthier habits.',
    detailedDesc:
      'Proactive care is the cornerstone of sustainable wellness. We provide evidence-informed screening advice, periodic wellness checks, and actionable strategies to help you stay ahead of potential concerns.',
    benefits: [
      'Age-appropriate screening recommendations',
      'Vital health metric reviews (blood pressure, lifestyle factors)',
      'Actionable nutrition, sleep, and physical activity advice',
      'Proactive health risk awareness',
    ],
    icon: ShieldAlert,
  },
  {
    id: 'personalized-wellness',
    title: 'Personalized Wellness',
    shortDesc: 'Individualized guidance based on your health goals, needs, and preferences.',
    detailedDesc:
      'Wellness is not one-size-fits-all. We work alongside you to design a realistic, supportive roadmap tailored to your energy levels, daily commitments, and personal health aspirations.',
    benefits: [
      'Customized wellness roadmaps aligned with your routine',
      'Stress management and restorative habit development',
      'Periodic progress check-ins to celebrate milestones',
      'Compassionate, non-judgmental guidance at every stage',
    ],
    icon: Sparkles,
  },
];

interface ServicesProps {
  onSelectServiceForBooking: (serviceName: string) => void;
}

export const Services: React.FC<ServicesProps> = ({ onSelectServiceForBooking }) => {
  const [activeModalService, setActiveModalService] = useState<ServiceItem | null>(null);

  const handleLearnMore = (service: ServiceItem) => {
    setActiveModalService(service);
  };

  const handleBookFromModal = (serviceTitle: string) => {
    setActiveModalService(null);
    onSelectServiceForBooking(serviceTitle);
  };

  return (
    <section id="services" className="bg-[#FAFAF7] py-20 lg:py-28 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <div className="flex items-center justify-center gap-2 mb-3">
            <span className="w-5 h-[1.5px] bg-[#82B5A0]" aria-hidden="true" />
            <span className="text-xs font-semibold tracking-wider text-[#174C4F] uppercase">
              OUR SPECIALIZED SERVICES
            </span>
            <span className="w-5 h-[1.5px] bg-[#82B5A0]" aria-hidden="true" />
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-[#174C4F] tracking-tight mb-4">
            Healthcare That Puts You First
          </h2>
          <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
            Explore supportive healthcare services designed to help you make informed decisions and take better care of
            your well-being.
          </p>
        </div>

        {/* 4 Service Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-8">
          {servicesData.map((service) => {
            const Icon = service.icon;
            return (
              <div
                key={service.id}
                className="bg-white rounded-2xl border border-[#E2EBE7] p-8 sm:p-10 flex flex-col justify-between shadow-xs hover:shadow-md hover:border-[#82B5A0]/60 transition-all duration-200 group"
              >
                <div>
                  {/* Icon & Title */}
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-14 h-14 rounded-xl bg-[#E8F4F0] text-[#174C4F] group-hover:bg-[#174C4F] group-hover:text-[#E8F4F0] transition-colors duration-200 flex items-center justify-center">
                      <Icon className="w-7 h-7 stroke-[1.8]" />
                    </div>
                  </div>

                  <h3 className="text-xl sm:text-2xl font-bold text-[#174C4F] mb-3 group-hover:text-[#174C4F]">
                    {service.title}
                  </h3>

                  <p className="text-base text-slate-600 leading-relaxed mb-6">
                    {service.shortDesc}
                  </p>
                </div>

                {/* Subtle Learn More button with arrow */}
                <div className="pt-4 border-t border-[#F0F4F2] flex items-center justify-between">
                  <button
                    type="button"
                    onClick={() => handleLearnMore(service)}
                    className="inline-flex items-center gap-2 text-sm font-semibold text-[#174C4F] hover:text-[#20696D] group-hover:underline cursor-pointer focus-visible:outline-2 focus-visible:outline-[#174C4F] rounded-sm py-1"
                  >
                    <span>Learn More</span>
                    <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" aria-hidden="true" />
                  </button>

                  <button
                    type="button"
                    onClick={() => onSelectServiceForBooking(service.title)}
                    className="text-xs font-semibold text-slate-500 hover:text-[#174C4F] transition-colors"
                  >
                    Book Consultation
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Service Detail Modal */}
      {activeModalService && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/40 backdrop-blur-xs animate-fadeIn"
          role="dialog"
          aria-modal="true"
          aria-labelledby="modal-service-title"
        >
          <div className="bg-white rounded-2xl max-w-lg w-full p-6 sm:p-8 border border-[#E2EBE7] shadow-xl relative animate-scaleUp">
            <button
              type="button"
              onClick={() => setActiveModalService(null)}
              className="absolute top-5 right-5 p-2 rounded-lg text-slate-400 hover:text-slate-700 hover:bg-slate-100 transition-colors focus-visible:outline-2 focus-visible:outline-[#174C4F]"
              aria-label="Close service details"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="w-12 h-12 rounded-xl bg-[#E8F4F0] text-[#174C4F] flex items-center justify-center mb-4">
              <activeModalService.icon className="w-6 h-6 stroke-[1.8]" />
            </div>

            <h3 id="modal-service-title" className="text-2xl font-bold text-[#174C4F] mb-3">
              {activeModalService.title}
            </h3>

            <p className="text-slate-600 text-sm leading-relaxed mb-6">
              {activeModalService.detailedDesc}
            </p>

            <div className="mb-6">
              <h4 className="text-xs font-bold uppercase tracking-wider text-slate-700 mb-3">
                Key Care Focus
              </h4>
              <ul className="space-y-2.5">
                {activeModalService.benefits.map((item) => (
                  <li key={item} className="flex items-start gap-2.5 text-sm text-slate-600">
                    <div className="w-4 h-4 rounded-full bg-[#E8F4F0] text-[#174C4F] flex items-center justify-center shrink-0 mt-0.5">
                      <Check className="w-3 h-3 stroke-[2.5]" />
                    </div>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="flex flex-col sm:flex-row gap-3 pt-4 border-t border-[#E8EEEB]">
              <button
                type="button"
                onClick={() => handleBookFromModal(activeModalService.title)}
                className="flex-1 inline-flex items-center justify-center gap-2 px-5 py-2.5 text-sm font-semibold text-white bg-[#174C4F] hover:bg-[#1F5F63] rounded-xl transition-colors shadow-xs cursor-pointer"
              >
                <Calendar className="w-4 h-4 text-[#82B5A0]" />
                <span>Book This Service</span>
              </button>
              <button
                type="button"
                onClick={() => setActiveModalService(null)}
                className="px-4 py-2.5 text-sm font-medium text-slate-700 hover:bg-slate-100 rounded-xl transition-colors cursor-pointer"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
