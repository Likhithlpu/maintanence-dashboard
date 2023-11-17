// feedbackList.jsx

import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './ComplaintList.css'; // Import the CSS file

const FeedbackList = () => {
  // State to store the list of active feedback
  const [feedback, setfeedback] = useState([]);

  // Fetch active feedback when the component mounts
  useEffect(() => {
    const fetchfeedback = async () => {
      try {
        const response = await axios.get('https://smartcitylivinglab.iiit.ac.in/maintenance-dashboard-api/api/feedback');
        // const response = await axios.get('http://localhost:5002/api/feedback');
        setfeedback(response.data);
      } catch (error) {
        console.error('Error fetching feedback:', error);
      }
    };

    fetchfeedback();
  }, []);


  return (
    <div className="table-container">
      <table>
        <thead>
          <tr>
            {/* <th>S.No</th> */}
            <th>Name</th>
            <th>Email</th>
            <th>Contact Number</th>
            <th>feedback</th>
          </tr>
        </thead>
        <tbody>
          {feedback.map((feedback) => (
            <tr key={feedback.sno}>
              {/* <td>{feedback.sno}</td> */}
              <td>{feedback.name}</td>
              <td>{feedback.email}</td>
              <td>{feedback.contactnumber}</td>
              <td>{feedback.feedback}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default FeedbackList;
