import React from "react";
import logo from "../../../../assets/imgs/logo.svg";
export const Navbar = () => {
  return (
    <div>
      <img src={logo} alt="site-logo" />
      <nav className="navbar">
        <ul className="navbar-list">
          <li className="navbar-item">
            <a href className="navbar-link">
              Home
            </a>
          </li>
          <li className="navbar-item">
            <a href className="navbar-link">
              About us
            </a>
          </li>
          <li className="navbar-item">
            <a href className="navbar-link">
              Features
            </a>
          </li>
          <li className="navbar-item">
            <a href className="navbar-link">
              Pricing
            </a>
          </li>
          <li className="navbar-item">
            <a href className="navbar-link">
              FAQ
            </a>
          </li>
          <li className="navbar-item">
            <a href className="navbar-link">
              Blog
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
};
