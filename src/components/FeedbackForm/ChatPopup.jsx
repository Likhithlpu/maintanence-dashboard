// src/components/ChatPopup.jsx
import React, { useState } from 'react';
import Modal from 'react-modal';
import { FaComments } from 'react-icons/fa';
import FeedbackForm from './ComplaintForm'; // Import the FeedbackForm component

import './ChatPopup.css'; // Import the ChatPopup CSS

const ChatPopup = () => {
  const [isOpen, setIsOpen] = useState(false);

  const togglePopup = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="chat-popup-container">
      <div className="chat-icon" onClick={togglePopup}>
        <FaComments />
      </div>
      <Modal
        isOpen={isOpen}
        onRequestClose={togglePopup}
        className="modal"
        overlayClassName="overlay"
        contentLabel="Chat Popup"
        style={{
          content: {
            position: 'fixed',
            top: 'auto',
            right: '20px',
            bottom: '80px', // Adjust this value to control the distance from the bottom
            left: 'auto',
            width: '300px', // Adjust this value to control the width
            border: 'none', // Remove the outer border
            background: '#333',
            borderRadius: '0', // Remove border radius
            boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.2)',
            zIndex: 1000,
          },
        }}
      >
        <FeedbackForm />
      </Modal>
    </div>
  );
};

export default ChatPopup;
