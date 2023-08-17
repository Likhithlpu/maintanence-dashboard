import React from 'react';
import './NavigationBar.css';
import Logo1 from './images/iiith.png'; // Import your logo image files
import Logo2 from './images/scrc_logo.png';

const NavigationBar = () => {
    return (
        <nav className="navbar">
            <div className="navbar__logo">
                <img src={Logo1} alt="Logo 1" />
            </div>
            <div className="navbar__logo">
                <img src={Logo2} alt="Logo 2" />
            </div>
            <div className="navbar__dashboard">MAINTENANCE DASHBOARD</div>
        </nav>
    );
};

export default NavigationBar;
