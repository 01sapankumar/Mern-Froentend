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
    <div className="about-wrapper">
      <section className="about-section">
        <h1 className="about-heading">About Us</h1>
        <div
          className={`flip-box ${isFlipped ? "flipped" : ""}`}
          onClick={handleFlip}
        >
          <div className="flip-box-inner">
            <div className="flip-box-front">
              <p>
                GrainCraft Private Limited is a proud manufacturer of premium Poha
                (flattened rice), Katarni Chura, Katarni Rice, and a wide variety
                of pulses. Every product at GrainCraft is crafted with utmost care
                using time-honored, authentic methods that preserve the natural
                taste, aroma, and nutrition of each grain. We are deeply committed
                to purity and sustainability — sourcing only the finest raw
                materials and following organic, chemical-free processes from farm
                to table.
              </p>
            </div>
            <div className="flip-box-back">
              <p>
                ग्रेनक्राफ्ट प्राइवेट लिमिटेड प्रीमियम पोहा (चिवड़ा), कतरनी चूड़ा,
                कतरनी चावल और विभिन्न प्रकार की दालों का गर्वित निर्माता है।
                ग्रेनक्राफ्ट में प्रत्येक उत्पाद को अत्यंत सावधानी और पारंपरिक,
                प्रामाणिक विधियों द्वारा तैयार किया जाता है, जिससे हर अनाज का
                प्राकृतिक स्वाद, सुगंध और पोषण बना रहे।
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="gallery-section">
        <h1 className="about-heading">Our Journey</h1>
        <div className="image-scroll">
          {[
            "https://images.unsplash.com/photo-1609252509027-3928a66302fd",
            "https://images.unsplash.com/photo-1612869538502-b5baa439abd7",
            "https://images.unsplash.com/photo-1621267714769-1ad1508a6bd6",
            "https://images.unsplash.com/photo-1661994215679-cde7c2c5c060",
            "https://images.unsplash.com/photo-1517330357046-3ab5a5dd42a1",
          ].map((url, idx) => (
            <img
              key={idx}
              src={url}
              alt={`Our Gallery ${idx + 1}`}
              className="gallery-image"
              onClick={() => navigate("/")}
            />
          ))}
        </div>
      </section>
    </div>
  );
};

export default About;
