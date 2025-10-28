import React from 'react'
import menu_css from './Menu.css'
import Navbar from '../Component/Navbar'
import Menu_banner from '../Images/menu-offer-banner.jpg'
import cbf from '../Images/964955cb-dc59-4e6c-a22a-b5363f924503_91-cmb020-oa-984-342.png'
import cc from '../Images/efb60bf6-c766-4296-a326-73854d4cf830_6557-cmb023-oa-984-342.png'
import chicken_c from '../Images/3a2c36ba-d123-4e69-9fee-49efa8943cf7_4605-cmb082-oa-984-342.png'
import bf from '../Images/7ca318ac-413b-47eb-9438-a863f4794bba_4601-cmb078-oa-984-342.png'
import fc from '../Images/78df0da7-740f-436d-a65a-07560fdf5d44_4602-cmb079-oa-984-342.png'
import cf from '../Images/570bd641-7515-4d8a-a467-03cfb0f612a4_4603-cmb080-oa-984-342.png'
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
  <div class="col">
    <div class="card">
      <img src={cbf} class="card-img-top" alt="..."/>
      <div class="card-body">
        <h5 class="card-title"><img src={veg}/>&nbsp;Cajun Double Crunch Burger Combo-Med</h5>
        <p class="card-text">Cajun Double Crunch Burger with medium fries & medium drink for a perfect meal!</p>
      </div>
    </div>
  </div>
  <div class="col">
    <div class="card">
      <img src={cbf} class="card-img-top" alt="..."/>
      <div class="card-body">
        <h5 class="card-title"><img src={veg}/>&nbsp;Veggie Delight Burger (Classic) Combo - Medium</h5>
        <p class="card-text">Veggie Delight Burger with medium Cajun fries & medium Cajun drink combo!</p>
      </div>
    </div>
  </div>
  <div class="col">
    <div class="card">
      <img src={cc} class="card-img-top" alt="..."/>
      <div class="card-body">
        <h5 class="card-title"><img src={non_veg}/>&nbsp;Chicken Popcorn Rice Bowl Combo - Medium</h5>
        <p class="card-text">Flavourful rice, cooked with special blend of spices served with chicken popcorn and a Beverage (Medium)</p>
      </div>
    </div>
  </div>
  <div class="col">
    <div class="card">
      <img src={chicken_c} class="card-img-top" alt="..."/>
      <div class="card-body">
        <h5 class="card-title"><img src={non_veg}/>&nbsp;Sweet Chilli Wings and Chicken Popcorn Combo</h5>
        <p class="card-text">Enjoy 2pcs Sweet Chili Wings with Cajun Chicken Popcorn – a spicy, crunchy flavor combo!</p>
      </div>
    </div>
  </div>
  <div class="col">
    <div class="card">
      <img src={bf} class="card-img-top" alt="..."/>
      <div class="card-body">
        <h5 class="card-title"><img src={veg}/>&nbsp;Classic Veg Burger & Fries Combo</h5>
        <p class="card-text">Bite into our crispy veg patty with juicy veggies & mayo in sesame buns, served with regular fries.</p>
      </div>
    </div>
  </div>
  <div class="col">
    <div class="card">
      <img src={fc} class="card-img-top" alt="..."/>
      <div class="card-body">
        <h5 class="card-title"><img src={non_veg}/>&nbsp;Chicken Popcorn & Fries Combo</h5>
        <p class="card-text">Enjoy Regular Chicken Popcorn, hand-battered & crispy, with Regular Cajun Fries – the perfect crunchy combo!</p>
      </div>
    </div>
  </div>
  <div class="col">
    <div class="card">
      <img src={cf} class="card-img-top" alt="..."/>
      <div class="card-body">
        <h5 class="card-title"><img src={non_veg}/>&nbsp;Sweet Chilli Wings & Fries Combo</h5>
        <p class="card-text">Enjoy 2pcs juicy Sweet Chili Wings with crispy Regular Cajun Fries – bold & satisfying!</p>
      </div>
    </div>
  </div>
  <div class="col">
    <div class="card">
      <img src={cbf} class="card-img-top" alt="..."/>
      <div class="card-body">
        <h5 class="card-title"><img src={veg}/>&nbsp;Cajun Double Crunch Burger Combo-Large</h5>
        <p class="card-text">Cajun Double Crunch Burger with large fries & large drink for a perfect meal!</p>
      </div>
    </div>
  </div>
<div class="col mb-2">
    <div class="card">
      <img src={cc} class="card-img-top" alt="..."/>
      <div class="card-body">
        <h5 class="card-title"><img src={non_veg}/>&nbsp;Chicken Popcorn Rice Bowl Combo - Large</h5>
        <p class="card-text">Flavourful rice, cooked with special blend of spices served with chicken popcorn and a Beverage (Large)</p>
      </div>
    </div>
    </div>
    </div>
    </div>
<Footer/>
   </>
  )
}

export default Menu