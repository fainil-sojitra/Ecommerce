import React from "react";
import { Navigate, Outlet } from "react-router-dom";
// import AdminPrivateComponent from "../../ADMIN/Components/Private/AdminPrivateComponent";

const PrivateComponent = () => {
  // if (!(<AdminPrivateComponent />)) {
  const auth = JSON.parse(localStorage.getItem("client_img")); // || localStorage.getItem("client_login_token");
  if (auth) {
    const user = auth.register.role;
    return user === "user" ? <Outlet /> : <Navigate to="/login" />;
  }
  // } else {
  //   <AdminPrivateComponent />;
  // }
};

export default PrivateComponent;
