import React from "react";
import "./Contactinfo.css";
import Avatar from "@material-ui/core/Avatar";

function Contactinfo({ currentuser }) {
  const { name, email, mobile, company, address } = currentuser;
   const initial=name.slice(0,1).toUpperCase();

  return (
    <div className="contactinfo">
      <div className='info_head'>
      <Avatar className='avatar'>{initial}</Avatar>
        <h3>{name}</h3>
      </div>
      <div className="userinfo">
        <div className="infodetail left">
          <p>Fullname:</p>
          <p>Email:</p>
          <p>Mobile:</p>
          <p>Company:</p>
          <p>Place:</p>
        </div>
        <div className="infodetail">
          <p>{name}</p>
          <p>{email}</p>
          <p>{mobile}</p>
          <p>{company}</p>
          <p>{address}</p>
        </div>
      </div>
    </div>
  );
}

export default Contactinfo;
