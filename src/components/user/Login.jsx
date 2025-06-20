import React, { useContext, useState } from 'react';
import AppContext from '../../context/AppContext';
import { useNavigate } from 'react-router-dom';
import './Login.css'; // Import external CSS

const Login = () => {
  const { login } = useContext(AppContext);
  const navigate = useNavigate();
  const [formData, setformData] = useState({
    email: "",
    password: "",
  });

  const onChangeHandler = (e) => {
    const { name, value } = e.target;
    setformData({ ...formData, [name]: value });
  };

  const { email, password } = formData;
  const submitHandler = async (e) => {
    e.preventDefault();
    const result = await login(email, password);
    if (result.success) {
      navigate("/");
    }
  };

  return (
    <div className="login-container">
      <div className="login-box">
        <h1 className="login-title">User Login</h1>
        <form onSubmit={submitHandler} className="login-form">
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
            <button type="submit" className="login-btn">Login</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
