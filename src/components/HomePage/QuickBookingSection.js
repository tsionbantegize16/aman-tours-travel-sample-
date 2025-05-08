// src/components/HomePage/QuickBookingSection.js
import React from 'react';
import { Link } from 'react-router-dom';

const quickBookings = [
  { id: 1, title: 'Rafting Whitewater', description: 'Dive into thrilling whitewater rafting adventures. Book your experience in just a few clicks. Fast, simple, and hassle-free.', imageUrl: 'https://via.placeholder.com/300x200?text=Rafting' },
  { id: 2, title: 'Easy & Quick Booking', description: 'Book your next tour in just a few clicks. Fast, simple, and hassle-free.', imageUrl: 'https://via.placeholder.com/300x200?text=Quick+Booking+1' },
  { id: 3, title: 'Easy & Quick Booking', description: 'Book your next tour in just a few clicks. Fast, simple, and hassle-free.', imageUrl: 'https://via.placeholder.com/300x200?text=Quick+Booking+2' },
];

function QuickBookingSection() {
  return (
    <section className="py-16 bg-gray-100">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {quickBookings.map(booking => (
            <div key={booking.id} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition duration-300">
              <img src={booking.imageUrl} alt={booking.title} className="w-full h-48 object-cover" />
              <div className="p-6">
                <h3 className="font-bold text-lg text-green-600 mb-2">{booking.title}</h3>
                <p className="text-gray-700 text-sm mb-4">{booking.description}</p>
                <Link to="/tours" className="inline-block bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded-full text-sm transition duration-200 focus:outline-none focus:ring-2 focus:ring-green-400">
                  Book Now
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default QuickBookingSection;