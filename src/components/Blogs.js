import React from "react";
import "./../App.css";

const expertData = [
  {
    img: "/expert/pt-usha.jpeg",
    name: "P.T. USHA",
    title: "President of Indian Olympic Asso.",
    details:
      "Pilavullakandi Thekkeparambil Usha (born 27 June 1964) is an Indian sports administrator and retired track and field athlete. Usha was born in Koothali near Perambra in Kozhikode district, Kerala. She grew up in Payyoli. Usha has been associated with Indian athletics since 1979.She has won 4 gold medals and 7 silver medals in the Asian Games. She is often associated as the `Queen of Indian track and field`",
  },
  {
    img: " /2012/mary_kom.jpeg",
    name: "Mary Kom",
    title: "World Champion Boxer",
    details:
      "Mangte Chungneijang Mary Kom (born 24 November 1982) is an Indian Olympic boxer, politician, and former Member of Rajya Sabha. She is the only woman to win the World Amateur Boxing Championship six times, the only female boxer to have won a medal in each one of the first seven World Championships, and the only boxer (male or female) to win eight World Championship medals.Nicknamed Magnificent Mary."
    }, 
  {
    img: "/expert/Craig_Fulton.jpeg",
    name: "CRAIG FULTON",
    title: "Indian Hockey Team Coach",
    details:
      "Craig Fulton (born 6 November 1974) is a South African coach and former field hockey player. He currently coaches the India men's national team. As a player-coach with Pembroke Wanderers he won two Irish Senior Cups, two Men's Irish Hockey League titles and the EuroHockey Club Trophy. As a coach Fulton guided Ireland to third place at the 2015 Men's EuroHockey Nations Championship and to qualification for both the 2016 Summer Olympics and the 2018 Men's Hockey World Cup.",
  },
      {
    img: "/expert/sunil_chhrtri.jpeg",
    name: "Sunil Chhetri",
    title: "Indian Professional Footballer",
    details:
      "Sunil Chhetri (born 3 August 1984) is an Indian professional footballer who plays as a forward for Indian Super League club Bengaluru. He is the all-time top scorer in Indian Super League history. He is known for his link-up play, goal scoring abilities, and leadership.He is the fourth-highest international goalscorer,and is also the most-capped player and the all-time top goalscorer of the India national team. He is widely regarded as the greatest Indian football player of all time.",
  },
  {
    img: "/expert/Neeraj_Chopra.jpg",
    name: "Neeraj Chopra",
    title: "World Champion,",
    details:
      "Subedar Major Neeraj Chopra PVSM VSM (born 24 December 1997) is an Indian track and field athlete. Considered as the greatest Indian javelin thrower, he's a double medalist at the Olympics, World Championships, and the Asian Games. He has won the Diamond League once. Chopra won the gold medal at the 2020 Olympics, becoming the first Asian javelin throw athlete to do so. He became the first Asian to win a gold in javelin at the World Championships after his win in 2023. Chopra has won gold medals in every major tournament.",
  },
  {
    img: "/expert/Neeraj_Chopra.jpg",
    name: "Neeraj Chopra",
    title: "World Champion,",
    details:
      "Subedar Major Neeraj Chopra PVSM VSM (born 24 December 1997) is an Indian track and field athlete. Considered as the greatest Indian javelin thrower, he's a double medalist at the Olympics, World Championships, and the Asian Games. He has won the Diamond League once. Chopra won the gold medal at the 2020 Olympics, becoming the first Asian javelin throw athlete to do so. He became the first Asian to win a gold in javelin at the World Championships after his win in 2023. Chopra has won gold medals in every major tournament.",
  },
  {
    img: "/expert/Neeraj_Chopra.jpg",
    name: "Neeraj Chopra",
    title: "World Champion,",
    details:
      "Subedar Major Neeraj Chopra PVSM VSM (born 24 December 1997) is an Indian track and field athlete. Considered as the greatest Indian javelin thrower, he's a double medalist at the Olympics, World Championships, and the Asian Games. He has won the Diamond League once. Chopra won the gold medal at the 2020 Olympics, becoming the first Asian javelin throw athlete to do so. He became the first Asian to win a gold in javelin at the World Championships after his win in 2023. Chopra has won gold medals in every major tournament.",
  },
  {
    img: "/expert/Neeraj_Chopra.jpg",
    name: "Neeraj Chopra",
    title: "World Champion,",
    details:
      "Subedar Major Neeraj Chopra PVSM VSM (born 24 December 1997) is an Indian track and field athlete. Considered as the greatest Indian javelin thrower, he's a double medalist at the Olympics, World Championships, and the Asian Games. He has won the Diamond League once. Chopra won the gold medal at the 2020 Olympics, becoming the first Asian javelin throw athlete to do so. He became the first Asian to win a gold in javelin at the World Championships after his win in 2023. Chopra has won gold medals in every major tournament.",
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
