import React, { useReducer } from "react";
import "./App.css";
import Sidebar from "./Components/Sidebar/Sidebar";
import Navbar from "./Components/Navbar/Navbar";
import Addcontact from "./Components/Addcontact/Addcontact";
import Contactlist from "./Components/Contactlist/Contactlist";
import { Userlogcontext } from "./Components/Context/Usercontext";
import { initialState } from "./Components/Context/Reduceruser";
import Reduceruser from "./Components/Context/Reduceruser";

function App() {
  // const [user, setUser] = React.useState("");
  return (
    <div className="App">
      <Userlogcontext.Provider value={useReducer(Reduceruser, initialState)}>
        <Sidebar />
        <Navbar />
        <Addcontact />
        <Contactlist />
      </Userlogcontext.Provider>
    </div>
  );
}

export default App;
