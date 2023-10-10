import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import AppLayout from './components/layout/AppLayout';
import NavigationBar from './components/navigation/Navigation';
import 'boxicons/css/boxicons.min.css';

import Air from './pages/AirQuality';
import Energy from './pages/EnergyMonitoring';
import Solar from './pages/SolarMonitoring';
import Weather from './pages/WeatherMonitoring';
import WaterDistribution from './pages/WaterMonitoring-WaterDistribution';
import WaterFlow from './pages/WaterMonitoring-WaterFlow';
import Crowd from './pages/CrowdMonitoring';
import SmartRoomAC from './pages/SmartRooms-AC';
import SmartRoomAQ from './pages/SmartRooms-AQ';
import SmartRoomEM from './pages/SmartRooms-EM';
import SmartRoomOC from './pages/SmartRooms-OC';
import Wisun from './pages/WiSUN';

import HomePage from './pages/HomePage';
import './App.css';

// import FormComponent from './components/FeedbackForm/FormComponent';
import ChatPopup from './components/FeedbackForm/ChatPopup';

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
                            <Route path="WM-WD" element={<WaterDistribution />} />
                            <Route path="WM-WF" element={<WaterFlow />} />

                            <Route path="WN" element={<Wisun />} />
                            <Route path="CM" element={<Crowd />} />
                        </Route>
                    </Routes>
                </div>
            </div>
            <ChatPopup />
        </BrowserRouter>
    );
}

export default App;
