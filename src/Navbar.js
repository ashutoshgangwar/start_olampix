import React from "react";
import { Link } from "react-scroll";


export default function Navbar(props) {
  const offset = -70;

  const navbarStyle = {
    backgroundColor: props.backgroundColor || "rgba(161, 13, 13, 0.911)",
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-light" style={navbarStyle}>
      <div className="container-fluid justify-content-center">
        <a
          className="navbar-brand"
          href="/"
          style={{ color: "White", fontWeight: "bold" }}
        >
          {props.title}
        </a>

        {/* Navbar Toggler for Mobile View */}
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse justify-content-center" id="navbarNav">
          {/* Centered Navbar Items */}
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link
                to="Homepage"
                smooth={true}
                duration={100}
                offset={offset}
                className="nav-link"
              >
                Home
              </Link>
            </li>


            <li className="nav-item">
              <Link
                to="Product"
                smooth={true}
                duration={100}
                offset={offset}
                className="nav-link"
              >
                Products
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="Accordion"
                smooth={true}
                duration={100}
                offset={offset}
                className="nav-link"
              >
                About Us
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="Card"
                smooth={true}
                duration={100}
                offset={offset}
                className="nav-link"
              >
                Experience
              </Link>
            </li>
            {/* <li className="nav-item">
              <Link
                to="Project"
                smooth={true}
                duration={100}
                offset={offset}
                className="nav-link"
              >
                Projects
              </Link>
            </li> */}

            <li className="nav-item">
              <Link
                to="Query"
                smooth={true}
                duration={100}
                offset={offset}
                className="nav-link"
              >
                Query
              </Link>
            </li>

            <li className="nav-item">
              <Link
                to="Footer"
                smooth={true}
                duration={100}
                offset={offset}
                className="nav-link"
              >
                Contact Us
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
