import React from 'react';
import { cn } from '../../lib/utils';
import { motion } from 'framer-motion';

export function SectionTitle({ title, subtitle, className, center = false }) {
  return (
    <div className={cn("mb-16 md:mb-24 relative", center && "text-center", className)}>
      <motion.div
        initial={{ opacity: 0, y: 6 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.45, ease: "easeOut" }}
        className={cn(
          "inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-white/10 bg-white/[0.03] text-white/70 tracking-widest uppercase text-xs font-semibold mb-6",
          center && "mx-auto"
        )}
      >
        <span className="w-1.5 h-1.5 rounded-full bg-primary" />
        {subtitle}
      </motion.div>
      <motion.h2
        initial={{ opacity: 0, y: 12 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.55, delay: 0.05, ease: "easeOut" }}
        className="text-3xl md:text-5xl lg:text-6xl font-bold tracking-tight text-white/90 mb-6 relative z-10"
      >
        {title}
      </motion.h2>
      {center ? (
        <motion.div
          initial={{ scaleX: 0, opacity: 0 }}
          whileInView={{ scaleX: 1, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.15, ease: "easeOut" }}
          className="h-px w-24 bg-white/15 mx-auto rounded-full"
        />
      ) : (
        <motion.div
          initial={{ scaleX: 0, opacity: 0 }}
          whileInView={{ scaleX: 1, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.15, ease: "easeOut" }}
          className="h-px w-24 bg-white/15 rounded-full origin-left"
        />
      )}
    </div>
  );
}
