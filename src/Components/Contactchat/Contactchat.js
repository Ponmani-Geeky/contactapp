import React, { useState, useContext } from "react";
import "./Contactchat.css";
import { Userlogcontext } from "../Context/Usercontext";

const Contactchat = ({ chatuser }) => {
  let key = 0;
  const [{ user }, dispatch] = useContext(Userlogcontext);
  const [textMessage, setTextMessage] = useState();
  const [messages, setMessages] = useState([
    {
      name: "ponmani",
      kamlesh: ["hello", "can we meetedd"],
      Vijay: ["hi", "are u there?"],
    },
    {
      name: "kamlesh",
      ponmani: ["hello kamalesh", "can we meet"],
      Vijay: ["hi", "are u there?"],
    },
    {
      name: "Vijay",
      ponmani: ["hello vj", "can we meet"],
      kamlesh: ["hi", "today is out exam?"],
    },
  ]);

  const handleChange = (event) => {
    setTextMessage(event.target.value);
  };

  const sendMessage = (tmessage) => {
    let newmessage = messages.map(
      (message) => message.name == user && message[chatuser].push(tmessage)
    );

    setMessages(...messages, newmessage);
  };

  return (
    <div className="userchat">
      <h2>{chatuser}</h2>
      <div className="chatuser">
        {messages.map((message) => (
          <div key={key++} className="messagess">
            {" "}
            {message.name == user && (
              <p className="message">{message[chatuser].map((chat) => chat)}</p>
            )}
          </div>
        ))}
      </div>

      <input
        type="text"
        placeholder="Type Message"
        value={textMessage}
        onChange={handleChange}
      />
      <button className="sendbtn" onClick={() => sendMessage(textMessage)}>
        Send
      </button>
    </div>
  );
};

export default Contactchat;
