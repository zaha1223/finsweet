import "./questions.css";

export const Questions = () => {
 

  return (
    <section className="questions">
      <div className="ques-title-wrap">
        <h2 className="ques-title">
          Frequently <br /> asked questions
        </h2>
        <a className="ques-title-link" href="#">
          Contact us For More Info
        </a>
      </div>
      <ul className="ques-list">
        <li className="ques-item" aria-expanded="">
          <div className="ques-inner-wrap">
            <p className="ques-number">01</p>
            <p className="ques-content">How much time does it take ?</p>
          </div>
          <p className="modal">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nesciunt,
            corrupti.
          </p>
          <p className="plus-btn">+</p>
        </li>
        <li className="ques-item">
          <div className="ques-inner-wrap">
            <p className="ques-number">02</p>
            <p className="ques-content">
              What is your class naming convention ?
            </p>
          </div>
          <p className="plus-btn">+</p>
        </li>
        <li className="ques-item">
          <div className="ques-inner-wrap">
            <p className="ques-number">03</p>
            <p className="ques-content">How do we communicate ?</p>
          </div>
          <p className="plus-btn">+</p>
        </li>
        <li className="ques-item">
          <div className="ques-inner-wrap">
            <p className="ques-number">04</p>
            <p className="ques-content">
              I have a bigger project. Can you handle it ?
            </p>
          </div>
          <p className="plus-btn">+</p>
        </li>
        <li className="ques-item">
          <div className="ques-inner-wrap">
            <p className="ques-number">05</p>
            <p className="ques-content">
              What is your class naming convention ?
            </p>
          </div>
          <p className="plus-btn">+</p>
        </li>
      </ul>
    </section>
  );
};
