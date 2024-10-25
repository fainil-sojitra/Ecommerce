import React, { useEffect, useState } from "react";
import "./sideBar.css";
import { NavLink } from "react-router-dom";
import Tablet from "../../UI/Tablet";

const SideBar = () => {
  const [width] = useWindowSize();

  function useWindowSize() {
    const [size, setSize] = useState([window.innerWidth]);

    useEffect(() => {
      const handleResize = () => setSize([window.innerWidth]);
      window.addEventListener("resize", handleResize);
      return () => {
        window.removeEventListener("resize", handleResize);
      };
    }, []);
    return size;
  }

  return (
    <>
      {width <= 768 ? (
        <Tablet />
      ) : (
        <div className="list-group list_item">
          <ul className="list-group list-group-flush ">
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
            <hr />
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
            <hr />
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
            {/* <hr /> */}
          </ul>
        </div>
      )}
    </>
  );
};

export default SideBar;
