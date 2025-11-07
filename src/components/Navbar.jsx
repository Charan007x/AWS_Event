import React from 'react';
import './Navbar.css';
import awsWhiteLogo from '../../assets/awswhite.png';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="nav-container">
        <div className="nav-logo">
          <img src={awsWhiteLogo} alt="AWS Logo" className="aws-logo-img" />
          <div className="nav-title">
            <span className="community-day">Community Day</span>
            <span className="tirupati">MLRIT 2025</span>
          </div>
        </div>
        <ul className="nav-menu">
          <li><a href="#home">Home</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#registration">Registration</a></li>
          <li><a href="#schedule">Schedule</a></li>
          <li><a href="#speakers">Speakers</a></li>
          <li><a href="#organizers">Organizers</a></li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
