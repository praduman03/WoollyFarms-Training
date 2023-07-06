import React from "react";
import "../App.css";
import { Link } from "react-router-dom";

function Signup() {
  return (
    <div className="Login-page">
      <div className="Login-container">
        <div className="above">
          <h1>Welcome Back!</h1>
          <p>To keep connected with us please login with your personal info</p>
          <button id="signin-Button">
            <Link
              style={{
                textDecoration: "none",
                color: "white",
                fontSize: "1.5vh",
              }}
              to="/login"
            >
              LOG IN
            </Link>
          </button>
        </div>
        <div className="Login-form">
          <h1>Create Account</h1>
          <div className="google">
            <a href="#" className="google-a-tag"></a>
          </div>
          <span>or use your email for registration</span>
          <input type="text" placeholder="Name" />
          <input type="email" placeholder="Email" />
          <input type="password" placeholder="Password" />
          <button>Sign Up</button>
        </div>
      </div>
    </div>
  );
}

export default Signup;
