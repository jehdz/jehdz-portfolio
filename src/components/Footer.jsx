import React from 'react';
import { Link } from 'react-scroll';
import { motion } from 'framer-motion';

const Footer = () => {
  const sections = [
    { id: 'about', label: 'ABOUT' },
    { id: 'projects', label: 'PROJECTS' },
    { id: 'experience', label: 'EXPERIENCE' },
    { id: 'contact', label: 'CONTACT' }
  ];

  return (
    <>
    <ul className="m-auto flex justify-center space-x-8 py-4">
        {sections.map((section, index) => (
            <li key={index}>
            <Link
              activeClass="text-slate-400"
              to={section.id}
              spy={true}
              smooth={true}
              offset={-50}
              duration={500}
              className="cursor-pointer hover:text-slate-500 transition-colors"
            >
              {`0${index + 1}`} <span className="text-white hover:text-slate-500 transition-colors">— {section.label} </span> 
            </Link>
            </li>
        ))}
      </ul>
    
    </>
  );
};

export default Footer;
