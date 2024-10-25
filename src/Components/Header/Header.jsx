import React, { useEffect, useRef, useState } from "react";
import "./header.css";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Avatar from "@mui/material/Avatar";
// import Button from "@mui/material/Button";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";
import { Link, NavLink, useNavigate } from "react-router-dom";
import swal from "sweetalert";
import { Badge } from "@mui/material";
import axios from "axios";

const pages = [
  {
    path: "/home",
    display: "Home",
  },
  {
    path: "/about",
    display: "About",
  },
  {
    path: "/product",
    display: "Products",
  },

  {
    path: "/blogs",
    display: "Blog",
  },
  {
    path: "/contact",
    display: "Contact",
  },
];

const navLinks = [
  {
    path: "/home",
    display: "Home",
  },
  {
    path: "/about",
    display: "About",
  },
  {
    path: "/product",
    display: "Products",
  },

  {
    path: "/blogs",
    display: "Blog",
  },
  {
    path: "/contact",
    display: "Contact",
  },
];
const ITEM_HEIGHT = 45;

const Header = () => {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);
  const [data, setData] = useState([])

  const navigate = useNavigate();

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  const handleClick = (e) => {
    console.log(e.target.value);

    if (e.target.value === 1) {
      navigate("/setting");
    } else if (e.target.value === 2) {
      logOut();
    } else {
      navigate("/home");
    }
  };

  let userEmail = JSON.parse(localStorage.getItem("client_img"));

  const logOut = () => {
    swal({
      title: userEmail.register.email,
      text: "Logout, this profile!",
      icon: "warning",
      buttons: true,
      dangerMode: true,
    }).then((willDelete) => {
      if (willDelete) {
        swal("Poof! Your imaginary account has been login out!", {
          icon: "success",
        });
        localStorage.clear();
        navigate("/login");
      } else {
        swal("Your imaginary account is safe!");
      }
    });
  };

  const countCartData = async () => {
    try {
      const userData = JSON.parse(localStorage.getItem("client_img"));
      const response = await axios.get(
        `${process.env.REACT_APP_API}/count_cart_product/${userData.register._id}`
      );
      setData(response.data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    countCartData()
  },[])


  const menuRef = useRef(null);

  const toggleMenu = () => menuRef.current.classList.toggle("menu__active");

  return (
    <>
      <AppBar
        position="static"
        className="bg-primary.bg-gradient position-fixed"
        style={{ zIndex: 1, backgroundColor: "#f0f0f0" }}
      >
        <Container maxWidth="xl">
          <Toolbar disableGutters>
            <NavLink to={"/home"} variant="body2">
              <img
                src="https://cdn-icons-png.flaticon.com/512/1041/1041883.png"
                alt="Logo"
                className="header_logo img-fluid mt-0"
                sx={{ display: { xs: "none", md: "flex" }, mr: 1 }}
              />
            </NavLink>
            <Typography
              variant="h6"
              noWrap
              component="a"
              sx={{
                mr: 2,
                display: { xs: "none", md: "flex" },
                fontFamily: "monospace",
                fontWeight: 700,
                letterSpacing: ".3rem",
                color: "inherit",
                textDecoration: "none",
              }}
            >
              <NavLink
                to={"/home"}
                variant="body2"
                className="text-dark text-decoration-none"
              >
                E-Shop
              </NavLink>
            </Typography>
            <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
              <IconButton
                size="large"
                aria-label="account of current user"
                aria-controls="menu-nav"
                aria-haspopup="true"
                onClick={handleOpenNavMenu}
                color="inherit"
                className="text-dark"
              >
                <MenuIcon />
              </IconButton>
              <Menu
                id="long-menu"
                anchorEl={anchorElNav}
                anchorOrigin={{
                  vertical: "bottom",
                  horizontal: "left",
                }}
                keepMounted
                transformOrigin={{
                  vertical: "left",
                  horizontal: "left",
                }}
                open={Boolean(anchorElNav)}
                onClose={handleCloseNavMenu}
                sx={{
                  display: { xs: "block" },
                }}
                PaperProps={{
                  style: {
                    maxHeight: ITEM_HEIGHT * 7.5,
                    width: "13ch",
                  },
                }}
              >
                {pages.map((item, index) => (
                  <NavLink
                    to={item.path}
                    className={(navClass) =>
                      navClass.isActive
                        ? "nav__active active_nav__item"
                        : "re_nav__item"
                    }
                    key={index}
                  >
                    <Typography textAlign="center" paddingBottom={"10px"}>
                      {item.display}
                    </Typography>
                  </NavLink>
                ))}
              </Menu>
            </Box>
            <Typography
              variant="h5"
              noWrap
              component="a"
              href="#app-bar-with-responsive-menu"
              sx={{
                mr: 2,
                display: { xs: "flex", md: "none" },
                flexGrow: 1,
                fontFamily: "monospace",
                fontWeight: 700,
                letterSpacing: ".3rem",
                color: "inherit",
                textDecoration: "none",
              }}
            >
              <NavLink
                to={"/home"}
                variant="body2"
                className="text-dark text-decoration-none"
              >
                E-Shop
              </NavLink>
            </Typography>
            <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
              <div className="navigation" ref={menuRef} onClick={toggleMenu}>
                <div className="menu">
                  {navLinks.map((item, index) => (
                    <NavLink
                      to={item.path}
                      className={(navClass) =>
                        navClass.isActive
                          ? "nav__active active_nav__item"
                          : "nav__item"
                      }
                      key={index}
                    >
                      {item.display}
                    </NavLink>
                  ))}
                </div>
              </div>
            </Box>
            <Box sx={{ flexGrow: 0 }}>
              <Tooltip title="Open settings">
                <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                  <Avatar
                    alt="Remy Sharp"
                    src="https://cdn-icons-png.flaticon.com/256/5397/5397570.png"
                  />
                </IconButton>
              </Tooltip>
              <Menu
                sx={{ mt: "45px" }}
                id="menu-user"
                anchorEl={anchorElUser}
                anchorOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
                keepMounted
                transformOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
                open={Boolean(anchorElUser)}
                onClose={handleCloseUserMenu}
              >
                <NavLink
                  to={"/setting"}
                  variant="body2"
                  className="text-dark text-decoration-none"
                >
                  <MenuItem
                    value={1}
                    onClick={handleClick}
                    style={{
                      marginLeft: "10px",
                      marginRight: "10px",
                      color: "#1976D2",
                      fontSize: "14px",
                    }}
                  >
                    SETTINGS
                  </MenuItem>
                </NavLink>
                <MenuItem
                  value={2}
                  onClick={handleClick}
                  style={{
                    marginLeft: "10px",
                    marginRight: "10px",
                    color: "#1976D2",
                    fontSize: "14px",
                  }}
                >
                  LOGOUT
                </MenuItem>
              </Menu>
              <Link to={`/my-cart`}>
                <Badge
                  className="header_cart-img"
                  color="primary"
                  badgeContent={data.cartData}
                >
                  <img
                    src="https://cdn-icons-png.flaticon.com/512/3081/3081986.png"
                    alt=".png"
                    className="header_cart-img"
                    style={{
                      height: "35px",
                      width: "35px",
                      marginLeft: "15px",
                    }}
                  />
                </Badge>
              </Link>
            </Box>
          </Toolbar>
        </Container>
      </AppBar>
    </>
  );
};

export default Header;
