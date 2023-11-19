import React, { useEffect, useState } from "react";
import Navbar from "../../components/Navbar";
import BlogCard from "../../components/BlogCard";
import "./index.css";

function Blog() {
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((response) => response.json())
      .then((data) => {
        setBlogs(data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
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
          blogs.map((blog) => <BlogCard key={blog.id} blog={blog} />)
        )}
      </div>
    </div>
  );
}

export default Blog;
