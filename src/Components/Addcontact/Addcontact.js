import React from "react";
import "./Addcontact.css";
import PermContactCalendarIcon from "@material-ui/icons/PermContactCalendar";

function Addcontact() {
  return (
    <div className="contactadd">
      <div className="contacthead">
        <PermContactCalendarIcon />
        <h2>Contacts</h2>
      </div>
      <div className="search">
        <input
          type="text"
          className="contactsearch"
          placeholder="search contact"
        />
        <button>Add Contact</button>
      </div>
    </div>
  );
}

export default Addcontact;
