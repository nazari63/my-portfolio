import React from 'react';
import './Testimonials.css';

const testimonials = [
  {
    name: 'Dr. Jusper Wendo',
    role: 'Founder, Harmosoft',
    testimonial: 'Fidel has been instrumental in developing our Harmosoft platform. His dedication and technical expertise have significantly contributed to our success. His innovative approach to problem-solving is truly commendable.'
  },
  {
    name: 'Sarah Mueni',
    role: 'Lead Designer, Pawlsar',
    testimonial: 'Working with Fidel on the Pawlsar project has been an incredible experience. His vision and execution in integrating advanced tracking technologies and user-friendly interfaces were key to our app’s success.'
  },
  {
    name: 'Brandon Sakau',
    role: 'Co-Founder, Stretch Health Analytics',
    testimonial: 'Fidel’s work on the Stretch Health Analytics Application was beyond impressive. His deep understanding of data analytics and application development has brought our project to new heights.'
  },
  {
    name: 'James Njeri',
    role: 'Project Manager, Dropke',
    testimonial: 'Fidel\'s commitment to excellence is evident in the Dropke website. His skills in frontend and backend development have delivered a platform that is both functional and aesthetically pleasing.'
  },
  {
    name: 'Benjamin Karanja',
    role: 'Tech Lead, Harmosoft Book Store',
    testimonial: 'The Harmosoft Book Store project saw remarkable results thanks to Fidel’s expertise. His approach to integrating e-commerce features and ensuring seamless user experience was pivotal to its success.'
  },
  {
    name: 'Eric Otieno',
    role: 'Developer, Duolcee Packaging Supplies',
    testimonial: 'Fidel’s contributions to the Duolcee Packaging Supplies site were outstanding. His innovative design and efficient coding have greatly enhanced the functionality and user experience of the website.'
  },
  {
    name: 'Martha Wanji',
    role: 'CEO, StreamHub',
    testimonial: 'Fidel’s development of StreamHub demonstrated his exceptional skills in managing digital advertising and media. His ability to streamline complex systems into a user-friendly interface is remarkable.'
  },
  {
    name: 'Paul Kirui',
    role: 'Technical Advisor, HDS',
    testimonial: 'The Harmosoft Document Security app is a testament to Fidel’s prowess in building secure and reliable applications. His attention to detail and understanding of document security protocols were critical to this project\'s success.'
  },
  {
    name: 'Joyce Nyambura',
    role: 'Product Owner, Task Management System',
    testimonial: 'Fidel’s work on the Task Management System has been exceptional. His approach to developing a robust tool for team collaboration and project tracking has significantly improved our workflow.'
  },
  {
    name: 'Michael Kimani',
    role: 'Founder, E-Commerce Platform',
    testimonial: 'Fidel\'s expertise was crucial in developing our e-commerce platform. His innovative solutions and deep understanding of online sales systems have provided a strong foundation for our business.'
  },
  {
    name: 'Grace Mwangi',
    role: 'UI/UX Designer, Fitness Tracker App',
    testimonial: 'Fidel’s work on the Fitness Tracker App was fantastic. His ability to combine aesthetics with functionality created an engaging and effective tool for users looking to track their fitness goals.'
  },
  {
    name: 'John Maina',
    role: 'Developer, Travel Planner',
    testimonial: 'Fidel’s development of the Travel Planner app was impressive. His integration of various features and seamless user experience greatly enhanced the functionality of the app.'
  }
];

const Testimonials = () => {
  return (
    <section className="testimonials-section">
      <h1 className="testimonials-title">What People Are Saying</h1>
      <div className="testimonials-container">
        {testimonials.map((testimonial, index) => (
          <div className="testimonial-card" key={index}>
            <h3 className="testimonial-name">{testimonial.name}</h3>
            <p className="testimonial-role">{testimonial.role}</p>
            <p className="testimonial-text">"{testimonial.testimonial}"</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Testimonials;
