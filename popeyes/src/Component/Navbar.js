import React from 'react';
import Navbar_css from './Navbar.css';
import logo from '../Images/popeyes-logo.png';
import { Link } from 'react-router-dom';
import { logout } from '../auth';

const Navbar = () => {
  const Logout=()=>{
    logout()
    window.location.href="/Login"
  }
  return (
    <>
      <div className="Navbar">
        <nav className="navbar navbar-expand-lg bg-light">
          <div className="container-fluid">

            <div>
              <Link className="navbar-brand" to="/">
                <img src={logo} className="logo" alt="logo" />
              </Link>
            </div>

            <div>
              <button
                className="navbar-toggler"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#navbarTogglerDemo01"
                aria-controls="navbarTogglerDemo01"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <span className="navbar-toggler-icon"></span>
              </button>
            </div>

            <div className="collapse navbar-collapse menu-links" id="navbarTogglerDemo01">
              <ul className="navbar-nav ms-auto">

                <li className="nav-item">
                  <Link className="nav-link" to="/">Home</Link>
                </li>

                <li className="nav-item">
                  <Link className="nav-link" to="/menu">Menu</Link>
                </li>

                <li className="nav-item">
                  <Link className="nav-link" to="/store">Stores</Link>
                </li>

              

                <li className="nav-item">
                  <Link className="nav-link" to="/contact">Contact</Link>
                </li>
                
                <li className="nav-item">
                  <Link className="nav-link" to="/login">Login</Link>
                </li>

                <li className="nav-item">
                  <Link className="nav-link" to="/signup">register</Link>
                </li>

                {/* CART ICON */}
                <li className="nav-item">
                  <Link className="nav-link" to="/cart">
                    <i className="fa-solid fa-cart-shopping"></i>
                  </Link>
                </li>

                <li className="nav-item">
                  <Link className="nav-link download-app" onClick={()=>Logout()}>
                    Logout
                  </Link>
                </li>

              </ul>
            </div>

          </div>
        </nav>
      </div>
    </>
  );
};

export default Navbar;
