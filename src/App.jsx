import { useState } from 'react';
import './App.css';
import Book from './Book.jsx';


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
        <Book 
    cover="/public/breath.jpg" 
    author="by Paul Kalanithi" 
  />
  <Book 
    cover="/public/butter.jpg" 
    author="by Asako Yuzuki" 
  />

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