import React from "react";
import "../styles/homeSlider.css";
import Button from "@mui/material/Button";
import { NavLink } from "react-router-dom";

const HomeSlider = () => {
  return (
    <>
      <div className="slider_main_div">
        <div className="container">
          <div className="row gx-0 w-72">
            <div className="col-7 slider_right_div">
              <div className="container right_container">
                <div className="row gx-0">
                  <div className="col-12 align-items-start slider_text">
                    <h5>Smart Product</h5>
                    <h1 className="fw-bold">Winter Offer 2024 collection</h1>
                    <h6>Free shipping on all order</h6>
                    <h6>Daily Deals !!</h6>
                    <Button variant="outlined" color="secondary">
                      <NavLink
                        to={"/product"}
                        style={{ textDecoration: "none", color: "#9500ae" }}
                      >
                        SHOP NOW
                      </NavLink>
                    </Button>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-5 slider_left_div">
              <div className="container left_container">
                <div className="row gx-0">
                  <div className="col-12">
                    <img
                      src="https://flone.jamstacktemplates.dev/assets/img/slider/single-slide-hm1-2.png"
                      alt="Not Found"
                      className="img-fluid max-w-96 h-auto"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* <div className="row g-0">
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
                <NavLink
                  to={"/product"}
                  style={{ textDecoration: "none", color: "#9500ae" }}
                >
                  SHOP NOW
                </NavLink>
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
        </div> */}
      </div>
    </>
  );
};

export default HomeSlider;
