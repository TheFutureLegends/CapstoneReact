import React from "react";
import "../css/Navbar.css"
// import { Navbar, Nav, Button } from "react-bootstrap";


const Navbar = () => {
  return (
    <div className="sticky-top">
      <header className="default-header">
        <nav className="navbar navbar-expand-lg navbar-light bg-dark">
          <div className="container">
            <a className="navbar-brand">
              <img src="img/logo.png" alt="" />
            </a>
            <button
              className="navbar-toggler"
              type="button"
              data-toggle="collapse"
              data-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon" />
            </button>
            <div
              className="collapse navbar-collapse justify-content-end align-items-center"
              id="navbarSupportedContent"
            >
              <ul className="navbar-nav">
                <li>
                  <a href="/home">Home</a>
                </li>
                <li>
                  <a href="/study-guides">Study guides</a>
                </li>
                <li>
                  <a href="/projects">Innovative project</a>
                </li>
                <li>
                  <a href="/about-us">About us</a>
                </li>
               {/* user profile & sign in */}
               <li>
                 <a><img src="img/user.jpg" className="user-profile" alt="" /></a>
               </li>
               <li>
                 <a><button type="button" className="btn btn-primary">Sign in</button></a>
               </li>

              </ul>
            </div>
          </div>
        </nav>
      </header>
      {/* End Header Area */}
    </div>
  );
};
export default Navbar;