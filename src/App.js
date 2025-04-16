import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"; // Import routing
import Navbar from "./components/Navbar";
import Home from "./components/home";
import About from "./components/About";
import Contact from "./components/Contact";
import Booking from "./components/Booking";

function App() {
  return (
    <Router>
       <Navbar />
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/booking" element={<Booking />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
