import React from "react";
import { Link } from "react-router-dom"; // Import Link from react-router-dom
import "../styles/navbar.css"; // Add some styling
import "../styles/about.css"

export default function About() {
  return (
    <div className="page-content">
    <section id="about" className="about-section">
      <div className="about-container">
        <div className="about-text">
          <h1>
            Hi, I'm Cherry.
            <br />As an English learner myself, I know the difficults you are facing.
          </h1>
          <p>
            Do you feel like you understand what others are saying, but when you try to say, nothing comes out?
          </p>
          <p>
            Or do you know what to say, but don't know the right word for it in English?
          </p>
          <p>
            Or do you not even understand what the other person is saying at all? You don't even understand this website unless you translate into Chinese? 
          </p>
          <p>
            If any of these sound like you, book a class with me so that your sufferings end here! 
          </p>
          <div className="about-buttons">
          <Link to="/booking" className="booking-btn">Book a Class</Link>
          </div>

        </div>
      </div>
    </section>
    </div>
  );
}
