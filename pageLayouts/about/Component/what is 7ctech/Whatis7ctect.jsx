import React from "react";
import styles from "./WhatIs7ctech.module.scss";

const WhatIs7ctech = () => {
  return (
    <div className={styles.container}>
      <h2 className={styles.title}>
        WHAT IS <span className={styles.highlight}>7CTECH</span>
      </h2>
      <p className={styles.subtitle}>
        EXPERIENCED AND CREATIVE DESIGNERS AND WEB DEVELOPERS.
      </p>

      <div className={styles.content}>
        <div className={styles.missionBlock}>
          <h3 className={styles.missionTitle}>MISSION STATEMENT</h3>
          <p className={styles.missionText}>
            A close look at “Our Mission” reveals the importance of long-term success
            of the business of our clients. We have an indirect approach….
          </p>
        </div>
        <div className={styles.description}>
          <p>
            7CTECH comprises of experienced and creative designers and web developers.
            We focus on customer satisfaction to build a long-term work relationship with
            our clients. As a technology company, our prime focus is to offer flawless
            services over a longer period of time so that our customers can get maximum
            benefit. Our team of professionals realize the fact that customer satisfaction
            is the key to success. 7CTECH offers excellent services at quite reasonable
            rates. We have kept in mind the limited resources of small businesses and
            this is why our company offers such rates that are within the purchasing power
            of entrepreneurs. Our professionals believe in building credible relationships
            with clients.
          </p>
        </div>
      </div>
    </div>
  );
};

export default WhatIs7ctech;
