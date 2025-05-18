import React from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';

import WeddingHeader from './Header';
import WeddingHeroSection from './Hero';
import ContactSection from './Contact';
import FooterSection from './Footer';
import WhyChooseUs from './WhyChooseUs';
import FaqSection from './FaqSection';
import PreWeddingPage from './PreWedding';
import WeddingPage from './Wedding';
import ScrollToTopButton from './ScrollToTop'; // ✅ import here
import Slideshow from './SlidShow';
import Collage from './Collage';

function LandingPageContent() {
  return (
    <>
      <WeddingHeroSection />
      <WhyChooseUs />
      <Collage/>
      <FaqSection />
      <Slideshow/>
      <ContactSection />
    </>
  );
}

export default function WeddingLandingPage() {
  const location = useLocation();

  return (
    <div className="min-h-screen flex flex-col">
      <WeddingHeader currentPath={location.pathname} />
      <main className="flex-grow">
        <Routes>
          <Route path="/" element={<LandingPageContent />} />
          <Route path="/pre-wedding" element={<PreWeddingPage />} />
          <Route path="/wedding" element={<WeddingPage />} />
        </Routes>
      </main>
      <FooterSection />
      <ScrollToTopButton /> {/* ✅ add floating home button */}
    </div>
  );
}
