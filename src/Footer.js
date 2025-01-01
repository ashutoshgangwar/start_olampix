import React from "react";
import "./App.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="social-connect">
        <p>Get connected with us on social networks!</p>
        <div className="social-icons">
          <a href="#!" className="social-link">
            <i className="fab fa-facebook-f"></i>
          </a>
          <a href="#!" className="social-link">
            <i className="fab fa-twitter"></i>
          </a>
          <a href="#!" className="social-link">
            <i className="fab fa-google-plus-g"></i>
          </a>
          <a href="#!" className="social-link">
            <i className="fab fa-linkedin-in"></i>
          </a>
          <a href="#!" className="social-link">
            <i className="fab fa-instagram"></i>
          </a>
        </div>
      </div>

      <div className="footer-content">
        <div className="footer-column">
          <h4>Company Name</h4>
          <p>
            Here you can use rows and columns to organize your footer content.
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
          </p>
        </div>

        <div className="footer-column">
          <h4>Products</h4>
          <ul>
            <li>
              <a href="#!">MDBootstrap</a>
            </li>
            <li>
              <a href="#!">MDWordPress</a>
            </li>
            <li>
              <a href="#!">BrandFlow</a>
            </li>
            <li>
              <a href="#!">Bootstrap Angular</a>
            </li>
          </ul>
        </div>

        <div className="footer-column">
          <h4>Useful Links</h4>
          <ul>
            <li>
              <a href="#!">Your Account</a>
            </li>
            <li>
              <a href="#!">Become an Affiliate</a>
            </li>
            <li>
              <a href="#!">Shipping Rates</a>
            </li>
            <li>
              <a href="#!">Help</a>
            </li>
          </ul>
        </div>

        <div className="footer-column">
          <h4>Contact</h4>
          <ul>
            <li>New York, NY 10012, US</li>
            <li>info@example.com</li>
            <li>+1 234 567 88</li>
            <li>+1 234 567 89</li>
          </ul>
        </div>
      </div>

      <div className="footer-bottom">
        <p>© 2017 Copyright: MDBootstrap.com</p>
      </div>
    </footer>
  );
};

export default Footer;
