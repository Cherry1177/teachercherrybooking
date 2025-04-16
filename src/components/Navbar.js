import React from "react";
import { Link } from "react-router-dom"; // Import Link from react-router-dom
import "../styles/navbar.css"; // Add some styling

const Navbar = () => {
  return (
    <nav className="navbar">
      <h1 className="logo">My English Classes</h1>
      <ul className="nav-links">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/about">About</Link></li>
        <li><Link to="/contact">Contact</Link></li>
        <li><Link to="/booking" className="booking-btn">Book a Class</Link></li>
      </ul>
    </nav>
  );
};

export default Navbar;
