import React from 'react'
import Navbar_css from './Navbar.css'
import logo from '../Images/popeyes-logo.png'
import {Link} from 'react-router-dom'

const Navbar = () => {
  return (
   <>
   
    <div className='Navbar'>
      
        
      <nav class="navbar navbar-expand-lg bg-light">
  <div class="container-fluid">
    <div>
      <a class="navbar-brand" href="#"><img src={logo} className='logo'></img></a>
      </div>
      <div>
         <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button> 
      </div>
      
    
        <div class="collapse navbar-collapse menu-links " id="navbarTogglerDemo01">
      <ul class="navbar-nav ms-auto">
        <li class="nav-item">
          <Link class="nav-link" aria-current="page" to="/">Home</Link>
        </li>
        <li class="nav-item">
          <Link class="nav-link" to="/menu">Menu</Link>
        </li>
        <li class="nav-item">
          <Link class="nav-link "to="/store">Stores</Link>
        </li>
         <li class="nav-item">
          <a class="nav-link"href="#">Our&nbsp;Story</a>
        </li>
         <li class="nav-item">
          <Link class="nav-link" to="/contact">Contact</Link>
        </li>
         <li class="nav-item">  
          <a class="nav-link download-app" href="#">Download&nbsp;App</a>
        </li>
      </ul>
      </div>
      </div>
   </nav>
  
  </div>
    



  

   </>
  )
}

export default Navbar