import React, { Component } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';

import WeddingHeader from './Header';
import WeddingHeroSection from './Hero';
import ContactSection from './Contact';
import FooterSection from './Footer';
import WhyChooseUs from './WhyChooseUs';
import FaqSection from './FaqSection';
import PreWeddingPage from './PreWedding';
import WeddingPage from './Wedding';
import ScrollToTopButton from './ScrollToTop';
import Slideshow from './SlidShow';
import Collage from './Collage';

// AnimatedSection as a class component
class AnimatedSection extends Component {
  constructor(props) {
    super(props);
    this.state = { visible: false };
    this.ref = React.createRef();
    this.handleScroll = this.handleScroll.bind(this);
  }

  componentDidMount() {
    this.handleScroll(); // Check visibility on mount
    window.addEventListener('scroll', this.handleScroll);
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll);
  }

  handleScroll() {
    if (!this.ref.current) return;
    const rect = this.ref.current.getBoundingClientRect();
    // Check if top of element is in viewport (adjust threshold if needed)
    if (rect.top < window.innerHeight * 0.9) {
      if (!this.state.visible) this.setState({ visible: true });
    }
  }

  render() {
    const { visible } = this.state;
    const style = {
      opacity: visible ? 1 : 0,
      transform: visible ? 'translateY(0)' : 'translateY(20px)',
      transition: 'opacity 700ms ease-in-out, transform 700ms ease-in-out',
    };

    return (
      <div ref={this.ref} style={style}>
        {this.props.children}
      </div>
    );
  }
}

function LandingPageContent() {
  return (
    <>
      <AnimatedSection><WeddingHeroSection /></AnimatedSection>
      <AnimatedSection><WhyChooseUs /></AnimatedSection>
      <AnimatedSection><Collage /></AnimatedSection>
      <AnimatedSection><FaqSection /></AnimatedSection>
      <AnimatedSection><Slideshow /></AnimatedSection>
      <AnimatedSection><ContactSection /></AnimatedSection>
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
      <ScrollToTopButton />
    </div>
  );
}
