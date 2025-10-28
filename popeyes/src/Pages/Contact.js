import React from 'react'
import Navbar from '../Component/Navbar'
import Footer from '../Component/Footer'
import Contact_css from '../Pages/Contact.css'
import common_banner from '../Images/common-banner.png'
const Contact = () => {
  return (
    <>
    <Navbar/>

    <div>
            <div class="card">
      <img src={common_banner} class="card-img " height='200px' alt="..."/>
      <div class="card-img-overlay d-flex">
       
        <div class=' ms-5 mt-5 text-light '>
            <h1 class='contact_us'>Contact Us</h1>
        </div>
    </div>
         </div>
      
        <div class="row row-cols-1 row-cols-md-2 g-4 mt-1">
  <div class="col map">
    <div class="card ">
      <iframe class='card-img-top' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3505.2595008148505!2d77.3613337!3d28.5319188!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce720fb8c78a3%3A0xfc94dcd7ce04ccfa!2sSkymarkOne%20Sector%2098!5e0!3m2!1sen!2sin!4v1761281168637!5m2!1sen!2sin" width="600" height="450"  allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
      <div class="card-body">
        <h5 class="card-title">Address</h5>
        <p class="card-text">Jubilant FoodWorks Limited 15th Floor, Tower E Skymark One, Plot No. H – 10/A Sector 98, Noida- 201301, U.P., India</p>
        <h5 class="card-title">Call Us</h5>
        <p class="card-text">18003091234</p>
        <h5 class="card-title">Write to Us</h5>
        <p class="card-text">wecare@popeyes.in</p>
        <h5 class="card-title">In the event of a Grievance</h5>
        <p class="card-text">escalation@popeyes.in</p>
      </div>
    </div>
  </div>
  </div>
  </div>

    <Footer/>
    </>
  )
}

export default Contact