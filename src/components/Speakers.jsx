import React from 'react';
import './Speakers.css';

const Speakers = () => {
  const speakers = [
    {
      name: 'Amin Ali',
      company: 'Target Australia',
      role: 'Software Engineer',
      image: '👨‍💻'
    },
    {
      name: 'Avinash Dalvi',
      company: 'Nushift Technologies',
      role: 'Head of Technology',
      image: '👨‍💼'
    },
    {
      name: 'Keerthivasan Kannan',
      company: 'ANZ',
      role: 'Senior Cloud Engineer',
      image: '👨‍💻'
    },
    {
      name: 'Prabhanjan R',
      company: 'JPMorgan Chase & Co.',
      role: 'Senior Vice President of Software',
      image: '👨‍💼'
    },
    {
      name: 'Poobalan P',
      company: 'FactSet',
      role: 'Software Engineer',
      image: '👨‍💻'
    },
    {
      name: 'Raghul Gopal',
      company: 'Logitech',
      role: 'Data Scientist',
      image: '👨‍💼'
    },
    {
      name: 'Rahul Kumar',
      company: 'AntStack',
      role: 'Member of Technical Staff',
      image: '👨‍💻'
    },
    {
      name: 'Srushith R',
      company: 'KonfHub',
      role: 'Head of Engineering',
      image: '👨‍💼'
    },
    {
      name: 'Yeshwanth L M',
      company: 'Confluent',
      role: 'Solutions Engineer',
      image: '👨‍💻'
    }
  ];

  return (
    <section className="speakers" id="speakers">
      <div className="speakers-container">
        <h2 className="section-title">Meet Our <span className="highlight">Speakers</span></h2>
        <p className="speakers-subtitle">
          Learn from industry experts and thought leaders who are shaping the future of cloud computing and technology
        </p>

        <div className="speakers-grid">
          {speakers.map((speaker, index) => (
            <div key={index} className="speaker-card">
              <div className="speaker-image">
                <div className="speaker-avatar">{speaker.image}</div>
              </div>
              <h3 className="speaker-name">{speaker.name}</h3>
              <p className="speaker-company">{speaker.company}</p>
              <p className="speaker-role">{speaker.role}</p>
              <div className="speaker-social">
                <a href="#" className="linkedin-btn">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="white">
                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                  </svg>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Speakers;
