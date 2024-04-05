import React, { useState } from "react";
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
import { NavLink } from "react-router-dom";

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

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
                  // value={data.email}
                  // onChange={handleChange}
                  // error={!!errors.email}
                  // helperText={errors.email}
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
                  // value={data.password}
                  // onChange={handleChange}
                  // error={!!errors.password}
                  // helperText={errors.password}
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
                  // onClick={handleLogin}
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
