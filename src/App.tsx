/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { TrustBenefits } from './components/TrustBenefits';
import { Services } from './components/Services';
import { AboutUs } from './components/AboutUs';
import { HowItWorks } from './components/HowItWorks';
import { Testimonials } from './components/Testimonials';
import { BookingSection } from './components/BookingSection';
import { FAQ } from './components/FAQ';
import { FinalCTA } from './components/FinalCTA';
import { Footer } from './components/Footer';

export default function App() {
  const [preselectedService, setPreselectedService] = useState<string>('Primary Care');

  const scrollToBooking = (service?: string) => {
    if (service) {
      setPreselectedService(service);
    }
    const bookingElement = document.getElementById('booking');
    if (bookingElement) {
      bookingElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToServices = () => {
    const servicesElement = document.getElementById('services');
    if (servicesElement) {
      servicesElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleNavClick = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#FAFAF7] text-[#192C2E] antialiased selection:bg-[#D1E8DF] selection:text-[#0E3437]">
      {/* 1. Header and Navigation */}
      <Header onBookClick={() => scrollToBooking()} />

      <main className="flex-1">
        {/* 2. Hero Section */}
        <Hero
          onBookClick={() => scrollToBooking()}
          onExploreServicesClick={scrollToServices}
        />

        {/* 3. Trust and Benefits Section */}
        <TrustBenefits />

        {/* 4. Healthcare Services Section */}
        <Services onSelectServiceForBooking={(service) => scrollToBooking(service)} />

        {/* 5. About Us Section */}
        <AboutUs onContactClick={() => scrollToBooking()} />

        {/* 6. How It Works Section */}
        <HowItWorks onBookClick={() => scrollToBooking()} />

        {/* 7. Patient Experience / Testimonials */}
        <Testimonials />

        {/* 8. Appointment Booking Section */}
        <BookingSection
          preselectedService={preselectedService}
          onClearPreselectedService={() => {}}
        />

        {/* 9. Frequently Asked Questions */}
        <FAQ />

        {/* 10. Final Call-to-Action */}
        <FinalCTA onBookClick={() => scrollToBooking()} />
      </main>

      {/* 11. Footer */}
      <Footer onNavClick={handleNavClick} />
    </div>
  );
}
