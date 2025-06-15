import React, { useContext } from 'react'
import AppContext from '../../context/AppContext'
import { Link } from 'react-router-dom'

const ShowProduct = () => {
  const {products, filteredData,addToCart}= useContext(AppContext)
  return (
    <>
    <div id="carouselExampleCaptions" className="carousel slide">
  <div className="carousel-indicators">
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
  </div>
  <div className="carousel-inner">
    <div className="carousel-item active">
      <img src="https://i.ibb.co/0pV5wMHH/a1.png" className="d-block w-100" alt="..." />
     
    </div>
    <div className="carousel-item">
      <img src="https://i.ibb.co/V08zvdsH/f.png" className="d-block w-100" alt="..." />
      
    </div>
    <div className="carousel-item">
      <img src="https://i.ibb.co/TqppGPkj/z1.png" className="d-block w-100" alt="..." />
    </div>
  </div>
  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
  </button>
</div>

<div className="Show-Pro">
<h1 class="hidden md:block text-black text-3xl font-bold text-center mt-5">
  Nandni Products Authentic, Handpicked & Delivered Fresh from the Manufacturer
</h1>

</div>

<div className="container-custom">
  {filteredData?.map((product) => (
    <div key={product._id} className="product-card-container">
      <div className="product-card"> 
        <Link to={`/product/${product._id}`} className="product-link">
          <img
            src={product?.imgSrc}
            className="product-image"
            alt={product.title}
          />
        </Link>
        <div className="product-card-body">
          <h5 className="product-title">{product.title}</h5>
<p className="product-description" style={{ fontWeight: 'bold' }}>
            "Organically crafted, rich in protein, and carefully prepared by skilled hands — promoting a healthy and balanced lifestyle."
            <br />"प्राकृतिक रूप से जैविक, कुशल हाथों द्वारा निर्मित, प्रोटीन से भरपूर, सेहतमंद और संतुलित जीवनशैली के लिए उपयुक्त।"
          </p>
          <div className="product-actions">
            <button className="price-button
            " onClick={() =>
              addToCart(
                product._id,
                product.title,
                product.price,
                1,
                product.imgSrc
              )
            }>{"\u20B9 "}{product.price}</button>
            <button
              className="add-to-cart-button"
              onClick={() =>
                addToCart(
                  product._id,
                  product.title,
                  product.price,
                  1,
                  product.imgSrc
                )
              }
            >
              Add to Cart
            </button>
          </div>
        </div>
      </div>
    </div>
  ))}
</div>

 <div className="footer-container">
      <div className="footer-section">
        <h3>Product</h3>
        <ul>
          <li>Poha</li>
          <li>Nandni Raj Namkeen </li>
          <li> Masoor Dal</li>
          <li>Khatta Meetha</li>
          <li>Katarni Rice</li>
          <li>Spicy Namkeen</li>
        </ul>
      </div>

      <div className="footer-section">
        <h3>Our Benefits</h3>
<ul>
  <li>Good for health</li>
  <li>High protein intake</li>
  <li>Natural and organic</li>
  <li>Rich in natural carbs</li>
  <li>High in vitamins</li>
  <li>Rich in essential minerals</li>
  <li>Free from harmful chemicals</li>
  <li>Supports immunity and well-being</li>
</ul>
      </div>

      <div className="footer-section">
       <h3>Compare</h3>
<ul>
  <li>Organic vs Conventional Farming</li>
  <li>Handmade vs Machine Processed</li>
  <li>Certified vs Non-Certified Products</li>
  <li>Locally Sourced vs Imported Ingredients</li>
  <li>Preservative-Free vs Chemical Preserved</li>
  <li>Farm Fresh vs Store Stocked</li>
  <li>View More</li>
</ul>

      </div>

      <div className="footer-section">
       <h3>Resources</h3>
<ul>
  <li>Pricing</li>
  <li>Our Customers</li>
  <li>100% Organic Products</li>
  <li>Certified by Govt. of India</li>
  <li>FSSAI Certified</li>
  <li>Startup Program</li>
  <li>Handmade with Care</li>
  <li>Quality Assurance Guaranteed</li>
</ul>

      </div>
    </div>
      
    </>
  )
}

export default ShowProduct
