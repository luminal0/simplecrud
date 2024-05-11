import React from "react";
import { Route, Routes } from "react-router-dom";
import User from "./Users/User";
import CreateUser from "./Users/CreateUser";
import UpdateUser from "./Users/UpdateUser";
import "./App.css";

function App() {
  return (
    <div className="p-4 h-screen w-screen flex items-center justify-center">
        <Routes>
          <Route path="/" element={<User/>} />
          <Route path="/create" element={<CreateUser/>}/>
          <Route path="/update" element={<UpdateUser/>}/>
        </Routes>
    </div>
  );
}

export default App;
