import React, { useState } from "react";
import "./registration.css";
import { Button, IconButton, InputAdornment, TextField } from "@mui/material";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import { NavLink } from "react-router-dom";

const Registration = () => {
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <>
      <div className="main_div">
        <div className="center_div">
          <div className="left_div">
            <div className="form_div">
              <p className="text-center h5 mb-1 mx-1 mx-md-4">Sign up</p>
              {/* onSubmit={handleSubmit} */}
              <form className="mx-1 mx-md-4">
                <TextField
                  fullWidth
                  label="Your First Name"
                  id="first_name"
                  className="mb-2"
                  name="first_name"
                  //   value={data.first_name}
                  //   onChange={handleChange}
                  //   error={!!errors.first_name}
                  //   helperText={errors.first_name}
                  variant="standard"
                  required
                />

                <TextField
                  fullWidth
                  label="Your Last Name"
                  id="last_name"
                  className="mb-2"
                  name="last_name"
                  //   value={data.last_name}
                  //   onChange={handleChange}
                  //   error={!!errors.last_name}
                  //   helperText={errors.last_name}
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
                  //   value={data.email}
                  //   onChange={handleChange}
                  //   error={!!errors.email}
                  //   helperText={errors.email}
                  variant="standard"
                  required
                />

                <TextField
                  fullWidth
                  label="Contact Number"
                  id="contact"
                  className="mb-2"
                  name="contact"
                  type="number"
                  //   value={data.contact}
                  //   onChange={handleChange}
                  //   error={!!errors.contact}
                  //   helperText={errors.contact}
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
                  //   value={data.password}
                  //   onChange={handleChange}
                  //   error={!!errors.password}
                  //   helperText={errors.password}
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
                  sx={{ mt: 3 }}
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
