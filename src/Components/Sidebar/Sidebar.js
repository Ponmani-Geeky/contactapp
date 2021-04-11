import React from "react";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import PersonOutlineIcon from "@material-ui/icons/PersonOutline";
import Drawer from "@material-ui/core/Drawer";
import "./Sidebar.css";

function Sidebar() {
  return (
    <div>
      <Drawer variant="permanent">
        <PersonOutlineIcon />
      </Drawer>
    </div>
  );
}

export default Sidebar;
