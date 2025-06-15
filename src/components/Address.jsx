import React, { useContext, useState, useEffect } from 'react';
import AppContext from '../context/AppContext';
import { useNavigate } from 'react-router-dom';

const Address = () => {
  const { shippingAddress, userAddress } = useContext(AppContext);
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    fullName: "",
    address: "",
    city: "",
    state: "",
    country: "",
    pincode: "",
    phoneNumber: "",
  });

  useEffect(() => {
    if (userAddress) {
      setFormData({
        fullName: userAddress.fullName || "",
        address: userAddress.address || "",
        city: userAddress.city || "",
        state: userAddress.state || "",
        country: userAddress.country || "",
        pincode: userAddress.pincode || "",
        phoneNumber: userAddress.phoneNumber || "",
      });
    }
  }, [userAddress]);

  const onChangeHandler = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const { fullName, address, city, state, country, pincode, phoneNumber } = formData;

  const submitHandler = async (e) => {
    e.preventDefault();
    
    // Call the shippingAddress function to save the new address
    const result = await shippingAddress(fullName, address, city, state, country, pincode, phoneNumber);

    if (result.success) {
      // Clear form data only if the address is successfully updated
      setFormData({
        fullName: "",
        address: "",
        city: "",
        state: "",
        country: "",
        pincode: "",
        phoneNumber: "",
      });
      navigate('/checkout');
    }
  };

  return (
    <div className="container my-3 p-4" style={{ border: '4px solid yellow', borderRadius: '30px' }}>
      <h1 className="text-center" style={{ color: "black", fontWeight: "bold" }}>Shipping Address</h1>
      <form onSubmit={submitHandler} className="my-3">

        <div className="row">
          <div className="mb-3 col-md-4">
            <label htmlFor="fullName" className="form-label" style={{ color: "black", fontWeight: "bold" }}>Full Name</label>
            <input
              name="fullName"
              value={formData.fullName}
              onChange={onChangeHandler}
              type="text"
              className="form-control bg-dark text-light"
              id="fullName"
            />
          </div>
          <div className="mb-3 col-md-4">
            <label htmlFor="country" className="form-label" style={{ color: "black", fontWeight: "bold" }}>Country</label>
            <input
              name="country"
              value={formData.country}
              onChange={onChangeHandler}
              type="text"
              className="form-control bg-dark text-light"
              id="country"
            />
          </div>
          <div className="mb-3 col-md-4">
            <label htmlFor="city" className="form-label" style={{ color: "black", fontWeight: "bold" }}>City</label>
            <input
              name="city"
              value={formData.city}
              onChange={onChangeHandler}
              type="text"
              className="form-control bg-dark text-light"
              id="city"
            />
          </div>
        </div>

        <div className="row">
          <div className="mb-3 col-md-4">
            <label htmlFor="state" className="form-label" style={{ color: "black", fontWeight: "bold" }}>State</label>
            <input
              name="state"
              value={formData.state}
              onChange={onChangeHandler}
              type="text"
              className="form-control bg-dark text-light"
              id="state"
            />
          </div>
          <div className="mb-3 col-md-4">
            <label htmlFor="pincode" className="form-label" style={{ color: "black", fontWeight: "bold" }}>Pincode</label>
            <input
              name="pincode"
              value={formData.pincode}
              onChange={onChangeHandler}
              type="number"
              className="form-control bg-dark text-light"
              id="pincode"
            />
          </div>
          <div className="mb-3 col-md-4">
            <label htmlFor="phoneNumber" className="form-label" style={{ color: "black", fontWeight: "bold" }}>Phone Number</label>
            <input
              name="phoneNumber"
              value={formData.phoneNumber}
              onChange={onChangeHandler}
              type="number"
              className="form-control bg-dark text-light"
              id="phoneNumber"
            />
          </div>
        </div>

        <div className="row">
          <div className="mb-3">
            <label htmlFor="address" className="form-label" style={{ color: "black", fontWeight: "bold" }}>Address</label>
            <textarea
              name="address"
              value={formData.address}
              onChange={onChangeHandler}
              className="form-control bg-dark text-light"
              id="address"
              rows="3"
            />
          </div>
        </div>

        <div className="d-grid col-6 mx-auto my-3">
          <button
            type="submit"
            className="btn btn-primary"
            style={{ fontWeight: 'bold', border: "5px solid green" }}
            disabled={!formData.fullName || !formData.country || !formData.city || !formData.state || !formData.pincode || !formData.phoneNumber || !formData.address}
          >
            Submit
          </button>
        </div>
      </form>

      {userAddress && (
        <div className="d-grid col-6 mx-auto my-3">
          <button
            className="btn btn-warning"
            onClick={() => navigate('/checkout')}
            style={{ fontWeight: 'bold', border: "5px solid green" }}
          >
            Use Old Address
          </button>
        </div>
      )}
    </div>
  );
};

export default Address;
