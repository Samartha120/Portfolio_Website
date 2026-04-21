import React from 'react';
import { cn } from '../../lib/utils';
import { motion } from 'framer-motion';

export function SectionTitle({ title, subtitle, className, center = false }) {
  return (
    <div className={cn("mb-16 md:mb-24 relative", center && "text-center", className)}>
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, type: "spring", stiffness: 100 }}
        className={cn(
          "inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-primary/20 bg-primary/5 text-primary tracking-widest uppercase text-xs font-bold mb-6 overflow-hidden relative group",
          center && "mx-auto"
        )}
      >
        <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-primary/10 to-transparent -translate-x-full animate-[shimmer_2s_infinite]"></span>
        <span className="w-1.5 h-1.5 rounded-full bg-primary motion-safe:animate-pulse"></span>
        {subtitle}
      </motion.div>
      <motion.h2
        initial={{ opacity: 0, y: 20, filter: "blur(5px)" }}
        whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
        viewport={{ once: true }}
        transition={{ duration: 0.7, delay: 0.1, ease: "easeOut" }}
        className="text-4xl md:text-6xl lg:text-7xl font-black tracking-tighter text-white mb-6 relative z-10"
      >
        {title}
      </motion.h2>
      {center ? (
        <motion.div
          initial={{ scaleX: 0, opacity: 0 }}
          whileInView={{ scaleX: 1, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3, type: "spring", stiffness: 50 }}
          className="h-[2px] w-32 bg-gradient-to-r from-transparent via-primary to-transparent mx-auto rounded-full"
        />
      ) : (
        <motion.div
          initial={{ scaleX: 0, opacity: 0 }}
          whileInView={{ scaleX: 1, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3, type: "spring", stiffness: 50 }}
          className="h-[2px] w-32 bg-gradient-to-r from-primary to-transparent rounded-full origin-left"
        />
      )}
    </div>
  );
}
