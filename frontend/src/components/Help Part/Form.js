import React from "react";
import "./Help.css";

function Form() {
  return (
    <div className="Form-container">
      <div className="Form">
        <input type="text" placeholder="Name" />
        <br />
        <input type="Email" placeholder="Email" />
        <br />
        <textarea placeholder="Message" />
        <br />
        <button>Submit</button>
      </div>
    </div>
  );
}

export default Form;
