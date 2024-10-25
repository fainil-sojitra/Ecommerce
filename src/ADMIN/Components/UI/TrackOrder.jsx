import React from "react";
import "../../Styles/trackOrder.css";
import { Box, Toolbar } from "@mui/material";
import ASidebar from "../A-Sidebar/ASidebar";
import Button from "@mui/material/Button";
import { NavLink } from "react-router-dom";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";

const steps = [
  "Receiving orders",
  "Order processing",
  "Being delivered",
  "Delivered",
];

const TrackOrder = () => {
  return (
    <div>
      <Box sx={{ display: "flex" }}>
        <ASidebar />
        <Box
          component="main"
          sx={{ flexGrow: 1, bgcolor: "background.default", p: 3 }}
        >
          <Toolbar />
          <div className="admin_track_order_main_wrapper mb-4">
            <div>
              <p className="mb-0 fs-2 fw-bold text-dark">
                Track Order &nbsp;
                {/* <button type="button" class="btn btn-outline border p-0"> */}
                <NavLink
                  to={"/admin-order-details"}
                  variant="body2"
                  className="text-decoration-none fw-bold fs-3 text-primary"
                >
                  BACK
                </NavLink>
                {/* </button> */}
              </p>
            </div>
            <div className="box_shadow mt-4">
              <div className="track_order_wrappers">
                <div className="row">
                  <div className="col-xxl-3 col-lg-4 col-md-12">
                    <div className="track_order_img_wrapper">
                      <img
                        src="https://themesflat.co/html/remos/images/images-section/track-oder-1.png"
                        alt="notFound"
                      />
                    </div>
                  </div>
                  <div className="col-xxl-5 col-lg-8 col-md-12 text-center">
                    <div className="track_order_content mt-3">
                      <div className="prod_name">
                        <p className="fs-2 fw-bold ">
                          Pouch Pocket Hoodie Orange
                        </p>
                      </div>
                      <br />
                      <div className="prod_detail ">
                        <div className="prod_detail d-flex">
                          <p className="col-6 fs-5 text-muted">Order ID </p>
                          &nbsp;&nbsp;
                          <p className="col-6 fs-5 fw-bold">#192847</p>
                        </div>
                        <div className="prod_detail d-flex">
                          <p className="col-6 fs-5 text-muted">Brand : </p>
                          &nbsp;&nbsp;
                          <p className="col-6 fs-5 fw-bold">demo</p>
                        </div>
                        <div className="prod_detail d-flex">
                          <p className="col-6 fs-5 text-muted">
                            Order Placed :{" "}
                          </p>
                          &nbsp;&nbsp;<p className="col-6 fs-5 fw-bold">test</p>
                        </div>
                        <div className="prod_detail d-flex">
                          <p className="col-6 fs-5 text-muted">Quantity : </p>
                          &nbsp;&nbsp;
                          <p className="col-6 fs-5 fw-bold">12</p>
                        </div>
                      </div>
                      <br />
                      <div className="order_details_btn_wrapper col-12  bd-highlight">
                        <NavLink
                          to={"/admin-order-details"}
                          variant="body2"
                          className="text-decoration-none d-flex"
                        >
                          <Button variant="outlined" className="w-100">
                            View Order Details
                          </Button>
                        </NavLink>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="admin_track_order_main_wrapper">
            <div>
              <h2 className="mb-0 fw-bold">Tracking Detail</h2>
            </div>
            <div className="box_shadow mt-4">
              <div className="track_order_wrappers">
                <div className="row">
                  <div className="col-12">
                    <p>
                      Your items is on the way. Tracking information will be
                      available within 24 hours.
                    </p>
                    <br />
                    <Box sx={{ width: "100%" }}>
                      <Stepper activeStep={1} alternativeLabel>
                        {steps.map((label) => (
                          <Step key={label}>
                            <StepLabel>{label}</StepLabel>
                          </Step>
                        ))}
                      </Stepper>
                    </Box>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="admin_track_order_main_wrapper">
            <div className="box_shadow mt-4">
              <div className="track_order_wrappers">
                <div className="row">
                  <div className="col-12">
                    <table className="table">
                      <thead>
                        <tr>
                          <th className="col-2 text-center">Date</th>
                          <th className="col-2 text-center">Time</th>
                          <th className="col-4 text-center">Description</th>
                          <th className="col-4 text-center">Location</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td className="col-2 text-center">20 Nov 2023</td>
                          <td className="col-2 text-center">2:30 PM</td>
                          <td className="col-4 text-center">
                            The sender is preparing the goods
                          </td>
                          <td className="col-4 text-center">
                            2715 Ash Dr. San Jose, South Dakota 83475
                          </td>
                        </tr>
                        <tr>
                          <td className="col-2 text-center">20 Nov 2023</td>
                          <td className="col-2 text-center">01:00 PM</td>
                          <td className="col-4 text-center">
                            The order has arrived at the post office
                          </td>
                          <td className="col-4 text-center">
                            3517 W. Gray St. Utica, Pennsylvania 57867
                          </td>
                        </tr>
                        <tr>
                          <td className="col-2 text-center">21 Nov 2023</td>
                          <td className="col-2 text-center">03:58 AM</td>
                          <td className="col-4 text-center">
                            The carrier is picking up the goods
                          </td>
                          <td className="col-4 text-center">
                            1901 Thornridge Cir. Shiloh, Hawaii 81063
                          </td>
                        </tr>
                        <tr>
                          <td className="col-2 text-center">20 Nov 2023</td>
                          <td className="col-2 text-center">2:30 PM</td>
                          <td className="col-4 text-center">
                            The sender is preparing the goods
                          </td>
                          <td className="col-4 text-center">
                            2715 Ash Dr. San Jose, South Dakota 83475
                          </td>
                        </tr>
                        <tr>
                          <td className="col-2 text-center">21 Nov 2023</td>
                          <td className="col-2 text-center">03:58 AM</td>
                          <td className="col-4 text-center">
                            The carrier is picking up the goods
                          </td>
                          <td className="col-4 text-center">
                            1901 Thornridge Cir. Shiloh, Hawaii 81063
                          </td>
                        </tr>
                        <tr>
                          <td className="col-2 text-center">20 Nov 2023</td>
                          <td className="col-2 text-center">01:00 PM</td>
                          <td className="col-4 text-center">
                            The order has arrived at the post office
                          </td>
                          <td className="col-4 text-center">
                            3517 W. Gray St. Utica, Pennsylvania 57867
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Box>
      </Box>
    </div>
  );
};

export default TrackOrder;
