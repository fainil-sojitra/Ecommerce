import React, { useEffect, useState } from "react";
import "./ALogin.css";
import {
  Avatar,
  Box,
  Grid,
  IconButton,
  TextField,
  Typography,
} from "@mui/material";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import { Button } from "reactstrap";
import { NavLink, useNavigate } from "react-router-dom";
import swal from "sweetalert";
import { Visibility, VisibilityOff } from "@mui/icons-material";

const ALogin = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [errors, setErrors] = useState({
    email: "",
    password: "",
  });
  const [data, setData] = useState({
    role: "Admin",
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
      let result = await fetch(`${process.env.REACT_APP_API}/login`, {
        method: "post",
        body: JSON.stringify({ ...data }),
        headers: {
          "Content-Type": "application/json",
        },
      });
      result = await result.json();
      console.log(result.register.role);
      if (result.register.role === "Admin") {
        if (result.token) {
          localStorage.setItem(
            "Admin_login_token",
            JSON.stringify(result.token)
          );
          localStorage.setItem("Admin_data", JSON.stringify(result));
          swal({
            title: "LOGIN SUCCESSFULLY!",
            icon: "success",
          });
          setTimeout(() => {
            navigate("/admin-dashboard");
          }, 950);
        } else {
          swal({
            title: "Invalid email or password!!",
            text: "LOGIN UNSUCCESSFUL!",
            icon: "error",
          });
        }
      }else{
        swal({
          title: "ONLY ADMIN LOGIN!!",
          text: "YOU ARE NOT A ADMIN!",
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
    const auth = localStorage.getItem("Admin_login_token");
    if (auth) {
      navigate("/admin-dashboard");
    }
  }, [navigate]);

  return (
    <>
      <div className="container a_login_main_div">
        <div className="row div_wrapper ">
          <div className="col-7 a_log_left_div">
            <div className="img_wrapper">
              <img
                src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.svg"
                className="img-fluid"
                alt="Phoneimage"
              />
            </div>
          </div>
          <div className="col-5 a_log_right_div">
            <div className="content_wrapper">
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
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ALogin;
