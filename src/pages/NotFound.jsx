import React from "react";
import "../styles/notFound.css";
import { NavLink } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="Not_main_div">
      <div className="Not_img_div">
        <img
          src="https://i.imgur.com/qIufhof.png"
          alt="Not Found"
          className="img-fluid mt-0"
        />
      </div>
      <div className="info">
        <h2>ERROR 404</h2>
        <br />
        <h5>
          The 404 error not found means the browser has connected and sent the
          request to the web server. However, the latter can’t find the
          requested resource. As a result, the browser can’t load the web page,
          showing a 404 error.
        </h5>
        <span className="fw-bold">
          <NavLink to={"/home"} variant="body2">
            Go To Home Page
          </NavLink>
        </span>
      </div>
    </div>
  );
};

export default NotFound;
