
import React from 'react';
import styles from './MobileApp.module.scss'; // Import SCSS module

const MobileAppDevelopment = () => {
  return (
    <div className={styles.container}>
      <p className={styles.textContent}>
        In today’s world, no business is complete without a proper Mobile Application for offering their services. <br /> <br />
        Mobile Applications not only create an environment for selling your services but also bring all your services and products right at the fingertips of your end customer.
      </p>
      
      <p className={styles.textContent}>
        7CTECH has mastered the art of creating mobile applications that offer the best of both worlds: cost-effectiveness and functionality.
      </p>

      <h3 className={styles.subheading}>Following are the frameworks/Platforms that we offer Mobile Development services on:</h3>
      <ul className={styles.list}>
        <li>
          <span className={styles.highlight}>Ionic – Cordova – Responsive and Hybrid Apps: <br /></span > With the convergence of technology to generalized standards, it's high-time that businesses understand and adapt the magic of hybrid applications.
        </li>
        <li>
          <span className={styles.highlight}>Hybrid Application Solutions:</span> Hybrid Application solutions from 7CTECH offer you great flexibility and cost-effectiveness for getting your idea off the ground. Our team is full of Quality and Speed Junkies, always striving for the best of the best.
        </li>
        <li>
          <span className={styles.highlight}>Native Mobile Application Development (iOS and Android):</span> Despite the rise of hybrid technologies, we understand the need for highly specialized and targeted solutions. Some services require graphics-intensive applications best built in native technologies for targeted platforms.
        </li>
      </ul>

      <p className={styles.textContent}>
        At 7CTECH, we believe that each client has unique needs and requirements. We study these needs carefully before suggesting a solution tailored to your business.
      </p>

      <p className={styles.textContent}>
        If you have any idea or need for a mobile-based solution, do not hesitate to get a free consultation and share your wish list with us. We would love to listen and suggest the best possible solutions for you.
      </p>
    </div>
  );
};

export default MobileAppDevelopment;
