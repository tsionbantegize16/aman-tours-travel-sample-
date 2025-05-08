// src/components/HomePage/PopularDestinationsSection.js
import React from 'react';
import { Link } from 'react-router-dom';

const popularDestinationsData = [
  { id: 1, name: 'Addis Ababa', imageUrl: 'https://via.placeholder.com/200/abcdef' },
  { id: 2, name: 'Omo Valley', imageUrl: 'https://via.placeholder.com/200/fedcba' },
  { id: 3, name: 'Lalibela', imageUrl: 'https://via.placeholder.com/200/aabbcc' },
  { id: 4, name: 'Gondar', imageUrl: 'https://via.placeholder.com/200/ccbbaa' },
  { id: 5, name: 'Axum', imageUrl: 'https://via.placeholder.com/200/ddeeff' },
  { id: 6, name: 'Bahar Dar', imageUrl: 'https://via.placeholder.com/200/ffeedd' },
  { id: 7, name: 'Arba Minch', imageUrl: 'https://via.placeholder.com/200/123456' },
  { id: 8, name: '...More', imageUrl: 'https://via.placeholder.com/200/654321' },
  // Add more destinations
];

function PopularDestinationsSection() {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto text-center">
        <h2 className="text-2xl font-bold text-green-700 mb-8">
          Discover Your Most Favorite Tour Place
        </h2>
        <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-8 gap-6">
          {popularDestinationsData.map(destination => (
            <div key={destination.id} className="hover:scale-105 transition duration-300 cursor-pointer animate-fade-in-up delay-100">
              <img src={destination.imageUrl} alt={destination.name} className="w-24 h-24 rounded-full object-cover mx-auto shadow-md hover:shadow-lg" />
              <p className="text-sm mt-2 text-gray-700">{destination.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default PopularDestinationsSection;