'use client'; // Ensure client-side rendering if needed

import React from 'react';
import Card from '../Card/Card'; // Import the Card component
import styles from './CardOurService.module.scss'; // Import the SCSS file

// Assuming images are placed in the 'public' folder
import images from "../../../../images/background/bg-registration-two.jpg";

const CardPage = () => {
  return (
    <div className={styles.cardContainer}>
   
      <Card
        title="Beautiful Sunset"
        image={images} // Use correct image path
        description="A beautiful sunset over the mountains, captured in the golden hour."
      />
      <Card
        title="City Skyline"
        image={images} // Use the same image or change it as needed
        description="The city skyline at night with all the lights shining brightly."
      />
      <Card
        title="Forest Path"
        image={images} // Use the same image or change it as needed
        description="A calm and peaceful walk through the forest, surrounded by green trees."
      />

      {/* Second Row */}
      <Card
        title="Beautiful Sunset"
        image={images} // Use correct image path
        description="A beautiful sunset over the mountains, captured in the golden hour."
      />
      <Card
        title="City Skyline"
        image={images} // Use the same image or change it as needed
        description="The city skyline at night with all the lights shining brightly."
      />
      <Card
        title="Forest Path"
        image={images} // Use the same image or change it as needed
        description="A calm and peaceful walk through the forest, surrounded by green trees."
      />

      {/* Third Row */}
      <Card
        title="Beautiful Sunset"
        image={images} // Use correct image path
        description="A beautiful sunset over the mountains, captured in the golden hour."
      />
      <Card
        title="City Skyline"
        image={images} // Use the same image or change it as needed
        description="The city skyline at night with all the lights shining brightly."
      />
      <Card
        title="Forest Path"
        image={images} // Use the same image or change it as needed
        description="A calm and peaceful walk through the forest, surrounded by green trees."
      />
    </div>
  );
};

export default CardPage;
