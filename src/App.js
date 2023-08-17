import logo from './logo.svg';
import './App.css';
import 'boxicons/css/boxicons.min.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import AppLayout from './components/layout/AppLayout';
import NavigationBar  from './components/navigation/Navigation';
import {Default,Air,Energy,Solar,SmartRooms,Weather,Water,Crowd,Wisun} from './pages/Blank';

function App() {
  return (
    <BrowserRouter>
    <div>
            <NavigationBar />
    </div>
    <Routes>
        <Route path='/' element={<AppLayout />}>
            <Route index element={<Default />} />
            <Route path='/aq' element={<Air />} />
            <Route path='/em' element={<Energy />} />
            
            <Route path='/sl' element={<Solar />} />
            <Route path='/sr' element={<SmartRooms />} />
            
            <Route path='/we' element={<Weather />} />
            <Route path='/wm' element={<Water />} />
            
            <Route path='/wn' element={<Wisun />} />
            <Route path='/cm' element={<Crowd />} />
        </Route>
    </Routes>
</BrowserRouter>
  );
}

export default App;
