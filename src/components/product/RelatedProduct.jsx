import React, { useContext, useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import AppContext from '../../context/AppContext';
import './RelatedProduct.css'; // ✅ External CSS

const RelatedProduct = ({ category }) => {
  const { products, addToCart } = useContext(AppContext);
  const [relatedProduct, setRelatedProduct] = useState([]);

  useEffect(() => {
    setRelatedProduct(
      products.filter(
        (data) => data.category?.toLowerCase() === category?.toLowerCase()
      )
    );
  }, [category, products]);

  return (
    <>
    <div className="related-container">
      <h2 className="related-heading">Related Products</h2>
      <div className="related-grid">
        {relatedProduct?.map((product) => (
          <div key={product._id} className="related-card">
            <Link to={`/product/${product._id}`}>
              <div className="related-image-wrapper">
                <img src={product?.imgSrc} alt={product?.title} />
              </div>
            </Link>
            <div className="related-card-body">
              <h3 className="related-title">{product?.title}</h3>
              <p className="related-description">{product?.description}</p>
              <div className="related-card-footer">
                <span className="related-price">₹ {product?.price}</span>
                <button
                  className="btn-related-cart"
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

export default RelatedProduct;
