import React from "react";
import "./home.css";
import Header from "../Header/Header";
import HomeSlider from "../../pages/HomeSlider";

const Home = () => {
  return (
    <>
      <Header />
      <div className="Home_main_div">
        <HomeSlider />
      </div>
    </>
  );
};

export default Home;
