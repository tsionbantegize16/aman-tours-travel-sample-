import React, { useState, useEffect } from 'react';
import BlogCard from '../components/BlogCard';

function BlogPage() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        setTimeout(() => {
          const samplePosts = [
            { id: 1, title: 'Exploring Simien Mountains', excerpt: 'A trek through the breathtaking Simien Mountains...', imageUrl: 'https://via.placeholder.com/400x200?text=Simien+Blog' },
            { id: 2, title: 'Discovering Omo Valley Tribes', excerpt: 'An encounter with the unique tribes of the Omo Valley...', imageUrl: 'https://via.placeholder.com/400x200?text=Omo+Blog' },
          ];
          setPosts(samplePosts);
          setLoading(false);
        }, 1000);
      } catch (err) {
        setError(err);
        setLoading(false);
      }
    };
    fetchPosts();
  }, []);

  if (loading) {
    return <div>Loading blog posts...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <div className="container mx-auto py-8">
      <h1 className="text-3xl font-semibold text-green-700 mb-6">Our Blog</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {posts.map((post) => (
          <BlogCard key={post.id} post={post} />
        ))}
      </div>
    </div>
  );
}

export default BlogPage;