import * as React from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import ListItemText from "@mui/material/ListItemText";
import ListItemButton from "@mui/material/ListItemButton";
import List from "@mui/material/List";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import CloseIcon from "@mui/icons-material/Close";
import Slide from "@mui/material/Slide";
import { TextField } from "@mui/material";
import "../styles/account.css";

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

const Account = () => {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <React.Fragment>
      <Button onClick={handleClickOpen}>Account</Button>
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
              <b>My Account</b>
            </Typography>
            <Button autoFocus color="inherit" onClick={handleClose}>
              save
            </Button>
          </Toolbar>
        </AppBar>
        <List>
          {/* my account information */}
          <div className="Account_main_div">
            <div className="ac_heading">
              <h2>
                <b>My Account</b>
              </h2>
            </div>
            <ListItemButton>
              <ListItemText primary="First Name : demo " />
              <TextField type="text" label="First Name" />
              <Button>Save</Button>
              <Button>Cancel</Button>
            </ListItemButton>
            <hr />
            <ListItemButton>
              <ListItemText primary="Last Name : demo " />
              <TextField type="text" label="Last Name" />
              <Button>Save</Button>
              <Button>Cancel</Button>
            </ListItemButton>
            <hr />
            <ListItemButton>
              <ListItemText primary="Email : demo@gmail.com " />
              <TextField type="text" label="Email" />
              <Button>Save</Button>
              <Button>Cancel</Button>
            </ListItemButton>
            <hr />
            <ListItemButton>
              <ListItemText primary="Gender : demo " />
              <TextField type="text" label="Gender" />
              <Button>Save</Button>
              <Button>Cancel</Button>
            </ListItemButton>
            <hr />
            <ListItemButton>
              <ListItemText primary="Image : " />
              <img
                src="https://flone.jamstacktemplates.dev/assets/img/slider/single-slide-1.png"
                alt="img not found"
                style={{
                  width: "70px",
                  height: "70px",
                  marginRight: "333px",
                }}
              />
              <TextField type="file" />
              <Button>Save</Button>
              <Button>Cancel</Button>
            </ListItemButton>
            <hr />
          </div>
        </List>
      </Dialog>
    </React.Fragment>
  );
};

export default Account;
