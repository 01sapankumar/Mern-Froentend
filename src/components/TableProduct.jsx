import React, {useContext, useEffect, useState} from 'react'
import AppContext from '../context/AppContext'

const TableProduct = ({cart}) => {
  const { decreaseQty,addToCart, removeFromCart,clearCart} = useContext(AppContext);
  const [qty, setQty] = useState(0)
  const [price, setPrice] = useState(0);

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
  return (
    <>
      <table className="table table-bordered border-primary col-md-6">
  <thead>
    <tr>
      <th scope="col" className="bg-dark text-light">Product img</th>
      <th scope="col" className="bg-dark text-light">Title</th>
      <th scope="col" className="bg-dark text-light">Price</th>
      <th scope="col" className="bg-dark text-light">Qty</th>
      <th scope="col" className="bg-dark text-light">Qty ++</th>
      <th scope="col" className="bg-dark text-light">Qty --</th>
      <th scope="col" className="bg-dark text-light">remove</th>

    </tr>
  </thead>
  <tbody>
    {cart?.items?.map ((product)=>(
      <tr key={product._id}>
      <th scope="row" className="bg-dark text-light">
        <img src={product.imgSrc} style={{ border:'3px solid yellow', borderRadius:'10px'}}/></th>
      <td className="bg-dark text-light text-center m-5">{product.title}</td>
      <td className="bg-dark text-light  m-5">{product.price}</td>
      <td className="bg-dark text-light m-5">{product.qty}</td>
      <td className="bg-dark text-light m-5">
      <span className="material-symbols-outlined" onClick={()=>
      addToCart(product?.productId, product.title, product.price/product.qty,1,product.imgSrc)}
 >
add_circle
</span>
<h6>for add the product 😊</h6>

      </td>
      <td className="bg-dark text-light m-5">
      <span className="material-symbols-outlined" onClick={()=>
      decreaseQty(product?.productId,1)}
      >
do_not_disturb_on
</span>
<h6>for decrease the product 😳</h6>
      </td>
      <td className="bg-dark text-light m-5">
      <span className="material-symbols-outlined" onClick={()=>{
              if(confirm("Are you want remove from cart")){
                removeFromCart(product?.productId);
              }
            }
            } >
delete
</span>
<h6>for delete the product 😫</h6>
      </td>
    </tr>
    ))}
          <tr>
    <th scope="row" className="bg-dark text-light" />
      <td className="bg-dark text-light"><button className='btn btn-primary' style={{fontWeight:'bold'}}>Total</button></td>
      <td className="bg-dark text-light"><button className='btn btn-warning'style={{fontWeight:'bold'}}>{price}</button></td>
      <td className="bg-dark text-light"><button className='btn btn-info'style={{fontWeight:'bold'}}>{qty}</button></td>
    </tr>
  </tbody>
</table>
    </>
  )
}

export default TableProduct
