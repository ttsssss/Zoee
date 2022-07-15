import React from "react";
import "../styles/navigation.css";
import zoee from "../assets/images/logos.svg";
import notifications from "../assets/images/notifications.svg";
import { Link, NavLink } from "react-router-dom";
import Contacts from './Contacts';

const Nav = () => {
  let activeStyle = {
    textDecoration: "bold",
  };

  return (
    <div className="nav-bar">
      <div className="nav-inner">
        <img src={zoee} alt="" />
        <div className="nav-items">
          <NavLink
            to="/"
            style={({ isActive }) => (isActive ? activeStyle : undefined)}
          >
            Home
          </NavLink>
          <Link to="Contacts">Contacts</Link>
        </div>
        <div className="nav-right">
          <img src={notifications} alt="notifications" />
          <a href="#">
            <i class="icon"></i>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Nav;
