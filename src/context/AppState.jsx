import React, { useEffect, useState } from 'react'
import AppContext from './AppContext'
import axios from 'axios';
import { ToastContainer, toast, Bounce } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const AppState = (props) => {

  //const url = "http://localhost:1000/api";
 const url = "https://mern-e-commerce-9opy.onrender.com/api";
  const [token, setToken] = useState();
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [filteredData, setFilteredData] = useState([]);
  const [user, setUser] = useState();
  const [cart, setCart] = useState([]);
  const [reload, setReload] = useState(false);
  const [userAddress, setUserAddress] = useState("");
  const [userOrder, setUserOrder] = useState([]);
  const [products, setProducts] = useState([]);

  useEffect(() => {
    async function fetchProduct() {
      const api = await axios.get(`${url}/product/all`, {
        headers: {
          "Content-Type": "Application/json"
        },
        withCredentials: true,
      });
     // console.log(api.data.products);
      setProducts(api.data.products);
      setFilteredData(api.data.products);
      userProfile();

    }
    fetchProduct();
    userCart();
    getAddress();
    user_Order ();
  }, [token,reload]);

  useEffect(() => {
    let lstoken = localStorage.getItem('token');
    //console.log(lstoken);
    if(lstoken){
      setToken(lstoken);
      setIsAuthenticated(true);
    }
  }, []);
  
  
  // register user 
  const register = async (name, email, password) => {
    const api = await axios.post(`${url}/user/register`, { name, email, password },
      {
        headers: {
          "Content-Type": "Application/json"
        },
        withCredentials: true,
      });
    //alert(api.data.message)
    toast.success(api.data.message, {
      position: "top-right",
      autoClose: 1900,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
      transition: Bounce,
    });
    // console.log("user register", api)
    return api.data;
  };

  // login user 
  const login = async (email, password) => {
    const api = await axios.post(`${url}/user/login`, { email, password },
      {
        headers: {
          "Content-Type": "Application/json"
        },
        withCredentials: true,
      });
    //alert(api.data.message)
    toast.success(api.data.message, {
      position: "top-right",
      autoClose: 1900,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
      transition: Bounce,
    });
    setToken(api.data.token);
    setIsAuthenticated(true);
    localStorage.setItem("token", api.data.token)
    // console.log("user login", api)
    return api.data;
  };

  //logout user 
  const logout = () =>{
  setIsAuthenticated(false);
  setToken("");
  localStorage.removeItem("token");
  toast.success("Logout Sucessfully...!", {
    position: "top-right",
    autoClose: 1900,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "dark",
    transition: Bounce,
    
  });
  };

  //user profile
  const userProfile = async () => {
    const api = await axios.get(`${url}/user/profile`, {
      headers: {
        "Content-Type": "Application/json",
        Auth: token,
      },
      withCredentials: true,
    });
   //console.log(api.data.Products);
   setUser(api?.data?.user)
  };

  //add to cart 
  const addToCart = async (productId, title, price, qty, imgSrc) => {
    const api = await axios.post(`${url}/cart/add`,{productId, title, price, qty, imgSrc },
       {
      headers: {
        "Content-Type": "Application/json",
        Auth:token
      },
      withCredentials: true,
    });
   // console.log(api);
   setReload(!reload);
    toast.success(api.data.message, {
      position: "top-right",
      autoClose: 1900,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
      transition: Bounce,
    });
    };

    // buy now 
    const buyNow = async (productId, title, price, qty, imgSrc) => {
      const api = await axios.post(`${url}/cart/add`,{productId, title, price, qty, imgSrc },
         {
        headers: {
          "Content-Type": "Application/json",
          Auth:token
        },
        withCredentials: true,
      });
     // console.log(api);
     setReload(!reload);
      toast.success(api.data.message, {
        position: "top-right",
        autoClose: 1900,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
        transition: Bounce,
      });
      };


    //user cart
    const userCart = async () => {
      const api = await axios.get(`${url}/cart/user`, {
        headers: {
          "Content-Type": "Application/json",
          Auth: token,
        },
        withCredentials: true,
      });
    // console.log("user cart", api);
    // setUser(api.data.user)
    setCart(api.data.cart);
      };

      // -- qty
      const decreaseQty = async (productId, qty) => {
        const api = await axios.post(`${url}/cart/--qty`,{productId, qty}, {
          headers: {
            "Content-Type": "Application/json",
            Auth: token,
          },
          withCredentials: true,
        });
        setReload(!reload);
        toast.success(api.data.message, {
          position: "top-right",
          autoClose: 1900,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "dark",
          transition: Bounce,
        });
      // console.log("user cart", api);
      // setUser(api.data.user)
    //  setCart(api.data.cart);
        };

        // remove from cart
      const removeFromCart = async (productId) => {
        const api = await axios.delete(`${url}/cart/remove/${productId}`, {
          headers: {
            "Content-Type": "Application/json",
            Auth: token,
          },
          withCredentials: true,
        });
        setReload(!reload);
        toast.success("Remove item from cart",api, {
          position: "top-right",
          autoClose: 1900,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "dark",
          transition: Bounce,
        });
      // console.log("user cart", api);
      // setUser(api.data.user)
    //  setCart(api.data.cart);
        };

         // clear cart
      const clearCart = async () => {
        const api = await axios.delete(`${url}/cart/clear`, {
          headers: {
            "Content-Type": "Application/json",
            Auth: token,
          },
          withCredentials: true,
        });
        setReload(!reload);
        toast.success(api.data.message, {
          position: "top-right",
          autoClose: 1900,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "dark",
          transition: Bounce,
        });
      // console.log("user cart", api);
      // setUser(api.data.user)
    //  setCart(api.data.cart);
        };

        // Add Address
        const shippingAddress = async (fullName, address, city, state, country, pincode, phoneNumber) => {
          const api = await axios.post(`${url}/address/add`,{fullName, address, city, state, country, pincode, phoneNumber}, {
            headers: {
              "Content-Type": "Application/json",
              Auth: token,
            },
            withCredentials: true,
          });
          setReload(!reload);
          toast.success(api.data.message, {
            position: "top-right",
            autoClose: 1900,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "dark",
            transition: Bounce,
          });
          return api.data;
        
          };


          //get user latest address 
          const getAddress = async () => {
            const api = await axios.get(`${url}/address/get`, {
              headers: {
                "Content-Type": "Application/json",
                Auth: token,
              },
              withCredentials: true,
            });
           // console.log("user address",api.data);
            setUserAddress(api.data.userAddress); 
          };

          //get user order  
          const user_Order = async () => {
            const api = await axios.get(`${url}/payment/userorder`, {
              headers: {
                "Content-Type": "Application/json",
                Auth: token,
              },
              withCredentials: true,
            });
           setUserOrder(api.data); 
          };
  return (
    <AppContext.Provider value={{
      products, register, login, url, token,
      setIsAuthenticated, isAuthenticated,
      filteredData, setFilteredData, logout,user,addToCart,cart,decreaseQty,removeFromCart,clearCart,
      shippingAddress,userAddress,userOrder,buyNow
    }}>
      {props.children} </AppContext.Provider>
  );
};

export default AppState;
