import React, { useEffect, useState } from "react";
import "../../Styles/updateCategory.css";
import { Box, Button, Toolbar } from "@mui/material";
import ASidebar from "../A-Sidebar/ASidebar";
import { NavLink, useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";
import axios from "axios";
import swal from "sweetalert";

const UpdateCategory = () => {
  const [category, setCategory] = useState([]);
  const [data, setData] = useState({
    name: "",
    code: "",
    visibility: "",
  });

  const { slug } = useParams();
  const navigate = useNavigate();

  const gerCategoryDetails = async () => {
    try {
      const response = await axios.get(
        `${process.env.REACT_APP_API}/get-category-details/${slug}`
      );
      setCategory(response.data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  const handleCategory = async (_id) => {
    const token = JSON.parse(localStorage.getItem("Admin_login_token"));
    const config1 = {
      headers: { Authorization: `Bearer ${token}` },
    };

    try {
      const response = await axios.put(
        `${process.env.REACT_APP_API}/put-category-details/${_id}`,
        data,
        config1
      );
      setData(response.data);
      swal({
        title: "UPDATE SUCCESSFULLY!",
        icon: "success",
      });
      navigate("/admin-categorys");
    } catch (error) {
      console.error("Error updating data:", error);
    }
  };

  useEffect(() => {
    gerCategoryDetails();
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
            <p className="mb-0 fs-2 fw-bold text-dark">
              Update Categorys &nbsp;
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

            <div className="box_shadow mt-4">
              <div className="category_wrapper">
                <div className="p-3">
                  {/* {data.map((item, index) => ( */}
                  <div className="row">
                    <div className="col-12">
                      <p className="fs-4 fw-bold text-muted border-bottom  mb-0">
                        Category Dtails
                      </p>
                    </div>
                    <div className="category_details_wrapper mt-3">
                      <div className="col-12 mb-3">
                        <span className="d-flex">
                          Category Name :
                          <p className="fw-bold"> {category.name}</p>
                        </span>
                      </div>
                      <div className="col-12 mb-3">
                        <span className="d-flex">
                          Category Code :
                          <p className="fw-bold"> {category.code}</p>
                        </span>
                      </div>
                      <div className="col-2 mb-3">
                        {/* <span className="d-flex">
                          visibility :
                          <p className="fw-bold"> {category.visibility}</p> */}
                        {/* <div className="cab_status"> */}
                        <span className="d-flex">
                          visibility :
                          <p
                            className={`${
                              category.visibility === "Visible"
                                ? "Visible"
                                : "hidden"
                            }`}
                          >
                            {category.visibility}
                          </p>
                        </span>
                        {/* </span> */}
                      </div>
                    </div>
                  </div>
                  {/* ))} */}
                </div>
              </div>
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
                              handleCategory(category._id);
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

export default UpdateCategory;
