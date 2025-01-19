import React from "react";
import styles from "./SevenCtech.module.scss";
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope, FaGlobe } from "react-icons/fa";
import { FaFacebook, FaTwitter, FaLinkedin } from "react-icons/fa";

const ContactInfo = () => {
  return (
    <div className={styles.contactInfo}>
      <div className={styles.logo}>
        <h1>7CTECH</h1>
        <p>
          Our prime focus is to offer flawless services over a longer period of
          time so that our customers can get maximum benefit.
        </p>
      </div>

      <div className={styles.details}>
        <div className={styles.office}>
          <div>
            <p> <span> <FaMapMarkerAlt className={styles.icon} /></span>US Office:</p>
            <p>7 MILL RD, FARMINGDALE, NY, 11735</p>
          </div>
        </div>
        <div className={styles.office}>
          <div>
            <p><span> <FaMapMarkerAlt className={styles.icon} /></span>Pakistan Office:</p>
            <p>252D, Shahrah-e-Faisal, Block 6 PECHS, Karachi, Pakistan</p>
          </div>
        </div>
      </div>

      <div className={styles.contactInfoSection}> {/* New div for email, phone, website */}
        <div className={styles.contact}>
          <FaPhoneAlt className={styles.icon} />
          <p><strong>Phone:</strong> <a href="tel:+923422686008">+92-342-2686008</a></p>
        </div>
        <div className={styles.contact}>
          <FaEnvelope className={styles.icon} />
          <p><strong>Email:</strong> <a href="mailto:info@7ctech.com">info@7ctech.com</a></p>
        </div>
        <div className={styles.contact}>
          <FaGlobe className={styles.icon} />
          <p><strong>Website:</strong> <a href="https://www.7ctech.com" target="_blank" rel="noopener noreferrer">www.7ctech.com</a></p>
        </div>
      </div>

      <div className={styles.social}>
        <div className={styles.socialItem}>
          <FaFacebook className={styles.socialIcon} />
          <span>Facebook</span>
        </div>
        <div className={styles.socialItem}>
          <FaTwitter className={styles.socialIcon} />
          <span>Twitter</span>
        </div>
        <div className={styles.socialItem}>
          <FaLinkedin className={styles.socialIcon} />
          <span>LinkedIn</span>
        </div>
      </div>
    </div>
  );
};

export default ContactInfo;
