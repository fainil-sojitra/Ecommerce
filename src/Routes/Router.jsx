import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Login from "../Components/Login/Login";
import Registration from "../Components/Registration/Registration";
import NotFound from "../pages/NotFound";
import Home from "../Components/Home/Home";
import PrivateComponent from "../Components/Private/PrivateComponent";
import Products from "../Components/Products/Products";
import About from "../Components/About/About";
import Profile from "../pages/Profile";

const Router = () => {
  return (
    <div>
      <Routes>
        <Route element={<PrivateComponent />}>
          <Route path="/" element={<Navigate to="/login" />} />
          <Route path="/home" element={<Home />} />
          <Route path="/product" element={<Products />} />
          <Route path="/about" element={<About />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="*" element={<NotFound />} />
        </Route>
        <Route path="/login" element={<Login />} />
        <Route path="/registration" element={<Registration />} />
      </Routes>
    </div>
  );
};

export default Router;
