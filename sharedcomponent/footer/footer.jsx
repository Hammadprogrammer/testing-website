'use client';

import React from 'react';
import styles from './footer.module.scss'; // Corrected the import to the right CSS module
import { FaFacebookF, FaTwitter, FaInstagram, FaPinterest } from 'react-icons/fa';

function Footer() {
  return (
    <footer className={styles.footerSection}>
      <div className={styles.footerContent}>
        {/* Logo and Description */}
        <div className={styles.footerLogo}>
          <h2>7CTECH</h2>
          <p>
            Lorem Ipsum is simply is dumi omy is text Lorem Ipsum is simply is out
            no our o dummy text
          </p>
          <div className={styles.socialIcons}>
            <FaFacebookF />
            <FaTwitter />
            <FaInstagram />
            <FaPinterest />
          </div>
        </div>

        {/* Links Section */}
        <div className={styles.footerLinks}>
          <h3>Explore</h3>
          <ul>
            <li><a href="#about">About</a></li>
            <li><a href="#team">Meet our team</a></li>
            <li><a href="#stories">Case stories</a></li>
            <li><a href="#news">Latest news</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </div>

        {/* Contact Section */}
        <div className={styles.footerContact}>
          <h3>Contact</h3>
          <p>66 Road brooklyn street new york, United states of america</p>
          <p>92 666 888 0000</p>
          <p>needhelp@company.com</p>
        </div>

        {/* Newsletter Section */}
        <div className={styles.footerNewsletter}>
          <h3>Sign up for Newsletter</h3>
          <form>
            <input type="email" placeholder="Email Address" />
            <button type="submit">
              <span>&#10148;</span> {/* Arrow Icon */}
            </button>
            <div className={styles.checkbox}>
              <input type="checkbox" id="terms" />
              <label htmlFor="terms">I agree to all terms and policies</label>
            </div>
          </form>
        </div>
      </div>
      <div className={styles.footerBottom}>
        <p>© Copyright reserved by 7ctech.com</p>
      </div>
    </footer>
  );
}

export default Footer;
