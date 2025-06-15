import React from "react";
import { useNavigate } from "react-router-dom";

const Contact = () => {
  const navigate = useNavigate();
  return (
    <>
    <div className="md-col-6" style={styles.container}>
    <h1 style={styles.heading}>Contact Us</h1>
    <p style={styles.text}>Feel free to reach out to us!</p>
    <div style={styles.contactOptions}>
      <a href="tel:+91-8789594418" style={styles.link}>
        📞 Call: +91-8789594418
      </a>
      <a href="mailto:sachinsah2217@gmail.com" style={styles.link}>
        ✉️ Email: sachinsah2217@gmail.com
      </a>
      <a
        href="https://wa.me/918789594418" 
        style={styles.link}
        id="whatsapp-link"
      >
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg"
          alt="WhatsApp"
          style={{ width: 24, height: 24, marginRight: 8 }}
        />
        WhatsApp
      </a>
      <a
        href="https://facebook.com"
        style={styles.link}
        id="facebook-link"
      >
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/5/51/Facebook_f_logo_%282019%29.svg"
          alt="Facebook"
          style={{ width: 24, height: 24, marginRight: 8 }}
        />
        Facebook
      </a>
      <a
        href="https://www.instagram.com/graincraft_store/?igsh=MXg3aWozMGZ0bnU5cw%3D%3D#"
        style={styles.link}
        id="instagram-link"
      >
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/a/a5/Instagram_icon.png"
          alt="Instagram"
          style={{ width: 24, height: 24, marginRight: 8 }}
        />
        Instagram
      </a>
    </div>
    <div className="d-flex justify-content-center align-items-center md-col-6 my-3">
  <button 
    className="custom-button" 
    onClick={() => navigate('/')}
  >
    Continue Shopping..
  </button>   
</div>


  </div>
  </>
  
  );
};

const styles = {
  container: {
    padding: "20px",
    fontFamily: "Arial, sans-serif",
    textAlign: "center",
    backgroundColor: "#f9f9f9",
    minHeight: "100vh",
    flexDirection: "column",
    justifyContent: "center",
  },
  heading: {
    fontSize: "48px", // Updated size for prominence
    fontWeight: "bold",
    marginBottom: "20px",
    color: "#007BFF",
    textShadow: "2px 2px 4px rgba(0, 0, 0, 0.2)", // Glow effect
    background: "linear-gradient(90deg, #ff758c, #ff7eb3)", // Gradient
    WebkitBackgroundClip: "text",
    WebkitTextFillColor: "transparent",
    animation: "text-glow 2s ease-in-out infinite",
  },
  text: {
    fontSize: "20px", // Updated font size for better readability
    marginBottom: "30px",
    color: "#ff758c",
    fontStyle: "italic", // Italicized for style
    lineHeight: "1.6", // Improved line spacing
    fontWeight:"bold",
  },
  contactOptions: {
    display: "flex",
    flexDirection: "column",
    gap: "10px",
  },
  link: {
    textDecoration: "none",
    fontWeight:"bold",
    fontSize: "20px",
    color: "#007BFF",
    backgroundColor: "#EAEAEA",
    padding: "10px 20px",
    borderRadius: "5px",
    border: "1px solidrgb(5, 39, 77)",
    transition: "background-color 0.3s, color 0.3s",
  },
  "@keyframes text-glow": {
    "0%": { textShadow: "2px 2px 4px rgba(0, 0, 0, 0.2)" },
    "50%": { textShadow: "4px 4px 8px rgba(0, 0, 0, 0.4)" },
    "100%": { textShadow: "2px 2px 4px rgba(0, 0, 0, 0.2)" },
  },
};


export default Contact;
