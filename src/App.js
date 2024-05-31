import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Carousel } from 'react-bootstrap';
import './App.css';
import Home from './Home';

function App() {
  const [searchTerm, setSearchTerm] = useState('');
  const [cart, setCart] = useState([]);

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleAddToCart = (product) => {
    setCart([...cart, product]);
  };

  const products = [
    { id: 1, name: 'Product 1', price: 100 },
    { id: 2, name: 'Product 2', price: 200 },
    { id: 3, name: 'Product 3', price: 300 },
  ];

  const filteredProducts = products.filter(product =>
    product.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <div className="container">
              <Link className="navbar-brand" to="/">TechShop</Link>
              <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
              </button>
              <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                  <li className="nav-item">
                    <Link className="nav-link" to="/">Home</Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" to="/products">Products</Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" to="/about">About</Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" to="/contact">Contact</Link>
                  </li>
                </ul>
                <form className="d-flex">
                  <input className="form-control me-2" type="search" placeholder="Search products..." aria-label="Search" value={searchTerm} onChange={handleSearchChange} />
                  <button className="btn btn-outline-light" type="submit">Search</button>
                </form>
                <div className="App-cart ms-3">
                  <span className="navbar-text">Cart ({cart.length})</span>
                </div>
              </div>
            </div>
          </nav>
        </header>
        <main className="App-main container my-5">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/products" element={
              <section id="products" className="App-section">
                <h2>Featured Products</h2>
                <div className="row">
                  {filteredProducts.map(product => (
                    <div key={product.id} className="col-md-4 mb-4">
                      <div className="card">
                        <img src="https://via.placeholder.com/150" className="card-img-top" alt={product.name} />
                        <div className="card-body">
                          <h5 className="card-title">{product.name}</h5>
                          <p className="card-text">${product.price}</p>
                          <button className="btn btn-primary" onClick={() => handleAddToCart(product)}>Add to Cart</button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </section>
            } />
            {/* 添加其他路由，例如About和Contact */}
            <Route path="/about" element={<div>About Page</div>} />
            <Route path="/contact" element={<div>Contact Page</div>} />
          </Routes>
        </main>
        <footer className="App-footer bg-dark text-white text-center py-3">
          <p>&copy; 2024 TechShop. All rights reserved.</p>
        </footer>
      </div>
    </Router>
  );
}

export default App;

