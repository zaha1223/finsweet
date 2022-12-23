import "./cards.css";

export const Cards = () => {
  return (
    <section className="cards">
      <ul className="cards-list">
        <li className="cards-item">
          <div className="card-top-wrap">
            <p className="cards-price">$299</p>
            <p className="cards-price-text">Per Design</p>
          </div>
          <div className="cards-title-wrap">
          <h4 className="cards-title">Landing Page </h4>
          <p className="cards-text">
            When you’re ready to go beyond <br /> prototyping in Figma,{" "}
          </p>
          </div>
          <ul className="inner-list">
            <li className="inner-item">
              <p className="inner-text">All limited links</p>
            </li>
            <li className="inner-item">
              <p className="inner-text">Own analytics platform</p>
            </li>
            <li className="inner-item">
              <p className="inner-text">Chat support</p>
            </li>
            <li className="inner-item">
              <p className="inner-text">Optimize hashtags</p>
            </li>
            <li className="inner-item">
              <p className="inner-text">Unlimited users</p>
            </li>
          </ul>
          <a className="card-btn" href="#">
            Get started
          </a>
        </li>
        <li className="cards-item black-card">
          <div className="card-top-wrap">
            <p className="cards-price black-text">$399</p>
            <p className="cards-price-text gold-text">Multi Design</p>
          </div>
          <h4 className="cards-title black-text">Website Page </h4>
          <p className="cards-text black-text">
            When you’re ready to go beyond <br /> prototyping in Figma, Webflow’s <br /> ready
            to help.
          </p>
          <ul className="inner-list">
            <li className="inner-item">
              <p className="inner-text black-text">All limited links</p>
            </li>
            <li className="inner-item">
              <p className="inner-text black-text">Own analytics platform</p>
            </li>
            <li className="inner-item">
              <p className="inner-text black-text">Chat support</p>
            </li>
            <li className="inner-item">
              <p className="inner-text black-text">Optimize hashtags</p>
            </li>
            <li className="inner-item">
              <p className="inner-text black-text">Unlimited users</p>
            </li>
          </ul>
          <a className="card-btn gold-btn" href="#">
            Get started
          </a>
        </li>
        <li className="cards-item">
          <div className="card-top-wrap">
            <p className="cards-price">$499 +</p>
            <p className="cards-price-text">Per Design</p>
          </div>
          <h4 className="cards-title">Complex Project</h4>
          <p className="cards-text">
            When you’re ready to go beyond <br /> prototyping in Figma,{" "}
          </p>
          <ul className="inner-list">
            <li className="inner-item">
              <p className="inner-text">All limited links</p>
            </li>
            <li className="inner-item">
              <p className="inner-text">Own analytics platform</p>
            </li>
            <li className="inner-item">
              <p className="inner-text">Chat support</p>
            </li>
            <li className="inner-item">
              <p className="inner-text">Optimize hashtags</p>
            </li>
            <li className="inner-item">
              <p className="inner-text">Unlimited users</p>
            </li>
            <li className="inner-item">
              <p className="inner-text">Assist and Help</p>
            </li>
          </ul>
          <a className="card-btn" href="#">
            Contact us
          </a>
        </li>
      </ul>
    </section>
  );
};
