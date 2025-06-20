import React, { useContext, useState } from 'react';
import AppContext from '../../context/AppContext';
import { useNavigate } from 'react-router-dom';
import './Register.css'; // Link to external CSS

const Register = () => {
  const { register } = useContext(AppContext);
  const navigate = useNavigate();
  const [formData, setformData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const onChangeHandler = (e) => {
    const { name, value } = e.target;
    setformData({ ...formData, [name]: value });
  };

  const { name, email, password } = formData;
  const submitHandler = async (e) => {
    e.preventDefault();
    const result = await register(name, email, password);
    if (result.success) {
      navigate('/login');
    }
  };

  return (
    <div className="register-container">
      <div className="register-box">
        <h1 className="register-title">User Register</h1>
        <form onSubmit={submitHandler} className="register-form">
          <div className="form-group">
            <label htmlFor="exampleInputName" className="form-label">Name</label>
            <input
              name="name"
              value={formData.name}
              onChange={onChangeHandler}
              type="text"
              className="form-control"
              id="exampleInputName"
            />
          </div>
          <div className="form-group">
            <label htmlFor="exampleInputEmail1" className="form-label">Email</label>
            <input
              name="email"
              value={formData.email}
              onChange={onChangeHandler}
              type="email"
              className="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
            />
          </div>
          <div className="form-group">
            <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
            <input
              name="password"
              value={formData.password}
              onChange={onChangeHandler}
              type="password"
              className="form-control"
              id="exampleInputPassword1"
            />
          </div>
          <div className="submit-btn-container">
            <button type="submit" className="register-btn">Register</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Register;
