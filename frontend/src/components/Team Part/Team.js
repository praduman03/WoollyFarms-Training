import React from "react";
import Linkedin from "../../assets/linkedin.png";
import Github from "../../assets/github.png";
import "./Team.css";

function Team(props) {
  return (
    <div className="Team-container">
      <div className="Team-card">
        <img className="Team-img" src={props.img} alt="Piyush" />
        <h2>{props.name}</h2>
        <p className="Team-role">Fullstack Developer</p>
        <br />
        <p className="Team-detail">{props.detail}</p>
        <div>
          <a href={props.linkedin}>
            <img className="Team-social" src={Linkedin} alt="linkedin" />
          </a>
          <a href={props.github}>
            <img className="Team-social" src={Github} alt="github" />
          </a>
        </div>
      </div>
    </div>
  );
}

export default Team;
