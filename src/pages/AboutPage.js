import React from 'react';
import { Link } from 'react-router-dom';

function AboutPage() {
  return (
    <div className="bg-gray-100 py-16">
      <div className="container mx-auto">
        {/* Hero Section */}
        <section className="py-24 text-center bg-green-100 rounded-lg shadow-md">
          <h1 className="text-5xl font-bold text-[#4CAF50] mb-6">Discover the Heart of Ethiopia with Aman Tour and Travel</h1>
          <p className="text-xl text-gray-700 leading-relaxed mb-10">
            Your gateway to authentic and unforgettable adventures in the land of wonders.
          </p>
          <Link
            to="/contact"
            className="inline-block bg-[#FFD700] hover:bg-[#B8860B] text-[#8B4513] font-bold py-4 px-8 rounded-full text-lg transition duration-300 shadow-lg"
          >
            Contact Us to Plan Your Trip
          </Link>
        </section>

        {/* Our Story Section */}
        <section className="py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-semibold text-[#4CAF50] mb-6">Our Journey Begins</h2>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                Founded by passionate explorers with a deep love for Ethiopia's rich history, vibrant culture, and breathtaking landscapes, Aman Tour and Travel was born from a desire to share the magic of this extraordinary country with the world.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                From the ancient wonders of Aksum and Lalibela to the stunning natural beauty of the Simien Mountains and the cultural tapestry of the Omo Valley, we are committed to crafting journeys that go beyond the ordinary.
              </p>
            </div>
            <div>
              <img
                src="https://via.placeholder.com/600/8FBC8F" // Replace with a relevant image
                alt="Ethiopian Landscape"
                className="rounded-lg shadow-md"
              />
            </div>
          </div>
        </section>

        {/* Our Values Section */}
        <section className="py-16 bg-white rounded-lg shadow-md p-10">
          <h2 className="text-3xl font-semibold text-[#4CAF50] mb-8 text-center">Our Core Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 mx-auto bg-[#FFD700] text-[#8B4513] rounded-full flex items-center justify-center text-2xl">
                <i className="fas fa-compass"></i> {/* Example icon - requires Font Awesome or similar */}
              </div>
              <h3 className="text-xl font-semibold text-gray-700 mt-4 mb-2">Authenticity</h3>
              <p className="text-gray-600 leading-relaxed">We strive to provide genuine and immersive experiences.</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 mx-auto bg-[#FFD700] text-[#8B4513] rounded-full flex items-center justify-center text-2xl">
                <i className="fas fa-leaf"></i> {/* Example icon */}
              </div>
              <h3 className="text-xl font-semibold text-gray-700 mt-4 mb-2">Sustainability</h3>
              <p className="text-gray-600 leading-relaxed">We are committed to responsible and eco-friendly tourism.</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 mx-auto bg-[#FFD700] text-[#8B4513] rounded-full flex items-center justify-center text-2xl">
                <i className="fas fa-users"></i> {/* Example icon */}
              </div>
              <h3 className="text-xl font-semibold text-gray-700 mt-4 mb-2">Community</h3>
              <p className="text-gray-600 leading-relaxed">We believe in supporting local communities and economies.</p>
            </div>
          </div>
        </section>

        {/* Why Choose Us Section */}
        <section className="py-16">
          <h2 className="text-3xl font-semibold text-[#4CAF50] mb-8 text-center">Why Choose Aman Tour and Travel?</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white rounded-lg shadow-md p-6 text-center">
              <div className="w-12 h-12 mx-auto bg-[#FFD700] text-[#8B4513] rounded-full flex items-center justify-center text-lg">
                <i className="fas fa-map-marked-alt"></i> {/* Example icon */}
              </div>
              <h3 className="text-xl font-semibold text-gray-700 mt-4">Expert Local Guides</h3>
              <p className="text-gray-600 leading-relaxed mt-2">Passionate and knowledgeable guides.</p>
            </div>
            <div className="bg-white rounded-lg shadow-md p-6 text-center">
              <div className="w-12 h-12 mx-auto bg-[#FFD700] text-[#8B4513] rounded-full flex items-center justify-center text-lg">
                <i className="fas fa-route"></i> {/* Example icon */}
              </div>
              <h3 className="text-xl font-semibold text-gray-700 mt-4">Customized Itineraries</h3>
              <p className="text-gray-600 leading-relaxed mt-2">Tailored trips to your preferences.</p>
            </div>
            <div className="bg-white rounded-lg shadow-md p-6 text-center">
              <div className="w-12 h-12 mx-auto bg-[#FFD700] text-[#8B4513] rounded-full flex items-center justify-center text-lg">
                <i className="fas fa-hand-holding-heart"></i> {/* Example icon */}
              </div>
              <h3 className="text-xl font-semibold text-gray-700 mt-4">Sustainable Tourism</h3>
              <p className="text-gray-600 leading-relaxed mt-2">Responsible and eco-conscious travel.</p>
            </div>
            <div className="bg-white rounded-lg shadow-md p-6 text-center">
              <div className="w-12 h-12 mx-auto bg-[#FFD700] text-[#8B4513] rounded-full flex items-center justify-center text-lg">
                <i className="fas fa-star"></i> {/* Example icon */}
              </div>
              <h3 className="text-xl font-semibold text-gray-700 mt-4">Exceptional Service</h3>
              <p className="text-gray-600 leading-relaxed mt-2">Dedicated support from start to finish.</p>
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="py-24 text-center bg-green-100 rounded-lg shadow-md">
          <h2 className="text-3xl font-semibold text-[#4CAF50] mb-6">Ready for Your Ethiopian Adventure?</h2>
          <p className="text-lg text-gray-700 leading-relaxed mb-10">
            Explore our curated tours and start planning your dream vacation today!
          </p>
          <Link
            to="/tours"
            className="inline-block bg-[#FFD700] hover:bg-[#B8860B] text-[#8B4513] font-bold py-4 px-8 rounded-full text-lg transition duration-300 shadow-lg"
          >
            View Our Tours
          </Link>
        </section>
      </div>
    </div>
  );
}

export default AboutPage;