import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./About.css";

const About = () => {
  const navigate = useNavigate();
  const [isFlipped, setIsFlipped] = useState(false);

  const handleFlip = () => {
    setIsFlipped(!isFlipped);
  };

  return (
    <div className="about-container">
      {/* Hero Banner */}
      <section className="intro-banner fade-in">
        <h1>About GrainCraft</h1>
        <p>Preserving Tradition, Delivering Purity</p>
      </section>

      {/* Company Story Flip Card */}
      <section className="company-story slide-up">
        <h2 className="section-heading">Who We Are</h2>
        <div
          className={`info-flip-card ${isFlipped ? "flipped" : ""}`}
          onClick={handleFlip}
        >
          <div className="flip-card-inner">
            <div className="flip-card-front">
              <p>
                GrainCraft Private Limited is a proud manufacturer of premium Poha
                (flattened rice), Katarni Chura, Katarni Rice, and a wide variety
                of pulses. Every product is crafted with utmost care using
                authentic, time-tested methods that preserve the natural taste,
                aroma, and nutritional value of each grain. Our state-of-the-art
                facilities combine traditional craftsmanship with modern
                technology to ensure unmatched quality at every stage. From
                sourcing the finest raw materials directly from trusted farmers
                to maintaining rigorous hygiene and safety standards, we are
                dedicated to delivering products that are not just wholesome but
                also a true reflection of India’s rich agricultural heritage.
              </p>
            </div>
            <div className="flip-card-back">
              <p>
                ग्रेनक्राफ्ट प्राइवेट लिमिटेड प्रीमियम पोहा, कतरनी चूड़ा, कतरनी चावल और
                विभिन्न प्रकार की दालों का गर्वित निर्माता है। हम परंपरागत तरीकों और
                आधुनिक तकनीक का संतुलन बनाए रखते हुए, हर अनाज का प्राकृतिक स्वाद, सुगंध
                और पोषण बरकरार रखते हैं। हमारे उत्पाद शुद्धता, गुणवत्ता और स्वास्थ्य का
                प्रतीक हैं, जो हर रसोई में स्वाद और पोषण का मेल लेकर आते हैं। ग्रेनक्राफ्ट
                का उद्देश्य है कि हर घर तक ताज़ा और शुद्ध अनाज पहुँचे, ताकि आपके परिवार
                को मिले बेहतरीन स्वाद और बेहतर सेहत।
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="brand-values fade-in">
        <h2 className="section-heading">Our Core Values</h2>
        <div className="values-list">
          {[
            {
              img: "https://img.icons8.com/ios-filled/100/leaf.png",
              title: "Purity",
              desc: "Only the finest, chemical-free grains reach your table."
            },
            {
              img: "https://cdn-icons-png.flaticon.com/128/1598/1598196.png",
              title: "Sustainability",
              desc: "Eco-friendly practices from sourcing to packaging."
            },
            {
              img: "https://cdn-icons-png.flaticon.com/128/15867/15867239.png",
              title: "Authenticity",
              desc: "Time-honored methods preserving original taste and aroma."
            }
          ].map((value, idx) => (
            <div key={idx} className="value-item zoom-in">
              <img src={value.img} alt={value.title} />
              <h3>{value.title}</h3>
              <p>{value.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Company Stats */}
      <section className="company-stats slide-up">
        <div className="stat-card">
          <h2>10+</h2>
          <p>Years of Experience</p>
        </div>
        <div className="stat-card">
          <h2>50K+</h2>
          <p>Happy Customers</p>
        </div>
        <div className="stat-card">
          <h2>20+</h2>
          <p>Product Varieties</p>
        </div>
      </section>

      {/* Timeline */}
      <section className="company-timeline fade-in">
        <h2 className="section-heading text-white">Our Journey</h2>
        <div className="timeline-track">
          {[
            { year: "2015", text: "Started with premium Katarni Rice." },
            { year: "2018", text: "Expanded into Poha and pulse varieties." },
            { year: "2022", text: "Launched nationwide distribution network." }
          ].map((step, idx) => (
            <div key={idx} className="timeline-node">
              <span className="year">{step.year}</span>
              <p>{step.text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Footer */}
   <footer className="footer">
  <div className="footer-content">
    <p>© {new Date().getFullYear()} GrainCraft Pvt. Ltd. — Harvesting Tradition, Serving Purity.</p>
    <p>
      Crafted with <span className="heart">❤️</span> &amp; Nature’s Touch by{" "}
      <a href="#" target="_blank" rel="noopener noreferrer">Nandni Raj</a>
    </p>
  </div>
</footer>

    </div>
  );
};

export default About;
