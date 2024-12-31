// src/App.js
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import NavBar from './components/Navbar';

import Home from './pages/Home';
import HowItWorks from './pages/HowItWorks';
import MeetTheTeam from './pages/MeetTheTeam';
import Contact from './pages/Contact';

function App() {
  return (
    <div className="app-container">
      {/* Use NavBar here */}
      <NavBar />

      {/* Define your routes */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/how-it-works" element={<HowItWorks />} />
        <Route path="/meet-the-team" element={<MeetTheTeam />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </div>
  );
}

export default App;
