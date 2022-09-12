import React from "react";
import "./App.scss";
import Login from "./screens/Login.jsx";
import { Outlet, Route, Routes } from "react-router-dom";
import Sidebar from "./screens/Sidebar.jsx";
import Dashboard from "./screens/Dashboard.jsx";
import Information from "./screens/information.jsx";

function Main() {
  return (
    <div className="app_container">
      <Sidebar />
      <div className="main__dashboard_wrapper">
        <Outlet />
      </div>
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
      <Route path="/" element={<Main />}>
        <Route path="/dashboard/information" element={<Information />} />
      </Route>
      <Route path="/" element={<Main />}>
        <Route path="/dashboard/contact" element={<contact />} />
      </Route>
    </Routes>
  );
}

export default App;
