// src/components/HomePage/DiscoverySection.js
import React, { useState, useEffect, useCallback, useMemo } from 'react';
import { Link } from 'react-router-dom';

const useDynamicBackgroundImage = (images) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000); // Change image every 5 seconds

    return () => clearInterval(intervalId); // Cleanup on unmount
  }, [images.length]);

  return useMemo(() => ({
    backgroundImage: `url(${images[currentImageIndex]})`,
    transition: 'background-image 1s ease-in-out',
  }), [images, currentImageIndex]);
};

const useAnimatedText = (texts, delay = 2000) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % texts.length);
    }, delay);

    return () => clearInterval(intervalId);
  }, [texts.length, delay]);

  return texts[currentIndex];
};

function DiscoverySection() {
  const landscapeImages = useMemo(() => [
    'https://images.unsplash.com/photo-1564501049412-61c2a3083791?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fEV0aGlvcGlhbiUyMGxhbmRzY2FwZXxlbnwwfHwwfHwwfDA&auto=format&fit=crop&w=800&q=60',
    'https://static.vecteezy.com/system/resources/previews/006/467/889/non_2x/landscape-with-fog-in-mountains-sunset-photo.jpg',
    'https://t3.ftcdn.net/jpg/02/47/02/84/360_F_247028431_yPo8nwG9HuQN6oHyix8YnhYBeOXtF0c4.jpg',
  ], []);

  const backgroundStyle = useDynamicBackgroundImage(landscapeImages);
  const animatedHeading = useAnimatedText(['Adventure Awaits', 'Explore the Wonders', 'Unforgettable Journeys']);
  const animatedSubHeading = useAnimatedText(['Life is Short And', 'The world is wide!', 'Start Your Exploration Today!'], 3000);

  return (
    <section className="relative py-24 text-center bg-fixed bg-cover" style={backgroundStyle}>
      <div className="absolute inset-0 bg-[#4CAF50] opacity-70 transition duration-500"></div> {/* More vibrant green overlay */}
      <div className="container mx-auto relative z-10">
        <h2 className="text-4xl font-bold text-white mb-6 animate-fade-down">{animatedHeading}</h2>
        <h2 className="text-4xl font-bold text-[#FFD700] mb-8 animate-fade-up delay-200">{animatedSubHeading}</h2>
        <Link
          to="/tours"
          className="inline-block bg-[#FFD700] hover:bg-[#B8860B] text-white font-bold py-4 px-8 rounded-full text-lg shadow-lg transition duration-300 animate-bounce" // More luxurious button
        >
          Embark on Your Journey
        </Link>
      </div>
    </section>
  );
}

export default DiscoverySection;