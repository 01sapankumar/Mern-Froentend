import React, { useContext, useEffect, useState } from 'react';
import AppContext from '../context/AppContext';
import './TableProduct.css';

const TableProduct = ({ cart }) => {
  const { decreaseQty, addToCart, removeFromCart } = useContext(AppContext);
  const [qty, setQty] = useState(0);
  const [price, setPrice] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    let totalQty = 0;
    let totalPrice = 0;
    if (cart?.items) {
      for (let i = 0; i < cart.items.length; i++) {
        totalQty += cart.items[i].qty;
        totalPrice += cart.items[i].price;
      }
    }
    setQty(totalQty);
    setPrice(totalPrice);

    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    handleResize(); // initial check
    window.addEventListener('resize', handleResize);

    return () => window.removeEventListener('resize', handleResize);
  }, [cart]);

  return (
    <div className="table-container">
      {isMobile ? (
        <div className="card-list">
          {cart?.items?.map((product) => (
            <div key={product._id} className="product-card">
              <img src={product.imgSrc} alt={product.title} className="card-image" />
              <div className="card-details">
                <h4>{product.title}</h4>
                <p><strong>Price:</strong> ₹{product.price}</p>
                <p><strong>Qty:</strong> {product.qty}</p>
                <div className="card-actions">
                  <button onClick={() => addToCart(product?.productId, product.title, product.price / product.qty, 1, product.imgSrc)}>➕</button>
                  <button onClick={() => decreaseQty(product?.productId, 1)}>➖</button>
                  <button onClick={() => {
                    if (window.confirm('Remove this item?')) {
                      removeFromCart(product?.productId);
                    }
                  }}>🗑️</button>
                </div>
              </div>
            </div>
          ))}
          <div className="card-total">
            <p><strong>Total Qty:</strong> {qty}</p>
            <p><strong>Total Price:</strong> ₹{price}</p>
          </div>
        </div>
      ) : (
        <table className="cart-table">
          <thead>
            <tr>
              <th>Image</th>
              <th>Title</th>
              <th>Price</th>
              <th>Qty</th>
              <th>Add</th>
              <th>Remove</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody>
            {cart?.items?.map((product) => (
              <tr key={product._id}>
                <td><img src={product.imgSrc} alt={product.title} className="product-img" /></td>
                <td>{product.title}</td>
                <td>₹{product.price}</td>
                <td>{product.qty}</td>
                <td><button onClick={() => addToCart(product?.productId, product.title, product.price / product.qty, 1, product.imgSrc)}>➕</button></td>
                <td><button onClick={() => decreaseQty(product?.productId, 1)}>➖</button></td>
                <td><button onClick={() => {
                  if (window.confirm('Remove this item?')) {
                    removeFromCart(product?.productId);
                  }
                }}>🗑️</button></td>
              </tr>
            ))}
            <tr className="total-row">
              <td colSpan="2">Total</td>
              <td><strong>₹{price}</strong></td>
              <td><strong>{qty}</strong></td>
              <td colSpan="3"></td>
            </tr>
          </tbody>
        </table>
      )}
    </div>
  );
};

export default TableProduct;
