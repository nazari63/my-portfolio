// src/components/HeroSection/HeroSection.js
import React from 'react';
import './HeroSection.css';
import passportPhoto from '../../../src/assets/images/passport photo.jpg'; // Link to your passport photo

const HeroSection = () => {
  return (
    <section className="hero-section">
      <div className="hero-content">
        <div className="hero-photo">
          <img src={passportPhoto} alt="Fidel Omondi Otieno" />
        </div>
        <div className="hero-text">
          <h1 className="hero-title">Welcome to My Portfolio</h1>
          <p className="hero-description">
            I'm Fidel Omondi Otieno, a passionate software engineer specializing in creating innovative and efficient solutions. Explore my work and connect with me!
          </p>
          <a href="#contact" className="cta-button">Get in Touch</a> {/* Link to CallToAction section */}
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
