import React, { useEffect, useState } from "react";
import "./products.css";
import Header from "../Header/Header";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import MailIcon from "@mui/icons-material/Mail";
import FilterAltIcon from "@mui/icons-material/FilterAlt";
import { Col, Container, Row } from "reactstrap";
import SearchIcon from "@mui/icons-material/Search";
import { Rating } from "@mui/material";
import Footer from "../Footer/Footer";
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";
import axios from "axios";

const Products = () => {
  const [open, setOpen] = React.useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [data, setData] = useState([]);
  const [selectedOption, setSelectedOption] = useState("Select");

  const toggleDrawer = (newOpen) => () => {
    setOpen(newOpen);
  };

  const handleSearch = (event) => {
    setSearchQuery(event.target.value);
  };

  let iconStyles = {
    fontSize: "48px",
  };

  const handleSelect = async (e) => {
    setSelectedOption(e.target.value);
    if (e.target.value === "lowToHigh") {
      await lowTohigh();
    } else if (e.target.value === "highToLow") {
      highToLow();
    } else {
      getProduct();
    }
  };

  const lowTohigh = async () => {
    try {
      const response = await axios.get(
        `${process.env.REACT_APP_API}/low_to_high`
      );
      setData(response.data);
      toggleDrawer(false);
    } catch (error) {
      console.error("Error sorting data:", error);
    }
  };

  const highToLow = async () => {
    try {
      const response = await axios.get(
        `${process.env.REACT_APP_API}/high_to_low`
      );
      setData(response.data);
    } catch (error) {
      console.error("Error sorting data:", error);
    }
  };

  const DrawerList = (
    <Box
      sx={{ width: 250 }}
      role="presentation"
      // onClick={toggleDrawer(false)}
    >
      <List style={{ marginTop: "15px" }}>
        {/* {["Inbox", "Starred", "Send email", "Drafts"].map((text, index) => (
          <ListItem key={text} disablePadding>
            <ListItemButton>
              <ListItemIcon>
                {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
              </ListItemIcon>
              <ListItemText primary={text} />
            </ListItemButton>
          </ListItem>
        ))} */}
        <ListItem disablePadding>
          <ListItemButton>
            <ListItemIcon>
              <SearchIcon />
            </ListItemIcon>
            <input
              type="text"
              placeholder="Search..."
              value={searchQuery}
              onChange={handleSearch}
              style={{
                width: "80%",
                padding: "8px",
                border: "none",
                borderBottom: "1px solid #ccc",
              }}
            />
          </ListItemButton>
        </ListItem>
        <br />
        <section>
          <Container>
            <Row>
              <Col lg="12">
                <div className="d-flex align-items-center gap-3 mb-5">
                  <span className="d-flex align-items-center gap-2">
                    <i className="ri-sort-asc"></i> Sort By
                  </span>
                  <select
                    className="select-filter"
                    value={selectedOption}
                    onChange={handleSelect}
                  >
                    <option value="Reset">Default</option>
                    <option value="lowToHigh">Price - Low to High</option>
                    <option value="highToLow">Price - High to Low</option>
                  </select>
                </div>
              </Col>
              {/* {data.map((item, index) => {
              if (item.cab_status === "Active") {
                return <CarItem item={item} key={index} />;
              }
              return null; 
            })} */}
            </Row>
          </Container>
        </section>
      </List>
      <Divider />
      <List>
        {["All mail", "Trash", "Spam"].map((text, index) => (
          <ListItem key={text} disablePadding>
            <ListItemButton>
              <ListItemIcon>
                {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
              </ListItemIcon>
              <ListItemText primary={text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  const getProduct = async () => {
    try {
      const response = await axios.get(
        `${process.env.REACT_APP_API}/all-product`
      );
      setData(response.data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    window.scrollTo(0, 1);
    getProduct();
  }, []);

  return (
    <>
      <Header />
      <div className="Prod_main_div">
        <div className="prod_open_drawer" onClick={toggleDrawer(true)}>
          <FilterAltIcon className="drawer_icon" style={iconStyles} />
        </div>
        <Drawer open={open} onClose={toggleDrawer(false)}>
          {DrawerList}
        </Drawer>
        <div className="text_div">
          <p>Showing 15 of 144 result...</p>
        </div>
        <div className="product-list">
          {data.map((item, index) => (
            <div key={index} className="product-card">
              <div className="img_div">
                <img
                  src={`${process.env.REACT_APP_API}/${item.image}`}
                  alt={item.name}
                />
              </div>
              <div className="product-details">
                <h3>{item.name}</h3>
                {/* <Stack spacing={1}> */}
                <Rating
                  name="size-small"
                  defaultValue={2}
                  size="small"
                  style={{ overflow: "hidden" }}
                />
                {/* </Stack> */}
                <p>₹ {item.price}</p>
                <button
                // onClick={() => handleButtonClick(product.id)}
                >
                  Add to Cart
                </button>
                &nbsp;
                <button
                // onClick={() => handleButtonClick(product.id)}
                >
                  Details
                </button>
              </div>
            </div>
          ))}
        </div>
        <Stack spacing={2} style={{ textAlign: "center" }}>
          <Pagination
            style={{ textAlign: "center", margin: "auto" }}
            count={10}
            variant="outlined"
            color="primary"
          />
        </Stack>
      </div>
      <Footer />
    </>
  );
};

export default Products;
