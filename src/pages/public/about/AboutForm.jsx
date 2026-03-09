import React from "react";
import "./AboutForm.css";
import { useContext } from "react";

const AboutForm = () => {
  return (
    <div className="form-box">
      <input type="text" placeholder="Enter Name"></input>
      <input type="password"></input>
      <button>Login</button>
    </div>
  );
};

export default AboutForm;
