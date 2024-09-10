// src/App.js

import React, { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import './App.css';

// Lazy load components for better performance
const HomePage = lazy(() => import('./pages/HomePage/HomePage'));
const AboutMe = lazy(() => import('./components/AboutMe/AboutMe'));
const Bio = lazy(() => import('./components/AboutMe/Bio'));
const Hobbies = lazy(() => import('./components/AboutMe/Hobbies'));
const ProfessionalBackground = lazy(() => import('./components/AboutMe/ProfessionalBackground'));
const Education = lazy(() => import('./components/AboutMe/Education'));
const Mission = lazy(() => import('./components/AboutMe/Mission'));
const CallToAction = lazy(() => import('./components/AboutMe/CallToAction'));
const Skills = lazy(() => import('./components/Skills/Skills'));
const Testimonials = lazy(() => import('./components/Testimonials/Testimonials'));
const ContactForm = lazy(() => import('./components/ContactForm/ContactForm'));
const Blog = lazy(() => import('./components/Blog/Blog'));
const Projects = lazy(() => import('./components/Projects/Projects'));
const Resume = lazy(() => import('./components/Resume/Resume')); 
const MyServices = lazy(() => import('./components/MyServices/MyServices')); // New single service page

// Component to scroll to top on route change
const ScrollToTop = () => {
  window.scrollTo(0, 0);
  return null;
};

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <ScrollToTop />
        <main>
          <Suspense fallback={<div className="loading">Loading...</div>}>
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/about-me" element={<AboutMe />} />
              <Route path="/about-me/bio" element={<Bio />} />
              <Route path="/about-me/hobbies" element={<Hobbies />} />
              <Route path="/about-me/professional-background" element={<ProfessionalBackground />} />
              <Route path="/about-me/education" element={<Education />} />
              <Route path="/about-me/mission" element={<Mission />} />
              <Route path="/about-me/call-to-action" element={<CallToAction />} />
              <Route path="/skills" element={<Skills />} />
              <Route path="/testimonials" element={<Testimonials />} />
              <Route path="/contact-form" element={<ContactForm />} />
              <Route path="/blog-posts" element={<Blog />} />
              <Route path="/projects" element={<Projects />} />
              <Route path="/resume" element={<Resume />} /> 
              <Route path="/my-services" element={<MyServices />} /> {/* Single service page */}
            </Routes>
          </Suspense>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
