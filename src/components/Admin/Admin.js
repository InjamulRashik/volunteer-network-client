import React, { useEffect, useState } from "react";
import "./Admin.css";
import logo from "../../logo.png";
import userIcon from "../../logos/users-alt 1.png";
import plusIcon from "../../logos/plus 1.png";
import UserTable from "../UserTable/UserTable";

const Admin = () => {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/userinfotable")
      .then((response) => response.json())
      .then((data) => setUsers(data));
  }, []);
  return (
    <div class="d-flex" id="wrapper">
      <div class=" border-0" id="sidebar-wrapper">
        <div class="sidebar-heading">
          <img style={{ width: "202px", height: "60px" }} src={logo} alt="" />{" "}
        </div>
        <div class="list-group list-group-flush">
          <p
            style={{
              fontWeight: "normal",
              fontSize: "16px",
            }}
            href="#asd"
            class="list-group-item list-group-item-action text-primary "
          >
            <span>
              <img src={userIcon} alt="" />
            </span>{" "}
            Volunteer register list
          </p>
          <p
            style={{
              fontWeight: "normal",
              fontSize: "16px",
            }}
            href="#dasd"
            class="list-group-item list-group-item-action "
          >
            <span>
              <img style={{ width: "17px" }} src={plusIcon} alt="" />
            </span>{" "}
            Add event
          </p>
        </div>
      </div>

      <div className="bg-light" id="page-content-wrapper">
        <nav class="navbar navbar-expand-lg navbar-light bg-white  border-0">
          <p
            style={{
              fontWeight: "bolder",
              fontSize: "22px",
              color: "#0C0C0C",
              paddingTop: "25px",
            }}
          >
            Volunteer register list
          </p>
        </nav>

        <div class="container-fluid ">
          <div
            style={{
              backgroundColor: "white",
              margin: "23px 18px 0px 18px",
              padding: "23px 18px 0px 18px",
              borderRadius: "20px",
            }}
          >
            <table class="table">
              <thead style={{ backgroundColor: "#F5F6FA" }} class="">
                <tr>
                  <th scope="col">Name</th>
                  <th scope="col">Email ID</th>
                  <th scope="col">Registration Date</th>
                  <th scope="col">Volunteer List</th>
                  <th scope="col">Volunteer List</th>
                </tr>
              </thead>
              <tbody>
                {users.map((user) => (
                  <UserTable user={user}></UserTable>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Admin;
