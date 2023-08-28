import React from 'react';
import './HomePage.css'; // Import the corresponding CSS file for styling
import FeedbackForm from '../components/FeedbackForm/FeedbackForm';
import StackedColumn100Chart from '../components/charts/Stacked Column 100 Chart';
import {AQStatus,EMStatus,SLStatus,SRStatus,WEStatus,WMStatus,WNStatus,CMStatus} from '../components/charts/PieChart';
const HomePage = () => {
  return (
    <div className="home-page">
      <div className="section">
        <div className="split-pane">
          <iframe src="https://smartcitylivinglab.iiit.ac.in/grafana/d-solo/kyLuJXQ7z/summary-view?kiosk=&autofitpanels=&orgId=1&from=1690610926019&to=1692338926019&theme=dark&panelId=16" width="450" height="300" frameborder="0"></iframe>
        </div>
        <div className="split-pane"><StackedColumn100Chart /></div>
      </div>
      <div className="section">
        <div className="split-pane">

          <div className="row">
              <div className="column"><AQStatus /></div>

            <div className="column"><EMStatus /></div>
          </div>
          <div className="row">
            <div className="column"><SLStatus /></div>
            <div className="column"><SRStatus /></div>
          </div>
          <div className="row">
            <div className="column"><WEStatus /></div>
            <div className="column"><WMStatus /></div>
          </div>
          <div className="row">
            <div className="column"><WNStatus /></div>
            <div className="column"><CMStatus /></div>
          </div>
        </div>
      </div>
      <div className="section">
        <FeedbackForm />
      </div>
    </div>
  );
};

export default HomePage;
