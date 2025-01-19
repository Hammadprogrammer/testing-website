'use client';
import { useState } from 'react';
import { FaEnvelope, FaPhoneAlt, FaMapMarkerAlt, FaFacebookF, FaTwitter, FaLinkedinIn } from 'react-icons/fa';
import Logo from "../../images/7c/logo.png";
import Image from 'next/image';
import styles from './header.module.scss';
import Link from 'next/link';

export default function Navbar() {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const toggleDrawer = () => {
    setIsDrawerOpen(!isDrawerOpen);
  };

  return (
    <header className={styles.header}>
      {/* Top Bar */}
      <div className={styles.topBar}>
        <div className={styles.topBarContent}>
          {/* Left: Email and Phone */}
          <div className={styles.contact}>
            <div className={styles.contactItem}>
              <FaEnvelope />
              <span>7ctect@.com</span>
            </div>
            <div className={styles.contactItem}>
              <FaPhoneAlt />
              <span>+123 456 7890</span>
            </div>
          </div>
          {/* Right: Location */}
          <div className={styles.location}>
            <FaMapMarkerAlt />
            <span>Karachi, Pakistan</span>
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <div className={styles.navBar}>
        <div className={styles.navBarContent}>
          {/* Left: Logo */}
          <div className={styles.logoAndHamburger}>
            <div className={styles.logo}>
              <Link href="/">
                <Image
                  src={Logo}
                  alt="Logo"
                  width={80} // Adjusted for larger size
                  height={40} // Adjusted for larger size
                  className="w-auto max-w-[120px] sm:max-w-[150px] md:max-w-[200px]"
                  priority
                />
              </Link>
            </div>
            
            {/* Hamburger Icon (Now below logo on small screens) */}
            <div className={styles.hamburger} onClick={toggleDrawer}>
              <div></div>
              <div></div>
              <div></div>
            </div>
          </div>

          {/* Center: Navigation Links */}
          <nav className={styles.navLinks}>
            <Link href="/" className={styles.navLink}>
              Home
            </Link>
            <Link href="/about" className={styles.navLink}>
              About Us
            </Link>
            <Link href="/our-service" className={styles.navLink}>
              Services
            </Link>
            <Link href="/outSource" className={styles.navLink}>
              Outsource
            </Link>
            <Link href="/blog" className={styles.navLink}>
              Blogs
            </Link>
            <Link href="/contact-us" className={styles.navLink}>
              Contact Us
            </Link>
          </nav>

          {/* Right: Social Media Icons (Hidden on small screens) */}
          <div className={styles.socialIcons}>
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
              <FaFacebookF />
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
              <FaTwitter />
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
              <FaLinkedinIn />
            </a>
          </div>
        </div>
      </div>

      {/* Drawer (Sidebar) */}
      <div className={`${styles.navDrawer} ${isDrawerOpen ? styles.open : ''}`}>
        <Link href="/" className={styles.navLink}>Home</Link>
        <Link href="/about" className={styles.navLink}>About Us</Link>
        <Link href="/our-service" className={styles.navLink}>Services</Link>
        <Link href="/outsource" className={styles.navLink}>Outsource</Link>
        <Link href="/blog" className={styles.navLink}>Blogs</Link>
        <Link href="/contact" className={styles.navLink}>Contact Us</Link>
      </div>
    </header>
  );
}

