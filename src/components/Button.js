import React from 'react';

function Button({ label, onClick, className, type = 'button', disabled = false }) {
  return (
    <button
      type={type}
      onClick={onClick}
      className={`inline-flex items-center justify-center px-4 py-2 border border-transparent rounded-md font-medium text-white bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500 ${className}`}
      disabled={disabled}
    >
      {label}
    </button>
  );
}

export default Button;