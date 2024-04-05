import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Login from "../Components/Login/Login";
import Registration from "../Components/Registration/Registration";
import NotFound from "../pages/NotFound";
import Home from "../Components/Home/Home";

const Router = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Navigate to="/login" />} />
        <Route path="/login" element={<Login />} />
        <Route path="/registration" element={<Registration />} />
        <Route path="/home" element={<Home />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
};

export default Router;
