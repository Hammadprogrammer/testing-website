'use client';

import React from 'react';
import styles from "./Component/OurService.module.scss" // Import SCSS file
import backgroundImage from '../../images/7c/serviceImage.jpg'; // Import the image dynamically

const Ourservice = () => {
  return (
    <div
      className={styles.navbar}
      style={{
        backgroundImage: `url(${backgroundImage.src})`, // Dynamically set the image as a background
      }}
    >
      <h1 className={styles.brand}>OUR SERVICES</h1>
      <div className={styles.links}>
        <a href="/" className={styles.home}>Home /</a>
        <a href="/our-service" className={styles.service}>Service</a>
      </div>
    </div>
  );
};

export default Ourservice;
