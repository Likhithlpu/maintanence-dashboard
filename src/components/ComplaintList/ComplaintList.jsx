// ComplaintList.jsx

import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './ComplaintList.css'; // Import the CSS file

const ComplaintList = () => {
  // State to store the list of active complaints
  const [complaints, setComplaints] = useState([]);

  // Fetch active complaints when the component mounts
  useEffect(() => {
    const fetchComplaints = async () => {
      try {
        const response = await axios.get('https://smartcitylivinglab.iiit.ac.in/maintenance-dashboard-api/api/complaints/active');
        setComplaints(response.data);
      } catch (error) {
        console.error('Error fetching complaints:', error);
      }
    };

    fetchComplaints();
  }, []);

  // Function to handle closing a complaint
  const handleCloseComplaint = async (id) => {
    try {
      await axios.put(`https://smartcitylivinglab.iiit.ac.in/maintenance-dashboard-api/api/complaints/${id}/close`);
      // Update the local state to remove the closed complaint
      setComplaints((prevComplaints) => prevComplaints.filter((complaint) => complaint.sno !== id));
    } catch (error) {
      console.error('Error closing complaint:', error);
    }
  };

  return (
    <div className="table-container">
      <table>
        <thead>
          <tr>
            <th>S.No</th>
            <th>Name</th>
            <th>Email</th>
            <th>Contact Number</th>
            <th>Vertical</th>
            <th>Node ID</th>
            <th>Complaint</th>
            <th>Status</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {complaints.map((complaint) => (
            <tr key={complaint.sno}>
              <td>{complaint.sno}</td>
              <td>{complaint.name}</td>
              <td>{complaint.email}</td>
              <td>{complaint.contactnumber}</td>
              <td>{complaint.vertical}</td>
              <td>{complaint.nodeid}</td>
              <td>{complaint.complaint}</td>
              <td>{complaint.status}</td>
              <td>
                <button onClick={() => handleCloseComplaint(complaint.sno)}>
                  Close Ticket
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ComplaintList;
