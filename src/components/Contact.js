import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "/Users/cherry/Desktop/my-portfolio/src/styles/contact.css"; // Adjust the path as necessary

export default function ContactForm() {
  const [success, setSuccess] = useState(null);
  const [submitted, setSubmitted] = useState(false);
  const navigate = useNavigate(); // React Router navigation
  const [showPopup, setShowPopup] = useState(false);



  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);

    const response = await fetch("https://formspree.io/f/xblgejrl", {
      method: "POST",
      body: formData,
      headers: { Accept: "application/json" },
    });

    if (response.ok) {
      setSubmitted(true);
      setSuccess(true);
      setShowPopup(true); // Show the popup
      e.target.reset();
      setTimeout(() => {
        setShowPopup(false); // Hide popup
        navigate("/#booking"); // or just "#booking" if not using routes
      }, 3000);
      } else {
      setSuccess(false);
    }
  };

  return (
    <div className="page-content">
    <div className="form-wrapper">
      <div className="form-card">
        <h2>Contact Us</h2>
        <p>We will get back to you asap!</p>

        <form onSubmit={handleSubmit}>
          <div className="input-row">
            <div className="input-group">
              <label>First Name</label>
              <input type="text" name="firstName" placeholder="First Name" required />
            </div>
            <div className="input-group">
              <label>Last Name</label>
              <input type="text" name="lastName" placeholder="Last Name" required />
            </div>
          </div>

          <div className="input-group">
            <label>Email</label>
            <input type="email" name="email" placeholder="example@example.com" required />
          </div>

          <div className="input-group">
            <label>Phone Number</label>
            <input type="tel" name="phone" placeholder="Phone" required />
          </div>

          <button type="submit">Send</button>

          </form>
          {/* {success && <p className="popup-overlay">Thanks! We'll be in touch soon ✅</p>} */}
          {showPopup && (
            <div className="popup-overlay">
              <div className="popup-box">
                <h2>🎉 Submission Successful!</h2>
                <p>We will contact you shortly.</p>
                <p>Redirecting to the booking page...</p>
              </div>
            </div>
          )}
          {success === false && <p className="error-msg">Something went wrong 😢</p>}

        <p className="note">You may also call us at 09-06281930</p>
      </div>
    </div>
    </div>
  );
}
