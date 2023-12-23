// ComplaintList.jsx

import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './ComplaintList.css'; // Import the CSS file

const ComplaintList = () => {
  // State to store the list of active complaints
  const [complaints, setComplaints] = useState([]);
  const [issue, setIssue] = useState('');
  const [solution, setSolution] = useState('');
  const [showPopup, setShowPopup] = useState(false);
  const [selectedComplaint, setSelectedComplaint] = useState(null);

  const emailOptions = ["anuradha.vattem@research.iiit.ac.in", "vaibhav.naware@research.iiit.ac.in", "prabhakar@research.iiit.ac.in", "ushasree.mogadali@research.iiit.ac.in", "varadasasidhar03@gmail.com", "gaurav.pal@research.iiit.ac.in", ,"vjs.pranavasri@research.iiit.ac.in", "likhithkanigolla@gmail.com"];
  const [selectedEmail, setSelectedEmail] = useState("");
  const [showAssignButton, setShowAssignButton] = useState(false);

  // const [selectedEmail, setSelectedEmail] = useState(null);


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



  const handleAssignClick = async (id) => {

    try {
      await axios.put(`https://smartcitylivinglab.iiit.ac.in/maintenance-dashboard-api/api/complaints/${id}/assign`, {});
      // Update the local state to remove the closed complaint
      setComplaints((prevComplaints) => prevComplaints.filter((complaint) => complaint.sno !== id));
    } catch (error) {
      console.error('Error Assign status in DB:', error);
    }

    try {
      console.log('Selected Complaint Info:', selectedComplaint);
  
      // Update dynamicContent with selected complaint info
      const DynamicContent =`Dear User, I trust this message finds you well. An issue has been identified and requires your attention. Please review the details below and address the matter accordingly. Once the issue is resolved, kindly provide an update to close this ticket.`
      const Verticalid=`Vertical:${selectedComplaint.vertical}`
      const Nodeid=`Node_ID:${selectedComplaint.nodeid}`
      const Complaint=`Complaint:${selectedComplaint.complaint}`
      
      const updatedDynamicContent = `${DynamicContent}
      ${Verticalid}
      ${Nodeid}
      ${Complaint}`;
  
      alert("Sending...");

      // const response = await axios.post('http://localhost:5002/api/send-email', {
       
        const response = await axios.post('https://smartcitylivinglab.iiit.ac.in/maintenance-dashboard-api/api/send-email', {
        to: selectedEmail,
        subject: 'New Ticket Assigned',
        body: updatedDynamicContent,
      });

      // Hide the "Sending" alert
      alert("Email sent successfully");

      console.log('Email sent successfully:', response.data);
    } catch (error) {
      console.error('Error sending email:', error.message);
      // Show an error alert if the email fails to send
      alert("Error sending email");
    }
  };
  
    
// console.log(selectedComplaint);
  // Function to handle closing a complaint
  const handleCloseComplaint = async (id, issue, solution) => {
    try {
      await axios.put(`https://smartcitylivinglab.iiit.ac.in/maintenance-dashboard-api/api/complaints/${id}/close`, {
        issue,
        solution,
      });
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
              <div className="button-table">
                <button onClick={() => {
                  setSelectedComplaint(complaint);
                  setShowPopup(true);
                }}>
                  Close Ticket
                </button>
                <span className="button-space"></span> {/* Add this line for space */}
                <button onClick={() => {setSelectedComplaint(complaint);
                                        setShowAssignButton(true)}}>
                    Assign Ticket
                  </button>
                    </div>
                </td>
              </tr>
            ))}     
          </tbody>
        </table>



        {showAssignButton && (
          <div className="dropdown-container">
            <select
              onChange={(e) => {
                setSelectedEmail(e.target.value);
              }}
            >
              <option value="">Select an email</option>
              {emailOptions.map((email) => (
                <option key={email} value={email}>
                  {email}
                </option>
              ))}
            </select>
            <button onClick={() => setShowAssignButton(false)}>
              Cancel
            </button>
            <button
            onClick={() => {
              if (selectedEmail) {
                console.log("Assigning ticket to:", selectedEmail);
                handleAssignClick();
                setShowAssignButton(false);
              } else {
                alert("Please select an email before assigning.");
              }
            }}
          >
          Assign
        </button>

          </div>
        )}


  {showPopup && (
    <div className="popup-container">
    <center>
      <div className="popup">
        <table className="popup-table">
          <tbody>
            <tr>
              <td>
                <label htmlFor="issue">Issue:</label>
              </td>
              <td>
                <input
                  type="text"
                  id="issue"
                  value={issue}
                  onChange={(e) => setIssue(e.target.value)}
                />
              </td>
            </tr>
            <tr>
              <td>
                <label htmlFor="solution">Solution:</label>
              </td>
              <td className="large-input">
                <input
                  type="text"
                  id="solution"
                  value={solution}
                  onChange={(e) => setSolution(e.target.value)}
                />
              </td>
            </tr>
          </tbody>
        </table>
  
        <div className="button-container">
        <button
  onClick={() => {
    // Check if issue or solution is not entered
    if (!issue || !solution) {
      alert("Please enter all details");
    } else {
      // Save the values in a variable
      const submittedData = {
        issue: issue,
        solution: solution,
      };

      // Print the values to the console
      console.log("Submitted Data:", submittedData);

      // Your existing logic
      handleCloseComplaint(selectedComplaint.sno, issue, solution);
      setShowPopup(false);
      setIssue('');
      setSolution('');
    }
  }}
>
  Submit
</button>
          <button
            onClick={() => {
              setShowPopup(false);
              setIssue('');
              setSolution('');
            }}
          >
            Cancel
          </button>
        </div>
      </div>
    </center>

  
    </div>
  )}
</div>
    
  );
};

export default ComplaintList;
