import React from "react";
import "./Help.css";
import Waves from "../../assets/waves.svg";

function Questions() {
  return (
    <div className="Question-container">
      <div>
        <h1>Have Some Questions?</h1>
        <p>
          Thank you for your interest in our services. Please fill out the form
          below or email us and we will get <br /> back to you promptly
          regarding your request.
        </p>
      </div>
      <div>
        <img src={Waves} alt="" />
      </div>
    </div>
  );
}

export default Questions;
