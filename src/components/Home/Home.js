import React, { useState } from "react";
import { volunteerData } from "../../fakeData/volunteerData";
import Header from "../../Header";
import Volunteer from "../Volunteer/Volunteer";

import "./Home.css";

const Home = () => {
  const volunteer = volunteerData;
  const [volunteers, setVolunteers] = useState(volunteer);
  return (
    <section className="top">
      <Header></Header>
      <h1 className="heading">
        <b>I GROW BY HELPING PEOPLE IN NEED</b>
      </h1>
      <div className="searchBar">
        <input
          className="input"
          type="text"
          name=""
          id=""
          placeholder="Search...."
        />{" "}
        <button className="btn btn-primary searchBtn">Search</button>
      </div>
      <div className="container vol-cards">
        <div className="row d-flex justify-content-around">
          {volunteers.map((volunteer) => (
            <Volunteer volunteer={volunteer}></Volunteer>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Home;
