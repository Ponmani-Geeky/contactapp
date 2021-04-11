import React, { useContext } from "react";
import AppBar from "@material-ui/core/AppBar";
import { makeStyles } from "@material-ui/core/styles";
import Toolbar from "@material-ui/core/Toolbar";
import "./Navbar.css";
import { Userlogcontext } from "../Context/Usercontext";
import { actionTypes } from "../Context/Reduceruser";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));

const users = [{ name: "ponmani" }, { name: "kamalesh" }, { name: "vijay" }];
function Navbar() {
  const [{ user }, dispatch] = useContext(Userlogcontext);
  const classes = useStyles();

  const [showuser, setShowUser] = React.useState(false);

  const handleUser = () => {
    setShowUser(!showuser);
  };

  const handleCurrentUser = (user) => {
    console.log(user);
    // setUser(user);
    dispatch({
      type: actionTypes.SET_USER,
      user: user,
    });
    setShowUser(!showuser);
  };

  return (
    <div className="navbar">
      <AppBar position="static">
        <Toolbar>
          <h4 className="user" onClick={handleUser}>
            {user ? user : users[0].name}
          </h4>
          {showuser ? (
            <div className="userlist">
              {users.map((user) => (
                <ul key={user.name}>
                  <li onClick={() => handleCurrentUser(user.name)}>
                    {user.name}
                  </li>
                </ul>
              ))}
            </div>
          ) : null}
        </Toolbar>
      </AppBar>
    </div>
  );
}

export default Navbar;
