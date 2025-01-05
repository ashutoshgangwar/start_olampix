import React from "react";
import backgroundImage from "./images/home4.jpg"; // Adjust path based on actual file structure

function Homepage() {
  return (
    <div
      className="home-container"
      style={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        height: "100vh",
        width: "100vw",
      }}
    >
      <div className="overlay"></div>
      <div className="content">
        <h1>Game on!</h1>
        <p>
          Olympic athletes are elite competitors who represent their countries
          in the Olympic Games, the world's premier international sporting
          competition. These athletes demonstrate exceptional skill, dedication,
          and perseverance, often spending years training for a chance to
          compete on the global stage.
        </p>
        <button className="button">READ MORE</button>
      </div>
    </div>
  );
}

export default Homepage;
