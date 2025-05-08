import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

function TourDetailsPage() {
  const { id } = useParams();
  const [tour, setTour] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Simulate fetching tour details by ID
    const fetchTourDetails = async () => {
      try {
        // Replace with your actual API endpoint
        // const response = await fetch(`/api/tours/${id}`);
        // if (!response.ok) {
        //   throw new Error('Failed to fetch tour details');
        // }
        // const data = await response.json();
        // setTour(data);
        // setLoading(false);

        // Simulate API delay and data
        setTimeout(() => {
          // Sample tour data based on ID (replace with your actual data)
          const sampleTours = [
            { id: 1, title: 'Simien Mountains Trekking', price: '$500', imageUrl: 'https://via.placeholder.com/600x400?text=Simien+Trek', description: 'Explore the stunning Simien Mountains...' },
            { id: 2, title: 'Omo Valley Cultural Tour', price: '$750', imageUrl: 'https://via.placeholder.com/600x400?text=Omo+Valley', description: 'Discover the unique cultures of the Omo Valley...' },
            { id: 3, title: 'Historical Route Tour', price: '$600', imageUrl: 'https://via.placeholder.com/600x400?text=Historical', description: 'Visit ancient historical sites...' },
          ];
          const foundTour = sampleTours.find(t => t.id === parseInt(id));
          if (foundTour) {
            setTour(foundTour);
          } else {
            setError({ message: 'Tour not found' }); // Set a 404-like error
          }

          setLoading(false);
        }, 1000);
      } catch (err) {
        setError(err);
        setLoading(false);
      }
    };

    fetchTourDetails();
  }, [id]);

  if (loading) {
    return <div>Loading tour details...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  if (!tour) {
    return <div>Tour not found.</div>; // Handle the case where tour is null
  }

  return (
    <div className="container mx-auto py-8">
      <h1 className="text-3xl font-semibold text-green-700 mb-4">{tour.title}</h1>
      <div className="flex flex-col md:flex-row gap-8">
        <div className="md:w-1/2">
          <img src={tour.imageUrl} alt={tour.title} className="w-full rounded-md shadow-lg" />
        </div>
        <div className="md:w-1/2">
          <p className="text-gray-700 text-lg mb-4">{tour.description}</p>
          <p className="text-xl font-bold text-gold-600 mb-4">Price: {tour.price}</p>
          {/* Add booking/inquiry form or button here */}
           <button className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded-full">Book Now</button>
        </div>
      </div>
    </div>
  );
}

export default TourDetailsPage;