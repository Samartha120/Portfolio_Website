import React from 'react';
import { motion } from 'framer-motion';

export const Loader = () => {
  return (
    <div className="flex items-center justify-center w-full h-40">
      <motion.div
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.5, 1, 0.5],
        }}
        transition={{
          duration: 1.5,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="w-12 h-12 border-4 border-primary/20 border-t-primary rounded-full animate-spin"
      />
    </div>
  );
};
