import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Logo from "../../assets/LOGO.jpg";
import "./Sidebar.css";
import { BsMegaphoneFill } from "react-icons/bs";
import { AiFillCalendar } from "react-icons/ai";
import { AiFillEye } from "react-icons/ai";
import { LuLogOut } from "react-icons/lu";
import { CgProfile } from "react-icons/cg";

const Sidebar = () => {
  const [alert, setAlert] = useState(true);
  const [event, setEvent] = useState(false);
  const [group, setGroup] = useState(false);

  const navigate = useNavigate();

  useEffect(() => {
    if (alert) {
      navigate("/main", {
        state: {
          type: "alert",
        },
      });
    } else if (event) {
      navigate("/main", {
        state: {
          type: "event",
        },
      });
    } else if (group) {
      navigate("/main", {
        state: {
          type: "group",
        },
      });
    } else {
      navigate("/main", {
        state: {
          type: "neutral",
        },
      });
    }
  }, [alert, event, group, navigate]);

  return (
    <div className="sidebar">
      <img src={Logo} alt="" className="side-logo" />

      <div className="nav-container">
        <ul>
          <li
            onClick={() => {
              setAlert(!alert);
              setEvent(false);
              setGroup(false);
            }}
            className={alert ? "alert" : "side-links"}
          >
            <BsMegaphoneFill /> Beware Neighbors
          </li>
          <li
            onClick={() => {
              setAlert(false);
              setEvent(!event);
              setGroup(false);
            }}
            className={event ? "event" : "side-links"}
          >
            <AiFillCalendar /> Welcome Neighbors
          </li>
          <li
            onClick={() => {
              setAlert(false);
              setEvent(false);
              setGroup(!group);
            }}
            className={group ? "group" : "side-links"}
          >
            <AiFillEye /> Watch Neighbors
          </li>
        </ul>
      </div>

      <div className="profile-section">
        <div className="profile">
          <CgProfile /> My Profile
        </div>
        <div className="logout">
          <LuLogOut /> Logout
        </div>
      </div>
    </div>
  );
};

export default Sidebar;

// const type = alertBool ? 'alert' : eventBool ? 'event' : groupBool ? 'group' : ''

// export {type}
