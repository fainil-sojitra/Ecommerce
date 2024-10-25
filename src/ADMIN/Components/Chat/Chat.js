import React from "react";
import "./chat.css";
import { Box, Toolbar } from "@mui/material";
import ASidebar from "../A-Sidebar/ASidebar";
import io from "socket.io-client";

const socket = io.connect("http://localhost:5000")

const Chat = () => {
  console.log('socket 💡',socket)
  return (
    <div>
      <Box sx={{ display: "flex" }}>
        <ASidebar />
        <Box
          component="main"
          sx={{ flexGrow: 1, bgcolor: "background.default", p: 3 }}
        >
          <Toolbar />
          <div className="admin_categorys_main_wrapper">
            <div>
              <h2 className="mb-0 fw-bold text-dark">chat</h2>
            </div>
          </div>
        </Box>
      </Box>
    </div>
  );
};

export default Chat;
