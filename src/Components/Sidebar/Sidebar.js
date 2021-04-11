import React from "react";
import PersonOutlineIcon from "@material-ui/icons/PersonOutline";
import Drawer from "@material-ui/core/Drawer";
import "./Sidebar.css";

function Sidebar() {
  return (
    <div>
      <Drawer variant="permanent">
        <PersonOutlineIcon  className='icon'/>
      </Drawer>
    </div>
  );
}

export default Sidebar;
