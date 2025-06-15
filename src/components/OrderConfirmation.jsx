import React, { useContext, useEffect, useState } from 'react'
import AppContext from '../context/AppContext';
import ShowOrderProducts from './ShowOrderProducts';
import { useNavigate } from 'react-router-dom';

const OrderConfirmation = () => {
      const navigate = useNavigate();
  const {userOrder} = useContext(AppContext);
  const [latestOrder, setLatestOrder] = useState({})
    useEffect(() => {
      if(userOrder){
        setLatestOrder(userOrder[0]);
      }
      
    }, [userOrder]);
    console.log("latestOrder", latestOrder);

  return (
    <>
    <div className='conatiner my-5 md-col-6'>
      <h1 className='text-center' style={{fontWeight:'bold', color:'green', fontFamily:'cursive'}}> Your order has been confirmed,</h1>
      <h3 className='text-center'style={{fontWeight:'bold', color:'green', fontFamily:'cursive'}}>It will deliver soon...</h3>
    </div>
    <div className="container">

      <table className="table table-bordered border-primary">
  <thead>
    <tr>
      <th scope="col" className="bg-dark text-light text-center">OrderItems</th>
      
      <th scope="col" className="bg-dark text-light text-center">OrderDetails & Shipping Address</th>
    </tr>
  </thead>
  <tbody className="bg-dark">
    <tr>
      <td className="bg-dark text-light">
       {/* <TableProduct cart={cart} /> */}
       <ShowOrderProducts items = {latestOrder?.orderItems} />


      </td>
    
      <td className="bg-dark text-light">
        <ul style={{fontWeight:'bold'}}>
          <li>Name: {" "}   {latestOrder?.userShipping?.fullName || "Not provided"}</li>
          <li>Phone: {" "}   {latestOrder?.userShipping?.phoneNumber || "Not provided"}</li>
          <li>Country:{" "}  {latestOrder?.userShipping?.country || "Not provided"}</li>
          <li>State:{" "}    {latestOrder?.userShipping?.state || "Not provided"}</li>
          <li>City: {" "}    {latestOrder?.userShipping?.city || "Not provided"}</li>
          <li>Pincode:{" "}  {latestOrder?.userShipping?.pincode || "Not provided"}</li>
          <li>Near By:{" "}  {latestOrder?.userShipping?.address || "Not provided"}</li> 
          <li>OrderId: {" "}   {latestOrder?.orderId || "Not provided"}</li>
          <li>PaymentId: {" "}   {latestOrder?.paymentId || "Not provided"}</li>
          <li>PaymentStatus: {" "} {latestOrder?.payStatus || "Not provided"}</li>          
        </ul>
      </td>
    </tr>
  </tbody>
</table>
      </div>
      <div className='container text-center my-5'>
      <button className='btn btn-warning btn-lg' 
      style={{fontWeight:'bold', color:"black", border:'3px solid green'}} onClick={() => {
                    navigate('/');
                  }}>
        Continue Shopping..</button>
      </div>
      
    </>
  )
}

export default OrderConfirmation
