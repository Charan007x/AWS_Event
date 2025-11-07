import React, { useState, useEffect } from 'react';
import './Registration.css';

const Registration = () => {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });

  useEffect(() => {
    const targetDate = new Date('2025-12-07T09:00:00').getTime();

    const updateCountdown = () => {
      const now = new Date().getTime();
      const difference = targetDate - now;

      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
          minutes: Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((difference % (1000 * 60)) / 1000)
        });
      } else {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
      }
    };

    updateCountdown();
    const interval = setInterval(updateCountdown, 1000);

    return () => clearInterval(interval);
  }, []);

  const included = [
    'Full day access to all sessions',
    'Networking opportunities',
    'AWS Certificate of participation',
    'AWS Branded T-Shirts',
    'Workshop materials included',
    'Refreshments for everyone'
  ];

  return (
    <section className="registration" id="registration">
      <div className="registration-bg">
        <div className="countdown-section">
          <h3 className="countdown-title">AWS Community Day 2025</h3>
          <p className="countdown-subtitle">December 7-9, 2025 • 9:00 AM • MLR Institute of Technology, Dundigal</p>
          <div className="countdown-timer">
            <div className="time-box">
              <div className="time-value">{String(timeLeft.days).padStart(2, '0')}</div>
              <div className="time-label">DAYS</div>
            </div>
            <div className="time-box">
              <div className="time-value">{String(timeLeft.hours).padStart(2, '0')}</div>
              <div className="time-label">HOURS</div>
            </div>
            <div className="time-box">
              <div className="time-value">{String(timeLeft.minutes).padStart(2, '0')}</div>
              <div className="time-label">MINUTES</div>
            </div>
            <div className="time-box">
              <div className="time-value">{String(timeLeft.seconds).padStart(2, '0')}</div>
              <div className="time-label">SECONDS</div>
            </div>
          </div>
        </div>
      </div>

      <div className="registration-container">
        <h2 className="section-title-dark">Registration</h2>
        <p className="registration-intro">
          Register now to secure your spot at the AWS Student Community Day MLRIT 2025!
        </p>

        <div className="alert-box">
          <p className="alert-title">🔴 Limited to 400 seats only! 🔴</p>
          <p className="alert-text">Registration is on a first come, first serve basis. Don't miss out!</p>
        </div>

        <div className="registration-card">
          <div className="price-badge">REGULAR PRICE</div>
          <div className="registration-left">
            <h3 className="registration-title">AWS Community Day MLRIT Registration</h3>
            <p className="pass-type">INDIVIDUAL PASS</p>
            <div className="price">₹300</div>
            <p className="price-note">Regular pricing (Early Bird ended)</p>
          </div>

          <div className="registration-right">
            <h4 className="included-title">What's Included:</h4>
            <ul className="included-list">
              {included.map((item, index) => (
                <li key={index}>
                  <span className="check-icon">✓</span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <button className="register-btn-main">Register Now</button>
      </div>
    </section>
  );
};

export default Registration;
