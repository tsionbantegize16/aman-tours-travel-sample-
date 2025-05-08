import React from 'react';

function ActivityCard({ activity }) {
  return (
    <div className="bg-white rounded-md shadow-md overflow-hidden">
      <img src={activity.imageUrl} alt={activity.title} className="w-full h-48 object-cover" />
      <div className="p-4">
        <h3 className="font-semibold text-lg text-green-600 mb-2">{activity.title}</h3>
        <p className="text-gray-700 text-sm">{activity.description}</p>
        {/* Add a link to activity details page if needed */}
      </div>
    </div>
  );
}

export default ActivityCard;