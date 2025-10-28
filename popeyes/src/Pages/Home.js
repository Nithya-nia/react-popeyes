import React from 'react'
import Home_css from './Home.css'
import Navbar from '../Component/Navbar'
import Footer from '../Component/Footer'
import banner1 from '../Images/hero-banner-1@2x.jpg'
import banner2 from '../Images/hero-banner-2@2x.jpg'
import cuision from '../Images/cuisine-icon.svg'
import delivery from '../Images/delivery-icon.svg'
import store from '../Images/store-icon.svg'
import burger from '../Images/burger.png'
import bg from '../Images/black-bg-pattern.svg'
import chicken_burger from '../Images/chicken-sandwich.png'
import sign_chicken from '../Images/signature-chicken.png'
import cajun from '../Images/cajun-veg-burger.png'
import flavor1 from '../Images/flavors-01.png'
import flavor2 from '../Images/flavors-bg-2.jpg'
import flavor3 from '../Images/flavors-bg-3.jpg'
import desktopQRbanner from '../Images/desktopQRBanner.jpg'
const Home = () => {
  return (
    <>
    <Navbar/>
     <div class="carousel-1">
    <div id="carouselExampleCaptions" class="carousel slide">
  <div class="carousel-indicators car-indicators">
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" class="active btn_indicator" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" class='btn_indicator' aria-label="Slide 2"></button>
   
  </div>
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img src={banner1} class="d-block w-100" alt="..."/>
     
    </div>
    <div class="carousel-item">
      <img src={banner2} class="d-block w-100" alt="..."/>
      
    </div>
   <button class="carousel-control-prev  " type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
    <span class="carousel-control-prev-icon btn_previous" aria-hidden="true"></span>
    <span class="visually-hidden previous">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
    <span class="carousel-control-next-icon  btn_nxt" aria-hidden="true"></span>
    <span class="visually-hidden ">Next</span>
  </button>
</div>
</div>




  <div class="d-flex card-products">
  <div class="background"
  style={{
    
   backgroundImage:`url(${bg})`,
    backgroundRepeat:' no-repeat',
    backgroundSize:'cover',
    backgroundattachment: 'fixed',
    backgroundColor:'rgb(245, 241, 239)',
    height:'800px',
    width:'100%',

  }}
    > 
      <div className='container menu-list '>
  <div class='row row-cols-2 row-cols-md-4'>
  <div className=' col d-flex gap-3 mt-1'>
    <div class='mt-3'>
     <img src={cuision} class='ach-img' height='50px'/>
     </div>
     <div>
  <h3 class='mt-2 let'>Serving </h3>
  <h3 class='mt-2 let'>Since 1972</h3>
  </div>
  </div>
 <div className=' col d-flex gap-3 mt-1'>
  <div class='mt-3'>
  <img src={delivery} class='ach-img' height='50px'/>
  </div>
  <div>
  <h3 class='mt-2 let'>25+ </h3>
  <h3 class='mt-2 let'>Countries</h3>
  </div>
  </div>
   <div className=' col d-flex gap-3 mt-1'>
    <div class='mt-3'>
  <img src={store} class='ach-img' height='50px'/>
  </div><div>
  <h3 class='mt-2 let'>3300+</h3>
  <h3 class='mt-2 let'>Stores</h3>
  </div>
  </div>
   <div className=' col d-flex  gap-3 mt-1'>
  <img src={burger} class='ach-img mt-3' height='50px'/>
  <h3 class='let mt-2'>250 Million+ Chicken Sandwiches Served</h3>
</div>
</div>
</div> 

      <div class="sec  ">
      <div class="row row-cols-2 row-cols-md-4 g-4 pt-1">
        <div class="col">
    <div class="content ">
      <h3 class="sign">Our Signature</h3>
      <h2 class="products">Products</h2>
      <button class="view">
        <span>View All Menu</span>
        </button>
        </div>
  </div>
  <div class="col card1">
    <div class="card card-rad card-1">
      <img src={chicken_burger} class="card-img-top" alt="..." height="300px" />
      <div class="card-body">
        <h5 class="card-title">The Chicken Sandwich</h5>
        <p class="card-text d-none d-lg-block">The hype is real! Say hello to the new love of your life - our world-famous Chicken Sandwich.</p>
        <button class="view-all d-none d-lg-block">View all</button>
      </div>
    </div>
  </div>
  <div class="col card2">
    <div class="card card-rad card-2">
      <img src={sign_chicken} class="card-img-top" alt="..."  height="300px"/>
      <div class="card-body">
        <h5 class="card-title">Popeyes Signature Chicken</h5>
        <p class="card-text d-none d-lg-block">Dig into our Signature Chicken; marinated for 12 hours in bold Cajun seasonings for delicious flavours in every bite.</p>
         <button class="view-all d-none d-lg-block">View all</button>
      </div>
    </div>
  </div>
  <div class="col card3">
    <div class="card card-rad card-3">
      <img src={cajun} class="card-img-top" alt="..."  height="300px"/>
      <div class="card-body">
        <h5 class="card-title">Cajun Veg Burger</h5>
        <p class="card-text d-none d-lg-block">Not an exaggeration! Our crispy and utterly delicious Cajun Veg Burger is what dreams are made of.</p>
         <button class="view-all d-none d-lg-block">View all</button>
      </div>
  </div>
  </div>
  </div>
  </div>
  <div class="end mt-4 fw-bold ">
  <p class='text-secondary'>Ordering through mobile site and App only.</p>
  </div>
  </div>
  </div>

  </div>
   

 


<div id="carouselExampleIndicators" class="carousel slide carouselSec" data-bs-ride="true">
  <div class="carousel-indicators">
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
  </div>
  <div class="carousel-inner">
    <div class="carousel-item active">
      <div class="card text-bg-light">
  <img src={flavor1}class="card-img" alt="..."/>
  <div class="card-img-overlay overlay d-none d-lg-block ">
    <h5 class="card-title card-head">Signature Blend of bold</h5>
    <p class="card-text center para fw-bold ">Cajon Flavors</p>
    <p class="card-text  para mt-4 fs-5 d-flex ">Our chicken is freshly and expertly cooked, bursting with bold Cajun flavours that’s like a party in your mouth.</p>
    
  </div>
</div>
    </div>
    <div class="carousel-item">
      <div class="card text-bg-dark">
  <img src={flavor2}class="card-img" alt="..."/>
  <div class="card-img-overlay  overlay d-none d-lg-block">
    <h5 class="card-title card-head ">12  hours of</h5>
     <p class="card-text para center fw-bold">Marination</p>
    <p class="card-text para mt-4 fs-5 justify-content-center">Quality takes time, y’all. We marinate our chicken in bold Cajun seasonings for at least 12 hours. You’ll relish the flavour till the last bite.</p>
    
  </div>
</div>
    </div>
    <div class="carousel-item">
    <div class="card text-bg-dark">
  <img src={flavor3} class="card-img" alt="..."/>
  <div class="card-img-overlay  overlay d-none d-lg-block">
    <h5 class="card-title card-head-3 ">all that crunch. All that juiciness.</h5>
    <p class="card-text para fw-bold center">It's Pure Joy</p>
    <p class="card-text para mt-4 fs-5">Extra crispy on the outside, juicy and bursting with bold Cajun flavour on the inside. Our chicken is so good, you will want to do a little happy dance!</p>
   
  </div>
</div>
    </div>
  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
    <span class="carousel-control-prev-icon btn_previous" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
    <span class="carousel-control-next-icon btn_nxt" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>



 
 

  <div class="card bg-light text-white">
  <img src={desktopQRbanner} class="card-img" alt="..."/>
</div>

  <Footer/>









</>
  )
}

export default Home