import React from 'react';
import './HomePage.css'; // Import the corresponding CSS file for styling
import FeedbackForm from '../components/FeedbackForm/FeedbackForm';


const HomePage = () => {
  return (
    <div className="home-page">
      <div className="section">
        <div className="split-pane"><iframe src="https://smartcitylivinglab.iiit.ac.in/grafana/d-solo/kyLuJXQ7z/summary-view?kiosk=&autofitpanels=&orgId=1&from=1690610926019&to=1692338926019&theme=dark&panelId=16" width="350" height="300" frameborder="0"></iframe></div>
        <div className="split-pane">Pane 2</div>
      </div>
      <div className="section single-pane">Pane 3</div>
      <div className="section">
      <FeedbackForm />
      </div>
    </div>
  );
};

export default HomePage;
