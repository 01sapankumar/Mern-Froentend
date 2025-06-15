import React, { useState } from "react";
import { useNavigate } from "react-router-dom";


const About = () => {
  const navigate = useNavigate();
  const [isFlipped, setIsFlipped] = useState(false);

  const handleFlip = () => {
    setIsFlipped(!isFlipped);
  };

  return (
    <div className="">
    <div className="about-container">
      <div className="h1">
                  <h1>About Us</h1>
                  </div>
      <div className={`flip-box ${isFlipped ? "flipped" : ""}`} onClick={handleFlip}>
        <div className="flip-box-inner">
          <div className="flip-box-front">
          <p>
GrainCraft Private Limited is a proud manufacturer of premium Poha (flattened rice), Katarni Chura, Katarni Rice, and a wide variety of pulses. Every product at GrainCraft is crafted with utmost care using time-honored, authentic methods that preserve the natural taste, aroma, and nutrition of each grain. We are deeply committed to purity and sustainability — sourcing only the finest raw materials and following organic, chemical-free processes from farm to table. At GrainCraft, we blend the rich culinary heritage of Bihar with modern quality standards, ensuring that every bite offers the true Taste of Bihar — fresh, wholesome, and rooted in tradition.            </p>
          </div>
          <div className="flip-box-back">
           
            <p>
ग्रेनक्राफ्ट प्राइवेट लिमिटेड प्रीमियम पोहा (चिवड़ा), कतरनी चूड़ा, कतरनी चावल और विभिन्न प्रकार की दालों का गर्वित निर्माता है। ग्रेनक्राफ्ट में प्रत्येक उत्पाद को अत्यंत सावधानी और पारंपरिक, प्रामाणिक विधियों द्वारा तैयार किया जाता है, जिससे हर अनाज का प्राकृतिक स्वाद, सुगंध और पोषण बना रहे। हम शुद्धता और सततता के प्रति पूरी तरह समर्पित हैं — केवल सर्वोत्तम कच्चे माल का चयन करते हैं और खेत से भोजन तक पूरी प्रक्रिया में जैविक, रासायन-मुक्त तरीकों का पालन करते हैं। ग्रेनक्राफ्ट में हम बिहार की समृद्ध पाक विरासत को आधुनिक गुणवत्ता मानकों के साथ मिलाकर हर निवाले में बिहार का असली स्वाद प्रदान करते हैं — ताजा, पौष्टिक और परंपरा में रचा-बसा।

            </p>
          </div>
        </div>
      </div>

      <div className="about-gallery md-col-6">
      <div className="h1">
                  <h1> Our Journey</h1>
                  </div>
                          <div
          className="image-scroll"
          onClick={() => {
            navigate("/");
          }}
        >
          <img
            src="https://images.unsplash.com/photo-1609252509027-3928a66302fd?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8aW5kaWFuJTIwZmFybWVyfGVufDB8fDB8fHww"
            alt="Our Team"
          />
          <img
            src="https://media.gettyimages.com/id/1437246614/photo/close-up-of-raw-poha-beaten-rice-flattened-rice-in-a-brass-uruli-brass-oil-lamp.jpg?s=612x612&w=0&k=20&c=IXt8KbFjqPycQEn8VKMwHF26G-Jm0z3bReJHkmNbNrc="
            alt="Our City"
          />
          <img
            src="https://media.gettyimages.com/id/2165560702/photo/sev-khamani.jpg?s=612x612&w=gi&k=20&c=OTI1G8-VurcRcAvHEj0_-x9DefRUDoyF0sV9Hq-xWc8="
            alt="Our Rice"
          />
          <img
            src="https://images.unsplash.com/photo-1612869538502-b5baa439abd7?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fGdyYWluc3xlbnwwfHwwfHx8MA%3D%3D"
            alt="Our Grains"
          />
          <img
            src="https://images.unsplash.com/photo-1621267714769-1ad1508a6bd6?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fGZvb2QlMjBmYWN0b3J5fGVufDB8fDB8fHww"
            alt="Our Store"
          />
          <img
            src="https://images.unsplash.com/photo-1661994215679-cde7c2c5c060?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fHR5cGUlMjBvZiUyMGZvb2R8ZW58MHx8MHx8fDA%3D"
            alt="Happy Customers"
          />
          <img
            src="https://images.unsplash.com/photo-1517330357046-3ab5a5dd42a1?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YmloYXIlMjBjaXR5fGVufDB8fDB8fHww"
            alt="Our City"
          />
        </div>
      </div>
    </div>
    </div>
  );
};

export default About;
