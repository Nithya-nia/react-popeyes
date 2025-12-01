  import { useDispatch,useSelector } from 'react-redux'; 
import { deleteFromCart,updateQuantity } from '../Addtocart/cartSlice'; 
import Cart_css from './Cart.css'
import veg from '../Images/veg.svg'

 
const Cartpage = () => { 
    const cartitems=useSelector((state)=>state.cart.cartitems); 
 
    const dispatch=useDispatch(); 
    
    const deleteCart=(item)=>{ 
          dispatch(deleteFromCart(item)) 
      } 
 
      const incrementCart=(id,quantity)=>{ 
         dispatch(updateQuantity({id, quantity : quantity+1})) 
      } 
 
  const decrementCart=(id,quantity)=>{ 
    if(quantity>1){ 
      dispatch(updateQuantity( 
        {id, quantity : quantity-1} 
      ) 
      ) 
    } 
  } 
 
 
  return ( 
    <section> 
    <div className="BestSelllings"> 
        <h2 className='BestSellerHeader text-center mt-4' >MY CART PRODUCTS</h2> 
        <h4 className='BestSellerDes text-center'>The Cart u like Most</h4>             
        <div class="container text-center" className='ProductContainer'> 
          <div class="row"> 
            { 
                cartitems.map((item)=>{ 
                    return( 
                        
                        <div class=" container col-lg-3" key={item.id}>
                        <div class="card">
                        <img src={item.image} class="card-img-top" alt="..."/>
                        <div class="card-body">
                         <h5 class="card-title"><img src={veg}/>&nbsp;{item.title}</h5>
                         <p class="card-text">{item.des}</p>
     
  
                <div className=''  style={{display:'flex',justifyContent:'center',marginBottom:'20px',borderRadius:'40px',border:'solid',borderColor:'rose',width:'20%',marginLeft:'40%',padding:'2px'}}> 
                <button className="qty-btn "style={{border:'none',paddingRight:'5px'}}onClick={()=>{decrementCart(item.id,item.quantity)}}>-</button> 
                                {item.quantity} 
                                 <button style={{border:'none',paddingLeft:'5px'}}onClick={()=>{incrementCart(item.id,item.quantity)}} >+</button> 
                                 </div>
                            
                      
                           <button 
   className="btn-cartbutton "style={{border:"solid",borderColor:"rgba(242, 85, 0, 0.844)",backgroundColor:"rgba(242, 85, 0, 0.844)",color:"white",borderRadius:"5px"}} 
   onClick={() => deleteCart(item)}
>
   Delete From Cart
</button> 
                               {/* <button class="ms-3 add_to_cart_btn">{itemproduct.button}</button> */}
                               </div>
      </div>
    </div>

                    )
                })
            }
            </div>
            </div>
            </div>
            </section>
  )
}
 
                                
            
  
 
export default Cartpage