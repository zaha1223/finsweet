import React from "react";
import pointer1 from "../../../../assets/imgs/pointer1.svg";
import pointer2 from "../../../../assets/imgs/pointer2.svg";
import pointer3 from "../../../../assets/imgs/pointer3.svg";
import pointer4 from "../../../../assets/imgs/pointer4.svg";
import style from "./work.module.css";
export const Work = () => {
  return (
    <section className={style.work_section}>
      <div className="container">
        <div className={style.work_wrapper}>
          <div className={style.work_content}>
            <h2 className={style.work_title}>How we work</h2>
            <p className={style.work_text}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor.
            </p>
            <a className={style.work_link} href="#g">
              Get in touch with us
            </a>
          </div>
          <div>
            <ul className={style.work_list}>
              <li className={style.work_card}>
                <img className={style.work_img} src={pointer1} alt="" />
                <h3 className={style.work_subtitle}>Strategy</h3>
                <p className={style.work_text}>
                  Euismod faucibus turpis eu gravida mi. Pellentesque et velit
                  aliquam .
                </p>
              </li>
              <li className={style.work_card}>
                <img className={style.work_img} src={pointer2} alt="" />
                <h3 className={style.work_subtitle}>Wireframing</h3>
                <p className={style.work_text}>
                  Euismod faucibus turpis eu gravida mi. Pellentesque et velit
                  aliquam .
                </p>
              </li>
              <li className={style.work_card}>
                <img className={style.work_img} src={pointer3} alt="" />
                <h3 className={style.work_subtitle}>Design</h3>
                <p className={style.work_text}>
                  Euismod faucibus turpis eu gravida mi. Pellentesque et velit
                  aliquam .
                </p>
              </li>
              <li className={style.work_card}>
                <img className={style.work_img} src={pointer4} alt="" />
                <h3 className={style.work_subtitle}>Development</h3>
                <p className={style.work_text}>
                  Euismod faucibus turpis eu gravida mi. Pellentesque et velit
                  aliquam .
                </p>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};
