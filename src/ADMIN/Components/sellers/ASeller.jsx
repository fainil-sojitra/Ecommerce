import React, { useEffect, useState } from "react";
import "./ASeller.css";
import { Box, Toolbar } from "@mui/material";
import ASidebar from "../A-Sidebar/ASidebar";
import SearchTwoToneIcon from "@mui/icons-material/SearchTwoTone";
import RemoveRedEyeIcon from "@mui/icons-material/RemoveRedEye";
import ModeEditOutlineRoundedIcon from "@mui/icons-material/ModeEditOutlineRounded";
import { NavLink, useNavigate } from "react-router-dom";
import { blue, green } from "@mui/material/colors";
import swal from "sweetalert";
import axios from "axios";

const ASeller = () => {
  const [data, setData] = useState([]);

  const navigate = useNavigate();

  const getSellerData = () => {
    axios
      .get(`${process.env.REACT_APP_API}/get-all-user`)
      .then((res) => setData(res.data));
  };

  const handleDelete = async (_id) => {
    const token = JSON.parse(localStorage.getItem("Admin_login_token"));
    const config1 = {
      headers: { Authorization: `Bearer ${token}` },
    };

    try {
      swal({
        title: "SELLER DETAILS",
        text: "Delete, Seller!",
        icon: "warning",
        buttons: true,
        dangerMode: true,
      }).then((willDelete) => {
        if (willDelete) {
          swal("Poof! Seller Detail has been Deleted !", {
            icon: "success",
          });
          axios.delete(
            `${process.env.REACT_APP_API}/delete-user/${_id}`,
            config1
          );
          navigate("/admin-seller");
        } else {
          swal("Seller Details safe!");
        }
      });
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    getSellerData();
  }, []);

  return (
    <div>
      <Box sx={{ display: "flex" }}>
        <ASidebar />
        <Box
          component="main"
          sx={{ flexGrow: 1, bgcolor: "background.default", p: 3 }}
        >
          <Toolbar />

          <div className="admin_user_main_wrapper">
            <div>
              <h2 className="mb-0 fw-bold text-dark">All Sellers</h2>
            </div>
            <div className="box_shadow mt-4">
              <div className="user_wrappers">
                <div className="row">
                  <div className="col-2">
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
                          <th className="col-1 Auser_title text-center">
                            Sellers
                          </th>
                          <th className="col-3 Auser_title">Brand Name</th>
                          <th className="col-2 Auser_title">Mobile No.</th>
                          <th className="col-3 Auser_title">Email</th>
                          <th className="col-1 Auser_title text-center">
                            Role
                          </th>
                          <th className="col-2 Auser_title text-center">
                            Action
                          </th>
                        </tr>
                      </thead>
                      <tbody>
                        {data.map((item, index) => {
                          if (item.role === "seller") {
                            return (
                              <tr key={index}>
                                <td className="col-1">
                                  <div className="Auser_img_wrapper">
                                    <img
                                      alt="Remy Sharp"
                                      src={`${process.env.REACT_APP_API}/${item.image}`}
                                    />
                                  </div>
                                </td>
                                <td className="col-3 ">
                                  <div className="Auser_name_wrapper">
                                    <p className="mb-0 fs-4 fw-bold">
                                      {`${item.first_name} ${item.last_name}`}
                                    </p>
                                  </div>
                                </td>
                                <td className="col-2 ">
                                  <div className="Aorder_mobile_wrapper">
                                    <p className="mb-0 fs-5">{item.mobileNo}</p>
                                  </div>
                                </td>
                                <td className="col-3 ">
                                  <div className="Aorder_Email_wrapper">
                                    <p className="mb-0 fs-5">
                                    {item.email}
                                    </p>
                                  </div>
                                </td>
                                <td className="col-1 ">
                                  <div className="Aorder_role_wrapper">
                                    <p className="mb-0 fs-5 text-center text-muted">
                                    {item.role}
                                    </p>
                                  </div>
                                </td>
                                <td className="col-2">
                                  <div className="Auser_btn_wrapper d-flex justify-content-center">
                                    <button
                                      type="button"
                                      class="btn btn-outline"
                                    >
                                      <NavLink
                                        to={`/admin-seller-profile/${item._id}`}
                                        variant="body2"
                                        className="text-decoration-none d-flex"
                                      >
                                        <RemoveRedEyeIcon
                                          sx={{ color: green[700] }}
                                        />
                                      </NavLink>
                                    </button>
                                    &nbsp;
                                    <button
                                      type="button"
                                      class="btn btn-outline"
                                    >
                                      <ModeEditOutlineRoundedIcon
                                        sx={{ color: blue[700] }}
                                      />
                                    </button>
                                  </div>
                                </td>
                              </tr>
                            );
                          }
                        })}
                      </tbody>
                    </table>
                  </div>
                </div>
                <hr />
              </div>
            </div>
          </div>
        </Box>
      </Box>
    </div>
  );
};
export default ASeller;
