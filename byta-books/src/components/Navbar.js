import React from 'react';
import './Navbar.css';

function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar__logo">Byta Books</div>
      <ul className="navbar__links">
        <li><a href="#features">Features</a></li>
        <li><a href="#download">Download</a></li>
        <li><button className="signup-btn">Sign Up</button></li>
      </ul>
    </nav>
  );
}

export default Navbar;
