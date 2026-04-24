import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Menu, Moon, Sun } from 'lucide-react';
import { cn } from '../../utils/helpers';
import { Link, useLocation } from 'react-router-dom';
import { useThemeContext } from '../../context/ThemeContext';

export const navLinks = [
  { name: 'Home', href: '/' },
  { name: 'About', href: '/about' },
  { name: 'Expertise', href: '/expertise' },
  { name: 'Case Study', href: '/case-study' },
  { name: 'Projects', href: '/projects' },
  { name: 'Blog', href: '/blog' },
  { name: 'Contact', href: '/contact' },
];

export const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const { theme, toggleTheme } = useThemeContext();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed top-0 w-full z-40 transition-all duration-300 ease-out",
        scrolled 
          ? "bg-surface/80 backdrop-blur-md border-b border-white/10 py-4 shadow-md shadow-black/30" 
          : "bg-transparent py-6"
      )}
    >
      <div className="container mx-auto px-6 md:px-12 flex items-center justify-between">
        <Link 
          to="/" 
          className="text-2xl font-bold text-white tracking-tighter group flex items-center gap-1 relative z-50"
        >
          <span className="text-white/90">Dev</span>
          <span className="text-white/50">Portfolio</span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-6 relative z-50">
          {navLinks.map((link) => {
            const isActive = location.pathname === link.href;
            return (
              <Link
                key={link.name}
                to={link.href}
                className={cn(
                  "text-sm font-medium transition-colors relative z-10 py-2",
                  isActive ? "text-white" : "text-white/60 hover:text-white"
                )}
              >
                {link.name}
                {isActive && (
                  <motion.span
                    layoutId="navbar-underline"
                    transition={{ type: 'spring', stiffness: 380, damping: 32 }}
                    className="absolute left-0 right-0 -bottom-1 h-px bg-white/50"
                  />
                )}
              </Link>
            );
          })}
        </nav>

        <div className="hidden lg:flex items-center gap-3 z-50">
          <div className="relative group/theme flex items-center">
            <button
              type="button"
              onClick={toggleTheme}
              className="w-10 h-10 rounded-full bg-white/5 border border-white/10 text-white/80 hover:text-white hover:bg-white/[0.08] transition-colors duration-300 ease-out inline-flex items-center justify-center relative overflow-hidden"
              aria-label={theme === 'light' ? 'Switch to dark theme' : 'Switch to light theme'}
            >
              <motion.div
                initial={false}
                animate={{
                  y: theme === 'light' ? -30 : 0,
                  opacity: theme === 'light' ? 0 : 1,
                  scale: theme === 'light' ? 0.5 : 1,
                }}
                transition={{ duration: 0.4, ease: 'backOut' }}
                className="absolute inset-0 flex items-center justify-center"
              >
                <Moon size={18} />
              </motion.div>
              <motion.div
                initial={false}
                animate={{
                  y: theme === 'light' ? 0 : 30,
                  opacity: theme === 'light' ? 1 : 0,
                  scale: theme === 'light' ? 1 : 0.5,
                }}
                transition={{ duration: 0.4, ease: 'backOut' }}
                className="absolute inset-0 flex items-center justify-center"
              >
                <Sun size={18} />
              </motion.div>
            </button>
            <div className="absolute top-full mt-2 left-1/2 -translate-x-1/2 opacity-0 group-hover/theme:opacity-100 pointer-events-none transition-all duration-300 translate-y-1 group-hover/theme:translate-y-0 bg-surface/90 backdrop-blur-xl border border-white/10 px-3 py-1.5 rounded-lg whitespace-nowrap text-xs font-medium text-white/90 shadow-xl z-50 flex items-center gap-2">
               {theme === 'light' ? <Moon size={12}/> : <Sun size={12}/>}
               {theme === 'light' ? 'Dark Mode' : 'Light Mode'}
            </div>
          </div>
          <Link
            to="/contact"
            className="px-5 py-2.5 text-sm font-medium rounded-full bg-white text-black hover:bg-white/90 transition-all duration-300 ease-out active:scale-[0.98] shadow-md shadow-black/20"
          >
            Hire Me
          </Link>
        </div>

        {/* Mobile Toggle Button - Uses AppContext or local state if preferred. We'll use local to this component for simplicity or AppContext if we want global access. Here we just rely on CSS checkbox hack for global sidebar state or just separate sidebar component. For strict structure, Sidebar is its own component. We need a way to open it. */}
        <div className="lg:hidden flex items-center gap-2 z-50">
          <div className="relative group/theme-mobile flex items-center">
            <button
              type="button"
              onClick={toggleTheme}
              className="w-10 h-10 rounded-full bg-white/5 border border-white/10 text-white/80 hover:text-white hover:bg-white/[0.08] transition-colors duration-300 ease-out inline-flex items-center justify-center relative overflow-hidden backdrop-blur-md"
              aria-label={theme === 'light' ? 'Switch to dark theme' : 'Switch to light theme'}
            >
              <motion.div
                initial={false}
                animate={{
                  y: theme === 'light' ? -30 : 0,
                  opacity: theme === 'light' ? 0 : 1,
                  scale: theme === 'light' ? 0.5 : 1,
                }}
                transition={{ duration: 0.4, ease: 'backOut' }}
                className="absolute inset-0 flex items-center justify-center"
              >
                <Moon size={18} />
              </motion.div>
              <motion.div
                initial={false}
                animate={{
                  y: theme === 'light' ? 0 : 30,
                  opacity: theme === 'light' ? 1 : 0,
                  scale: theme === 'light' ? 1 : 0.5,
                }}
                transition={{ duration: 0.4, ease: 'backOut' }}
                className="absolute inset-0 flex items-center justify-center"
              >
                <Sun size={18} />
              </motion.div>
            </button>
          </div>
          <label htmlFor="sidebar-toggle" className="cursor-pointer text-white/90 w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center backdrop-blur-md">
            <Menu size={20} />
          </label>
        </div>
      </div>
    </header>
  );
};

export default Navbar;