import React from "react";
import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";
import GetInTouch from "../components/Help Part/GetInTouch";
import Questions from "../components/Help Part/Questions";
import Form from "../components/Help Part/Form";
import "../App.css";

function Contactus() {
  return (
    <div>
      <Navbar />
      <Questions />
      <div className="Contactus-container">
        <GetInTouch />
        <Form />
      </div>
      <Footer />
    </div>
  );
}

export default Contactus;
