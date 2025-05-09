import React, { useState, useEffect, useMemo } from 'react';
import BlogCard from '../components/BlogCard';

const primaryGreen = '#4CAF50';
const luxuryGold = '#FFD700';
const earthBrown = '#8B4513';

function BlogPage() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const samplePosts = useMemo(() => [
    {
      id: 1,
      title: 'The Majestic Simien Mountains: A Trekker\'s Paradise',
      excerpt: 'Embark on a visual journey through the breathtaking landscapes of the Simien Mountains, a UNESCO World Heritage site. Discover unique wildlife and stunning vistas that will leave you in awe.',
      imageUrl: 'https://magicethiopiatours.com/wp-content/uploads/2024/03/seme2-990x490.jpg',
      themeColor: primaryGreen,
      date: 'May 9, 2025',
      author: 'Adventure Ethiopia',
    },
    {
      id: 2,
      title: 'Omo Valley Tribes: A Cultural Immersion',
      excerpt: 'Step into the vibrant world of the Omo Valley tribes, where ancient traditions and unique customs thrive. Experience the rich cultural tapestry of this fascinating region.',
      imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQH45o68Uxa1SzQN2XX-HxHsE_FrqVYoOxthgERR2kVFb186IWl9N1QMAHdBFBk3QC7-MY&usqp=CAU',
      themeColor: earthBrown,
      date: 'April 28, 2025',
      author: 'Cultural Explorer',
    },
    {
      id: 3,
      title: 'The Historical Wonders of Gondar',
      excerpt: 'Explore the royal enclosure of Gondar, a testament to Ethiopia\'s rich imperial history. Discover magnificent castles and churches that whisper tales of bygone eras.',
      imageUrl: 'https://www.exoticca.com/_next/image?url=https%3A%2F%2Fuploads.exoticca.com%2Fglobal%2Fdestination%2Fpoi%2Fgondar.png&w=3840&q=75',
      date: 'April 15, 2025',
      author: 'History Buff',
    },
    {
      id: 4,
      title: 'Wildlife Encounters in Ethiopia\'s National Parks',
      excerpt: 'From the endemic Ethiopian wolf to the Gelada baboon, discover the diverse and fascinating wildlife that roams Ethiopia\'s stunning national parks.',
      imageUrl: 'https://overlandethiopiatours.com/wp-content/uploads/Attractions-natural-national-parks-in-ethiopia-CHEBERA-CHURCHURA-overland-ethiopia-tour.jpg',
      themeColor: primaryGreen,
      date: 'March 22, 2025',
      author: 'Nature Lover',
    },
    {
      id: 5,
      title: 'The Coffee Ceremony: A Taste of Ethiopian Culture',
      excerpt: 'Experience the intricate and aromatic Ethiopian coffee ceremony, a deeply ingrained cultural tradition that embodies hospitality and community.',
      imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTrHmWTY2_vqtqzhm77vTvPvytVl9mj6uh0vg&s',
      themeColor: earthBrown,
      date: 'March 10, 2025',
      author: 'Food & Culture Enthusiast',
    },
    {
      id: 6,
      title: 'Trekking the Bale Mountains: An Alpine Adventure',
      excerpt: 'Discover the unique Afro-alpine ecosystem of the Bale Mountains, home to diverse flora and fauna and offering incredible trekking opportunities.',
      imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTamiLly4WuLMR1AYAn3z_ueOiefqRG0-yYNQ&s',
      date: 'February 18, 2025',
      author: 'Adventure Seeker',
    },
  ], []);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        setLoading(true);
        setTimeout(() => {
          setPosts(samplePosts);
          setLoading(false);
        }, 1200);
      } catch (err) {
        setError(err);
        setLoading(false);
      }
    };

    fetchPosts();
  }, [samplePosts]);

  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen bg-gray-100">
        <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-b-4 border-green-500"></div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative" role="alert">
        <strong className="font-bold">Error!</strong>
        <span className="block sm:inline">{error.message}</span>
      </div>
    );
  }

  return (
    <div className="bg-gray-50 py-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
          <h1 className="text-4xl font-extrabold tracking-tight text-gray-900 sm:text-5xl" style={{ color: primaryGreen }}>
            Explore Our Travel Blog
          </h1>
          <p className="mt-3 text-xl text-gray-500 sm:mt-4">
            Insights, stories, and tips for your Ethiopian adventures.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {posts.map((post) => (
            <BlogCard key={post.id} post={post} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default BlogPage;