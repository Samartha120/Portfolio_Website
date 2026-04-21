import React from 'react';
import { motion } from 'framer-motion';
import { SectionTitle } from '../common/SectionTitle';
import { profile } from '../../data/Profile';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

export const AboutPreview = () => {
  return (
    <section className="py-24 relative overflow-hidden bg-surface/50 border-t border-white/5">
      <div className="container mx-auto px-6 md:px-12 max-w-7xl relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
          <div>
            <SectionTitle title="Design & Engineering in Harmony" subtitle="About Me" />
            <div className="space-y-6 text-white/70 font-light leading-relaxed text-lg tracking-wide">
              <motion.p
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="text-white/90 text-xl font-medium"
              >
                {profile.tagline}
              </motion.p>
              <motion.p
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 }}
              >
                {profile.bio}
              </motion.p>
              
              <motion.div 
                 initial={{ opacity: 0 }}
                 whileInView={{ opacity: 1 }}
                 viewport={{ once: true }}
                 transition={{ duration: 0.5, delay: 0.2 }}
                 className="pt-6"
              >
                <Link to="/about" className="inline-flex items-center text-primary font-medium hover:text-white transition-colors group">
                  Read full biography <ArrowRight size={18} className="ml-2 group-hover:translate-x-1 transition-transform" />
                </Link>
              </motion.div>
            </div>
          </div>

          <div className="relative pt-4">
            <div className="absolute left-[20px] top-4 bottom-4 w-[1px] bg-gradient-to-b from-primary via-white/10 to-transparent"></div>
            <div className="space-y-12">
              {profile.experience.slice(0, 2).map((item, idx) => (
                <motion.div 
                  key={idx}
                  initial={{ opacity: 0, x: 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.6, delay: idx * 0.15, type: "spring" }}
                  className="relative pl-14 group"
                >
                  <div className="absolute left-0 top-1 w-10 h-10 rounded-full bg-surface border border-white/10 flex items-center justify-center group-hover:border-primary/50 transition-colors duration-300 shadow-[0_0_15px_rgba(0,0,0,0.5)]">
                    <div className="w-3 h-3 rounded-full bg-primary/20 group-hover:bg-primary group-hover:shadow-[0_0_10px_rgba(59,130,246,0.8)] transition-all duration-300" />
                  </div>
                  <div className="bg-white/[0.02] border border-white/[0.05] p-6 rounded-2xl backdrop-blur-sm group-hover:bg-white/[0.04] transition-colors duration-300">
                    <span className="inline-block px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-semibold tracking-wider mb-3">{item.year}</span>
                    <h3 className="text-xl font-bold text-white mb-1 group-hover:text-primary transition-colors">{item.role}</h3>
                    <p className="text-white/50 text-sm mb-4 font-medium tracking-wide">{item.company}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
