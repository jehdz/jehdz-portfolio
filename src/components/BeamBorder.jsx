// src/components/BeamBorder.jsx

import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import './BeamBorder.css'; // Import the custom CSS file for the spinning animation

const BeamBorder = () => {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient) {
    return null;
  }

  return (
    <motion.div
      className="absolute inset-0 border-2 border-transparent pointer-events-none spinning-beam"
      animate={{ rotate: 360 }}
      transition={{ duration: 4, repeat: Infinity, ease: 'linear' }}
    />
  );
};

export default BeamBorder;
