import React from 'react';
import { motion } from 'framer-motion';
import { SectionTitle } from '../common/SectionTitle';
import { profile } from '../../data/profile';

export const Bio = () => {
  return (
    <section className="py-24 relative">
      <div className="container mx-auto px-6 max-w-4xl relative z-10">
        <SectionTitle title="Biography" subtitle="About Me" />
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-lg md:text-xl text-white/80 font-light leading-relaxed space-y-6"
        >
          <p>{profile.bio}</p>
          <p>Over the years, I've had the privilege of deeply immersing myself in frontend architectures, building high-volume applications, and designing interfaces that just "feel" right.</p>
        </motion.div>
      </div>
    </section>
  );
};
