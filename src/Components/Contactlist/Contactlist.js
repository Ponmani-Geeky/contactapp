import React, { useState, useContext, useEffect } from "react";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import "./Contactlist.css";
import { makeStyles } from "@material-ui/core/styles";
import Avatar from "@material-ui/core/Avatar";
import { deepOrange, deepPurple } from "@material-ui/core/colors";
import Contactinfo from "../Contactinfo/Contactinfo";
import ChatIcon from "@material-ui/icons/Chat";
import Contactchat from "../Contactchat/Contactchat";
import { Userlogcontext } from "../Context/Usercontext";

const usersObj = [
  {
    name: "ponmani",
    email: "ponmani529@gmail.com",
    mobile: "9500244230",
    company: "doodleblue",
    address: "vellore",
  },
  {
    name: "kamal",
    email: "kamal345@gmail.com",
    mobile: "9522244230",
    company: "doodleblue",
    address: "chennai",
  },
  {
    name: "vijay",
    email: "Vijay123@gmail.com",
    mobile: "9555244230",
    company: "doodleblue",
    address: "salem",
  },
];

const Contactlist = () => {
  const [{ user }, dispatch] = useContext(Userlogcontext);
  const [userinfo, setUserinfo] = useState();
  const [displaychat, setDisplayChat] = useState(false);
  const [display, setDisplay] = useState();
  const [chatUser, setChatUser] = useState();

  

  useEffect(() => {
    setDisplayChat(false);
    setDisplay(
      usersObj
        .filter((userx) => {
          return userx.name !== user;
        })
        .map((userx) => (
          <div
            key={userx.name}
            className="displaycontact"
            onClick={() => handleContact(userx)}
          >
            <Avatar className='listcontact'>{userx.name.slice(0,1).toUpperCase()}</Avatar>
            <div className="basicinfo">
              <p>
                {userx.name}{" "}
                <ChatIcon
                  className="chat"
                  onClick={() => handleChat(userx.name)}
                />
              </p>
              <p>{userx.email}</p>
            </div>
            <p>{userx.company}</p>
          </div>
        ))
    );
  }, [user]);

  const handleContact = (name) => {
    setUserinfo(name);
  };

  const handleChat = (name) => {
    setDisplayChat(true);
    setChatUser(name);
  };

  const handleBack=()=>{
    setDisplayChat(false);
  }

  return (
    <div className="contaclist">
      <div className="infohead">
        <p>Basic Info</p>
        <p>Company</p>
      </div>
      <div className="diplayposition">
        <div>{display}</div>
        {displaychat ? (
          <>
          <button onClick={handleBack} className="backbtn">Back</button>
          <Contactchat chatuser={chatUser} />
          </>
        ) : (
          <div>
            <Contactinfo currentuser={userinfo ? userinfo : usersObj[0]} />
          </div>
        )}
      </div>
    </div>
  );
};

export default Contactlist;
