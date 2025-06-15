import React, { useContext, useState } from 'react';
import AppContext from '../../context/AppContext';
import { useNavigate } from 'react-router-dom';

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
    <>
      <div className="container d-flex justify-content-center my-5">
        <div
          className="p-4"
          style={{
            maxWidth: '600px',
            width: '100%',
            border: '4px solid yellow',
            borderRadius: '30px',
          }}
        >
          <h1
            className="text-center"
            style={{
              color: 'black',
              fontWeight: 'bold',
              fontFamily: "cursive",
            }}
          >
            User Login
          </h1>
          <form onSubmit={submitHandler} className="my-3">
            <div className="mb-3">
              <label
                htmlFor="exampleInputEmail1"
                className="form-label"
                style={{
                  color: 'black',
                  fontWeight: 'bold',
                  fontFamily: "cursive",
                }}
              >
                Email
              </label>
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
            <div className="mb-3">
              <label
                htmlFor="exampleInputPassword1"
                className="form-label"
                style={{
                  color: 'black',
                  fontWeight: 'bold',
                  fontFamily: "cursive",
                }}
              >
                Password
              </label>
              <input
                name="password"
                value={formData.password}
                onChange={onChangeHandler}
                type="password"
                className="form-control"
                id="exampleInputPassword1"
              />
            </div>
            <div className="d-grid col-12 mx-auto my-3">
              <button
                type="submit"
                className="btn btn-primary"
                style={{
                  fontWeight: 'bold',
                  border: '4px solid yellow',
                  fontFamily: "cursive",
                }}
              >
                Login
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default Login;
