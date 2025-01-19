"use client";
import React, { useState, useEffect } from "react";
import styles from "./LogoSlider.module.scss";
import { Box } from "@mui/material";
import { FaHtml5, FaCss3Alt, FaLaravel, FaPhp, FaPython } from "react-icons/fa"; // Importing tech icons

const logos = [
  <FaHtml5 size={60} color="#E44D26" />, // HTML5 logo icon
  <FaCss3Alt size={60} color="#1572B6" />, // CSS3 logo icon
  <FaLaravel size={60} color="#FF2D20" />, // Laravel logo icon
  <FaPhp size={60} color="#8993BE" />, // PHP logo icon
  <FaPython size={60} color="#306998" />, // Python logo icon
];

const Slider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % logos.length); // Loop through logos
    }, 3000); // Move slider every 3 seconds
    return () => clearInterval(interval);
  }, []);

  return (
    <Box className={styles.slider}>
      <Box
        className={styles.slide}
        style={{
          transform: `translateX(-${(currentIndex / logos.length) * 100}%)`, // Move the slider to the right
        }}
      >
        {logos.concat(logos).map((logo, index) => (
          <Box key={index} className={styles.logo}>
            {logo} {/* Display the icon */}
          </Box>
        ))}
      </Box>
    </Box>
  );
};

export default Slider;
