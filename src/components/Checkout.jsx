import React, { useContext, useEffect, useState } from 'react';
import AppContext from '../context/AppContext';
import TableProduct from './TableProduct';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import './Checkout.css'; // ✅ Import external CSS

const Checkout = () => {
  const { cart, userAddress, url, user, clearCart } = useContext(AppContext);
  const [qty, setQty] = useState(0);
  const [price, setPrice] = useState(0);
  const navigate = useNavigate();

  useEffect(() => {
    let totalQty = 0;
    let totalPrice = 0;
    cart?.items?.forEach(item => {
      totalQty += item.qty;
      totalPrice += item.price;
    });
    setQty(totalQty);
    setPrice(totalPrice);
  }, [cart]);

  const handlePayment = async () => {
    try {
      const orderResponse = await axios.post(`${url}/payment/checkout`, {
        amount: price,
        qty,
        cartItems: cart?.items,
        userShipping: userAddress,
        userId: user?._id,
      });

      const { orderId, amount: orderAmount } = orderResponse.data;

      const options = {
        key: "rzp_live_CfoAbUn93kzHSS",
        amount: orderAmount * 100,
        currency: "INR",
        name: "NANDANI",
        description: "NANDANI",
        order_id: orderId,
        handler: async function (response) {
          const paymentData = {
            orderId: response?.razorpay_order_id,
            paymentId: response?.razorpay_payment_id,
            signature: response?.razorpay_signature,
            amount: orderAmount,
            orderItems: cart?.items,
            userId: user?._id,
            userShipping: userAddress,
          };

          const api = await axios.post(`${url}/payment/verify-payment`, paymentData);
          if (api?.data?.success) {
            clearCart();
            navigate('/orderconfirmation');
          }
        },
        prefill: {
          name: "NANDHANI",
          email: "ksapan73@gmail.com",
          contact: "9631705894"
        },
        notes: {
          address: "Bhagalpur, Bihar"
        },
        theme: {
          color: "#d32f2f"
        }
      };

      const rzp = new window.Razorpay(options);
      rzp.open();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="checkout-section">
      <h2 className="checkout-title">🧾 Order Summary</h2>

      <div className="checkout-content">
        <div className="checkout-product-section animate-slide">
          <TableProduct cart={cart} />
        </div>

        <div className="checkout-address-section animate-fade">
          <h3>Shipping Address</h3>
          <ul className="address-list">
            <li><strong>Name:</strong> {userAddress?.fullName || "Not provided"}</li>
            <li><strong>Phone:</strong> {userAddress?.phoneNumber || "Not provided"}</li>
            <li><strong>Country:</strong> {userAddress?.country || "Not provided"}</li>
            <li><strong>State:</strong> {userAddress?.state || "Not provided"}</li>
            <li><strong>City:</strong> {userAddress?.city || "Not provided"}</li>
            <li><strong>Pincode:</strong> {userAddress?.pincode || "Not provided"}</li>
            <li><strong>Near By:</strong> {userAddress?.address || "Not provided"}</li>
          </ul>
        </div>
      </div>

      <div className="checkout-action">
        <button className="checkout-pay-btn" onClick={handlePayment}>
          💳 Pay ₹{price}
        </button>
      </div>
    </div>
  );
};

export default Checkout;
