import React from "react";
import { Link } from "react-router-dom";
import "./Volunteer.css";

const Volunteer = (props) => {
  const { key, name, img } = props.volunteer;
  const colors = ["#FFBD3E", "#FF7044", "#3F90FC", "#421FCF"];

  return (
    <div
      onClick={() => {
        window.location.href = `/registration/${name}`;
      }}
      style={{ position: "relative" }}
      className="col-md-3 vol-card"
    >
      <img
        style={{
          height: "320px",
          width: "270px",
          marginBottom: "30px",
        }}
        src={img}
        alt=""
      />
      <div
        style={{ backgroundColor: colors[Math.floor(Math.random() * 4)] }}
        className="vol-name"
      >
        <h4>{name}</h4>
      </div>
    </div>
  );
};

export default Volunteer;
