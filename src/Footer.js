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
          <h4>
           OlamPix india Pvt. Ltd.
           <h6>Glow your passion</h6> 
          </h4>
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
              <a href="#!">FAQ's</a>
            </li>
            <li>
              <a href="#!">Help</a>
            </li>
          </ul>
        </div>

        <div className="footer-column">
          <h4>Contact</h4>
          <ul>
            <li>Mayur Vihar Phase-1, 110091, India</li>
            <li>info@olampix.com</li>
            <li>+91 234 567 88</li>
            <li>+91 234 567 89</li>
          </ul>
        </div>
      </div>

      <div className="footer-bottom">
        <p>© 2025 Copyright: olampixindia.com</p>
      </div>
    </footer>
  );
};

export default Footer;
