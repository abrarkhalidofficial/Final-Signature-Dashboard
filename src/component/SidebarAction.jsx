import React from "react";
import { useNavigate } from "react-router-dom";

function SidebarAction({ to, title, chart, defaultChecked }) {
  const navigate = useNavigate();
  return (
    <div className="nav__link">
      <input
        type="radio"
        id="about"
        defaultChecked={defaultChecked}
        className="nav__link__input"
        name="nav__link__input"
        chart="chart"
        onClick={() => navigate(to)}
      />
      <div className="nav__link__content"> {title} </div>
    </div>
  );
}

export default SidebarAction;
