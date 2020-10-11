import React from "react";
import "./Login.css";
import logo from "../../logo.png";
import gIcon from "../../logos/google.png";
const Login = () => {
  return (
    <div>
      <img className="logo" src={logo} alt="" />
      <div className="content">
        <div className="form">
          <h2>
            <b>Login With</b>
          </h2>{" "}
          <br />
          <button className="btn loginBtn">
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
