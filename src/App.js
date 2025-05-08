import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import ToursPage from './pages/ToursPage';
import ActivitiesPage from './pages/ActivitiesPage';
import BlogPage from './pages/BlogPage';
import ContactPage from './pages/ContactPage';
import TourDetailsPage from './pages/TourDetailsPage';
import MainLayout from './layouts/MainLayout'; // Import the layout component
import './App.css';

function App() {
  return (
    <Router>
      <MainLayout>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/tours" element={<ToursPage />} />
          <Route path="/activities" element={<ActivitiesPage />} />
          <Route path="/blog" element={<BlogPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/tours/:id" element={<TourDetailsPage />} />
          {/* Add more routes as you create more pages */}
        </Routes>
      </MainLayout>
    </Router>
  );
}

export default App;