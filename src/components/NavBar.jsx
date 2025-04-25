import React from "react";
import { NavLink } from "react-router-dom";
import "./NavBar.css";               // optional styling

function NavBar() {
  // v6 NavLink signature
  const linkClass = ({ isActive }) => (isActive ? "active" : "");

  return (
    <nav className="navbar" role="navigation">
      <NavLink to="/"        end          className={linkClass}>Home</NavLink>
      <NavLink to="/directors"            className={linkClass}>Directors</NavLink>
      <NavLink to="/actors"               className={linkClass}>Actors</NavLink>
    </nav>
  );
}

export default NavBar;
