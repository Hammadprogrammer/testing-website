import Image from "next/image";
import background from "/images/7c/home-slider-1.jpg";
import "./hero.scss";

const Hero = () => {
  return (
    <section className="hero">
      {/* Background Image */}
      <Image
        src={background} // Use the imported 'background' image
        alt="Background"
        layout="fill"
        objectFit="cover"
        priority // Ensures the image is loaded immediately
        className="hero-background"
      />

      {/* Overlay and Text */}
      <div className="hero-overlay">
        <h1>WELCOME TO 7CTECH</h1>
        <p>YOUR PERFECT BUSINESS SOLUTION</p>
      </div>
    </section>
  );
};

export default Hero;
