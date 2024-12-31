// src/pages/Home.js
import React from 'react';
import './Home.css'; // If you want separate styling, create it

function Home() {
  return (
    <div className="home-container">
      <header className="hero-section">
        <h1>Welcome to Booksterr</h1>
        <p>Your favorite reading circle app!</p>
        <button className="cta-button">Try Booksterr</button>
      </header>

      <section className="info-section">
        <h2>Why Booksterr?</h2>
        <p>
        Welcome to a vibrant, community-driven space where bibliophiles connect 
        and bond over their favorite titles. Discover new reads, share personalized 
        recommendations, and forge lasting friendships—all through the power of 
        literature. By turning reading into a shared adventure, this social media book 
        club brings people together to learn, laugh, and grow—one page at a time.
        </p>
      </section>
    </div>
  );
}

export default Home;
