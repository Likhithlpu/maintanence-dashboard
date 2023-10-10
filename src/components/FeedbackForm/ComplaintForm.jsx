// src/components/ComplaintForm.js
import axios from 'axios';
import React, { useState } from 'react';
import { Card, Button, Form, Alert, InputGroup, Row, Col } from 'react-bootstrap';
import { FiUser, FiMail, FiPhone, FiMessageSquare,FiBox } from 'react-icons/fi'; // Replace with your Flaticon icons
import { BsLayoutTextSidebarReverse } from 'react-icons/bs';
import './ComplaintForm.css';

const api = axios.create({
  baseURL: 'http://localhost:5000', // Replace with your actual backend URL
});

const ComplaintForm = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [contactNumber, setContactNumber] = useState('');
  const [Vertical, setVertical] = useState('');
  const [nodeId, setnodeId] = useState('');
  const [complaint, setComplaint] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false); // Track submission state

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handleContactNumberChange = (e) => {
    setContactNumber(e.target.value);
  };

  const handleComplaintChange = (e) => {
    setComplaint(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // Send the complaint data to the server
      await api.post('/api/complaints', {
        name,
        email,
        contactNumber,
        complaint,
      });
      setIsSubmitted(true); // Set the submission state to true
    } catch (error) {
      console.error('Error storing complaint:', error);
      // You can add code here to handle errors, such as displaying an error message.
    }
  };

  // Render confirmation message if the form is submitted
  if (isSubmitted) {
    return (
      <div className="confirmation-message">
        <Card bg="dark" text="white">
          <Card.Body>
            <div className="padding10px">
              <div className="circle">
                <div className="checkmark"></div>
              </div>
            </div>
            <Card.Text>Thank you for providing the feedback</Card.Text>
            <Form.Text muted>
              We will work towards improving your experience
            </Form.Text>
            <div className="padding10px">
              <Button
                className="btn_purp"
                onClick={() => window.location.reload()} // Reload the page to submit a new request
              >
                Submit a New Request
              </Button>
            </div>
          </Card.Body>
        </Card>
      </div>
    );
  }

  // Render the form if it's not submitted
  return (
    <form onSubmit={handleSubmit} className="complaint-form">
      <h2 className="form-title">Feedback Form</h2>
      <Row>
        <Col>
          <Form.Group className="mb-3">
            <Form.Label><FiUser />  Name:</Form.Label>
            <InputGroup>
              <input
                type="text"
                placeholder="E.g. Jon Snow"
                value={name}
                onChange={handleNameChange}
                className="form-input"
                required
              />
            </InputGroup>
          </Form.Group>
        </Col>
      </Row>
      <Row>
        <Col>
          <Form.Group className="mb-3">
            <Form.Label><FiMail />  Email:</Form.Label>
            <InputGroup>
              <InputGroup.Text>
                
              </InputGroup.Text>
              <input
                type="email"
                placeholder="E.g. abc@gmail.com"
                value={email}
                onChange={handleEmailChange}
                className="form-input"
                required
              />
            </InputGroup>
          </Form.Group>
        </Col>
      </Row>
      <Row>
        <Col>
          <Form.Group className="mb-3">
            <Form.Label><FiPhone /> Phone:</Form.Label>
            <InputGroup>
              <InputGroup.Text>
                
              </InputGroup.Text>
              <input
                type="text"
                placeholder="E.g. 9999999999"
                value={contactNumber}
                onChange={handleContactNumberChange}
                className="form-input"
                required
              />
            </InputGroup>
          </Form.Group>
        </Col>
      </Row>
      <Row>
        <Col>
          <Form.Group className="mb-3">
            <Form.Label><FiBox /> Vertical Name:</Form.Label>
            <InputGroup>
              <InputGroup.Text>
                
              </InputGroup.Text>
              <input
                type="text"
                placeholder="E.g. AQ"
                value={Vertical}
                onChange={handleContactNumberChange}
                className="form-input"
                required
              />
            </InputGroup>
          </Form.Group>
        </Col>
      </Row>
      <Row>
        <Col>
          <Form.Group className="mb-3">
            <Form.Label><BsLayoutTextSidebarReverse /> Node ID:</Form.Label>
            <InputGroup>
              <InputGroup.Text>
                
              </InputGroup.Text>
              <input
                type="text"
                placeholder="E.g. AQ-AN00-00"
                value={nodeId}
                onChange={handleContactNumberChange}
                className="form-input"
                required
              />
            </InputGroup>
          </Form.Group>
        </Col>
      </Row>
      <Row>
        <Col>
          <Form.Group className="mb-3">
            <Form.Label><FiMessageSquare /> Complaint/Feedback:</Form.Label>
            <InputGroup>
              <InputGroup.Text>
              </InputGroup.Text>
              <textarea
                value={complaint}
                onChange={handleComplaintChange}
                placeholder="Enter your complaint..."
                className="form-input"
                required
              />
            </InputGroup>
          </Form.Group>
        </Col>
      </Row>
      <button type="submit" className="form-submit-button">
        Submit Review
      </button>
    </form>
  );
};

export default ComplaintForm;
