import React from 'react';
import './DownloadCTA.css';

function DownloadCTA() {
  return (
    <section className="download-cta" id="download">
      <h2>Ready to Dive In?</h2>
      <p>Start sharing and tracking your favorite books today.</p>
      <div className="download-cta__buttons">
        {/* Example: placeholders for Apple/Google store badges */}
        <a href="/" className="app-badge apple">App Store</a>
        <a href="/" className="app-badge google">Google Play</a>
      </div>
    </section>
  );
}

export default DownloadCTA;
