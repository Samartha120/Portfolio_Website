import React from 'react';
import { cn } from '../../lib/utils';
import { motion } from 'framer-motion';

export function Button({ 
  className, 
  variant = 'primary', 
  size = 'md', 
  children, 
  icon,
  glow = false,
  href,
  target,
  download,
  ...props 
}) {
  const Component = href ? motion.a : motion.button;
  
  const baseStyles = "relative inline-flex items-center justify-center rounded-full font-medium transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-primary/50 disabled:opacity-50 disabled:pointer-events-none overflow-hidden group";
  
  const variants = {
    primary: "bg-white text-black hover:bg-white/90 border border-transparent shadow-[0_0_20px_rgba(255,255,255,0.2)] hover:shadow-[0_0_30px_rgba(255,255,255,0.4)]",
    secondary: "bg-black/40 backdrop-blur-md border border-white/10 text-white hover:bg-white/10 hover:border-white/20 shadow-[0_0_15px_rgba(0,0,0,0.5)]",
    outline: "border-2 border-white/20 text-white hover:bg-white hover:text-black",
    ghost: "text-white/70 hover:text-white hover:bg-white/10",
    gradient: "bg-gradient-to-r from-primary via-secondary to-accent text-white border-0 hover:shadow-[0_0_30px_rgba(59,130,246,0.5)]",
  };
  
  const sizes = {
    sm: "h-9 px-4 text-sm",
    md: "h-11 px-6 text-base",
    lg: "h-14 px-8 text-lg",
    icon: "h-10 w-10",
  };

  return (
    <Component
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      className={cn(baseStyles, variants[variant], sizes[size], className)}
      href={href}
      target={target}
      download={download}
      {...props}
    >
      {/* Animated gradient background for pseudo-borders or hover states on some variants if needed */}
      {glow && (
        <span className="absolute inset-0 rounded-full w-full h-full bg-gradient-to-r from-primary via-secondary to-accent opacity-0 group-hover:opacity-20 blur-xl transition-opacity duration-500" />
      )}
      <span className="relative z-10 flex items-center justify-center">
        {children}
        {icon && <span className="ml-2 transition-transform duration-300 group-hover:translate-x-1">{icon}</span>}
      </span>
    </Component>
  );
}
