import React from "react";
import "./App.css";

const Community = () => {
  const cards = [
    {
      title: "Ex-Athlete",
      image: "athlete.jpeg",
      description: "Former athletes who contribute to the sports community through their experience and knowledge.",
    },
    {
      title: "Coach",
      image: "coach.jpeg",
      description: "Experienced coaches who train and mentor individuals or teams in sports.",
    },
    {
      title: "Therapist",
      image: "therapy.jpeg",
      description: "Experts providing physical therapy and rehabilitation to athletes and individuals.",
    },
    {
      title: "Sports Manager",
      image: "manager.jpeg",
      description: "Professionals managing sports events, teams, and athlete careers.",
    },
    {
      title: "Orthopedic",
      image: "ortho.jpeg",
      description: "Specialists treating injuries and conditions related to bones, joints, and muscles.",
    },
    {
      title: "Sports Psychologist",
      image: "sphychologist.jpeg",
      description: "Psychologists focusing on mental well-being and performance of athletes.",
    },
    {
      title: "Nutritionist",
      image: "nutrition.jpeg",
      description: "Nutrition experts advising athletes on diets for peak performance.",
    },
    {
      title: "Doctor",
      image: "doctor.jpeg",
      description: "Medical professionals ensuring athletes’ overall health and fitness.",
    },
  ];

  return (
    <div className="gallery-container">
      <h1 className="gallery-title">Community</h1>
      <div className="community-container">
        {cards.map((card, index) => (
          <div className="card" key={index}>
            {/* Correcting the src path to work with the public folder */}
            <img src={`/${card.image}`} alt={card.title} className="card-image" />
            <h3 className="card-title">{card.title}</h3>
            <p className="card-description">{card.description}</p>
            <button className="card-button">More</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Community;
