import React from 'react';
import { Link } from 'react-router-dom';
import './BlogPost.css';

function BlogPost({ title, image, content, link }) {
  return (
    <article className="blog-post">
      <h2>{title}</h2>
      <Link to={link}>
        <img src={image} alt={title} className="blog-image" />
      </Link>
      <p>{content}</p>
    </article>
  );
}

export default BlogPost;
