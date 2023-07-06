import React from "react";
import "./Features.css";
import EventsImg from "../../assets/Events image.svg";

const Events = () => {
  return (
    <div className="rest-part-container justify-center" style={{background: '#EEEEEE'}}>
      <div className="rest-part">
        <div className="alert-text">
          <h3>
          "Say goodbye to door-to-door event announcements!”
          </h3>
          <p>
            Simplify event communication within your community. List and track upcoming events effortlessly, ensuring everyone stays informed and engaged, all in one convenient platform.
          </p>
        </div>
        
        <div className="alert-chat-side">
          <img src={EventsImg} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Events;
