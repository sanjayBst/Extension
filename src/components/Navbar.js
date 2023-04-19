import React from "react";
import "./Navbar.css";

function Navbar() {
  return (
    <nav className="navigation">
      <a href="/" className="brand-name">
        <h3>Extension</h3>
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
