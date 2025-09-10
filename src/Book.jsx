import React from 'react';
import './Book.css'; 

const Book = ({ cover, author, more }) => {
  return (
    <div className="book">
      <img src={cover} alt={`book-cover`} className="book-cover" />
      <div className="book-info">
        <h3 className="author">{author}</h3>
        <a 
          href={more} 
          className="learn-more" 
          target="_blank" 
          rel="noopener noreferrer"
        >
          Learn More
        </a>
      </div>
    </div>
  );
};

export default Book;
