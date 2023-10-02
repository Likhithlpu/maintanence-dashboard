import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import AppLayout from './components/layout/AppLayout';
import NavigationBar from './components/navigation/Navigation';
import 'boxicons/css/boxicons.min.css';

import Air from './pages/AirQuality';
import Energy from './pages/EnergyMonitoring';
import Solar from './pages/SolarMonitoring';
import SmartRooms from './pages/SmartRooms-AC';
import Weather from './pages/WeatherMonitoring';
import Water from './pages/WaterMonitoring-WaterDistribution';
import Wisun from './pages/WiSUN';
import Crowd from './pages/CrowdMonitoring';
import SmartRoomAC from './pages/SmartRooms-AC';
import SmartRoomAQ from './pages/SmartRooms-AQ';
import SmartRoomEM from './pages/SmartRooms-EM';
import SmartRoomOC from './pages/SmartRooms-OC';

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
                            
                            <Route path="AQ" element={<Air />} />
                            <Route path="EM" element={<Energy />} />

                            <Route path="SL" element={<Solar />} />

                            <Route path="SR-AC" element={<SmartRoomAC />} />
                            <Route path="SR-OC" element={<SmartRoomOC />} />
                            <Route path="SR-AQ" element={<SmartRoomAQ />} />
                            <Route path="SR-EM" element={<SmartRoomEM />} />

                            <Route path="WE" element={<Weather />} />
                            <Route path="WM" element={<Water />} />

                            <Route path="WN" element={<Wisun />} />
                            <Route path="CM" element={<Crowd />} />
                        </Route>
                    </Routes>
                </div>
            </div>
        </BrowserRouter>
    );
}

export default App;
