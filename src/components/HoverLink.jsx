import { motion } from 'framer-motion';
import { Link } from 'react-scroll'; // Assuming you're using react-scroll

const AnimatedLink = ({ to, children }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ type: 'spring', stiffness: 300, damping: 20, duration: 1 }}
      whileHover={{ y: -5 }}
      className="flex items-center justify-center w-full h-full bg-gradient-to-r from-indigo-900 to-indigo-950 py-4 rounded-sm cursor-pointer"
    >
      <Link
        activeClass="text-slate-400"
        to={to}
        spy={true}
        smooth={true}
        offset={-50}
        duration={500}
        className="flex items-center justify-center w-full h-full font-semibold text-white"
      >
        {children}
      </Link>
    </motion.div>
  );
};

export default AnimatedLink;
