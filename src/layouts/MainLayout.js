import React from 'react';
import Header from '../components/Header'; // Import the Header component
import Footer from '../components/Footer'; // Import the Footer component

function MainLayout({ children }) {
  return (
    <div className="bg-beige-50"> {/* Apply a background color */}
      <Header />
      <main className="container mx-auto py-8"> {/* Container for page content */}
        {children}
      </main>
      <Footer />
    </div>
  );
}

export default MainLayout;