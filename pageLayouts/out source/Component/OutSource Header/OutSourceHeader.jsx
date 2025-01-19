'use client';

import React from 'react';
import styles from "./OutSourceHeader.module.scss" // Import SCSS file
import backgroundImage from '@/images/7c/serviceImage.jpg'; // Import the image dynamically

const OutSourceHeader = () => {
  return (
    <div
      className={styles.navbar}
      style={{
        backgroundImage: `url(${backgroundImage.src})`, // Dynamically set the image as a background
      }}
    >
      <h1 className={styles.brand}>OUTSOURCE</h1>
      <div className={styles.links}>
        <a href="/" className={styles.home}>Home /</a>
        <a href="/outSource" className={styles.service}>Outsource</a>
      </div>
    </div>
  );
};

export default OutSourceHeader;
