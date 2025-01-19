import React from "react";
import Image from "next/image";  // Import the Next.js Image component to handle image optimization
import './service.scss';
import background from '/images/7c/paralex.jpg';  // Import the background image

const services = [
  {
    icon: 'fa-paint-brush',
    title: 'Design & Development',
    description: 'Our dedicated team is working on WordPress, AngularJS, NodeJS, PSDs, and more.',
    link: '/design-development',
  },
  {
    icon: 'fa-shopping-cart',
    title: 'E-Commerce Website',
    description: 'We offer customized E-Commerce services along with development in Magento, WooCommerce.',
    link: '/ecommerce-website',
  },
  {
    icon: 'fa-mobile-alt',
    title: 'Mobile App Development',
    description: 'Mastering the art of creating mobile applications that offer services on responsive and native development.',
    link: '/mobile-app-development',
  },
  {
    icon: 'fa-database',
    title: 'Data Scraping',
    description: 'Data mining systems, text mining solutions, big data analysis, API integrations, and more.',
    link: '/data-scraping',
  },
  {
    icon: 'fa-brain',
    title: 'Artificial Intelligence',
    description: 'As technology evolves, some of our best solutions are Python-based AI and deep learning solutions.',
    link: '/artificial-intelligence',
  },
  {
    icon: 'fa-code',
    title: 'Dot Net Solution',
    description: '7CTECH has been working and developing solutions using Microsoft .NET core technologies.',
    link: '/dot-net-solution',
  },
];

const ServicesSection = () => {
  return (
    <section className="services-section">
      {/* Add a background image to the section */}
      <div className="background-image-wrapper">
        <Image
          src={background}  // Use the imported background image here
          alt="Background Image"
          layout="fill"
          objectFit="cover"
          objectPosition="center"
        />
      </div>

      <div className="container">
        <h2>
          Our <span>Services</span>
        </h2>
        <div className="services-grid">
          {services.map((service, index) => (
            <a href={service.link} key={index} className="service-card">
              <div className="icon-box">
                <i className={`fas ${service.icon}`}></i>
              </div>
              <div className="card-content">
                <h3>{service.title}</h3>
                <p>{service.description}</p>
              </div>
              <span className="read-more">READ MORE</span>
            </a>
          ))}
        </div>
        <button className="view-all-btn">VIEW ALL</button>
      </div>
    </section>
  );
};

export default ServicesSection;
