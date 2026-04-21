import React from 'react';
import { motion } from 'framer-motion';
import { SectionTitle } from '../common/SectionTitle';
import { Card } from '../common/Card';
import { Code2, LayoutTemplate, Layers } from 'lucide-react';
import { Link } from 'react-router-dom';

const skillsPreview = [
  { icon: <Code2 size={24} />, title: 'Frontend Architecture', desc: 'Building scalable React applications.' },
  { icon: <LayoutTemplate size={24} />, title: 'UI/UX Design', desc: 'Crafting intuitive interfaces.' },
  { icon: <Layers size={24} />, title: 'AI Integration', desc: 'Connecting LLMs to polished frontends.' }
];

export const ExpertisePreview = () => {
  return (
    <section className="py-24 relative">
      <div className="container mx-auto px-6 md:px-12 max-w-7xl">
        <SectionTitle title="My Expertise" subtitle="Core Skills" center />
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 mb-12">
          {skillsPreview.map((skill, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: idx * 0.1, type: "spring", stiffness: 100 }}
              className="h-full"
            >
              <Card hover={false} className="h-full group flex flex-col items-start gap-6 border-white/[0.05] hover:border-primary/30 transition-colors duration-500">
                <div className="relative">
                  <div className="absolute inset-0 bg-primary/20 blur-xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  <div className="relative p-4 rounded-2xl bg-white/[0.03] border border-white/10 text-white group-hover:bg-primary/20 group-hover:text-primary transition-colors duration-500">
                    {skill.icon}
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white group-hover:text-primary transition-colors duration-300 mb-3">{skill.title}</h3>
                  <p className="text-white/50 font-light leading-relaxed group-hover:text-white/70 transition-colors duration-300">
                    {skill.desc}
                  </p>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
        <div className="text-center">
           <Link to="/expertise" className="text-white/60 hover:text-white transition-colors underline underline-offset-4">View All Expertise</Link>
        </div>
      </div>
    </section>
  );
};
