import React from 'react';
import './About.css';

const About = () => {
  const features = [
    {
      icon: '🎓',
      title: 'Expert Learning',
      description: 'Learn from industry experts and AWS professionals with real-world experience in cloud and modern architectures.'
    },
    {
      icon: '🤝',
      title: 'Community Networking',
      description: 'Connect with like-minded students, professionals, and enthusiasts passionate about cloud and innovation.'
    },
    {
      icon: '🎁',
      title: 'Free Swag',
      description: 'Claim your complimentary AWS community swag kit and enjoy exclusive items and community perks.'
    },
    {
      icon: '🚀',
      title: 'Innovation Focus',
      description: 'Explore cutting-edge technologies, emerging trends, and best practices in cloud computing and AWS solutions.'
    }
  ];

  return (
    <section className="about" id="about">
      <div className="about-container">
        <div className="about-header">
          <h2 className="section-title">About</h2>
          <h3 className="section-subtitle">AWS Student Community Day 2025</h3>
        </div>
        
        <div className="about-content">
          <p className="about-intro">
            A day dedicated to learning, networking, and celebrating the AWS community
          </p>
          
          <p className="about-description">
            AWS Student Community Day - MLRIT 2025 is the premier gathering for those passionate about cloud computing and 
            technology innovation. This event brings together aspiring cloud professionals, experienced practitioners, and industry leaders to 
            share knowledge, build connections, and explore the latest in AWS technologies.
          </p>
          
          <p className="about-description">
            Join us for a day of learning, networking, and discovery as we explore the future of cloud technology together. Connect with 
            fellow students, meet industry professionals, and be part of a community that's shaping the digital world.
          </p>
        </div>

        <div className="features-grid">
          {features.map((feature, index) => (
            <div key={index} className="feature-card">
              <div className="feature-icon">{feature.icon}</div>
              <h4 className="feature-title">{feature.title}</h4>
              <p className="feature-description">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
