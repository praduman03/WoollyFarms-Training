import React from "react";
import Logo from "../../assets/LOGO.jpg";
import "./Sidebar.css";
import { BsMegaphoneFill } from "react-icons/bs";
import { AiFillCalendar } from "react-icons/ai";
import { AiFillEye } from "react-icons/ai";
import { LuLogOut } from "react-icons/lu";
import { CgProfile } from "react-icons/cg";

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

      <div className="profile-section">
        <div><CgProfile /> My Profile</div>
        <div><LuLogOut /> Logout</div>
      </div>
    </div>
  );
};

export default Sidebar;
