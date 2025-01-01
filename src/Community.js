import React from "react";
import "./App.css";

const Community = () => {
  const cards = [
    { title: "Design-Build", image: "design-build.jpg" },
    { title: "Remodeling", image: "remodeling.jpg" },
    { title: "City Spaces", image: "city-spaces.jpg" },
    { title: "Civil Engineers", image: "civil-engineers.jpg" },
    { title: "Workspaces", image: "workspaces.jpg" },
    { title: "Housing", image: "housing.jpg" },
    { title: "Architecture", image: "architecture.jpg" },
    { title: "About Us", image: "about-us.jpg" },
  ];

  return (
    <div className="gallery-container">
    <h1 className="gallery-title">Community</h1>
    <div className="community-container">
      {cards.map((card, index) => (
        <div className="card" key={index}>
          <img src={`assets/images/${card.image}`} alt={card.title} className="card-image" />
          <h3 className="card-title">{card.title}</h3>
          <p className="card-description">
            Sample text. Click to select the text box. Click again or double-click to start editing the text.
          </p>
          <button className="card-button">More</button>
        </div>
      ))}
    </div>
    </div>
  );
};

export default Community;
