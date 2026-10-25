import React, { useState } from 'react';
import { ChevronDown, HelpCircle } from 'lucide-react';

interface FAQItem {
  id: string;
  question: string;
  answer: string;
}

export const FAQ: React.FC = () => {
  const [openId, setOpenId] = useState<string | null>('faq-1');

  const faqs: FAQItem[] = [
    {
      id: 'faq-1',
      question: 'How do I book an appointment?',
      answer:
        'You can submit an appointment request directly through the online form on this page by selecting your preferred service, date, and contact method. Our coordination team reviews requests and reaches out to confirm an agreeable time slot.',
    },
    {
      id: 'faq-2',
      question: 'What healthcare services are available?',
      answer:
        'CareWell Health offers routine primary care consultations, virtual telehealth appointments, preventive wellness screenings, and individualized wellness planning designed around your daily lifestyle and personal health goals.',
    },
    {
      id: 'faq-3',
      question: 'Are virtual consultations available?',
      answer:
        'Yes, virtual consultations are offered for routine follow-ups, general health questions, and wellness guidance where clinically appropriate and permissible under local healthcare regulations.',
    },
    {
      id: 'faq-4',
      question: 'How can I contact the care team?',
      answer:
        'You can reach our team by completing the contact and appointment request form, or by reaching out to our demonstration contact channels. For urgent medical emergencies, please always contact your local emergency services immediately.',
    },
    {
      id: 'faq-5',
      question: 'What should I prepare before my appointment?',
      answer:
        'Having a brief list of your current medications, any relevant recent health notes, and a few specific questions or topics you would like to discuss will help make your consultation focused and productive.',
    },
  ];

  const toggleFAQ = (id: string) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <section id="faq" className="bg-[#FAFAF7] py-20 lg:py-28 border-t border-[#E8EEEB]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <div className="text-center mb-14">
          <div className="flex items-center justify-center gap-2 mb-3">
            <span className="w-5 h-[1.5px] bg-[#82B5A0]" aria-hidden="true" />
            <span className="text-xs font-semibold tracking-wider text-[#174C4F] uppercase">
              HELP & CLARITY
            </span>
            <span className="w-5 h-[1.5px] bg-[#82B5A0]" aria-hidden="true" />
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-[#174C4F] tracking-tight mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
            Clear information to help you understand what to expect and how to access our care services.
          </p>
        </div>

        {/* Accordion Container */}
        <div className="space-y-4">
          {faqs.map((faq) => {
            const isOpen = openId === faq.id;
            return (
              <div
                key={faq.id}
                className="bg-white rounded-2xl border border-[#E2EBE7] overflow-hidden transition-all duration-200 shadow-xs"
              >
                <button
                  type="button"
                  onClick={() => toggleFAQ(faq.id)}
                  aria-expanded={isOpen}
                  aria-controls={`answer-${faq.id}`}
                  className="w-full px-6 py-5 sm:px-8 sm:py-6 flex items-center justify-between gap-4 text-left font-bold text-base sm:text-lg text-[#174C4F] hover:text-[#20696D] transition-colors focus-visible:outline-2 focus-visible:outline-[#174C4F] cursor-pointer"
                >
                  <span className="flex items-center gap-3">
                    <HelpCircle className="w-5 h-5 text-[#82B5A0] shrink-0" aria-hidden="true" />
                    <span>{faq.question}</span>
                  </span>
                  <div
                    className={`w-8 h-8 rounded-full bg-[#E8F4F0] flex items-center justify-center shrink-0 transition-transform duration-200 ${
                      isOpen ? 'rotate-180 bg-[#174C4F] text-white' : 'text-[#174C4F]'
                    }`}
                  >
                    <ChevronDown className="w-4 h-4 stroke-[2.2]" aria-hidden="true" />
                  </div>
                </button>

                {isOpen && (
                  <div
                    id={`answer-${faq.id}`}
                    role="region"
                    aria-labelledby={faq.id}
                    className="px-6 pb-6 pt-1 sm:px-8 sm:pb-6 text-sm sm:text-base text-slate-600 leading-relaxed border-t border-[#F0F5F3]"
                  >
                    {faq.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
