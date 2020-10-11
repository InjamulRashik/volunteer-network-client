import React from "react";
import * as firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from "./firebase.config";
import "./Login.css";
import logo from "../../logo.png";
import gIcon from "../../logos/google.png";

firebase.initializeApp(firebaseConfig);
const Login = () => {
  const provider = new firebase.auth.GoogleAuthProvider();
  const handleLogin = () => {
    firebase
      .auth()
      .signInWithPopup(provider)
      .then((result) => {
        const { displayName, photoURL, email } = result.user;
        const signedInUser = {
          isSignedIn: true,
          name: displayName,
          email: email,
          photo: photoURL,
        };
      })
      .catch((error) => {});
  };
  return (
    <div className="container">
      <img className="logo" src={logo} alt="" />
      <div className="content container">
        <div className="form container">
          <h2>
            <b>Login With</b>
          </h2>{" "}
          <br />
          <button onClick={handleLogin} className="btn loginBtn">
            {" "}
            <span>
              <img className="icon" src={gIcon} alt="" />
            </span>{" "}
            <b>Continue with Google</b>
          </button>{" "}
          <br />
          <p>
            Don't have an account?{" "}
            <span>
              <a href="#link">Create an account</a>
            </span>{" "}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
