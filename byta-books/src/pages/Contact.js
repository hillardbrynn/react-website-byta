// src/pages/Contact.js
import React, { useState } from "react";
import "./Contact.css";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [statusMessage, setStatusMessage] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("http://localhost:5001/send", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setStatusMessage("Your message has been sent successfully!");
        setFormData({ name: "", email: "", message: "" });
      } else {
        setStatusMessage("Something went wrong. Please try again.");
      }
    } catch (error) {
      setStatusMessage("An error occurred. Please try again.");
    }
  };

  return (
    <div className="contact-container">
      <h1>Contact Us</h1>
      <p>Have questions, comments, or feedback? Get in touch with us!</p>
      <form className="contact-form" onSubmit={handleSubmit}>
        <label>
          Name:
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Your Name"
            required
          />
        </label>
        <label>
          Email:
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Your Email"
            required
          />
        </label>
        <label>
          Message:
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            placeholder="Write your message here..."
            rows="5"
            required
          />
        </label>
        <button type="submit">Send</button>
        {statusMessage && <p>{statusMessage}</p>}
      </form>
    </div>
  );
}

export default Contact;
