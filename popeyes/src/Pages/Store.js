import React from 'react'
import Store_css from './Store.css'
import Navbar from '../Component/Navbar'
import Footer from '../Component/Footer'
import common_banner from '../Images/common-banner.png'
import street_sign from '../Images/street-sign.svg'
import Storeproducts from '../Constant/Storesproducts'

const Store = () => {
  return (
    <>
    <Navbar/>
    <div class='stores'>
     <div>
        <div class="card">
  <img src={common_banner} class="card-img " height='200px' alt="..."/>
  <div class="card-img-overlay d-flex">
    <div>
      <img class='pop-img'src={street_sign}/>
    </div>
    <div class=' ms-4 mt-5 text-light '>
        <h1 class='story'>Our Stores</h1>
    </div>
</div>
     </div>
     </div>


  <div class='container dropdown'>
  <form action="">
  <label for="city">City:</label>
  <select class='ms-5 mt-3 select'>
    <option>Bangalore</option>
    <option>Calicut</option>
    <option>Chandigarh</option>
    <option>Chennai</option>
     <option>Cochin</option>
    <option>Coimbatore</option>
     <option>Cuddalore</option>
    <option>Dehradun</option>
     <option>Faridabad</option>
    <option>Gurgaon</option>
     <option>Hyderabad</option>
    <option>Jalandhar</option>
     <option>Kozhikode</option>
    <option>Madurai</option>
     <option>Mangalore</option>
    <option>Manipal</option>
     <option>Mohali</option>
    <option>Mysore</option>
    <option>Nalasopara</option>
     <option>Navi mumbai</option>
    <option>New delhi</option>
    <option>Noida</option>
    <option>Palakkad</option>
      <option>Salem</option>
      <option>Thane</option>
      <option>Thrissur</option>
  </select>
  </form>
  <hr></hr>
  </div>


  <div class='container mt-3'>
    <h1>Popeyes Stores in Bangalore</h1>
    <p>Make way, Bangalore, for a sensation like no other! Indulge in delicious food, such as our world-famous Chicken Sandwich, Popeyes Signature Chicken, Crispy Cajun Veg Burger, Louisiana-inspired Cajun fries and a variety of menu items available only at a Popeyes restaurant near you.</p>
  </div>


<div class="container card-group">
  <div class='row  row-cols-1 row-cols-md-3  address mt-2'>
    {
      Storeproducts.map((map)=>(
        <div class="col card" key={map.id}>
    
    <img src={map.img} class="card-img-top top" alt="..."/>
    <div class="card-img-overlay">
        <a class='direction' href={map.link}>Get Direction</a>
 
          </div>
    <div class="card-body">
         <h4>{map.title}</h4>
        <h5 class="card-title">Address</h5>
        <p class="card-text">{map.address}</p>
        <h5 class="card-title">Timing </h5>
        <p class="card-text">{map.timing}</p>
        <h5 class="card-title">E-mail</h5>
        <p class="card-text">{map.Email}</p>
        <h5 class="card-title">Telephone</h5>
        <p class="card-text">{map.telephone}</p>
      </div>

  </div>
      ))
    }
    

    
  

 
  </div>
  </div>
  </div>




   <Footer/>
    </>
  )
}

export default Store