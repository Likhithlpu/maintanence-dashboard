import React, { useState } from 'react';
import './FeedbackForm.css';

function FeedbackForm() {
  const [feedback, setFeedback] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // You can perform actions with the feedback here
    console.log('Feedback submitted:', feedback);
  };

  return (
    <div className="feedback-container">
      <div className="feedback-form">
        <h2>Feedback Form</h2>
        <form onSubmit={handleSubmit}>
          <div>
            <label htmlFor="name">Name:</label>
            <textarea
              id="name"
              value={feedback}
              onChange={(e) => setFeedback(e.target.value)}
              rows="4"
              cols="50"
            />
          </div>
          <div>
            <label htmlFor="contact">Email or Contact:</label>
            <textarea
              id="contact"
              value={feedback}
              onChange={(e) => setFeedback(e.target.value)}
              rows="4"
              cols="50"
            />
          </div>
          <div>
            <label htmlFor="feedbackText">Feedback:</label>
            <textarea
              id="feedbackText"
              value={feedback}
              onChange={(e) => setFeedback(e.target.value)}
              rows="2"
              cols="30"
            />
          </div>
          <button type="submit">Submit</button>
          <h3>Fixed Issues:</h3>
          <button type="button">INTERNET CONNECTIVITY</button>
          <div style={{ width: '60px' }} />
          <button type="button">POWER SUPPLY</button>
          <div style={{ width: '60px' }} />
          <button type="button">HARDWARE ISSUE</button>
        </form>
      </div>
    </div>
  );
}

export default FeedbackForm;
