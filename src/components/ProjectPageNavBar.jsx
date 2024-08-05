import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Github, Linkedin, Mail } from "lucide-react";
import { Icon } from '@iconify/react';

const ProjectPageNavBar = () => {
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
        <div className="max-w-[1400px] m-auto flex justify-between items-center py-4">
          <div className="flex items-center space-x-4">
            <Link href="/" className="text-white hover:text-slate-500 transition-colors">
            <motion.div
          whileHover={{ x: -10 }}
          transition={{ duration: 0.25 }}
        >
          <Icon icon="line-md:arrow-left" width="1.2rem" height="1.2rem" />
        </motion.div>
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
    </motion.nav>
  );
};

export default ProjectPageNavBar;
