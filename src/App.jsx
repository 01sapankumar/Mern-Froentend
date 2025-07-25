import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import ShowProduct from './components/product/ShowProduct';
import ProductDetail from './components/product/ProductDetail';
import SearchProduct from './components/product/SearchProduct';
import Navbar from './components/Navbar';
import Register from './components/user/Register';
import Login from './components/user/Login';
import Profile from './components/user/Profile';
import Cart from './components/Cart';
import Address from './components/Address';
import Chekout from './components/Checkout';
import Contect from './components/user/Contect';
import About from './components/user/About';
import OrderConfirmation from './components/OrderConfirmation';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Loader from './components/product/Loader';
// Wrapper to detect route change and show loader
const RouteChangeLoader = ({ children }) => {
  const location = useLocation();
  const [showLoader, setShowLoader] = useState(false);

  useEffect(() => {
    setShowLoader(true);
    const timeout = setTimeout(() => {
      setShowLoader(false);
    }, 2000); // loader shows for 600ms on every route change
    return () => clearTimeout(timeout);
  }, [location]);

  return (
    <>
      {showLoader && <Loader />}
      {!showLoader && children}
    </>
  );
};

const App = () => {
  return (
    <Router>
      <Navbar />
      <ToastContainer />
      <RouteChangeLoader>
        <Routes>
          <Route path="/" element={<ShowProduct />} />
          <Route path="/product/search/:term" element={<SearchProduct />} />
          <Route path="/product/:id" element={<ProductDetail />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/shipping" element={<Address />} />
          <Route path="/checkout" element={<Chekout />} />
          <Route path="/contect" element={<Contect />} />
          <Route path="/about" element={<About />} />
          <Route path="/orderconfirmation" element={<OrderConfirmation />} />
        </Routes>
      </RouteChangeLoader>
    </Router>
  );
};

export default App;
