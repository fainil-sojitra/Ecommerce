import React, { useEffect, useState } from "react";
import Footer from "../Components/Footer/Footer";
import Header from "../Components/Header/Header";
import SideBar from "../Components/Settings/Sidebar/SideBar";
import { NavLink, useNavigate } from "react-router-dom";
import Tablet from "../Components/UI/Tablet";
import swal from "sweetalert";
import axios from "axios";

const AddressBook = () => {
  const [width] = useWindowSize();
  const [data, setData] = useState([]);
  const [address, setAddress] = useState([]);

  const navigate = useNavigate();

  function useWindowSize() {
    const [size, setSize] = useState([window.innerWidth]);

    useEffect(() => {
      getUser();
      const handleResize = () => setSize([window.innerWidth]);
      window.addEventListener("resize", handleResize);
      return () => {
        window.removeEventListener("resize", handleResize);
      };
    }, []);
    return size;
  }

  const getUser = async () => {
    try {
      const userData = JSON.parse(localStorage.getItem("client_img"));
      const response = await axios.get(
        `${process.env.REACT_APP_API}/get-user/${userData.register._id}`
      );
      setData(response.data[0]);
      setAddress(response.data[0].addresses);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  const handleDelete = async (_id) => {
    console.log("test");
    const token = JSON.parse(localStorage.getItem("client_login_token"));
    const config1 = {
      headers: { Authorization: `Bearer ${token}` },
    };

    try {
      swal({
        title: "Your Shipping Address",
        text: "Delete, Address!",
        icon: "warning",
        buttons: true,
        dangerMode: true,
      }).then((willDelete) => {
        if (willDelete) {
          swal("Poof! Your Shipping Address has been Deleted  !", {
            icon: "success",
          });
          axios.delete(
            `${process.env.REACT_APP_API}/delete-shipping-address/${_id}`,

            config1
          );
          navigate("/add-address");
        } else {
          swal("Your Shipping Address is safe!");
        }
      });
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  return (
    <>
      <Header />
      {width <= 899 ? (
        <div className="tablet_main_container">
          <Tablet />
          <div className="container mt-5">
            <div className="row pb-3">
              <div className="col-12">
                <h1 className="fw-light">Address Book</h1>
              </div>
            </div>
          </div>
          <div className="container">
            <div className="row">
              <div className="col-12">
                <h4 className="fw-light text-muted">Shipping Addresses</h4>
                <p className="border-top"></p>
              </div>
            </div>
            {/* </div> */}
            <div className="container p-0">
              <div className="row">
                <div className="col-6">
                  <div>
                    {address ? (
                      <>
                        <p className=" m-0">
                          <mark>{`${data.first_name} ${data.last_name}`}</mark>{" "}
                          <br />
                          {address.address},
                          <br />
                          {address.locality} - {address.pincode}, <br />{" "}
                          {address.city}, {address.state}
                          <br />
                          {address.address_type}
                          <br />
                          Mo: <mark>{data.mobileNo}</mark>
                        </p>
                        <span className="fw-normal">
                          <NavLink
                            className="text-decoration-none small"
                            to={"/edit-address"}
                            variant="body2"
                          >
                            {"Edit Address"}
                          </NavLink>
                        </span>
                        &nbsp;&nbsp;&nbsp;
                        <span className="fw-normal">
                          <NavLink
                            className="text-decoration-none small"
                            to={"/setting"}
                            variant="body2"
                            onClick={(e) => {
                              e.preventDefault();
                              console.log("_id", address._id);
                              handleDelete(address._id);
                            }}
                          >
                            {"Delete Address"}
                          </NavLink>
                        </span>
                      </>
                    ) : (
                      <span className="fw-normal">
                        <NavLink
                          className="text-decoration-none small"
                          to={"/add-address"}
                          variant="body2"
                        >
                          {"Add Shipping Address"}
                        </NavLink>
                      </span>
                    )}
                  </div>
                </div>
              </div>
            </div>
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
                    <h1 className="fw-light">Address Book</h1>
                  </div>
                </div>
              </div>
              <div className="container">
                <div className="row">
                  <div className="col-12">
                    <h4 className="fw-light text-muted">Shipping Addresses</h4>
                    <p className="border-top"></p>
                  </div>
                </div>
                {/* </div> */}
                <div className="container p-0">
                  <div className="row">
                    <div className="col-6">
                      <div>
                        {address ? (
                          <>
                            <p className=" m-0">
                              <mark>{`${data.first_name} ${data.last_name}`}</mark>{" "}
                              <br />
                              {address.address},
                              <br />
                              {address.locality} - {address.pincode}, <br />{" "}
                              {address.city}, {address.state}
                              <br />
                              {address.address_type}
                              <br />
                              Mo: <mark>{data.mobileNo}</mark>
                            </p>
                            <span className="fw-normal">
                              <NavLink
                                className="text-decoration-none small"
                                to={"/edit-address"}
                                variant="body2"
                              >
                                {"Edit Address"}
                              </NavLink>
                            </span>
                            &nbsp;&nbsp;&nbsp;
                            <span className="fw-normal">
                              <NavLink
                                className="text-decoration-none small"
                                to={"/setting"}
                                variant="body2"
                                onClick={(e) => {
                                  e.preventDefault();
                                  console.log("_id", address._id);
                                  handleDelete(address._id);
                                }}
                              >
                                {"Delete Address"}
                              </NavLink>
                            </span>
                          </>
                        ) : (
                          <span className="fw-normal">
                            <NavLink
                              className="text-decoration-none small"
                              to={"/add-address"}
                              variant="body2"
                            >
                              {"Add Shipping Address"}
                            </NavLink>
                          </span>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
      <Footer />
    </>
  );
};

export default AddressBook;
