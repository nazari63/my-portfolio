import React, { useState } from 'react';
import './Projects.css';

const projects = [
  {
    title: 'Harmosoft Website',
    description: 'A comprehensive platform for tech research and community engagement.',
    link: 'https://harmosoft.co.ke',
    type: 'Website'
  },
  {
    title: 'DROP Website',
    description: 'A user-friendly site for managing and showcasing various projects.',
    link: 'https://dropke.org',
    type: 'Website'
  },
  {
    title: 'Harmosoft Book Store',
    description: 'An online bookstore with a wide range of books and easy navigation.',
    link: 'https://harmosoftbookstore.co.ke',
    type: 'Website'
  },
  {
    title: 'Duolcee Packaging Supplies',
    description: 'A site dedicated to packaging solutions with a focus on durability and design.',
    link: 'https://doulceepack.co.ke',
    type: 'Website'
  },
  {
    title: 'PAWLSAR',
    description: 'An app for tracking lost dogs, with features for social media integration, a marketplace for pet services, and AI for identifying breeds.',
    link: 'https://play.google.com/store/apps/details?id=com.pawlsar',
    type: 'Mobile App'
  },
  {
    title: 'HDS - Harmosoft Document Security',
    description: 'AI-powered document security app with features like electronic stamping, verification, and document traceability.',
    link: 'https://play.google.com/store/apps/details?id=com.hds',
    type: 'Mobile App'
  },
  {
    title: 'Portfolio Website',
    description: 'A personal portfolio website showcasing skills, projects, and professional achievements.',
    link: 'https://portfoliowebsite.com',
    type: 'Website'
  },
  {
    title: 'Task Management System',
    description: 'A robust tool for task management, team collaboration, and project tracking.',
    link: 'https://taskmanagementsystem.com',
    type: 'Website'
  },
  {
    title: 'E-Commerce Platform',
    description: 'A comprehensive e-commerce solution for online sales and customer management.',
    link: 'https://ecommerceplatform.com',
    type: 'Website'
  },
  {
    title: 'Social Media Dashboard',
    description: 'A dashboard for managing multiple social media accounts and analyzing engagement metrics.',
    link: 'https://socialmediadashboard.com',
    type: 'Website'
  },
  {
    title: 'Fitness Tracker App',
    description: 'An app for tracking fitness activities, setting goals, and monitoring progress.',
    link: 'https://play.google.com/store/apps/details?id=com.fitnesstracker',
    type: 'Mobile App'
  },
  {
    title: 'Language Learning App',
    description: 'An app designed to help users learn new languages through interactive lessons and quizzes.',
    link: 'https://play.google.com/store/apps/details?id=com.languagelearning',
    type: 'Mobile App'
  },
  {
    title: 'Travel Planner',
    description: 'A mobile app for planning trips, booking accommodations, and managing itineraries.',
    link: 'https://play.google.com/store/apps/details?id=com.travelplanner',
    type: 'Mobile App'
  },
  {
    title: 'Recipe Sharing Platform',
    description: 'A platform for sharing and discovering recipes from around the world.',
    link: 'https://recipesharingplatform.com',
    type: 'Website'
  },
  {
    title: 'Virtual Event Platform',
    description: 'A platform for hosting and attending virtual events with interactive features.',
    link: 'https://virtualeventplatform.com',
    type: 'Website'
  },
  {
    title: 'Healthcare Management System',
    description: 'A system for managing patient records, appointments, and healthcare services.',
    link: 'https://healthcaremanagementsystem.com',
    type: 'Website'
  },
  {
    title: 'Real Estate Listing Site',
    description: 'A website for listing and searching real estate properties with advanced filters and search options.',
    link: 'https://realestatelistingsite.com',
    type: 'Website'
  },
  {
    title: 'ProdVestor: Tech Investment Made Simple',
    description: 'A transformative platform connecting tech developers with forward-thinking investors, streamlining the investment process.',
    link: 'https://prodvestor.com',
    type: 'Website'
  }
];

const Projects = () => {
  const [showModal, setShowModal] = useState(false);
  const [modalMessage, setModalMessage] = useState('');

  const handleRequestToViewLive = (projectTitle) => {
    setModalMessage(`Request to view live for ${projectTitle} has been sent. I will reach out to you later.`);
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
    setModalMessage('');
  };

  return (
    <section className="projects-section">
      <h2 className="section-title">My Projects</h2>
      <div className="projects-container">
        {projects.map((project, index) => (
          <div className="project-card" key={index}>
            <h3 className="project-title">{project.title}</h3>
            <p className="project-description">{project.description}</p>
            {index < 4 ? (
              <a href={project.link} className="project-link" target="_blank" rel="noopener noreferrer">
                {project.type === 'Mobile App' ? 'View on Play Store' : 'View Live'}
              </a>
            ) : (
              <button
                className="project-link"
                onClick={() => handleRequestToViewLive(project.title)}
              >
                Request to View Live
              </button>
            )}
          </div>
        ))}
      </div>

      {/* Modal component */}
      {showModal && (
        <div className="modal">
          <div className="modal-content">
            <p>{modalMessage}</p>
            <button className="close-button" onClick={closeModal}>Close</button>
          </div>
        </div>
      )}
    </section>
  );
};

export default Projects;
