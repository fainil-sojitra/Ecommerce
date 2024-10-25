import React, { useEffect, useState } from "react";
import "./products.css";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import SearchTwoToneIcon from "@mui/icons-material/SearchTwoTone";
import Rating from "@mui/material/Rating";
import Stack from "@mui/material/Stack";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import swal from "sweetalert";
import CustomAxios from "../UI/CustomAxios";

const Products = () => {
  const [data, setData] = useState([]);
  const [selectedOption, setSelectedOption] = useState("Select");
  const [cartData, setcartData] = useState({
    quantity: "1",
    product_id: "",
    product_name: "",
    stock: "",
    weight: "",
    price: "",
    image: "",
    sku: "",
  });

  const navigate = useNavigate();

  const getProduct = async () => {
    try {
      const response = await axios.get(
        `${process.env.REACT_APP_API}/all-product`
      );
      setData(response.data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  const lowTohigh = async () => {
    try {
      const response = await axios.get(
        `${process.env.REACT_APP_API}/low_to_high`
      );
      setData(response.data);
      // toggleDrawer(false);
    } catch (error) {
      console.error("Error sorting data:", error);
    }
  };

  const highToLow = async () => {
    try {
      const response = await axios.get(
        `${process.env.REACT_APP_API}/high_to_low`
      );
      setData(response.data);
    } catch (error) {
      console.error("Error sorting data:", error);
    }
  };

  const handleSelect = async (e) => {
    setSelectedOption(e.target.value);
    if (e.target.value === "lowToHigh") {
      await lowTohigh();
    } else if (e.target.value === "highToLow") {
      highToLow();
    } else {
      getProduct();
    }
  };

  const addCart = async (item) => {
    cartData.product_id = item._id;
    cartData.product_name = item.product_name;
    cartData.stock = item.stock;
    cartData.weight = item.weight;
    cartData.price = item.price;
    cartData.image = item.image;
    cartData.sku = item.sku;
    
    try {
      const response = await CustomAxios.post("/add-cart", cartData);
      console.log("add data successful!", response.data);

      swal({
        title: "ADD TO CART SUCCESSFUL!",
        icon: "success",
      });
      setcartData({});
      navigate("/my-cart");
    } catch (error) {
      console.log("error", error.message);
    }
  };

  useEffect(() => {
    window.scrollTo(0, 1);
    getProduct();
  }, []);

  return (
    <>
      <Header />
      <div className="Prod_main_div">
        <div className="row p-1 pt-3 pb-3">
          <div className="col-3 left_col">
            <div className="row p-1">
              <div className="col-12 mt-3">
                <h6 className="heading mb-1">Search</h6>
              </div>
              <div className="col-12 input-group mt-2 mb-3">
                <input
                  type="text"
                  className="form-control search_input"
                  placeholder="Search here..."
                  aria-label="Username"
                  aria-describedby="basic-addon1"
                />
                <div className="input-group-prepend">
                  <span
                    className="input-group-text search_icon"
                    id="basic-addon1"
                  >
                    <SearchTwoToneIcon />
                  </span>
                </div>
              </div>
              <div className="col-12 mt-3 mb-3">
                <h4 className="heading mb-0">Categories</h4>
              </div>
              {/* <hr /> */}
              <div className="col-12">
                <div className="form-check mb-0 check_div">
                  <input
                    className="form-check-input "
                    type="checkbox"
                    value=""
                    id="defaultCheck1"
                  />
                  <label className="form-check-label" htmlFor="defaultCheck1">
                    All Categories
                  </label>
                </div>
                <div className="form-check mb-0 check_div">
                  <input
                    className="form-check-input "
                    type="checkbox"
                    value=""
                    id="defaultCheck1"
                  />
                  <label className="form-check-label" htmlFor="defaultCheck1">
                    Fashion
                  </label>
                </div>
                <div className="form-check mb-0 check_div">
                  <input
                    className="form-check-input "
                    type="checkbox"
                    value=""
                    id="defaultCheck1"
                  />
                  <label className="form-check-label" htmlFor="defaultCheck1">
                    Men
                  </label>
                </div>
                <div className="form-check mb-0 check_div">
                  <input
                    className="form-check-input "
                    type="checkbox"
                    value=""
                    id="defaultCheck1"
                  />
                  <label className="form-check-label" htmlFor="defaultCheck1">
                    Women
                  </label>
                </div>
                <div className="form-check mb-0 check_div">
                  <input
                    className="form-check-input "
                    type="checkbox"
                    value=""
                    id="defaultCheck1"
                  />
                  <label className="form-check-label" htmlFor="defaultCheck1">
                    Electronics
                  </label>
                </div>
              </div>
              <div className="col-12 mt-3 mb-3">
                <h4 className="heading mb-0">Color</h4>
              </div>
              {/* <hr /> */}
              <div className="col-12">
                <div className="form-check mb-0 check_div">
                  <input
                    className="form-check-input "
                    type="checkbox"
                    value=""
                    id="defaultCheck1"
                  />
                  <label className="form-check-label" htmlFor="defaultCheck1">
                    All Colors
                  </label>
                </div>
                <div className="form-check mb-0 check_div">
                  <input
                    className="form-check-input "
                    type="checkbox"
                    value=""
                    id="defaultCheck1"
                  />
                  <label className="form-check-label" htmlFor="defaultCheck1">
                    White
                  </label>
                </div>
                <div className="form-check mb-0 check_div">
                  <input
                    className="form-check-input "
                    type="checkbox"
                    value=""
                    id="defaultCheck1"
                  />
                  <label className="form-check-label" htmlFor="defaultCheck1">
                    Black
                  </label>
                </div>
                <div className="form-check mb-0 check_div">
                  <input
                    className="form-check-input "
                    type="checkbox"
                    value=""
                    id="defaultCheck1"
                  />
                  <label className="form-check-label" htmlFor="defaultCheck1">
                    Brown
                  </label>
                </div>
                <div className="form-check mb-0 check_div">
                  <input
                    className="form-check-input "
                    type="checkbox"
                    value=""
                    id="defaultCheck1"
                  />
                  <label className="form-check-label" htmlFor="defaultCheck1">
                    Blue
                  </label>
                </div>
              </div>
              <div className="col-12 mt-3 mb-3">
                <h4 className="heading mb-0">Size</h4>
              </div>
              {/* <hr /> */}
              <div className="col-12">
                <div className="form-check mb-0 check_div">
                  <input
                    className="form-check-input "
                    type="checkbox"
                    value=""
                    id="defaultCheck1"
                  />
                  <label className="form-check-label" htmlFor="defaultCheck1">
                    All Sizes
                  </label>
                </div>
                <div className="form-check mb-0 check_div">
                  <input
                    className="form-check-input "
                    type="checkbox"
                    value=""
                    id="defaultCheck1"
                  />
                  <label className="form-check-label" htmlFor="defaultCheck1">
                    X
                  </label>
                </div>
                <div className="form-check mb-0 check_div">
                  <input
                    className="form-check-input "
                    type="checkbox"
                    value=""
                    id="defaultCheck1"
                  />
                  <label className="form-check-label" htmlFor="defaultCheck1">
                    M
                  </label>
                </div>
                <div className="form-check mb-0 check_div">
                  <input
                    className="form-check-input "
                    type="checkbox"
                    value=""
                    id="defaultCheck1"
                  />
                  <label className="form-check-label" htmlFor="defaultCheck1">
                    XL
                  </label>
                </div>
                <div className="form-check mb-0 check_div">
                  <input
                    className="form-check-input "
                    type="checkbox"
                    value=""
                    id="defaultCheck1"
                  />
                  <label className="form-check-label" htmlFor="defaultCheck1">
                    XXL
                  </label>
                </div>
              </div>
            </div>
          </div>
          <div className="col-9 right_col">
            <div className="row p-1">
              <div className="col-12">
                <div className="mt-3 mb-3">
                  <div className="d-flex align-items-center gap-3 ">
                    <span className="d-flex align-items-center gap-2">
                      <i className="ri-sort-asc"></i> Sort By Price
                    </span>
                    <select
                      className="select-filter"
                      value={selectedOption}
                      onChange={handleSelect}
                    >
                      <option value="Reset">Default</option>
                      <option value="lowToHigh">Price - Low to High</option>
                      <option value="highToLow">Price - High to Low</option>
                    </select>
                    <span className="d-flex align-items-center gap-2">
                      <i className="ri-sort-asc"></i> Showing 15 of 144
                      result...
                    </span>
                  </div>
                </div>
              </div>
              <hr />
              <div className="col-12 mt-1 mb-3  ">
                {data.map((item, index) => (
                  <div key={index} className="row">
                    <div className="col-4 pt-2">
                      <Link to={`/product_details/${item._id}`}>
                        <div className="product_img_div">
                          <img
                            src={`${process.env.REACT_APP_API}/${item.image}`}
                            alt="{item.name}"
                          />
                        </div>
                      </Link>
                    </div>
                    <div className="col-8 pt-2">
                      <div className="product_content_div pt-2 ">
                        <div className="col-12">
                          <h3 className="product_title">{item.product_name}</h3>
                        </div>
                        <div className="d-flex mb-3">
                          <div className="col-2 position-relative">
                            <h2 className="product_offer_price ">
                              ₹{item.price}
                            </h2>
                          </div>
                          <div className="col-3 position-relative">
                            <h4 className="product_price pt-1 text-decoration-line-through text-danger">
                              ₹{item.MRP}
                            </h4>
                          </div>
                        </div>
                        <div className="col-12">
                          <Stack spacing={1}>
                            <Rating
                              name="half-rating"
                              defaultValue={2.5}
                              precision={0.5}
                            />
                          </Stack>
                        </div>
                        <div className="col-12">
                          <p className="product_discription text-secondary">
                            {item.description}
                          </p>
                        </div>
                        {/* <br /> */}
                        <div className="d-flex mb-3">
                          <div className="col-3 btn_wrapper">
                            {/* <Link to={`/my-cart`}> */}
                            <button
                              type="button"
                              className="btn btn-outline-primary"
                              onClick={(e) => addCart(item)}
                            >
                              Add To Cart
                            </button>
                            {/* </Link> */}
                          </div>
                          <div className="col-3 btn_wrapper">
                            <Link to={`/product_details/${item._id}`}>
                              <button
                                type="button"
                                className="btn btn-outline-primary text-text-decoration-none"
                              >
                                View Details
                              </button>
                            </Link>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Products;
