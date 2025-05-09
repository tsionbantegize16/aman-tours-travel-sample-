// TourDetailsPage.js
import React, { useState, useEffect, useRef } from 'react';
import { useParams } from 'react-router-dom';

function TourDetailsPage() {
  const { id } = useParams();
  const [tour, setTour] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const imageCarouselRef = useRef(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // Sample tour data with more details and images
  const sampleToursData = [
    {
      id: 1,
      title: 'Majestic Simien Mountains Trek',
      price: '$650',
      images: [
       'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSMJ5QCCSnlhI2rco-htaM2CLuXTVXyFysOMw&s',
       'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQJl3Nfda1ndKVmV6LoqR9q91majbImcQ1B5zuzGFwNLZtUDv2Hufzpa-YpBkmU1keKGNY&usqp=CAU',
       'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRTTooM6fiVCT6lUulNxpZ0B3HXnmx7UY1x5Ur__-KlRt5c2IJPYjFKaMyRGDUgdNR3ZaY&usqp=CAU' ,
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
  ];

  useEffect(() => {
    const fetchTourDetails = async () => {
      try {
        setLoading(true);
        setError(null);
        setTimeout(() => {
          const foundTour = sampleToursData.find((t) => t.id === parseInt(id));
          if (foundTour) {
            setTour(foundTour);
          } else {
            setError({ message: 'Tour not found' });
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

  const nextImage = () => {
    if (tour && tour.images && imageCarouselRef.current) {
      const newIndex = (currentImageIndex + 1) % tour.images.length;
      setCurrentImageIndex(newIndex);
      const newPosition = newIndex * imageCarouselRef.current.offsetWidth;
      imageCarouselRef.current.scrollTo({ left: newPosition, behavior: 'smooth' });
    }
  };

  const prevImage = () => {
    if (tour && tour.images && imageCarouselRef.current) {
      const newIndex = (currentImageIndex - 1 + tour.images.length) % tour.images.length;
      setCurrentImageIndex(newIndex);
      const newPosition = newIndex * imageCarouselRef.current.offsetWidth;
      imageCarouselRef.current.scrollTo({ left: newPosition, behavior: 'smooth' });
    }
  };

  if (loading) {
    return <div className="container mx-auto py-8 text-center">Loading tour details...</div>;
  }

  if (error) {
    return <div className="container mx-auto py-8 text-center text-red-500">Error: {error.message}</div>;
  }

  if (!tour) {
    return <div className="container mx-auto py-8 text-center">Tour not found.</div>;
  }

  return (
    <div className="container mx-auto py-12">
      <h1 className="text-4xl font-extrabold text-green-700 mb-6 tracking-tight">{tour.title}</h1>

      {/* Image Carousel */}
      {tour.images && tour.images.length > 0 && (
        <div className="relative mb-8 rounded-md shadow-lg overflow-hidden">
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
                onClick={prevImage}
                className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-gray-800 bg-opacity-50 text-white rounded-full w-10 h-10 flex items-center justify-center focus:outline-none"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" />
                </svg>
              </button>
              <button
                onClick={nextImage}
                className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-gray-800 bg-opacity-50 text-white rounded-full w-10 h-10 flex items-center justify-center focus:outline-none"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                </svg>
              </button>
              <div className="absolute bottom-4 left-0 right-0 flex justify-center space-x-2">
                {tour.images.map((_, index) => (
                  <button
                    key={index}
                    className={`rounded-full w-3 h-3 focus:outline-none ${
                      currentImageIndex === index ? 'bg-green-500' : 'bg-gray-300'
                    }`}
                    onClick={() => {
                      setCurrentImageIndex(index);
                      if (imageCarouselRef.current) {
                        const newPosition = index * imageCarouselRef.current.offsetWidth;
                        imageCarouselRef.current.scrollTo({ left: newPosition, behavior: 'smooth' });
                      }
                    }}
                  />
                ))}
              </div>
            </>
          )}
        </div>
      )}

      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        <div>
          <h2 className="text-2xl font-semibold text-green-600 mb-4">Description</h2>
          <p className="text-gray-700 text-lg leading-relaxed mb-6">{tour.description}</p>

          {tour.highlights && tour.highlights.length > 0 && (
            <>
              <h3 className="text-xl font-semibold text-green-600 mb-3">Highlights</h3>
              <ul className="list-disc list-inside text-gray-700 mb-6">
                {tour.highlights.map((highlight, index) => (
                  <li key={index}>{highlight}</li>
                ))}
              </ul>
            </>
          )}
        </div>
        <div>
          <div className="bg-white rounded-md shadow-md p-6">
            <h3 className="text-xl font-semibold text-gold-600 mb-4">Price: {tour.price}</h3>
            <button className="w-full bg-green-500 hover:bg-green-700 text-white font-bold py-3 px-6 rounded-full focus:outline-none focus:shadow-outline">
              Book Your Adventure
            </button>
            <div className="mt-6">
              {tour.priceIncludes && tour.priceIncludes.length > 0 && (
                <>
                  <h4 className="text-lg font-semibold text-gray-800 mb-2">Price Includes:</h4>
                  <ul className="list-disc list-inside text-gray-600 mb-3">
                    {tour.priceIncludes.map((item, index) => (
                      <li key={index}>{item}</li>
                    ))}
                  </ul>
                </>
              )}
              {tour.priceExcludes && tour.priceExcludes.length > 0 && (
                <>
                  <h4 className="text-lg font-semibold text-gray-800 mb-2">Price Excludes:</h4>
                  <ul className="list-disc list-inside text-gray-600">
                    {tour.priceExcludes.map((item, index) => (
                      <li key={index}>{item}</li>
                    ))}
                  </ul>
                </>
              )}
            </div>
          </div>
        </div>
      </div>

      {tour.itinerary && tour.itinerary.length > 0 && (
        <div className="mt-12">
          <h2 className="text-2xl font-semibold text-green-600 mb-6">Itinerary</h2>
          <div className="space-y-4">
            {tour.itinerary.map((item, index) => (
              <div key={index} className="bg-white rounded-md shadow-sm p-4">
                <h4 className="font-semibold text-gray-800">{`Day ${item.day}:`}</h4>
                <p className="text-gray-700">{item.activity}</p>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

export default TourDetailsPage;