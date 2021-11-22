import "./App.css";
import React, { useState } from "react";
import Axios from "axios";
//debuggin git
function App() {
  const [name, setName] = useState("ali");
  const [department, setDepartment] = useState("");
  const [age, setAge] = useState(0);
  const [place, setPlace] = useState("");
  const [contact, setContact] = useState(91);
  const addInformation = () => {
    Axios.post("http://localhost:9000/addemp", {
      name: name,
      department: department,
      age: age,
      place: place,
      contact: contact,
    }).then(() => {
      console.log("success!");
    });
    //here i need to add code for input refresh
  };
  return (
    <div className="App">
      <div className="empInfo">
        <h3>Add employees</h3>
        <label id="name">Name:</label>
        <input
          type="text"
          onChange={(event) => {
            setName(event.target.value);
            // console.log(event);
            // console.log(event.target.value);
          }}
        />

        <label>Department:</label>
        <input
          type="text"
          onChange={(event) => {
            setDepartment(event.target.value);
          }}
        />
        <label>Age:</label>
        <input
          type="number"
          onChange={(event) => {
            setAge(event.target.value);
          }}
        />
        <label>Place:</label>
        <input
          type="text"
          onChange={(event) => {
            setPlace(event.target.value);
          }}
        />
        <label>Contact No:</label>
        <input
          type="number"
          onChange={(event) => {
            setContact(event.target.value);
          }}
        />
        <button className="addInfo" onClick={addInformation}>
          Submit Data
        </button>
      </div>

      <div className="seeEmpInfo"></div>
    </div>
  );
}

export default App;
