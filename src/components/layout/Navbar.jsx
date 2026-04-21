import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Menu } from 'lucide-react';
import { cn } from '../../utils/helpers';
import { Link, useLocation } from 'react-router-dom';
import { useAppContext } from '../../context/AppContext';

export const navLinks = [
  { name: 'Home', href: '/' },
  { name: 'About', href: '/about' },
  { name: 'Expertise', href: '/expertise' },
  { name: 'Projects', href: '/projects' },
  { name: 'Blog', href: '/blog' },
  { name: 'Contact', href: '/contact' },
];

export const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed top-0 w-full z-40 transition-all duration-500",
        scrolled 
          ? "bg-black/40 backdrop-blur-xl border-b border-white/[0.08] py-4 shadow-[0_4px_30px_rgba(0,0,0,0.1)]" 
          : "bg-gradient-to-b from-black/80 to-transparent py-6"
      )}
    >
      <div className="container mx-auto px-6 md:px-12 flex items-center justify-between">
        <Link 
          to="/" 
          className="text-2xl font-bold text-white tracking-tighter group flex items-center gap-1 relative z-50"
        >
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary to-accent transition-all group-hover:drop-shadow-[0_0_10px_rgba(59,130,246,0.5)]">
            Dev
          </span>
          <span className="text-white">Portfolio</span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-2 relative z-50 bg-white/[0.03] p-1.5 rounded-full border border-white/[0.05] shadow-inner backdrop-blur-md">
          {navLinks.map((link) => {
            const isActive = location.pathname === link.href;
            return (
              <Link
                key={link.name}
                to={link.href}
                className={cn(
                  "px-5 py-2 text-sm font-medium transition-colors relative z-10 rounded-full",
                  isActive ? "text-white" : "text-white/60 hover:text-white"
                )}
              >
                {isActive && (
                  <motion.div
                    layoutId="navbar-active"
                    transition={{ type: "spring", stiffness: 350, damping: 30 }}
                    className="absolute inset-0 bg-white/10 rounded-full -z-10 shadow-[inset_0_1px_1px_rgba(255,255,255,0.1)]"
                  />
                )}
                {link.name}
              </Link>
            );
          })}
        </nav>

        <div className="hidden lg:flex items-center z-50">
          <Link
            to="/contact"
            className="px-6 py-2.5 text-sm font-medium rounded-full bg-white text-black hover:bg-neutral-200 transition-all hover:scale-105 active:scale-95 shadow-[0_0_20px_rgba(255,255,255,0.15)] hover:shadow-[0_0_30px_rgba(255,255,255,0.3)]"
          >
            Hire Me
          </Link>
        </div>

        {/* Mobile Toggle Button - Uses AppContext or local state if preferred. We'll use local to this component for simplicity or AppContext if we want global access. Here we just rely on CSS checkbox hack for global sidebar state or just separate sidebar component. For strict structure, Sidebar is its own component. We need a way to open it. */}
        <label htmlFor="sidebar-toggle" className="lg:hidden cursor-pointer text-white w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center z-50 backdrop-blur-md">
          <Menu size={20} />
        </label>
      </div>
    </header>
  );
};

export default Navbar;