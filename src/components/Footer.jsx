import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-main">
          <div className="footer-section">
            <div className="footer-logo">
              <span className="aws-logo">aws</span>
              <div className="footer-title">
                <span className="community-day">Student Community Day</span>
                <span className="tirupati">MLRIT - 2025</span>
              </div>
            </div>
          </div>

          <div className="footer-section">
            <h3 className="footer-heading">Contact Us</h3>
            <div className="contact-item">
              <span className="contact-icon">✉️</span>
              <div>
                <p className="contact-label">Email</p>
                <a href="mailto:awsclubmbu@gmail.com" className="contact-link">awsclubmbu@gmail.com</a>
              </div>
            </div>
            <div className="contact-item">
              <span className="contact-icon">📞</span>
              <div>
                <p className="contact-label">Phone</p>
                <p className="contact-text">+91 7842348377 - Rahul Kothuri</p>
                <p className="contact-text">+91 9502285901 - Deepika Sidda</p>
              </div>
            </div>
          </div>

          <div className="footer-section">
            <h3 className="footer-heading">Event Location</h3>
            <div className="location-info">
              <span className="location-icon">📍</span>
              <div>
                <p className="location-text">MLR Institute of Technology</p>
                <p className="location-text">Dundigal, Hyderabad</p>
                <p className="location-text">Telangana, India</p>
              </div>
            </div>
            <div className="event-details">
              <p>⭐ Event Time: 8:00 AM - 5:00 PM</p>
              <p>📅 December 7-9, 2025</p>
            </div>
            <button className="directions-btn">📍 Get Directions</button>
          </div>
        </div>

        <div className="footer-links">
          <a href="#about">About</a>
          <a href="#speakers">Speakers</a>
          <a href="#schedule">Schedule</a>
          <a href="#faq">FAQ</a>
          <a href="#register">Register</a>
        </div>

        <div className="footer-bottom">
          <p>© 2025 AWS Student Community Day - MLRIT. All rights reserved. | Organized by AWS Cloud Club at MLR Institute of Technology</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
