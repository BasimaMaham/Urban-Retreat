// src/App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import CustomNavbar from './components/Navbar';
import Home from './pages/Home';

function App() {
  return (
    <Router>
      {/* Navbar shows on every page */}
      <CustomNavbar />
      
      <Routes>
        {/* Define which component shows for which URL */}
        <Route path="/" element={<Home />} />
      </Routes>
    </Router>
  );
}

export default App;