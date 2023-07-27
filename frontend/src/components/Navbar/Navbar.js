import React from "react";
import "./Navbar.css";
import { Link, useNavigate } from "react-router-dom";
import logo from "../../assets/LOGO.jpg";

const Navbar = () => {
  const navigate = useNavigate();

  return (
    <div className="navbar">
      <div className="nav-logo">
        <img src={logo} alt="" />
      </div>

      <div className="nav-links">
        <ul>
          <Link to="/">Home</Link>
          <Link to="/main">Main</Link>
          <Link to="/contactus">Contact Us</Link>
          <Link to="/aboutus">About US</Link>
        </ul>
      </div>

      <div className="nav-register content-center">
        <div className="align-center">
          <Link to="/login">Login</Link>
          <span>or</span>
          <button onClick={() => navigate("/signup")}>Signup</button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
