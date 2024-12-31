// src/pages/Home.js
import React from 'react';
import appStoreBadge from '../assets/app-store-badge.png';
import googlePlayBadge from '../assets/google-play-badge.png';
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

      <section className="download-section">
        <h2>Get the App</h2>
        <p>Experience a whole new world of books!</p>

        <div className="store-buttons">
          <a
            href="https://www.apple.com/app-store/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src={appStoreBadge}
              alt="Download on the App Store"
              className="store-badge"
            />
          </a>
          <a
            href="https://play.google.com/store/apps?utm_source=na_Med&utm_medium=hasem&utm_content=Nov0520&utm_campaign=Evergreen&pcampaignid=MKT-EDR-na-us-1707532-Med-hasem-ap-Evergreen-Nov0520-Text_Search_BKWS-id_100470_%7CEXA%7CONSEM_kwid_43700023142507484_adgroupid_44836427996_keywordid_kwd-301799607097&gad_source=1&gclid=Cj0KCQiAyc67BhDSARIsAM95Qzv5L-s3qG5uIATXZlqYUYiksQLA90tQyhcYBI7yYcbuT8HrIXANbbgaArEoEALw_wcB&gclsrc=aw.ds" 
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src={googlePlayBadge}
              alt="Get it on Google Play"
              className="store-badge"
            />
          </a>
        </div>
      </section>
    </div>
  );
}

export default Home;
