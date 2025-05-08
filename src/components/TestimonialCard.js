import React from 'react';

function TestimonialCard({ testimonial }) {
  return (
    <div className="bg-white rounded-md shadow-md p-6">
      <p className="text-gray-700 italic mb-4">"{testimonial.text}"</p>
      <div className="flex items-center">
        {testimonial.image && (
          <img src={testimonial.image} alt={testimonial.name} className="w-10 h-10 rounded-full mr-3 object-cover" />
        )}
        <div className="text-sm">
          <h4 className="font-semibold text-green-600">{testimonial.name}</h4>
          {testimonial.location && <p className="text-gray-500">{testimonial.location}</p>}
        </div>
      </div>
    </div>
  );
}

export default TestimonialCard;