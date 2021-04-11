import React, { useState, useContext } from "react";
import "./Contactchat.css";
import { Userlogcontext } from "../Context/Usercontext";
import { Messagecontext } from "../Context/Messagecontext";
import { actionTypes } from "../Context/Messagereducer";

const Contactchat = ({ chatuser }) => {
  let key = 0;
  const [{ user }] = useContext(Userlogcontext);
  const [{ messages }, dispatched] = useContext(Messagecontext);
  const [textMessage, setTextMessage] = useState("");

  // const [messages, setMessages] = useState([
  //   {
  //     name: "ponmani",
  //     chats: {
  //       "kamal": ["hello kamal"],
  //       "vijay": ["hi vijay"],
  //     },
  //   },
  //   {
  //     name: "kamal",
  //     chats: {
  //       "ponmani": ["hello ponmani"],
  //       "vijay": ["hi Vijay "],
  //     },
  //   },
  //   {
  //     name: "vijay",
  //     chats: {
  //       "ponmani": ["hello mani"],
  //       "kamal": ["hi kamal"],
  //     },
  //   },
  // ]);

  const handleChange = (event) => {
    setTextMessage(event.target.value);
  };

  const sendMessage = (tmessage) => {
    let currentmsg=[...messages];
    if(tmessage){
      let newmessage = [...messages,currentmsg
        .filter((message) => {
          return message.name === chatuser;
        })
        .map((message) => {
          // return message.chats[chatuser].push(tmessage);
          return [{...message.chats[chatuser]},message.chats[user].push(tmessage)];
        })];
      // setMessages([...messages, newmessage]);
      dispatched({
        type: actionTypes.SET_MSG,
        message: newmessage,
      });
      setTextMessage('')
      }
    // if(tmessage){
    // let newmessage = [...messages,currentmsg
    //   .filter((message) => {
    //     return message.name === user;
    //   })
    //   .map((message) => {
    //     // return message.chats[chatuser].push(tmessage);
    //     return [...message.chats[chatuser],message.chats[chatuser].push(tmessage)];
    //   })];
    // // setMessages([...messages, newmessage]);
    // dispatched({
    //   type: actionTypes.SET_MSG,
    //   message: newmessage,
    // });
    // setTextMessage('')
    // }
  };

  console.log('normalmsg',messages)

  return (
    <div className="userchat">
      <h2 className="chathead">{chatuser}</h2>
      <div className="chatuser">
      {messages.map((message) => (
        <>
          <div key={key++} className="messagess">
            {" "}
            {message.name === user && (
              <div className="message">{message?.chats[chatuser]?.map((msg)=>(<p>{msg}</p>))}</div>
            )}
          </div>
          <div key={key++} className="messagess">
          {" "}
          {message.name === chatuser && (
            <div className="message">{message?.chats[user]?.map((msg)=>(<p>{msg}</p>))}</div>
          )}
        </div>
        </>
        ))}
      </div>
      {/* <div className='currentuser'>
      {messages.map((message) => (
          <div key={key++} >
            {" "}
            {message.name == chatuser && (
              <div >{message?.chats[user]?.map((msg)=>(<p>{msg}</p>))}</div>
            )}
          </div>
        ))}
      </div> */}

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
