import React, { useEffect, useState } from "react";

// Import images from src folder
import homeImage from "../images/image.png";
import logoflagImage1 from "../images/image1.jpg";
import logoflagImage2 from "../images/image2.jpg";
import logoflagImage3 from "../images/badminton.jpg";
import logoflagImage4 from "../images/weight.jpg";
import logoflagImage5 from "../images/home4.jpg";
import logoflagImage6 from "../images/logoflag.jpg";

function Homepage() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const images = [
    logoflagImage6,
    homeImage,
    logoflagImage1,
    logoflagImage2,
    logoflagImage3,
    logoflagImage4,
    logoflagImage5,
    
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <div className="home-container">
      <div className="carousel">
        {images.map((image, index) => (
          <div
            key={index}
            className={`carousel-slide ${
              index === currentImageIndex ? "active" : ""
            }`}
            style={{ backgroundImage: `url(${image})` }}
          ></div>
        ))}
      </div>

      <div className="floating-card">
        <h1>OUR MISSION</h1>
        <p>
          Olympic athletes represent their countries in the Olympic Games,
          demonstrating skill and perseverance after years of training.
        </p>
        <button className="button">READ MORE</button>
      </div>

      <div className="carousel-indicators">
        {images.map((_, index) => (
          <span
            key={index}
            className={`indicator ${
              index === currentImageIndex ? "active" : ""
            }`}
            onClick={() => setCurrentImageIndex(index)}
          ></span>
        ))}
      </div>
    </div>
  );
}

export default Homepage;
