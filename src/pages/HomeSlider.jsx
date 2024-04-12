import React from "react";
import "../styles/homeSlider.css";
import Button from "@mui/material/Button";

const HomeSlider = () => {
  return (
    <>
      <div className="slider_main_div">
        <div className="row g-0">
          <div className="slider_left_div col-sm-6 col-md-8">
            <div className="slider_text">
              <h5 style={{ paddingRight: "83px" }}>Smart Product</h5>
              <h1 style={{ width: "89%" }}>Winter Offer 2024 collection</h1>
              <h6 style={{ paddingRight: "32px" }}>
                Free shipping on all order
              </h6>
              <h6 style={{ paddingRight: "118px" }}>Daily Deals !!</h6>
              <Button
                variant="outlined"
                color="secondary"
                style={{ marginRight: "437px", marginTop: "20px" }}
              >
                SHOP NOW
              </Button>
            </div>
          </div>
          <div className="slider_right_div col-6 col-md-4">
            <div className="slider_img_div">
              <img
                src="https://flone.jamstacktemplates.dev/assets/img/slider/single-slide-hm1-2.png"
                alt="Not Found"
                className="slid_img"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HomeSlider;
