import React from 'react';
import './FAQ.css';

const FAQ = () => {
  const faqs = [
    {
      question: 'What is AWS Student Community Day?',
      answer: 'AWS Student Community Day is a free event organized by AWS Cloud Club students to share knowledge about cloud computing, networking, and AWS services. It\'s designed to help students learn, connect, and build their cloud skills.'
    },
    {
      question: 'Who can attend this event?',
      answer: 'This event is open to all students, professionals, and cloud enthusiasts who are interested in learning about AWS and cloud technologies. Whether you\'re a beginner or have experience, everyone is welcome!'
    },
    {
      question: 'Is there any registration fee?',
      answer: 'Yes, there is a registration fee of ₹300 per person. This includes full day access to all sessions, networking opportunities, AWS Certificate of participation, AWS Branded T-Shirts, workshop materials, and refreshments.'
    },
    {
      question: 'What should I bring to the event?',
      answer: 'Bring your laptop for hands-on workshops, a valid ID for registration, and your enthusiasm to learn and network! Don\'t forget your registration confirmation.'
    }
  ];

  return (
    <section className="faq">
      <div className="faq-container">
        <h2 className="section-title">
          <span className="highlight">Frequently Asked Questions</span>
        </h2>
        <p className="faq-subtitle">
          Got questions? We've got answers! Find everything you need to know about AWS Student Community Day.
        </p>

        <div className="faq-list">
          {faqs.map((faq, index) => (
            <details key={index} className="faq-item">
              <summary className="faq-question">
                {faq.question}
                <span className="faq-icon">▼</span>
              </summary>
              <div className="faq-answer">{faq.answer}</div>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
