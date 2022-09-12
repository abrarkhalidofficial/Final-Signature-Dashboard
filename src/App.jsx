import React from "react";
import "./App.scss";
import Login from "./screens/Login.jsx";
import { Outlet, Route, Routes } from "react-router-dom";
import Sidebar from "./screens/Sidebar.jsx";
import Dashboard from "./screens/Dashboard.jsx";

function Main() {
  return (
    <div className="app_container">
      <Sidebar />
      <Outlet />
    </div>
  );
}

function App() {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/dashboard" element={<Main />}>
        <Route path="" element={<Dashboard />} />
      </Route>
    </Routes>
  );
}

export default App;
