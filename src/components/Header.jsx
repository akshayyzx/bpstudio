import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import logo1 from '../assets/logo.jpg';

export default function WeddingHeader() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  
  // Remove the useEffect for body padding since we're removing the fixed position
  
  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        isMenuOpen &&
        !event.target.closest('.mobile-menu') &&
        !event.target.closest('.hamburger-button')
      ) {
        setIsMenuOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [isMenuOpen]);

  useEffect(() => {
    document.body.style.overflow = isMenuOpen ? 'hidden' : 'auto';
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [isMenuOpen]);

  return (
    <header className={`w-full py-4 px-6 z-30 transition-all duration-300 ${isScrolled ? ' shadow-sm py-2' : 'bg-transparent py-4'}`}>
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Hamburger Menu Button */}
        <div className="md:hidden">
          <button
            className="hamburger-button focus:outline-none"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            <div className={`w-6 h-0.5 mb-1.5 bg-stone-800 transition-all ${isMenuOpen ? 'transform rotate-45 translate-y-2' : ''}`} />
            <div className={`w-6 h-0.5 bg-stone-800 mb-1.5 transition-all ${isMenuOpen ? 'opacity-0' : ''}`} />
            <div className={`w-6 h-0.5 bg-stone-800 transition-all ${isMenuOpen ? 'transform -rotate-45 -translate-y-2' : ''}`} />
          </button>
        </div>

        {/* Logo (Centered for all screens) */}
        <div
          className={`absolute left-1/2 transform -translate-x-1/2 md:static md:translate-x-0 md:left-auto transition-all duration-300 ${
            isMenuOpen ? 'opacity-0' : 'opacity-100'
          }`}
        >
       <img src={logo1} alt="Logo" className="w-32 md:w-24 h-auto object-contain scale-120 mt-15 md:scale-160 md:mt-1 mb-1"/>
        </div>  
        {/* Desktop Nav */}
        <div className="hidden md:flex space-x-10 text-xl">
          <Link to="/" className="text-stone-800 hover:border-b-2 border-red-500 transition">Home</Link>
          <Link to="/pre-wedding" className="text-stone-800 hover:border-b-2 border-red-500 transition">Pre-Wedding</Link>
          <Link to="/wedding" className="text-stone-800 hover:border-b-2 border-red-500 transition">Wedding</Link>
          <button onClick={() => scrollToSection('awards')} className="text-stone-800 hover:border-b-2 border-red-500 transition">Awards</button>
        </div>

        {/* Book Now Button */}
        <div className="hidden md:block">
          <button
            onClick={() => scrollToSection('1')}
            className="bg-red-500 text-white px-5 py-2 rounded-full hover:bg-red-600 transition"
          >
            Book Now
          </button>
        </div>

        <div className="w-6 md:hidden"></div>
      </div>

      {/* Mobile Overlay */}
      <div
    className={`fixed inset-0 backdrop-blur-md z-40 transition-opacity duration-300 md:hidden ${
  isMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
}`}
      >
        <div
          className={`mobile-menu fixed right-0 top-0 h-full w-64 bg-white shadow-lg transform transition-transform duration-300 ease-in-out ${
            isMenuOpen ? 'translate-x-0' : 'translate-x-full'
          }`}
        >
          <div className="p-6">
            <div className="flex justify-end mb-8">
              <button
                onClick={() => setIsMenuOpen(false)}
                className="text-stone-800 hover:text-red-500 transition"
                aria-label="Close menu"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>

            <div className="flex flex-col space-y-4">
              <Link to="/" className="text-stone-800 hover:border-b-2 border-red-500 transition py-2 border-b" onClick={() => setIsMenuOpen(false)}>Home</Link>
              <Link to="/pre-wedding" className="text-stone-800 hover:border-b-2 border-red-500 transition py-2 border-b" onClick={() => setIsMenuOpen(false)}>Pre-Wedding</Link>
              <Link to="/wedding" className="text-stone-800 hover:border-b-2 border-red-500 transition py-2 border-b" onClick={() => setIsMenuOpen(false)}>Wedding</Link>
              <button onClick={() => scrollToSection('awards')} className="text-stone-800 hover:border-b-2 border-red-500 transition py-2 border-b">Awards</button>
            </div>

            <div className="mt-8">
              <button
                onClick={() => scrollToSection('contact')}
                className="bg-red-500 text-white w-full px-5 py-2 rounded-full hover:bg-red-600 transition"
              >
                Book Now
              </button>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}