import React, { useContext, useEffect, useState } from 'react';
import AppContext from '../context/AppContext';
import { useNavigate } from 'react-router-dom';
import './Cart.css';

const Cart = () => {
  const { cart, decreaseQty, addToCart, removeFromCart, clearCart } = useContext(AppContext);
  const [qty, setQty] = useState(0);
  const [price, setPrice] = useState(0);
  const navigate = useNavigate();

  useEffect(() => {
    let qty = 0;
    let price = 0;
    if (cart?.items) {
      for (let i = 0; i < cart.items.length; i++) {
        qty += cart.items[i].qty;
        price += cart.items[i].price;
      }
    }
    setQty(qty);
    setPrice(price);
  }, [cart]);

  if (!cart?.items?.length) {
    return (
      <div className="cart-empty">
        <button className="continue-btn" onClick={() => navigate('/')}>
          🛍️ Continue Shopping
        </button>
      </div>
    );
  }

  return (
    <div className="cart-container">
      {/* Summary */}
      <div className="cart-summary">
        <button className="summary-btn qty">🛒 Total Qty: {qty}</button>
        <button className="summary-btn price">💰 Total Price: ₹{price}</button>
      </div>

      {/* Cart Items */}
      <div className="cart-items">
        {cart.items.map((product) => (
          <div key={product._id} className="cart-card">
            <img src={product?.imgSrc} alt={product.title} className="cart-img" />
            <div className="cart-details">
              <h3>{product.title}</h3>
              <p>Price: ₹{product.price}</p>
              <p>Qty: {product.qty}</p>
            </div>
            <div className="cart-actions">
              <button
                className="qty-btn"
                onClick={() => decreaseQty(product?.productId, 1)}
              >
                ➖
              </button>
              <button
                className="qty-btn"
                onClick={() =>
                  addToCart(
                    product?.productId,
                    product.title,
                    product.price / product.qty,
                    1,
                    product.imgSrc
                  )
                }
              >
                ➕
              </button>
              <button
                className="remove-btn"
                onClick={() => {
                  if (confirm('Remove this item from cart?')) {
                    removeFromCart(product?.productId);
                  }
                }}
              >
                ❌ Remove
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Footer */}
      <div className="cart-footer">
        <button className="checkout-btn" onClick={() => navigate('/shipping')}>
          ✅ Proceed to Checkout
        </button>
        <button className="clear-btn" onClick={clearCart}>
          🗑️ Clear Cart
        </button>
      </div>
    </div>
  );
};

export default Cart;
