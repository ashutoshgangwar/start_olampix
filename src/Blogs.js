import React from "react";
import "./App.css";

function Blogs() {
  return (
    <div className="maincard">
      <h2 className="subheading">"What experts say about games nature"</h2>
      <div className="card-container">
        <div className="card">
          <div className="professional-image">
            <img src="neeraj.jpeg" alt="" />
          </div>
          <div className="Professional-name">
            <h6
              style={{
                color: "Black",
                border: "2px solid Black",
                borderRadius: "15px",
                margin: "10px top",
              }}
            >
              <span style={{ margin: "10px" }}>Ashutosh Gangwar</span>{" "}
            </h6>
          </div>
          <p>
            Despite his young age, Indian javelin thrower Neeraj Chopra has
            already etched his name in the history books by becoming the first
            and only track and field athlete from the country to win an Olympic
            medal that too a gold. He is also a world champion - India's
            first-ever in senior athletics - and a Diamond League winner, also a
            first by any Indian
          </p>
        </div>
        {/* Repeat the card for other profiles */}
        <div className="card">
          <div className="image-comapny">
            <img src="neeraj.jpeg" alt="" />
          </div>
          <div className="job-time">
            <h6
              style={{
                color: "Black",
                border: "2px solid Black",
                borderRadius: "15px",
                margin: "10px top",
              }}
            >
              <span style={{ margin: "10px" }}>Ashutosh Gangwar</span>{" "}
            </h6>
          </div>
          <p>
            Despite his young age, Indian javelin thrower Neeraj Chopra has
            already etched his name in the history books by becoming the first
            and only track and field athlete from the country to win an Olympic
            medal that too a gold. He is also a world champion - India's
            first-ever in senior athletics - and a Diamond League winner, also a
            first by any Indian
          </p>
        </div>

        <div className="card">
          <div className="image-comapny">
            <img src="neeraj.jpeg" alt="" />
          </div>
          <div className="job-time">
            <h6
              style={{
                color: "Black",
                border: "2px solid Black",
                borderRadius: "15px",
                margin: "10px top",
              }}
            >
              <span style={{ margin: "10px" }}>Ashutosh Gangwar</span>{" "}
            </h6>
          </div>
          <p>
            Despite his young age, Indian javelin thrower Neeraj Chopra has
            already etched his name in the history books by becoming the first
            and only track and field athlete from the country to win an Olympic
            medal that too a gold. He is also a world champion - India's
            first-ever in senior athletics - and a Diamond League winner, also a
            first by any Indian
          </p>
        </div>

        <div className="card">
          <div className="image-comapny">
            <img src="neeraj.jpeg" alt="" />
          </div>
          <div className="job-time">
            <h6
              style={{
                color: "Black",
                border: "2px solid Black",
                borderRadius: "15px",
                margin: "10px top",
              }}
            >
              <span style={{ margin: "10px" }}>Ashutosh Gangwar</span>{" "}
            </h6>
          </div>
          <p>
            Despite his young age, Indian javelin thrower Neeraj Chopra has
            already etched his name in the history books by becoming the first
            and only track and field athlete from the country to win an Olympic
            medal that too a gold. He is also a world champion - India's
            first-ever in senior athletics - and a Diamond League winner, also a
            first by any Indian
          </p>
        </div>
      </div>
      {/* Add "Show More" link */}
      <div className="show-more">
        <a href="/more-blogs" className="show-more-link">Show More</a>
      </div>
    </div>
  );
}

export default Blogs;
