import React from "react";
import "./navbar.css";
import Logo from "../../assets/logo.svg";
import Person from "../../assets/person.svg";
import { NavLink } from 'react-router-dom'

const Navbar = () => {
  return (
    <nav className="navbar">
      {/* LOGO */}
      <div className="logo">
        <NavLink to={'/'}>
          <img src={Logo} /></NavLink>
      </div>
      {/* NAVIGATION MENU */}
      <ul className="nav-links">
        {/* USING CHECKBOX HACK */}
        <input type="checkbox" id="checkbox_toggle" />
        <label htmlFor="checkbox_toggle" className="hamburger">
          ☰
        </label>
        {/* NAVIGATION MENUS */}
        <div class="menu">
          <li className="nav-item">
            <NavLink to="/create_item" className="nav-pill">
              ADD ITEM
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="/login">
              <img src={Person} className="nav-circle" />
            </NavLink>
          </li>
        </div>
      </ul>
    </nav>
  );
};

export default Navbar;
