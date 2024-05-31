import React from 'react';
import { Carousel } from 'react-bootstrap';

function Home() {
  return (
    <div>
      <Carousel className="App-banner mb-5">
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

      <div className="container my-5">
        <section id="about" className="mb-5">
          <h2>About Us</h2>
          <p>
            At TechShop, we are dedicated to providing you with the best in tech gadgets. From the latest smartphones to cutting-edge laptops, we have everything you need to stay ahead of the curve.
          </p>
        </section>

        <section id="features" className="mb-5">
          <h2>Why Shop With Us?</h2>
          <div className="row">
            <div className="col-md-4">
              <div className="card text-center">
                <div className="card-body">
                  <h5 className="card-title">Free Shipping</h5>
                  <p className="card-text">We offer free shipping on all orders over $50.</p>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card text-center">
                <div className="card-body">
                  <h5 className="card-title">24/7 Support</h5>
                  <p className="card-text">Our support team is available around the clock to assist you.</p>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card text-center">
                <div className="card-body">
                  <h5 className="card-title">Money-Back Guarantee</h5>
                  <p className="card-text">Not satisfied with your purchase? We offer a 30-day money-back guarantee.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="testimonials" className="mb-5">
          <h2>What Our Customers Say</h2>
          <div className="row">
            <div className="col-md-4">
              <div className="card">
                <div className="card-body">
                  <p className="card-text">
                    "TechShop is my go-to place for all my tech needs. They always have the latest gadgets at great prices."
                  </p>
                  <footer className="blockquote-footer">John Doe</footer>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card">
                <div className="card-body">
                  <p className="card-text">
                    "Excellent customer service and fast shipping. Highly recommend TechShop!"
                  </p>
                  <footer className="blockquote-footer">Jane Smith</footer>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card">
                <div className="card-body">
                  <p className="card-text">
                    "I love the wide selection of products at TechShop. Always something new to find."
                  </p>
                  <footer className="blockquote-footer">Emily Johnson</footer>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

export default Home;


