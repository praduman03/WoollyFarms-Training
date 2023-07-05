import React from "react";
import "./Alert.css";
import AlertImg from "../../assets/Alert image.svg";

const Alert = ({ type }) => {
  return (
    <div className="rest-part-container justify-center">
      <div className="rest-part">
        <div className="alert-chat-side">
          <img src={AlertImg} alt="" />
        </div>

        <div className="alert-text">
          <h3>
            "Empower Your Community, Instantly Report Suspicious Activities"
          </h3>
          <p>
            Instantly report and track suspicious activities in your
            neighborhood with our user-friendly platform. Together, let's create
            a safer community through prompt action and enhanced awareness.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Alert;
