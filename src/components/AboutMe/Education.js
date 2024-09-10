// src/components/AboutMe/Education.js

import React from 'react';
import './Education.css';

const Education = () => {
  return (
    <div className="education-container">
      <h2 className="education-title">Education & Learning Journey</h2>
      <div className="education-content">
        <div className="education-item">
          <h3>🎓 Achuth Primary School</h3>
          <p>
            My educational adventure began at Achuth Primary School, where I first
            discovered the joys of learning. From mastering basic arithmetic to
            experiencing the thrill of my first science project, this was where
            my curiosity about the world began to take shape. Let’s just say, I
            was the kid who always had a question ready, and the teachers were
            both delighted and exhausted!
          </p>
        </div>
        <div className="education-item">
          <h3>🏫 Oriwo Boys High School</h3>
          <p>
            From there, I moved on to Oriwo Boys High School, where I learned
            that high school is not just about passing exams but also about
            discovering your passions. Between acing my math tests and dodging
            flying footballs, I managed to keep my grades soaring. I was known
            as the go-to guy for help with homework and the unofficial champion
            of the annual science fair!
          </p>
        </div>
        <div className="education-item">
          <h3>🎓 Murang'a University of Technology</h3>
          <p>
            My journey continued at Murang'a University of Technology, where I
            pursued a Bachelor of Science in Software Engineering. Here, I
            transformed from a coding newbie into a software wizard. From late
            -night coding marathons to deciphering complex algorithms, I
            graduated with flying colors, proving that my love for technology
            and perseverance could indeed make software magic happen!
          </p>
        </div>
        <div className="education-item">
          <h3>💻 Online Bootcamps & Skill Courses</h3>
          <p>
            To further sharpen my skills, I embarked on a series of online bootcamps
            and skill courses. I’ve dived deep into modern tech stacks, honed my
            expertise in various programming languages, and emerged as a versatile
            developer ready to tackle any challenge. Each course was a stepping
            stone, adding new tools to my developer’s toolkit and ensuring that
            my knowledge stayed as fresh as a morning coffee!
          </p>
        </div>
      </div>
    </div>
  );
};

export default Education;
