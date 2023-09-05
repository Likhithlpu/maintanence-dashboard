import React from 'react';
import './HomePage.css'; // Import the corresponding CSS file for styling
import FeedbackForm from '../components/FeedbackForm/FeedbackForm';
import StackedColumn100Chart from '../components/charts/Stacked Column 100 Chart';
import {AQStatus,EMStatus,SLStatus,SRStatus,WEStatus,WMStatus,WNStatus,CMStatus} from '../components/charts/PieChart';
const HomePage = () => {
  return (
    <div className="home-page">
          <iframe src="https://smartcitylivinglab.iiit.ac.in/grafana/d/d50007f3-2407-498f-8de0-e65865e24d80/home-page?&kiosk&autofitpanels&orgId=1" width="100%" height="100%" frameborder="0"></iframe>
    </div>
  );
};

export default HomePage;
