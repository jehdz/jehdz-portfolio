import React from 'react';
import { v4 as uuidv4 } from 'uuid';

const SkillPills = ({skills}) => {
  return (
    <div className="flex flex-wrap gap-2">
      {skills.map(skill => (
        <span key={uuidv4()} className="bg-gray-800 text-white px-3 py-1 rounded-full">{skill}</span>
      ))}
  </div>
  );
};

export default SkillPills;
