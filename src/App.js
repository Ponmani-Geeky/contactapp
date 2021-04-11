import React, { useReducer } from "react";
import "./App.css";
import Sidebar from "./Components/Sidebar/Sidebar";
import Navbar from "./Components/Navbar/Navbar";
import Addcontact from "./Components/Addcontact/Addcontact";
import Contactlist from "./Components/Contactlist/Contactlist";
import { Userlogcontext } from "./Components/Context/Usercontext";
import { Messagecontext } from "./Components/Context/Messagecontext";
import { initialState } from "./Components/Context/Reduceruser";
import Reduceruser from "./Components/Context/Reduceruser";
import Messagereducer from "./Components/Context/Messagereducer";
import { initial } from "./Components/Context/Messagereducer";

function App() {
  return (
    <div className="App">
      <Userlogcontext.Provider value={useReducer(Reduceruser, initialState)}>
        <Messagecontext.Provider value={useReducer(Messagereducer, initial)}>
        <Sidebar />
        <Navbar />
        <Addcontact />
        <Contactlist />
        </Messagecontext.Provider>
      </Userlogcontext.Provider>
    </div>
  );
}

export default App;
