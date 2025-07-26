import React, { useContext, useEffect, useState } from 'react';
import AppContext from '../context/AppContext';
import ShowOrderProducts from './ShowOrderProducts';
import { useNavigate } from 'react-router-dom';
import './OrderConfirmation.css';// ✅ External CSS

const OrderConfirmation = () => {
  const navigate = useNavigate();
  const { userOrder } = useContext(AppContext);
  const [latestOrder, setLatestOrder] = useState({});

  useEffect(() => {
    if (userOrder) {
      setLatestOrder(userOrder[0]);
    }
  }, [userOrder]);

  return (
    <div className="order-confirmation">
      <div className="confirmation-message">
        <h1>Your order has been confirmed!</h1>
        <h3>It will be delivered soon...</h3>
      </div>

      <div className="order-summary">
        <div className="summary-section">
          <h2>🛒 Ordered Items</h2>
          <ShowOrderProducts items={latestOrder?.orderItems} />
        </div>

        <div className="shipping-details">
          <h2>📦 Shipping Details</h2>
          <ul>
            <li><strong>Name:</strong> {latestOrder?.userShipping?.fullName || "Not provided"}</li>
            <li><strong>Phone:</strong> {latestOrder?.userShipping?.phoneNumber || "Not provided"}</li>
            <li><strong>Country:</strong> {latestOrder?.userShipping?.country || "Not provided"}</li>
            <li><strong>State:</strong> {latestOrder?.userShipping?.state || "Not provided"}</li>
            <li><strong>City:</strong> {latestOrder?.userShipping?.city || "Not provided"}</li>
            <li><strong>Pincode:</strong> {latestOrder?.userShipping?.pincode || "Not provided"}</li>
            <li><strong>Address:</strong> {latestOrder?.userShipping?.address || "Not provided"}</li>
            <li><strong>Order ID:</strong> {latestOrder?.orderId || "Not provided"}</li>
            <li><strong>Payment ID:</strong> {latestOrder?.paymentId || "Not provided"}</li>
            <li><strong>Status:</strong> {latestOrder?.payStatus || "Not provided"}</li>
          </ul>
        </div>
      </div>

      <div className="continue-btn">
        <button onClick={() => navigate('/')}>Continue Shopping</button>
      </div>
    </div>
  );
};

export default OrderConfirmation;
