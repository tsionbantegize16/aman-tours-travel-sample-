// src/components/TourCard.js
import React from 'react';
import { Link } from 'react-router-dom';

function TourCard({ tour }) {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition duration-300">
      <img src={tour.imageUrl} alt={tour.title} className="w-full h-48 object-cover" />
      <div className="p-6">
        <h3 className="font-bold text-lg text-green-600 mb-2">{tour.title}</h3>
        <p className="text-gray-700 text-sm mb-2">Price: {tour.price}</p>
        <p className="text-gray-700 text-sm mb-2">Duration: {tour.duration}</p>
        <Link to={`/tours/${tour.id}`} className="inline-block mt-4 bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded-full text-sm transition duration-200 focus:outline-none focus:ring-2 focus:ring-green-400">
          View Details
        </Link>
      </div>
    </div>
  );
}

export default TourCard;