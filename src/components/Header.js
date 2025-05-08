import React from 'react';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <div className="container mx-auto py-4 px-6 flex items-center justify-between">
        <Link to="/" className="font-bold text-xl text-green-500">Aman Tour and Travel</Link>
        <nav>
          <ul className="flex space-x-6">
            <li><Link to="/" className="hover:text-green-500">Home</Link></li>
            <li><Link to="/about" className="hover:text-green-500">About</Link></li>
            <li><Link to="/tours" className="hover:text-green-500">Tours</Link></li>
            <li><Link to="/activities" className="hover:text-green-500">Activities</Link></li>
            <li><Link to="/blog" className="hover:text-green-500">Blog</Link></li>
            <li><Link to="/contact" className="hover:text-green-500">Contact</Link></li>
          </ul>
        </nav>
        {/* Add any additional header elements here */}
      </div>
    </header>
  );
}

export default Header;