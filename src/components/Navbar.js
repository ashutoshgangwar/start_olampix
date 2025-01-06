import React from "react";
import { Link } from "react-scroll";
import "./../App.css";

export default function Navbar() {
  const offset = -70;

  const navbarStyle = {
    backgroundColor: "#003366",
    color: "white",
    position: "sticky",
    top: 0,
    zIndex: 1000,
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-light" style={navbarStyle}>
      <div className="container-fluid">
        {/* Logo as Navbar Brand */}
        <a
          className="navbar-brand"
          href="/"
          style={{ fontWeight: "bold", color: "white" }}
        >
          <div className="logo">
            <img
              src="/logo.png"
              alt="Your Logo"
              style={{ height: "30px", width: "auto" }} // Set logo height here
            />
          </div>
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

        {/* Collapsible Menu */}
        <div
          className="collapse navbar-collapse justify-content-center"
          id="navbarNav"
          style={{ fontWeight: "bold" }}
        >
          {/* Navbar Items */}
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link
                to="Homepage"
                smooth={true}
                duration={100}
                offset={offset}
                className="nav-link"
                style={{ color: "white" }} // White text color for links
              >
                HOME
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="Blogs"
                smooth={true}
                duration={100}
                offset={offset}
                className="nav-link"
                style={{ color: "white" }} // White text color for links
              >
                BLOGS
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="Gallery"
                smooth={true}
                duration={100}
                offset={offset}
                className="nav-link"
                style={{ color: "white" }} // White text color for links
              >
                GALLERY
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="Community"
                smooth={true}
                duration={100}
                offset={offset}
                className="nav-link"
                style={{ color: "white" }} // White text color for links
              >
                COMMUNITY
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="Query"
                smooth={true}
                duration={100}
                offset={offset}
                className="nav-link"
                style={{ color: "white" }} // White text color for links
              >
                QUERY
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="Footer"
                smooth={true}
                duration={100}
                offset={offset}
                className="nav-link"
                style={{ color: "white" }} // White text color for links
              >
                ABOUT US
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
