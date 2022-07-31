import React, { useEffect, useState } from "react";
import "./Navbar.css";

function Navbar() {
  const [isLoggedIn,setIsLoggedIn] = useState(false)
  

  const logoutInitiated = () => {
    localStorage.removeItem("userId")
    window.location.href = "/";
}

const loginInitiated=()=>{

  const userId = JSON.parse(localStorage.getItem("userId"))
  if(userId){
       setIsLoggedIn(true);
  }
}


  return (
    <div >
      <header>
        <nav className="navbar navbar-expand-md navbar-light bg-primary fixed-top">
          <div className="container p-2">
            <a href="/" className="navbar-brand text-white">
              My Website
            </a>
            <button
              className="navbar-toggler"
              data-bs-toggle="collapse"
              data-bs-target="#myNavbar"
              aria-controls="myNavbar"
              aria-expanded="false"
              aria-label="toggle-navigation"
              type="button"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse " id="myNavbar">
              <ul className="navbar-nav ms-auto">
                <li className="nav-item ">
                  <a href="/" className="nav-link text-white">
                    Home
                  </a>
                </li>
                <li className="nav-item">
                  <a href="#aboutSection" className="nav-link text-white">
                    About
                  </a>
                </li>
                <li className="nav-item">
                  <a href="/" className="nav-link text-white">
                    Blog
                  </a>
                </li>
                <li class="nav-item dropdown ">
                  <a
                    className="nav-link dropdown-toggle text-white"
                    href="/"
                    id="navbarDropdown"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    Join
                  </a>
                  <ul
                    className="dropdown-menu"
                    aria-labelledby="navbarDropdown"
                  >
                    <li>
                      <a className="dropdown-item" href="/">
                        Facebook
                      </a>
                    </li>
                    <hr className="dropdown-divider" />
                    <li>
                      <a className="dropdown-item" href="/">
                        Instagram
                      </a>
                    </li>
                    <li>
                      <hr className="dropdown-divider" />
                    </li>

                    <li>
                      <a className="dropdown-item" href="/">
                        You Tube
                      </a>
                    </li>
                  </ul>
                </li>
                <li className="nav-item">
                  <a href="#contactSection" className="nav-link text-white">
                    Contact
                  </a>
                </li>
                <li className="nav-item">
                  <a href="register" className="nav-link text-white">
                    Register
                  </a>
                </li>
                <li className="nav-item">
                  <a href="/login" className="nav-link text-white" onClick={loginInitiated}>
                    Login
                  </a>
                </li>
             {isLoggedIn &&  <li className="nav-item">
                  <a href="/" className="nav-link text-white" onClick={logoutInitiated }>
                    Logout
                  </a>
                </li>}   
              </ul>
            </div>
          </div>
        </nav>
      </header>
     
          
    </div>
  );
}

export default Navbar;
