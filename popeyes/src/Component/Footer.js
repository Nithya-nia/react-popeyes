import React from 'react'
import Footer_css from './Footer.css'
import wordmark from '../Images/wordmark.svg'
import footer_chicken from '../Images/footer-lovethatchicken.svg'
const Footer = () => {
  return (
   <>
    <div class='container-fluid footer'>
            <div class='logo '>
                <img src={wordmark}/>
            </div>
            <div class='d-flex gap-5 ' >
               <p>Home |</p>
               <p>Menu |</p>
               <p>Stores |</p>
               <p>Our Story |</p>
            </div>
            <div >
                 <div class='  contact d-flex gap-3 '>
                    <p>Contact&nbsp;Us&nbsp;|</p>
                     <p>FAQs&nbsp;|</p>
                      <p>Terms&nbsp;of&nbsp;Service&nbsp;|</p>
                      </div>
                      <div class=' contact d-flex gap-3 '>
                       <p>Nutritional&nbsp;and&nbsp;allergen&nbsp;Chart&nbsp;|</p>
                       <p>Privacy&nbsp;Policy&nbsp;|</p>
                       <p>Sitemap&nbsp;|</p>
                       </div>
                
            </div>
            <div class='col '>
                <p>Actual Prices may vary from prices on the website.</p>
                <p>All pictures are shown for illustrative purposes only. Actual product may vary due to product enhancement.</p>
                 <img class='foot-img d-none d-lg-block'src={footer_chicken}/>

            </div>
            <div class='col'>
                <p class='icons d-flex gap-3 '>
                    <p><i class="fa-brands fa-twitter twitter"></i></p>
                    <p><i class="fa-brands fa-instagram insta"></i></p>
                    <p><i class="fa-brands fa-facebook fb"></i></p>
                    <p><i class="fa-brands fa-youtube yt"></i></p>
                    
                </p>
            </div>

            <div>
                <div class=' availability d-flex'>
                   <a> <p class='app'><i class="fa-brands fa-apple apple"></i>AVAILABLE ON THE App Store</p></a>
                    <a><p class='play_s'><i class="fa-brands fa-google-play google"></i>GET IT ON Google Play</p></a>
                   
                </div>
                
            </div>

            <div class='d-flex'>
                 <p>All Rights Reserved. Copyright &copy; Jubliant FoodWorld Ltd.</p>
                  
            </div>
            {/* <div class='row row-cols-1 row-cols-md-2'>
                <div class='col d-flex rights'>
                    <p>All Rights Reserved. Copyright &copy; Jubliant FoodWorld Ltd.</p>
                
                <div class='col d-flex footer_chicken'>
                    <img src={footer_chicken}/>
                </div>
                </div>
            </div> */}

           
</div>
    


   </>
  )
}

export default Footer