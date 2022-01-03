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
    })
      .then(() => {
        // this block of code added to clear the input after success of data added.
        let clrName = document.getElementById("clearName");
        let clrDept = document.getElementById("clearDept");
        let clrAge = document.getElementById("clearAge");
        let clrPlace = document.getElementById("clearPlace");
        let clrContact = document.getElementById("clearContact");
        clrName.value = "";
        clrDept.value = "";
        clrAge.value = "";
        clrPlace.value = "";
        clrContact.value = "";
      })
      .then(() => {
        //console.log("employee information added successfully.....enjoy!");
        alert(" Your employee information added successflly 👍");
      });
    //here i need to add code for input refresh
  };
  return (
    <div className="App">
      <div className="empInfo">
        <h3>Add employees</h3>
        <label id="name">Name:</label>
        <input
          id="clearName"
          type="text"
          onChange={(event) => {
            setName(event.target.value);
            // console.log(event);
            // console.log(event.target.value);
          }}
        />

        <label>Department:</label>
        <input
          id="clearDept"
          type="text"
          onChange={(event) => {
            setDepartment(event.target.value);
          }}
        />
        <label>Age:</label>
        <input
          id="clearAge"
          type="number"
          onChange={(event) => {
            setAge(event.target.value);
          }}
        />
        <label>Place:</label>
        <input
          id="clearPlace"
          type="text"
          onChange={(event) => {
            setPlace(event.target.value);
          }}
        />
        <label>Contact No:</label>
        <input
          id="clearContact"
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
