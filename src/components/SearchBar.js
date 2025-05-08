// src/components/SearchBar.js
import React, { useState } from 'react';

function SearchBar() {
  const [location, setLocation] = useState('');
  const [activity, setActivity] = useState('');
  const [tourType, setTourType] = useState('');

  const handleLocationChange = (event) => {
    setLocation(event.target.value);
  };

  const handleActivityChange = (event) => {
    setActivity(event.target.value);
  };

  const handleTourTypeChange = (event) => {
    setTourType(event.target.value);
  };

  const handleSearch = () => {
    // Implement your search logic here using location, activity, and tourType
    console.log('Searching for:', { location, activity, tourType });
  };

  return (
    <div className="bg-white rounded-full shadow-md p-4 flex items-center justify-around">
      <div className="flex flex-col">
        <label className="text-gray-600 text-sm mb-1">Location</label>
        <input
          type="text"
          placeholder="Where are you going?"
          className="flex-grow outline-none px-2 py-1 rounded-md"
          value={location}
          onChange={handleLocationChange}
        />
      </div>
      <div className="flex flex-col">
        <label className="text-gray-600 text-sm mb-1">Activity</label>
        <input
          type="text"
          placeholder="Select Activity"
          className="flex-grow outline-none px-2 py-1 rounded-md"
          value={activity}
          onChange={handleActivityChange}
        />
      </div>
      <div className="flex flex-col">
        <label className="text-gray-600 text-sm mb-1">Tour Type</label>
        <input
          type="text"
          placeholder="Select Tour Type"
          className="flex-grow outline-none px-2 py-1 rounded-md"
          value={tourType}
          onChange={handleTourTypeChange}
        />
      </div>
      <button
        className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded-full ml-4 focus:outline-none focus:ring-2 focus:ring-green-400"
        onClick={handleSearch}
      >
        Search
      </button>
    </div>
  );
}

export default SearchBar;