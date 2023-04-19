import React from "react";
import "./Navbar.css";

function Navbar() {
  return (
    <nav className="navigation">
      <a href="/" className="brand-name">
        <img src='https://i0.wp.com/extensionerp.com/wp-content/uploads/2020/05/Extension-ERP-06-3.png?fit=3312%2C1026&ssl=1' height="auto" width="154" />
        
      </a>
      <div className="navigation-menu">
        <ul>
          <a href="/">Platforms</a>

          <a href="/">Services</a>

          <a href="/">Industries</a>

          <a href="/">Insights  </a>

          <a href="/">Discover Extension</a>

          <a href="/">Contact Us</a>

          <button className="book-btn">Book Now</button>
          <input className="search" type="text" placeholder="Search.." />
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
