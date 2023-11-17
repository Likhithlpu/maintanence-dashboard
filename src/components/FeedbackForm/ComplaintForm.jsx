import axios from 'axios';
import React, { useState } from 'react';
import { FiUser, FiMail, FiPhone, FiMessageSquare, FiBox, FiArrowLeft } from 'react-icons/fi';
import { BsLayoutTextSidebarReverse } from 'react-icons/bs';
import { Card, Form, InputGroup, Row, Col, Button } from 'react-bootstrap';
import './ComplaintForm.css';

const api = axios.create({
  baseURL: 'https://smartcitylivinglab.iiit.ac.in/maintenance-dashboard-api',
  // baseURL: 'http://127.0.0.1:5002/',
});

const ComplaintForm = () => {
  const [stage, setStage] = useState(1);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [contactNumber, setContactNumber] = useState('');
  const [Vertical, setVertical] = useState('');
  const [nodeId, setnodeId] = useState('');
  const [complaint, setComplaint] = useState('');
  const [feedback, setFeedback] = useState('');
  const [feedbackType, setFeedbackType] = useState('complaint');
  const [isSubmitted, setIsSubmitted] = useState(false);

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

  const handleFeedbackChange = (e) => {
    setFeedback(e.target.value);
  };

  const handleNodeidChange = (e) => {
    setnodeId(e.target.value);
  };

  const handleVerticalChange = (e) => {
    setVertical(e.target.value);
  };

  const handleFeedbackTypeChange = (e) => {
    setFeedbackType(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const apiEndpoint =
        feedbackType === 'feedback' ? '/api/feedback' : '/api/complaints';

    const requestData = feedbackType === 'feedback'
        ? { name, email, contactNumber, feedback }
        : { name, email, contactNumber, Vertical, nodeId, complaint };
      
    await api.post(apiEndpoint, requestData);
    setIsSubmitted(true);
    } catch (error) {
      console.error('Error storing complaint/feedback:', error);
    }
  };

  const renderForm = () => {
    switch (stage) {
      case 1:
        return (
          <div>
            <h2 className="form-title">Basic Information</h2>
            <Row>
              <Col>
                <Form.Group className="mb-3">
                  <Form.Label>
                    <FiUser /> Name:
                  </Form.Label>
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
                  <Form.Label>
                    <FiMail /> Email:
                  </Form.Label>
                  <InputGroup>
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
                  <Form.Label>
                    <FiPhone /> Phone:
                  </Form.Label>
                  <InputGroup>
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
                  <Form.Label>
                    <FiMessageSquare /> Type of Request
                  </Form.Label>
                  <InputGroup>
                    <Form.Select
                      value={feedbackType}
                      onChange={handleFeedbackTypeChange}
                      className="form-input"
                      required
                    >
                      <option value="complaint">Complaint</option>
                      <option value="feedback">Feedback</option>
                    </Form.Select>
                  </InputGroup>
                </Form.Group>
              </Col>
            </Row>
            <button
              type="button"
              className="form-submit-button"
              onClick={() => setStage(2)}
            >
              Next
            </button>
          </div>
        );

      case 2:
        return (
          <div>
            <div className="header-with-back">
              <FiArrowLeft
                className="back-arrow"
                onClick={() => setStage(1)}
              />
              <h2 className="form-title">
                {feedbackType === 'feedback' ? 'Feedback' : 'Complaint'} Form
              </h2>
            </div>
            {feedbackType === 'feedback' ? (
              <Row>
                <Col>
                  <Form.Group className="mb-3">
                    <Form.Label>
                      <FiMessageSquare /> Feedback:
                    </Form.Label>
                    <InputGroup>
                      <textarea
                        value={feedback}
                        onChange={handleFeedbackChange}
                        placeholder="Enter your feedback..."
                        className="form-input"
                        required
                      />
                    </InputGroup>
                  </Form.Group>
                </Col>
              </Row>
            ) : (
              <div>
                <Row>
                  <Col>
                    <Form.Group className="mb-3">
                      <Form.Label>
                        <FiBox /> Vertical Name:
                      </Form.Label>
                      <InputGroup>
                        <Form.Select
                          value={Vertical}
                          onChange={handleVerticalChange}
                          className="form-input"
                          required
                        >
                          <option value="AQ">Air Quality</option>
                          <option value="SL">Solar Monitoring</option>
                          <option value="SL-Energy Meter">Solar Energy Meter</option>
                          <option value="WM-WD">Water Distribution</option>
                          <option value="WM-WF-Shenitech">Water Flow Shenitech</option>
                          <option value="WM-WF-Retrofit">Water Flow Retrofit</option>
                          <option value="WM-WF-Kristnam">Water Flow Kristnam</option>
                          <option value="SR-AC">Smart Room Air Conditioner</option>
                          <option value="SR-AQ">Smart Room Air Quality</option>
                          <option value="SR-EM">Smart Room Energy Meter</option>
                          <option value="SR-OC">Smart Room Occupancy</option>
                          <option value="CM">Crowd Monitoring</option>
                          <option value="WN-FAN10FSK">Wi-SUN FAN10FSK</option>
                          <option value="WN-FAN11FSK">Wi-SUN FAN11FSK</option>
                          <option value="WN-FAN11OFDM">Wi-SUN FAN11OFDM</option>
                          {/* Add more options as needed */}
                        </Form.Select>
                      </InputGroup>
                    </Form.Group>
                  </Col>
                </Row>
                <Row>
                  <Col>
                    <Form.Group className="mb-3">
                      <Form.Label>
                        <BsLayoutTextSidebarReverse /> Node ID:
                      </Form.Label>
                      <InputGroup>
                        <input
                          type="text"
                          placeholder="E.g. AQ-AN00-00"
                          value={nodeId}
                          onChange={handleNodeidChange}
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
                      <Form.Label>
                        <FiMessageSquare /> Complaint:
                      </Form.Label>
                      <InputGroup>
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
              </div>
            )}
            <div>

              <button type="submit" className="form-submit-button">
                Submit Review
              </button>
            </div>
          </div>
        );

      default:
        return null;
    }
  };

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
                onClick={() => window.location.reload()}
              >
                Submit a New Request
              </Button>
            </div>
          </Card.Body>
        </Card>
      </div>
    );
  }

  return <form onSubmit={handleSubmit}>{renderForm()}</form>;
};

export default ComplaintForm;
