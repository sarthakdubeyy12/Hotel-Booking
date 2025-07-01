import React from 'react';
import Rooms from '../components/Rooms';
import images from '../assets';

const RoomsPage = () => {
  return (
    <div className="relative min-h-screen">
      {/* Background image */}
      <div className="absolute inset-0 w-full h-[900px] lg:h-[900px] bg-cover bg-center" style={{ backgroundImage: `url(${images.Room6ImgLg})` }}>
        <div className="w-full h-full bg-black/60" />
      </div>
      {/* Content above background */}
<div className="relative z-10 pt-44 pb-10 lg:pt-64 lg:pb-20">
  <div className="container mx-auto px-4 lg:px-0">
    <div className="text-center mb-12 text-white">
      <p className="font-tertiary uppercase text-[25px] tracking-[6px] text-accent">
        Discover Our Selection
      </p>
      <h1 className="font-primary text-[65px] mb-4">
        Choose Your Perfect Stay
      </h1>
      <p className="max-w-2xl mx-auto text-lg text-white/80 mb-6">
        Explore a variety of rooms and suites designed for every traveler. Whether you seek luxury, comfort, or a family-friendly space, our hotel offers the perfect accommodation for your needs. Enjoy modern amenities, elegant interiors, and exceptional service during your stay.
      </p>
    </div>
  </div>
</div>
      {/* Room list below background */}
      <div className=" mt-80 relative z-20 bg-accent/10 pt-4 pb-16">
        <div className="container mx-auto px-4 lg:px-0">
          <Rooms />
        </div>
      </div>
    </div>
  );
};

export default RoomsPage;
