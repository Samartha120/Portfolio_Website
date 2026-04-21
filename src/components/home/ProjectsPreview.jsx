import React from 'react';
import { motion } from 'framer-motion';
import { SectionTitle } from '../common/SectionTitle';
import { Card } from '../common/Card';
import { projects } from '../../data/projects';
import { Link } from 'react-router-dom';

export const ProjectsPreview = () => {
  return (
    <section className="py-24 bg-surface/30 relative">
      <div className="absolute top-1/2 left-0 w-full h-[500px] bg-gradient-to-b from-primary/5 via-secondary/5 to-transparent blur-[120px] -z-10 pointer-events-none" />
      <div className="container mx-auto px-6 md:px-12 max-w-7xl relative z-10">
        <SectionTitle title="Featured Work" subtitle="Selected Projects" center />
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 mb-12">
          {projects.slice(0, 2).map((project) => (
            <motion.div
              layout
              initial={{ opacity: 0, scale: 0.95, filter: "blur(5px)" }}
              whileInView={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, type: "spring" }}
              key={project.id}
            >
              <Card hover={false} className="p-0 overflow-hidden group border-white/5 transition-all duration-500 hover:shadow-[0_0_40px_rgba(59,130,246,0.1)] hover:-translate-y-2">
                <div className={`h-64 w-full bg-gradient-to-br ${project.imageBg} relative overflow-hidden flex items-center justify-center`}>
                   <div className="absolute inset-0 opacity-20 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI4IiBoZWlnaHQ9IjgiPgo8cmVjdCB3aWR0aD0iOCIgaGVpZ2h0PSI4IiBmaWxsPSIjZmZmIiBmaWxsLW9wYWNpdHk9IjAuMSIvPgo8L3N2Zz4=')] mix-blend-overlay"></div>
                   <motion.div 
                     whileHover={{ scale: 1.05 }}
                     transition={{ duration: 0.5 }}
                     className="w-full h-full flex items-center justify-center relative"
                   >
                     <span className="text-white/40 font-black text-3xl mix-blend-overlay uppercase tracking-[0.2em] px-6 text-center leading-tight drop-shadow-2xl">{project.title}</span>
                   </motion.div>
                </div>
                <div className="h-[1px] w-full bg-gradient-to-r from-transparent via-white/10 to-transparent"></div>
                <div className="p-8 relative">
                  <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-primary transition-colors duration-300">{project.title}</h3>
                  <p className="text-white/60 mb-6 font-light leading-relaxed h-16 line-clamp-2">
                    {project.desc}
                  </p>
                  <Link to={`/projects`} className="text-sm font-medium text-white/50 hover:text-white uppercase tracking-widest transition-colors">View Details →</Link>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
        
        <div className="text-center">
           <Link to="/projects" className="text-white/60 hover:text-white transition-colors underline underline-offset-4">View All Projects</Link>
        </div>
      </div>
    </section>
  );
};
