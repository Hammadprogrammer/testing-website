import React from 'react';
// import Image from 'next/image'; // Import Next.js Image component
// import image from '../../../../images/background/spaeker-background.jpg'; // Static import of the image
import styles from "./WeAre7ctech.module.scss";
import Link from 'next/link'; 

const WeAre7ctech = () => {
  return (
    <div className={styles.container}>
      <div className={styles.imageWrapper}>
        {/* Use Next.js Image component for optimized image loading */}
       
        <div className={styles.textOverlay}>
          <h1 className={styles.heading}>WE ARE 7CTECH</h1>
          <p className={styles.description}>
            We strive to make sure that the service we deliver is not just a high-quality service, but also an innovative solution that assures return on investment for our clients and ourselves.
          </p>
          {/* Wrap the button with the Link component */}
          <Link href="/our-service">
            <button className={styles.servicesButton}>OUR SERVICES</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default WeAre7ctech;
