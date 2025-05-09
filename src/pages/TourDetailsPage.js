// TourDetailsPage.js
import React, { useState, useEffect, useRef, useMemo } from 'react';
import { useParams } from 'react-router-dom';

const primaryGreen = '#4CAF50';
const luxuryGold = '#FFD700';
const earthBrown = '#8B4513';

function TourDetailsPage() {
  const { id } = useParams();
  const [tour, setTour] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const imageCarouselRef = useRef(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // Sample tour data (consider fetching from an API)
  const sampleToursData = useMemo(() => [
    {
      id: 1,
      title: 'Majestic Simien Mountains Trek',
      price: '$650',
      images: [
        'https://imgix.brilliant-ethiopia.com/trekking-in-the-simien-mountains-1.jpg?auto=format,enhance,compress&fit=crop&crop=entropy,faces,focalpoint&w=1880&h=740&q=30',
        'https://simienmountainstrekking.com/img/tours1.jpg',
        'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/17/22/93/8c/imetgogo-viewpoint-simien.jpg?w=900&h=-1&s=1',
      ],
      description:
        'Embark on an unforgettable trekking adventure through the breathtaking Simien Mountains National Park, often called the "Roof of Africa". Discover dramatic landscapes, unique wildlife like the Gelada baboon and Walia ibex, and immerse yourself in the rich culture of the local communities.',
      highlights: [
        'Witness the stunning escarpments and panoramic views.',
        'Encounter unique Ethiopian wildlife in their natural habitat.',
        'Experience the hospitality of local mountain villages.',
        'Guided by experienced local trekking experts.',
        'All meals and camping equipment included.',
      ],
      itinerary: [
        { day: 1, activity: 'Arrival in Gondar and transfer to the Simien Mountains.' },
        { day: 2, activity: 'Trek to Sankaber (3250m), enjoying the stunning scenery.' },
        { day: 3, activity: 'Trek to Geech (3600m), passing the Jinbar Waterfall.' },
        // ... more itinerary days
      ],
      priceIncludes: ['Accommodation during trek', 'Meals', 'Local guides', 'Park fees'],
      priceExcludes: ['Flights', 'Visa fees', 'Personal expenses', 'Tips'],
    },
    {
      id: 2,
      title: 'Vibrant Omo Valley Cultural Expedition',
      price: '$890',
      images: [
        'https://images.unsplash.com/photo-1544887455-b9151b547b45?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG0dby1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
        'https://images.unsplash.com/photo-1591486228135-1c9990229184?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG0dby1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
        'https://images.unsplash.com/photo-1621918147395-f384ff9f157a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG0dby1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
      ],
      description:
        "Journey to the remote Omo Valley, a UNESCO World Heritage site, and encounter some of Africa's most fascinating and culturally diverse tribes. Witness their unique customs, traditions, and way of life in an immersive and respectful experience.",
      highlights: [
        'Visit the Hamer, Mursi, Karo, and Ari tribes.',
        'Witness traditional ceremonies and rituals (seasonal).',
        'Explore local markets and interact with community members.',
        'Scenic drives through diverse landscapes.',
        'Expert local guides with deep cultural understanding.',
      ],
      itinerary: [
        { day: 1, activity: 'Fly to Arba Minch and drive to a local lodge.' },
        { day: 2, activity: 'Visit the Dorze people and their unique beehive-shaped houses.' },
        { day: 3, activity: 'Explore the land of the Konso people, known for their terraced landscapes.' },
        // ... more itinerary days
      ],
      priceIncludes: ['Accommodation', 'Transportation', 'Local guides', 'Entry fees'],
      priceExcludes: ['Flights', 'Visa fees', 'Photography fees', 'Tips'],
    },
    // ... more tours
  ], []);

  useEffect(() => {
    const fetchTourDetails = async () => {
      try {
        setLoading(true);
        setError(null);
        // Simulate API call
        setTimeout(() => {
          const foundTour = sampleToursData.find((t) => t.id === parseInt(id));
          if (foundTour) {
            setTour(foundTour);
          } else {
            setError({ message: 'Tour not found' });
          }
          setLoading(false);
        }, 500); // Reduced loading time for better UX
      } catch (err) {
        setError(err);
        setLoading(false);
      }
    };

    fetchTourDetails();
  }, [id, sampleToursData]); // Added sampleToursData as a dependency

  const handleNextImage = () => {
    if (tour?.images?.length && imageCarouselRef.current) {
      const newIndex = (currentImageIndex + 1) % tour.images.length;
      setCurrentImageIndex(newIndex);
      imageCarouselRef.current.scrollTo({
        left: imageCarouselRef.current.offsetWidth * newIndex,
        behavior: 'smooth',
      });
    }
  };

  const handlePrevImage = () => {
    if (tour?.images?.length && imageCarouselRef.current) {
      const newIndex = (currentImageIndex - 1 + tour.images.length) % tour.images.length;
      setCurrentImageIndex(newIndex);
      imageCarouselRef.current.scrollTo({
        left: imageCarouselRef.current.offsetWidth * newIndex,
        behavior: 'smooth',
      });
    }
  };

  const handleDotClick = (index) => {
    setCurrentImageIndex(index);
    if (imageCarouselRef.current) {
      imageCarouselRef.current.scrollTo({
        left: imageCarouselRef.current.offsetWidth * index,
        behavior: 'smooth',
      });
    }
  };

  if (loading) {
    return (
      <div className="container mx-auto py-10 flex justify-center items-center h-screen">
        <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-b-4 border-green-500"></div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="container mx-auto py-8 text-center text-red-500">
        <svg
          className="w-12 h-12 mx-auto mb-4 fill-current text-red-500"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path
            fillRule="evenodd"
            d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z"
            clipRule="evenodd"
          />
        </svg>
        Error: {error.message}
      </div>
    );
  }

  if (!tour) {
    return (
      <div className="container mx-auto py-8 text-center">
        <svg
          className="w-12 h-12 mx-auto mb-4 fill-current text-gray-400"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path
            fillRule="evenodd"
            d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"
            clipRule="evenodd"
          />
        </svg>
        Tour not found.
      </div>
    );
  }

  return (
    <div className="container mx-auto mt-8 p-6 bg-white shadow-lg rounded-md">
      <div className="mb-8">
        <h1 className="text-3xl font-extrabold text-green-700 tracking-tight mb-4" style={{ color: primaryGreen }}>
          {tour.title}
        </h1>
        <p className="text-gray-600 text-sm mb-2">
          {/* You might want to display a location or a short tagline here */}
        </p>
      </div>

      {/* Image Carousel */}
      {tour.images?.length > 0 && (
        <div className="relative rounded-md overflow-hidden shadow-md mb-8">
          <div
            ref={imageCarouselRef}
            className="flex transition-transform duration-300 ease-out"
            style={{ transform: `translateX(-${currentImageIndex * 100}%)` }}
          >
            {tour.images.map((imgUrl, index) => (
              <img
                key={index}
                src={imgUrl}
                alt={`${tour.title} - Image ${index + 1}`}
                className="w-full h-96 object-cover flex-shrink-0"
              />
            ))}
          </div>
          {tour.images.length > 1 && (
            <>
              <button
                onClick={handlePrevImage}
                className="absolute top-1/2 left-2 transform -translate-y-1/2 bg-gray-800 bg-opacity-50 text-white rounded-full w-10 h-10 flex items-center justify-center focus:outline-none"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" />
                </svg>
              </button>
              <button
                onClick={handleNextImage}
                className="absolute top-1/2 right-2 transform -translate-y-1/2 bg-gray-800 bg-opacity-50 text-white rounded-full w-10 h-10 flex items-center justify-center focus:outline-none"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                </svg>
              </button>
              <div className="absolute bottom-2 left-0 right-0 flex justify-center space-x-2">
                {tour.images.map((_, index) => (
                  <button
                    key={index}
                    className={`rounded-full w-3 h-3 focus:outline-none ${
                      currentImageIndex === index ? 'bg-green-500' : 'bg-gray-300'
                    }`}
                    style={{ backgroundColor: currentImageIndex === index ? primaryGreen : 'rgba(0, 0, 0, 0.1)' }}
                    onClick={() => handleDotClick(index)}
                  />
                ))}
              </div>
            </>
          )}
        </div>
      )}

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Improved Highlights Section */}
        <div>
          <h2 className="text-xl font-semibold mb-3" style={{ color: primaryGreen }}>
            Highlights
          </h2>
          {tour.highlights?.length > 0 ? (
            <ul className="list-disc list-inside text-gray-700">
              {tour.highlights.map((highlight, index) => (
                <li key={index} className="mb-2">{highlight}</li>
              ))}
            </ul>
          ) : (
            <p className="text-gray-500">No highlights available for this tour.</p>
          )}
        </div>

        {/* Price and Booking */}
        <div className="bg-gray-100 rounded-md p-6 shadow-sm border border-gray-200">
          <h3 className="text-xl font-semibold mb-4" style={{ color: luxuryGold }}>
            Price: {tour.price}
          </h3>
          <button
            className="w-full text-white font-bold py-3 px-6 rounded-full focus:outline-none focus:shadow-outline transition duration-300"
            style={{ backgroundColor: primaryGreen, hoverBackgroundColor: '#45a049' }}
          >
            Book Your Adventure
          </button>
          <div className="mt-4">
            {tour.priceIncludes?.length > 0 && (
              <div className="mb-3">
                <h4 className="text-lg font-semibold text-gray-800 mb-2">Includes:</h4>
                <ul className="list-disc list-inside text-gray-600">
                  {tour.priceIncludes.map((item, index) => (
                    <li key={index}>{item}</li>
                  ))}
                </ul>
              </div>
            )}
            {tour.priceExcludes?.length > 0 && (
              <div>
                <h4 className="text-lg font-semibold text-gray-800 mb-2">Excludes:</h4>
                <ul className="list-disc list-inside text-gray-600">
                  {tour.priceExcludes.map((item, index) => (
                    <li key={index}>{item}</li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Itinerary Section */}
      {tour.itinerary?.length > 0 && (
        <div className="mt-10">
          <h2 className="text-2xl font-semibold mb-4" style={{ color: primaryGreen }}>
            Itinerary
          </h2>
          <div className="space-y-4">
            {tour.itinerary.map((item, index) => (
              <div
                key={index}
                className="bg-white rounded-md shadow-sm p-4 border border-gray-200"
                style={{ borderColor: earthBrown }}
              >
                <h4 className="font-semibold text-gray-800 mb-1">{`Day ${item.day}:`}</h4>
                <p className="text-gray-700">{item.activity}</p>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Description Section (Moved and Restyled with Brown border) */}
      {tour?.description && (
        <div className="mt-10 bg-gray-50 rounded-md p-6 shadow-sm border" style={{ borderColor: earthBrown }}>
          <h2 className="text-2xl font-semibold mb-4" style={{ color: primaryGreen }}>
            About this Tour
          </h2>
          <p className="text-gray-800 leading-relaxed">{tour.description}</p>
        </div>)}
    </div>
  );
}

export default TourDetailsPage;