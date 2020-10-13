import React from "react";
import volImage from "../../images/extraVolunteer.png";

const UserSingleInfo = (props) => {
  return (
    <div style={{ marginBottom: "15px" }}>
      <div
        className="card flex-row"
        style={{
          background: "#FFFFFF",
          boxShadow: "0px 10px 30px rgba(0, 0, 0, 0.05)",
          borderRadius: "10px",
          width: "570px",
          border: "none",
        }}
      >
        <div style={{ marginRight: "23px" }} className="card-header border-0 ">
          <img
            style={{ height: "173px", width: "194px" }}
            src={volImage}
            alt=""
          />
        </div>
        <div className="card-block px-2">
          <h4 className="card-title">{props.user.volunteerType}</h4>
          <p className="card-text">{props.user.date}</p>
          <button className="btn btn-light">Cancel</button>
        </div>
        <div className="w-100"></div>
      </div>
    </div>
  );
};

export default UserSingleInfo;
