import React from 'react';
import './Header.css';
import { NavLink } from 'react-router-dom';
import Logo from '../utility/components/logo';

export default function Header() {
  return (
    <header>
      <div className="title-cont">
        <Logo />
      </div>
      <nav>
        <NavLink to="/" activeclassname="active" className="nav-link">
          Home
        </NavLink>
        <NavLink to="/services" activeclassname="active" className="nav-link">
          Services
        </NavLink>
        <NavLink to="/tasks" activeclassname="active" className="nav-link">
          Tasks
        </NavLink>
        <NavLink to="/about" activeclassname="active" className="nav-link">
          About
        </NavLink>
        <NavLink to="/contact" activeclassname="active" className="nav-link">
          Contact
        </NavLink>
        <NavLink
          to="/assignment-3"
          activeclassname="active"
          className="nav-link"
        >
          Assignment-3
        </NavLink>
      </nav>
      <div className="registration-cont">
        <a href="_blank" className="Signup">
          Sign up
        </a>
        <a href="_blank" className="login">
          Log in
        </a>
      </div>
      <div className="hamburger">
        <div className="stick"></div>
        <div className="stick"></div>
        <div className="stick"></div>
      </div>
    </header>
  );
}
