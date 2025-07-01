import React from 'react';
import contactImg from '../assets/img/rooms/7-lg.png';

const ContactPage = () => {
  return (
    <div className="relative min-h-screen">
      {/* Background image */}
      <div className="absolute inset-0 w-full h-[500px] lg:h-[900px] bg-cover bg-center" style={{ backgroundImage: `url(${contactImg})` }}>
        <div className="w-full h-full bg-black/60" />
      </div>
      {/* Content above background */}
<div className="relative z-10 pt-44 pb-10 lg:pt-72 lg:pb-20">
  <div className="container mx-auto px-4 lg:px-0">
    <div className="text-center mb-12 text-white">
      <p className="font-tertiary uppercase text-[22px] tracking-[6px] text-accent">
        Get In Touch
      </p>
      <h1 className="font-primary text-[55px] mb-4">
        Contact Us
      </h1>
      <p className="max-w-2xl mx-auto text-lg text-white/80 mb-6">
        We are here to help you with your booking, questions, or special requests. Reach out to us and our team will respond promptly to ensure your experience is seamless and memorable.
      </p>
    </div>
  </div>
</div>
      {/* Contact details and form below background */}
      <div className="mt-72 relative z-20 bg-accent/10 pt-4 pb-16">
        <div className="container mx-auto px-4 lg:px-0">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-12">
            <div className="bg-white rounded-lg shadow-lg p-8 flex flex-col justify-center">
              <h2 className="font-primary text-2xl mb-4 text-accent">Contact Information</h2>
              <p className="mb-2 text-primary/80"><strong>Address:</strong> 123 Adina Avenue, Jabalpur, India</p>
              <p className="mb-2 text-primary/80"><strong>Phone:</strong> +91 87702 10627</p>
              <p className="mb-2 text-primary/80"><strong>Email:</strong> info@hoteladina.com</p>
              <p className="mb-2 text-primary/80"><strong>Hours:</strong> 24/7 Customer Support</p>
            </div>
            <form className="bg-white rounded-lg shadow-lg p-8 flex flex-col gap-4">
              <h2 className="font-primary text-2xl mb-4 text-accent">Send Us a Message</h2>
              <input className="border p-3 rounded" type="text" placeholder="Your Name" required />
              <input className="border p-3 rounded" type="email" placeholder="Your Email" required />
              <input className="border p-3 rounded" type="text" placeholder="Subject" />
              <textarea className="border p-3 rounded min-h-[120px]" placeholder="Your Message" required />
              <button className="btn btn-primary btn-lg mt-6" type="submit">Send Message</button>
            </form>
          </div>
          <div className="text-center mt-10">
            <h3 className="font-primary text-xl text-accent mb-2">We look forward to welcoming you!</h3>
            <p className="text-primary/80">For urgent queries, please call our front desk directly.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
