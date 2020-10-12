import React, { useContext, useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import { UserContext } from "../../App";
import logo from "../../logo.png";
import Users from "../Users/Users";

const UserInfo = () => {
  const [loggedInUser, setLoggedInUser] = useContext(UserContext);
  const [users, setUsers] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/userinfos?name=" + loggedInUser.name)
      .then((response) => response.json())
      .then((data) => setUsers(data));
  }, []);
  return (
    <div>
      <div
        style={{
          paddingLeft: "80px",
          paddingRight: "80px",
          marginBottom: "30px",
        }}
      >
        <nav
          style={{ fontWeight: "bolder" }}
          className="navbar navbar-expand-lg navbar-light nav-bg"
        >
          <a className="navbar-brand" href="#product">
            <img
              style={{ width: "202.81px", height: "60px" }}
              src={logo}
              alt=""
            />
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div
            className="collapse navbar-collapse nav justify-content-end"
            id="navbarNav"
          >
            <ul className="navbar-nav">
              <li style={{ marginRight: "39px" }} className="nav-item active">
                <a className="nav-link" href="#product">
                  Home <span className="sr-only">(current)</span>
                </a>
              </li>
              <li style={{ marginRight: "39px" }} className="nav-item active">
                <a className="nav-link" href="#product">
                  Donation
                </a>
              </li>
              <li style={{ marginRight: "39px" }} className="nav-item active">
                <a className="nav-link" href="#product">
                  Events
                </a>
              </li>
              <li style={{ marginRight: "39px" }} className="nav-item active">
                <a className="nav-link" href="#contact">
                  Blog
                </a>
              </li>
              <li style={{ marginRight: "39px" }} className="nav-item active">
                <p className="nav-link text-primary" href="#contact">
                  {loggedInUser.name}
                </p>
              </li>
            </ul>
          </div>
        </nav>
      </div>
      <div className="container">
        <div className="d-flex row flex-row justify-content-around ">
          {users.map((user) => (
            <Users user={user}></Users>
          ))}
        </div>
      </div>
    </div>
  );
};

export default UserInfo;
