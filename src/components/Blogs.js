import React from "react";
import "./../App.css";

const expertData = [
  {
    img: "/expert/pt-usha.jpeg",
    name: "P.T. USHA",
    title: "President of Indian Olympic Asso.",
    details:
      "Neeraj Chopra became the first and only track and field athlete from India to win an Olympic gold medal. He is also a world champion and a Diamond League winner.",
  },
  {
    img: " /2012/mary_kom.jpeg",
    name: "Mary Kom",
    title: "World Champion Boxer",
    details:
      "Fulton won the FIH Coach of the Year in 2015 and was the assistant coach of Belgium when they won the 2018 FIH Hockey World Cup and Olympic gold at Tokyo 2020.",
  },
  {
    img: "/expert/Craig_Fulton.jpeg",
    name: "CRAIG FULTON",
    title: "Indian Hockey Team Coach",
    details:
      "Fulton won the FIH Coach of the Year in 2015 and was the assistant coach of Belgium when they won the 2018 FIH Hockey World Cup and Olympic gold at Tokyo 2020.",
  },
      {
    img: "/2012/sushil.jpeg",
    name: "Sunil Chhetri",
    title: "World champion Wrestling",
    details:
      "Sunil Chhetri is the captain of the Indian national football team and one of the highest goal scorers in international football.",
  },
];

function Blogs() {
  return (
    <div className="maincard">
      <h2 className="subheading">What experts say about games nature</h2>
      <div className="card-container">
        {expertData.map((expert, index) => (
          <div className="card" key={index}>
            <div className="professional-image">
              <img src={expert.img} alt={expert.name} />
            </div>
            <div className="Professional-name">
              <h6 className="name-tag">
                <span>{expert.name}</span>
              </h6>
            </div>
            <div className="expert">
              <h5>{expert.title}</h5>
            </div>
            <p>{expert.details}</p>
          </div>
        ))}
      </div>
      <div className="show-more">
        <a href="/more-blogs" className="button">
          Show All
        </a>
      </div>
    </div>
  );
}

export default Blogs;
