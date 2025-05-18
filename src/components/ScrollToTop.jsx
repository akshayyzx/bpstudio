import React, { useEffect, useState } from 'react';
import { FaHome } from 'react-icons/fa';

export default function ScrollToTopButton() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY > 300);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleScrollTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <button
      onClick={handleScrollTop}
      className={`
        fixed bottom-6 right-6 z-50 bg-black text-white rounded-full w-12 h-12 
        flex items-center justify-center shadow-lg transition-all duration-500 
        hover:bg-white hover:text-black
        ${isVisible ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}
      `}
      title="Go to top"
      aria-label="Scroll to top"
    >
      <FaHome className="text-xl" />
    </button>
  );
}
