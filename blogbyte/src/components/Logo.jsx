import React from 'react';
import logoImg from '../assets/logo.png'; // adjust path if your file is deeper in folders

function Logo({ width = '100px' }) {
  return (
    <div>
      <img 
        src={logoImg} 
        alt="Logo" 
        style={{ width }} 
      />
    </div>
  );
}

export default Logo;
