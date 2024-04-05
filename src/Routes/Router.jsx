import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Login from "../Components/Login/Login";

const Router = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Navigate to="/login" />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </div>
  );
};

export default Router;
