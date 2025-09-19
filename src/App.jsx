import { useState } from 'react';
import './App.css';
import Book from './Book.jsx';
import Books from "./data/books.json";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="app-container">
      <h1 className="header">Book Catalog</h1>

      <div className="books">
        <div className="new">
          <button className="new-button" onClick={() => alert('New clicked!')}>
            New
          </button>
        </div>

        <div className="book-list">
          {Books.map((book) => (
            <Book
              key={book.isbn13}
              price={book.price}
              image={book.image}
              url={book.url}
            />
          ))}
        </div>
      </div>

      <footer className="footer">
        <p className="footer-content">
          © Daniel Liu, 2025
        </p>
      </footer>
    </div>
  );
}

export default App;
