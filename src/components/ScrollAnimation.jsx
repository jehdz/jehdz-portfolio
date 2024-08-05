import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Animation } from '@/components/Animations/Animation';

const ScrollAnimation = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false });

  return (
    <motion.div
      ref={ref}
      initial={{
        perspective: '1200px',
        scale: 0.2,
        rotate: '0',
        rotateX: '90deg',
        rotateY: '0',
        skewX: '0deg',
        skewY: '0deg',
      }}

      animate={isInView ? { rotateX: 0, scale: 1 } : {}}
      transition={{ duration: 1}}
      className="w-full h-full max-h-[100vh] m-auto"
    >
      <Animation />
    </motion.div>
  );
};

export default ScrollAnimation;
