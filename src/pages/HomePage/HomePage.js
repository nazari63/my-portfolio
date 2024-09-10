import React from 'react';
import './HomePage.css';
import HeroSection from '../../components/HeroSection/HeroSection';
import AboutMe from '../../components/AboutMe/AboutMe';
import Skills from '../../components/Skills/Skills';
import Projects from '../../components/Projects/Projects';
import Testimonials from '../../components/Testimonials/Testimonials';

const HomePage = () => {
  return (
    <div className="home-page">
      <HeroSection />
      <section id="about">
        <AboutMe />
      </section>
      <section id="skills">
        <Skills />
      </section>
      <section id="projects">
        <Projects />
      </section>
      <section id="testimonials">
        <Testimonials />
      </section>
    </div>
  );
};

export default HomePage;
