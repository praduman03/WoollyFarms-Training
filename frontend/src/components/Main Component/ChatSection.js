import React, { useEffect, useState } from "react";
import "./ChatSection.css";
import ChatBg from "../../assets/Chat_background.png";
import { AiOutlineSend } from "react-icons/ai";
import { ToastContainer, toast } from "react-toastify";

const ChatSection = ({ type }) => {
  const [body, setBody] = useState("");
  const [alert, setAlert] = useState([]);
  const [event, setEvent] = useState([]);
  const [group, setGroup] = useState([]);

  const User = sessionStorage.getItem("user");

  const userName = JSON.parse(User).name;
  const userId = JSON.parse(User).id;

  const fetchChat = () => {
    fetch(process.env.REACT_APP_DOMAIN + "/group")
    .then((res) => res.json())
    .then((json) => {
      setAlert(json.filter((e) => e.type === "Alerts"));
      setEvent(json.filter((e) => e.type === "Events"));
      setGroup(json.filter((e) => e.type === "Group"));
    })
    .catch((err) => console.log(err));
  };

  const postChat = () => {
    fetch(process.env.REACT_APP_DOMAIN + "/group", {
      method: "post",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        type,
        title: userName,
        body,
        user_id: userId,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.error) {
          toast.error(data.error)
        } else {
          toast.success("Chat sent successfully")
          fetchChat()
          setBody("")
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };
  
  useEffect(() => {
    fetchChat();
  }, [type]);

  return (
    <div className="chat-section">
      <ToastContainer />
      <img src={ChatBg} alt="" />

      <div className="my-msg-container">
        <div
          className={`my-msg ${
            type === "Alerts"
              ? "alert"
              : type === "Events"
              ? "event"
              : type === "Group"
              ? "group"
              : "neutral"
          }`}
        >
          My {type}
        </div>
      </div>

      <div className="chat-container">
        <div className="chat">
          {type === "Alerts" && alert.length > 0
            ? alert.map((e) => {
                return <div className="text alert">{e.body}</div>;
              })
            : type === "Events" && event.length > 0
            ? event.map((e) => {
                return <div className="text event">{e.body}</div>;
              })
            : type === "Group" && group.length > 0
            ? group.map((e) => {
                return <div className="text group">{e.body}</div>;
              })
            : <div className="no-msg">You have no messages</div>}
        </div>
      </div>

      <div className="input-container">
        <input
          type="text"
          placeholder="Enter text"
          onChange={(e) => setBody(e.target.value)}
          value={body}
        />
        <AiOutlineSend onClick={postChat} />
      </div>
    </div>
  );
};

export default ChatSection;
