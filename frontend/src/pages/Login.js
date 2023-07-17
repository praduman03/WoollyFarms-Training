import React, { useState, useContext } from "react";
import "../App.css";
import { Link, useNavigate } from "react-router-dom";
import { UserContext } from "../App";

function Login() {
  const navigate = useNavigate();
  const { state, dispatch } = useContext(UserContext);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const formData = {
    username: email,
    password,
  };

  const Login = () => {
    if (!email || !password) {
      window.alert("please fill all the required details");
      return;
    }

    const data = new FormData();
    Object.keys(formData).forEach((key) => {
      data.append(key, formData[key]);
    });

    fetch(process.env.REACT_APP_DOMAIN + "/login", {
      method: "POST",
      body: data,
    })
      .then((res) => {
        if (res.status === 200) {
          return res.json();
        } else {
          throw new Error("Invalid Credentials");
        }
      })
      .then((data) => {
        console.log(data);
        sessionStorage.setItem("jwt", data.aceess_token);
        sessionStorage.setItem("user", JSON.stringify(data.user));
        dispatch({ type: "USER", payload: data.user });
        window.alert("welcome " + data.user.name);
        navigate("/");
      })
      .catch((error) => {
        console.log(error);
        window.alert(error.message);
      });
  };

  return (
    <div className="Login-page">
      <div className="Login-container">
        <div className="Login-form">
          <h1>Sign in</h1>
          <div className="google">
            <a href="/" className="google-a-tag">
              {" "}
              <i class="fab fa-google-plus-g"></i>
            </a>
          </div>
          <span>or use your account</span>
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
            id="showpassword"
            onChange={(e) => setPassword(e.target.value)}
          />
          <button onClick={Login}>SIGN IN</button>
        </div>
        <div className="above">
          <h1>Hello, Friend!</h1>
          <p>Enter your personal details and start journey with us</p>
          <button id="signin-Button" onClick={() => navigate("/signup")}>
            {" "}
            <Link
              style={{
                textDecoration: "none",
                color: "white",
                fontSize: "1.5vh",
              }}
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
