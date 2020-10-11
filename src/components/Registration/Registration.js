import React from "react";
import "./Registration.css";
import logo from "../../logo.png";
import gIcon from "../../logos/google.png";
import { TextField } from "@material-ui/core";

const Registration = () => {
  return (
    <div className="base">
      <img className="logo" src={logo} alt="" />
      <h1>
        <b>Register as a Volunteer</b>
      </h1>{" "}
      <br />
      <div className="content">
        <form className="form form-group">
          <TextField id="standard-basic" label="Full Name" /> <br />
          <TextField id="standard-basic" label="Username or Email" /> <br />
          <TextField id="standard-basic" label="Date" /> <br />
          <TextField id="standard-basic" label="Description" /> <br />
          <TextField
            id="standard-basic"
            label="Organize books at the library"
          />{" "}
          <br />
          <button className="btn btn-primary">Registration</button> <br />
        </form>
      </div>
    </div>
  );
};

export default Registration;
