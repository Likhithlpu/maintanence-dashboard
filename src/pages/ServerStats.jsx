import React from 'react';

const ServerStats = () => {
  return (
    <div>
      <h1>Statistics Page</h1>
      {/* Replace the src attribute with your desired URL */}
      <iframe
        src="https://smartcitylivinglab.iiit.ac.in/grafana/d/fhretuerh2432545/zabbix-server-dashboard?orgId=1&refresh=5s&kiosk&autofitpanels" // Replace with your URL
        title="Statistics"
        width="100%"
        height="750px"
        frameBorder="0"
      ></iframe>
    </div>
  );
};

export default ServerStats;
