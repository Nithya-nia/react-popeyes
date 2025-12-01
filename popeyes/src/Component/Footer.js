// import React from 'react'
// import Footer_css from './Footer.css'
// import wordmark from '../Images/wordmark.svg'
// import footer_chicken from '../Images/footer-lovethatchicken.svg'
// const Footer = () => {
//   return (
//    <>

//     <div class='container-fluid footer'>
//             <div class='logo '>
//                 <img src={wordmark}/>
//             </div>
//             <div class='d-flex gap-5 ' >
//                <p>Home |</p>
//                <p>Menu |</p>
//                <p>Stores |</p>
//                <p>Our Story |</p>
//             </div>
//             <div >
//                  <div class='  contact d-flex gap-3 '>
//                     <p>Contact&nbsp;Us&nbsp;|</p>
//                      <p>FAQs&nbsp;|</p>
//                       <p>Terms&nbsp;of&nbsp;Service&nbsp;|</p>
//                       </div>
//                       <div class=' contact d-flex gap-3 '>
//                        <p>Nutritional&nbsp;and&nbsp;allergen&nbsp;Chart&nbsp;|</p>
//                        <p>Privacy&nbsp;Policy&nbsp;|</p>
//                        <p>Sitemap&nbsp;|</p>
//                        </div>
                
//             </div>
//             <div class='col '>
//                 <p>Actual Prices may vary from prices on the website.</p>
//                 <p>All pictures are shown for illustrative purposes only. Actual product may vary due to product enhancement.</p>
//                  <img class='foot-img d-none d-lg-block'src={footer_chicken}/>

//             </div>
//             <div class='col'>
//                 <p class='icons d-flex gap-3 '>
//                     <p><i class="fa-brands fa-twitter twitter"></i></p>
//                     <p><i class="fa-brands fa-instagram insta"></i></p>
//                     <p><i class="fa-brands fa-facebook fb"></i></p>
//                     <p><i class="fa-brands fa-youtube yt"></i></p>
                    
//                 </p>
//             </div>

//             <div>
//                 <div class=' availability d-flex'>
//                    <a> <p class='app'><i class="fa-brands fa-apple apple"></i>AVAILABLE ON THE App Store</p></a>
//                     <a><p class='play_s'><i class="fa-brands fa-google-play google"></i>GET IT ON Google Play</p></a>
                   
//                 </div>
                
//             </div>

//             <div class='d-flex'>
//                  <p>All Rights Reserved. Copyright &copy; Jubliant FoodWorld Ltd.</p>
                  
//             </div>
           

           
// </div>
    


//    </>
//   )
// }

// export default Footer

import React from 'react'
import './Footer.css'
import wordmark from '../Images/wordmark.svg'
import footer_chicken from '../Images/footer-lovethatchicken.svg'

const Footer = () => {
  return (
    <div className="container-fluid footer">

      <div className="logo">
        <img src={wordmark} alt="logo" />
      </div>

      <div className="d-flex gap-5">
        <p>Home |</p>
        <p>Menu |</p>
        <p>Stores |</p>
        <p>Our Story |</p>
      </div>

      <div>
        <div className="contact d-flex gap-3">
          <p>Contact Us |</p>
          <p>FAQs |</p>
          <p>Terms of Service |</p>
        </div>

        <div className="contact d-flex gap-3">
          <p>Nutritional & allergen Chart |</p>
          <p>Privacy Policy |</p>
          <p>Sitemap |</p>
        </div>
      </div>

      <div className="col">
        <p>Actual Prices may vary…</p>
        <p>All pictures are shown for illustrative purposes…</p>
        <img className="foot-img d-none d-lg-block" src={footer_chicken} />
      </div>

      {/* FIXED ICON CONTAINER */}
      <div className="col">
        <div className="icons d-flex gap-3">
          <i className="fa-brands fa-twitter twitter"></i>
          <i className="fa-brands fa-instagram insta"></i>
          <i className="fa-brands fa-facebook fb"></i>
          <i className="fa-brands fa-youtube yt"></i>
        </div>
      </div>

      <div className="availability d-flex">
        <p className="app">
          <i className="fa-brands fa-apple apple"></i> AVAILABLE ON App Store
        </p>
        <p className="play_s">
          <i className="fa-brands fa-google-play google"></i> GET IT ON Google Play
        </p>
      </div>

      <div className="d-flex">
        <p>All Rights Reserved. Copyright © Jubilant FoodWorld Ltd.</p>
      </div>

    </div>
  )
}

export default Footer

