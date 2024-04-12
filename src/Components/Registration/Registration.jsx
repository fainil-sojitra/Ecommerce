import React, { useEffect, useState } from "react";
import "./registration.css";
import { Button, IconButton, InputAdornment, TextField } from "@mui/material";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import { NavLink, useNavigate } from "react-router-dom";
import axios from "axios";
import swal from "sweetalert";

const Registration = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [errors, setErrors] = useState({});
  const [data, setData] = useState({
    first_name: "",
    last_name: "",
    image: "",
    gender: "",
    email: "",
    password: "",
  });
  const navigate = useNavigate();

  const imageUpload = (event) => {
    setData({ ...data, image: event.target.files[0] });
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setData({ ...data, [name]: value });

    // Validate the field as the user types
    validateField(name, value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData();
    formData.append("first_name", data.first_name);
    formData.append("last_name", data.last_name);
    formData.append("image", data.image);
    formData.append("gender", data.gender);
    formData.append("email", data.email);
    formData.append("password", data.password);

    try {
      const response = await axios.post(
        `${process.env.REACT_APP_API}/register/`,
        formData
      );
      console.log("Registration successful!", response.data);
      swal({
        title: "REGISTRATION SUCCESSFUL!",
        icon: "success",
      });
      setData({
        first_name: "",
        last_name: "",
        image: "",
        gender: "",
        email: "",
        password: "",
      });
      navigate("/login");
    } catch (error) {
      console.error("Error registering:", error);
      swal({
        title: "REGISTRATION UNSUCCESSFUL!",
        text: "Please try again later.",
        icon: "error",
      });
    }
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const validateField = (fieldName, value) => {
    let error = "";

    switch (fieldName) {
      case "first_name":
      case "last_name":
        error =
          value.trim() && /^[a-zA-Z]+$/.test(value)
            ? ""
            : `${
                fieldName.charAt(0).toUpperCase() + fieldName.slice(1)
              } should contain only alphabetic characters`;
        break;
      case "email":
        error = value.trim()
          ? /^\S+@\S+\.\S+$/.test(value)
            ? ""
            : "Email address is invalid"
          : "Email is required";
        break;
      case "image":
        error = value.trim() ? "" : "Image is required";
        break;
      case "gender":
        error =
          value.trim() &&
          (value.toLowerCase() === "male" || value.toLowerCase() === "female")
            ? ""
            : "Gender should be either 'Male' or 'Female'";
        break;
      case "password":
        error = validatePassword(value);
        break;
      default:
        break;
    }

    setErrors({ ...errors, [fieldName]: error });
  };

  const validatePassword = (value) => {
    if (!value.trim()) {
      return "Password is required";
    } else if (value.length < 8) {
      return "Password should be at least 8 characters long";
    } else if (!/[A-Z]/.test(value)) {
      return "Password should contain at least one uppercase letter";
    } else if (!/[a-z]/.test(value)) {
      return "Password should contain at least one lowercase letter";
    } else if (!/\d/.test(value)) {
      return "Password should contain at least one digit";
    } else if (!/[^a-zA-Z0-9]/.test(value)) {
      return "Password should contain at least one special character";
    } else {
      return "";
    }
  };

  useEffect(() => {
    const auth = localStorage.getItem("client_login_token");
    if (auth) {
      navigate("/home");
    }
  }, [navigate]);

  return (
    <>
      <div className="main_div">
        <div className="center_div">
          <div className="left_div">
            <div className="form_div">
              <p className="text-center fw-bold h5 mb-1 mx-1 mx-md-4">
                Sign up
              </p>
              <form onSubmit={handleSubmit} className="mx-1 mx-md-4">
                <TextField
                  fullWidth
                  label="Your First Name"
                  id="first_name"
                  className="mb-2"
                  name="first_name"
                  value={data.first_name}
                  onChange={handleChange}
                  error={!!errors.first_name}
                  helperText={errors.first_name}
                  variant="standard"
                  required
                />

                <TextField
                  fullWidth
                  label="Your Last Name"
                  id="last_name"
                  className="mb-2"
                  name="last_name"
                  value={data.last_name}
                  onChange={handleChange}
                  error={!!errors.last_name}
                  helperText={errors.last_name}
                  variant="standard"
                  required
                />

                <TextField
                  fullWidth
                  label="Your Image"
                  id="image"
                  className="mb-2"
                  name="image"
                  accept="image/png, image/jpeg"
                  type="file"
                  onChange={imageUpload}
                  error={!!errors.image}
                  helperText={errors.image}
                  variant="standard"
                  required
                />

                <TextField
                  fullWidth
                  label="Your Gender"
                  id="gender"
                  className="mb-2"
                  name="gender"
                  value={data.gender}
                  onChange={handleChange}
                  error={!!errors.gender}
                  helperText={errors.gender}
                  variant="standard"
                  required
                />

                <TextField
                  fullWidth
                  label="Your Email"
                  id="email"
                  className="mb-2"
                  name="email"
                  type="email"
                  value={data.email}
                  onChange={handleChange}
                  error={!!errors.email}
                  helperText={errors.email}
                  variant="standard"
                  required
                />

                <TextField
                  fullWidth
                  label="Your Password"
                  id="password"
                  className="mb-2"
                  name="password"
                  type={showPassword ? "text" : "password"}
                  value={data.password}
                  onChange={handleChange}
                  error={!!errors.password}
                  helperText={errors.password}
                  variant="standard"
                  required
                  InputProps={{
                    endAdornment: (
                      <InputAdornment position="end">
                        <IconButton
                          onClick={togglePasswordVisibility}
                          edge="end"
                        >
                          {showPassword ? <VisibilityOff /> : <Visibility />}
                        </IconButton>
                      </InputAdornment>
                    ),
                  }}
                />

                <Button
                  variant="contained"
                  color="primary"
                  type="submit"
                  fullWidth
                  sx={{ mt: 2, mb: 1 }}
                >
                  Register
                </Button>

                <br />
                <span className="fw-bold">
                  <NavLink to={"/login"} variant="body2">
                    Already have an account? Log in
                  </NavLink>
                </span>
              </form>
            </div>
          </div>
          <div className="right_div">
            <div className="img_div">
              <img
                src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-registration/draw1.webp"
                className="img-fluid"
                alt="Sample_image"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Registration;
