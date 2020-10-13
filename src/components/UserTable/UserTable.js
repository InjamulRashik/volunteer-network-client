import React from "react";
import dltIcons from "../../logos/trash-2 9.png";

const UserTable = (props) => {
  function deleteUser(id) {
    fetch(`http://localhost:5000/delete/${id}`, {
      method: "DELETE",
    })
      .then((response) => response.json())
      .then((data) => {});
    window.location.reload();
  }
  const { name, email, date, volunteerType, _id } = props.user;
  return (
    <React.Fragment>
      <tr>
        <th scope="row">{name}</th>
        <td>{email}</td>
        <td>{date}</td>
        <td>{volunteerType}</td>
        <td>
          <button onClick={(e) => deleteUser(_id)} className="btn btn-danger">
            <img style={{ width: "25px" }} src={dltIcons} alt="" />
          </button>
        </td>
      </tr>
    </React.Fragment>
  );
};

export default UserTable;
