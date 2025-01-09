import React from 'react';
import './Footer.css';

// Using Font Awesome as an example
// Make sure Font Awesome is included in your project (CDN or npm package)
function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-social">
        <a
          href="https://www.facebook.com/YourPage"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Facebook"
        >
          <i className="fab fa-facebook-f"></i>
        </a>
        <a
          href="https://twitter.com/YourProfile"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Twitter"
        >
          <i className="fab fa-twitter"></i>
        </a>
        <a
          href="https://www.instagram.com/YourProfile"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Instagram"
        >
          <i className="fab fa-instagram"></i>
        </a>
      </div>
    </footer>
  );
}

export default Footer;
