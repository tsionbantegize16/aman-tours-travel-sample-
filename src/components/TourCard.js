// TourCard.js (assuming this is in src/components)
import React from 'react';
import { Link } from 'react-router-dom';

function TourCard({ tour }) {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition duration-300 ease-in-out">
      <img
        src={tour.imageUrl}
        alt={tour.title}
        className="w-full h-48 object-cover"
      />
      <div className="p-4">
        <h3 className="text-xl font-semibold text-gray-800 mb-2">{tour.title}</h3>
        <p className="text-gold-600 font-semibold text-lg mb-3">{tour.price}</p>
        <Link
          to={`/tours/${tour.id}`}
          className="inline-block bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded-full text-sm transition duration-300 ease-in-out"
          style={{ backgroundColor: '#4CAF50', color: 'white' }} // Green for button
        >
          Explore More
        </Link>
      </div>
    </div>
  );
}

export default TourCard;