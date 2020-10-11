import React from "react";
import Header from "../../Header";

import "./Home.css";

const Home = () => {
  return (
    <section className="top">
      <Header></Header>
      <h1 className="heading">I GROW BY HELPING PEOPLE IN NEED</h1>
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
