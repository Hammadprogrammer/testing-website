import React from "react";
import "./WhyChooseUs.scss";
import credibilityIcon from "/images/7c/credibility-icon.png";
import efficiencyIcon from "../../../../images/7c/efficiency-icon.png";
import accommodateIcon from "../../../../images/7c/accommodate-icon.png";
import Image from "next/image";

const WhyChooseUs = () => {
  const features = [
    {
      icon: credibilityIcon,
      title: "CREDIBILITY",
      description:
        "7CTECH team believes in credibility and reliability. Our professionals know the importance of building a true work relationship.",
    },
    {
      icon: efficiencyIcon,
      title: "EFFICIENCY",
      description:
        "Efficiency is not a onetime demonstration of expertise. Our web company believes in constant and long term results.",
    },
    {
      icon: accommodateIcon,
      title: "ACCOMMODATE",
      description:
        "We believe business depends on its limitations and consumer behavior. This is why we pay attention to what our clients demand.",
    },
  ];

  return (
    <section className="why-choose-us-section">
      <div className="container">
        <h2>
          Why Choose <span>7CTECH</span>
        </h2>
        <div className="features-grid">
          {features.map((feature, index) => (
            <div className="feature-card" key={index}>
              <div className="icon-box">
                <Image src={feature.icon} alt={`${feature.title} icon`} />
              </div>
              <h3>{feature.title}</h3>
              <p>{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
