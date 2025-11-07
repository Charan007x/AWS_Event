import React from 'react';
import './Sponsors.css';

const Sponsors = () => {
  return (
    <section className="sponsors">
      <div className="sponsors-container">
        <h2 className="section-title">
          Our <span className="highlight">Sponsors</span>
        </h2>
        <p className="sponsors-subtitle">
          Amazing partners are joining us to make AWS Student Community Day possible
        </p>

        <div className="sponsors-main">
          <div className="sponsor-card-large">
            <div className="sponsor-logo-text">aws</div>
            <div className="aws-smile">&#x2192;</div>
          </div>
          <div className="sponsor-card-large">
            <div className="sponsor-logo-text">KONFHUB</div>
          </div>
          <div className="sponsor-card-large">
            <div className="sponsor-logo-text">WHIZLABS</div>
          </div>
        </div>

        <div className="community-partners">
          <h3 className="partners-title">Community Partners</h3>
        </div>
      </div>
    </section>
  );
};

export default Sponsors;
