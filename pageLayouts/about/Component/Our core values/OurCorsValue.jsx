import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons'; // Import the check-circle icon
import style from "./OurCorsValues.module.scss";

const OurCoreValues = () => {
  return (
    <div className={style.coreValues}>
      <h1 className={style.title}>OUR CORE VALUES</h1>

      <div className={style.section}>
        <div className={style.content}>
          <h2>CLIENT SATISFACTION FIRST</h2>
          <p>
            What is the best long term investment? <span>7CTECH</span> believes
            that client satisfaction is the best form of long term investment.
          </p>
        </div>
        <div className={style.icon}>
          {/* Using FontAwesome check-circle icon */}
          <FontAwesomeIcon icon={faCheckCircle} />
        </div>
      </div>

      <div className={style.section}>
        <div className={style.content}>
          <h2>INNOVATION AND INTELLECT</h2>
          <p>
            Technology is advancing day by day, and it requires both innovation
            and intellect to compete in the global market.
          </p>
        </div>
        <div className={style.icon}>
          <FontAwesomeIcon icon={faCheckCircle} />
        </div>
      </div>

      <div className={style.section}>
        <div className={style.content}>
          <h2>CORE VALUES OF INTEGRITY</h2>
          <p>
            Our professionals realize the fact that business ethics and moral
            values determine the goodwill of any professional organization.
          </p>
        </div>
        <div className={style.icon}>
          <FontAwesomeIcon icon={faCheckCircle} />
        </div>
      </div>
    </div>
  );
};

export default OurCoreValues;
