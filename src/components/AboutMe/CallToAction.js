// src/components/CallToAction/CallToAction.js
import React, { useState } from 'react';
import './CallToAction.css';

const CallToAction = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Your message has been sent!');
    // Here you would handle form submission (e.g., send it to a server)
  };

  return (
    <div id="contact" className="cta-container"> {/* Added ID here */}
      <h2 className="cta-title">🚀 Ready to Take the Next Step?</h2>
      <p className="cta-subtitle">Whether you want to discuss a project, have a question, or just want to say hi, I’d love to hear from you!</p>
      <form className="cta-form" onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="name">Name</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="message">Message</label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            rows="5"
            required
          ></textarea>
        </div>
        <button type="submit" className="cta-button">Send Message</button>
      </form>
      <div className="cta-footer">
        <p>📧 Prefer to email me directly? Reach out at <a href="mailto:engomondiii@gmail.com">engomondiii@gmail.com</a></p>
        <p>📱 Or give me a call at <a href="tel:+254790883802">+254790883802</a></p>
      </div>
    </div>
  );
};

export default CallToAction;
