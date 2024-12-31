// src/pages/Contact.js
import React from 'react';
import './Contact.css';

function Contact() {
  return (
    <div className="contact-container">
      <h1>Contact Us</h1>
      <p>
        Have questions, comments, or feedback? Get in touch with us using the
        form below!
      </p>
      <form className="contact-form">
        <label>
          Name:
          <input type="text" placeholder="Your Name" required />
        </label>
        <label>
          Email:
          <input type="email" placeholder="Your Email" required />
        </label>
        <label>
          Message:
          <textarea placeholder="Write your message here..." rows="5" required />
        </label>
        <button type="submit">Send</button>
      </form>
    </div>
  );
}

export default Contact;
