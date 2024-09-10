import React from 'react';
import './Footer.css';
import { FaLinkedinIn, FaGithub, FaTwitter, FaInstagram, FaFacebookF } from 'react-icons/fa'; // Correct social media icons
import { Link } from 'react-router-dom'; // Import Link from react-router-dom

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-about">
          <h3 className="footer-title">About Me</h3>
          <p className="footer-text">I'm Fidel Omondi Otieno, a software engineer passionate about technology, innovation, and continuous learning. Dive into my world of coding and creativity!</p>
        </div>
        <div className="footer-info">
          <h3 className="footer-title">Contact Information</h3>
          <p className="footer-text">Email: <a href="mailto:engomondiii@gmail.com">engomondiii@gmail.com</a></p>
          <p className="footer-text">Phone: <a href="tel:+254790883802">+254 790 883 802</a></p>
          <p className="footer-text">Location: Nairobi, Kenya</p>
        </div>
        <div className="footer-links">
          <h3 className="footer-title">Explore More</h3>
          <div className="footer-list-container">
            <div className="footer-list-section">
              <h4 className="footer-subtitle">Personal</h4>
              <ul className="footer-list">
                <li><Link to="/about-me/education">Educational Background</Link></li>
                <li><Link to="/about-me/work-experience">Work Experience</Link></li>
                <li><Link to="/about-me/hobbies">Hobbies</Link></li>
                <li><Link to="/about-me/projects">Projects</Link></li>
                <li><Link to="/about-me/skills">Skills</Link></li>
              </ul>
            </div>
            <div className="footer-list-section">
              <h4 className="footer-subtitle">Professional</h4>
              <ul className="footer-list">
                <li><Link to="/about-me/certifications">Certifications</Link></li>
                <li><Link to="/about-me/volunteering">Volunteering</Link></li>
                <li><Link to="/about-me/testimonials">Testimonials</Link></li>
                <li><Link to="/blog-posts">Blog</Link></li>
                <li><Link to="/projects">Portfolio</Link></li>
              </ul>
            </div>
            <div className="footer-list-section">
              <h4 className="footer-subtitle">Other</h4>
              <ul className="footer-list">
                <li><Link to="/about-me/awards">Awards</Link></li>
                <li><Link to="/about-me/publications">Publications</Link></li>
                <li><Link to="/about-me/conferences">Conferences</Link></li>
                <li><Link to="/about-me/languages">Languages</Link></li>
                <li><Link to="/contact-form">Get in Touch</Link></li>
              </ul>
            </div>
          </div>
        </div>
        <div className="footer-services">
          <h3 className="footer-title">My Services</h3>
          <ul className="footer-list">
            <li><Link to="/my-services#web-development">Web Development</Link></li>
            <li><Link to="/my-services#mobile-app-development">Mobile App Development</Link></li>
            <li><Link to="/my-services#api-integration">API Integration</Link></li>
            <li><Link to="/my-services#cloud-solutions">Cloud Solutions</Link></li>
            <li><Link to="/my-services#tech-consultation">Tech Consultation</Link></li>
            <li><Link to="/my-services#ux-ui-design">UX/UI Design</Link></li>
            <li><Link to="/my-services#data-analytics">Data Analytics</Link></li>
            <li><Link to="/my-services#cybersecurity">Cybersecurity</Link></li>
            <li><Link to="/my-services#ai-solutions">AI Solutions</Link></li>
            <li><Link to="/my-services#digital-marketing">Digital Marketing</Link></li>
          </ul>
        </div>
        <div className="footer-social">
          <h3 className="footer-title">Follow Me</h3>
          <div className="social-links">
            <a href="https://www.linkedin.com/in/fidel-otieno-ab507b1b4/" className="social-icon linkedin" target="_blank" rel="noopener noreferrer">
              <FaLinkedinIn />
            </a>
            <a href="https://github.com/engomondiii" className="social-icon github" target="_blank" rel="noopener noreferrer">
              <FaGithub />
            </a>
            <a href="https://x.com/SiniorDeveloper" className="social-icon twitter" target="_blank" rel="noopener noreferrer">
              <FaTwitter />
            </a>
            <a href="https://www.instagram.com/fidel.omondi.9638/?hl=en" className="social-icon instagram" target="_blank" rel="noopener noreferrer">
              <FaInstagram />
            </a>
            <a href="https://www.facebook.com/fidel.omondi.9638" className="social-icon facebook" target="_blank" rel="noopener noreferrer">
              <FaFacebookF />
            </a>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <p className="footer-text">&copy; {new Date().getFullYear()} Fidel Omondi Otieno. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
