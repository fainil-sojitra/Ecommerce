import React, { useEffect, useState } from "react";
import "./login.css";
import {
  Avatar,
  Box,
  Button,
  Grid,
  IconButton,
  TextField,
  Typography,
} from "@mui/material";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import { NavLink, useNavigate } from "react-router-dom";
// import axios from "axios";
import swal from "sweetalert";

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [errors, setErrors] = useState({
    email: "",
    password: "",
  });
  const [data, setData] = useState({
    email: "",
    password: "",
  });

  const navigate = useNavigate();

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setData({ ...data, [name]: value });
    setErrors({ ...errors, [name]: validateField(name, value) });
  };

  const validateField = (fieldName, value) => {
    let error = "";

    switch (fieldName) {
      case "email":
        error = !value.trim()
          ? "Email is required"
          : !/^\S+@\S+\.\S+$/.test(value)
          ? "Email address is invalid"
          : "";
        break;
      case "password":
        error = !value.trim() ? "Password is required" : "";
        break;
      default:
        break;
    }

    return error;
  };

  const handleLogin = async () => {
    try {
      // const { email, password } = data;
      // const response = await axios.post(`${process.env.REACT_APP_API}/login/`, {
      //   email,
      //   password,
      // });
      // console.log("response---=>", response.data.token);
      // if (response.data) {
      //   swal({
      //     title: "LOGIN SUCCESSFUL!",
      //     icon: "success",
      //   });
      //   setTimeout(() => {
      //     navigate("/home");
      //   }, 650);
      // } else {
      //   swal({
      //     title: "LOGIN FAILED!",
      //     icon: "error",
      //   });
      // }
      let result = await fetch(`${process.env.REACT_APP_API}/login`, {
        method: "post",
        body: JSON.stringify({ ...data }),
        headers: {
          "Content-Type": "application/json",
        },
      });
      result = await result.json();
      if (result.token) {
        localStorage.setItem(
          "client_login_token",
          JSON.stringify(result.token)
        );
        localStorage.setItem("client_img", JSON.stringify(result));
        swal({
          title: "LOGIN SUCCESSFULLY!",
          icon: "success",
        });
        setTimeout(() => {
          navigate("/home");
        }, 950);
      } else {
        swal({
          title: "Invalid email or password!!",
          text: "LOGIN UNSUCCESSFUL!",
          icon: "error",
        });
      }
    } catch (error) {
      return (
        error,
        swal({
          title: "LOGIN UNSUCCESSFUL!",
          text: "Invalid email or password!!",
          icon: "error",
        })
      );
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
      <div className="Log_main_div">
        <div className="Log_center_div">
          <div className="Log_left_div">
            <div className="col-md-8 col-lg-7 col-xl-12">
              <img
                src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.svg"
                className="img-fluid"
                alt="Phoneimage"
              />
            </div>
            {/* 
            <div className="form_div"></div> */}
          </div>
          <div className="Log_right_div">
            <div className="Log_form_div">
              <form>
                <Grid item xs={12} sm={8} md={5} elevation={6}>
                  <Box
                    sx={{
                      my: 2,
                      mx: 1,
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "center",
                    }}
                  >
                    <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
                      <LockOutlinedIcon />
                    </Avatar>
                    <Typography component="h1" variant="h5">
                      Log in
                    </Typography>
                  </Box>
                </Grid>
                <TextField
                  fullWidth
                  label="Email address"
                  id="email"
                  className="mb-2"
                  type="email"
                  name="email"
                  value={data.email}
                  onChange={handleChange}
                  error={!!errors.email}
                  helperText={errors.email}
                  variant="standard"
                  required
                />
                <TextField
                  fullWidth
                  label="Password"
                  id="password"
                  className="mb-2"
                  type={showPassword ? "text" : "password"}
                  name="password"
                  value={data.password}
                  onChange={handleChange}
                  error={!!errors.password}
                  helperText={errors.password}
                  variant="standard"
                  required
                  InputProps={{
                    endAdornment: (
                      <IconButton
                        aria-label="toggle password visibility"
                        onClick={togglePasswordVisibility}
                        edge="end"
                      >
                        {showPassword ? <VisibilityOff /> : <Visibility />}
                      </IconButton>
                    ),
                  }}
                />
                <Button
                  variant="contained"
                  color="primary"
                  type="button"
                  onClick={handleLogin}
                  fullWidth
                  sx={{ mt: 3 }}
                >
                  Sign in
                </Button>

                <div className="divider d-flex align-items-center my-4">
                  <span className="fw-bold">
                    <NavLink to={"/registration"} variant="body2">
                      {"Don't have an account? Register an account"}
                    </NavLink>
                  </span>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
