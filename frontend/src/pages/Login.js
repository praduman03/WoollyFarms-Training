import React from "react";
import "../App.css";
import { Link } from "react-router-dom";

function Login() {
  return (
    <div className="Login-page">
      <div className="Login-container">
        <div className="Login-form">
          <h1>Sign in</h1>
          <div className="google">
            <a href="#" className="google-a-tag">
              {" "}
              <i class="fab fa-google-plus-g"></i>
            </a>
          </div>
          <span>or use your account</span>
          <input type="email" placeholder="Email" />
          <input type="password" placeholder="Password" />
          <button>SIGN IN</button>
        </div>
        <div className="above">
          <h1>Hello, Friend!</h1>
          <p>Enter your personal details and start journey with us</p>
          <button id="signin-Button">
            {" "}
            <Link
              style={{
                textDecoration: "none",
                color: "white",
                fontSize: "1.5vh",
              }}
              to="/signup"
            >
              SIGN UP
            </Link>
          </button>
        </div>
      </div>
    </div>
  );
}

export default Login;
