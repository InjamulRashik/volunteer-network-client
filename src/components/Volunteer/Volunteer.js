import React from "react";
import "./Volunteer.css";

const Volunteer = (props) => {
  const colors = ["#FFBD3E", "#FF7044", "#3F90FC", "#421FCF"];
  const handleVolunteerClick = () => {};
  return (
    <div
      onClick={handleVolunteerClick}
      style={{ position: "relative" }}
      className="col-md-3 vol-card"
    >
      <img
        style={{
          height: "320px",
          width: "270px",
          marginBottom: "30px",
        }}
        src={props.volunteer.img}
        alt=""
      />
      <div
        style={{ backgroundColor: colors[Math.floor(Math.random() * 4)] }}
        className="vol-name"
      >
        <h4>{props.volunteer.name}</h4>
      </div>
    </div>
  );
};

export default Volunteer;
