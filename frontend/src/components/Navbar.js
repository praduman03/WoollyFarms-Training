import React from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="nav-logo"></div>

      <div className="nav-links">
        <ul>
          <Link>Home</Link>
          <Link>Contact Us</Link>
          <Link>About US</Link>
        </ul>
      </div>

      <div className="nav-register content-center">
        <div className="align-center">
          <Link>Login</Link>
          <span>or</span>
          <button>Signup</button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
