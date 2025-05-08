
import React, { useState, useCallback, useEffect } from 'react';
import { Link } from 'react-router-dom';

function CuratedToursSection() {
  const initialTours = [
    { id: 1, title: 'Addis Ababa', duration: '4 Days', level: 'Luxury', price: '$0', imageUrl: 'https://via.placeholder.com/400x300?text=Addis+Luxury' },
    { id: 2, title: 'Omo Valley', duration: '7 Days', level: 'Premium', price: '$0', imageUrl: 'https://via.placeholder.com/400x300?text=Omo+Premium' },
    { id: 3, title: 'Addis Ababa', duration: '5 Days', level: 'Standard', price: '$0', imageUrl: 'https://via.placeholder.com/400x300?text=Addis+Standard' },
    { id: 4, title: 'Lalibela', duration: '6 Days', level: 'Luxury', price: '$0', imageUrl: 'https://via.placeholder.com/400x300?text=Lalibela+Luxury' },
    { id: 5, title: 'Gondar', duration: '4 Days', level: 'Premium', price: '$0', imageUrl: 'https://via.placeholder.com/400x300?text=Gondar+Premium' },
    { id: 6, title: 'Axum', duration: '7 Days', level: 'Standard', price: '$0', imageUrl: 'https://via.placeholder.com/400x300?text=Axum+Standard' },
    { id: 7, title: 'Bahar Dar', duration: '5 Days', level: 'Luxury', price: '$0', imageUrl: 'https://via.placeholder.com/400x300?text=Bahar+Dar+Luxury' },
    { id: 8, title: 'Arba Minch', duration: '6 Days', level: 'Premium', price: '$0', imageUrl: 'https://via.placeholder.com/400x300?text=Arba+Minch+Premium' },
  ];

  const [filterLevel, setFilterLevel] = useState('All');
  const [visibleTours, setVisibleTours] = useState(initialTours.slice(0, 4));

  const filterTours = useCallback((level) => {
    setFilterLevel(level);
    if (level === 'All') {
      setVisibleTours(initialTours.slice(0, 4));
    } else {
      setVisibleTours(initialTours.filter(tour => tour.level === level).slice(0, 4));
    }
  }, [initialTours]);

  useEffect(() => {
    filterTours('All');
  }, [filterTours]);

  return (
    <section className="py-20 bg-gray-100">
      <div className="container mx-auto">
        <div className="flex items-center justify-between mb-8 animate-slide-in-right">
          <h2 className="text-xl font-bold text-green-700">Get To Know Us Explore The World</h2>
          <div className="flex items-center space-x-4">
            <button
              onClick={() => filterTours('All')}
              className={`py-2 px-4 rounded-full text-sm font-semibold ${
                filterLevel === 'All'
                  ? 'bg-green-500 text-white'
                  : 'bg-gray-200 text-gray-700 hover:bg-gray-300 transition duration-200 focus:outline-none focus:ring-2 focus:ring-green-400'
              }`}
            >
              All
            </button>
            <button
              onClick={() => filterTours('Luxury')}
              className={`py-2 px-4 rounded-full text-sm font-semibold ${
                filterLevel === 'Luxury'
                  ? 'bg-green-500 text-white'
                  : 'bg-gray-200 text-gray-700 hover:bg-gray-300 transition duration-200 focus:outline-none focus:ring-2 focus:ring-green-400'
              }`}
            >
              Luxury
            </button>
            <button
              onClick={() => filterTours('Premium')}
              className={`py-2 px-4 rounded-full text-sm font-semibold ${
                filterLevel === 'Premium'
                  ? 'bg-green-500 text-white'
                  : 'bg-gray-200 text-gray-700 hover:bg-gray-300 transition duration-200 focus:outline-none focus:ring-2 focus:ring-green-400'
              }`}
            >
              Premium
            </button>
            <button
              onClick={() => filterTours('Standard')}
              className={`py-2 px-4 rounded-full text-sm font-semibold ${
                filterLevel === 'Standard'
                  ? 'bg-green-500 text-white'
                  : 'bg-gray-200 text-gray-700 hover:bg-gray-300 transition duration-200 focus:outline-none focus:ring-2 focus:ring-green-400'
              }`}
            >
              Standard
            </button>
          </div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 animate-slide-in-left delay-100">
          {visibleTours.map((tour) => (
            <div
              key={tour.id}
              className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition duration-300"
            >
              <img
                src={tour.imageUrl}
                alt={tour.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="font-bold text-lg text-green-600 mb-2">{tour.title}</h3>
                <p className="text-gray-700 text-sm mb-2">Duration: {tour.duration}</p>
                <p className="text-gray-700 text-sm mb-2">Level: {tour.level}</p>
                <p className="text-gold-600 font-semibold mb-4">
                  Price: {tour.price === '$0' ? 'Inquire' : tour.price}
                </p>
                <Link
                  to={`/tours/${tour.id}`}
                  className="inline-block bg-green-500 hover:bg-green-700 text-white font-bold py-3 px-6 rounded-full text-sm transition duration-200 focus:outline-none focus:ring-2 focus:ring-green-400"
                >
                  View Details
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default CuratedToursSection;