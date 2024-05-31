import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Carousel } from 'react-bootstrap';
import './style.css';

const HomePage = () => {
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
    <div className="App">
      <header className="App-header">
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
          <div className="container">
            <a className="navbar-brand" href="#">TechShop</a>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <a className="nav-link" href="#home">Home</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#products">Products</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#about">About</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#contact">Contact</a>
                </li>
              </ul>
              <form className="d-flex">
                <input className="form-control me-2" type="search" placeholder="Search products..." aria-label="Search" value={searchTerm} onChange={handleSearchChange} />
              </form>
              <div className="App-cart ms-3">
                <span className="navbar-text">Cart ({cart.length})</span>
              </div>
            </div>
          </div>
        </nav>
        <Carousel className="App-banner">
          <Carousel.Item>
            <div className="d-block w-100 bg-primary text-white text-center py-5">
              <h2>Welcome to TechShop</h2>
              <p>Your one-stop shop for the latest tech gadgets</p>
              <button className="btn btn-light">Shop Now</button>
            </div>
          </Carousel.Item>
          <Carousel.Item>
            <div className="d-block w-100 bg-success text-white text-center py-5">
              <h2>Exclusive Deals</h2>
              <p>Get the best prices on top products</p>
              <button className="btn btn-light">Shop Now</button>
            </div>
          </Carousel.Item>
          <Carousel.Item>
            <div className="d-block w-100 bg-info text-white text-center py-5">
              <h2>New Arrivals</h2>
              <p>Check out the latest in tech</p>
              <button className="btn btn-light">Shop Now</button>
            </div>
          </Carousel.Item>
        </Carousel>
      </header>
      <main className="App-main container my-5">
        <section id="products" className="App-section">
          <h2>Featured Products</h2>
          <div className="row">
            {filteredProducts.map(product => (
              <div key={product.id} className="col-md-4 mb-4">
                <div className="card">
                  {/* <img src="https://via.placeholder.com/150" className="card-img-top" alt={product.name} /> */}
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
      </main>
      <footer className="App-footer bg-dark text-white text-center py-3">
        <p>&copy; 2024 TechShop. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default HomePage;
