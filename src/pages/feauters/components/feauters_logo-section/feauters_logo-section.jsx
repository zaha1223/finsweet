/** @format */

import React from "react";
import "./feauters_logo-section.css";
import logo1 from "../../../../assets/imgs/feauters-logo1.svg";
import logo2 from "../../../../assets/imgs/feauters-logo2.svg";
import logo3 from "../../../../assets/imgs/feauters-logo3.svg";
import logo4 from "../../../../assets/imgs/feauters-logo4.svg";
import logo5 from "../../../../assets/imgs/feauters-logo4.svg";

export const FeautersLogoSection = () => {
  return (
    <div className="logo-section">
      <div className="logo_number">
        <h3 className="logo_number_title">100.000+</h3>
        <p className="logo_number_subtitle">Figma Users</p>
      </div>
      <ul className="logo_list">
        <li className="logo_item">
          <img src={logo1} alt="img" />
        </li>
        <li className="logo_item">
          <img src={logo2} alt="img" />
        </li>
        <li className="logo_item">
          <img src={logo3} alt="img" />
        </li>
        <li className="logo_item">
          <img src={logo4} alt="img" />
        </li>
        <li className="logo_item">
          <img src={logo5} alt="img" />
        </li>
      </ul>
    </div>
  );
};
