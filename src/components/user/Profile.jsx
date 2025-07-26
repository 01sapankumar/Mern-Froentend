import React, { useContext } from 'react';
import AppContext from '../../context/AppContext';
import ShowOrderProducts from '../ShowOrderProducts';
import { useNavigate } from 'react-router-dom';
import './Profile.css'; // ✅ External CSS

const Profile = () => {
  const { user, userOrder } = useContext(AppContext);
  const navigate = useNavigate();

  return (
    <div className="profile-container">
      <div className="user-info">
        <h1>Welcome, {user?.name}</h1>
        <h3>{user?.email}</h3>
        <h2>Your Orders: {userOrder?.length}</h2>
      </div>

      <div className="orders-table-wrapper">
        <table className="orders-table">
          <thead>
            <tr>
              <th>Order Items</th>
              <th>Order Details & Shipping Address</th>
            </tr>
          </thead>
          <tbody>
            {userOrder?.map((product) => (
              <tr key={product?._id}>
                <td>
                  <ShowOrderProducts items={product?.orderItems} />
                </td>
                <td>
                  <ul>
                    <li><strong>Order ID:</strong> {product?.orderId}</li>
                    <li><strong>Payment ID:</strong> {product?.paymentId}</li>
                    <li><strong>Status:</strong> {product?.payStatus}</li>
                    <li><strong>Name:</strong> {product?.userShipping?.fullName}</li>
                    <li><strong>Phone:</strong> {product?.userShipping?.phoneNumber}</li>
                    <li><strong>Country:</strong> {product?.userShipping?.country}</li>
                    <li><strong>State:</strong> {product?.userShipping?.state}</li>
                    <li><strong>Pincode:</strong> {product?.userShipping?.pincode}</li>
                    <li><strong>Address:</strong> {product?.userShipping?.address}</li>
                  </ul>
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        <div className="back-to-shopping">
          <button onClick={() => navigate('/')}>Continue Shopping</button>
        </div>
      </div>
    </div>
  );
};

export default Profile;
