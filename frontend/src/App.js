// src/App.js
import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import CustomNavbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Login from './pages/Login';   // <--- Import Login
import Signup from './pages/Signup'; // <--- Import Signup
import './App.css';
import Listings from './pages/Listings'; // <--- Import Listings
import Details from './pages/Details';

function App() {
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <div className={darkMode ? 'app-container dark-mode' : 'app-container'}>
      <Router>
        <div className="content-wrap">
          <CustomNavbar darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
          
          {/* BACKGROUND ELEMENTS */}
          <div className="background-shapes">
            <div className="shape shape-1"></div>
            <div className="shape shape-2"></div>
            <div className="shape shape-3"></div>
          </div>

          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />   {/* <--- New Route */}
            <Route path="/signup" element={<Signup />} /> {/* <--- New Route */}
            <Route path="/listings" element={<Listings />} /> {/* <--- Add Route */}
            <Route path="/details/:id" element={<Details />} />
          </Routes>
        </div>
        <Footer />
      </Router>
    </div>
  );
}

export default App;