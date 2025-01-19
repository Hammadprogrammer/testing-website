'use client';

import React from 'react';
import styles from "./Blog.module.scss" // Import SCSS file
import backgroundImage from '@/images/7c/serviceImage.jpg'; // Import the image dynamically

const BlogHeader = () => {
  return (
    <div
      className={styles.navbar}
      style={{
        backgroundImage: `url(${backgroundImage.src})`, // Dynamically set the image as a background
      }}
    >
      <h1 className={styles.brand}>BLOGS</h1>
      <div className={styles.links}>
        <a href="/" className={styles.home}>Home /</a>
        <a href="/blog" className={styles.service}>Blogs</a>
      </div>
    </div>
  );
};

export default BlogHeader;
