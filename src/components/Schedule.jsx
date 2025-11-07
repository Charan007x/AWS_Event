import React from 'react';
import './Schedule.css';

const Schedule = () => {
  const timeline = [
    { time: '8:00 AM', event: 'Registration' },
    { time: '9:00 AM', event: 'Inauguration' },
    { time: '9:20 AM', event: 'Keynote Session 1' },
    { time: '10:00 AM', event: 'Keynote Session 2' },
    { time: '10:40 AM', event: 'Refreshments' },
    { time: '11:00 AM', event: 'Morning Sessions' },
    { time: '01:00 PM', event: 'Lunch Break' },
    { time: '02:00 PM', event: 'Afternoon Sessions' }
  ];

  const morningSessions = [
    {
      time: '9:20 AM - 10:00 AM',
      title: 'Keynote 1 - The Future Unfolded: Embracing AI and Cloud to shape Tomorrow\'s Tech Leaders',
      speaker: 'Prabhanjan R'
    },
    {
      time: '10:00 AM - 10:40 AM',
      title: 'Keynote 2 - How Serverless and Communities Changed My Career - and Can Change Yours Too',
      speaker: 'Srusith Repakula'
    },
    {
      time: '11:00 - 11:40 AM',
      title: 'From Code to Containers: Understanding Serverless Beyond Lambda',
      speaker: 'Avinash Dalvi'
    },
    {
      time: '11:40 - 12:20 PM',
      title: 'Generative AI in Action: Real-World Use Cases & Build Your Own Private GPT with AWS Bedrock',
      speaker: 'Amin Ali'
    },
    {
      time: '12:20 - 1:00 PM',
      title: 'Exploring Microservices in AWS - Patterns, Trade-offs & the well-Architected Way',
      speaker: 'Poobalan P'
    }
  ];

  const afternoonSessions = [
    {
      time: '2:00 - 2:40 PM',
      title: 'Building a Serverless RAG Pipeline Using Lambda, S3, and Bedrock',
      speaker: 'Rahul Kumar'
    }
  ];

  return (
    <section className="schedule" id="schedule">
      <div className="schedule-container">
        <h2 className="section-title">Event Schedule</h2>
        <p className="schedule-subtitle">Join us for a full day of learning across specialized tracks</p>

        <div className="schedule-content">
          <div className="timeline-section">
            <h3 className="timeline-title">Main Timeline</h3>
            <div className="timeline">
              {timeline.map((item, index) => (
                <div key={index} className="timeline-item">
                  <div className="timeline-dot"></div>
                  <div className="timeline-time">{item.time}</div>
                  <div className="timeline-event">{item.event}</div>
                </div>
              ))}
            </div>
          </div>

          <div className="sessions-section">
            <h3 className="sessions-title">Session Details</h3>
            
            <div className="session-block">
              <div className="session-header">
                <h4 className="session-period">Morning Sessions</h4>
                <div className="session-toggle">⚡</div>
              </div>
              <table className="session-table">
                <thead>
                  <tr>
                    <th>Time</th>
                    <th>Session Title</th>
                    <th>Speaker</th>
                  </tr>
                </thead>
                <tbody>
                  {morningSessions.map((session, index) => (
                    <tr key={index}>
                      <td className="session-time">{session.time}</td>
                      <td className="session-title">{session.title}</td>
                      <td className="session-speaker">{session.speaker}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <div className="session-block">
              <div className="session-header">
                <h4 className="session-period">Afternoon Sessions</h4>
                <div className="session-toggle">⚡</div>
              </div>
              <table className="session-table">
                <thead>
                  <tr>
                    <th>Time</th>
                    <th>Session Title</th>
                    <th>Speaker</th>
                  </tr>
                </thead>
                <tbody>
                  {afternoonSessions.map((session, index) => (
                    <tr key={index}>
                      <td className="session-time">{session.time}</td>
                      <td className="session-title">{session.title}</td>
                      <td className="session-speaker">{session.speaker}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Schedule;
