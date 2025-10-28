import React from 'react'
import Store_css from './Store.css'
import Navbar from '../Component/Navbar'
import Footer from '../Component/Footer'
import common_banner from '../Images/common-banner.png'
import street_sign from '../Images/street-sign.svg'
import indiranagar from '../Images/indiranagar-bangalore-karnataka-location.png'

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

<div class="container  card-group">
  <div class='row  row-cols-1 row-cols-md-3  address mt-2'>
  <div class=" col card ">
    
    <img src={indiranagar} class="card-img-top top" alt="..."/>
    <div class="card-img-overlay">
        <a class='direction' href="https://www.google.com/maps/place/RMZ+Ecoworld/@12.9251647,77.6878742,17z/data=!4m6!3m5!1s0x3bae13cfe3ac5b63:0xb4e8621abef76979!8m2!3d12.9251647!4d77.6878742!16s%2Fg%2F11knmp6l7l?entry=ttu&g_ep=EgoyMDI1MTAyMi4wIKXMDSoASAFQAw%3D%3D">Get Direction</a>
 
          </div>
    <div class="card-body">
         <h4>INDIRANAGAR BANGALORE KARNATAKA</h4>
        <h5 class="card-title">Address</h5>
        <p class="card-text">INDIRANAGAR, BANGALORE KARNATAKA Ground Floor Site No 308 100ft Main Road Indiranagar 1st Stage PID 82 1 308 Bangalore 560038 Karnataka</p>
        <h5 class="card-title">Timing </h5>
        <p class="card-text">11:00AM - 11:59PM</p>
        <h5 class="card-title">E-mail</h5>
        <p class="card-text">wecare@popeyes.in</p>
        <h5 class="card-title">Telephone</h5>
        <p class="card-text">18003091234</p>
      </div>

  </div>
  <div class=" col card mt-2">
     <img src={indiranagar} class="card-img-top top" alt="..."/>
    
     <div class="card-img-overlay">
      <a class='direction' href="https://www.google.com/maps/place/RMZ+Ecoworld/@12.9251647,77.6878742,17z/data=!4m6!3m5!1s0x3bae13cfe3ac5b63:0xb4e8621abef76979!8m2!3d12.9251647!4d77.6878742!16s%2Fg%2F11knmp6l7l?entry=ttu&g_ep=EgoyMDI1MTAyMi4wIKXMDSoASAFQAw%3D%3D">Get Direction</a>
    </div>
       <div class="card-body">
      <h4>THE MARKET PLACE BANGALORE KARNATAKA</h4>
      <h5 class="card-title">Address</h5>
        <p class="card-text">INDIRANAGAR, BANGALORE KARNATAKA Ground Floor Site No 308 100ft Main Road Indiranagar 1st Stage PID 82 1 308 Bangalore 560038 Karnataka</p>
        <h5 class="card-title">Timing </h5>
        <p class="card-text">11:00AM - 11:59PM</p>
        <h5 class="card-title">E-mail</h5>
        <p class="card-text">wecare@popeyes.in</p>
        <h5 class="card-title">Telephone</h5>
        <p class="card-text">18003091234</p>
       </div>
  </div>
 
  <div class="col card mt-2">
    <img src={indiranagar} class="card-img-top top" alt="..."/>
    <div class="card-img-overlay">
     <a class='direction' href="https://www.google.com/maps/place/Popeyes+-+Famous+Louisiana+Chicken/@12.9140575,77.6090969,17z/data=!3m1!4b1!4m6!3m5!1s0x3bae1522b469703b:0xf83e193b7c93a8e0!8m2!3d12.9140575!4d77.6090969!16s%2Fg%2F11sdb8r1r5?entry=ttu&g_ep=EgoyMDI1MTAyMi4wIKXMDSoASAFQAw%3D%3D">Get Direction</a>
    </div>
    <div class="card-body">
      <h4>BTM LAYOUT</h4>
     <h5 class="card-title">Address</h5>
     <p class="card-text">INDIRANAGAR, BANGALORE KARNATAKA Ground Floor Site No 308 100ft Main Road Indiranagar 1st Stage PID 82 1 308 Bangalore 560038 Karnataka</p>
        <h5 class="card-title">Timing </h5>
        <p class="card-text">11:00AM - 11:59PM</p>
        <h5 class="card-title">E-mail</h5>
        <p class="card-text">wecare@popeyes.in</p>
        <h5 class="card-title">Telephone</h5>
        <p class="card-text">18003091234</p>
    </div>
  </div>

    <div class="col card mt-2">
      <img src={indiranagar} class="card-img-top top" alt="..."/>
      <div class="card-img-overlay">
      <a class='direction' href="https://www.google.com/maps/place/Popeyes+-+Famous+Louisiana+Chicken/@12.9362105,77.5981539,14z/data=!4m6!3m5!1s0x3bae1505655d3b07:0x70557ed7ad7e8169!8m2!3d12.9362412!4d77.6157116!16s%2Fg%2F11smm7tzst?entry=ttu&g_ep=EgoyMDI1MTAyMi4wIKXMDSoASAFQAw%3D%3D">Get Direction</a>

    </div>
        <div class="card-body">
        <h4>KORMANGALA BANGALORE KARNATAKA</h4>
        <h5 class="card-title">Address</h5>
        <p class="card-text">Ground and First Floor at Site No 9 PID No 67 7 9 7th Block 80 Feet Road Kormangala Bangalore 560034 Karnataka</p>
        <h5 class="card-title">Timing </h5>
        <p class="card-text">11:00AM - 11:59PM</p>
        <h5 class="card-title">E-mail</h5>
        <p class="card-text">wecare@popeyes.in</p>
        <h5 class="card-title">Telephone</h5>
        <p class="card-text">18003091234</p>
    </div>
  </div>

<div class="col card mt-2">
    <img src={indiranagar} class="card-img-top top" alt="..."/>
    <div class="card-img-overlay">
      <a class='direction' href="https://www.google.com/maps/place/Popeyes+-+Famous+Louisiana+Chicken/@12.9362105,77.5981539,14z/data=!4m6!3m5!1s0x3bae1505655d3b07:0x70557ed7ad7e8169!8m2!3d12.9362412!4d77.6157116!16s%2Fg%2F11smm7tzst?entry=ttu&g_ep=EgoyMDI1MTAyMi4wIKXMDSoASAFQAw%3D%3D">Get Direction</a>

    </div>
    <div class="card-body">
     <h4>M5 MALL</h4>
     <h5 class="card-title">Address</h5>
        <p class="card-text">Popeyes Unit FC 17 4th Floor M5 Mall Veerasandra Industrial area Electronic City Bangalore 560100</p>
        <h5 class="card-title">Timing </h5>
        <p class="card-text">11:00AM - 11:59PM</p>
        <h5 class="card-title">E-mail</h5>
        <p class="card-text">wecare@popeyes.in</p>
        <h5 class="card-title">Telephone</h5>
        <p class="card-text">18003091234</p>
    </div>
  </div>


<div class="col card mt-2">
    <img src={indiranagar} class="card-img-top top" alt="..."/>
    <div class="card-img-overlay">
      <a class='direction' href="https://www.google.com/maps/place/Popeyes/@13.0110208,77.5527674,17z/data=!3m1!4b1!4m6!3m5!1s0x3bae3d622668742b:0x9a10f1b2575f15da!8m2!3d13.0110208!4d77.5549561!16s%2Fg%2F11s8mhpd_f?coh=164777&entry=tt&shorturl=1">Get Direction</a>

    </div>
    <div class="card-body">
     <h4>LULU MALL BANGALORE KARNATAKA</h4>
     <h5 class="card-title">Address</h5>
        <p class="card-text">LULU MALL BANGALORE KARNATAKA R 04 Second Floor Global Malls Gopalpura Bangalore 560023 Karnataka</p>
        <h5 class="card-title">Timing </h5>
        <p class="card-text">11:00AM - 11:59PM</p>
        <h5 class="card-title">E-mail</h5>
        <p class="card-text">wecare@popeyes.in</p>
        <h5 class="card-title">Telephone</h5>
        <p class="card-text">18003091234</p>
    </div>
  </div>


  <div class="col card mt-2">
    <img src={indiranagar} class="card-img-top top" alt="..."/>
    <div class="card-img-overlay">
      <a class='direction' href="https://www.google.com/maps/place/Popeyes/@12.992874,77.5364713,17z/data=!3m1!4b1!4m6!3m5!1s0x3bae3de65a6ad0a9:0x50e255b124082b29!8m2!3d12.992874!4d77.53866!16s%2Fg%2F11t3n7m3p6?coh=164777&entry=tt&shorturl=1">Get Direction</a>

    </div>
    <div class="card-body">
    <h4>BASAVESHWARA NAGAR</h4>
      <h5 class="card-title">Address</h5>
        <p class="card-text">Basaveshwara Nagar Ground and First Floor 333 3rd Stage 4th Block Basaveshwara Nagar 560079</p>
        <h5 class="card-title">Timing </h5>
        <p class="card-text">11:00AM - 11:59PM</p>
        <h5 class="card-title">E-mail</h5>
        <p class="card-text">wecare@popeyes.in</p>
        <h5 class="card-title">Telephone</h5>
        <p class="card-text">18003091234</p>
    </div>
  </div>


  <div class="col card mt-2">
    <img src={indiranagar} class="card-img-top top" alt="..."/>
    <div class="card-img-overlay">
      <a class='direction' href="https://goo.gl/maps/jLitcm732QmpLTwW9">Get Direction</a>

    </div>
    <div class="card-body">
     
     <h4>CMR ROAD KAMMANAHALLI BANGALORE</h4>
     <h5 class="card-title">Address</h5>
        <p class="card-text">4C 527 CMR Road HRBR Layout II Block Bangalore 560043</p>
        <h5 class="card-title">Timing </h5>
        <p class="card-text">11:00AM - 11:59PM</p>
        <h5 class="card-title">E-mail</h5>
        <p class="card-text">wecare@popeyes.in</p>
        <h5 class="card-title">Telephone</h5>
        <p class="card-text">18003091234</p>
    </div>
  </div>


  <div class="col card mt-2">
    <img src={indiranagar} class="card-img-top top" alt="..."/>
    <div class="card-img-overlay">
       <a class='direction' href="https://www.google.com/maps/place/Popeyes/@12.9121282,77.6355636,17z/data=!3m1!4b1!4m6!3m5!1s0x3bae15c5fa03af27:0x3a2b1bf4c7b6c4cd!8m2!3d12.9121282!4d77.6377523!16s%2Fg%2F11sqj6jk1t?coh=164777&entry=tt&shorturl=1">Get Direction</a>

    </div>
    <div class="card-body">
    
     <h4>HONEYDEWZZ MANSION HSR LAYOUT BANGALORE</h4>
      <h5 class="card-title">Address</h5>
        <p class="card-text">Ground Floor Honeydewzz Mansion Survey No 2 HSR Layout Sector 7 BDA Bangalore 560102 Karnataka</p>
        <h5 class="card-title">Timing </h5>
        <p class="card-text">11:00AM - 11:59PM</p>
        <h5 class="card-title">E-mail</h5>
        <p class="card-text">wecare@popeyes.in</p>
        <h5 class="card-title">Telephone</h5>
        <p class="card-text">18003091234</p>
    </div>
  </div>


  <div class="col card mt-2">
    <img src={indiranagar} class="card-img-top top" alt="..."/>
    <div class="card-img-overlay">
       <a class='direction'  href="https://www.google.com/maps/place/Popeyes/@13.0328398,77.5674895,17z/data=!3m1!4b1!4m6!3m5!1s0x3bae1762ea2d3693:0x3b10dbb157472b95!8m2!3d13.0328398!4d77.5696782!16s%2Fg%2F11pyc2ylwn?coh=164777&entry=tt&shorturl=1">Get Direction</a>

      </div>
    <div class="card-body">
     <h4>NEW BEL ROAD BANGALORE KARNATAKA</h4>
     <h5 class="card-title">Address</h5>
        <p class="card-text">Ground Floor and First Floor at Municipal Corporation No 10 PID No 100 731 10 KC Tower ITI and HB Society New BEL Road Bangalore 560054 Karnataka</p>
        <h5 class="card-title">Timing </h5>
        <p class="card-text">11:00AM - 11:59PM</p>
        <h5 class="card-title">E-mail</h5>
        <p class="card-text">wecare@popeyes.in</p>
        <h5 class="card-title">Telephone</h5>
        <p class="card-text">18003091234</p>
    </div>
  </div>


  <div class="col card mt-2">
    <img src={indiranagar} class="card-img-top top" alt="..."/>
    <div class="card-img-overlay">
      <a class='direction' href="https://www.google.com/maps/place/Popeyes/@12.9077138,77.5813319,14z/data=!4m7!3m6!1s0x3bae15beb24e81c3:0x81994b6ccc6ed0fd!8m2!3d12.9071369!4d77.6011621!15sChFwb3BleWVzIHZlZ2EgY2l0eSIDiAEBWhMiEXBvcGV5ZXMgdmVnYSBjaXR5kgEKcmVzdGF1cmFudOABAA!16s%2Fg%2F11k46hywdc?coh=164777&entry=tt&shorturl=1">Get Direction</a>
    </div>
    <div class="card-body">
    <h4>VEGACITY</h4>
      <h5 class="card-title">Address</h5>
        <p class="card-text">Unit No T 03 Floorv 3rd Floor No 172 1 Srinivas Industrial Estate Bilekahalli Bannerghatta Road Bangalore 560046 Karnataka</p>
        <h5 class="card-title">Timing </h5>
        <p class="card-text">11:00AM - 11:59PM</p>
        <h5 class="card-title">E-mail</h5>
        <p class="card-text">wecare@popeyes.in</p>
        <h5 class="card-title">Telephone</h5>
        <p class="card-text">18003091234</p>
    </div>
  </div>

  </div>
  </div>
  </div>




   <Footer/>
    </>
  )
}

export default Store