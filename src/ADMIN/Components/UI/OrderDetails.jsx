import React from "react";
import "../../Styles/orderDetails.css";
import { Box, Toolbar } from "@mui/material";
import ASidebar from "../A-Sidebar/ASidebar";
import { NavLink } from "react-router-dom";
import ShareLocationRoundedIcon from "@mui/icons-material/ShareLocationRounded";
import { cyan } from "@mui/material/colors";

const OrderDetails = () => {
  return (
    <div>
      <Box sx={{ display: "flex" }}>
        <ASidebar />
        <Box
          component="main"
          sx={{ flexGrow: 1, bgcolor: "background.default", p: 3 }}
        >
          <Toolbar />
          <div className="admin_track_order_main_wrapper">
            <div>
              <p className="mb-0 fs-2 fw-bold text-dark">
                Order Invoice &nbsp;
                {/* <button type="button" class="btn btn-outline border p-0"> */}
                <NavLink
                  to={"/admin-order"}
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
                  <div className="col-12">
                    <div className="invoice_btn_wrapper d-flex flex-row-reverse">
                      <button type="button" className="btn btn-warning m-2">
                        Print
                      </button>
                      <button type="button" className="btn btn-success m-2">
                        Save
                      </button>
                    </div>
                  </div>
                </div>

                <div className="row mt-3 mb-3 border-top border-bottom">
                  <div className="col-6">
                    <div>
                      <p className="fw-bold fs-3 mb-0">E-Shop Invoice</p>
                    </div>
                  </div>
                  <div className="col-6 d-flex flex-row-reverse">
                    <div>
                      <p className="fw-bold fs-3 mb-0">22 April 2024</p>
                    </div>
                  </div>
                </div>

                <div className="row mt-3 mb-3 ">
                  <div className="col-6">
                    <div className="ord_detail_cont_wrapper">
                      <div>
                        <p className="fw-bold mb-0">From</p>
                      </div>
                      <div>
                        <p className="fw-bold fs-4 mb-0">Fainil Sojitra</p>
                      </div>
                      <div>
                        <p className="fw-normal mb-0">
                          124 Lorem Ipsum, Suite 478, Dummuy, USA 123456
                        </p>
                      </div>
                      <div>
                        <p className="fw-bold mb-0">
                          Phone: (00) 123-456-7890 &nbsp;&nbsp;&nbsp; Email:
                          info@example.com
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="col-6 d-flex flex-row-reverse">
                    <div className="ord_detail_cont_wrapper">
                      <div>
                        <p className="fw-bold mb-0 text-end">To</p>
                      </div>
                      <div>
                        <p className="fw-bold fs-4 mb-0 text-end">Test Demo</p>
                      </div>
                      <div>
                        <p className="fw-normal mb-0 text-end">
                          124 Lorem Ipsum, Suite 478, Dummuy, USA 123456
                        </p>
                      </div>
                      <div>
                        <p className="fw-bold mb-0 text-end">
                          Phone: (00) 123-456-7890 &nbsp;&nbsp;&nbsp; Email:
                          test@example.com
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="row bg_color border">
                  <div className="col-xxl-3 text-xxl-center col-sm-6">
                    <div>
                      <p className="fs-5 mb-0">
                        <b>Invoice: </b> #0154879
                      </p>
                    </div>
                  </div>
                  <div className="col-xxl-3 text-xxl-center text-sm-end col-sm-6">
                    <div>
                      <p className="fs-5 mb-0">
                        <b>Order ID:</b> FC12548
                      </p>
                    </div>
                  </div>
                  <div className="col-xxl-3 text-xxl-center col-sm-6">
                    <div>
                      <p className="fs-5 mb-0">
                        <b>Payment Due:</b> 14/08/2018
                      </p>
                    </div>
                  </div>
                  <div className="col-xxl-3 text-xxl-center text-sm-end col-sm-6">
                    <div>
                      <p className="fs-5 mb-0">
                        <b>Account:</b> 00215487541296
                      </p>
                    </div>
                  </div>
                </div>

                <div className="row mt-3 mb-3">
                  <div className="col-12">
                    <table className="table table-bordered">
                      <thead>
                        <tr>
                          <th className="col-1">Item No</th>
                          <th className="col-4">Item Name</th>
                          <th className="col-2">SKU</th>
                          <th className="col-1 text-end">Quantity</th>
                          <th className="col-2 text-end">Unit Cost</th>
                          <th className="col-2 text-end">Subtotal</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td className="col-1 d-flex">
                            1
                            <NavLink
                              to={"/admin-track-order"}
                              variant="body2"
                              className="text-decoration-none d-flex"
                            >
                              <ShareLocationRoundedIcon
                                sx={{ color: cyan[400] }}
                              />
                            </NavLink>
                          </td>
                          <td className="col-4">Milk Powder</td>
                          <td className="col-2">12345678912514</td>
                          <td className="col-1 text-end">2</td>
                          <td className="col-2 text-end">₹ 26</td>
                          <td className="col-2 text-end">₹ 52</td>
                        </tr>
                        <tr>
                          <td className="col-1">2</td>
                          <td className="col-4">Air Conditioner</td>
                          <td className="col-2">12345678912514</td>
                          <td className="col-1 text-end">1</td>
                          <td className="col-2 text-end">₹ 1500</td>
                          <td className="col-2 text-end">₹ 1500</td>
                        </tr>
                        <tr>
                          <td className="col-1">3</td>
                          <td className="col-4">TV</td>
                          <td className="col-2">12345678912514</td>
                          <td className="col-1 text-end">2</td>
                          <td className="col-2 text-end">₹ 540</td>
                          <td className="col-2 text-end">₹ 1080</td>
                        </tr>
                        <tr>
                          <td className="col-1">4</td>
                          <td className="col-4">Mobile</td>
                          <td className="col-2">12345678912514</td>
                          <td className="col-1 text-end">3</td>
                          <td className="col-2 text-end">₹ 320</td>
                          <td className="col-2 text-end">₹ 960</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>

                <div className="row mt-3 mb-3">
                  <div className="col-12 lh-lg">
                    <div>
                      <p className="fs-4 mb-0 text-end">
                        Payment Due
                        <span className="text-danger">14/08/2018</span>
                      </p>
                    </div>
                    <div>
                      <p className="fs-5 mb-0 text-end">
                        Sub - Total amount : <span> ₹ 3,592.00</span>
                      </p>
                    </div>
                    <div>
                      <p className="fs-5 mb-0 text-end">
                        Tax (18%) : <span>₹ 646.56</span>
                      </p>
                    </div>
                    <div>
                      <p className="fs-5 mb-0 text-end">
                        Shipping : <span>₹ 110.44</span>
                      </p>
                    </div>
                    <hr />
                    <div>
                      <p className="mb-2 mt-0 fs-2 fw-bold lh-1 text-end">
                        Total : <span className="fw-normal">₹ 4,349.00</span>
                      </p>
                    </div>
                    <div>
                      <p className="fw-bold fs-2 mb-0 text-end">
                        STATUS : <span className="text-success">Paid</span>
                        {/* <p className="fw-bold fs-2 mb-0 text-end">STATUS : <span className="text-warning">Pending</span></p> */}
                        {/* <p className="fw-bold fs-2 mb-0 text-end">STATUS : <span className="text-danger">Unpaid</span></p> */}
                      </p>
                    </div>
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

export default OrderDetails;
