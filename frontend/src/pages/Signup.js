import React from "react";
import "../App.css";
import { Link, useNavigate } from "react-router-dom";

function Signup() {
  const navigate = useNavigate()

  return (
    <div className="Login-page">
      <div className="Login-container">
        <div className="above">
          <h1>Welcome Back!</h1>
          <p>To keep connected with us please login with your personal info</p>
          <button id="signin-Button" onClick={() => navigate('/login')}>
            <Link
              style={{
                textDecoration: "none",
                color: "white",
                fontSize: "1.5vh",
              }}
            >
              LOG IN
            </Link>
          </button>
        </div>
        <div className="Login-form">
          <h1>Create Account</h1>
          <div className="google">
            <a href="/" className="google-a-tag">
              <i class="fab fa-google-plus-g"></i>
              </a>
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
