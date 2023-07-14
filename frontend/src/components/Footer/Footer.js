import React from "react";
import "./Footer.css";
import LOGO from "../../assets/LOGO.png";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <div className="Footer-container">
      <section className="Contact-area">
        <div className="Contact-content">
          <img className="LogoImg" src={LOGO} alt="logo" />
          <p>
            Strengthen Your Neighbourhood, and stay Informed <br /> with
            VIGILANTY
          </p>
          <div className="hr"></div>
          <div className="rows">
            <ul>
              <Link to="/">Home</Link>
              <Link to="/aboutus">About Us</Link>
              <Link to="/t&c">T&C</Link>
              <Link to="/contactus">Contact Us</Link>
            </ul>
          </div>
          <div className="rows">
            <ul>
              <button className="Coffee-button">Buy us a Coffee</button>
            </ul>
          </div>
        </div>
      </section>
      <footer>
        <p>Copyright &copy; 2023 VIGILANTY All Rights Reserved.</p>
      </footer>
    </div>
  );
}

export default Footer;
