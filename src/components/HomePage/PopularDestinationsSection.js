// src/components/HomePage/PopularDestinationsSection.js
import React from 'react';
import { Link } from 'react-router-dom';

const popularDestinationsData = [
  { id: 1, name: 'Addis Ababa', imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRV2qUJTsHBFU0_RZ3P6qHNz5vOS8l3oGbP1WQ3Upm3a9IgrNa8q1M-vnHFvhBRRoI2mB8&usqp=CAU' },
  { id: 2, name: 'Omo Valley', imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQH45o68Uxa1SzQN2XX-HxHsE_FrqVYoOxthgERR2kVFb186IWl9N1QMAHdBFBk3QC7-MY&usqp=CAU' },
  { id: 3, name: 'Lalibela', imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/aa/Lalibela%2C_san_giorgio%2C_esterno_24.jpg/960px-Lalibela%2C_san_giorgio%2C_esterno_24.jpg' },
  { id: 4, name: 'Gondar', imageUrl: 'https://www.exoticca.com/_next/image?url=https%3A%2F%2Fuploads.exoticca.com%2Fglobal%2Fdestination%2Fpoi%2Fgondar.png&w=3840&q=75' },
  { id: 5, name: 'Axum', imageUrl: 'https://cdn.britannica.com/23/93423-050-107B2836/obelisk-kingdom-Aksum-Ethiopian-name-city.jpg' },
  { id: 6, name: 'Bahar Dar', imageUrl: 'https://lh3.googleusercontent.com/p/AF1QipPUci_WPECN4hYZxDyvptdH8dCTornjV5qiGcaL=h1000-w1000' },
  { id: 7, name: 'Arba Minch', imageUrl: 'https://cf.bstatic.com/xdata/images/hotel/max1024x768/204136045.jpg?k=c82ddfe480e13304c480a46f6da450ce26292f6bd48bb6ba76e93401f0d41ee4&o=&hp=1' },
  { id: 8, name: 'Arba Minch', imageUrl: 'https://cf.bstatic.com/xdata/images/hotel/max1024x768/204136045.jpg?k=c82ddfe480e13304c480a46f6da450ce26292f6bd48bb6ba76e93401f0d41ee4&o=&hp=1' },
  // Add more destinations
];

function PopularDestinationsSection() {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto text-center">
        <h2 className="text-2xl font-bold text-green-700 mb-8">
          Discover Your Most Favorite Tour Place
        </h2>
        <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-8 gap-6">
          {popularDestinationsData.map(destination => (
            <div key={destination.id} className="hover:scale-105 transition duration-300 cursor-pointer animate-fade-in-up delay-100">
              <img src={destination.imageUrl} alt={destination.name} className="w-24 h-24 rounded-full object-cover mx-auto shadow-md hover:shadow-lg" />
              <p className="text-sm mt-2 text-gray-700">{destination.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default PopularDestinationsSection;