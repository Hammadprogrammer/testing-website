import React from "react";
import Image from "next/image";
import styles from "./AboutYourProject.module.scss";
import backgroundImage from "../../../../images/7c/parallax2.jpg"; // Import the image

const AboutYourProject = () => {
  return (
    <div className={styles.container}>
      <div className={styles.imageWrapper}>
        <Image
          src={backgroundImage}
          alt="Background"
          layout="fill"
          objectFit="cover"
          priority
        />
        <div className={styles.gradientOverlay}></div> {/* Gradient overlay */}
      </div>
      <div className={styles.content}>
        <div className={styles.textContainer}>
          <p>Let's Talk</p>
          <h1>About Your <span> New Project</span></h1>
        </div>
        <button className={styles.button}>Get in touch</button>
      </div>
    </div>
  );
};

export default AboutYourProject;
