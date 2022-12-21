import React from "react";
import logo from "../../../../assets/imgs/logo.svg";
import "./navbar.css";

export const Navbar = () => {
  return (
    <div className="container">
      <nav className="navbar">
        <img className="site-logo" src={logo} alt="site-logo" />
        <ul className="navbar-list">
          <li className="navbar-item">Home</li>
          <li className="navbar-item">About us</li>
          <li className="navbar-item">Features</li>
          <li className="navbar-item">Pricing</li>
          <li className="navbar-item">FAQ</li>
          <li className="navbar-item">Blog</li>
        </ul>
        <a className="navbar-link" href="#w">
          Contact us
        </a>
      </nav>
    </div>
  );
};
