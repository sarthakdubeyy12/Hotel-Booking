import React from 'react';
import spaImg from '../assets/img/spa.jpg';

const SpaPage = () => {
  return (
    <div className="relative min-h-screen">
      {/* Background image */}
      <div className="absolute inset-0 w-full h-[600px] lg:h-[900px] bg-cover bg-center" style={{ backgroundImage: `url(${spaImg})` }}>
        <div className="w-full h-full bg-black/60" />
      </div>
      {/* Content above background */}
      <div className="relative z-10 pt-36 pb-10 lg:pt-56 lg:pb-20">
        <div className="container mx-auto px-4 lg:px-0">
          <div className="text-center mb-12 text-white">
            <p className="font-tertiary uppercase text-[25px] tracking-[6px] text-accent">
              Wellness & Relaxation
            </p>
            <h1 className="font-primary text-[65px] mb-4">
              Spa & Wellness Retreat
            </h1>
            <p className="max-w-2xl mx-auto text-lg text-white/80 mb-6">
              Escape to tranquility at our luxury spa. Rejuvenate your mind, body, and soul with a range of holistic treatments, soothing massages, and wellness therapies. Our serene environment and expert therapists ensure a truly relaxing experience.
            </p>
          </div>
        </div>
      </div>
      {/* Spa details below background */}
      <div className="mt-96 relative z-20 bg-accent/10 pt-4 pb-16">
        <div className="container mx-auto px-4 lg:px-0">
          <div className="text-center mb-10">
            <h2 className="font-primary text-[40px] mb-4 text-accent">Our Spa Services</h2>
            <p className="max-w-xl mx-auto text-lg text-primary/80 mb-6">
              Discover a curated menu of spa treatments designed to refresh and revitalize. From traditional therapies to modern wellness rituals, our spa offers something for everyone seeking peace and renewal.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <div className="bg-white rounded-lg shadow-lg p-8">
              <h3 className="font-primary text-2xl mb-2 text-accent">Signature Massages</h3>
              <p className="text-primary/80">Choose from deep tissue, Swedish, or aromatherapy massages to melt away stress and tension.</p>
            </div>
            <div className="bg-white rounded-lg shadow-lg p-8">
              <h3 className="font-primary text-2xl mb-2 text-accent">Facials & Skin Care</h3>
              <p className="text-primary/80">Personalized facials using premium products to leave your skin glowing and refreshed.</p>
            </div>
            <div className="bg-white rounded-lg shadow-lg p-8">
              <h3 className="font-primary text-2xl mb-2 text-accent">Body Treatments</h3>
              <p className="text-primary/80">Indulge in body scrubs, wraps, and detoxifying therapies for complete renewal.</p>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white rounded-lg shadow-lg p-8">
              <h3 className="font-primary text-2xl mb-2 text-accent">Couple's Retreat</h3>
              <p className="text-primary/80">Enjoy a private spa suite and side-by-side treatments for a romantic, shared experience.</p>
            </div>
            <div className="bg-white rounded-lg shadow-lg p-8">
              <h3 className="font-primary text-2xl mb-2 text-accent">Wellness Packages</h3>
              <p className="text-primary/80">Multi-day wellness journeys including yoga, meditation, and nutrition guidance for holistic health.</p>
            </div>
          </div>
          <div className="text-center mt-16">
            <h2 className="font-primary text-[32px] mb-4 text-accent">Spa Facilities</h2>
            <p className="max-w-2xl mx-auto text-lg text-primary/80 mb-6">
              Our spa features tranquil treatment rooms, a steam bath, sauna, jacuzzi, and a relaxation lounge. Complimentary herbal teas and healthy snacks are available for all guests.
            </p>
            <h3 className="font-primary text-2xl mb-2 text-accent">Book Your Spa Experience</h3>
            <p className="text-primary/80 mb-4">Contact our spa concierge to reserve your treatment or inquire about custom packages for groups and events.</p>
            <button className="btn btn-primary btn-lg">Book Now</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SpaPage;
