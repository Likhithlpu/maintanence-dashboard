import React from 'react';
import './NavigationBar.css';

const NavigationBar = () => {
    return (
        <nav className="navbar">
            <div className="navbar__logo">Logo 1</div>
            <div className="navbar__logo">Logo 2</div>
            <div className="navbar__dashboard">Maintenance Dashboard</div>
        </nav>
    );
};

export default NavigationBar;
