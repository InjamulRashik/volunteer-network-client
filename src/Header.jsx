import React from "react";
import logo from "./logo.png";

const Header = () => {
  return (
    <div style={{ paddingLeft: "80px", paddingRight: "80px" }}>
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
            <li style={{ marginRight: "12px" }} className="nav-item ">
              <button
                style={{
                  marginRight: "5px",
                  marginBottom: "5px",
                  width: "153px",
                }}
                className="btn btn-primary"
              >
                Register
              </button>
            </li>
            <li className="nav-item ">
              <button
                onClick={() => {
                  window.location = "/admin";
                }}
                style={{
                  width: "153px",
                }}
                className="btn btn-dark"
              >
                Admin
              </button>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default Header;
