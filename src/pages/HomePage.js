// src/pages/HomePage.js
import React from 'react';
import HeroSection from '../components/HomePage/HeroSection';
import QuickBookingSection from '../components/HomePage/QuickBookingSection';
import DiscoverySection from '../components/HomePage/DiscoverySection';
import PopularDestinationsSection from '../components/HomePage/PopularDestinationsSection';
import CuratedToursSection from '../components/HomePage/CuratedToursSection';

function HomePage() {
  return (
    <div className="font-sans">
      <HeroSection />
      <QuickBookingSection />
      <DiscoverySection />
      <PopularDestinationsSection />
      <CuratedToursSection />
    </div>
  );
}

export default HomePage;