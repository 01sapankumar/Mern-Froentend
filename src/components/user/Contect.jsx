import React from "react";
import { useNavigate } from "react-router-dom";
import "./Contact.css";

const Contact = () => {
  const navigate = useNavigate();

  return (
    <div className="contact-page">
      {/* Header Section */}
      <div className="contact-hero">
        <h1>🌿 Get in Touch with Us</h1>
        <p>We’d love to hear from you — let’s grow together organically!</p>
      </div>

      {/* Contact Cards */}
      <div className="contact-cards">
        <a href="tel:+91-8789594418" className="contact-card">
          📞 <span>Call Us</span>
          <p>+91-8789594418</p>
        </a>

        <a href="mailto:sachinsah2217@gmail.com" className="contact-card">
          ✉️ <span>Email Us</span>
          <p>sachinsah2217@gmail.com</p>
        </a>

        <a href="https://wa.me/918789594418" className="contact-card">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg"
            alt="WhatsApp"
            className="icon"
          />
          <span>WhatsApp Chat</span>
        </a>

        <a href="https://www.instagram.com/graincraft_store" className="contact-card">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/a/a5/Instagram_icon.png"
            alt="Instagram"
            className="icon"
          />
          <span>Instagram</span>
        </a>

        <a href="https://facebook.com" className="contact-card">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/5/51/Facebook_f_logo_%282019%29.svg"
            alt="Facebook"
            className="icon"
          />
          <span>Facebook</span>
        </a>
      </div>

      {/* Contact Form */}
      <div className="contact-form-section">
        <h2>📩 Send Us a Message</h2>
        <form className="contact-form">
          <input type="text" placeholder="Your Name" required />
          <input type="email" placeholder="Your Email" required />
          <textarea placeholder="Your Message" rows="4" required></textarea>
          <button type="submit">Send Message</button>
        </form>
      </div>

      {/* Map Section */}
      <div className="contact-map">
        <h2>📍 Our Location</h2>
        <iframe
          title="Our Location"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153!2d144.9559233153159!3d-37.8172099797517!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzfCsDQ5JzAxLjkiUyAxNDTCsDU3JzI0LjAiRQ!5e0!3m2!1sen!2sin!4v1600000000000!5m2!1sen!2sin"
          allowFullScreen=""
          loading="lazy"
        ></iframe>
      </div>

      {/* Continue Shopping */}
      <div className="contact-button-wrap">
        <button className="contact-button" onClick={() => navigate("/")}>
          Continue Shopping 🌾
        </button>
      </div>
    </div>
  );
};

export default Contact;
