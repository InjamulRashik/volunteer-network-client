import React from "react";
import Header from "../../Header";
import childSupport from "../../images/childSupport.png";

import "./Home.css";

const Home = () => {
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
    </section>
  );
};

export default Home;
