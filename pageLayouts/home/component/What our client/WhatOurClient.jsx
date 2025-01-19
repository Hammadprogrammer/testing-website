"use client"
import { useState } from 'react';
import { Carousel } from 'react-bootstrap';
import styles from './WhatOurClient.module.scss'; // Import the SCSS file

function CustomSlider() {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };

  return (
    <div className={styles.main}>
      <h1 className={styles.heading}>
        What Our <span className={styles.span}>Clients</span> Talking <span className={styles.span}>About Us</span>
      </h1>
      <div className={styles.carouselContainer}>
        <Carousel activeIndex={index} onSelect={handleSelect} indicators={false}>
          <Carousel.Item>
            <div className={styles.carouselContent}>
              <div className={styles.icon}>
                <i className="fa fa-quote-left"></i>
              </div>
              <div className={styles.text}>
                <p>
                  Working together with 7CTECH to launch a website for my new company was a very good experience as
                  it worked out really well, both aesthetically and functionally. I wanted a modern website with added
                  functions & uses and 7CTECH was able to deliver just that. I found them efficient and professional in
                  their mannerism.
                </p>
                <div className={styles.textBottom}>
                  <p>
                    <span className={styles.ceo}>
                      <em>DAWAR ALI KHAN</em>
                    </span>{' '}
                    , CEO - Percept Media
                  </p>
                </div>
              </div>
            </div>
          </Carousel.Item>
          <Carousel.Item>
            <div className={styles.carouselContent}>
              <div className={styles.icon}>
                <i className="fa fa-quote-left"></i>
              </div>
              <div className={styles.text}>
                <p>
                  It was great working with 7CTECH's team as they are very accommodating, professional and expert in
                  their field. The best thing about Ubaid was good communication and ability to understand exactly what
                  we wanted. Will not hesitate to work with them again on future projects.
                </p>
                <div className={styles.textBottom}>
                  <p>
                    <span className={styles.ceo}>
                      <em>Antonio Moreno</em>
                    </span>{' '}
                    , Marketing Manager - Eventage
                  </p>
                </div>
              </div>
            </div>
          </Carousel.Item>
          <Carousel.Item>
            <div className={styles.carouselContent}>
              <div className={styles.icon}>
                <i className="fa fa-quote-left"></i>
              </div>
              <div className={styles.text}>
                <p>
                  The Umbrella Network was desperately seeking a highly professional web development team to design
                  its website. 7CTECH despite finding them from a random web search we were glad that we made the
                  choice. Extremely talented and highly professional, Both Danish and Ubaid provided a solution which
                  was extremely cost effective and stylish. Keep It Up Guys!
                </p>
                <div className={styles.textBottom}>
                  <p>
                    <span className={styles.ceo}>
                      <em>Michael Holz</em>
                    </span>{' '}
                    , Director - Umbrella Network
                  </p>
                </div>
              </div>
            </div>
          </Carousel.Item>
        </Carousel>

        {/* Carousel Controls */}
        <div className={styles.carouselControls}>
          <button className={styles.prevButton} onClick={() => setIndex((index - 1 + 3) % 3)}>
            <i className="fas fa-chevron-left"></i>
          </button>
          <button className={styles.nextButton} onClick={() => setIndex((index + 1) % 3)}>
            <i className="fas fa-chevron-right"></i>
          </button>
        </div>

        {/* Fixed Indicator Circles */}
        <div className={styles.indicatorWrapper}>
          <div className={`${styles.indicator} ${index === 0 ? styles.active : ''}`} />
          <div className={`${styles.indicator} ${index === 1 ? styles.active : ''}`} />
          <div className={`${styles.indicator} ${index === 2 ? styles.active : ''}`} />
        </div>
      </div>
    </div>
  );
}

export default CustomSlider;
