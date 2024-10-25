import React from "react";
import "./AOrder.css";
import { Box, Toolbar } from "@mui/material";
import ASidebar from "../A-Sidebar/ASidebar";
import SearchTwoToneIcon from "@mui/icons-material/SearchTwoTone";
import RemoveRedEyeIcon from "@mui/icons-material/RemoveRedEye";
import ModeEditOutlineRoundedIcon from "@mui/icons-material/ModeEditOutlineRounded";
import ShareLocationRoundedIcon from "@mui/icons-material/ShareLocationRounded";
import { NavLink } from "react-router-dom";
import { blue, cyan, green } from "@mui/material/colors";

const AOrder = () => {
  return (
    <div>
      <Box sx={{ display: "flex" }}>
        <ASidebar />
        <Box
          component="main"
          sx={{ flexGrow: 1, bgcolor: "background.default", p: 3 }}
        >
          <Toolbar />
          <div className="admin_product_main_wrapper">
            <div>
              <h2 className="mb-0 fw-bold">Order List</h2>
            </div>
            <div className="box_shadow mt-4">
              <div className="Aorder_wrappers">
                <div className="row">
                  <div className="col-12">
                    <div className=" Asearch_wrapper input-group ">
                      <input
                        type="text"
                        className="form-control Asearch_input"
                        placeholder="Search here..."
                        aria-label="Username"
                        aria-describedby="basic-addon1"
                      />
                      <div className="input-group-prepend">
                        <span
                          className="input-group-text Asearch_icon"
                          id="basic-addon1"
                        >
                          <SearchTwoToneIcon />
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
                <hr />

                <div className="row">
                  <div className="col-12">
                    <table className="table table-striped">
                      <thead>
                        <tr>
                          <th className="col-2 order_list_title fs-5 text-center ">
                            Order ID
                          </th>
                          <th className="col-3 order_list_title fs-5">
                            Customer
                          </th>
                          <th className="col-2 order_list_title fs-5 text-center">
                            Date
                          </th>
                          <th className="col-1 order_list_title fs-5 text-center">
                            Items
                          </th>
                          <th className="col-2 order_list_title fs-5 text-center">
                            Order Total
                          </th>
                          <th className="col-1 order_list_title fs-5 text-center">
                            Status
                          </th>
                          <th className="col-1 order_list_title fs-5 text-center">
                            Action
                          </th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td className="col-2 border">
                            <div className="Aorder_product_orderID_wrapper">
                              <p className="mb-0 fs-5 fw-bold text-center">
                                0000001
                              </p>
                            </div>
                          </td>
                          <td className="col-3 border">
                            <div className="Aorder_name_wrapper">
                              <p className="mb-0 fs-5">Fainil Sojitra</p>
                            </div>
                          </td>
                          <td className="col-2 border">
                            <div className="Aorder_Date_wrapper">
                              <p className="mb-0 fs-5 text-center ">
                                08/05/2024
                              </p>
                            </div>
                          </td>
                          <td className="col-1 border">
                            <div className="Aorder_Date_wrapper">
                              <p className="mb-0 fs-5 text-center ">3 Items</p>
                            </div>
                          </td>
                          <td className="col-2 border">
                            <div className="Aorder_price_wrapper">
                              <p className="mb-0 fs-5 text-center">₹20,000</p>
                            </div>
                          </td>
                          <td className="col-1 border">
                            <div className="Aorder_stock_wrapper">
                              {/* <p className="mb-0 fs-6 px-2 text-center success">Success</p> */}
                              <p className="mb-0 fs-6 px-2 text-center cancel">
                                Cancel
                              </p>
                              {/* <p className="mb-0 fs-6 px-2 text-center pending">Pending</p> */}
                            </div>
                          </td>
                          <td className="col-1 border">
                            <div className="Aorder_btn_wrapper d-flex">
                              {/* <button type="button" className="btn btn-outline"> */}
                             
                              &nbsp;&nbsp;
                              {/* </button> */}
                              {/* <button type="button" className="btn btn-outline"> */}
                              <NavLink
                                to={"/admin-order-details"}
                                variant="body2"
                                className="text-decoration-none d-flex"
                              >
                                <RemoveRedEyeIcon sx={{ color: green[700] }} />
                              </NavLink>
                              &nbsp;&nbsp;
                              {/* </button> */}
                              {/* <button type="button" className="btn btn-outline"> */}
                              <ModeEditOutlineRoundedIcon
                                sx={{ color: blue[700] }}
                              />
                              {/* </button> */}
                            </div>
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

export default AOrder;
