import React, { useEffect, useRef, useState } from 'react';
import backgroundVideo from '../assets/logoVideo.mp4';

export default function WeddingHeroSection() {
  const images = [
    "https://images.pexels.com/photos/1456613/pexels-photo-1456613.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    "https://images.pexels.com/photos/1024993/pexels-photo-1024993.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    "https://images.pexels.com/photos/2253870/pexels-photo-2253870.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    "https://images.pexels.com/photos/1488312/pexels-photo-1488312.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    "https://images.pexels.com/photos/758898/pexels-photo-758898.png?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    "https://images.pexels.com/photos/948185/pexels-photo-948185.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
  ];

  const allImages = [...images, ...images];
  const carouselRef = useRef(null);
  const backgroundVideoRef = useRef(null);
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const [scrollPosition, setScrollPosition] = useState(0);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      if (backgroundVideoRef.current) {
        backgroundVideoRef.current.play().catch(e => console.log("Video autoplay failed:", e));
      }
      setLoaded(true);
    }, 500);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    let animationId;
    const speed = 0.5;

    const scroll = () => {
      if (carouselRef.current) {
        const maxScroll = carouselRef.current.scrollWidth / 2;
        setScrollPosition(prev => {
          const newPos = prev + speed;
          if (newPos >= maxScroll) return 0;
          return newPos;
        });
        carouselRef.current.scrollLeft = scrollPosition;
      }
      animationId = requestAnimationFrame(scroll);
    };

    animationId = requestAnimationFrame(scroll);
    return () => cancelAnimationFrame(animationId);
  }, [scrollPosition]);

  return (
    <div className="bg-stone-50 w-full relative overflow-hidden">
      {/* Video Background — hidden on mobile */}
      <div className="fixed inset-0 z-0 opacity-10 pointer-events-none overflow-hidden hidden sm:block">
        <video
          ref={backgroundVideoRef}
          className="w-full h-full object-cover"
          muted
          playsInline
          onEnded={(e) => {
            const video = e.target;
            video.currentTime = Math.max(0, video.duration - 0.1);
          }}
        >
          <source src={backgroundVideo} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>

      {/* Content */}
      <div className={`relative z-10 pt-24 sm:pt-28 md:pt-32 transform transition-all duration-1000 ease-out ${
        loaded ? 'translate-y-0 opacity-100' : 'translate-y-16 opacity-0'
      }`} id='home'>
        <div className="text-center px-4 sm:-mt-10 md:mb-10 sm:mb-12 md:-mt-26">
          <h2 className={`text-2xl sm:text-4xl -mt-5 md:text-5xl lg:text-5xl font-serif text-stone-800 max-w-4xl mx-auto leading-tight transition-all duration-1000 ease-out ${
            loaded ? 'opacity-100' : 'opacity-0 translate-y-6'
          }`}>
            <span>Capture your wedding's magic with, </span>
            <span className="text-red-500 font-geologica">theBigPictureStudio</span>
          </h2>
        </div>

        {/* Image Carousel */}
        <div className={`max-w-8xl mx-auto px-4 sm:px-6 mb-8 mt-10 sm:mb-10 md:mb-12 overflow-hidden transition-all duration-1000 delay-300 ease-out ${
          loaded ? 'opacity-100' : 'opacity-0 translate-y-12'
        }`}>
          <div
            ref={carouselRef}
            className="flex space-x-4 md:space-x-6 py-4 overflow-x-hidden"
          >
            {allImages.map((image, index) => (
              <div
                key={index}
                className="min-w-[220px] w-[220px] h-[300px] md:min-w-[260px] md:w-[260px] md:h-[340px] lg:min-w-[300px] lg:w-[300px] lg:h-[400px] rounded-2xl overflow-hidden shadow-xl transform rotate-[-2deg] hover:rotate-0 transition-all duration-300 flex-shrink-0"
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
                onTouchStart={() => setHoveredIndex(index)}
                onTouchEnd={() => setHoveredIndex(null)}
              >
                <img
                  src={image}
                  alt={`Wedding ${index % images.length}`}
                  className={`w-full h-full object-cover transition-all duration-300 ${
                    hoveredIndex === index
                      ? 'scale-125'
                      : hoveredIndex !== null
                      ? 'blur-sm scale-105'
                      : ''
                  }`}
                />
              </div>
            ))}
          </div>
        </div>

        {/* Text Content After Carousel */}
        <div className="text-center px-4 sm:mt-6 md:mb-10 sm:mb-12 md:mb-16">
          <div className={`w-24 sm:w-32 h-0.5 bg-stone-400 mx-auto my-4 transition-all duration-1000 delay-300 ease-out ${
            loaded ? 'opacity-100' : 'opacity-0 scale-x-0'
          }`} />
          <p className={`text-stone-700 text-sm sm:text-base max-w-xs sm:max-w-lg md:max-w-2xl mx-auto mt-4 sm:mt-6 transition-all duration-1000 delay-500 ease-out ${
            loaded ? 'opacity-100' : 'opacity-0 translate-y-6'
          }`}>
            Capturing the love, joy, and magic of your wedding day,
            <span className="block sm:inline"> preserving timeless memories to cherish forever.</span>
          </p>
        </div>

      </div>
    </div>
  );
}
