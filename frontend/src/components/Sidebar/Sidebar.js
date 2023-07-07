import React from "react";
import Logo from "../../assets/LOGO.jpg";
import "./Sidebar.css";
import { BsMegaphoneFill } from "react-icons/bs";
import { AiFillCalendar } from "react-icons/ai";
import { AiFillEye } from "react-icons/ai";

const Sidebar = () => {
  return (
    <div className="sidebar">
      <img src={Logo} alt="" className="side-logo" />

      <div className="nav-container">
        <ul>
          <li>
            <BsMegaphoneFill /> Beware Neighbors
          </li>
          <li>
            <AiFillCalendar /> Welcome Neighbors
          </li>
          <li>
            <AiFillEye /> Watch Neighbors
          </li>
        </ul>
      </div>

      <div></div>
    </div>
  );
};

export default Sidebar;
