import React, { useState, useEffect, useContext } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';
import AppContext from '../../context/AppContext';
import RelatedProduct from './RelatedProduct';
import './ProductDetail.css'; // ✅ External CSS

const ProductDetail = () => {
  const { addToCart, buyNow } = useContext(AppContext);
  const [product, setProduct] = useState(null);
  const { id } = useParams();
  const navigate = useNavigate();

  const url = "https://mern-e-commerce-9opy.onrender.com/api";

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const res = await axios.get(`${url}/product/${id}`, {
          headers: {
            "Content-Type": "application/json"
          },
          withCredentials: true,
        });
        setProduct(res.data.product);
      } catch (err) {
        console.error("Error fetching product:", err);
      }
    };
    fetchProduct();
  }, [id]);

  return (
    <>
      <div className="product-detail-container">
        <div className="product-image-section">
          <img src={product?.imgSrc} alt={product?.title} />
        </div>

        <div className="product-info-section">
          <h1 className="product-title">{product?.title}</h1>
          <p className="product-description">{product?.description}</p>
          <h2 className="product-price">₹ {product?.price}</h2>
          <span className="product-category">{product?.category}</span>

          <div className="product-action-buttons">
            <button
              className="btn-buy-now"
              onClick={() =>
                buyNow(
                  product._id,
                  product.title,
                  product.price,
                  1,
                  product.imgSrc,
                  navigate('/shipping')
                )
              }
            >
              Buy Now
            </button>
            <button
              className="btn-add-to-cart"
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

      <RelatedProduct category={product?.category} />
    </>
  );
};

export default ProductDetail;
