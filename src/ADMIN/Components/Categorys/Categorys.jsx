import React, { useEffect, useState } from "react";
import "./categorys.css";
import { Box, Toolbar } from "@mui/material";
import ASidebar from "../A-Sidebar/ASidebar";
import Button from "@mui/material/Button";
import SearchTwoToneIcon from "@mui/icons-material/SearchTwoTone";
import DeleteForeverRoundedIcon from "@mui/icons-material/DeleteForeverRounded";
import ModeEditOutlineRoundedIcon from "@mui/icons-material/ModeEditOutlineRounded";
import { blue, red } from "@mui/material/colors";
import { NavLink, useNavigate } from "react-router-dom";
import axios from "axios";
import swal from "sweetalert";

const Categorys = () => {
  const [data, setData] = useState([]);
  const navigate = useNavigate();

  const getCategory = async () => {
    try {
      const response = await axios.get(
        `${process.env.REACT_APP_API}/get-category`
      );
      setData(response.data);
    } catch (error) {
      console.error("Error 00 data:", error);
    }
  };

  const handleDelete = async (_id) => {
    const token = JSON.parse(localStorage.getItem("Admin_login_token"));
    const config1 = {
      headers: { Authorization: `Bearer ${token}` },
    };

    try {
      swal({
        title: "CATEGORY DETAILS",
        text: "Delete, Category!",
        icon: "warning",
        buttons: true,
        dangerMode: true,
      }).then((willDelete) => {
        if (willDelete) {
          swal("Poof! Category Detail has been Deleted !", {
            icon: "success",
          });
          axios.delete(
            `${process.env.REACT_APP_API}/delete-category/${_id}`,

            config1
          );
          navigate("/admin-categorys");
        } else {
          swal("Category Details safe!");
        }
      });
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    getCategory();
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
          <div className="admin_categorys_main_wrapper">
            <div>
              <h2 className="mb-0 fw-bold text-dark">All Categorys</h2>
            </div>
            <div className="box_shadow mt-4">
              <div className="category_wrapper">
                <div className="row p-3">
                  <div className="col-4">
                    <div className="Asearch_wrapper input-group">
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
                  <div className="col-8">
                    <div className="d-flex flex-row-reverse bd-highlight">
                      <NavLink to="/admin-add-categorys">
                        <Button variant="outlined">+ Add new Category</Button>
                      </NavLink>
                    </div>
                  </div>
                </div>
                <hr />
                <div className="row">
                  <div className="col-12">
                    <table className="table table-striped">
                      <thead>
                        <tr>
                          <th className="col-1 product_list_title fs-5 border text-center ">
                            No
                          </th>
                          <th className="col-2 product_list_title fs-5 border">
                            Category Name
                          </th>
                          <th className="col-2 product_list_title fs-5 border text-center">
                            Category Code
                          </th>
                          <th className="col-2 product_list_title fs-5 border text-center">
                            Visibility
                          </th>
                          <th className="col-1 product_list_title fs-5 border text-center">
                            Action
                          </th>
                        </tr>
                      </thead>
                      <tbody>
                        {data.map((item, index) => (
                          <tr key={index}>
                            <td className="col-1 border">
                              <div className="category_no_wrapper">
                                <p className="mb-0 fs-4 fw-bold text-center">
                                  {index + 1}
                                </p>
                              </div>
                            </td>
                            <td className="col-3 border">
                              <div className="category_name_wrapper">
                                <p className="mb-0 fs-4 fw-bold">{item.name}</p>
                              </div>
                            </td>
                            <td className="col-2 border">
                              <div className="category_code_wrapper">
                                <p className="fs-4 text-center mb-0">
                                  {item.code}
                                </p>
                              </div>
                            </td>
                            <td className="col-2 border">
                              <div className="category_visibility_wrapper">
                                {/* <p className="mb-0 text-center Visiblek">Visible  </p> */}
                                <p
                                  className={`${
                                    item.visibility === "Visible"
                                      ? "Visible"
                                      : "hidden"
                                  }`}
                                >
                                  {item.visibility}
                                </p>
                              </div>
                            </td>
                            <td className="col-1 border">
                              <div className="category_btn_wrapper d-flex">
                                {/* <button
                                type="button"
                                className="btn btn-outline mt-2"
                              > */}
                                <DeleteForeverRoundedIcon
                                  sx={{ color: red[700] }}
                                  onClick={(e) => {
                                    e.preventDefault();
                                    // console.log("_id", item._id);
                                    handleDelete(item._id);
                                  }}
                                />
                                &nbsp;&nbsp;&nbsp;
                                {/* </button> */}
                                {/* <button
                                type="button"
                                className="btn btn-outline mt-2"
                              > */}
                                <NavLink
                                  to={`/admin-update-categorys/${item._id}`}
                                  variant="body2"
                                  className="text-decoration-none fs-5 d-flex fw-bold"
                                >
                                  <ModeEditOutlineRoundedIcon
                                    sx={{ color: blue[700] }}
                                  />
                                </NavLink>
                                {/* </button> */}
                              </div>
                            </td>
                          </tr>
                        ))}
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

export default Categorys;
