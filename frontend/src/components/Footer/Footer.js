import React from "react";
import "./Footer.css";
import LOGO from "../../assets/LOGO.png";

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
              <li>Home</li>
              <li>About Us</li>
              <li>T&C</li>
              <li>Contact Us</li>
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
