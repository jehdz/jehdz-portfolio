// src/components/ShineBorder.jsx
'use client;'
import React from 'react';


const ShineBorder = ({ className = '', children }) => {
  return (
    <div className={`shine-border ${className}`}>
      {children}
    </div>
  );
};

export default ShineBorder;
