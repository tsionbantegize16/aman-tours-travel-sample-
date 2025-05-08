// src/components/HeroBanner.js
import React from 'react';
import SearchBar from './SearchBar';

function HeroBanner() {
  return (
    <section
      className="relative py-32 bg-green-200 bg-opacity-75"
      style={{ backgroundImage: 'url(https://via.placeholder.com/1200x400?text=Hero+Banner)', backgroundSize: 'cover', backgroundPosition: 'center' }}
    >
      <div className="absolute inset-0 bg-green-900 bg-opacity-50"></div>
      <div className="container mx-auto text-center relative z-10">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
          <span className="relative">
            Discover Your
            <span
              className="absolute inset-0 -ml-2 -mr-2 bg-clip-text text-transparent bg-repeat-round"
              style={{
                backgroundImage: 'url(https://via.placeholder.com/400x100/FFFF00/000000?Text=Adventure)', // Replace with your image URL
                padding: '0.2em 0.4em',
                zIndex: -1,
              }}
            >
              Adventure
            </span>
          </span>{' '}
          Ethiopian Adventure
        </h1>
        <p className="text-lg text-gray-200 mb-8">
          Explore the best tours and activities.
        </p>
        <SearchBar />
      </div>
    </section>
  );
}

export default HeroBanner;