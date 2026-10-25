import React, { useState, useEffect } from 'react';
import { Menu, X, Calendar } from 'lucide-react';

interface HeaderProps {
  onBookClick: () => void;
}

export const Header: React.FC<HeaderProps> = ({ onBookClick }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Home', href: '#hero' },
    { label: 'Our Services', href: '#services' },
    { label: 'About Us', href: '#about' },
    { label: 'How It Works', href: '#how-it-works' },
    { label: 'Contact', href: '#contact' },
  ];

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-200 ${
        isScrolled
          ? 'bg-[#FAFAF7]/95 backdrop-blur-md border-b border-[#E2EBE7] shadow-xs'
          : 'bg-[#FAFAF7] border-b border-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20 gap-8">
          {/* Brand Zone: minimal healthcare symbol paired with CareWell Health */}
          <a
            href="#hero"
            onClick={(e) => handleNavClick(e, '#hero')}
            className="flex items-center gap-3 text-slate-900 group shrink-0 focus-visible:outline-2 focus-visible:outline-[#174C4F] rounded-lg p-1"
            aria-label="CareWell Health Home"
          >
            <div className="w-9 h-9 rounded-lg bg-[#174C4F] text-[#E8F4F0] flex items-center justify-center shadow-xs transition-transform group-hover:scale-105">
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="w-5 h-5"
                aria-hidden="true"
              >
                <path d="M12 4v16" />
                <path d="M4 12h16" />
                <circle cx="12" cy="12" r="9" strokeWidth="1.8" className="text-[#82B5A0] opacity-80" />
              </svg>
            </div>
            <span className="text-xl font-bold tracking-tight text-[#174C4F] whitespace-nowrap">
              CareWell <span className="font-semibold text-[#285A5D]">Health</span>
            </span>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-700" aria-label="Main Navigation">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className="whitespace-nowrap hover:text-[#174C4F] transition-colors relative py-1 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-[#174C4F] hover:after:w-full after:transition-all after:duration-200"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Action Zone: Primary CTA */}
          <div className="hidden md:flex items-center gap-4 shrink-0">
            <button
              onClick={onBookClick}
              className="inline-flex items-center gap-2 px-5 py-2.5 text-sm font-semibold text-white bg-[#174C4F] hover:bg-[#1F5F63] active:bg-[#0E3437] rounded-xl transition-all shadow-xs hover:shadow-md focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#174C4F] whitespace-nowrap cursor-pointer"
            >
              <Calendar className="w-4 h-4 text-[#82B5A0]" aria-hidden="true" />
              <span>Book an Appointment</span>
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex md:hidden items-center">
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2.5 rounded-lg text-slate-700 hover:text-[#174C4F] hover:bg-[#E8F4F0]/60 transition-colors focus-visible:outline-2 focus-visible:outline-[#174C4F]"
              aria-expanded={mobileMenuOpen}
              aria-label={mobileMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
            >
              {mobileMenuOpen ? (
                <X className="w-6 h-6" aria-hidden="true" />
              ) : (
                <Menu className="w-6 h-6" aria-hidden="true" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden border-b border-[#E2EBE7] bg-[#FAFAF7] px-4 pt-3 pb-6 animate-fadeIn">
          <nav className="flex flex-col space-y-3" aria-label="Mobile Navigation">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className="px-3 py-2 text-base font-medium text-slate-800 hover:bg-[#E8F4F0] hover:text-[#174C4F] rounded-lg transition-colors"
              >
                {link.label}
              </a>
            ))}
            <div className="pt-2">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onBookClick();
                }}
                className="w-full flex items-center justify-center gap-2 px-4 py-3 text-sm font-semibold text-white bg-[#174C4F] hover:bg-[#1F5F63] rounded-xl transition-colors shadow-xs"
              >
                <Calendar className="w-4 h-4 text-[#82B5A0]" aria-hidden="true" />
                <span>Book an Appointment</span>
              </button>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
};
