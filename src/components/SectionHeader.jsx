import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

const SectionHeader = ({title, direction}) => {

  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const initial = {
    filter: "blur(10px)",
    y: 0,
    opacity: 0,
    x: direction === 'right' ? 200 : -200
  };

  return (
    <div className={`mx-auto flex ${direction === 'right' ? 'flex-row-reverse' : 'flex-row'} gap-4 text-white py-8 items-center`}>
      <div className='flex flex-row gap-2 items-end'>
      <motion.div
        ref={ref}
        initial={initial}
        animate={isInView ? { filter: "none", y: 0, x: 0, opacity: 1 } : {}}
        transition={{ duration: 1, delay: .25, type: 'spring', stiffness: 100, damping: 10 }}
        className="text-5xl font-bold flex items-end">
        {title}
      </motion.div>
      <motion.div
        ref={ref}
        initial={{ scale: 0, y: -40 }}
        animate={isInView ? { scale: [0, 1, 1], rotate: [0, 360], y: 0 } : {}}
        transition={{ type: 'spring', stiffness: 100, damping: 10, duration: 0.75, delay: 1 }}
        className="mb-1 height-auto bg-gradient-to-tr from-slate-900 to-white rounded-full h-4 w-4"
      />

      </div>
        <motion.hr
          ref={ref}
          className="border-slate-400 w-full"
          initial={{ width: 0 }}
          animate={isInView ? { width: '100%' } : {}}
          transition={{ duration: 1, ease: "easeInOut", delay: .45 }}
        />

    </div>
  );
};

export default SectionHeader;
