// src/components/HomePage/DiscoverySection.js
import React from 'react';
import { Link } from 'react-router-dom';

function DiscoverySection() {
  return (
    <section className="relative py-24 text-center bg-fixed bg-cover" style={{ backgroundImage: 'url(https://via.placeholder.com/1600x600?text=Ethiopian+Landscape)' }}>
      <div className="absolute inset-0 bg-green-700 opacity-60"></div>
      <div className="container mx-auto relative z-10">
        <h2 className="text-4xl font-bold text-white mb-6 animate-zoom-in">Discover Your</h2>
        <h2 className="text-4xl font-bold text-gold-400 mb-8 animate-zoom-in-delay">Life is Short And <br /> The world is wide!</h2>
        <Link to="/tours" className="inline-block bg-gold-500 hover:bg-gold-700 text-white font-bold py-4 px-8 rounded-full text-lg shadow-md transition duration-300 animate-pulse">
          Start Booking
        </Link>
      </div>
    </section>
  );
}

export default DiscoverySection;