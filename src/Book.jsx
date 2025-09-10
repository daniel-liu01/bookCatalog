import React from 'react';
import './Book.css'; 

const Book = ({ cover, title, author }) => {
  return (
    <div className="book-card">
      <img src={cover} alt={`${title} cover`} className="book-cover" />
      <div className="book-info">
        <h3 className="author">{author}</h3>
        <a className="learn-more">Learn More</a>
      </div>
    </div>
  );
};

export default Book;
