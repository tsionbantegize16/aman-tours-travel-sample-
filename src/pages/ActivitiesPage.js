import React, { useState, useEffect } from 'react';
import ActivityCard from '../components/ActivityCard'; // Import ActivityCard

function ActivitiesPage() {
  const [activities, setActivities] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchActivities = async () => {
      try {
        // Simulate fetching data
        setTimeout(() => {
          const sampleActivities = [
            { id: 1, title: 'Hiking', description: 'Explore scenic trails.', imageUrl: 'https://via.placeholder.com/400x300?text=Hiking' },
            { id: 2, title: 'Birdwatching', description: 'Discover unique bird species.', imageUrl: 'https://via.placeholder.com/400x300?text=Birdwatching' },
          ];
          setActivities(sampleActivities);
          setLoading(false);
        }, 1000);
      } catch (err) {
        setError(err);
        setLoading(false);
      }
    };
    fetchActivities();
  }, []);

  if (loading) {
    return <div>Loading activities...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <div className="container mx-auto py-8">
      <h1 className="text-3xl font-semibold text-green-700 mb-6">Our Activities</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {activities.map((activity) => (
          <ActivityCard key={activity.id} activity={activity} />
        ))}
      </div>
    </div>
  );
}

export default ActivitiesPage;