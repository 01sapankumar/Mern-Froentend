import React, { useState, useEffect, useContext} from 'react';
import AppContext from '../../context/AppContext';
import { useParams } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import RelatedProduct from './RelatedProduct';
const ProductDetail = () => {
  const {addToCart, buyNow} = useContext(AppContext)
    const [product, setProduct] = useState();
      const navigate = useNavigate();
    const {id} = useParams();
   // const url = "http://localhost:1000/api";
   const url = "https://mern-e-commerce-9opy.onrender.com/api";
    useEffect(() => {
      const fetchProduct = async ()=>{
        const api = await axios.get (`${url}/product/${id}`,{
            headers:{   
                "Content-Type":"Application/json"
            },
            withCredentials:true,
        })
       // console.log(api.data.product)
       setProduct(api.data.product)
       
       // setProducts(api.data.products)
      };
      fetchProduct();   
    }, [id]);
  return (
    <>
    <div className="product-page">
      <div className="products-img">
        <img src={product?.imgSrc} alt="" />
      </div>
      <div className="product-details">
      <h1>{product?.title}</h1>
      <p>{product?.description}</p>
      <h1>{"₹ "}{product?.price}</h1>
        <h3>{product?.category}</h3>
      
      <div className="product-btn">
        <button className="btn btn-danger mb-3" 
        onClick={() =>
          buyNow(
            product._id,
            product.title,
            product.price,
            1,
            product.imgSrc,
            navigate('/shipping')
          )
        }
        >Buy Now</button>
        <button className="btn btn-warning mb-3" 
        onClick={() =>
          addToCart(
            product._id,
            product.title,
            product.price,
            1,
            product.imgSrc
          )
        }
        >Add To-Cart</button>
      </div>
      </div>
    </div>
    <RelatedProduct category={product?.category} />
    </>
  );
};

export default ProductDetail;
