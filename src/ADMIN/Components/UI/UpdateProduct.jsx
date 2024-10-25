import { Box, Button, Toolbar } from "@mui/material";
import "../../Styles/updateProduct.css";
import React, { useEffect, useState } from "react";
import ASidebar from "../A-Sidebar/ASidebar";
import { NavLink, useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import swal from "sweetalert";

const UpdateProduct = () => {
  const [product, setProduct] = useState([]);
  const [state, setState] = useState({
    product_name: "",
    MRP: "",
    price: "",
    category: "",
    description: "",
    sku: "",
    weight: "",
    materials: "",
    other_info: "",
    about_item_1: "",
    about_item_2: "",
    about_item_3: "",
    about_item_4: "",
    about_item_5: "",
    stock: "",
    image: "",
  });

  const navigate = useNavigate();

  const { slug } = useParams();
  // const navigate = useNavigate();

  const getProductDetails = async () => {
    try {
      const response = await axios.get(
        `${process.env.REACT_APP_API}/product/${slug}`
      );
      setProduct(response.data);
      console.log("productData", response.data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  const imageUpload = (event) => {
    setState({ ...state, image: event.target.files[0] });
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setState({ ...state, [name]: value });
  };

  const handleSubmit = async (event) => {
    const token = JSON.parse(localStorage.getItem("Admin_login_token"));
    const config1 = {
      headers: { Authorization: `Bearer ${token}` },
    };

    event.preventDefault();
    const formData = new FormData();
    formData.append("product_name", state.product_name);
    formData.append("MRP", state.MRP);
    formData.append("price", state.price);
    formData.append("category", state.category);
    formData.append("description", state.description);
    formData.append("sku", state.sku);
    formData.append("weight", state.weight);
    formData.append("materials", state.materials);
    formData.append("other_info", state.other_info);
    formData.append("about_item_1", state.about_item_1);
    formData.append("about_item_2", state.about_item_2);
    formData.append("about_item_3", state.about_item_3);
    formData.append("about_item_4", state.about_item_4);
    formData.append("about_item_5", state.about_item_5);
    formData.append("stock", state.stock);
    formData.append("image", state.image);

    try {
      const response = await axios.put(
        `${process.env.REACT_APP_API}/update-product/${slug}`,
        formData,
        config1
      );
      console.log("Update Product Data successful!", response.data);
      swal({
        title: "PRODUCT UPDATE SUCCESSFUL!",
        icon: "success",
      });

      setState({
        product_name: "",
        MRP: "",
        price: "",
        category: "",
        description: "",
        sku: "",
        weight: "",
        materials: "",
        other_info: "",
        about_item_1: "",
        about_item_2: "",
        about_item_3: "",
        about_item_4: "",
        about_item_5: "",
        stock: "",
        image: "",
      });
      navigate("/admin-product");
    } catch (error) {
      console.error("Error Product:", error);
      swal({
        title: "PRODUCT DATA UNSUCCESSFUL!",
        text: "Please try again later.",
        icon: "error",
      });
    }
  };

  useEffect(() => {
    getProductDetails();
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
              <p className="mb-0 fs-2 fw-bold text-dark">
                Edit Product &nbsp;
                {/* <button type="button" class="btn btn-outline border p-0"> */}
                <NavLink
                  to={"/admin-product"}
                  variant="body2"
                  className="text-decoration-none fw-bold fs-3 text-primary"
                >
                  BACK
                </NavLink>
                {/* </button> */}
              </p>
            </div>
            <div className="row">
              <div className="col-xxl-7">
                <div className="box_shadow mt-4">
                  {product.map((item, index) => (
                    <div className="admin_update_product_wrapper" key={index}>
                      <div className="title_name">
                        <div className="seller_img_wrapper">
                          <img
                            src={`${item.registration[0].image}`}
                            alt="sellerImg"
                          />
                        </div>
                        &nbsp; &nbsp;
                        <h5 className="card-title fw-bold text-primary">
                          {`${item.registration[0].first_name} ${item.registration[0].last_name}`}
                        </h5>
                      </div>
                      <div className="upd_prod_img_wrapper">
                        <img src={item.image} alt="notFound" />
                      </div>
                      <div className="mt-2">
                        <div className="prod_detail mt-3 d-flex">
                          <p className="col-3 fs-5 fw-bold">Name :</p>
                          <p className="col-9 fs-5 text-muted">
                            {item.product_name}
                          </p>
                        </div>
                        <div className="prod_detail d-flex">
                          <p className="col-3 fs-5 fw-bold">MRP :</p>
                          <p className="col-9 fs-5 text-muted">
                            <del>₹ {item.MRP}</del>
                          </p>
                        </div>
                        <div className="prod_detail d-flex">
                          <p className="col-3 fs-5 fw-bold">Price :</p>
                          <p className="col-9 fs-5 text-muted">
                            ₹ {item.price}
                          </p>
                        </div>
                        <div className="prod_detail d-flex">
                          <p className="col-3 fs-5 fw-bold">Category :</p>
                          <p className="col-9 fs-5 text-muted">
                            {item.category}
                          </p>
                        </div>
                        <div className="prod_detail d-flex">
                          <p className="col-3 fs-5 fw-bold">Description :</p>
                          <p className="col-9 fs-5 text-muted">
                            {item.description}
                          </p>
                        </div>
                        <div className="prod_detail d-flex">
                          <p className="col-3 fs-5 fw-bold">SKU :</p>
                          <p className="col-9 fs-5 text-muted">{item.sku}</p>
                        </div>
                        <div className="prod_detail d-flex">
                          <p className="col-3 fs-5 fw-bold">Weight :</p>
                          <p className="col-9 fs-5 text-muted">{item.weight}</p>
                        </div>
                        <div className="prod_detail d-flex">
                          <p className="col-3 fs-5 fw-bold">Materials :</p>
                          <p className="col-9 fs-5 text-muted">
                            {item.materials}
                          </p>
                        </div>
                        <div className="prod_detail d-flex">
                          <p className="col-3 fs-5 fw-bold">Other Info :</p>
                          <p className="col-9 fs-5 text-muted">
                            {item.other_info}
                          </p>
                        </div>
                        <div className="prod_detail d-flex">
                          <p className="col-3 fs-5 fw-bold">About Item 1 :</p>
                          <p className="col-9 fs-5 text-muted">
                            {item.about_item_1}
                          </p>
                        </div>
                        <div className="prod_detail d-flex">
                          <p className="col-3 fs-5 fw-bold">About Item 2 :</p>
                          <p className="col-9 fs-5 text-muted">
                            {item.about_item_2}
                          </p>
                        </div>
                        <div className="prod_detail d-flex">
                          <p className="col-3 fs-5 fw-bold">About Item 3 :</p>
                          <p className="col-9 fs-5 text-muted">
                            {item.about_item_3}
                          </p>
                        </div>
                        <div className="prod_detail d-flex">
                          <p className="col-3 fs-5 fw-bold">About Item 4 :</p>
                          <p className="col-9 fs-5 text-muted">
                            {item.about_item_4}
                          </p>
                        </div>
                        <div className="prod_detail d-flex">
                          <p className="col-3 fs-5 fw-bold">About Item 5 :</p>
                          <p className="col-9 fs-5 text-muted">
                            {item.about_item_5}
                          </p>
                        </div>
                        <div className="prod_detail d-flex">
                          <div className="col-3">
                            <p className="fs-5 fw-bold">Stock :</p>
                          </div>
                          <div className="Aproduct_stock_wrappers col-9">
                            <p
                              className={`${
                                item.stock === "IN STOCK"
                                  ? "in_stock"
                                  : "out_stock"
                              }`}
                            >
                              {item.stock}
                            </p>
                            {/* <p className="mb-0 text-center out_stock">
                            Out of stock
                          </p> */}
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              <div className="col-xxl-5">
                <div className="box_shadow mt-4">
                  <div className="admin_update_product_wrapper">
                    <div className="col-12">
                      <h2 className="fw-lighter text-center">UPDATE PRODUCT</h2>
                    </div>
                    <hr />
                    <form onSubmit={handleSubmit}>
                      <div className="row">
                        <div className="col-6 ">
                          <div className="mb-3">
                            <label
                              htmlFor="formGroupExampleInput"
                              className="form-label"
                            >
                              product Name
                            </label>
                            <input
                              type="text"
                              className="form-control"
                              id="formGroupExampleInput"
                              placeholder="product Name"
                              name="product_name"
                              value={state.product_name}
                              onChange={handleChange}
                            />
                          </div>
                          <div className="mb-3">
                            <label
                              htmlFor="formGroupExampleInput2"
                              className="form-label"
                            >
                              Product MRP
                            </label>
                            <input
                              type="number"
                              className="form-control"
                              id="formGroupExampleInput2"
                              placeholder="Product MRP"
                              name="MRP"
                              value={state.MRP}
                              onChange={handleChange}
                            />
                          </div>
                          <div className="mb-3">
                            <label
                              htmlFor="formGroupExampleInput2"
                              className="form-label"
                            >
                              Product Price
                            </label>
                            <input
                              type="number"
                              className="form-control"
                              id="formGroupExampleInput2"
                              placeholder="Product Price"
                              name="price"
                              value={state.price}
                              onChange={handleChange}
                            />
                          </div>
                          <div className="mb-3">
                            <label
                              htmlFor="formGroupExampleInput2"
                              className="form-label"
                            >
                              Product Category
                            </label>
                            <input
                              type="text"
                              className="form-control"
                              id="formGroupExampleInput2"
                              placeholder="Product Category"
                              name="category"
                              value={state.category}
                              onChange={handleChange}
                            />
                          </div>
                          <div className="mb-3">
                            <label
                              htmlFor="formGroupExampleInput2"
                              className="form-label"
                            >
                              Product Description
                            </label>
                            <input
                              type="text"
                              className="form-control"
                              id="formGroupExampleInput2"
                              placeholder="Product Description"
                              name="description"
                              value={state.description}
                              onChange={handleChange}
                            />
                          </div>

                          <div className="mb-3">
                            <label
                              htmlFor="formGroupExampleInput2"
                              className="form-label"
                            >
                              Product SKU
                            </label>
                            <input
                              type="text"
                              className="form-control"
                              id="formGroupExampleInput2"
                              placeholder="Product SKU"
                              name="sku"
                              value={state.sku}
                              onChange={handleChange}
                            />
                          </div>
                          <div className="mb-3">
                            <label
                              htmlFor="formGroupExampleInput2"
                              className="form-label"
                            >
                              Product weight
                            </label>
                            <input
                              type="text"
                              className="form-control"
                              id="formGroupExampleInput2"
                              placeholder="Product weight"
                              name="weight"
                              value={state.weight}
                              onChange={handleChange}
                            />
                          </div>
                          <div className="mb-3">
                            <label
                              htmlFor="formGroupExampleInput2"
                              className="form-label"
                            >
                              Product Image
                            </label>
                            <input
                              type="file"
                              className="form-control"
                              id="formGroupExampleInput2"
                              placeholder="Product Image"
                              name="image"
                              onChange={imageUpload}
                            />
                          </div>
                        </div>
                        <div className="col-6 ">
                          <div className="mb-3">
                            <label
                              htmlFor="formGroupExampleInput"
                              className="form-label"
                            >
                              product Materials
                            </label>
                            <input
                              type="text"
                              className="form-control"
                              id="formGroupExampleInput"
                              placeholder="product Materials"
                              name="materials"
                              value={state.materials}
                              onChange={handleChange}
                            />
                          </div>
                          <div className="mb-3">
                            <label
                              htmlFor="formGroupExampleInput2"
                              className="form-label"
                            >
                              Other Info
                            </label>
                            <input
                              type="text"
                              className="form-control"
                              id="formGroupExampleInput2"
                              placeholder="Other Info"
                              name="other_info"
                              value={state.other_info}
                              onChange={handleChange}
                            />
                          </div>
                          <div className="mb-3">
                            <label
                              htmlFor="formGroupExampleInput2"
                              className="form-label"
                            >
                              About Item 1
                            </label>
                            <input
                              type="text"
                              className="form-control"
                              id="formGroupExampleInput2"
                              placeholder="About Item 1"
                              name="about_item_1"
                              value={state.about_item_1}
                              onChange={handleChange}
                            />
                          </div>
                          <div className="mb-3">
                            <label
                              htmlFor="formGroupExampleInput2"
                              className="form-label"
                            >
                              About Item 2
                            </label>
                            <input
                              type="text"
                              className="form-control"
                              id="formGroupExampleInput2"
                              placeholder="About Item 2"
                              name="about_item_2"
                              value={state.about_item_2}
                              onChange={handleChange}
                            />
                          </div>
                          <div className="mb-3">
                            <label
                              htmlFor="formGroupExampleInput2"
                              className="form-label"
                            >
                              About Item 3
                            </label>
                            <input
                              type="text"
                              className="form-control"
                              id="formGroupExampleInput2"
                              placeholder="About Item 3"
                              name="about_item_3"
                              value={state.about_item_3}
                              onChange={handleChange}
                            />
                          </div>
                          <div className="mb-3">
                            <label
                              htmlFor="formGroupExampleInput2"
                              className="form-label"
                            >
                              About Item 4
                            </label>
                            <input
                              type="text"
                              className="form-control"
                              id="formGroupExampleInput2"
                              placeholder="About Item 4"
                              name="about_item_4"
                              value={state.about_item_4}
                              onChange={handleChange}
                            />
                          </div>
                          <div className="mb-3">
                            <label
                              htmlFor="formGroupExampleInput2"
                              className="form-label"
                            >
                              About Item 5
                            </label>
                            <input
                              type="text"
                              className="form-control"
                              id="formGroupExampleInput2"
                              placeholder="About Item 5"
                              name="about_item_5"
                              value={state.about_item_5}
                              onChange={handleChange}
                            />
                          </div>
                          <div className="mb-3">
                            <label
                              className="form-check-label"
                              htmlFor="flexRadioDefault1"
                            >
                              Stock
                            </label>
                            <div className="form-check">
                              <input
                                className="form-check-input"
                                type="radio"
                                id="flexRadioDefault1"
                                name={state.stock}
                                value="IN STOCK"
                                onChange={(e) =>
                                  setState({
                                    ...state,
                                    stock: e.target.value,
                                  })
                                }
                              />
                              <label
                                className="form-check-label fw-bold in_stock border-0 bg-white"
                                htmlFor="flexRadioDefault1"
                              >
                                IN STOCK
                              </label>
                            </div>
                            <div className="form-check mb-3">
                              <input
                                className="form-check-input"
                                type="radio"
                                id="flexRadioDefault2"
                                name={state.stock}
                                value="OUT OF STOCK"
                                onChange={(e) =>
                                  setState({
                                    ...state,
                                    stock: e.target.value,
                                  })
                                }
                              />
                              <label
                                className="form-check-label fw-bold out_stock border-0 bg-white"
                                htmlFor="flexRadioDefault2"
                              >
                                OUT OF STOCK
                              </label>
                            </div>
                          </div>
                        </div>
                        <hr />
                        <div className="col-12 d-flex flex-row-reverse bd-highlight">
                          <Button
                            type="submit"
                            variant="outlined"
                            className="btn btn-lg btn-primary m-2"
                            // onClick={(e) => {
                            //   e.preventDefault();
                            //   handleSubmit();
                            // }}
                          >
                            UPDATE Product
                          </Button>
                        </div>
                      </div>
                    </form>
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

export default UpdateProduct;
