import React from "react";
import "./ASidebar.css";
import { styled, useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import CssBaseline from "@mui/material/CssBaseline";
import MuiAppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import { Avatar } from "@mui/material";
import SearchTwoToneIcon from "@mui/icons-material/SearchTwoTone";
import NotificationsNoneRoundedIcon from "@mui/icons-material/NotificationsNoneRounded";
import MessageRoundedIcon from "@mui/icons-material/MessageRounded";
import { NavLink } from "react-router-dom";
import SpeedRoundedIcon from "@mui/icons-material/SpeedRounded";
import InventoryRoundedIcon from "@mui/icons-material/InventoryRounded";
import LayersRoundedIcon from "@mui/icons-material/LayersRounded";
import TaskRoundedIcon from "@mui/icons-material/TaskRounded";
import PersonRoundedIcon from "@mui/icons-material/PersonRounded";
import PeopleAltRoundedIcon from "@mui/icons-material/PeopleAltRounded";
import DeviceUnknownRoundedIcon from "@mui/icons-material/DeviceUnknownRounded";

const drawerWidth = 250;

const Main = styled("main", { shouldForwardProp: (prop) => prop !== "open" })(
  ({ theme, open }) => ({
    flexGrow: 1,
    padding: theme.spacing(3),
    transition: theme.transitions.create("margin", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    marginLeft: `-${drawerWidth}px`,
    ...(open && {
      transition: theme.transitions.create("margin", {
        easing: theme.transitions.easing.easeOut,
        duration: theme.transitions.duration.enteringScreen,
      }),
      marginLeft: 0,
    }),
  })
);

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  transition: theme.transitions.create(["margin", "width"], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: `${drawerWidth}px`,
    transition: theme.transitions.create(["margin", "width"], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  padding: theme.spacing(0, 1),
  ...theme.mixins.toolbar,
  justifyContent: "flex-end",
}));

const ASidebar = () => {
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBar position="fixed" open={open}>
        <Toolbar className="bg-light">
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            sx={{ mr: 2, ...(open && { display: "none" }) }}
            className="text-primary"
          >
            <MenuIcon />
          </IconButton>
          <Typography
            variant="h6"
            noWrap
            component="div"
            className="col-12 "
            style={{ width: "98%" }}
          >
            <div className="d-flex main_wrapper">
              <div className="Asearch_wrapper input-group ">
                <input
                  type="text"
                  className="form-control Asearch_input"
                  placeholder="Search here..."
                  aria-label="Username"
                  aria-describedby="basic-addon1"
                />
                <div className="input-group-prepend">
                  <span
                    className="input-group-text Asearch_icon"
                    id="basic-addon1"
                  >
                    <SearchTwoToneIcon />
                  </span>
                </div>
              </div>
              <div className="col-8 icon_wrapper ">
                <div className="text-primary mt-1">
                  <NotificationsNoneRoundedIcon fontSize="large" />
                </div>
                &nbsp;&nbsp;&nbsp;
                <div className="text-primary mt-1">
                  <MessageRoundedIcon fontSize="large" />
                </div>
                &nbsp;&nbsp;&nbsp;
                <div className="profile_img_wrapper">
                  <Avatar
                    alt="Remy Sharp"
                    src="http://localhost:5000/product-images/1713770182411_profile_user.jpg"
                  />
                  <div className="profile_content_wrapper">
                    <h6 className="p-0 m-0 fw-bold">Fainil Sojitra</h6>
                    <small className="p-0 m-0 fs-6 text-muted">Admin</small>
                  </div>
                </div>
              </div>
            </div>
          </Typography>
        </Toolbar>
      </AppBar>
      <Drawer
        sx={{
          width: 190,
          flexShrink: 0,
          "& .MuiDrawer-paper": {
            width: drawerWidth,
            boxSizing: "border-box",
          },
        }}
        variant="persistent"
        anchor="left"
        open={open}
      >
        <DrawerHeader>
          <Toolbar>
            <NavLink
              to={"/admin-dashboard"}
              variant="body2"
              className="text-decoration-none d-flex"
            >
              <img
                src="https://cdn-icons-png.flaticon.com/512/1041/1041883.png"
                alt="Logo"
                className="header_logo img-fluid mt-0"
                sx={{ display: { xs: "none", md: "flex" }, mr: 1 }}
              />
              <h3 className="fw-bold mt-1 fs-3 text-dark">E-Shop</h3>
            </NavLink>
          </Toolbar>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === "ltr" ? (
              <ChevronLeftIcon />
            ) : (
              <ChevronRightIcon />
            )}
          </IconButton>
        </DrawerHeader>
        <Divider />
        <Divider />
        <ul className="list-group list-group-flush ">
          <li className="list-group-item border-0">
            <NavLink
              to={"/admin-dashboard"}
              className={(navClass) =>
                navClass.isActive
                  ? "admin_nav__active admin_active_nav__item"
                  : "admin_nav__item"
              }
            >
              <SpeedRoundedIcon />
              &nbsp;&nbsp;&nbsp;
              <b>Dashboard</b>
            </NavLink>
          </li>
        </ul>
        <Divider />
        <ul className="list-group list-group-flush ">
          <li className="list-group-item border-0">
            <NavLink
              to={"/admin-product"}
              className={(navClass) =>
                navClass.isActive
                  ? "admin_nav__active admin_active_nav__item"
                  : "admin_nav__item"
              }
            >
              <InventoryRoundedIcon />
              &nbsp;&nbsp;&nbsp;
              <b>Products</b>
            </NavLink>
          </li>
        </ul>
        <ul className="list-group list-group-flush ">
          <li className="list-group-item border-0">
            <NavLink
              to={"/admin-categorys"}
              className={(navClass) =>
                navClass.isActive
                  ? "admin_nav__active admin_active_nav__item"
                  : "admin_nav__item"
              }
            >
              <LayersRoundedIcon />
              &nbsp;&nbsp;&nbsp;
              <b>Categorys</b>
            </NavLink>
          </li>
        </ul>
        <ul className="list-group list-group-flush ">
          <li className="list-group-item border-0">
            <NavLink
              to={"/admin-order"}
              className={(navClass) =>
                navClass.isActive
                  ? "admin_nav__active admin_active_nav__item"
                  : "admin_nav__item"
              }
            >
              <TaskRoundedIcon />
              &nbsp;&nbsp;&nbsp;
              <b>Orders</b>
            </NavLink>
          </li>
        </ul>
        <hr />
        <ul className="list-group list-group-flush ">
          <li className="list-group-item border-0">
            <NavLink
              to={"/admin-user"}
              className={(navClass) =>
                navClass.isActive
                  ? "admin_nav__active admin_active_nav__item"
                  : "admin_nav__item"
              }
            >
              <PersonRoundedIcon />
              &nbsp;&nbsp;&nbsp;
              <b>Users</b>
            </NavLink>
          </li>
        </ul>
        <ul className="list-group list-group-flush ">
          <li className="list-group-item border-0">
            <NavLink
              to={"/admin-sellers-management"}
              className={(navClass) =>
                navClass.isActive
                  ? "admin_nav__active admin_active_nav__item"
                  : "admin_nav__item"
              }
            >
              <PeopleAltRoundedIcon />
              &nbsp;&nbsp;&nbsp;
              <b>Sellers</b>
            </NavLink>
          </li>
        </ul>
        <ul className="list-group list-group-flush ">
          <li className="list-group-item border-0">
            <NavLink
              to={"/admin-chat"}
              className={(navClass) =>
                navClass.isActive
                  ? "admin_nav__active admin_active_nav__item"
                  : "admin_nav__item"
              }
            >
              <DeviceUnknownRoundedIcon />
              &nbsp;&nbsp;&nbsp;
              <b>Chats</b>
            </NavLink>
          </li>
        </ul>
      </Drawer>
      <Main
      open={open}
      >
        <DrawerHeader />
      </Main>
    </Box>
  );
};

export default ASidebar;
