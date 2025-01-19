import React from "react";
import Image from "next/image";
import styles from "./about.module.scss";
import aboutImage from "../../../../images/7c/contact.jpg";
import backgroundImage from "../../../../images/background/pattern-background.jpg";

const About = () => {
  return (
    <section className={styles.aboutSection}>
      <div className={styles.container}>
        {/* Image Section */}
        <div className={styles.aboutImage}>
          <div
            className={styles.background}
            style={{
              backgroundImage: `url(${backgroundImage.src})`,
            }}
          >
            <div className={styles.imageCircle}>
              <Image
                src={aboutImage}
                alt="About 7CTECH"
                className={styles.contactImage}
                width={200}
                height={200}
              />
            </div>
          </div>
        </div>

        {/* Text Section */}
        <div className={styles.aboutText}>
          <h2>
            What is <span>7CTECH</span>
          </h2>
          <p style={{ fontWeight: "500" }}>
            7CTECH comprises of experienced and creative designers and web
            developers. We focus on customer satisfaction to build a long-term
            work relationship with our clients. As a web company, our prime
            focus is to offer flawless services over a longer period of time so
            that our customers can get maximum benefit.
          </p>
          <p className={styles.grey}>
            Our professionals realize the fact that customer satisfaction is the
            key to success. Web design, customer care features, and innovative
            navigation attract visitors to any website. Modern business depends
            mainly upon online platforms, and a business website is the most
            important tool to stay in touch with customers.
          </p>
          <button className={styles.readMoreBtn}>READ MORE</button>
        </div>
      </div>
    </section>
  );
};

export default About;
