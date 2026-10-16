import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowUpRight } from 'lucide-react';

interface NavbarProps {
  activeSection: string;
}

export const Navbar: React.FC<NavbarProps> = ({ activeSection }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Home', href: '#hero', id: 'hero' },
    { label: 'About', href: '#about', id: 'about' },
    { label: 'Skills', href: '#skills', id: 'skills' },
    { label: 'Projects', href: '#projects', id: 'projects' },
    { label: 'Education', href: '#education', id: 'education' },
    { label: 'Contact', href: '#contact', id: 'contact' },
  ];

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const targetElement = document.querySelector(href);
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header
      className={`sticky top-0 z-50 w-full transition-all duration-200 border-b ${
        isScrolled
          ? 'bg-[#F7F5F0]/90 backdrop-blur-md border-[#D9E0D7] shadow-xs'
          : 'bg-[#F7F5F0] border-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20 gap-8">
          {/* Brand */}
          <a
            href="#hero"
            onClick={(e) => handleLinkClick(e, '#hero')}
            className="flex items-center gap-2 group whitespace-nowrap shrink-0 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#426B50]"
            aria-label="Siri.dev - Back to top"
          >
            <span className="font-mono text-xl sm:text-2xl font-bold tracking-tight text-[#292D29] group-hover:text-[#426B50] transition-colors">
              SIRI<span className="text-[#426B50]">.DEV</span>
            </span>
            <span className="inline-block w-1.5 h-1.5 rounded-full bg-[#C98268]" aria-hidden="true" />
          </a>

          {/* Desktop Navigation Links */}
          <nav
            className="hidden md:flex items-center gap-7 text-sm font-medium"
            aria-label="Main Navigation"
          >
            {navLinks.map((link) => {
              const isActive = activeSection === link.id;
              return (
                <a
                  key={link.id}
                  href={link.href}
                  onClick={(e) => handleLinkClick(e, link.href)}
                  className={`relative py-1 transition-colors whitespace-nowrap shrink-0 text-sm ${
                    isActive
                      ? 'text-[#426B50] font-semibold'
                      : 'text-[#6B716B] hover:text-[#292D29]'
                  }`}
                >
                  {link.label}
                  {isActive && (
                    <span
                      className="absolute bottom-0 left-0 w-full h-0.5 bg-[#426B50]"
                      aria-hidden="true"
                    />
                  )}
                </a>
              );
            })}
          </nav>

          {/* Action button */}
          <div className="hidden md:flex items-center gap-4 shrink-0">
            <a
              href="#contact"
              onClick={(e) => handleLinkClick(e, '#contact')}
              className="inline-flex items-center gap-2 px-4 py-2 text-xs font-semibold uppercase tracking-wider text-white bg-[#426B50] rounded-md hover:bg-[#365741] transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-[#426B50] shadow-sm"
            >
              Let's Connect
              <ArrowUpRight className="w-3.5 h-3.5 text-white" />
            </a>
          </div>

          {/* Mobile hamburger button */}
          <div className="flex md:hidden items-center">
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-[#6B716B] hover:text-[#292D29] hover:bg-[#E8EDE5] rounded-md focus:outline-none focus:ring-2 focus:ring-[#426B50]"
              aria-expanded={mobileMenuOpen}
              aria-label={mobileMenuOpen ? 'Close main menu' : 'Open main menu'}
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden border-b border-[#D9E0D7] bg-[#F7F5F0]/98 backdrop-blur-lg">
          <div className="px-4 pt-3 pb-6 space-y-2">
            {navLinks.map((link) => {
              const isActive = activeSection === link.id;
              return (
                <a
                  key={link.id}
                  href={link.href}
                  onClick={(e) => handleLinkClick(e, link.href)}
                  className={`block px-3 py-2.5 rounded-md text-base font-medium transition-colors ${
                    isActive
                      ? 'bg-[#E8EDE5] text-[#426B50] font-semibold border-l-2 border-[#426B50]'
                      : 'text-[#6B716B] hover:bg-[#E8EDE5] hover:text-[#292D29]'
                  }`}
                >
                  {link.label}
                </a>
              );
            })}
            <div className="pt-3">
              <a
                href="#contact"
                onClick={(e) => handleLinkClick(e, '#contact')}
                className="flex items-center justify-center gap-2 w-full px-4 py-3 text-xs font-semibold uppercase tracking-wider text-white bg-[#426B50] rounded-md hover:bg-[#365741] transition-colors"
              >
                Let's Connect
                <ArrowUpRight className="w-4 h-4 text-white" />
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
