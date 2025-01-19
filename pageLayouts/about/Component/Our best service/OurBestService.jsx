import React from 'react';
import styles from './OurBestService.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck } from '@fortawesome/free-solid-svg-icons';

const OurBestService = () => {
  const services = [
    {
      title: "DOT NET CORE SOLUTIONS",
      description: ".NET core is the next big thing after the release of revolutionary .NET and .NET 2.0. 7CTECH has been working and developing solutions using Microsoft .NET core technologies.",
    },
    {
      title: "CUSTOMIZED BUSINESS SOLUTIONS",
      description: "If you have a killer idea or a great startup thought lingering around in your mind for a long time?...",
    },
    {
      title: "SHOPIFY DEVELOPMENT",
      description: "Shopify is one of the biggest E-Commerce platforms and enablers and one of the best optimized ones.",
    },
  ];

  return (
    <section className={styles.serviceSection}>
      <div className={styles.content}>
        <h2 className={styles.service}>
          OUR BEST <span className={styles.span}>SERVICES</span>
        </h2>
        <div className={styles.serviceCards}>
          {services.map((service, index) => (
            <div key={index} className={styles.card}>
              <div className={styles.iconWrapper}>
                <FontAwesomeIcon icon={faCheck} className={styles.icon} />
              </div>
              <h3>{service.title}</h3>
              <p>{service.description}</p>
              <button>MORE DETAILS</button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OurBestService;
