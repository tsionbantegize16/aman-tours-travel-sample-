import React from 'react';
import { Link } from 'react-router-dom';

function BlogCard({ post }) {
  return (
    <div className="bg-white rounded-md shadow-md overflow-hidden">
      <img src={post.imageUrl} alt={post.title} className="w-full h-48 object-cover" />
      <div className="p-4">
        <h3 className="font-semibold text-lg text-green-600 mb-2">{post.title}</h3>
        <p className="text-gray-700 text-sm">{post.excerpt}</p>
        <Link to={`/blog/${post.id}`} className="inline-block mt-2 text-blue-500 hover:text-blue-700">Read More</Link>
      </div>
    </div>
  );
}

export default BlogCard;