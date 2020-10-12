import React, { useContext, useState } from "react";
import "./Registration.css";
import logo from "../../logo.png";
import { TextField } from "@material-ui/core";
import { useParams } from "react-router-dom";
import { volunteerData } from "../../fakeData/volunteerData";
import { UserContext } from "../../App";
import * as firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from "../../components/Login/firebase.config";

const Registration = () => {
  const [loggedInUser, setLoggedInUser] = useContext(UserContext);
  const { key } = useParams();
  const vdKey = volunteerData.find((vdkey) => vdkey.key === key);
  if (firebase.apps.length === 0) {
    firebase.initializeApp(firebaseConfig);
  }
  return (
    <div className="base">
      <img className="logo" src={logo} alt="" />
      <h1>
        <b>Register as a Volunteer</b>
      </h1>{" "}
      <br />
      <div className="content">
        <form className="form form-group">
          <TextField id="standard-basic" value={loggedInUser.name} /> <br />
          <TextField id="standard-basic" value={loggedInUser.email} /> <br />
          <TextField id="standard-basic" label="Date" /> <br />
          <TextField id="standard-basic" label="Description" /> <br />
          <TextField id="standard-basic" value={key} /> <br />
          <button
            onClick={(e) => {
              e.preventDefault();
            }}
            className="btn btn-primary"
          >
            Registration
          </button>{" "}
          <br />
        </form>
      </div>
    </div>
  );
};

export default Registration;
