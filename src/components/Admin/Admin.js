import React, { useEffect, useState } from "react";
import "./Admin.css";
import logo from "../../logo.png";
import userIcon from "../../logos/users-alt 1.png";
import plusIcon from "../../logos/plus 1.png";
import UserTable from "../UserTable/UserTable";

const Admin = () => {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    fetch("https://glacial-lowlands-60039.herokuapp.com/userinfotable")
      .then((response) => response.json())
      .then((data) => setUsers(data));
  }, []);
  return (
    <div className="d-flex" id="wrapper">
      <div className=" border-0" id="sidebar-wrapper">
        <div className="sidebar-heading">
          <img style={{ width: "202px", height: "60px" }} src={logo} alt="" />{" "}
        </div>
        <div className="list-group list-group-flush">
          <p
            style={{
              fontWeight: "normal",
              fontSize: "16px",
            }}
            href="#asd"
            className="list-group-item list-group-item-action text-primary "
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
            className="list-group-item list-group-item-action "
          >
            <span>
              <img style={{ width: "17px" }} src={plusIcon} alt="" />
            </span>{" "}
            Add event
          </p>
        </div>
      </div>

      <div className="bg-light" id="page-content-wrapper">
        <nav className="navbar navbar-expand-lg navbar-light bg-white  border-0">
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
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ml-auto mt-2 mt-lg-0">
              <li className="nav-item active">
                <button
                  onClick={() => {
                    window.location = "/";
                  }}
                  className=" btn btn-primary"
                >
                  Back to Home <span class="sr-only">(current)</span>
                </button>
              </li>
            </ul>
          </div>
        </nav>

        <div className="container-fluid ">
          <div
            style={{
              backgroundColor: "white",
              margin: "23px 18px 0px 18px",
              padding: "23px 18px 0px 18px",
              borderRadius: "20px",
            }}
          >
            <table className="table">
              <thead style={{ backgroundColor: "#F5F6FA" }} className="">
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
