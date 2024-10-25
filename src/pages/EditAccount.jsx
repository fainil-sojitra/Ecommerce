import React, { useEffect, useState } from "react";
import SideBar from "../Components/Settings/Sidebar/SideBar";
import Footer from "../Components/Footer/Footer";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Header from "../Components/Header/Header";
import Tablet from "../Components/UI/Tablet";

const EditAccount = () => {
  const [width] = useWindowSize();
  const [password, setPassword] = useState({
    currentPassword: "",
    newPassword: "",
    confirmNewPassword: "",
  });
  const [data, setData] = useState({
    role: "user",
    first_name: "",
    last_name: "",
    mobileNo: "",
    gender: "",
    image: null,
  });

  const [errors, setErrors] = useState({});
  const navigate = useNavigate();

  function useWindowSize() {
    const [size, setSize] = useState([window.innerWidth]);

    useEffect(() => {
      window.scrollTo(0, 1);
      const handleResize = () => setSize([window.innerWidth]);
      window.addEventListener("resize", handleResize);
      return () => {
        window.removeEventListener("resize", handleResize);
      };
    }, []);
    return size;
  }

  const userData = JSON.parse(localStorage.getItem("client_img"));

  const handleSubmit = async (_id) => {
    if (validateForm()) {
      const formData = new FormData();
      formData.append("role", data.role);
      formData.append("first_name", data.first_name);
      formData.append("last_name", data.last_name);
      formData.append("image", data.image);
      formData.append("gender", data.gender);
      formData.append("mobileNo", data.mobileNo);

      const token = JSON.parse(localStorage.getItem("client_login_token"));
      const config1 = {
        headers: { Authorization: `Bearer ${token}` },
      };

      try {
        const response = await axios.put(
          `${process.env.REACT_APP_API}/update-user/${_id}`,
          formData,
          config1
        );
        console.log("updated data", response.data);
        setData(response.data);
        navigate("/setting");
      } catch (error) {
        console.error("Error updating data:", error);
      }
    }
  };

  const handleSubmitPassword = async (_id) => {
    if (validatePasswordForm()) {
      const formData = new FormData();
      formData.append("password", password.newPassword.trim());

      const token = JSON.parse(localStorage.getItem("client_login_token"));
      const config1 = {
        headers: { Authorization: `Bearer ${token}` },
      };

      try {
        const response = await axios.put(
          `${process.env.REACT_APP_API}/update-user/${_id}`,
          formData,
          config1
        );
        console.log("updated data", response.data);
        setPassword({
          currentPassword: "",
          newPassword: "",
          confirmNewPassword: "",
        });
        navigate("/setting");
        setErrors({});
      } catch (error) {
        console.error("Error updating password:", error);
      }
    }
  };

  const validateForm = () => {
    let isValid = true;
    const errors = {};

    if (!data.first_name.trim()) {
      errors.first_name = "First name is required";
      isValid = false;
    } else if (!/^[a-zA-Z]+$/.test(data.first_name.trim())) {
      errors.mobileNo = "should contain only alphabetic characters";
      isValid = false;
    }
    if (!data.last_name.trim()) {
      errors.last_name = "Last name is required";
      isValid = false;
    } else if (!/^[a-zA-Z]+$/.test(data.last_name.trim())) {
      errors.mobileNo = "should contain only alphabetic characters";
      isValid = false;
    }
    if (!data.mobileNo.trim()) {
      errors.mobileNo = "Mobile number is required";
      isValid = false;
    } else if (!/^\d{10}$/.test(data.mobileNo.trim())) {
      errors.mobileNo = "Mobile number must be 10 digits";
      isValid = false;
    }
    if (!data.gender.trim()) {
      errors.gender = "Gender is required";
      isValid = false;
    } else if (!["male", "female"].includes(data.gender.trim().toLowerCase())) {
      errors.gender = "Gender must be 'male' or 'female'";
      isValid = false;
    }
    if (!data.image) {
      errors.image = "Image is required";
      isValid = false;
    }
    setErrors(errors);
    return isValid;
  };

  const validatePasswordForm = () => {
    let isValid = true;
    const errors = {};

    if (!password.currentPassword.trim()) {
      errors.currentPassword = "Current password is required";
      isValid = false;
    } else if (password.currentPassword === userData.register.password) {
      errors.currentPassword = "Current password is incorrect";
      isValid = false;
    }

    if (!password.newPassword.trim()) {
      errors.newPassword = "New password is required";
      isValid = false;
    } else if (password.newPassword.trim().length < 8) {
      errors.newPassword = "Password must be at least 8 characters long";
      isValid = false;
    } else if (!/[A-Z]/.test(password.newPassword)) {
      return "Password should contain at least one uppercase letter";
    } else if (!/[a-z]/.test(password.newPassword)) {
      return "Password should contain at least one lowercase letter";
    } else if (!/\d/.test(password.newPassword)) {
      return "Password should contain at least one digit";
    } else if (!/[^a-zA-Z0-9]/.test(password.newPassword)) {
      return "Password should contain at least one special character";
    } else {
      return "";
    }

    if (!password.confirmNewPassword.trim()) {
      errors.confirmNewPassword = "Confirm new password is required";
      isValid = false;
    } else if (
      password.confirmNewPassword.trim() !== password.newPassword.trim()
    ) {
      errors.confirmNewPassword = "Passwords do not match";
      isValid = false;
    }

    setErrors(errors);
    return isValid;
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
                <h1 className="fw-light">Account Information</h1>
              </div>
            </div>
          </div>
          <div className="container">
            <div className="row">
              <div className="col-6 contact_div">
                <h4 className="fw-light text-muted">Edit Account</h4>
                <p className="border-top"></p>
                <form>
                  <div>
                    <label className="small text-muted fw-light">
                      First Name*
                    </label>
                    <input
                      type="text"
                      placeholder="Enter First Name"
                      className={`form-control mb-4 ${
                        errors.first_name ? "is-invalid" : ""
                      }`}
                      id="first_name"
                      name="first_name"
                      value={data.first_name}
                      onChange={(e) =>
                        setData({
                          ...data,
                          first_name: e.target.value.trim(),
                        })
                      }
                    />
                    {errors.first_name && (
                      <div className="invalid-feedback">
                        {errors.first_name}
                      </div>
                    )}
                    <label className="small text-muted fw-light">
                      Last Name*
                    </label>
                    <input
                      type="text"
                      placeholder="Enter Last Name"
                      className={`form-control mb-4 ${
                        errors.last_name ? "is-invalid" : ""
                      }`}
                      id="last_name"
                      name="last_name"
                      value={data.last_name}
                      onChange={(e) =>
                        setData({
                          ...data,
                          last_name: e.target.value.trim(),
                        })
                      }
                    />
                    {errors.last_name && (
                      <div className="invalid-feedback">{errors.last_name}</div>
                    )}
                    <label className="small text-muted fw-light">Mobile*</label>
                    <input
                      type="text"
                      placeholder="Enter Mobile Number"
                      className={`form-control mb-4 ${
                        errors.mobileNo ? "is-invalid" : ""
                      }`}
                      id="mobileNo"
                      name="mobileNo"
                      value={data.mobileNo}
                      onChange={(e) =>
                        setData({
                          ...data,
                          mobileNo: e.target.value.trim(),
                        })
                      }
                    />
                    {errors.mobileNo && (
                      <div className="invalid-feedback">{errors.mobileNo}</div>
                    )}
                    <label className="small text-muted fw-light">Gender*</label>
                    <input
                      type="text"
                      placeholder="Enter Gender"
                      className={`form-control mb-4 ${
                        errors.gender ? "is-invalid" : ""
                      }`}
                      id="gender"
                      name="gender"
                      value={data.gender}
                      onChange={(e) =>
                        setData({ ...data, gender: e.target.value.trim() })
                      }
                    />
                    {errors.gender && (
                      <div className="invalid-feedback">{errors.gender}</div>
                    )}
                    <label className="small text-muted fw-light">Image*</label>
                    <input
                      type="file"
                      accept="image/png, image/jpeg"
                      className={`form-control mb-4 ${
                        errors.image ? "is-invalid" : ""
                      }`}
                      id="image"
                      name="image"
                      onChange={(e) =>
                        setData({ ...data, image: e.target.files[0] })
                      }
                    />
                    {errors.image && (
                      <div className="invalid-feedback">{errors.image}</div>
                    )}
                    <div className="d-grid gap-2 mb-4">
                      <button
                        type="submit"
                        onClick={(e) => {
                          e.preventDefault();
                          console.log("_id", userData.register._id);
                          handleSubmit(userData.register._id);
                        }}
                        className="btn btn-outline-primary"
                      >
                        Save
                      </button>
                    </div>
                  </div>
                </form>
              </div>
              <div className="col-6 address_div">
                <h4 className="fw-light text-muted">Change Password</h4>
                <p className="border-top"></p>
                <form className="form-horizontal">
                  <div>
                    <label htmlFor="currentPassword" className="small fw-light">
                      Current Password
                    </label>
                    <input
                      type="password"
                      placeholder="Enter Current Password"
                      className={`form-control mb-4 ${
                        errors.currentPassword ? "is-invalid" : ""
                      }`}
                      id="currentPassword"
                      value={password.currentPassword}
                      onChange={(e) =>
                        setPassword({
                          ...password,
                          currentPassword: e.target.value.trim(),
                        })
                      }
                    />
                    {errors.currentPassword && (
                      <div className="invalid-feedback">
                        {errors.currentPassword}
                      </div>
                    )}
                    <label htmlFor="newPassword" className="small fw-light">
                      New Password
                    </label>
                    <input
                      type="password"
                      placeholder="Enter New Password"
                      className={`form-control mb-4 ${
                        errors.newPassword ? "is-invalid" : ""
                      }`}
                      id="newPassword"
                      value={password.newPassword}
                      onChange={(e) =>
                        setPassword({
                          ...password,
                          newPassword: e.target.value.trim(),
                        })
                      }
                    />
                    {errors.newPassword && (
                      <div className="invalid-feedback">
                        {errors.newPassword}
                      </div>
                    )}
                    <label
                      htmlFor="confirmNewPassword"
                      className="small fw-light"
                    >
                      Confirm New Password
                    </label>
                    <input
                      type="password"
                      placeholder="Enter Confirm New Password"
                      className={`form-control mb-4 ${
                        errors.confirmNewPassword ? "is-invalid" : ""
                      }`}
                      id="confirmNewPassword"
                      value={password.confirmNewPassword}
                      onChange={(e) =>
                        setPassword({
                          ...password,
                          confirmNewPassword: e.target.value.trim(),
                        })
                      }
                    />
                    {errors.confirmNewPassword && (
                      <div className="invalid-feedback">
                        {errors.confirmNewPassword}
                      </div>
                    )}
                    <div className="d-grid gap-2 mb-4">
                      <button
                        type="submit"
                        onClick={(e) => {
                          e.preventDefault();
                          console.log("_id", userData.register._id);
                          handleSubmitPassword(userData.register._id);
                        }}
                        className="btn btn-outline-primary"
                      >
                        Save
                      </button>
                    </div>
                  </div>
                </form>
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
                    <h1 className="fw-light">Account Information</h1>
                  </div>
                </div>
              </div>
              <div className="container">
                <div className="row">
                  <div className="col-6">
                    <h4 className="fw-light text-muted">Edit Account</h4>
                    <p className="border-top"></p>
                    <form>
                      <div>
                        <label className="small text-muted fw-light">
                          First Name*
                        </label>
                        <input
                          type="text"
                          placeholder="Enter First Name"
                          className={`form-control mb-4 ${
                            errors.first_name ? "is-invalid" : ""
                          }`}
                          id="first_name"
                          name="first_name"
                          value={data.first_name}
                          onChange={(e) =>
                            setData({
                              ...data,
                              first_name: e.target.value.trim(),
                            })
                          }
                        />
                        {errors.first_name && (
                          <div className="invalid-feedback">
                            {errors.first_name}
                          </div>
                        )}
                        <label className="small text-muted fw-light">
                          Last Name*
                        </label>
                        <input
                          type="text"
                          placeholder="Enter Last Name"
                          className={`form-control mb-4 ${
                            errors.last_name ? "is-invalid" : ""
                          }`}
                          id="last_name"
                          name="last_name"
                          value={data.last_name}
                          onChange={(e) =>
                            setData({
                              ...data,
                              last_name: e.target.value.trim(),
                            })
                          }
                        />
                        {errors.last_name && (
                          <div className="invalid-feedback">
                            {errors.last_name}
                          </div>
                        )}
                        <label className="small text-muted fw-light">
                          Mobile*
                        </label>
                        <input
                          type="text"
                          placeholder="Enter Mobile Number"
                          className={`form-control mb-4 ${
                            errors.mobileNo ? "is-invalid" : ""
                          }`}
                          id="mobileNo"
                          name="mobileNo"
                          value={data.mobileNo}
                          onChange={(e) =>
                            setData({
                              ...data,
                              mobileNo: e.target.value.trim(),
                            })
                          }
                        />
                        {errors.mobileNo && (
                          <div className="invalid-feedback">
                            {errors.mobileNo}
                          </div>
                        )}
                        <label className="small text-muted fw-light">
                          Gender*
                        </label>
                        <input
                          type="text"
                          placeholder="Enter Gender"
                          className={`form-control mb-4 ${
                            errors.gender ? "is-invalid" : ""
                          }`}
                          id="gender"
                          name="gender"
                          value={data.gender}
                          onChange={(e) =>
                            setData({ ...data, gender: e.target.value.trim() })
                          }
                        />
                        {errors.gender && (
                          <div className="invalid-feedback">
                            {errors.gender}
                          </div>
                        )}
                        <label className="small text-muted fw-light">
                          Image*
                        </label>
                        <input
                          type="file"
                          accept="image/png, image/jpeg"
                          className={`form-control mb-4 ${
                            errors.image ? "is-invalid" : ""
                          }`}
                          id="image"
                          name="image"
                          onChange={(e) =>
                            setData({ ...data, image: e.target.files[0] })
                          }
                        />
                        {errors.image && (
                          <div className="invalid-feedback">{errors.image}</div>
                        )}
                        <div className="d-grid gap-2 mb-4">
                          <button
                            type="submit"
                            onClick={(e) => {
                              e.preventDefault();
                              console.log("_id", userData.register._id);
                              handleSubmit(userData.register._id);
                            }}
                            className="btn btn-outline-primary"
                          >
                            Save
                          </button>
                        </div>
                      </div>
                    </form>
                  </div>
                  <div className="col-6">
                    <h4 className="fw-light text-muted">Change Password</h4>
                    <p className="border-top"></p>
                    <form className="form-horizontal">
                      <div>
                        <label
                          htmlFor="currentPassword"
                          className="small fw-light"
                        >
                          Current Password
                        </label>
                        <input
                          type="password"
                          placeholder="Enter Current Password"
                          className={`form-control mb-4 ${
                            errors.currentPassword ? "is-invalid" : ""
                          }`}
                          id="currentPassword"
                          value={password.currentPassword}
                          onChange={(e) =>
                            setPassword({
                              ...password,
                              currentPassword: e.target.value.trim(),
                            })
                          }
                        />
                        {errors.currentPassword && (
                          <div className="invalid-feedback">
                            {errors.currentPassword}
                          </div>
                        )}
                        <label htmlFor="newPassword" className="small fw-light">
                          New Password
                        </label>
                        <input
                          type="password"
                          placeholder="Enter New Password"
                          className={`form-control mb-4 ${
                            errors.newPassword ? "is-invalid" : ""
                          }`}
                          id="newPassword"
                          value={password.newPassword}
                          onChange={(e) =>
                            setPassword({
                              ...password,
                              newPassword: e.target.value.trim(),
                            })
                          }
                        />
                        {errors.newPassword && (
                          <div className="invalid-feedback">
                            {errors.newPassword}
                          </div>
                        )}
                        <label
                          htmlFor="confirmNewPassword"
                          className="small fw-light"
                        >
                          Confirm New Password
                        </label>
                        <input
                          type="password"
                          placeholder="Enter Confirm New Password"
                          className={`form-control mb-4 ${
                            errors.confirmNewPassword ? "is-invalid" : ""
                          }`}
                          id="confirmNewPassword"
                          value={password.confirmNewPassword}
                          onChange={(e) =>
                            setPassword({
                              ...password,
                              confirmNewPassword: e.target.value.trim(),
                            })
                          }
                        />
                        {errors.confirmNewPassword && (
                          <div className="invalid-feedback">
                            {errors.confirmNewPassword}
                          </div>
                        )}
                        <div className="d-grid gap-2 mb-4">
                          <button
                            type="submit"
                            onClick={(e) => {
                              e.preventDefault();
                              console.log("_id", userData.register._id);
                              handleSubmitPassword(userData.register._id);
                            }}
                            className="btn btn-outline-primary"
                          >
                            Save
                          </button>
                        </div>
                      </div>
                    </form>
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

export default EditAccount;
