import React from 'react';
import { cn } from '../../lib/utils';
import { motion } from 'framer-motion';

export function Section({ id, className, children, ...props }) {
  return (
    <section 
      id={id} 
      className={cn("py-20 md:py-32 relative", className)}
      {...props}
    >
      <div className="container mx-auto px-6 md:px-12 max-w-7xl relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          {children}
        </motion.div>
      </div>
    </section>
  );
}
