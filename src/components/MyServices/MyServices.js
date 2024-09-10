import React from 'react';
import './MyServices.css';

const services = [
  { title: 'Web Development', description: 'I specialize in building fast, secure, and modern websites using HTML, CSS, JavaScript, and frameworks like React. From small business sites to complex web apps, I ensure your online presence is optimized and user-friendly.', buttonText: 'Book Now' },
  { title: 'Mobile App Development', description: 'I develop high-performance mobile apps for both iOS and Android platforms. Whether you need a consumer app or an enterprise-grade solution, I build apps that work seamlessly across devices.', buttonText: 'Hire Me' },
  { title: 'API Integration', description: 'Integrating third-party APIs or building custom APIs is key to enhancing functionality. I provide seamless API integrations to improve your apps’ performance and features.', buttonText: 'Book Now' },
  { title: 'Cloud Solutions', description: 'Leverage cloud computing for scalability and security. I implement cloud-based infrastructure solutions that are both robust and efficient for businesses of all sizes.', buttonText: 'Hire Me' },
  { title: 'Tech Consultation', description: 'Need guidance on your next tech project? I offer expert consultations to help you select the best technology stack, define project goals, and streamline implementation.', buttonText: 'Book Now' },
  { title: 'UX/UI Design', description: 'Great design is key to user satisfaction. I create visually stunning and user-centric designs that are tailored to provide an excellent user experience and aesthetic appeal.', buttonText: 'Hire Me' },
  { title: 'Data Analytics', description: 'Data-driven decision-making is the future. I help you analyze and interpret your business data, offering insights that can help optimize processes and improve performance.', buttonText: 'Book Now' },
  { title: 'Cybersecurity', description: 'Protect your business with cutting-edge security solutions. I provide security assessments, vulnerability testing, and solutions to safeguard your digital assets.', buttonText: 'Hire Me' },
  { title: 'AI Solutions', description: 'Transform your business by automating repetitive tasks and enhancing decision-making with AI. I build and implement custom AI solutions to optimize your workflow.', buttonText: 'Book Now' },
  { title: 'Digital Marketing', description: 'Reach your target audience with precision. I design and implement digital marketing campaigns that drive engagement, increase brand visibility, and boost revenue.', buttonText: 'Hire Me' },
  { title: 'Blockchain Development', description: 'Develop secure, decentralized applications using blockchain technology. From smart contracts to cryptocurrency integration, I help build solutions on the blockchain.', buttonText: 'Book Now' },
  { title: 'DevOps Services', description: 'Improve your software development lifecycle with DevOps practices. I implement CI/CD pipelines, automate deployments, and optimize cloud infrastructure.', buttonText: 'Hire Me' },
];

const MyServices = () => {
  return (
    <div className="my-services-container">
      <h2 className="my-services-title">My Services</h2>
      <div className="my-services-content">
        {services.map((service, index) => (
          <div key={index} className="service-card">
            <h3 className="service-title">{service.title}</h3>
            <p className="service-description">{service.description}</p>
            <button className="service-button">{service.buttonText}</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MyServices;
