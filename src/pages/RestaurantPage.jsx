import React from 'react';
import images from '../assets';
import restroImg from '../assets/img/rooms/restro.jpg';

const RestaurantPage = () => {
  return (
    <div className="relative min-h-screen">
      {/* Background image */}
      <div className="absolute inset-0 w-full h-[600px] lg:h-[900px] bg-cover bg-center" style={{ backgroundImage: `url(${restroImg})` }}>
        <div className="w-full h-full bg-black/60" />
      </div>
      {/* Content above background */}
      <div className="relative z-10 pt-36 pb-10 lg:pt-56 lg:pb-20">
        <div className="container mx-auto px-4 lg:px-0">
          <div className="text-center mb-12 text-white">
            <p className="font-tertiary uppercase text-[25px] tracking-[6px] text-accent">
              Gourmet Experience
            </p>
            <h1 className="font-primary text-[65px] mb-4">
              Restaurant & Dining
            </h1>
            <p className="max-w-2xl mx-auto text-lg text-white/80 mb-6">
              Indulge in a culinary journey at our in-house restaurant, where world-class chefs craft exquisite dishes from the freshest ingredients. Enjoy a blend of local flavors and international cuisine in a luxurious, ambient setting. Perfect for romantic dinners, family gatherings, or business lunches.
            </p>
          </div>
        </div>
      </div>
      {/* Restaurant details below background */}
      <div className="mt-96 relative z-20 bg-accent/10 pt-4 pb-16">
        <div className="container mx-auto px-4 lg:px-0">
          <div className="text-center mb-10">
            <h2 className="font-primary text-[40px] mb-4 text-accent">Our Specialties</h2>
            <p className="max-w-xl mx-auto text-lg text-primary/80 mb-6">
              From gourmet breakfasts to elegant dinners, our menu features a variety of dishes to satisfy every palate. Enjoy signature cocktails, fine wines, and a selection of desserts in a refined atmosphere.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg shadow-lg p-8">
              <h3 className="font-primary text-2xl mb-2 text-accent">Fine Dining</h3>
              <p className="text-primary/80">Elegant multi-course meals prepared by expert chefs, perfect for special occasions.</p>
            </div>
            <div className="bg-white rounded-lg shadow-lg p-8">
              <h3 className="font-primary text-2xl mb-2 text-accent">Buffet & Breakfast</h3>
              <p className="text-primary/80">A lavish spread of breakfast favorites and healthy options to start your day right.</p>
            </div>
            <div className="bg-white rounded-lg shadow-lg p-8">
              <h3 className="font-primary text-2xl mb-2 text-accent">Bar & Lounge</h3>
              <p className="text-primary/80">Relax with signature cocktails, premium spirits, and a cozy lounge ambiance.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RestaurantPage;
