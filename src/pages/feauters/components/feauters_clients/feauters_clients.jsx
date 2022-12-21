/** @format */

import React from "react";
import "./feauters_clients.css";

import client1 from "../../../../assets/imgs/feauters-client1.png";
import client2 from "../../../../assets/imgs/feauters-client2.png";
import client3 from "../../../../assets/imgs/feauters-client3.png";
import client4 from "../../../../assets/imgs/feauters-client4.png";

export const FeautersClients = () => {
  return (
    <div className="clients">
      <div className="client">
        <div className="client_content">
          <p className="client_subtitle">Use Client-first</p>
          <h3 className="client_title">
            Top agencies and freelancers around the world use Client-first
          </h3>
          <p className="client_desc">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation.
          </p>
        </div>
        <div className="client-img">
          <img src={client1} alt="img" />
        </div>
      </div>

      <div className="client client2">
        <div className="client-img">
          <img src={client2} alt="img" />
        </div>
        <div className="client_content">
          <p className="client_subtitle">Free Revision Rounds</p>
          <h3 className="client_title">
            Get free Revisions and one week of free maintenance
          </h3>
          <p className="client_desc">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation.
          </p>
        </div>
      </div>

      <div className="client">
        <div className="client_content">
          <p className="client_subtitle">24/7 Support</p>
          <h3 className="client_title">
            Working with us, you will be getting 24/7 priority support
          </h3>
          <p className="client_desc">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation.
          </p>
        </div>

        <div className="client-img">
          <img src={client3} alt="img" />
        </div>
      </div>
      <div className="client client4">
        <div className="client-img">
          <img src={client4} alt="img" />
        </div>
        <div className="client_content">
          <p className="client_subtitle">Quick Delivery</p>
          <h3 className="client_title">
            Guranteed 1 week delivery for standard five pager website
          </h3>
          <p className="client_desc">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation.
          </p>
        </div>
      </div>
    </div>
  );
};
