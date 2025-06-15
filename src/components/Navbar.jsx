import React, { useContext, useState } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import AppContext from '../context/AppContext';
import Hamburger from 'hamburger-react'

const Navbar = () => {
  const [searchTerm, setsearchTerm] = useState('');
  const navigate = useNavigate();
  const location = useLocation();
  const { setFilteredData, products, logout, isAuthenticated, cart } = useContext(AppContext);
  const [showMenu, setShowMenu] = useState(false);
  const handleButtonToggle =()=>{
    setShowMenu(!showMenu);
  }
  

  const filterbyCategory = (cat) => {
    setFilteredData(products.filter((data) => data.category.toLowerCase() === cat.toLowerCase()));
  };
  
  const submitHandler = (e) => {
    e.preventDefault();
    navigate(`/product/search/${searchTerm}`);
  };

  return (
    <>
      <div className="nav sticky-top">
        <div className="nav_bar d-flex justify-content-between align-items-center" style={{fontWeight:'bold'}}>        
          <Link to={'/'} className="left" style={{ textDecoration: 'none', color: 'black' }}>
     <div
  style={{
    display: 'inline-block',
    padding: '8px 16px',
    borderRadius: '12px',
    border: '2px solidrgb(8, 8, 8)',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.94)',
    transition: 'transform 0.3s ease',
    backgroundColor: '#ffffff',
  }}
  onMouseEnter={e => e.currentTarget.style.transform = 'scale(1.05)'}
  onMouseLeave={e => e.currentTarget.style.transform = 'scale(1)'}
>
  <img
    src="https://i.ibb.co/qLLLTRtb/brand-logo-page-0001.jpg"
    alt="Logo"
    style={{
      height: '60px',
      borderRadius: '8px',
      display: 'block',
    }}
  />
</div>

          </Link>    
                
          <form className="search_bar d-flex" onSubmit={submitHandler}>
            <span className="material-symbols-outlined">search</span>{' '}
            <input
              value={searchTerm}
              onChange={(e) => setsearchTerm(e.target.value)}
              type="text"
              className="form-control"
              placeholder="Search Products"
            />
          </form>
          <div className="right d-flex align-items-center">
          <div className="ham-menu">
              <button onClick={handleButtonToggle}>
              <Hamburger />
              </button>
            </div>

            {isAuthenticated && (
              <>
              <nav className={showMenu ? "menu-mobile": "menu-web"}>
                <ul>
                  
               <Link to={"/about"} type="button" className="btn btn-info mx-4"
               style={{fontWeight:'bold',border:"2px solid yellow"}}
               >About
            </Link>
            
            
            <Link to={"/contect"} type="button" className="btn btn-outline-warning">
            <span className="material-symbols-outlined">help</span>
            </Link> 
            
            <Link
                  to={'/cart'}
                  className="btn btn-success position-relative mx-3"
                  style={{ fontWeight:'bold',border:"2px solid yellow" }}
                >
                  <span className="material-symbols-outlined">add_shopping_cart</span>
                  {cart?.items?.length > 0 && (
                    <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                      {cart?.items?.length}
                      <span className="visually-hidden">unread-messages</span>
                    </span>
                  )}
                </Link>
            
            
            <Link to={'/profile'} className="btn btn-primary mx-3" style={{ border: '2px solid yellow', fontWeight: 'bold' }}>
                  Orders
                </Link>
            
            <button
                  className="btn btn-danger mx-3 my-3"
                  style={{ border: '2px solid yellow', fontWeight: 'bold' }}
                  onClick={() => {
                    logout();
                    navigate('/');
                  }}
                >
                  Logout
                </button>   
                </ul>
                </nav>
                
              </>
            )}
            {!isAuthenticated && (
              <>
              <nav className={showMenu ? "menu-mobile": "menu-web"}>
                <div className="my-3 mx-0.3 me-4">

                <Link to={'/login'} className="btn btn-secondary mx-3 " style={{ border: '2px solid yellow', fontWeight: 'bold', }}>
                  Login
                </Link>
                <Link
                  to={'/register'}
                  className="btn btn-info mx-3 my-2"
                  style={{ border: '2px solid yellow', fontWeight: 'bold' }}
                >
                  Register
                </Link>
                </div>
                </nav>
                
              </>
            )}
           
  
          </div>
        </div>
        


        {location.pathname == '/' && (
          <div className="sub_bar d-flex justify-content-start flex-wrap" style={{fontWeight:'bold',fontFamily:"cursive"}}>
            <div className="item" onClick={() => setFilteredData(products)}>
              No Filter
            </div>
            <div className="item" onClick={() => filterbyCategory('grains')}>
              Grains
            </div>
            <div className="item" onClick={() => filterbyCategory('rice')}>
              Rice
            </div>
            <div className="item" onClick={() => filterbyCategory('puf-rice')}>
              Puf-Rice
            </div>
            <div className="item" onClick={() => filterbyCategory('Dal')}>
              Dal
            </div>
            <div className="item" onClick={() => filterbyCategory('Snacks')}>
              Snacks
            </div>
            <div className="item" onClick={() => filterbyCategory('Poha')}>
              Poha
            </div>
            <div className="item" onClick={() => filterbyCategory('Mixture')}>
              Mixture
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default Navbar;
