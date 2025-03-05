import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import MainPage from './components/MainPage';
import Bike from './components/Bike';
import BikeRental from './components/BikeRental';
import CarRental from './components/CarRental';
import Login from './components/Login';
import AdminPanel from './components/AdminPanel';
import TourRent from './components/TourRent';
import GearRental from './components/GearRental';
import Adventures from './components/Adventures';
import Hotels from './components/Hotels';
import Contact from './components/Contact';
import AdminTourRent from './components/AdminTourRent';
import AdminBikeRent from './components/AdminBikeRent'; // Import the AdminBikeRent component
import AdminGearRent from './components/AdminGearRent'; // Import the AdminGearRent component
import AdminCarRent from './components/AdminCarRent'; // Import the AdminCarRent component
import AdminAdventureRent from './components/AdminAdventureRent'; // Import the AdminAdventureRent component
import AdminHotels from './components/AdminHotels'; // Import the AdminHotels component
import About from './components/About'; // Import the About component

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<><Navbar /><MainPage /></>} />
        <Route path="/bike/:bikeName" element={<><Navbar /><Bike /></>} />
        <Route path="/bike-rental" element={<><Navbar /><BikeRental /></>} />
        <Route path="/car-rental" element={<><Navbar /><CarRental /></>} />
        <Route path="/tour-rental" element={<><Navbar /><TourRent /></>} />
        <Route path="/gear-rental" element={<><Navbar /><GearRental /></>} />
        <Route path="/adventures" element={<><Navbar /><Adventures /></>} />
        <Route path="/hotels" element={<><Navbar /><Hotels /></>} />
        <Route path="/contact" element={<><Navbar /><Contact /></>} />
        <Route path="/about" element={<><Navbar /><About /></>} /> {/* Add the about route */}
        <Route path="/login" element={<Login />} />
        <Route path="/adminpanel" element={<AdminPanel />} />
        <Route path="/admin-tour-rent" element={<AdminTourRent />} /> {/* Add the admin tour rent route */}
        <Route path="/admin-bike-rent" element={<AdminBikeRent />} /> {/* Add the admin bike rent route */}
        <Route path="/admin-gear-rent" element={<AdminGearRent />} /> {/* Add the admin gear rent route */}
        <Route path="/admin-car-rent" element={<AdminCarRent />} /> {/* Add the admin car rent route */}
        <Route path="/admin-adventure-rent" element={<AdminAdventureRent />} /> {/* Add the admin adventure rent route */}
        <Route path="/admin-hotels" element={<AdminHotels />} /> {/* Add the admin hotels route */}
        {/* Add other admin routes here */}
      </Routes>
    </Router>
  );
}

export default App;