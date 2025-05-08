import React, { useState, useEffect } from 'react';
import TourCard from '../components/TourCard';

function ToursPage() {
  const [tours, setTours] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Simulate fetching tours from an API
    const fetchTours = async () => {
      try {
        // Replace with your actual API endpoint
        // const response = await fetch('/api/tours');
        // if (!response.ok) {
        //   throw new Error('Failed to fetch tours');
        // }
        // const data = await response.json();
        // setTours(data);

        // Simulate API delay and data
        setTimeout(() => {
          const sampleTours = [
            { id: 1, title: 'Simien Mountains Trekking', price: '$500', imageUrl: 'https://via.placeholder.com/400x300?text=Simien+Trek' },
            { id: 2, title: 'Omo Valley Cultural Tour', price: '$750', imageUrl: 'https://via.placeholder.com/400x300?text=Omo+Valley' },
            { id: 3, title: 'Historical Route Tour', price: '$600', imageUrl: 'https://via.placeholder.com/400x300?text=Historical' },
          ];
          setTours(sampleTours);
          setLoading(false);
        }, 1000); // Simulate 1-second delay
      } catch (err) {
        setError(err);
        setLoading(false);
      }
    };

    fetchTours();
  }, []);

  if (loading) {
    return <div>Loading tours...</div>; // Simple loading indicator
  }

  if (error) {
    return <div>Error: {error.message}</div>; // Simple error message
  }

  return (
    <div className="container mx-auto py-8">
      <h1 className="text-3xl font-semibold text-green-700 mb-6">Our Tours</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {tours.map((tour) => (
          <TourCard key={tour.id} tour={tour} />
        ))}
      </div>
    </div>
  );
}

export default ToursPage;