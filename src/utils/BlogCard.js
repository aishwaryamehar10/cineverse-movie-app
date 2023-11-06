import React from 'react';
import '../styles/BlogCard.css';
import {Link} from 'react-router-dom';

function BlogCard({ blog }) {
  return (
    <div className="blog-card-container">
      <div className="blog-card">
        <h2 className="blog-title">{blog.title}</h2>
       <p className="blog-body">{blog.body}</p>
        <div className="blog-link">
          <Link to = "/">Read More</Link>
        </div>
      </div>
    </div>
  );
}

export default BlogCard;

