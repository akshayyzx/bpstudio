import React,{ useState, useEffect } from "react";

export default function WhyChooseUs() {
  const [animate, setAnimate] = useState(false);
  
  useEffect(() => {
    setAnimate(true);
  }, []);

  const features = [
    {
      title: "Awarded Wedding Photography in Lucknow",
      description: "With years of experience, we have captured 500+ weddings, making us a trusted name in the industry. We ensure every wedding moment is beautifully documented."
    },
    {
      title: "Customizable Wedding Photography Packages",
      description: "We offer affordable and flexible wedding photography packages tailored to your needs. Whether it's a one-day shoot or full wedding coverage, we ensure perfection."
    },
    {
      title: "Candid & Cinematic Wedding Photography",
      description: "Our expertise lies in capturing candid emotions and cinematic wedding films that bring out the essence of your day, making your wedding story feel magical."
    },
    {
      title: "Quick Delivery with Premium Editing",
      description: "We provide high-quality edited images and cinematic videos with a fast turnaround time, ensuring you relive your wedding moments without long waits."
    }
  ];

  return (
    <>
    <section className="py-16 px-4 bg-gray-50 bg-trueGray-100 -mt-5">
<div className="w-[90%] max-w-[700px] h-px bg-gray-300 my-4 mx-auto"></div>
      <div className="max-w-6xl mx-auto mt-15">
        <div className={`text-center mb-16 transition-all duration-1000 ${animate ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif text-gray-800 mb-4">
            Why Choose the Best Wedding Photographer in Lucknow?
          </h2>
          <div className="w-24 h-0.5 bg-gray-400 mx-auto mb-6"></div>
          <p className="text-gray-600 max-w-3xl mx-auto text-lg">
            Every wedding tells a unique love story, and we ensure yours is captured with elegance and authenticity. 
            With our expertise in wedding photography in Lucknow, we blend candid emotions with cinematic creativity, 
            delivering timeless memories you'll cherish forever.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index} 
              className={`bg-stone-200 p-8 shadow-sm border border-gray-100 hover:shadow-md transition-all duration-300 transform ${animate ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
              style={{ transitionDelay: `${150 * index}ms` }}
            >
              <h3 className="text-xl font-serif font-medium text-gray-800 mb-4">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
        
        <div className={`mt-12 text-center transition-all duration-1000 delay-700 ${animate ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <button className="bg-red-500 hover:bg-red-600 text-white font-medium py-3 px-8 rounded-full transition-all duration-300">
            Book Now
          </button>
        </div>
      </div>
    </section>
    </>
  );
}