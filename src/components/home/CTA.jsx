import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '../common/Button';
import { Link } from 'react-router-dom';

export const CTA = () => {
  return (
    <section className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-primary/10" />
      <div className="container mx-auto px-6 relative z-10 text-center max-w-4xl">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl md:text-6xl font-black mb-6 text-white"
        >
          Ready to start your next project?
        </motion.h2>
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-lg text-white/70 mb-10"
        >
          Let's collaborate to build something extraordinary.
        </motion.p>
        <motion.div
           initial={{ opacity: 0, scale: 0.9 }}
           whileInView={{ opacity: 1, scale: 1 }}
           viewport={{ once: true }}
           transition={{ delay: 0.2 }}
        >
          <Link to="/contact">
            <Button size="lg" glow>Get in Touch</Button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
};
