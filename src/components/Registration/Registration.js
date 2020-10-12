import React, { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import "./Registration.css";
import logo from "../../logo.png";
import { TextField, useFormControl } from "@material-ui/core";
import { useHistory, useLocation, useParams } from "react-router-dom";
import { volunteerData } from "../../fakeData/volunteerData";
import { UserContext } from "../../App";

const Registration = () => {
  const n = new Date();
  const y = n.getFullYear();
  const m = n.getMonth() + 1;
  const d = n.getDate();
  const currentDate = d + "/" + m + "/" + y;
  const [loggedInUser, setLoggedInUser] = useContext(UserContext);
  const { key } = useParams();
  const vdKey = volunteerData.find((vdkey) => vdkey.key === key);
  let history = useHistory();

  const { handleSubmit } = useForm();
  const [value, setValue] = useState("");
  const handleChange = (e) => {
    setValue(e.target.value);
  };
  const onSubmit = () => {
    const userInfo = {
      name: loggedInUser.name,
      email: loggedInUser.email,
      date: currentDate,
      description: value,
      volunteerType: key,
    };

    fetch("http://localhost:5000/addUser", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(userInfo),
    }).then((res) => res.json());
    if (window.confirm("Registration Done")) {
      history.push("/userinfo");
    }
  };

  return (
    <div className="base">
      <img className="logo" src={logo} alt="" />
      <h1>
        <b>Register as a Volunteer</b>
      </h1>{" "}
      <br />
      <div className="content">
        <form className="form form-group" onSubmit={handleSubmit(onSubmit)}>
          <TextField
            name="name"
            id="standard-basic"
            value={loggedInUser.name}
          />{" "}
          <br />
          <TextField
            name="email"
            id="standard-basic"
            value={loggedInUser.email}
          />{" "}
          <br />
          <TextField name="date" id="standard-basic" value={currentDate} />{" "}
          <br />
          <TextField
            value={value}
            onChange={handleChange}
            name="description"
            id="standard-basic"
            label="Description"
            required
          />{" "}
          <br />
          <TextField
            name="volunteerName"
            id="standard-basic"
            value={key}
          />{" "}
          <br />
          <input
            className="btn btn-primary"
            type="submit"
            value="Registration"
          />
          <br />
        </form>
      </div>
    </div>
  );
};

export default Registration;
