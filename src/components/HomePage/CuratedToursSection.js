import React, { useState, useCallback, useEffect, useMemo } from 'react';
import { Link } from 'react-router-dom';

function CuratedToursSection() {
  const initialTours = useMemo(() => [
    { id: 1, title: 'Addis Ababa', duration: '4 Days', level: 'Luxury', price: '$0', imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRV2qUJTsHBFU0_RZ3P6qHNz5vOS8l3oGbP1WQ3Upm3a9IgrNa8q1M-vnHFvhBRRoI2mB8&usqp=CAU' },
    { id: 2, title: 'Omo Valley', duration: '7 Days', level: 'Premium', price: '$0', imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQH45o68Uxa1SzQN2XX-HxHsE_FrqVYoOxthgERR2kVFb186IWl9N1QMAHdBFBk3QC7-MY&usqp=CAU' },
    { id: 3, title: 'Addis Ababa', duration: '5 Days', level: 'Standard', price: '$0', imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/2c/Addis_in_night.jpg/330px-Addis_in_night.jpg' },
    { id: 4, title: 'Lalibela', duration: '6 Days', level: 'Luxury', price: '$0', imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/aa/Lalibela%2C_san_giorgio%2C_esterno_24.jpg/960px-Lalibela%2C_san_giorgio%2C_esterno_24.jpg' },
    { id: 5, title: 'Gondar', duration: '4 Days', level: 'Premium', price: '$0', imageUrl: 'https://www.exoticca.com/_next/image?url=https%3A%2F%2Fuploads.exoticca.com%2Fglobal%2Fdestination%2Fpoi%2Fgondar.png&w=3840&q=75' },
    { id: 6, title: 'Axum', duration: '7 Days', level: 'Standard', price: '$0', imageUrl: 'https://cdn.britannica.com/23/93423-050-107B2836/obelisk-kingdom-Aksum-Ethiopian-name-city.jpg' },
    { id: 7, title: 'Bahar Dar', duration: '5 Days', level: 'Luxury', price: '$0', imageUrl: 'https://lh3.googleusercontent.com/p/AF1QipPUci_WPECN4hYZxDyvptdH8dCTornjV5qiGcaL=h1000-w1000' },
    { id: 8, title: 'Arba Minch', duration: '6 Days', level: 'Premium', price: '$0', imageUrl: 'https://cf.bstatic.com/xdata/images/hotel/max1024x768/204136045.jpg?k=c82ddfe480e13304c480a46f6da450ce26292f6bd48bb6ba76e93401f0d41ee4&o=&hp=1' },
  ], []); // Memoize initialTours

  const [filterLevel, setFilterLevel] = useState('All');
  const [visibleTours, setVisibleTours] = useState(initialTours.slice(0, 4));

  const filterTours = useCallback((level) => {
    setFilterLevel(level);
    if (level === 'All') {
      setVisibleTours(initialTours.slice(0, 4));
    } else {
      setVisibleTours(initialTours.filter(tour => tour.level === level).slice(0, 4));
    }
  }, [initialTours]); // Still depends on initialTours, but it's now memoized

  useEffect(() => {
    filterTours('All');
  }, [filterTours]);

  const handleFilter = useCallback((level) => {
    setFilterLevel(level);
    if (level === 'All') {
      setVisibleTours(initialTours.slice(0, 4));
    } else {
      setVisibleTours(initialTours.filter(tour => tour.level === level).slice(0, 4));
    }
  }, [initialTours]); // Also depends on the memoized initialTours

  const activeButtonStyle = 'bg-[#4CAF50] text-[#FFD700]'; // Green background, Gold text
  const inactiveButtonStyle = 'bg-gray-200 text-gray-700 hover:bg-[#8B4513] hover:text-white'; // Light gray, dark gray text, Brown hover

  return (
    <section className="py-20 bg-gray-100">
      <div className="container mx-auto">
        <div className="flex items-center justify-between mb-8 animate-slide-in-right">
          <h2 className="text-xl font-bold text-green-700">Get To Know Us Explore The World</h2>
          <div className="flex items-center space-x-4">
            <button
              onClick={() => handleFilter('All')}
              className={`py-2 px-4 rounded-full text-sm font-semibold transition duration-200 focus:outline-none focus:ring-2 focus:ring-green-400 ${
                filterLevel === 'All' ? activeButtonStyle : inactiveButtonStyle
              }`}
            >
              All
            </button>
            <button
              onClick={() => handleFilter('Luxury')}
              className={`py-2 px-4 rounded-full text-sm font-semibold transition duration-200 focus:outline-none focus:ring-2 focus:ring-green-400 ${
                filterLevel === 'Luxury' ? activeButtonStyle : inactiveButtonStyle
              }`}
            >
              Luxury
            </button>
            <button
              onClick={() => handleFilter('Premium')}
              className={`py-2 px-4 rounded-full text-sm font-semibold transition duration-200 focus:outline-none focus:ring-2 focus:ring-green-400 ${
                filterLevel === 'Premium' ? activeButtonStyle : inactiveButtonStyle
              }`}
            >
              Premium
            </button>
            <button
              onClick={() => handleFilter('Standard')}
              className={`py-2 px-4 rounded-full text-sm font-semibold transition duration-200 focus:outline-none focus:ring-2 focus:ring-green-400 ${
                filterLevel === 'Standard' ? activeButtonStyle : inactiveButtonStyle
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