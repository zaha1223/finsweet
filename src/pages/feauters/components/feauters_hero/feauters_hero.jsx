/** @format */

import React from "react";
import "./feauters_hero.css";
import heroImg from "../../../../assets/imgs/hero-img.png";

export const FeautersHero = () => {
  return (
    <div className="hero">
      <div className="hero_container">
        <div className="hero_content">
          <h1 className="hero_title">All the features you need</h1>
          <p className="hero_subtitle">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
          <button className="hero_btn">View Pricing</button>
        </div>
        <div className="hero_img">
          <img src={heroImg} alt="img" />
        </div>
      </div>
    </div>
  );
};
