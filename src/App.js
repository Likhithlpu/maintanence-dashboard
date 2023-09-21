import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import AppLayout from './components/layout/AppLayout';
import NavigationBar from './components/navigation/Navigation';
import 'boxicons/css/boxicons.min.css';

import Air from './pages/AirQuality';
import Energy from './pages/EnergyMonitoring';
import Solar from './pages/SolarMonitoring';
import SmartRooms from './pages/SmartRooms';
import Weather from './pages/WeatherMonitoring';
import Water from './pages/WaterMonitoring';
import Wisun from './pages/WiSUN';
import Crowd from './pages/CrowdMonitoring';


import HomePage from './pages/HomePage';
import './App.css';

function App() {
    return (
        <BrowserRouter>
            <div id="root">
                <NavigationBar />
                
                <div className="content">
                    <Routes>
                        <Route path="/maintenance-dashboard/*" element={<AppLayout />}>
                            <Route index element={<HomePage />} />
                            <Route path="aq" element={<Air />} />
                            <Route path="em" element={<Energy />} />

                            <Route path="sl" element={<Solar />} />
                            <Route path="sr" element={<SmartRooms />} />

                            <Route path="we" element={<Weather />} />
                            <Route path="wm" element={<Water />} />

                            <Route path="wn" element={<Wisun />} />
                            <Route path="cm" element={<Crowd />} />
                        </Route>
                    </Routes>
                </div>
            </div>
        </BrowserRouter>
    );
}

export default App;
