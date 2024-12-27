import React from 'react';
import './Hero.css';
import heroImage from '../assets/hero.jpg'; // example image

function Hero() {
  return (
    <section className="hero">
      <div className="hero__content">
        <h1>Expand Your Reading World</h1>
        <p>
          Discover, share, and keep track of the books you love.
          Join our book-sharing community and explore your next favorite read.
        </p>
        <button className="hero__cta">Get Started</button>
      </div>
      <div className="hero__image">
        {/* Show an image or illustration here */}
        <img src={heroImage} alt="Stack of books" />
      </div>
    </section>
  );
}

export default Hero;
