import React, { useState, useEffect, useMemo } from 'react';
import ActivityCard from '../components/ActivityCard';

const primaryGreen = '#4CAF50';
const luxuryGold = '#FFD700';
const earthBrown = '#8B4513';

function ActivitiesPage() {
  const [activities, setActivities] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const sampleActivities = useMemo(() => [
    { id: 1, title: 'Hiking Adventures', description: 'Explore breathtaking scenic trails and conquer new heights.', imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQmS9VXdpKluyMrrRwPrvJI9RDXYEOsTGjOhg&s', themeColor: primaryGreen },
    { id: 2, title: 'Enchanting Birdwatching', description: 'Discover a vibrant world of unique and colorful bird species in their natural habitats.', imageUrl: 'https://travelsetu.com/apps/uploads/new_destinations_photos/destination/2024/01/08/9751d5fac3d5c937c5dc8b5b7ade64b5_1000x1000.jpg', themeColor: luxuryGold },
    { id: 3, title: 'Cultural Heritage Tours', description: 'Immerse yourself in the rich history and traditions of local communities.', imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR5m2mdkelhL8acXIXKl2_YEIfYX97J842pnA&s', themeColor: earthBrown },
    { id: 4, title: 'Wildlife Safaris', description: 'Experience the thrill of encountering majestic wildlife in their natural environments.', imageUrl: 'https://wildlifesafaritanzania.com/wp-content/uploads/2022/05/8-Days-Kenya-Wildlife-Experience.jpg', themeColor: primaryGreen },
    { id: 5, title: 'Stargazing Expeditions', description: 'Journey to remote locations for unparalleled views of the night sky and celestial wonders.', imageUrl: 'https://images.squarespace-cdn.com/content/v1/5f5b6a4479187d68de3d04ca/1725961898682-K444ADS3TO4YKXECMN0R/unsplash-image-Jztmx9yqjBw.jpg', themeColor: luxuryGold },
    { id: 6, title: 'River Rafting Adventures', description: 'Navigate thrilling rapids and explore stunning river landscapes.', imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSIbd9jmqPrap_QLZHkQ5blwUnrr-Px3nMF8mr51YJQuExxj3kHsoWEMHR9ZIPzU5NtIUk&usqp=CAU', themeColor: earthBrown },
    { id: 7, title: 'Mountain Biking Trails', description: 'Discover challenging and rewarding mountain biking trails through diverse terrains.', imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ4K01K1XrghH6QRuTPfS2_CfdvI4cDeM6TFg&s', themeColor: primaryGreen },
    { id: 8, title: 'Photography Workshops', description: 'Capture the beauty of nature and culture through immersive photography workshops.', imageUrl: 'https://i.ontraport.com/224876.95b4848a200233c4130d3271e852c2a1.JPEG', themeColor: luxuryGold },
    // Add more activities here
  ], []);

  useEffect(() => {
    const fetchActivities = async () => {
      try {
        setLoading(true);
        // Simulate fetching data with a slight delay
        setTimeout(() => {
          setActivities(sampleActivities);
          setLoading(false);
        }, 1200);
      } catch (err) {
        setError(err);
        setLoading(false);
      }
    };

    fetchActivities();
  }, [sampleActivities]); // Depend on sampleActivities so it updates if it ever changes

  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen bg-gray-100">
        <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-b-4 border-green-500"></div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative" role="alert">
        <strong className="font-bold">Error!</strong>
        <span className="block sm:inline">{error.message}</span>
      </div>
    );
  }

  return (
    <div className="bg-gray-50 py-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl" style={{ color: primaryGreen }}>
            Explore Our Amazing Activities
          </h1>
          <p className="mt-2 text-lg text-gray-500">Discover unique experiences tailored for every adventurer.</p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {activities.map((activity) => (
            <ActivityCard key={activity.id} activity={activity} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default ActivitiesPage;