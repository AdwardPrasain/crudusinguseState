import React from "react";
import { NavLink } from "react-router-dom";

export const NavBar = () => {
  const mystyle = {
    border: "5px solid purple",
    padding: "2px",
    color: "indigo",
  };

  return (
    <div className=" container navbar">
      <ul className="nav-list">
        <li>
          <div style={mystyle}>React CRUD self</div>
        </li>
        <li>
          <NavLink exact activeStyle={{ color: "green" }} to="/">
            Home
          </NavLink>
        </li>
        <li>
          <NavLink exact activeStyle={{ color: "green" }} to="/about">
            About
          </NavLink>
        </li>
        <li>
          <NavLink exact activeStyle={{ color: "green" }} to="/contact">
            Contact
          </NavLink>
        </li>
        <li>
          <NavLink exact activeStyle={{ color: "green" }} to="/user/add">
            Add User
          </NavLink>
        </li>
      </ul>
    </div>
  );
};
