import { Box, Toolbar } from "@mui/material";
import React, { useEffect, useState } from "react";
import ASidebar from "../A-Sidebar/ASidebar";
import { NavLink, useNavigate, useParams } from "react-router-dom";
import swal from "sweetalert";
import axios from "axios";
import ReportGmailerrorredRoundedIcon from "@mui/icons-material/ReportGmailerrorredRounded";
import { red } from "@mui/material/colors";

const ASellerProfile = () => {
  const [data, setData] = useState([]);
  const [address, setAddress] = useState([]);
  const [products, setProducts] = useState([]);

  const { slug } = useParams();
  const navigate = useNavigate();

  const getUserDetails = async () => {
    try {
      const response = await axios.get(
        `${process.env.REACT_APP_API}/show-user/${slug}`
      );
      // console.log(response.data[0].product[0]);
      setData(response.data[0]);
      setAddress(response.data[0].addresses[0]);
      setProducts(response.data[0].product);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  // console.log("products---->", products);

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
    getUserDetails();
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
              <h2 className="mb-0 fw-bold text-dark">Seller Profile</h2>
            </div>
            <div className="row">
              <div className="col-xxl-4 col-lg-4 col-md-12 ">
                <div className="box_shadow mt-4">
                  <div className="d-flex flex-row-reverse bd-highlight">
                    <button
                      type="button"
                      class="btn btn-outline text-danger fs-5 fw-bold"
                      onClick={(e) => {
                        e.preventDefault();
                        // console.log("_id", item._id);
                        handleDelete(data._id);
                      }}
                    >
                      DELETE
                    </button>
                    <button type="button" class="btn btn-outline">
                      <NavLink
                        to={"/admin-sellers-management"}
                        variant="body2"
                        className="text-decoration-none fs-5 d-flex fw-bold"
                      >
                        BACK
                      </NavLink>
                    </button>
                  </div>
                  <div className="user_wrappers">
                    <div className="Auser_prfile_img_wrapper">
                      <img alt="Remy Sharp" src={`${data.image}`} />
                    </div>
                  </div>
                </div>
              </div>

              <div className="ol-xxl-8 col-lg-8 col-md-12">
                <div className="box_shadow mt-4">
                  <div className="user_wrappers">
                    <div>
                      <p className="mb-4 fs-3 fw-lighter text-dark border-bottom">
                        Seller Details
                      </p>
                    </div>
                    <div>
                      <p className="mb-0 fs-5 text-dark lh-lg">
                        Name : <b>{`${data.first_name} ${data.last_name}`}</b>
                      </p>
                    </div>
                    <div>
                      <p className="mb-0 fs-5 text-dark lh-lg">
                        Email : <b>{`${data.email}`}</b>
                      </p>
                    </div>
                    <div>
                      <p className="mb-0 fs-5 text-dark lh-lg">
                        Gender : <b>{`${data.gender}`}</b>
                      </p>
                    </div>
                    <div>
                      <p className="mb-0 fs-5 text-dark lh-lg">
                        Mobile No. :{" "}
                        <b>
                          <b>{`+91 ${data.mobileNo}`}</b>
                        </b>
                      </p>
                    </div>
                    <br />
                    <div>
                      <p className="mb-4 fs-3 fw-lighter text-dark border-bottom">
                        Seller Shop Address
                      </p>
                    </div>
                    {!address ? (
                      <span className="fw-light fs-5 border-bottom text-danger">
                        Address Data Is No Available{" "}
                        <ReportGmailerrorredRoundedIcon
                          sx={{ color: red[700] }}
                        />
                      </span>
                    ) : (
                      <>
                        <div>
                          <p className="mb-0 fs-5 text-dark lh-lg">
                            Address : <b>{`${address.address} ,`}</b>
                          </p>
                        </div>
                        <div>
                          <p className="mb-0 fs-5 text-dark lh-lg">
                            Locality : <b>{`${address.locality} ,`}</b>
                          </p>
                        </div>
                        <div>
                          <p className="mb-0 fs-5 text-dark lh-lg">
                            Pincode : <b>{`${address.pincode} ,`}</b>
                          </p>
                        </div>
                        <div>
                          <p className="mb-0 fs-5 text-dark lh-lg">
                            City : <b>{`${address.city} ,`}</b>
                          </p>
                        </div>
                        <div>
                          <p className="mb-0 fs-5 text-dark lh-lg">
                            State : <b>{`${address.state}`}</b>
                          </p>
                        </div>
                        <div>
                          <p className="mb-0 fs-5 text-dark lh-lg">
                            Type : <b>{`${address.address_type}`}</b>
                          </p>
                        </div>
                      </>
                    )}
                    <div>
                      <p className="mb-4 fs-3 fw-lighter text-dark border-bottom">
                        Seller products
                      </p>
                    </div>
                    {!products.length ? (
                      <span className="fw-light fs-5 border-bottom text-danger">
                        Seller products{" "}
                        <ReportGmailerrorredRoundedIcon
                          sx={{ color: red[700] }}
                        />
                      </span>
                    ) : (
                      <>
                        {products.map((item, index) => (
                          <>
                            <div key={index} className="cart_section ">
                              <div className="cart_prod_img_wrapper">
                                <img
                                  src={`${process.env.REACT_APP_API}/${item.image}`}
                                  alt="cartImg"
                                />
                              </div>
                              <div className="cart_prod_name_wrapper">
                                <p className="mb-0 fs-5 text-dark lh-lg">
                                  name : <b>{`${item.product_name}`}</b>
                                </p>
                                <p className="mb-0 fs-5 text-dark lh-lg">
                                  Category : <b>{`${item.category}`}</b>
                                </p>
                                <p className="mb-0 fs-5 text-dark lh-lg">
                                  SKU : <b>{`${item.sku}`}</b>
                                </p>
                                <p className="mb-0 fs-5 text-dark lh-lg">
                                  Price : <b>{`₹ ${item.price}`}</b>&nbsp; MRP :{" "}
                                  <del>{`₹ ${item.MRP}`}</del>
                                </p>
                                <p className="mb-0 fs-5 text-dark lh-lg">
                                  stock :&nbsp;
                                  <span
                                    className={`${
                                      item.stock === "IN STOCK"
                                        ? "in_stocks"
                                        : "out_stocks"
                                    }`}
                                  >{`${item.stock}`}</span>
                                </p>
                              </div>
                            </div>
                            <hr />
                          </>
                        ))}
                      </>
                    )}
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
export default ASellerProfile;
