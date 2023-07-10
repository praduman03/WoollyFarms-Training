import React, { useState } from "react";
import "./Help.css";

function Form() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const emailREGEX = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

  const SubmitMessage = () => {
    if (!email || !message || !name) {
      window.alert("please fill all the required details");
      return;
    }
    if (!emailREGEX.test(email)) {
      window.alert("invalid email");
      return;
    }
    fetch("http://localhost:8000/contact", {
      method: "post",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name,
        email,
        message,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.error) {
          console.log(data.error);
          window.alert(data.error);
        } else {
          window.alert(
            "Your Message Send Successfully. You will get your reponse shortly in your mail. Thankyou"
          );
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className="Form-container">
      <div className="Form">
        <input
          type="text"
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <br />
        <input
          type="Email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <br />
        <textarea
          placeholder="Message"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        />
        <br />
        <button onClick={SubmitMessage}>Submit</button>
      </div>
    </div>
  );
}

export default Form;
