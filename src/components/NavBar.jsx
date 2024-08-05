'use client;'
import React, { useState, useEffect } from 'react';
import { Link } from 'react-scroll';
import { motion } from 'framer-motion';
import { Github, Linkedin, Mail } from "lucide-react";

const Navbar = ({ projectNav = false }) => {
  const sections = [
    { id: 'about', label: 'ABOUT' },
    { id: 'projects', label: 'PROJECTS' },
    { id: 'experience', label: 'EXPERIENCE' },
    { id: 'contact', label: 'CONTACT' }
  ];

  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <motion.nav 
      className={`fixed top-0 w-full inset-x-0 z-50 duration-200 ${
        isScrolled ? 'backdrop-blur border-b bg-slate-900/50' : 'bg-zinc-950'
      }`}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 3 }}
    >
      {projectNav ? (
        <div className="max-w-[1400px] m-auto flex justify-between items-center py-4">
          <div className="flex items-center space-x-4">
            <Link href="/" className="text-white hover:text-slate-500 transition-colors">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </Link>
          </div>
          <ul className="flex space-x-4">
            <li>
              <a href="https://github.com" className="text-white hover:text-slate-500 transition-colors">
                <Github className="h-6 w-6" />
              </a>
            </li>
            <li>
              <a href="https://linkedin.com" className="text-white hover:text-slate-500 transition-colors">
                <Linkedin className="h-6 w-6" />
              </a>
            </li>
            <li>
              <a href="mailto:example@mail.com" className="text-white hover:text-slate-500 transition-colors">
                <Mail className="h-6 w-6" />
              </a>
            </li>
          </ul>
        </div>
      ) : (
        <ul className="max-w-[1400px] m-auto flex justify-end space-x-8 py-4">
          {sections.map((section, index) => (
            <li key={section.id} className="text-lg font-semibold transition-colors">
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
      )}
    </motion.nav>
  );
};

export default Navbar;
