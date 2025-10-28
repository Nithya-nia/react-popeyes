import React from 'react'
import menu_css from './Menu.css'
import Navbar from '../Component/Navbar'
import Menu_banner from '../Images/menu-offer-banner.jpg'
import menuproducts from '../Constant/Menuproducts'
import veg from '../Images/veg.svg'
import non_veg from '../Images/non-veg.svg'
import Footer from '../Component/Footer'


const Menu = () => {
  return (
    <>
   <Navbar/>
   <div class="container-fluid  Menu_banner">
   
      <div class="card">
      <img src={Menu_banner} class="card-img " height='200px' alt="..."/>
      
      </div>
    <div class='container-fluid mt-4'>
        <div class='row row-cols-3  row-cols-md-6'>
            <div class='col mt-3'>
                <a>super Saver Chicken Bucket(Save upto 55 Percent)</a>
            </div>
            <div class='col mt-3'>
                <a>Meals and Combos(Save upto 20 Percent)</a>
                
            </div>
            <div class='col mt-3'>
                <a>Popeyes Chicken Sandwich</a>
               
            </div>
            <div class='col mt-4'>
                <a>Side & Dips</a>
               
            </div>
            <div class='col mt-3'>
                <a>New Chicken Wings</a>
               
            </div>
             <div class='col mt-3'>
                <a>Veg burger & meals</a>
               
            </div>


        </div>
     <div>
</div>
     </div>

     <div class="row row-cols-2 row-cols-md-4 g-4 mt-3">
{
  menuproducts.map((data)=>(
  <div class="col" key={data.id}>
    <div class="card">
      <img src={data.img} class="card-img-top" alt="..."/>
      <div class="card-body">
        <h5 class="card-title"><img src={veg}/>&nbsp;{data.title}</h5>
        <p class="card-text">{data.des}</p>
      </div>
    </div>
  </div>
  ))
}
</div>
</div>
 
<Footer/>
   </>
  )
}

export default Menu