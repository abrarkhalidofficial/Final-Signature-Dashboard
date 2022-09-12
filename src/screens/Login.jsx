import React from "react";
import logo from "../assets/logincard.png";
import { Link } from "react-router-dom";

function Login() {
  return (
    <div className="Dashboard">
      <div className="dashboard__card">
        <div className="dashboard_card__logo">
          <img src={logo} alt="#" />
        </div>
        <div className="dashboard__heading">Login</div>
        <div className="dashboard__input">
          <input type="email" name="Email" id="" placeholder="Email" />
        </div>
        <div className="dashboard__input">
          <input type="text" name="Password" id="" placeholder="Password" />
        </div>
        <div className="check_box">
          <input
            className="styled-checkbox"
            id="styled-checkbox-1"
            type="checkbox"
            value="value1"
          />
          <label htmlFor="styled-checkbox-1">Checkbox</label>
        </div>
        <Link to="/dashboard" className="submit_btn" type="submit">
          Login
        </Link>
      </div>
    </div>
  );
}

export default Login;
