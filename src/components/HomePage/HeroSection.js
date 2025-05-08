// src/components/HomePage/HeroSection.js
import React from 'react';
import SearchBar from '../SearchBar';
import { Link } from 'react-router-dom';

function HeroSection() {
  return (
    <section
      className="relative py-32 md:py-48 bg-cover bg-center"
      style={{ backgroundImage: 'url(https://themexriver.com/wp/goyto/wp-content/uploads/2023/03/home-3-hero-bg.jpg)' }} // Replace with your image
    >
      <div className="absolute inset-0 bg-black bg-opacity-50"></div>
      <div className="container mx-auto text-center relative z-10">
        <h2 className="text-white text-3xl md:text-4xl font-bold mb-4">
          Discover your Next Destination
        </h2>
        <p className="text-gray-300 text-lg mb-8">
          Travel where your heart leads. We offer incredible experiences worldwide.
        </p>
        <div className="max-w-3xl mx-auto">
          <SearchBar /> {/* This component might need to be updated for multiple inputs */}
        </div>
        {/* Optional: Add featured categories or call-to-action buttons here */}
      </div>
    </section>
  );
}

export default HeroSection;