// src/components/NavBar.js
import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

function NavBar() {
  return (
    <nav className="top-nav">
      <div className="nav-logo">
        <Link to="/">Booksterr</Link>
      </div>
      <ul className="nav-links">
        <li>
          <Link to="/how-it-works">How It Works</Link>
        </li>
        <li>
          <Link to="/meet-the-team">Meet The Team</Link>
        </li>
        <li>
          <Link to="/contact">Contact</Link>
        </li>
      </ul>
    </nav>
  );
}

export default NavBar;
