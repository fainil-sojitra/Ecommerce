import React, { useEffect, useState } from "react";
import "../styles/myCart.css";
import Header from "../Components/Header/Header";
import SideBar from "../Components/Settings/Sidebar/SideBar";
import Footer from "../Components/Footer/Footer";
import Tablet from "../Components/UI/Tablet";
import axios from "axios";

const MyCart = () => {
  const [width] = useWindowSize();
  const [data, setData] = useState([]);
  // const [count, setCount] = useState(0);

  const cartLength = data.length;

  const increment = (index) => {
    const currentItems = [...data];

    currentItems[index].quantity += 1;
    setData(currentItems);
  };

  const decrement = (index) => {
    const currentItems = [...data];

    if (currentItems[index].quantity > 1) {
      currentItems[index].quantity -= 1;
      setData(currentItems);
    }
  };

  function useWindowSize() {
    const [size, setSize] = useState([window.innerWidth]);

    useEffect(() => {
      getUserallData();
      const handleResize = () => setSize([window.innerWidth]);
      window.addEventListener("resize", handleResize);
      return () => {
        window.removeEventListener("resize", handleResize);
      };
    }, []);
    return size;
  }

  const getUserallData = async () => {
    try {
      const userData = JSON.parse(localStorage.getItem("client_img"));
      const response = await axios.get(
        `${process.env.REACT_APP_API}/get-user/${userData.register._id}`
      );
      setData(response.data[0].cart);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  return (
    <>
      <Header cart_length={cartLength} />
      {width <= 899 ? (
        <div className="tablet_main_container">
          <Tablet />
          <div className="container mt-5">
            <div className="row pb-3">
              <div className="col-12">
                <h1 className="fw-light">My Cart</h1>
              </div>
            </div>
          </div>
          <div className="container">
            {data.map((item, index) => (
              <div key={index} className="row mb-4">
                <div className="col-3 cart_mobile">
                  <div className="col-12">
                    <h4 className="cart_title fw-bold">Item</h4>
                  </div>
                  <div className="col-12">
                    <div className="cart_img_wrapper">
                      <img
                        src={`${process.env.REACT_APP_API}/${item.image}`}
                        className="img-fluid animated"
                        alt="Product_image"
                      />
                    </div>
                  </div>
                </div>
                <div className="col-3 cart_mobile">
                  <div className="col-12 mt-4 pt-1">
                    <h4 className="card_item_name fw-bold">
                      {item.product_name}
                    </h4>
                    <p className="card-title">
                      <small>
                        <b>Weight : </b>
                        {item.weight}
                      </small>
                    </p>
                    <p className="card-title">
                      <b>Stock : </b>
                      <small>{item.stock}</small>
                    </p>
                    <p className="card-title">
                      <b>SKU : </b>
                      <small>{item.sku}</small>
                    </p>
                  </div>
                </div>
                <div className="col-2 cart_mobile_col2">
                  <div className="col-12">
                    <h4 className="cart_title text-center fw-bold">Price</h4>
                  </div>
                  <div className="col-12 text-center pt-1">
                    <h4 className="fw-bold cart_price">₹ {item.price}</h4>
                  </div>
                </div>
                <div className="col-2 cart_mobile_col2">
                  <div className="col-12">
                    <h4 className="cart_title text-center fw-bold">Qty</h4>
                  </div>
                  <div className="col-12 text-center">
                    <div className="cart_ince_dec_wrapper d-flex">
                      <button
                        className="text-muted"
                        onClick={() => decrement(index)}
                      >
                        -
                      </button>
                      <input
                        type="text"
                        value={item.quantity}
                        className="text-muted"
                      />
                      <button
                        className="text-muted"
                        onClick={() => increment(index)}
                      >
                        +
                      </button>
                    </div>
                  </div>
                </div>
                <div className="col-2 cart_mobile_col2">
                  <div className="col-12">
                    <h4 className="cart_title text-center fw-bold">Total</h4>
                  </div>
                  <div className="col-12 text-center">
                    <h4 className="fw-bold cart_price">
                      ₹ {item.quantity * item.price}
                    </h4>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      ) : (
        <div className="main_container">
          <div className="row">
            <div className="col-2 list_item_div">
              <SideBar />
            </div>
            <div className="col-10">
              <div className="container">
                <div className="row pb-3">
                  <div className="col-12">
                    <h1 className="fw-light">My Cart</h1>
                  </div>
                </div>
              </div>
              <div className="container">
                {data.map((item, index) => (
                  <div key={index} className="row mb-4">
                    <div className="col-3">
                      <div className="col-12">
                        <h4 className="cart_title fw-bold">Item</h4>
                      </div>
                      <div className="col-12">
                        <div className="cart_img_wrapper">
                          <img
                            src={`${process.env.REACT_APP_API}/${item.image}`}
                            className="img-fluid animated"
                            alt="Product_image"
                          />
                        </div>
                      </div>
                    </div>
                    <div className="col-3">
                      <div className="col-12 mt-5 pt-1">
                        <h4 className="card-title fw-bold">
                          {item.product_name}
                        </h4>
                        <p className="card-title">
                          <small>
                            <b>Weight : </b>
                            {item.weight}
                          </small>
                        </p>
                        <p className="card-title">
                          <b>Stock : </b>
                          <small>{item.stock}</small>
                        </p>
                        <p className="card-title">
                          <b>SKU : </b>
                          <small>{item.sku}</small>
                        </p>
                      </div>
                    </div>
                    <div className="col-2">
                      <div className="col-12">
                        <h4 className="cart_title text-center fw-bold">
                          Price
                        </h4>
                      </div>
                      <div className="col-12 text-center pt-1">
                        <h4 className="fw-bold">₹ {item.price}</h4>
                      </div>
                    </div>
                    <div className="col-2">
                      <div className="col-12">
                        <h4 className="cart_title text-center fw-bold">Qty</h4>
                      </div>
                      <div className="col-12  text-center">
                        <div className="cart_ince_dec_wrapper d-flex border">
                          <button
                            className="text-muted"
                            onClick={() => decrement(index)}
                          >
                            -
                          </button>
                          <input
                            type="text"
                            value={item.quantity}
                            className="text-muted"
                          />
                          <button
                            className="text-muted"
                            onClick={() => increment(index)}
                          >
                            +
                          </button>
                        </div>
                      </div>
                    </div>
                    <div className="col-2">
                      <div className="col-12">
                        <h4 className="cart_title text-center fw-bold">
                          Total
                        </h4>
                      </div>
                      <div className="col-12 text-center">
                        <h4 className="fw-bold">
                          ₹ {item.quantity * item.price}
                        </h4>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
      <Footer />
    </>
  );
};

export default MyCart;
