import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '../common/Button';
import { ArrowRight, Download, Sparkles } from 'lucide-react';
import { profile } from '../../data/Profile';
import { fadeInUp, staggerContainer } from '../../utils/animations';

export const Hero = () => {
  return (
    <section className="min-h-[100svh] flex items-center justify-center pt-20 overflow-hidden relative">
      <motion.div className="absolute top-1/4 left-1/4 w-[400px] h-[400px] bg-primary/20 rounded-full blur-[120px] -z-10 mix-blend-screen pointer-events-none" />
      <motion.div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-secondary/20 rounded-full blur-[140px] -z-10 mix-blend-screen pointer-events-none animate-spin-slow" />

      <motion.div 
        variants={staggerContainer}
        initial="hidden"
        animate="show"
        className="flex flex-col items-center text-center w-full relative z-10 px-6 max-w-5xl mx-auto"
      >
        <motion.div
          variants={fadeInUp}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 backdrop-blur-md shadow-[0_0_20px_rgba(255,255,255,0.05)] mb-8 overflow-hidden"
        >
          <Sparkles size={14} className="text-accent" />
          <span className="text-sm font-medium text-white/90">Available for Opportunities</span>
        </motion.div>

        <motion.h1
          variants={fadeInUp}
          className="text-6xl md:text-8xl lg:text-9xl font-black tracking-tighter text-white mb-6 leading-[0.9] lg:leading-[0.9]"
        >
          Building <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-white/80 to-white/40">Digital</span> <br className="hidden md:block" />
          <span className="text-transparent bg-clip-text bg-gradient-to-b from-primary via-secondary to-accent relative inline-block group">
            Experiences
          </span>
        </motion.h1>

        <motion.p
          variants={fadeInUp}
          className="text-lg md:text-2xl text-white/60 max-w-2xl mx-auto mb-10 font-light leading-relaxed"
        >
          {profile.role} focused on building <strong className="text-white font-medium">accessible, performance‑focused</strong> user interfaces.
        </motion.p>

        <motion.div
          variants={fadeInUp}
          className="flex flex-col sm:flex-row items-center justify-center gap-6 w-full"
        >
          <Button variant="primary" size="lg" className="w-full sm:w-auto text-lg h-14 px-8" glow icon={<ArrowRight size={20} />}>
            Explore Portfolio
          </Button>
          <Button variant="secondary" size="lg" className="w-full sm:w-auto text-lg h-14 px-8" icon={<Download size={20} className="text-white" />}>
            Download CV
          </Button>
        </motion.div>
      </motion.div>
    </section>
  );
};