import React, { useEffect, useState } from "react";
import "../../styles/productDetails.css";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import { Rating, Stack } from "@mui/material";
import axios from "axios";
import { useParams } from "react-router-dom";

const ProductDetails = () => {
  const [data, setData] = useState([]);

  const { slug } = useParams();

  // -------------- get data --------------

  // const getProductData = async () => {
  //   await axios
  //     .get(`${process.env.REACT_APP_API}/product_details/${slug}`)
  //     .then((res) => {
  //       setData(res.data);
  //       // console.log("-->>", res.data);
  //     });
  // };

  const getProductData = async () => {
    try {
      const response = await axios.get(
        `${process.env.REACT_APP_API}/product_details/${slug}`
      );
      setData(response.data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    window.scrollTo(0, 1);
    getProductData();
  }, []);

  return (
    <>
      <Header />
      <div className="product_details_main_div container">
        <div className="row">
          <div className="col-4 ">
            <div className="product_img_wrapper">
              <img
                src={`${process.env.REACT_APP_API}/${data.image}`}
                alt="{item.name}"
              />
            </div>
          </div>
          <div className="col-8">
            <div className="product_content_div pt-2 ">
              <div className="col-12">
                <h3 className="product_title">{data.product_name}</h3>
              </div>
              <div className="d-flex mb-3">
                <div className="col-2 position-relative">
                  <h2 className="product_offer_price ">₹{data.price}</h2>
                </div>
                <div className="col-3 position-relative">
                  <h4 className="product_price pt-1 text-decoration-line-through text-danger">
                    ₹{data.MRP}
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
                  {data.description}
                </p>
              </div>
              <hr />
              <br />
              <div className="d-flex mb-3">
                <div className="col-12 d-flex ">
                  <div className="ince_dec_wrapper">
                    <button className="text-muted">-</button>
                    <input type="text" value={1} className="text-muted" />
                    <button className="text-muted">+</button>
                  </div>
                  &nbsp;&nbsp;&nbsp;
                  <div className="add_btn_wrapper">
                    <button type="button" className="btn btn-outline-primary">
                      ADD TO CART
                    </button>
                  </div>
                </div>
              </div>
              <div className="category_product text-secondary">
                <p>SKU : {data.sku}</p>
                <p>{data.stock}</p>
              </div>
            </div>
          </div>
        </div>
        <div className="row mt-3">
          <div className="col-12 mt-2">
            <div className="prod_info_heading">
              <h3>Additional Information</h3>
            </div>
            <hr />
            <div className="pro_content">
              <p>
                <b>Weight : </b> {data.weight}
              </p>
              <p>
                <b>category : </b> {data.category}
              </p>
              <p>
                <b>Materials : </b> {data.materials}
              </p>
              <p>
                <b>Other Info : </b> {data.other_info}
              </p>
            </div>
          </div>
          <div className="col-12 mt-2">
            <div className="prod_info_heading">
              <h3>About this item</h3>
            </div>
            <hr />
            <div className="pro_content">
              <ul>
                <li>{data.about_item_1}</li>
                <li>{data.about_item_2}</li>
                <li>{data.about_item_3}</li>
                <li>{data.about_item_4}</li>
                <li>{data.about_item_5}</li>
              </ul>
            </div>
          </div>
          <div className="col-12 mt-2">
            <div className="prod_info_heading">
              <h3>Description</h3>
            </div>
            <hr />
            <div className="pro_content">
              <p className="product_discription">{data.description}</p>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default ProductDetails;
