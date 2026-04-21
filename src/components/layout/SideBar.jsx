import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link, useLocation } from 'react-router-dom';
import { navLinks } from './Navbar';
import { X } from 'lucide-react';

export const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  return (
    <>
      <input 
        type="checkbox" 
        id="sidebar-toggle" 
        className="hidden" 
        checked={isOpen}
        onChange={(e) => setIsOpen(e.target.checked)}
      />
      
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, clipPath: 'circle(0% at right top)' }}
            animate={{ opacity: 1, clipPath: 'circle(150% at right top)' }}
            exit={{ opacity: 0, clipPath: 'circle(0% at right top)' }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
            className="fixed inset-0 bg-black/95 backdrop-blur-2xl z-[60] flex flex-col items-center justify-center gap-8"
          >
            <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI0IiBoZWlnaHQ9IjQiPgo8cmVjdCB3aWR0aD0iNCIgaGVpZ2h0PSI0IiBmaWxsPSIjZmZmIiBmaWxsLW9wYWNpdHk9IjAuMDUiLz4KPC9zdmc+')] opacity-10 pointer-events-none"></div>
            
            <button 
              onClick={() => setIsOpen(false)}
              className="absolute top-6 right-6 lg:right-12 text-white w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center z-[70] backdrop-blur-md"
            >
              <X size={20} />
            </button>

            {navLinks.map((link, idx) => (
              <motion.div
                key={link.name}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 + idx * 0.1 }}
              >
                <Link
                  to={link.href}
                  onClick={() => setIsOpen(false)}
                  className="text-4xl font-bold text-white relative group overflow-hidden block"
                >
                  <span className="relative z-10 transition-colors group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-primary group-hover:to-accent">
                    {link.name}
                  </span>
                  <span className="absolute bottom-0 left-0 w-0 h-1 bg-gradient-to-r from-primary to-accent transition-all duration-300 group-hover:w-full"></span>
                </Link>
              </motion.div>
            ))}
            
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.6 }}
            >
              <Link
                to="/contact"
                onClick={() => setIsOpen(false)}
                className="mt-8 px-8 py-4 rounded-full bg-white text-black font-semibold tracking-wide inline-block"
              >
                Start a Project
              </Link>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Sidebar;
