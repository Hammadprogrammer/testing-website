"use client";

import React from "react";
import styles from "./NeedHelp.module.scss";
import { FaArrowCircleDown } from "react-icons/fa"; // Import icon
import backgroundImage from "../../../../images/background/homepage-one-banner.jpg"; // Import image

const NeedHelp = () => {
  return (
    <div
      className={styles.helpSection}
      style={{
        backgroundImage: `linear-gradient(rgba(128, 128, 128, 0.7), rgba(0, 0, 0, 0.7)), url(${backgroundImage.src})`,
      }}
    >
      <div className={styles.content}>
        <FaArrowCircleDown className={styles.icon} />
        <h1 className={styles.title}>NEED HELP?</h1>
        <p className={styles.subtitle}>
          Let’s build something incredible together!
        </p>
        <p className={styles.description}>
          Share your business ideas or needs with us and give us a chance to
          scale and transform your business with the best possible solutions
          and incredible services.
        </p>
        <div className={styles.buttons}>
          <button className={styles.button}>SUBMIT QUERY</button>
          <button className={styles.button}>WRITE US TODAY</button>
        </div>
      </div>
    </div>
  );
};

export default NeedHelp;
