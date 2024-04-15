import React from "react";
import "./home.css";
import Header from "../Header/Header";
import HomeSlider from "../../pages/HomeSlider";
import HomeFeatures from "../../pages/HomeFeatures";
import HomeProduct from "../../pages/HomeProduct";
import Footer from "../Footer/Footer";

const Home = () => {
  return (
    <>
      <Header />
      <div className="Home_main_div">
        <HomeSlider />
        <HomeFeatures />
        <HomeProduct />
      </div>
      <Footer />
    </>
  );
};

export default Home;
