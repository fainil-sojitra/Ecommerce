import { Box, Button, Toolbar } from "@mui/material";
import React, { useState } from "react";
import ASidebar from "../A-Sidebar/ASidebar";
import { NavLink, useNavigate } from "react-router-dom";
import axios from "axios";
import swal from "sweetalert";

const AddCategory = () => {
  const [data,setData] =useState({
    name:"",
    code:"",
    visivbility:"",
  })

  const navigate = useNavigate();

  const handleSubmit = async (_id) => {
    // if (validateForm()) {

    const token = JSON.parse(localStorage.getItem("Admin_login_token"));
    const config1 = {
      headers: { Authorization: `Bearer ${token}` },
    };

    try {
      const response = await axios.post(
        `${process.env.REACT_APP_API}/add-category`,
        data,
        config1
      );
      console.log("-data", response.data);
      setData(response.data);
      swal({
        title: "ADD CATEGORY SUCCESSFULLY!",
        icon: "success",
      });
      navigate("/admin-categorys");
    } catch (error) {
      console.error("Error updating data:", error);
    }
    // }
  };

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
              <p className="mb-0 fs-2 fw-bold text-dark">
                Add Categorys &nbsp;
                {/* <button type="button" className="btn btn-outline border p-0"> */}
                <NavLink
                  to={"/admin-categorys"}
                  variant="body2"
                  className="text-decoration-none fw-bold fs-3 text-primary"
                >
                  BACK
                </NavLink>
                {/* </button> */}
              </p>
            </div>
            <div className="box_shadow mt-4">
              <div className="category_wrapper">
              <form>
                  <div className="row">
                    <div className="col-12">
                      <p className="fs-4 fw-bold text-muted border-bottom m-3 mb-0">
                        Edit Category Dtails
                      </p>
                    </div>
                    <div className="col-6">
                      <div className="form_content_wrapper p-3">
                        <div className="mb-3">
                          <label
                            htmlFor="formGroupExampleInput"
                            className="form-label"
                          >
                            Category Name
                          </label>
                          <input
                            type="text"
                            className="form-control"
                            id="formGroupExampleInput"
                            placeholder="Category Name"
                            name="name"
                            value={data.name}
                            onChange={(e) =>
                              setData({
                                ...data,
                                name: e.target.value,
                              })
                            }
                          />
                        </div>
                        <div className="mb-3">
                          <label
                            htmlFor="formGroupExampleInput"
                            className="form-label"
                          >
                            Category Code
                          </label>
                          <input
                            type="text"
                            className="form-control"
                            id="formGroupExampleInput"
                            placeholder="Category
                             Code"
                            name="code"
                            value={data.code}
                            onChange={(e) =>
                              setData({
                                ...data,
                                code: e.target.value,
                              })
                            }
                          />
                        </div>
                      </div>
                    </div>
                    <div className="col-6">
                      <div className="form_content_wrapper p-3">
                        <label
                          className="form-check-label"
                          htmlFor="flexRadioDefault1"
                        >
                          Visibility
                        </label>
                        <div className="form-check">
                          <input
                            className="form-check-input"
                            type="radio"
                            id="flexRadioDefault1"
                            name={data.visibility}
                            value="Visible"
                            onChange={(e) =>
                              setData({
                                ...data,
                                visibility: e.target.value,
                              })
                            }
                          />
                          <label
                            className="form-check-label fw-bold"
                            htmlFor="flexRadioDefault1"
                          >
                            Visible
                          </label>
                        </div>
                        <div className="form-check mb-3">
                          <input
                            className="form-check-input"
                            type="radio"
                            id="flexRadioDefault2"
                            name={data.visibility}
                            value="Hidden"
                            onChange={(e) =>
                              setData({
                                ...data,
                                visibility: e.target.value,
                              })
                            }
                          />
                          <label
                            className="form-check-label fw-bold"
                            htmlFor="flexRadioDefault2"
                          >
                            Hidden
                          </label>
                        </div>
                        <div className="d-flex flex-row-reverse bd-highlight mt-5">
                          <Button
                            type="submit"
                            variant="outlined"
                            onClick={(e) => {
                              e.preventDefault();
                              handleSubmit(data._id);
                            }}
                          >
                            SAVE CATEGORY
                          </Button>
                        </div>
                      </div>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </Box>
      </Box>
    </div>
  );
};

export default AddCategory;
