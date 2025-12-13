// src/components/FloatingHelp.js
import React from 'react';
import { Link } from 'react-router-dom';

const FloatingHelp = () => {
  return (
    <Link 
      to="/help"
      className="shadow-lg"
      style={{
        position: 'fixed',
        bottom: '30px',
        right: '30px',
        width: '60px',
        height: '60px',
        borderRadius: '50%',
        backgroundColor: '#6c5ce7', // Your primary purple
        color: 'white',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        fontSize: '24px',
        fontWeight: 'bold',
        textDecoration: 'none',
        zIndex: 9999, // Ensures it sits on top of everything
        transition: 'transform 0.3s ease'
      }}
      // Simple hover effect using inline style manipulation
      onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.1)'}
      onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}
    >
      ?
    </Link>
  );
};

export default FloatingHelp;