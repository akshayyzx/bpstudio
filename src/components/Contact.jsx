import React, { useState } from 'react';
import ContactButtons from './ScheduleCall'


const ContactSection = () => {
  // Form state
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
  });
  
  // Form status states
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);
  
  // Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };
  
  // Handle form submission with Formspree integration
  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Prepare submission data (include otherService in message if applicable)
    const submissionData = {...formData};
    if (formData.service === 'Other' && formData.otherService) {
      submissionData.message = `Service specified: ${formData.otherService}\n\n${formData.message}`;
    }
    
    // Send data to Formspree
    fetch('https://formspree.io/f/xgvkdppq', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(submissionData)
    })
    .then(response => {
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      return response.json();
    })
    .then(data => {
      setSubmitStatus('success');
      setFormData({
        name: '',
        email: '',
        phone: '',
        service: '',
      });
      setTimeout(() => setSubmitStatus(null), 5000);
    })
    .catch(error => {
      console.error('Error:', error);
      setSubmitStatus('error');
    })
    .finally(() => {
      setIsSubmitting(false);
    });
  };

  return (
    <div className="bg-white flex flex-col lg:flex-row px-6 py-12 gap-12 max-w-6xl mx-auto" id="1">
      {/* Left Content */}
      <div className="lg:w-1/2 space-y-6">
        <h2 className="text-4xl font-bold text-gray-800">Preserve Life’s Finest Moments with <span className='text-red-500'>The Big Picture Studio</span></h2>
        <h3 className="text-xl font-medium text-gray-600">Your Favourite Wedding Photographer in Lucknow</h3>
        
        <p className="text-gray-700 leading-relaxed">
          At <b>The Big Picture Studios</b>, we turn fleeting moments into lasting memories. From weddings and portraits to milestone events, we're dedicated to capturing every emotion and detail with creativity and care. Let us tell your story — one frame at a time.
        </p>
        
        <div className="space-y-4 mt-8">
          <div className="flex items-center gap-3">
            <div className="bg-black text-white p-3 rounded-full">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
              </svg>
            </div>
            <span className="text-gray-800 font-medium">9651203128</span>
          </div>
          
          <div className="flex items-center gap-3">
            <div className="bg-black text-white p-3 rounded-full">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
              </svg>
            </div>
            <span className="text-gray-800 font-medium">info@thebpstudiostudio.com</span>
          </div>
          
          <div className="flex items-center gap-3">
            <div className="bg-black text-white p-3 rounded-full">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
              </svg>
            </div>
            <span className="text-gray-800 font-medium">6, Janpath Rd, Dandiya Bazar, Aliganj, Lucknow, Uttar Pradesh 226024</span>
          </div>
        </div>
        
        <div className="pt-4">
          <ContactButtons/>
        </div>
      </div>
      
      {/* Right Form */}
   <div className="lg:w-1/2 bg-white">
  <div className="p-8 rounded-lg shadow-lg border border-gray-100 h-130 mt-8 bg-white">
    <h3 className="text-2xl font-bold mb-6 text-gray-800">Request a Callback</h3>

    {submitStatus === 'success' && (
      <div className="bg-green-50 border border-green-200 text-green-700 px-4 py-3 rounded mb-6 flex items-center">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
        </svg>
        Message sent successfully! We'll get back to you soon.
      </div>
    )}

    {submitStatus === 'error' && (
      <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded mb-6 flex items-center">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
          <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
        </svg>
        Something went wrong. Please try again later.
      </div>
    )}

    <form onSubmit={handleSubmit} className="space-y-4 ">
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">Full Name</label>
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          placeholder="Your Name"
          required
          className="w-full border border-gray-300 rounded px-4 py-2 focus:ring-2 focus:ring-black focus:border-transparent transition"
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">Email Address</label>
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="you@example.com"
          required
          className="w-full border border-gray-300 rounded px-4 py-2 focus:ring-2 focus:ring-black focus:border-transparent transition"
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">Phone Number</label>
        <input
          type="tel"
          name="phone"
          value={formData.phone}
          onChange={handleChange}
          placeholder="Your Number"
          required
          className="w-full border border-gray-300 rounded px-4 py-2 focus:ring-2 focus:ring-black focus:border-transparent transition"
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">Service Required</label>
        <select
          name="service"
          value={formData.service}
          onChange={handleChange}
          className="w-full border border-gray-300 rounded px-4 py-2 focus:ring-2 focus:ring-black focus:border-transparent transition"
        >
          <option value="">Select a service</option>
          <option value="Wedding">Wedding Photography</option>
          <option value="Pre-Wedding">Pre-Wedding Shoot</option>
          <option value="Engagement">Engagement Ceremony</option>
          <option value="Commercial">Commercial Photoshoot</option>
          <option value="Other">Other</option>
        </select>
      </div>

      <button
        type="submit"
        disabled={isSubmitting}
        className="w-full bg-black text-white font-medium mt-10 py-3 rounded hover:bg-gray-800 transition duration-300 flex items-center justify-center"
      >
        {isSubmitting ? (
          <>
            <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
            </svg>
            Sending...
          </>
        ) : 'Send Message'}
      </button>
    </form>
  </div>
</div>

    </div>
  );
};

export default ContactSection;
