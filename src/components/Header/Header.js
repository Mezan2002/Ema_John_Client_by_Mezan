import React from "react";
import { NavLink } from "react-router-dom";
import logo from "../../images/Logo.svg";
import "./Header.css";
const Header = () => {
  return (
    <nav className="header">
      <img src={logo} alt="" />
      <div className={(isActive) => (isActive ? "active" : undefined)}>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/shop">Shop</NavLink>
        <NavLink to="/inventory">Inventory</NavLink>
        <NavLink to="/about">About</NavLink>
      </div>
    </nav>
  );
};

export default Header;
