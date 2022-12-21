/** @format */

import React from "react";
import "./feauters_ourt-cards.css";
import icon1 from "../../../../assets/imgs/card-icon1.svg";
import icon2 from "../../../../assets/imgs/card-icon2.svg";
import icon3 from "../../../../assets/imgs/card-icon3.svg";
export const FeautersOurtCards = () => {
  return (
    <div className="cards_container">
      <h1 className="info">The benefits of working with our team</h1>
      <div className="cards">
        <div className="card">
          <div className="icon">
            <img src={icon1} alt="img" />
          </div>
          <h4 className="card-title">Customize with ease</h4>
          <p className="card-subtitle">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua ut enim.
          </p>
        </div>
        <div className="card">
          <div className="icon">
            <img src={icon2} alt="img" />
          </div>
          <h4 className="card-title">Perfectly Responsive</h4>
          <p className="card-subtitle">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua ut enim.
          </p>
        </div>
        <div className="card">
          <div className="icon">
            <img src={icon3} alt="img" />
          </div>
          <h4 className="card-title">Friendly Support</h4>
          <p className="card-subtitle">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua ut enim.
          </p>
        </div>
      </div>
    </div>
  );
};
