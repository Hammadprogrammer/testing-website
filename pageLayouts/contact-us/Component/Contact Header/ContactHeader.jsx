'use client';

import React from 'react';
import styles from "./ContactHeader.module.scss" // Import SCSS file
import backgroundImage from '@/images/7c/serviceImage.jpg'; // Import the image dynamically

const ContactHeader = () => {
  return (
    <div
      className={styles.navbar}
      style={{
        backgroundImage: `url(${backgroundImage.src})`, // Dynamically set the image as a background
      }}
    >
      <h1 className={styles.brand}>Contact Us</h1>
      <div className={styles.links}>
        <a href="/" className={styles.home}>Home /</a>
        <a href="/contact-us" className={styles.service}>Contact Us</a>
      </div>
    </div>
  );
};

export default ContactHeader;
