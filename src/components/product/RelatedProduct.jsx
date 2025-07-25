import React, { useContext, useState } from 'react'
import AppContext from '../../context/AppContext'
import { useEffect } from 'react';
import { Link } from 'react-router-dom';

const RelatedProduct = ({ category }) => {
    const {products, addToCart} = useContext(AppContext);
    const [relatedProduct, setRelatedProduct] = useState([])
    useEffect(() => {
      setRelatedProduct(products.filter((data)=>data.category?.toLowerCase() ==
    category?.toLowerCase()))
    }, [category,products])
    
  return (
    <>
<div className="Related-container">
  <h1>Related Product</h1>
  <div className="related-products">
    {relatedProduct?.map((product) => (
      <div key={product._id} className="related-card">
        <div className="card">
          <Link
            to={`/product/${product._id}`}
          >
            <img
              src={product?.imgSrc}alt="Product"/>
          </Link>
          <div className="card-body">
            <h5>{product?.title}</h5>
            <p>{product?.description}</p>
            <div className="related-btn">
              <button onClick={() =>
                addToCart(
                  product._id,
                  product.title,
                  product.price,
                  1,
                  product.imgSrc
                )
              }>
                ₹ {product?.price}
              </button>
              <button  onClick={() =>
                addToCart(
                  product._id,
                  product.title,
                  product.price,
                  1,
                  product.imgSrc
                )
              }>
                Add to Cart
              </button>
            </div>
          </div>
        </div>
      </div>
    ))}
  </div>
</div>


      </>
  )
};
export default RelatedProduct
