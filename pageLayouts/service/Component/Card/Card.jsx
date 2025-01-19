'use client';

import React from 'react';
import styles from './Card.module.scss';
import Image from 'next/image';

const Card = ({ title, image, description }) => {
  // Check if the image is valid, otherwise set to null or fallback image
  if (!image) return null; // Optionally return null if no image is provided

  return (
    <div className={styles.card}>
      {/* Only render the Image if the src is valid */}
      {image && (
        <Image
          src={image}
          alt={title}
          width={500} // Adjust width
          height={300} // Adjust height
          className={styles.cardImage}
        />
      )}
      <div className={styles.cardContent}>
        <h3 className={styles.cardTitle}>{title}</h3>
        <p className={styles.cardDescription}>{description}</p>
        <button className={styles.btn}>Read More</button>
      </div>
    </div>
  );
};

export default Card;
