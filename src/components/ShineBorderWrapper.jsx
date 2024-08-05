import React, { useEffect, useState } from 'react';
import ShineBorder from '@/components/magicui/shine-border';

const ShineBorderWrapper = ({color, borderWidth = 2, children}) => {
  const shineClass = 'relative border max-w-sm bg-zinc-950 border border-zinc-600 text-white rounded-lg overflow-hidden shadow-lg'

  color = ["#64748b", "#f1f5f9", "#e5e7eb"];
  const getDuration = () => Math.floor(Math.random() * 6) + 9;

  let duration = getDuration();
  
  return (
    <ShineBorder
        className={shineClass}
        color={color}
        borderWidth={borderWidth}
        duration={duration}>

      {children}
    </ShineBorder>
  );
};

export default ShineBorderWrapper;
