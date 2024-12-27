import React from 'react';
import './Features.css';

function Features() {
  return (
    <section className="features" id="features">
      <h2>Why Byta Books?</h2>
      <div className="features__grid">
        <div className="feature-card">
          <h3>Book Clubs</h3>
          <p>Join local or online clubs to read and discuss your favorite titles.</p>
        </div>
        <div className="feature-card">
          <h3>Reading Tracker</h3>
          <p>Easily log your reading progress and maintain a personal reading history.</p>
        </div>
        <div className="feature-card">
          <h3>Social Sharing</h3>
          <p>Share book recommendations, reviews, and discover what others are reading.</p>
        </div>
      </div>
    </section>
  );
}

export default Features;
