// src/components/Card.jsx
import React, { useEffect, useState } from 'react';
import { motion, useMotionTemplate, useSpring } from 'framer-motion';
// import BeamBorder from '@/components/BeamBorder';

const Card = ({ children }) => {
  const mouseX = useSpring(0, { stiffness: 500, damping: 100 });
  const mouseY = useSpring(0, { stiffness: 500, damping: 100 });

  function onMouseMove(event) {
    const { currentTarget, clientX, clientY } = event;
    const { left, top } = currentTarget.getBoundingClientRect();
    mouseX.set(clientX - left);
    mouseY.set(clientY - top);
  }

  const maskImage = useMotionTemplate`radial-gradient(240px at ${mouseX}px ${mouseY}px, white, transparent)`;
  const style = { maskImage, WebkitMaskImage: maskImage };

  return (
    <div onMouseMove={onMouseMove} className="relative duration-700 border bg-black rounded-xl hover:bg-zinc-950/90 group md:gap-8 hover:border-zinc-400/50 border-zinc-600 w-[400px]">
      <div className="pointer-events-none relative">
        <div className="absolute inset-0 z-0 transition duration-1000 [mask-image:linear-gradient(black,transparent)]" />
        <motion.div className="absolute inset-0 z-10 bg-gradient-to-br opacity-100 via-zinc-100/10 transition duration-1000 group-hover:opacity-50" style={style} />
        <motion.div className="absolute inset-0 z-10 opacity-0 mix-blend-overlay transition duration group-hover:opacity-100" style={style} />

              
{/* <motion.div
            className="absolute inset-0 border-2 border-transparent pointer-events-none spinning-beam"
            // animate={{ rotate: 360 }}
            transition={{ duration: 12, repeat: Infinity, ease: 'linear', delay: -9 }}
            style={{ 
              '--size': '10px', 
              '--duration': '12s', 
              '--anchor': '20%', 
              '--border-width': '1px', 
              '--color-from': '#ffaa40', 
              '--color-to': '#9c40ff', 
              '--delay': '-9s'
            }}
          /> */}
              
                        {/* <motion.div
            className="absolute beam-border"
            animate={{ rotate: 360 }}
            transition={{ duration: 12, repeat: Infinity, ease: 'linear' }}
          /> */}
              
          </div>
          

      {children}
    </div>
  );
};

export default Card;
