import React, { useState, useRef, useEffect } from "react";
import { ChevronDown } from "lucide-react";

export default function FAQAccordion() {
  const [openIndex, setOpenIndex] = useState(null);
  const [animate, setAnimate] = useState(false);
  const contentRefs = useRef([]);

  useEffect(() => {
    setAnimate(true);
  }, []);

  const toggleAccordion = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const faqs = [
    {
      question: "What are the different types of photography?",
      answer:
        "We offer various styles including traditional photography, candid photography, pre-wedding shoots, destination weddings, and cinematic videography. Each style is designed to capture different aspects of your special day, from formal portraits to spontaneous moments that tell your unique love story.",
    },
    {
      question: "Do photographers provide hard copies and soft copies of photographs?",
      answer:
        "Yes, we provide both hard copies and soft copies of all your photographs. You'll receive professionally printed albums in various sizes according to your package, along with digital copies of all edited images on a USB drive. We also offer cloud storage options for easy sharing with family and friends.",
    },
    {
      question: "Should I book The Big Pictures Studio in Aliganj in advance?",
      answer:
        "Absolutely! We recommend booking our services at least 3-6 months in advance, especially for peak wedding seasons (November-February and April-June). Early booking ensures we can accommodate your date and gives us ample time to plan your photography schedule and any pre-wedding shoots you might want.",
    },
    {
      question: "Will The Big Pictures Studio  edit the photos before sending them to me?",
      answer:
        "Yes, every photograph undergoes professional editing before delivery. Our editing process includes color correction, enhancement, and touch-ups to ensure each image looks its absolute best while maintaining a natural look. We also offer premium editing services for selected images based on your package.",
    },
    {
      question: "How can I book the services of The Big Pictures Studio?",
      answer:
        "Booking is simple! You can contact us through our website form, call us directly, or visit our studio in Aliganj. We'll schedule a consultation to discuss your requirements, show you our portfolio, and guide you through our packages. A booking is confirmed with a signed contract and advance payment.",
    },
    {
      question: "What services does The Big Pictures Studio offer for weddings?",
      answer:
        "The Big Pictures Studio offers comprehensive wedding photography and videography services, including candid photography, traditional coverage, cinematic wedding films, pre-wedding shoots, drone videography, and custom albums. Our team works closely with you to capture every moment with creativity and care, ensuring your wedding story is told beautifully and authentically.",
    },
  ];

  return (
    <>
     <div className="w-[90%] max-w-[700px] h-px bg-gray-300 my-4 mx-auto"></div>
      <section className="py-16 px-4 bg-trueGray-100">
        <div className="max-w-6xl mx-auto">
          <div
            className={`text-center mb-16 transition-all duration-1000 ${
              animate ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}
          >
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif text-gray-800 mb-4">
              Frequently Asked Questions
            </h2>
            <div className="w-24 h-0.5 bg-gray-400 mx-auto mb-6"></div>
            <p className="text-gray-600 max-w-2xl mx-auto text-lg">
              Your Queries Answered by the Leading Wedding Photographer in Lucknow
            </p>
          </div>

          {/* Wrapper with relative positioning */}
          <div className="relative">
            {/* Vertical separator line for md+ screens */}
{/* <div className="hidden md:block absolute top-0 bottom-0 left-1/2 transform -translate-x-1/2 w-[2px] bg-gray-300"></div> */}
            {/* FAQ Grid */}
           <div className="grid grid-cols-1 md:grid-cols-2 gap-6 px-8">
              {faqs.map((faq, index) => (
                <div
                  key={index}
                  className={`border-b border-gray-200 transition-all duration-500 ${
                    animate ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
                  }`}
                  style={{ transitionDelay: `${100 * index}ms` }}
                >
                  <button
                    className="flex justify-between items-center w-full py-5 text-left focus:outline-none"
                    onClick={() => toggleAccordion(index)}
                    aria-expanded={openIndex === index}
                  >
                    <span className="font-serif font-medium text-lg text-gray-800">{faq.question}</span>
                    <span
                      className={`ml-6 transform transition-transform duration-300 ${
                        openIndex === index ? "rotate-180" : "rotate-0"
                      }`}
                    >
                      <ChevronDown className="w-5 h-5 text-gray-500" />
                    </span>
                  </button>
                  <div
                    ref={(el) => (contentRefs.current[index] = el)}
                    className="overflow-hidden transition-all duration-300 ease-in-out"
                    style={{
                      maxHeight: openIndex === index ? `${contentRefs.current[index]?.scrollHeight}px` : "0px",
                      opacity: openIndex === index ? 1 : 0,
                    }}
                  >
                    <div className="pb-5 text-gray-600">{faq.answer}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div
            className={`mt-12 text-center transition-all duration-1000 delay-700 ${
              animate ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}
          >
            <p className="text-gray-600 mb-4">Have more questions about our wedding photography services?</p>
            <button className="bg-red-500 hover:bg-red-600 text-white font-medium py-3 px-8 rounded-full transition-all duration-300">
              Contact Us
            </button>
          </div>
        </div>
      </section>
    </>
  );
}
