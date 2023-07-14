import React from "react";
import Girl from "../../assets/girl.png";
import Envelope from "../../assets/Envelope.png";
import "./Help.css";

function GetInTouch() {
  return (
    <div className="GetInTouch-container">
      <img src={Girl} alt="HelpGirl" />
      <article>Get In Touch</article>
      <hr />
      <div className="flex">
        <img src={Envelope} alt="email" />
        <p>vigilantyteam@gmail.com</p>
      </div>
    </div>
  );
}

export default GetInTouch;
