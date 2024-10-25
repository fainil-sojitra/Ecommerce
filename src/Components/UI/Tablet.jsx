import React from "react";
import "../../styles/tablet.css";
import { NavLink } from "react-router-dom";

const Tablet = () => {
  return (
    <>
      <div className="btn-group position-fixed drop_down_div">
        <button
          type="button"
          className="btn dropdown-toggle "
          data-bs-toggle="dropdown"
          data-bs-display="static"
          aria-expanded="false"
          style={{ backgroundColor: "#f0f0f0" }}
        >
          Settings
        </button>
        <ul className="dropdown-menu dropdown-menu-lg-end w-100">
          <li className="list-group-item border-0">
            <NavLink
              to={"/setting"}
              className={(navClass) =>
                navClass.isActive
                  ? "side_bar_nav__active side_bar_active_nav__item"
                  : "side_bar_re_nav__item"
              }
            >
              My Account
            </NavLink>
          </li>
          <li className="list-group-item border-0">
            <NavLink
              to={"/my-order"}
              className={(navClass) =>
                navClass.isActive
                  ? "side_bar_nav__active side_bar_active_nav__item"
                  : "side_bar_re_nav__item"
              }
            >
              My Orders
            </NavLink>
          </li>
          <li className="list-group-item border-0">
            <NavLink
              to={"/my-cart"}
              className={(navClass) =>
                navClass.isActive
                  ? "side_bar_nav__active side_bar_active_nav__item"
                  : "side_bar_re_nav__item"
              }
            >
              My Cart
            </NavLink>
          </li>
          <li className="list-group-item border-0">
            <NavLink
              to={"/my-address"}
              className={(navClass) =>
                navClass.isActive
                  ? "side_bar_nav__active side_bar_active_nav__item"
                  : "side_bar_re_nav__item"
              }
            >
              Address Book
            </NavLink>
          </li>
          <li className="list-group-item border-0">
            <NavLink
              to={"/edit-account"}
              className={(navClass) =>
                navClass.isActive
                  ? "side_bar_nav__active side_bar_active_nav__item"
                  : "side_bar_re_nav__item"
              }
            >
              Account Info
            </NavLink>
          </li>
          <li className="list-group-item border-0">
            <NavLink
              to={"/my-address"}
              className={(navClass) =>
                navClass.isActive
                  ? "side_bar_nav__active side_bar_active_nav__item"
                  : "side_bar_re_nav__item"
              }
            >
              Payment
            </NavLink>
          </li>
        </ul>
      </div>
    </>
  );
};

export default Tablet;
