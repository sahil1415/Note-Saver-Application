import React from 'react'
import { NavLink } from 'react-router-dom'
import './Navbar.css'

const NavBar = () => {
  return (
    <nav className="navbar">
      <h1 className="logo">PasteApp</h1>
      <div className="nav-links">
        <NavLink to="/" id="nav-item" className={({ isActive }) => (isActive ? "active-class" : "")}>
          Home
        </NavLink>

        <NavLink to="/pastes" id="nav-item" className={({ isActive }) => (isActive ? "active-class" : "")}>
          Paste
        </NavLink>
        <NavLink to="/about-us" id="nav-item" className={({ isActive }) => (isActive ? "active-class" : "")}>
          About
        </NavLink>
      </div>
    </nav>
  );
};

export default NavBar;
