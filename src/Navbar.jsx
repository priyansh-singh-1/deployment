import React from "react";
import "./Navbar.css";

const Navbar = () => {
  return (
    <nav className="navbar">
      {/* Left Section */}
      <div className="navbar-left">
        <div className="logo">
          <span className="logo-box">B</span>
        </div>
        <ul className="nav-links">
          <li>Home</li>
          <li className="active">Features</li>
          <li>Pricing</li>
          <li>FAQs</li>
          <li>About</li>
        </ul>
      </div>

      {/* Right Section */}
      <div className="navbar-right">
        <input type="text" placeholder="Search..." className="search-box" />
        <button className="login-btn">Login</button>
        <button className="signup-btn">Sign-up</button>
      </div>
    </nav>
  );
};

export default Navbar;