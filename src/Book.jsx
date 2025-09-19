import React from 'react';
import './Book.css'; 
import Books from "./data/books.json"

const Book = ({ image, price, url }) => {
  return (
    <div className="book">
      <img src={image} alt="book-cover" className="book-cover" />
      <div className="book-info">
        <p className="price">{price}</p>
        <a
          href={url}
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

