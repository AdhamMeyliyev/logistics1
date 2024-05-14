import React, { useEffect } from "react";
import { Route, Router, Routes, useNavigate } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login/index";
import { Admin, Cashier, Manager, User } from "./pages/role/index";

const App = () => {
  const navigate = useNavigate();
  const token = sessionStorage.getItem("token");
  const role = sessionStorage.getItem("role");

  useEffect(() => {
    if (!token) {
      navigate("/");
    } else if (token && role === "ROLE_ADMIN") {
      navigate("/dashboard");
    } else if (token && role === "ROLE_MANAGER") {
      navigate("/manager-dashboard");
    } else if (token && role === "ROLE_USER") {
      navigate("/user-dashboard");
    } else if (token && role === "ROLE_CASHIER") {
      navigate("/cashier-dashboard");
    }
  }, [token]);

  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/dashboard" element={<Admin />}>
        <Route path="users" element={<h1>Hello</h1>} />
      </Route>
      <Route path="/manager-dashboard" element={<Manager />} />
      <Route path="/user-dashboard" element={<User />} />
      <Route path="/cashier-dashboard" element={<Cashier />} />
    </Routes>
  );
};

export default App;
