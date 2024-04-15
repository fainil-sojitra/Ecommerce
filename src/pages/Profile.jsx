import React, { useEffect, useState } from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import List from "@mui/material/List";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import CloseIcon from "@mui/icons-material/Close";
import Slide from "@mui/material/Slide";
import "../styles/profile.css";
import { ListItemButton, ListItemText } from "@mui/material";
import axios from "axios";

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

const Profile = () => {
  const [open, setOpen] = React.useState(false);
  const [data, setData] = useState([]);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const getUser = async () => {
    try {
      const userData = JSON.parse(localStorage.getItem("client_img"));
      const response = await axios.get(
        `${process.env.REACT_APP_API}/get-user/${userData.register._id}`
      );
      setData(response.data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    getUser();
  }, []);

  return (
    <React.Fragment>
      <Button onClick={handleClickOpen}>Profile</Button>
      <Dialog
        fullScreen
        open={open}
        onClose={handleClose}
        TransitionComponent={Transition}
      >
        <AppBar sx={{ position: "relative" }}>
          <Toolbar>
            <IconButton
              edge="start"
              color="inherit"
              onClick={handleClose}
              aria-label="close"
            >
              <CloseIcon />
            </IconButton>
            <Typography sx={{ ml: 2, flex: 1 }} variant="h6" component="div">
              <b>My Profile</b>
            </Typography>
            <Button autoFocus color="inherit" onClick={handleClose}>
              Done
            </Button>
          </Toolbar>
        </AppBar>
        <List>
          {/* my profile information */}
          <div className="profile_background">
            <div className="profile_img"></div>
            <div className="profile_main_div">
              <div className="profile_heading">
                <h2>
                  <b>My Profile</b>
                </h2>
              </div>
              <ListItemButton>
                <ListItemText primary={`First Name : ${data.first_name}`} />
              </ListItemButton>
              <hr />
              <ListItemButton>
                <ListItemText primary={`Last Name : ${data.last_name} `} />
              </ListItemButton>
              <hr />
              <ListItemButton>
                <ListItemText primary={`Email : ${data.email}`} />
              </ListItemButton>
              <hr />
              <ListItemButton>
                <ListItemText primary={`Gender : ${data.gender} `} />
              </ListItemButton>
              <hr />
              <ListItemButton>
                <ListItemText primary="Image : " />
                <img
                  src={`${process.env.REACT_APP_API}/${data.image}`}
                  alt="img not found"
                  style={{
                    width: "70px",
                    height: "70px",
                    marginRight: "60%",
                  }}
                />
              </ListItemButton>
              <hr />
            </div>
          </div>
        </List>
      </Dialog>
    </React.Fragment>
  );
};

export default Profile;
