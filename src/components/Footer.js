import React from 'react';

function Footer() {
  return (
    <footer className="bg-gray-100 py-8 text-center text-gray-600">
      <p>&copy; {new Date().getFullYear()} Aman Tour and Travel. All rights reserved.</p>
      {/* Add social media links, contact info, etc. here */}
    </footer>
  );
}

export default Footer;