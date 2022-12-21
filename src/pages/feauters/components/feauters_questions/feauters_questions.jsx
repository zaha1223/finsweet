/** @format */

import React from "react";
import "./feauters_questions.css";
import plus from "../../../../assets/imgs/plus-icon.svg";
import cancel from "../../../../assets/imgs/cancel-icon.svg";

export const FeautersQuestions = () => {
  return (
    <div className="questions_container">
      <div className="questions_content">
        <h2 className="title">Frequently asked question</h2>
        <p className="subtitle">Contact us for more info</p>
      </div>

      <div className="questions">
        <div className="question-box">
          <p className="number">01</p>
          <div>
            <p className="question">How much time does it take ?</p>
            <p className="example">
              Apparently we had reached a great height in the atmosphere, for
              the sky was a dead black, and the stars had ceased to twinkle.
            </p>
          </div>
          <div className="icon">
            <img src={cancel} alt="img" />
          </div>
        </div>
        <span className="line"></span>
        <div className="question-box">
          <p className="number">02</p>
          <p className="question">What is your class naming convention ?</p>
          <div className="icon">
            <img src={plus} alt="img" />
          </div>
        </div>
        <span className="line"></span>
        <div className="question-box">
          <p className="number">03</p>
          <p className="question">How do we communicate ?</p>
          <div className="icon">
            <img src={plus} alt="img" />
          </div>
        </div>
        <span className="line"></span>
        <div className="question-box">
          <p className="number">04</p>
          <p className="question">
            I have a bigger project. Can you handel it ?
          </p>
          <div className="icon">
            <img src={plus} alt="img" />
          </div>
        </div>
        <span className="line"></span>
        <div className="question-box">
          <p className="number">05</p>
          <p className="question">What is your class naming convention ?</p>
          <div className="icon">
            <img src={plus} alt="img" />
          </div>
        </div>
      </div>
    </div>
  );
};
