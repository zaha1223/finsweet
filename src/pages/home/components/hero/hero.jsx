import React from "react";
import "./hero.css";
import heroBg from "../../../../assets/imgs/hero-img.png";
export const Hero = () => {
  return (
    <section className="hero-section  container">
      <div className="hero-content">
        <h2 className="hero-title">
          Building stellar websites for early startups
        </h2>
        <p className="hero-text">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt.
        </p>
        <div className="hero-links">
          <a href="#w" className="hero-work-link">
            View our work
          </a>
          <a href="#w" className="hero-pricing-link">
            View Pricing
          </a>
        </div>
      </div>
      <img className="hero-img" src={heroBg} alt="" />
    </section>
  );
};
