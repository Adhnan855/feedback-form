import React from "react";
import { Link } from "react-router-dom";
import myimage from "./Assets/images.png";
import "./Components/App.css";
const Page1 = () => {
  return (
    <div className="container">
      <h1 className="brand">
        <span>Feedback Form</span>
      </h1>
      <div className="wrapper">
        <div className="company-info">
          <h3>Phoenix Web Design</h3>
          <img src={myimage} className="img1" alt="company logo" />
        </div>
        <div className="contact">
          <h3>E-mail Us</h3>
          <form id="contact-form">
            <p>
              <label>Name</label>
              <input type="text" name="name" id="name" required />
            </p>
            <p>
              <label>Company</label>
              <input type="text" name="company" id="company" />
            </p>
            <p>
              <label>E-mail Address</label>
              <input type="email" name="email" id="email" required />
            </p>
            <p>
              <label>Phone Number</label>
              <input type="text" name="phone" id="phone" />
            </p>
            <p className="full">
              <label>Message</label>
              <textarea name="message" rows="5" id="message"></textarea>
            </p>
            <p className="full">
              <Link to="/page2">
                <button type="button">Next</button>
              </Link>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Page1;
