import React from "react";
import "./Contactinfo.css";

function Contactinfo({ currentuser }) {
  const { name, email, mobile, company, address } = currentuser;

  return (
    <div className="contactinfo">
      <div>
        <p>{name}</p>
      </div>
      <div className="userinfo">
        <div className="infodetail">
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
