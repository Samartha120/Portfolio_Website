import React, { forwardRef } from 'react';
import { cn } from '../../lib/utils';
import { motion } from 'framer-motion';

export const Section = forwardRef(({ id, className, children, ...props }, ref) => {
  return (
    <section 
      id={id} 
      ref={ref}
      className={cn("py-20 md:py-32 relative", className)}
      {...props}
    >
      <div className="container mx-auto px-6 md:px-12 max-w-7xl relative z-10">
        <div>
          {children}
        </div>
      </div>
    </section>
  );
});

Section.displayName = 'Section';
