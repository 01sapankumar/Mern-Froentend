import React, { useContext, useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import AppContext from '../../context/AppContext';
import './SearchProduct.css'; // ✅ External CSS

const SearchProduct = () => {
  const { products, addToCart } = useContext(AppContext);
  const [searchResults, setSearchResults] = useState([]);
  const { term } = useParams();

  useEffect(() => {
    setSearchResults(
      products.filter((data) =>
        data?.title?.toLowerCase().includes(term.toLowerCase())
      )
    );
  }, [term, products]);

  return (
    <>
      <div className="search-results-container">
        <div className="product-grid">
          {searchResults?.map((product) => (
            <div key={product._id} className="product-card">
              <Link to={`/product/${product._id}`} className="product-link">
                <img
                  src={product?.imgSrc}
                  alt={product?.title}
                  className="product-image"
                />
              </Link>
              <div className="product-info">
                <h5 className="product-title">{product?.title}</h5>
                <div className="product-actions">
                  <button className="price-button">₹ {product?.price}</button>
                  <button
                    className="add-cart-button"
                    onClick={() =>
                      addToCart(
                        product._id,
                        product.title,
                        product.price,
                        1,
                        product.imgSrc
                      )
                    }
                  >
                    Add to Cart
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="footer-container">
        <div className="footer-section">
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
        <div className="footer-section">
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
        <div className="footer-section">
          <h3>Compare</h3>
          <ul>
            <li>Organic vs Conventional Farming</li>
            <li>Handmade vs Machine Processed</li>
            <li>Certified vs Non-Certified Products</li>
            <li>Locally Sourced vs Imported Ingredients</li>
            <li>Preservative-Free vs Chemical Preserved</li>
            <li>Farm Fresh vs Store Stocked</li>
            <li>View More</li>
          </ul>
        </div>
        <div className="footer-section">
          <h3>Resources</h3>
          <ul>
            <li>Pricing</li>
            <li>Our Customers</li>
            <li>100% Organic Products</li>
            <li>Certified by Govt. of India</li>
            <li>FSSAI Certified</li>
            <li>Startup Program</li>
            <li>Handmade with Care</li>
            <li>Quality Assurance Guaranteed</li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default SearchProduct;
