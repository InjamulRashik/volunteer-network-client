import React from "react";
import dltIcons from "../../logos/trash-2 9.png";

const UserTable = (props) => {
  const { name, email, date, volunteerType } = props.user;
  return (
    <React.Fragment>
      <tr>
        <th scope="row">{name}</th>
        <td>{email}</td>
        <td>{date}</td>
        <td>{volunteerType}</td>
        <td>
          <button className="btn btn-danger">
            <img style={{ width: "25px" }} src={dltIcons} alt="" />
          </button>
        </td>
      </tr>
    </React.Fragment>
  );
};

export default UserTable;
