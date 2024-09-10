import React from 'react';
import './Skills.css';

const skillsData = [
  {
    category: 'Programming Languages',
    skills: ['Python', 'JavaScript', 'Java', 'C++', 'C#', 'PHP', 'TypeScript']
  },
  {
    category: 'Web Development',
    skills: ['HTML5', 'CSS3', 'React.js', 'Vue.js', 'Angular', 'Bootstrap', 'Tailwind CSS']
  },
  {
    category: 'Backend Development',
    skills: ['Node.js', 'Express.js', 'Django', 'Flask', 'Spring Boot', 'Ruby on Rails']
  },
  {
    category: 'Mobile Development',
    skills: ['React Native', 'Flutter', 'Swift', 'Kotlin', 'Java for Android']
  },
  {
    category: 'DevOps & Tools',
    skills: ['Docker', 'Kubernetes', 'Git', 'Jenkins', 'CI/CD', 'AWS', 'Azure', 'GCP']
  },
  {
    category: 'Data Science & Analytics',
    skills: ['Data Analysis', 'Machine Learning', 'AI', 'Pandas', 'NumPy', 'TensorFlow', 'Scikit-Learn']
  },
  {
    category: 'Soft Skills',
    skills: ['Agile Methodologies', 'Project Management', 'Team Collaboration', 'Problem Solving', 'Communication']
  }
];

const Skills = () => {
  return (
    <section className="skills-section">
      <div className="skills-container">
        <h1 className="skills-title">Skills</h1>
        {skillsData.map((category) => (
          <div className="skills-category" key={category.category}>
            <h2 className="category-title">{category.category}</h2>
            <ul className="skills-list">
              {category.skills.map((skill, index) => (
                <li className="skill-item" key={index}>{skill}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
