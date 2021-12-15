import React, { useState, useEffect } from "react";
import logo from "./logo.svg";
import "./App.css";

const DOGS_GET_BREEDS_API = "https://dog.ceo/api/breeds/list/all";

function App() {
  const [currentTime, setCurrentTime] = useState(0);

  useEffect(() => {
    setInterval(() => setCurrentTime(new Date().toLocaleString()), 1000);
  });

  return (
    <div className="App">
      <h1>Example from Dennis</h1>
      <p className="show-current-time">{currentTime}</p>
      <div className="input-lower-case">
        <p>Check if input are all in lower case</p>
        <input type="text"></input>
        {/*replace with your boolean value */ true ? "TRUE" : "FALSE"}
      </div>
      <br />
      <div className="input-upper-case">
        <p>Check if input are all in upper case</p>
        <input type="text"></input>
        {/*replace with your boolean value */ true ? "TRUE" : "FALSE"}
      </div>
      <div className="input-is-numeric">
        <p>Check if input is numeric</p>
        <input type="text"></input>
        {/*replace with your boolean value */ true ? "TRUE" : "FALSE"}
      </div>
      <br />
      <div className="simple-form">
        <label>Firstname:</label>
        <input type="text" className="firstname"></input>
        <br />
        <label>Lastname:</label>
        <input type="text" className="lastname"></input>
        <div className="show-data">
          <p>Firstname: {/*Replace with a value*/}</p>
          <p>Lastname: {/*Replace with a value*/}</p>
        </div>
      </div>
      <br />
      <div className="dog-breeds-list">
        <ul>{/*Replace with a value*/}</ul>
      </div>
    </div>
  );
}

export default App;
