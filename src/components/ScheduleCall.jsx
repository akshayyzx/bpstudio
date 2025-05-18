import React, { useEffect, useState, useRef } from 'react';
import { Phone } from 'lucide-react';

const ContactButtons = () => {
  const [isMobile, setIsMobile] = useState(false);
  const [showWhatsappChoice, setShowWhatsappChoice] = useState(false);
  const modalRef = useRef(null);

  const phoneNumber = "9651203128";
  const preTypedMessage = "Hello! I'm interested in booking a photography session. Could you please provide me with more information about your services and availability?";

  useEffect(() => {
    const checkIfMobile = () => {
      const userAgent = navigator.userAgent || navigator.vendor || window.opera;
      const mobileRegex = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i;
      setIsMobile(mobileRegex.test(userAgent));
    };

    checkIfMobile();
    window.addEventListener('resize', checkIfMobile);

    return () => window.removeEventListener('resize', checkIfMobile);
  }, []);

  const openWhatsAppApp = () => {
    const encodedMessage = encodeURIComponent(preTypedMessage);
    window.location.href = `whatsapp://send?phone=${phoneNumber}&text=${encodedMessage}`;
    setShowWhatsappChoice(false);
  };

  const openWhatsAppWeb = () => {
    const encodedMessage = encodeURIComponent(preTypedMessage);
    window.open(`https://web.whatsapp.com/send?phone=${phoneNumber}&text=${encodedMessage}`, '_blank');
    setShowWhatsappChoice(false);
  };

  const handleWhatsAppClick = () => {
    if (isMobile) {
      openWhatsAppApp();
    } else {
      setShowWhatsappChoice(true);
    }
  };

  const handleCallClick = () => {
    window.location.href = `tel:${phoneNumber}`;
  };

  // Close modal if clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (modalRef.current && !modalRef.current.contains(event.target)) {
        setShowWhatsappChoice(false);
      }
    };
    if (showWhatsappChoice) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [showWhatsappChoice]);

  return (
    <>
      <div className="flex flex-col sm:flex-row gap-4 pt-4">
        {/* WhatsApp Button */}
        <button
          onClick={handleWhatsAppClick}
          className="border-2 border-black px-6 py-3 font-medium hover:bg-black hover:text-white transition duration-300 rounded flex items-center justify-center gap-2"
        >
          <span>Message on WhatsApp</span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
            viewBox="0 0 448 512"
            fill="currentColor"
          >
            <path d="M380.9 97.1C339 55.1 283.2 32 223.9 32c-122.4 0-222 99.6-222 222 0 39.1 10.2 77.3 29.6 111L0 480l117.7-30.9c32.4 17.7 68.9 27 106.1 27h.1c122.3 0 224.1-99.6 224.1-222 0-59.3-25.2-115-67.1-157zm-157 341.6c-33.2 0-65.7-8.9-94-25.7l-6.7-4-69.8 18.3L72 359.2l-4.4-7c-18.5-29.4-28.2-63.3-28.2-98.2 0-101.7 82.8-184.5 184.6-184.5 49.3 0 95.6 19.2 130.4 54.1 34.8 34.9 56.2 81.2 56.1 130.5 0 101.8-84.9 184.6-186.6 184.6zm101.2-138.2c-5.5-2.8-32.8-16.2-37.9-18-5.1-1.9-8.8-2.8-12.5 2.8-3.7 5.6-14.3 18-17.6 21.8-3.2 3.7-6.5 4.2-12 1.4-32.6-16.3-54-29.1-75.5-66-5.7-9.8 5.7-9.1 16.3-30.3 1.8-3.7.9-6.9-.5-9.7-1.4-2.8-12.5-30.1-17.1-41.2-4.5-10.8-9.1-9.3-12.5-9.5-3.2-.2-6.9-.2-10.6-.2-3.7 0-9.7 1.4-14.8 6.9-5.1 5.6-19.4 19-19.4 46.3 0 27.3 19.9 53.7 22.6 57.4 2.8 3.7 39.1 59.7 94.8 83.8 35.2 15.2 49 16.5 66.6 13.9 10.7-1.6 32.8-13.4 37.4-26.4 4.6-13 4.6-24.1 3.2-26.4-1.3-2.5-5-3.9-10.5-6.6z" />
          </svg>
        </button>

        {/* Call Button */}
        {isMobile && (
          <button
            onClick={handleCallClick}
            className="border-2 border-black px-6 py-3 font-medium hover:bg-black hover:text-white transition duration-300 rounded flex items-center justify-center gap-2"
          >
            <span>Call Us</span>
            <Phone size={20} />
          </button>
        )}
      </div>

      {/* Modal */}
      <div
        className={`fixed inset-0 flex items-center justify-center z-50 transition-opacity duration-300 ${
          showWhatsappChoice ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
      >
        <div
          ref={modalRef}
          className="bg-white border border-gray-300 shadow-xl rounded-lg p-6 w-full max-w-sm transform transition-all duration-300 scale-100"
        >
          <h2 className="text-lg font-semibold mb-4 text-center">Open WhatsApp via</h2>
          <div className="flex flex-col gap-3">
  <button
    onClick={openWhatsAppApp}
    className="bg-black text-white px-4 py-2 rounded-md font-medium hover:opacity-90 shadow transition"
  >
     Open in WhatsApp App
  </button>
  <button
    onClick={openWhatsAppWeb}
    className="bg-black text-white px-4 py-2 rounded-md font-medium hover:opacity-90 shadow transition"
  >
     Open in WhatsApp Web
  </button>
  <button
    onClick={() => setShowWhatsappChoice(false)}
    className="text-sm text-gray-500 underline hover:text-gray-700 mt-2 self-center"
  >
    Cancel
  </button>
</div>

        </div>
      </div>
    </>
  );
};

export default ContactButtons;
