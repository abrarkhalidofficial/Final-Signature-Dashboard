import React from "react";
import SidebarAction from "../component/SidebarAction.jsx";
import { useNavigate } from "react-router-dom";

function Sidebar() {
  const navigate = useNavigate();

  return (
    <div className="side_bar__wrapper">
      <SidebarAction defaultChecked={true} title="Dashboard" to="/dashboard/" />
      <SidebarAction title="Building Information" to="/" />
      <SidebarAction title="Contact Form" onClick="/" />
      <SidebarAction title="Call Request" onClick="/" />
      <SidebarAction title="Upcomming Projects" onClick="/" />
      <SidebarAction title="Projects Update" onClick="/" />
      <SidebarAction title="Gallery" onClick="/" />
      <div className="svg__and__title">
        <SidebarAction title="LOG OUT" onClick="/" />
      </div>
    </div>
  );
}

export default Sidebar;
