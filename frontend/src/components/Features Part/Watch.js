import React from "react";
import "./Features.css";
import WatchImg from "../../assets/Watch image.svg";

const Watch = () => {
  return (
    <div className="rest-part-container justify-center">
      <div className="rest-part">
        <div className="alert-chat-side">
          <img src={WatchImg} alt="" />
        </div>

        <div className="alert-text">
          <h3>"Forge Safety Alliances, Empower Your Community”</h3>
          <p>
            Establish Neighborhood Watch Groups, Assign Vigilant Neighbors to
            Specific Areas, and Elevate Local Safety through Instant Reporting
            of Activities for Targeted Locality Protection!
          </p>
        </div>
      </div>
    </div>
  );
};

export default Watch;
