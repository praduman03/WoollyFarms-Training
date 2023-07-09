import React, { useState } from "react";
import "../App.css";
import { Link, useNavigate } from "react-router-dom";

function Signup() {
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");

  const emailREGEX = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  const passwordREGEX = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,20}$/;

  const PostData = () => {
    if (!email || !password || !name) {
      window.alert("please fill all the required details");
      return;
    }
    if (!emailREGEX.test(email)) {
      window.alert("invalid email");
      return;
    }
    if (!passwordREGEX.test(password)) {
      window.alert(
        "password should not be less than 6 characters and must contain atleast one number, one uppercase, one lowercase"
      );
      return;
    }
    fetch("http://localhost:8000/user", {
      method: "post",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name,
        email,
        password,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.error) {
          console.log(data.error);
          window.alert(data.error);
        } else {
          window.alert(data);
          navigate("/login");
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className="Login-page">
      <div className="Login-container">
        <div className="above">
          <h1>Welcome Back!</h1>
          <p>To keep connected with us please login with your personal info</p>
          <button id="signin-Button" onClick={() => navigate("/login")}>
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
              <i className="fab fa-google-plus-g"></i>
            </a>
          </div>
          <span>or use your email for registration</span>
          <input
            type="text"
            placeholder="Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button onClick={PostData}>Sign Up</button>
        </div>
      </div>
    </div>
  );
}

export default Signup;
