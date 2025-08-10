import React, { useContext, useState } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import AppContext from '../context/AppContext';
import Hamburger from 'hamburger-react';
import './Navbar.css';

const Navbar = () => {
  const [searchTerm, setsearchTerm] = useState('');
  const navigate = useNavigate();
  const location = useLocation();
  const { setFilteredData, products, logout, isAuthenticated, cart } = useContext(AppContext);
  const [showMenu, setShowMenu] = useState(false);

  const handleButtonToggle = () => {
    setShowMenu(!showMenu);
  };

  const handleCloseMenu = () => {
    setShowMenu(false);
  };

  const filterbyCategory = (cat) => {
    setFilteredData(products.filter((data) => data.category.toLowerCase() === cat.toLowerCase()));
  };

  const submitHandler = (e) => {
    e.preventDefault();
    navigate(`/product/search/${searchTerm}`);
    handleCloseMenu();
  };

  return (
    <div className="navbar-container">
      <div className="navbar">
        <Link to="/" className="navbar-logo" onClick={handleCloseMenu}>
          <img
            src="https://i.ibb.co/qLLLTRtb/brand-logo-page-0001.jpg"
            alt="Logo"
            className="navbar-logo-img"
          />
          {/* NEW: Company name beside logo */}
          <span className="navbar-brand-name">Nandni Raj</span>
        </Link>

        <form className="navbar-search" onSubmit={submitHandler}>
          <span className="material-symbols-outlined">search</span>
          <input
            value={searchTerm}
            onChange={(e) => setsearchTerm(e.target.value)}
            type="text"
            className="navbar-search-input"
            placeholder="Search Products"
          />
        </form>

        <div className="navbar-right">
          <div className="hamburger-toggle" onClick={handleButtonToggle}>
            <Hamburger toggled={showMenu} toggle={setShowMenu} />
          </div>

          <nav className={showMenu ? 'menu menu-show' : 'menu'}>
            {isAuthenticated ? (
              <>
                <Link to="/about" className="menu-link btn-black" onClick={handleCloseMenu}>About</Link>
                <Link to="/contect" className="menu-link btn-black" onClick={handleCloseMenu}>
                  <span>Help</span>
                </Link>
                <Link to="/cart" className="menu-link btn-black cart-button" onClick={handleCloseMenu}>
                  <span className="material-symbols-outlined">add_shopping_cart</span>
                  {cart?.items?.length > 0 && (
                    <span className="cart-badge">{cart.items.length}</span>
                  )}
                </Link>
                <Link to="/profile" className="menu-link btn-black" onClick={handleCloseMenu}>Orders</Link>
                <button
                  className="menu-link btn-black"
                  onClick={() => {
                    logout();
                    navigate('/');
                    handleCloseMenu();
                  }}
                >
                  Logout
                </button>
              </>
            ) : (
              <>
                <Link to="/login" className="menu-link btn-secondary" onClick={handleCloseMenu}>Login</Link>
                <Link to="/register" className="menu-link btn-info" onClick={handleCloseMenu}>Register</Link>
              </>
            )}
          </nav>
        </div>
      </div>

      {location.pathname === '/' && (
        <div className="navbar-categories">
          <span onClick={() => { setFilteredData(products); handleCloseMenu(); }}>No Filter</span>
          <span onClick={() => { filterbyCategory('grain'); handleCloseMenu(); }}>Grain</span>
          <span onClick={() => { filterbyCategory('rice'); handleCloseMenu(); }}>Rice</span>
          <span onClick={() => { filterbyCategory('puf-rice'); handleCloseMenu(); }}>Puf-Rice</span>
          <span onClick={() => { filterbyCategory('Dal'); handleCloseMenu(); }}>Dal</span>
          <span onClick={() => { filterbyCategory('Snacks'); handleCloseMenu(); }}>Snacks</span>
          <span onClick={() => { filterbyCategory('Poha'); handleCloseMenu(); }}>Poha</span>
          <span onClick={() => { filterbyCategory('Mixture'); handleCloseMenu(); }}>Mixture</span>
        </div>
      )}
    </div>
  );
};

export default Navbar;
