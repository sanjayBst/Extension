import React from "react";
import "./Navbar.css";

function Navbar() {
  return (
    <nav className="navigation">
      <a href="/" className="brand-name">
        Extension
      </a>
      <div className="navigation-menu">
        <ul>
          <li>
            <a href="/home">Home</a>
          </li>
          <li>
            <a href="/about">About</a>
          </li>
          <li>
            <a href="/contact">Contact</a>
          </li>
          <li>
            <a href="/contact1">Contact1</a>
          </li>
          <li>
            <a href="/contact2">Contact2</a>
          </li>
          <li>
            <a href="/contact3">Contact3</a>
          </li>
          <button className='book-btn' >Book Now</button>
          <input className="search" type="text" placeholder="Search.."/>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
