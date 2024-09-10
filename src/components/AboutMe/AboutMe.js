// src/pages/AboutMe/AboutMe.js

import React from 'react';
import Bio from '../../components/AboutMe/Bio';
import Hobbies from '../../components/AboutMe/Hobbies';
import ProfessionalBackground from '../../components/AboutMe/ProfessionalBackground';
import Education from '../../components/AboutMe/Education';
import Mission from '../../components/AboutMe/Mission';
import CallToAction from '../../components/AboutMe/CallToAction';
import './AboutMe.css';

const AboutMe = () => {
  return (
    <div className="about-me">
      <section id="bio">
        <Bio />
      </section>
      <section id="professional-background">
        <ProfessionalBackground />
      </section>
      <section id="education">
        <Education />
      </section>
      <section id="hobbies">
        <Hobbies />
      </section>
      
      
      <section id="mission">
        <Mission />
      </section>
      <section id="call-to-action">
        <CallToAction />
      </section>
    </div>
  );
};

export default AboutMe;
