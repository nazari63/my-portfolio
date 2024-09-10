// src/components/AboutMe/ProfessionalBackground.js

import React from 'react';
import './ProfessionalBackground.css';

const ProfessionalBackground = () => {
  return (
    <div className="professional-background-container">
      <h2 className="professional-background-title">Professional Background</h2>
      <div className="professional-background-content">
        <div className="job-experience">
          <h3>👨‍💻 Software Engineer & Lead Developer</h3>
          <p className="company">Harmosoft - Nairobi, Kenya</p>
          <p className="date">August 2023 – Present</p>
          <ul>
            <li>🚀 Spearheaded software development initiatives as a lead developer, delivering scalable and high-performance code.</li>
            <li>🤝 Orchestrated cross-functional team collaborations using Agile methodologies, ensuring timely and successful project deliveries.</li>
            <li>🌟 Implemented modern technologies and best practices in full-stack development, mobile app development, and UI/UX design, optimizing project efficiency.</li>
            <li>👨‍🏫 Mentored and supported junior developers, nurturing a culture of continuous learning and improving overall team productivity.</li>
            <li>🔧 Integrated CI/CD pipelines for automated testing and deployment, enhancing development workflows and reducing time-to-market.</li>
            <li>📊 Conducted code reviews and performance tuning to ensure high code quality and system reliability.</li>
          </ul>
        </div>
        <div className="job-experience">
          <h3>📚 Software Engineering Intern</h3>
          <p className="company">Ministry of Education – Kenya</p>
          <p className="date">May 2023 – August 2023</p>
          <ul>
            <li>💻 Assisted in the design and development of educational software solutions, enhancing user engagement and learning outcomes.</li>
            <li>💡 Contributed to the development of user-friendly interfaces and functionalities, based on feedback from educational stakeholders.</li>
            <li>🔍 Conducted debugging and performance analysis, ensuring the software met high standards of functionality and efficiency.</li>
            <li>📈 Participated in project meetings, offering innovative ideas and practical solutions to address complex educational technology challenges.</li>
          </ul>
        </div>
        <div className="job-experience">
          <h3>🎓 Programming Mentor</h3>
          <p className="company">Murang'a University IT Passionate Students Group – Murang’a, Kenya</p>
          <p className="date">March 2022 – October 2022</p>
          <ul>
            <li>👨‍🏫 Guided students in advanced programming concepts and real-world applications, including Python, JavaScript, Java, HTML, CSS, and C++.</li>
            <li>🚀 Facilitated hands-on workshops and coding challenges, improving students' practical skills and preparing them for industry demands.</li>
            <li>💬 Provided career mentorship and advice, helping students navigate their paths in the tech industry.</li>
            <li>📚 Developed and delivered engaging educational content, tailored to the learning needs and goals of aspiring programmers.</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default ProfessionalBackground;
