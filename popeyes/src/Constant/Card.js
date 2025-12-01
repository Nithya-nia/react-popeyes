
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addTocart, deleteFromCart } from '../Addtocart/cartSlice';
import veg from '../Images/veg.svg'
import non_veg from '../Images/non-veg.svg'

const Card = (props) => {
   const cartitems=useSelector((state)=>state.cart.cartitems); 
  
  const dispatch=useDispatch(); 
 
  const addCart=(item)=>{ 
    dispatch(addTocart(item)) 
  } 
  
  const deleteCart=(item)=>{ 
    dispatch(deleteFromCart(item)) 
} 
 

  return (
<div class="row row-cols-2 row-cols-md-4 g-4 mt-3">
{
 
  props.data.map((item) => (
    <div class="col" key={item.id}>
      <div class="card">
        <img src={item.image} class="card-img-top" alt="..." />
        <div class="card-body">
          <h5 class="card-title"><img src={veg} />&nbsp;{item.title}</h5>
          <p class="card-text">{item.des}</p>

          {cartitems.find((Items) => Items.id === item.id) ? (
            <button
              type="submit"
              class="add-to-cart-btn p-2" style={{border:"solid",borderColor:"rgba(242, 85, 0, 0.844)",backgroundColor:"rgba(242, 85, 0, 0.844)",color:"white",borderRadius:"5px"}} 
              onClick={() => deleteCart(item)}
            >
              Remove From Cart
            </button>
          ) : (
            <button
              type="submit"
              class="add-to-cart-btn p-2 "style={{border:"solid",borderColor:"rgba(242, 85, 0, 0.844)",backgroundColor:"rgba(242, 85, 0, 0.844)",color:"white",borderRadius:"5px"}}
              onClick={() => addCart(item)}
            >
              {item.button}
            </button>
          )}
          </div>
          </div>
          </div>
  ))
}
</div>
  )
}
      

export default Card