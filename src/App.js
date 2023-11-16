import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import AppLayout from './components/layout/AppLayout';
import NavigationBar from './components/navigation/Navigation';
import 'boxicons/css/boxicons.min.css';

import Air from './pages/AirQuality';
import Energy from './pages/EnergyMonitoring';

import Solar from './pages/SolarMonitoring';
import SolarEM from './pages/SolarMonitoringEM';

import Weather from './pages/WeatherMonitoring';
import WaterDistribution from './pages/WaterMonitoring-WaterDistribution';

import Shenitech from './pages/WM-WF-Shenitech';
import Retrofit from './pages/WM-WF-Retrofit';
import Kristnam from './pages/WM-WF-Kristnam';

import Crowd from './pages/CrowdMonitoring';

import SmartRoomAC from './pages/SmartRooms-AC';
import SmartRoomAQ from './pages/SmartRooms-AQ';
import SmartRoomEM from './pages/SmartRooms-EM';
import SmartRoomOC from './pages/SmartRooms-OC';

import WisunFAN10FSK from './pages/WiSUN-FAN10FSK';
import WisunFAN11FSK from './pages/WiSUN-FAN11FSK';
import WisunFan11OFDM from './pages/WiSUN-FAN11OFDM';

import HomePage from './pages/HomePage';
import ServerStats from './pages/ServerStats';

import ComplaintList from './components/ComplaintList/ComplaintList';
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
                            
                            <Route path="WE" element={<Weather />} />
                            
                            <Route path="SL" element={<Solar />} />
                            <Route path="SL-Energy Meter" element={<SolarEM />} />

                            <Route path="AQ" element={<Air />} />
                            <Route path="EM" element={<Energy />} />

                            <Route path="SR-AC" element={<SmartRoomAC />} />
                            <Route path="SR-OC" element={<SmartRoomOC />} />
                            <Route path="SR-AQ" element={<SmartRoomAQ />} />
                            <Route path="SR-EM" element={<SmartRoomEM />} />
                            
                            <Route path="WM-WD" element={<WaterDistribution />} />

                            <Route path="WM-WF-Shenitech" element={<Shenitech />} />
                            <Route path="WM-WF-Retrofit" element={<Retrofit />} />
                            <Route path="WM-WF-Kristnam" element={<Kristnam />} />

                            <Route path="WN-FAN10FSK" element={<WisunFAN10FSK />} />
                            <Route path="WN-FAN11FSK" element={<WisunFAN11FSK />} />
                            <Route path="WN-FAN11OFDM" element={<WisunFan11OFDM />} />

                            <Route path="CM" element={<Crowd />} />'
                        
                            <Route path="serverstats" element={<ServerStats />} />
                            <Route path="complaints" element={<ComplaintList />} />
                        </Route>
                    </Routes>
                </div>
            </div>
            <ChatPopup />
        </BrowserRouter>
    );
}

export default App;
