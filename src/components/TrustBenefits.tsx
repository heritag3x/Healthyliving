import React from 'react';
import { HeartHandshake, CalendarCheck, ClipboardList, ShieldCheck } from 'lucide-react';

export const TrustBenefits: React.FC = () => {
  const benefits = [
    {
      icon: HeartHandshake,
      title: 'Patient-Centered Approach',
      description: 'Care tailored around your unique life context, preferences, and personal well-being.',
    },
    {
      icon: CalendarCheck,
      title: 'Convenient Appointments',
      description: 'Flexible scheduling options designed to fit seamlessly into your routine.',
    },
    {
      icon: ClipboardList,
      title: 'Personalized Care Plans',
      description: 'Collaborative, step-by-step guidance focused on achievable health goals.',
    },
    {
      icon: ShieldCheck,
      title: 'Support at Every Step',
      description: 'Dedicated follow-through so you never have to navigate care decisions alone.',
    },
  ];

  return (
    <section className="bg-white border-y border-[#E8EEEB] py-12 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-0 lg:divide-x lg:divide-[#E8EEEB]">
          {benefits.map((benefit, index) => {
            const Icon = benefit.icon;
            return (
              <div
                key={benefit.title}
                className={`flex flex-col sm:flex-row lg:flex-col items-start gap-4 ${
                  index !== 0 ? 'lg:pl-8' : ''
                } ${index !== benefits.length - 1 ? 'lg:pr-8' : ''}`}
              >
                <div className="w-12 h-12 rounded-xl bg-[#E8F4F0] text-[#174C4F] flex items-center justify-center shrink-0">
                  <Icon className="w-6 h-6 stroke-[1.8]" aria-hidden="true" />
                </div>
                <div>
                  <h2 className="text-base font-bold text-[#174C4F] mb-1">
                    {benefit.title}
                  </h2>
                  <p className="text-sm text-slate-600 leading-relaxed">
                    {benefit.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
