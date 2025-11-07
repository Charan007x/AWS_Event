import React from 'react';
import './Hero.css';
import awsAnimated from '../../assets/awsAnimated.gif';
import awsHero from '../../assets/aws_hero.jpg';

const Hero = () => {
  return (
    <section className="hero" id="home">
      <div className="hero-background">
        <img src={awsHero} alt="AWS Hero Background" className="hero-bg-image" />
      </div>
      <div className="hero-content">
        <div className="aws-smile-logo">
          <div className="smile-circle">
            <img src={awsAnimated} alt="AWS Animated Logo" className="aws-animated" />
          </div>
        </div>
        <h1 className="hero-title">AWS Student Community Day</h1>
        <h2 className="hero-subtitle">MLRIT - 2025</h2>
        <p className="hero-organizer">Organized by AWS Cloud MLR Institute of Technology</p>
        <p className="hero-date">December 7-9, 2025 | Dundigal, India</p>
        <button className="register-btn">
          Register Now <span className="arrow">→</span>
        </button>
      </div>
    </section>
  );
};

export default Hero;
