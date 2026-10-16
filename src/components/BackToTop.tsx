import React, { useState, useEffect } from 'react';
import { ChevronUp } from 'lucide-react';

export const BackToTop: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      setIsVisible(window.scrollY > 400);
    };

    window.addEventListener('scroll', toggleVisibility, { passive: true });
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  if (!isVisible) return null;

  return (
    <button
      type="button"
      onClick={scrollToTop}
      className="fixed bottom-6 right-6 z-40 p-3 rounded-lg bg-[#FFFFFF] border border-[#D9E0D7] hover:border-[#426B50] text-[#292D29] hover:text-[#426B50] transition-all duration-200 soft-card-shadow focus:outline-none focus:ring-2 focus:ring-[#426B50]"
      aria-label="Back to top"
    >
      <ChevronUp className="w-5 h-5" />
    </button>
  );
};
