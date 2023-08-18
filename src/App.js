import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import AppLayout from './components/layout/AppLayout';
import NavigationBar from './components/navigation/Navigation';
import 'boxicons/css/boxicons.min.css';



import {
   Default,
    Air,
    Energy,
    Solar,
    SmartRooms,
    Weather,
    Water,
    Crowd,
    Wisun
} from './pages/Blank';
// import { Default } from './pages/Default';

import HomePage from './pages/HomePage';

import './App.css';


function App() {
    return (
        <BrowserRouter>
            <div id="root">
                <NavigationBar />
                
                <div className="content">
                    <Routes>
                        <Route path="/" element={<AppLayout />}>
                            <Route index element={<HomePage />} />
                            <Route path="/aq" element={<Air />} />
                            <Route path="/em" element={<Energy />} />

                            <Route path="/sl" element={<Solar />} />
                            <Route path="/sr" element={<SmartRooms />} />

                            <Route path="/we" element={<Weather />} />
                            <Route path="/wm" element={<Water />} />

                            <Route path="/wn" element={<Wisun />} />
                            <Route path="/cm" element={<Crowd />} />
                        </Route>
                    </Routes>
                </div>
            </div>
        </BrowserRouter>
    );
}

export default App;
