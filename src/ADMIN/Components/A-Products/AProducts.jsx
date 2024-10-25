import React, { useEffect, useState } from "react";
import "./AProducts.css";
import { Box, Toolbar } from "@mui/material";
import ASidebar from "../A-Sidebar/ASidebar";
import Button from "@mui/material/Button";
import Modal from "@mui/material/Modal";
import SearchTwoToneIcon from "@mui/icons-material/SearchTwoTone";
import DeleteForeverRoundedIcon from "@mui/icons-material/DeleteForeverRounded";
import ModeEditOutlineRoundedIcon from "@mui/icons-material/ModeEditOutlineRounded";
import { blue, red } from "@mui/material/colors";
import { NavLink, useNavigate } from "react-router-dom";
import axios from "axios";
import swal from "sweetalert";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 1000,
  bgcolor: "background.paper",
  borderRadius: 5,
  boxShadow: 24,
  p: 2,
};

const AProducts = () => {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const [data, setData] = useState([]);
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

  const getProduct = async () => {
    try {
      const response = await axios.get(
        `${process.env.REACT_APP_API}/all-product`
      );
      setData(response.data);
    } catch (error) {
      console.error("Error 00 data:", error);
    }
  };

  const handleDelete = async (_id) => {
    const token = JSON.parse(localStorage.getItem("Admin_login_token"));
    const config = {
      headers: { Authorization: `Bearer ${token}` },
    };

    try {
      swal({
        title: "PRODUCT DETAILS",
        text: "Delete, Product!",
        icon: "warning",
        buttons: true,
        dangerMode: true,
      }).then((willDelete) => {
        if (willDelete) {
          swal("Poof! Product Detail has been Deleted !", {
            icon: "success",
          });
          axios.delete(
            `${process.env.REACT_APP_API}/delete-product/${_id}`,
            config
          );
          navigate("/admin-product");
          getProduct();
        } else {
          swal("product Details safe!");
        }
      });
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
      const response = await axios.post(
        `${process.env.REACT_APP_API}/add-product`,
        formData,
        config1
      );
      console.log("Add Product Data successful!", response.data);
      swal({
        title: "Product Add SUCCESSFUL!",
        icon: "success",
      });
      getProduct();
      handleClose();
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
    getProduct();
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
          <div className="admin_product_main_wrapper">
            <div>
              <p className="mb-0 fs-2 fw-bold">Product List</p>
            </div>
            <div className="box_shadow mt-4">
              <div className="Aproduct_wrappers">
                <div className="row">
                  <div className="col-4">
                    <div className="Asearch_wrapper input-group ">
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
                      <Button variant="outlined" onClick={handleOpen}>
                        + Add new Product
                      </Button>
                      <Modal
                        open={open}
                        aria-labelledby="modal-modal-title"
                        aria-describedby="modal-modal-description"
                      >
                        <Box sx={style}>
                          <div className="col-12">
                            <h2 className="fw-lighter text-center">
                              ADD PRODUCT
                            </h2>
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
                                  //   handleSubmit(data._id);
                                  // }}
                                >
                                  Add Product
                                </Button>
                                <Button
                                  type="submit"
                                  onClick={handleClose}
                                  className="btn btn-secondary btn-lg m-2"
                                >
                                  Close
                                </Button>
                              </div>
                            </div>
                          </form>
                        </Box>
                      </Modal>
                    </div>
                  </div>
                </div>
                <hr />
                <div className="row">
                  <div className="col-12">
                    <table className="table table-striped">
                      <thead>
                        <tr>
                          <th className="col-1 product_list_title fs-5 text-center ">
                            Image
                          </th>
                          <th className="col-2 product_list_title fs-5">
                            Name
                          </th>
                          <th className="col-2 product_list_title fs-5 text-center">
                            SKU
                          </th>
                          <th className="col-2 product_list_title fs-5 text-center">
                            Price
                          </th>
                          <th className="col-2 product_list_title fs-5 text-center">
                            Stock
                          </th>
                          <th className="col-1 product_list_title fs-5 text-center">
                            Action
                          </th>
                        </tr>
                      </thead>
                      <tbody>
                        {data.map((item, index) => (
                          <tr key={index}>
                            <td className="col-1">
                              <div className="Aproduct_img_wrapper">
                                <img
                                  src={`${process.env.REACT_APP_API}/${item.image}`}
                                  alt="notFound"
                                />
                              </div>
                            </td>
                            <td className="col-3">
                              <div className="Aproduct_name_wrapper">
                                <p
                                  className={`${
                                    item.user === "662f3512bcc536c1897d4305"
                                      ? "admin_color mb-0 fs-4 fw-bold"
                                      : "mb-0 fs-4 fw-bold"
                                  }`}
                                >
                                  {item.product_name}
                                </p>
                              </div>
                            </td>
                            <td className="col-2">
                              <div className="Aproduct_SKU_wrapper">
                                <p
                                  className={`${
                                    item.user === "662f3512bcc536c1897d4305"
                                      ? "admin_color mb-0 text-center"
                                      : "mb-0 text-center"
                                  }`}
                                >
                                  {item.sku}
                                </p>
                              </div>
                            </td>
                            <td className="col-2">
                              <div className="Aproduct_price_wrapper">
                                <p
                                  className={`${
                                    item.user === "662f3512bcc536c1897d4305"
                                      ? "admin_color fs-4 text-center mb-0"
                                      : "fs-4 text-center mb-0"
                                  }`}
                                >
                                  {`₹ ${item.price}`}
                                </p>
                              </div>
                            </td>
                            <td className="col-2">
                              <div className="Aproduct_stock_wrapper">
                                {/* <p className="mb-0 text-center in_stock">In Stock</p> */}
                                <p
                                  className={`${
                                    item.stock === "IN STOCK"
                                      ? "in_stock"
                                      : "out_stock"
                                  }`}
                                >
                                  {item.stock}
                                </p>
                              </div>
                            </td>
                            <td className="col-1">
                              <div className="Aproduct_btn_wrapper d-flex">
                                {/* <button
                                type="button"
                                className="btn btn-outline mt-2"
                              > */}
                                <DeleteForeverRoundedIcon
                                  sx={{ color: red[700] }}
                                  onClick={(e) => {
                                    e.preventDefault();
                                    console.log("_id", item._id);
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
                                  to={`/admin-update-product/${item._id}`}
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

export default AProducts;
