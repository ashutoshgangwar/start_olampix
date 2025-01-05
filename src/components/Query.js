import React from 'react';
import "./../App.css";



const ContactForm = () => {
  return (
    <div className="query-container">
      <div className="form-box">
        <h2 className="title">
          <span className="icon">&#128172;</span> Let’s Talk
        </h2>
        <p className="subtitle">Fill up the form and I will get back to you within 24 Hrs</p>
        

        <div className="form-container">
          <input
            type="text"
            placeholder="Your name"
            className="input-field"
          />
          <input
            type="email"
            placeholder="Your email"
            className="input-field"
          />
          <textarea
            placeholder="Your message"
            rows="4"
            className="textarea-field"
          ></textarea>
          <button className="send-button">
             SUBMIT
          </button>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
