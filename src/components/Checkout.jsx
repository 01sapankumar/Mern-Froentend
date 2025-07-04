import React, { useContext, useEffect, useState } from 'react'
import AppContext from '../context/AppContext'
import TableProduct from './TableProduct';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Checkout = () => {
  const { cart, userAddress,url,user,clearCart } = useContext(AppContext);
 const [qty, setQty] = useState(0)
   const [price, setPrice] = useState(0);
   const navigate = useNavigate();

 useEffect(() => {
     let qty = 0;
     let price = 0;
     if(cart?.items){
       for (let i =0; i<cart?.items?.length; i++){
         qty += cart.items[i].qty
         price += cart.items[i].price
       }
     }
     setPrice(price)
     setQty(qty)
     
   }, [cart]);
  

   const handlePayment = async () =>{
    try {
      const orderRespons = await axios.post(`${url}/payment/checkout`,{
        amount: price,
        qty:qty,
        cartItems: cart?.items,
        userShipping: userAddress,
        userId: user?._id
      })
     // console.log("order res", orderRespons)
     const {orderId, amount:orderAmount} = orderRespons.data;

     const options = {
      key: "rzp_live_CfoAbUn93kzHSS", // Enter the Key ID generated from the Dashboard
      amount: orderAmount*100, // Amount is in currency subunits. Default currency is INR. Hence, 50000 refers to 50000 paise
      currency: "INR",
      name: "NANDANI",
      description: "NANDANI",
      order_id: orderId, //This is a sample Order ID. Pass the `id` obtained in the response of Step 1

      handler: async function(response){
      //  console.log("Handler executed with response:", response);

        const paymentData = {
          orderId: response?.razorpay_order_id,
          paymentId: response?.razorpay_payment_id,
          signature: response?.razorpay_signature,
          amount: orderAmount,
          orderItems: cart?.items,
          userId: user?._id,
          userShipping: userAddress,
        };

        const api = await axios.post(`${url}/payment/verify-payment`, paymentData);
        if(api?.data?.success){
          clearCart();  
          navigate('/orderconfirmation')
        }
      },

      prefill: {
          name: "NANDHANI",
          email: "ksapan73@gmail.com",
          contact: "9631705894"
      },
      notes: {
          address: "Bhagalpur,Bihar"
      },
      theme: {
          color: "#33691e"
      }
  };
  const rzp = new window.Razorpay(options);
  rzp.open();
    } catch (error) {
      console.log(error);
    }
   }
  return (

    <>
    <div className="container my-3">
      <h1 className='text-center' style={{color:"black",fontWeight:"bold", fontSize:"3.5rem"}}>Order Summery</h1>

      <table className="table table-bordered border-primary">
  <thead>
    <tr>
      <th scope="col" className="bg-dark text-light text-center">Product details</th>
      
      <th scope="col" className="bg-dark text-light text-center">Shipping Address</th>
    </tr>
  </thead>
  <tbody className="bg-dark">
    <tr>
      <td className="bg-dark text-light">
        <TableProduct cart={cart} />
      </td>
    
      <td className="bg-dark text-light">
        <ul style={{fontWeight:'bold'}}>
          <li>Name: {" "}   {userAddress?.fullName || "Not provided"}</li>
          <li>Phone: {" "}   {userAddress?.phoneNumber || "Not provided"}</li>
          <li>Country:{" "}  {userAddress?.country || "Not provided"}</li>
          <li>State:{" "}    {userAddress?.state || "Not provided"}</li>
          <li>City: {" "}    {userAddress?.city || "Not provided"}</li>
          <li>Pincode:{" "}  {userAddress?.pincode || "Not provided"}</li>
          <li>Near By:{" "}  {userAddress?.address || "Not provided"}</li>
          
        </ul>
      </td>
    </tr>
  </tbody>
</table>
      </div>
      <div className='container text-center my-5'>
      <button className='btn btn-secondary btn-lg' 
      style={{fontWeight:'bold', color:"white"}}
      onClick={handlePayment}>
        Procced To Pay</button>
      </div>


    </>
   
  );
};

export default Checkout;
