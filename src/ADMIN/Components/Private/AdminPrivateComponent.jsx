import React from "react";
import { Navigate, Outlet } from "react-router-dom";
// import PrivateComponent from "../../../Components/Private/PrivateComponent";

const AdminPrivateComponent = () => {
  // if (!(<PrivateComponent />)) {
  const auth = JSON.parse(localStorage.getItem("Admin_data")); // || localStorage.getItem("client_login_token");
  if (auth) {
    // const admin = auth.register.role;
    return auth ? <Outlet /> : <Navigate to="/admin-login" />;
  }
  // } else {
  //   <PrivateComponent />;
  // }
};

export default AdminPrivateComponent;
