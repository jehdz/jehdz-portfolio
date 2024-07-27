'use client';
import React, { useEffect, useState } from 'react';
import { useScroll, useSpring, motion } from 'framer-motion';

export default function ScrollProgressBar() {
    const { scrollYProgress } = useScroll();
    const scaleX = useSpring(scrollYProgress, {
      stiffness: 100,
      damping: 30,
      restDelta: 0.001
    });

  return <motion.div className="progress-bar" style={{ scaleX }} />;
}
