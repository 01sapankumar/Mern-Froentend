import React from "react";
import { useNavigate } from "react-router-dom";
import "./Contact.css"; // ✅ External CSS

const Contact = () => {
  const navigate = useNavigate();

  return (
    <div className="contact-container">
      <h1 className="contact-heading">Contact Us</h1>
      <p className="contact-subtext">Feel free to reach out to us!</p>

      <div className="contact-options">
        <a href="tel:+91-8789594418" className="contact-link">
          📞 Call: +91-8789594418
        </a>
        <a href="mailto:sachinsah2217@gmail.com" className="contact-link">
          ✉️ Email: sachinsah2217@gmail.com
        </a>
        <a href="https://wa.me/918789594418" className="contact-link">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg"
            alt="WhatsApp"
            className="icon"
          />
          WhatsApp
        </a>
        <a href="https://facebook.com" className="contact-link">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/5/51/Facebook_f_logo_%282019%29.svg"
            alt="Facebook"
            className="icon"
          />
          Facebook
        </a>
        <a
          href="https://www.instagram.com/graincraft_store/?igsh=MXg3aWozMGZ0bnU5cw%3D%3D#"
          className="contact-link"
        >
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/a/a5/Instagram_icon.png"
            alt="Instagram"
            className="icon"
          />
          Instagram
        </a>
      </div>

      <div className="contact-button-wrap">
        <button className="contact-button" onClick={() => navigate("/")}>
          Continue Shopping..
        </button>
      </div>
    </div>
  );
};

export default Contact;
