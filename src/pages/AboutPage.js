import React from 'react';
import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react'; // Importing hooks for potential future enhancements

function AboutPage() {
  const backgroundImage = "https://media-cdn.tripadvisor.com/media/attractions-splice-spp-720x480/11/63/b2/39.jpg"; // Your Google image link
  const [isMounted, setIsMounted] = useState(false); // State for potential animations on mount

  useEffect(() => {
    setIsMounted(true); // Set to true after the component has mounted
    // Potential for adding animations based on 'isMounted' class
  }, []);

  return (
    <div className="bg-gray-50 py-20 transition-opacity duration-500 ease-in-out" className={isMounted ? 'opacity-100' : 'opacity-0'}>
      <div className="container mx-auto">
        {/* Hero Section with Background Image */}
        <section
          className="relative py-48 text-center rounded-xl shadow-xl overflow-hidden"
          style={{
            backgroundImage: `url('${backgroundImage}')`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        >
          <div className="absolute inset-0 bg-black bg-opacity-60"></div> {/* Darker overlay */}
          <div className="relative z-10">
            <h1 className="text-6xl font-extrabold text-white mb-8 tracking-tight">
              Explore the Soul of Ethiopia with Aman Tour and Travel
            </h1>
            <p className="text-xl text-gray-200 leading-relaxed mb-12">
              Discover authentic adventures and create lasting memories in this incredible land.
            </p>
            <Link
              to="/tours"
              className="inline-block bg-yellow-500 hover:bg-yellow-600 text-brown-800 font-bold py-5 px-10 rounded-full text-lg transition duration-300 shadow-md focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:ring-opacity-75"
            >
              Embark on Your Journey
            </Link>
          </div>
        </section>

        {/* Introduction Section with Subtle Animation */}
        <section className="py-20 bg-white rounded-xl shadow-xl mt-12">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center px-8 md:px-16">
            <div className="fade-in-left">
              <h2 className="text-4xl font-semibold text-green-600 mb-8 tracking-tight">Our Story: A Passion for Ethiopia</h2>
              <p className="text-lg text-gray-700 leading-relaxed mb-8">
                Born from a deep appreciation for Ethiopia's rich heritage and stunning natural beauty, Aman Tour and Travel is more than just a travel agency. We are a collective of explorers who believe in sharing the authentic spirit of this extraordinary country.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                Our commitment lies in crafting personalized journeys that resonate with your individual desires, whether you seek historical immersion, cultural exchange, or breathtaking encounters with nature.
              </p>
            </div>
            <div className="fade-in-right">
              <img
                src="https://www.researchgate.net/publication/320265140/figure/fig1/AS:546865503977472@1507394304995/Map-of-Ethiopia-showing-the-sampling-sites-Wollega-Harar-Kafa-Bench-Maji-and-Sidamo.png" // Another relevant image
                alt="Ethiopian Landscape and People"
                className="rounded-xl shadow-lg"
              />
            </div>
          </div>
        </section>

        {/* Our Core Values Section with Icons */}
<section className="py-20 bg-gray-100 rounded-xl shadow-xl mt-12 px-8 md:px-16">
  <h2 className="text-4xl font-semibold text-green-600 mb-10 text-center tracking-tight">Our Guiding Principles</h2>
  <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
    {/* First Core Value: Authenticity */}
    <div className="text-center p-8 bg-white rounded-lg shadow-md hover:shadow-xl transition duration-300">
      {/* The yellow circular spot with the icon */}
      <div className="w-20 h-20 mx-auto bg-yellow-400 text-brown-800 rounded-full flex items-center justify-center text-3xl">
        <i className="fas fa-landmark"></i> {/* The landmark icon is here */}
      </div>
      <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-3 tracking-tight">Authenticity</h3>
      <p className="text-gray-600 leading-relaxed">We promise genuine experiences that connect you with the true essence of Ethiopia.</p>
    </div>

    {/* Second Core Value: Personalization */}
    <div className="text-center p-8 bg-white rounded-lg shadow-md hover:shadow-xl transition duration-300">
      {/* The yellow circular spot with the icon */}
      <div className="w-20 h-20 mx-auto bg-yellow-400 text-brown-800 rounded-full flex items-center justify-center text-3xl">
        <i className="fas fa-users"></i> {/* The users icon is here */}
      </div>
      <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-3 tracking-tight">Personalization</h3>
      <p className="text-gray-600 leading-relaxed">Your journey is unique. We tailor our tours to match your individual preferences.</p>
    </div>

    {/* Third Core Value: Sustainability */}
    <div className="text-center p-8 bg-white rounded-lg shadow-md hover:shadow-xl transition duration-300">
      {/* The yellow circular spot with the icon */}
      <div className="w-20 h-20 mx-auto bg-yellow-400 text-brown-800 rounded-full flex items-center justify-center text-3xl">
        <i className="fas fa-leaf"></i> {/* The leaf icon is here */}
      </div>
      <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-3 tracking-tight">Sustainability</h3>
      <p className="text-gray-600 leading-relaxed">We are dedicated to responsible tourism that respects local communities and the environment.</p>
    </div>
  </div>
</section>

        {/* Why Choose Us Section with Enhanced Visuals */}
        <section className="py-20 bg-white rounded-xl shadow-xl mt-12 px-8 md:px-16">
          <h2 className="text-4xl font-semibold text-green-600 mb-10 text-center tracking-tight">Why Choose Aman Tour and Travel?</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            <ul className="list-none space-y-6 text-lg text-gray-700 leading-relaxed">
              <li className="flex items-center">
                <i className="fas fa-check-circle text-green-500 mr-4 text-xl"></i> Expert local guides with profound knowledge.
              </li>
              <li className="flex items-center">
                <i className="fas fa-check-circle text-green-500 mr-4 text-xl"></i> Carefully crafted, personalized itineraries.
              </li>
              <li className="flex items-center">
                <i className="fas fa-check-circle text-green-500 mr-4 text-xl"></i> Commitment to ethical and sustainable travel.
              </li>
              <li className="flex items-center">
                <i className="fas fa-check-circle text-green-500 mr-4 text-xl"></i> Unwavering support and attention to every detail.
              </li>
              <li className="flex items-center">
                <i className="fas fa-check-circle text-green-500 mr-4 text-xl"></i> Transparent pricing and exceptional value.
              </li>
            </ul>
            <div className="fade-in">
              <img
                src="https://themosaichotel.co/wp-content/uploads/2018/10/maxresdefault.jpg"
                className="rounded-xl shadow-lg"
              />
            </div>
          </div>
        </section>
        <section
      className={`py-40 text-center rounded-xl shadow-2xl mt-16 transition-all duration-500 ease-in-out ${
        isMounted ? 'bg-gradient-to-br from-[#4CAF50] to-[#8B4513] opacity-100 transform-none' : 'bg-gray-200 opacity-0 scale-95'
      }`}
    >
      <div className="container mx-auto">
        <h2 className="text-5xl font-extrabold text-white mb-10 tracking-tight">
          Ready to Unveil the Wonders of Ethiopia?
        </h2>
        <p className="text-xl text-white text-opacity-80 leading-relaxed mb-16">
          Embark on an extraordinary journey. Let our expertise craft your perfect Ethiopian adventure.
        </p>
        <Link
          to="/contact"
          className="inline-block bg-[#FFD700] hover:bg-[#B8860B] text-[#8B4513] font-bold py-5 px-12 rounded-full text-lg transition duration-300 shadow-md focus:outline-none focus:ring-2 focus:ring-[#FFD700] focus:ring-opacity-75"
        >
          Connect With Our Experts
        </Link>
      </div>
    </section>

      </div>
    </div>
  );
}

export default AboutPage;