// ToursPage.js
import React, { useState, useEffect } from 'react';
import TourCard from '../components/TourCard';

function ToursPage() {
  const [tours, setTours] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchTours = async () => {
      try {
        setTimeout(() => {
          const sampleTours = [
            { id: 1, title: 'Simien Mountains Expedition', price: '$650', imageUrl: 'https://preview.redd.it/qy6q722clds11.jpg?width=640&crop=smart&auto=webp&s=81d25ee0f1cd961e2451227a2887e764cf7da05f' },
            { id: 1, title: 'Omo Valley Cultural Tour', price: '$890', imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQAAJ33zPb70t1pJRyKveyZrk6e3OdWJkyZW5gjzLWKFqqkjfJkH4sztQCKnEC5stkVm0Q&usqp=CAU' },
            { id: 1, title: 'Historical Route Adventure', price: '$720', imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS1ChorjEy1A1yZjzZDARSxt9w_m-q15BaIYg&s' },
            { id: 1, title: 'Danakil Depression Journey', price: '$950', imageUrl: 'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/17/9f/c2/a6/amazing-chemical-pools.jpg?w=900&h=500&s=1' },
            { id: 1, title: 'Bale Mountains Trekking', price: '$680', imageUrl: 'https://imgix.brilliant-ethiopia.com/bale-mountains-national-park-sanetti-plateau.png?auto=format,enhance,compress&fit=crop&crop=entropy,faces,focalpoint&w=1880&h=740&q=30' },
            { id: 1, title: 'Lake Tana Monasteries Tour', price: '$550', imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSK6yPMSsIU81FZt8-lbPlEkw_h207518NCwnMPT_GVzzJBB7bVqPLvjGSXP3SsH2_YtsY&usqp=CAU' },
          ];
          setTours(sampleTours);
          setLoading(false);
        }, 1000);
      } catch (err) {
        setError(err);
        setLoading(false);
      }
    };

    fetchTours();
  }, []);

  if (loading) {
    return (
      <div className="container mx-auto py-12 text-center text-gray-600">
        <svg
          className="animate-spin h-10 w-10 mx-auto text-green-500"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
        >
          <circle
            className="opacity-25"
            cx="12"
            cy="12"
            r="10"
            stroke="currentColor"
            strokeWidth="4"
          ></circle>
          <path
            className="opacity-75"
            fill="currentColor"
            d="M4 12a8 8 0 018-8V0c-3.14 0-6 1.39-8 4zm10 8a8 8 0 00-8 8v4c3.14 0 6-1.39 8-4z"
          ></path>
        </svg>
        <p className="mt-3">Loading amazing tours...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="container mx-auto py-8 text-center text-red-500">
        Error: {error.message}
      </div>
    );
  }

  return (
    <div className="bg-gray-100 py-16">
      <div className="container mx-auto px-4">
        <h1 className="text-3xl font-semibold text-green-700 mb-8 text-center tracking-tight">
          Explore Our Exquisite Ethiopian Adventures
        </h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {tours.map((tour) => (
            <TourCard key={tour.id} tour={tour} />
          ))}
        </div>
        {tours.length === 0 && !loading && (
          <div className="text-center mt-6 text-gray-500">
            No tours available at the moment. Please check back soon.
          </div>
        )}
      </div>
    </div>
  );
}

export default ToursPage;