import React from 'react';
import { Github, Mail, ArrowUpRight } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  const navLinks = [
    { label: 'Home', href: '#hero' },
    { label: 'About', href: '#about' },
    { label: 'Skills', href: '#skills' },
    { label: 'Projects', href: '#projects' },
    { label: 'Education', href: '#education' },
    { label: 'Contact', href: '#contact' },
  ];

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const elem = document.querySelector(href);
    if (elem) {
      elem.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-[#F7F5F0] border-t border-[#D9E0D7] relative">
      {/* Subtle forest green accent line on top */}
      <div className="h-0.5 w-full bg-gradient-to-r from-transparent via-[#426B50]/40 to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start justify-between">
          {/* Brand & Tagline */}
          <div className="md:col-span-5 space-y-3">
            <a
              href="#hero"
              onClick={(e) => handleLinkClick(e, '#hero')}
              className="inline-flex items-center gap-2 group font-mono text-xl font-bold tracking-tight text-[#292D29]"
            >
              <span>SIRI<span className="text-[#426B50]">.DEV</span></span>
              <span className="w-1.5 h-1.5 rounded-full bg-[#C98268]" />
            </a>

            <p className="text-sm text-[#6B716B] max-w-sm">
              Learning, building, and growing one project at a time.
            </p>

            <p className="text-xs font-mono text-[#6B716B]">
              B.Tech CSM · Sasi Institute of Technology and Engineering
            </p>
          </div>

          {/* Quick Links */}
          <div className="md:col-span-4 space-y-3">
            <span className="text-xs font-mono uppercase tracking-wider text-[#426B50] font-semibold block">
              Quick Navigation
            </span>
            <div className="grid grid-cols-2 gap-2 text-sm text-[#6B716B]">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={(e) => handleLinkClick(e, link.href)}
                  className="hover:text-[#426B50] transition-colors"
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>

          {/* Connect Links */}
          <div className="md:col-span-3 space-y-3">
            <span className="text-xs font-mono uppercase tracking-wider text-[#426B50] font-semibold block">
              Direct Channels
            </span>
            <div className="space-y-2 text-sm text-[#6B716B]">
              <a
                href={`mailto:${PERSONAL_INFO.email}`}
                className="flex items-center gap-2 hover:text-[#426B50] transition-colors"
              >
                <Mail className="w-4 h-4 text-[#426B50]" />
                <span className="truncate">{PERSONAL_INFO.email}</span>
              </a>

              <a
                href={PERSONAL_INFO.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 hover:text-[#426B50] transition-colors"
              >
                <Github className="w-4 h-4 text-[#426B50]" />
                <span>GitHub Profile</span>
                <ArrowUpRight className="w-3 h-3 text-[#6B716B]" />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-6 border-t border-[#D9E0D7] flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-[#6B716B]">
          <p>© {currentYear} Siri. Built with React & Tailwind CSS.</p>
          <div className="flex items-center gap-4">
            <span className="flex items-center gap-1.5 text-[#426B50] font-medium">
              <span className="w-1.5 h-1.5 rounded-full bg-[#426B50]" />
              Aspiring Software Developer
            </span>
            <span className="text-[#D9E0D7]">|</span>
            <span>Tadepalligudem, AP</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
