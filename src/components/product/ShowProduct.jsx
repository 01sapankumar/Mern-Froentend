import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import AppContext from '../../context/AppContext';
import Loader from './Loader';
import './ShowProduct.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';

const ShowProduct = () => {
  const { filteredData, addToCart, loading } = useContext(AppContext);

  const activities = [
    { name: "Katarni Chura", image: "https://i.ibb.co/jZqTz8j4/Nandni-Raj-Katarni-Chura-500g-max-price-80-mini-price-65.png" },
    { name: "Katarni Rice", image: "https://i.ibb.co/V08zvdsH/f.png" },
    { name: "Khatta Meetha", image: "https://i.ibb.co/TqppGPkj/z1.png" },
    { name: "Mong Dal", image: "https://i.ibb.co/0pV5wMHH/a1.png" },
    { name: "Bhagalpuri Chura", image: "https://i.ibb.co/fz4dJLyk/Nandni-Raj-Katarni-Rice-5kg-max-Price-650-mini-price-525.png" },
    { name: "Chana Dal", image: "https://i.ibb.co/snW7gb3/Whats-App-Image-2025-06-15-at-11-59-21-2136e408.jpg" },
    { name: "Spick Namkeen", image: "https://i.ibb.co/j9yyG2G4/e1.png" },
  ];

  if (loading) return <Loader />;

  return (
    <>
      {/* Carousel */}
      <div id="carouselExampleCaptions" className="carousel slide product-carousel" data-bs-ride="carousel">
        <div className="carousel-indicators">
          {activities.slice(0, 3).map((_, i) => (
            <button key={i} type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to={i}
              className={i === 0 ? "active" : ""} aria-current={i === 0} aria-label={`Slide ${i + 1}`}></button>
          ))}
        </div>
        <div className="carousel-inner">
          {activities.slice(0, 3).map((act, i) => (
            <div key={i} className={`carousel-item ${i === 0 ? 'active' : ''}`}>
              <img src={act.image} className="d-block w-100 carousel-image" alt={`Slide ${i + 1}`} />
            </div>
          ))}
        </div>
        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
          <span className="carousel-control-prev-icon"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
          <span className="carousel-control-next-icon"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>

      {/* Highlights */}
      <div className="highlights-section">
        <div className="highlight-card">
          <img src="https://cdn-icons-png.flaticon.com/128/633/633611.png" alt="Free Shipping" className="highlight-icon" />
          <div>
            <h4>Free Shipping</h4>
            <p>Above ₹500</p>
          </div>
        </div>
        <div className="highlight-card">
          <img src="https://cdn-icons-png.flaticon.com/128/3523/3523885.png" alt="Cash on Delivery" className="highlight-icon" />
          <div>
            <h4>Cash on Delivery soon</h4>
            <p>on all orders</p>
          </div>
        </div>
        <div className="highlight-card">
          <img src="https://cdn-icons-png.flaticon.com/128/9901/9901222.png" alt="Easy Returns" className="highlight-icon" />
          <div>
            <h4>Easy Returns</h4>
            <p>for 7 days</p>
          </div>
        </div>
      </div>

      {/* Activity Section */}
      <div className="activity-section">
        <h2 className="activity-heading">Shop By Category</h2>
        <div className="activity-grid">
          {activities.map((activity, index) => (
            <div key={index} className="activity-card">
              <img src={activity.image} alt={activity.name} className="activity-img" />
              <div className="activity-label">{activity.name}</div>
            </div>
          ))}
        </div>
        <h3 className="activity-note">See to buy the product</h3>
      </div>

      {/* Product Intro */}
      <div className="product-intro">
        <h1>Discover Authentic, Handpicked Products — Freshly Delivered from Trusted Local Sources</h1>
      </div>

      {/* Product Grid */}
      <div className="product-grid">
        {filteredData?.map((product) => (
          <div key={product._id} className="product-card-wrapper">
            <div className="product-card">
              <Link to={`/product/${product._id}`} className="product-link">
                <img src={product?.imgSrc} loading="lazy" className="product-thumbnail" alt={product.title} />
              </Link>
              <div className="product-info">
                <h5 className="product-name">{product.title}</h5>
                <p className="product-description">
                  "Organically crafted, rich in protein, and carefully prepared by skilled hands — promoting a healthy and balanced lifestyle."
                  <br />
                  "प्राकृतिक रूप से जैविक, कुशल हाथों द्वारा निर्मित, प्रोटीन से भरपूर, सेहतमंद और संतुलित जीवनशैली के लिए उपयुक्त।"
                </p>
                <div className="product-actions">
                  <button
                    className="btn-price"
                    onClick={() => addToCart(product._id, product.title, product.price, 1, product.imgSrc)}
                  >
                    ₹{product.price}
                  </button>
                  <button
                    className="btn-add-cart"
                    onClick={() => addToCart(product._id, product.title, product.price, 1, product.imgSrc)}
                  >
                    Add to Cart
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Footer */}
      <div className="footer">
        <div className="footer-column">
          <h3>Product</h3>
          <ul>
            <li>Poha</li>
            <li>Nandni Raj Namkeen</li>
            <li>Masoor Dal</li>
            <li>Khatta Meetha</li>
            <li>Katarni Rice</li>
            <li>Spicy Namkeen</li>
          </ul>
        </div>
        <div className="footer-column">
          <h3>Our Benefits</h3>
          <ul>
            <li>Good for health</li>
            <li>High protein intake</li>
            <li>Natural and organic</li>
            <li>Rich in natural carbs</li>
            <li>High in vitamins</li>
            <li>Rich in essential minerals</li>
            <li>Free from harmful chemicals</li>
            <li>Supports immunity and well-being</li>
          </ul>
        </div>
        <div className="footer-column">
          <h3>Compare</h3>
          <ul>
            <li>Organic vs Conventional</li>
            <li>Handmade vs Machine</li>
            <li>Certified vs Non-Certified</li>
            <li>Local vs Imported</li>
            <li>No Preservatives</li>
            <li>Farm Fresh</li>
            <li>View More</li>
          </ul>
        </div>
        <div className="footer-column">
          <h3>Resources</h3>
          <ul>
            <li>Pricing</li>
            <li>Our Customers</li>
            <li>100% Organic Products</li>
            <li>Govt Certified</li>
            <li>FSSAI Certified</li>
            <li>Startup Program</li>
            <li>Handmade with Care</li>
            <li>Quality Guaranteed</li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default React.memo(ShowProduct);
