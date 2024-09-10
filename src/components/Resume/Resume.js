import React from 'react';
import './Resume.css';
import passportPhoto from '../../assets/images/passport photo.jpg'; // Replace with the actual path

// Your resume PDF link
const resumePdfLink = "https://drive.google.com/file/d/1v-zK-0_hzAfmzk3iZCFbQqpVSN9Fo3cF/view?usp=drive_link"; // Update this with the actual link

const Resume = () => {
  return (
    <section className="resume-section">
      <div className="resume-container">
        <header className="resume-header">
          <img src={passportPhoto} alt="Fidel Omondi Otieno" className="passport-photo" />
          <h1 className="name">Fidel Omondi Otieno</h1>
          <p className="contact-info">
            Phone: +254790883802 | Email: <a href="mailto:engomondiii@gmail.com">engomondiii@gmail.com</a> | Address: 00100 Nairobi, Kenya
          </p>
          <p className="links">
            <a href="https://github.com/engomondiii" target="_blank" rel="noopener noreferrer">GitHub</a> | 
            <a href="https://www.linkedin.com/in/fidel-otieno-ab507b1b4/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
          </p>
        </header>

        <section className="resume-summary">
          <h2>Summary</h2>
          <p>
            Highly motivated and results-oriented software engineer with a strong track record in delivering high-quality, efficient code. Possesses extensive expertise across diverse programming languages and technologies, with a specialization in full-stack web development, mobile development, and UI/UX design. Adept at leveraging Docker for containerization, ensuring seamless deployment and management of applications. Proficient in Agile methodologies and committed to fostering a continuous learning environment. Demonstrated experience in DevOps practices, including CI/CD pipelines, automated testing, and infrastructure management, optimizing development workflows and enhancing operational efficiency. Skilled in integrating AI technologies to drive innovation, develop intelligent systems, and leverage machine learning models to provide data-driven solutions.
          </p>
        </section>

        <section className="resume-experience">
          <h2>Experience</h2>
          {[
            {
              title: "Software Engineer & Lead Developer",
              company: "Harmosoft - Nairobi, Kenya",
              dates: "January 2024 – Present",
              responsibilities: [
                "Spearhead software development initiatives as a lead developer, delivering robust and efficient code, ensuring project success.",
                "Collaborate effectively with cross-functional teams, utilizing Agile methodologies to drive successful project outcomes.",
                "Leverage full-stack web development, mobile development, and UI/UX design expertise to contribute diversely to projects, maximizing team efficiency.",
                "Implement DevOps practices including CI/CD pipelines and automated testing to streamline development processes and enhance operational efficiency.",
                "Integrate AI technologies to develop intelligent systems, utilizing machine learning models to drive innovation and data-driven decision making.",
                "Mentor and guide junior developers, fostering a culture of continuous learning and enhancing team productivity."
              ]
            },
            {
              title: "Software Engineering Intern",
              company: "Ministry of Education – Murang’a County, Kenya",
              dates: "May 2023 – August 2023",
              responsibilities: [
                "Contributed to the implementation of educational software solutions through close collaboration with software engineers and IT professionals.",
                "Actively participated in meetings and brainstorming sessions, proposing innovative ideas and solutions that advanced educational technology projects."
              ]
            },
            {
              title: "Programming Mentor",
              company: "Murang'a University IT Passionate Students Group – Murang’a, Kenya",
              dates: "March 2022 – October 2022",
              responsibilities: [
                "Empowered IT passionate students at Murang'a University by mentoring and guiding them in their grasp of programming concepts, including Python, JavaScript, Java, HTML, CSS, and C++."
              ]
            }
          ].map((experience, index) => (
            <div className="experience-item" key={index}>
              <h3>{experience.title}</h3>
              <p className="company">{experience.company}</p>
              <p className="dates">{experience.dates}</p>
              <ul>
                {experience.responsibilities.map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>
            </div>
          ))}
        </section>

        <section className="resume-skills">
          <h2>Skills</h2>
          <h3>Technical Skills</h3>
          <ul>
            <li>Programming Languages: Proficient in a diverse range of languages, including C, C#, C++, Python, JavaScript, PHP, Java, and VBScript.</li>
            <li>Front-End Development: Deep expertise in HTML, CSS, JavaScript, and frameworks like React Native, Bootstrap, jQuery, SASS, React, Angular, Vue.js, and Tailwind CSS.</li>
            <li>Back-End Development & APIs: Skilled in back-end development and API creation, with experience in database programming and containerization technologies like Docker.</li>
            <li>DevOps: Experienced in implementing CI/CD pipelines, automated testing, and infrastructure management, optimizing development workflows and operational efficiency.</li>
            <li>AI Integration: Proficient in integrating AI technologies, developing intelligent systems, and leveraging machine learning models to drive innovation and data-driven decision making.</li>
          </ul>
          <h3>Soft Skills</h3>
          <ul>
            <li>Project Management: Effective project management capabilities, with a strong focus on requirement gathering and data analysis.</li>
            <li>Communication & Teamwork: Excellent communication and teamwork skills, fostering collaborative and productive work environments.</li>
          </ul>
        </section>

        <section className="resume-education">
          <h2>Education</h2>
          <div className="education-item">
            <h3>Bachelor of Science in Software Engineering</h3>
            <p className="institution">Murang'a University of Technology</p>
            <p className="year">2024</p>
          </div>
        </section>

        <section className="resume-certifications">
          <h2>Certifications</h2>
          <ul>
            <li>Full-Stack Development: Certifications in Responsive Web Design, Front-End Development Libraries (e.g., React, Angular), JavaScript Algorithms & Data Structures, and Developing Applications with SQL, Databases & Django.</li>
            <li>Data Science & Cloud Technologies: Python for Data Science & Artificial Intelligence Certification.</li>
            <li>Networking Fundamentals: Certifications in Networking Essentials and Networking Devices & Initial Configuration.</li>
          </ul>
        </section>

        <section className="resume-download">
          <a href={resumePdfLink} className="download-link" target="_blank" rel="noopener noreferrer">Download PDF</a>
        </section>
      </div>
    </section>
  );
};

export default Resume;
