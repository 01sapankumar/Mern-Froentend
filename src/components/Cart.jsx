import React, { useContext, useEffect, useState } from 'react';
import AppContext from '../context/AppContext';
import { useNavigate } from 'react-router-dom';

const Cart = () => {
  const { cart, decreaseQty, addToCart, removeFromCart, clearCart } = useContext(AppContext);
  const [qty, setQty] = useState(0);
  const [price, setPrice] = useState(0);
  const navigate = useNavigate();

  useEffect(() => {
    let qty = 0;
    let price = 0;
    if (cart?.items) {
      for (let i = 0; i < cart?.items?.length; i++) {
        qty += cart.items[i].qty;
        price += cart.items[i].price;
      }
    }
    setPrice(price);
    setQty(qty);
  }, [cart]);

  return (
    <>
      {cart?.items?.length === 0 ? (
        <div className='text-center my-5'>
          <button
            className="custom-button"
            style={{
              fontWeight: 'bold',
              fontSize: '2rem',
              border: '3px solid green',
            }}
            onClick={() => navigate('/')}
          >
            Continue shopping..
          </button>
        </div>
      ) : (
        <div className='my-5 text-center' style={{paddingRight:'30px'}}>
          <button className="btn btn-info mx-3" style={{ fontWeight: 'bold', fontSize: '1.5rem'}}>
            Total Qty: {qty}
          </button>
          <button className="btn btn-warning mx-3" style={{ fontWeight: 'bold', fontSize: '1.5rem' }}>
            Total Price: {price}
          </button>
        </div>
      )}

      {cart?.items?.map((product) => (
        <div key={product._id} className="container text-center p-3 bg-dark my-5 cart-item"
        style={{border:"2px solid yellow", borderRadius:"20px",}}>
          <div className="cart-item-content">
            <div className="cart_img">
              <img
                src={product?.imgSrc}
                alt=""
                className="cart-item-image"
              />
            </div>

            <div className="cart_des">
              <h2>{product.title}</h2>
              <h3>{"₹ "}{product.price}</h3>
              <h3>Qty: {product.qty}</h3>
            </div>
            <div className="cart_action">
              <button
                className="btn btn-warning mx-3"
                style={{ fontWeight: 'bold' }}
                onClick={() => decreaseQty(product?.productId, 1)}
              >
                Qty--
              </button>
              <button
                className="btn btn-info mx-3"
                style={{ fontWeight: 'bold' }}
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
                Qty++
              </button>
              <button
                className="btn btn-danger mx-3"
                style={{ fontWeight: 'bold' }}
                onClick={() => {
                  if (confirm('Are you sure you want to remove this item from the cart?')) {
                    removeFromCart(product?.productId);
                  }
                }}
              >
                Remove item
              </button>
            </div>
          </div>
        </div>
      ))}

      {cart?.items?.length > 0 && (
        <div className="max">
        <div className="container text-center my-3">
          <button
            className='btn btn-warning mx-3'
            style={{ fontWeight: 'bold', border: '2px solid blue' }}
            onClick={() => navigate('/shipping')}
          >
            Check out
          </button>
          <button
            className='btn btn-danger mx-3 my-3'
            style={{ fontWeight: 'bold', border: '2px solid blue' }}
            onClick={clearCart}
          >
            Clear Cart
          </button>
        </div>
        </div>
      )}
    </>
  );
};

export default Cart;
