import React, { useEffect, useState } from 'react';
import Navbar from '../utils/Navbar';
import BlogCard from '../utils/BlogCard';
import '../styles/Blog.css';

function Blog() {
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then((response) => response.json())
      .then((data) => {
        setBlogs(data);
        setLoading(false);
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
        setLoading(false);
      });
  }, []);

  return (
    <div className="blogpage">
      <Navbar />
      <div className="blog-container">
        {loading ? (
          <p>Loading...</p>
        ) : (
          blogs.map((blog) => (
            <BlogCard key={blog.id} blog={blog} />
          ))
        )}
      </div>
    </div>
  );
}

export default Blog;

