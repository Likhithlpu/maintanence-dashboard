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
            <label htmlFor="feedback">Name:</label>
            <textarea
              id="feedback"
              value={feedback}
              onChange={(e) => setFeedback(e.target.value)}
              rows="4"
              cols="50"
            />   
            <label htmlFor="feedback">Email or Contact:</label>
            <textarea
              id="feedback"
              value={feedback}
              onChange={(e) => setFeedback(e.target.value)}
              rows="4"
              cols="50"
              />
            <label htmlFor="feedback">Feedback:</label>
            <textarea
              id="feedback"
              value={feedback}
              onChange={(e) => setFeedback(e.target.value)}
              rows="2"
              cols="30"
            />
        </div>
        <button type="submit">Submit </button>
        <h3>Fixed Issues:</h3>
        <button type="issue">INTERNET CONNECTIVITY </button>
        <div style={{ width: '60px' }} />
        <button type="issue">POWER SUPPLY </button>
        <div style={{ width: '60px' }} />
        <button type="issue">HARDWARE ISSUE </button>

      </form>
    </div>
    </div>
  );
}

export default FeedbackForm;
