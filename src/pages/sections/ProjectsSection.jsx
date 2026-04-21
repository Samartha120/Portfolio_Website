import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Section } from '../../components/ui/Section';
import { SectionTitle } from '../../components/ui/SectionTitle';
import { Card } from '../../components/ui/Card';
import { ExternalLink, Github, Sparkles } from 'lucide-react';

const categories = ['All', 'React', 'Next.js', 'UI/UX'];

const projects = [
  {
    id: 1,
    title: 'FinTech Dashboard',
    category: 'React',
    imageBg: 'from-blue-600 via-indigo-500 to-cyan-400',
    tags: ['React', 'Tailwind', 'Recharts'],
    desc: 'A comprehensive financial dashboard with real-time analytics, dynamic charts, and transaction monitoring.',
  },
  {
    id: 2,
    title: 'E-Commerce SaaS',
    category: 'Next.js',
    imageBg: 'from-fuchsia-600 via-purple-500 to-pink-500',
    tags: ['Next.js', 'Stripe', 'Framer Motion'],
    desc: 'Headless e-commerce storefront supporting multi-tenant architectures with seamless payment integrations.',
  },
  {
    id: 3,
    title: 'AI Image Generator',
    category: 'React',
    imageBg: 'from-emerald-500 via-teal-400 to-cyan-400',
    tags: ['React', 'OpenAI API', 'Canvas'],
    desc: 'A sleek interface for generating and editing AI images with an intuitive, interactive canvas area.',
  },
  {
    id: 4,
    title: 'Design System',
    category: 'UI/UX',
    imageBg: 'from-orange-500 via-red-500 to-rose-500',
    tags: ['Figma', 'Storybook', 'Tailwind'],
    desc: 'A robust, accessible design system with 50+ components, standardizing UI across multiple enterprise applications.',
  }
];

export default function ProjectsSection() {
  const [filter, setFilter] = useState('All');

  const filteredProjects = projects.filter(
    (project) => filter === 'All' || project.category === filter
  );

  return (
    <Section id="projects" className="bg-background relative">
      {/* Decorative Blur */}
      <div className="absolute top-1/2 left-0 w-full h-[500px] bg-gradient-to-b from-primary/5 via-secondary/5 to-transparent blur-[120px] -z-10 pointer-events-none" />

      <SectionTitle 
        title="Featured Work" 
        subtitle="Portfolio" 
        center 
      />

      {/* Filter Tabs */}
      <div className="flex flex-wrap justify-center gap-3 mb-16 relative z-10">
        {categories.map((cat) => {
          const isActive = filter === cat;
          return (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`relative px-6 py-2.5 rounded-full text-sm font-medium transition-all ${
                isActive 
                  ? 'text-black' 
                  : 'text-white/70 hover:text-white hover:bg-white/5 border border-white/5'
              }`}
            >
              {isActive && (
                <motion.div
                  layoutId="active-filter"
                  className="absolute inset-0 bg-white rounded-full -z-10 shadow-[0_0_20px_rgba(255,255,255,0.4)]"
                  transition={{ type: "spring", stiffness: 300, damping: 25 }}
                />
              )}
              <span className="relative z-10">{cat}</span>
            </button>
          );
        })}
      </div>

      {/* Projects Grid */}
      <motion.div 
        layout
        className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 relative z-10"
      >
        <AnimatePresence mode="popLayout">
          {filteredProjects.map((project) => (
            <motion.div
              layout
              initial={{ opacity: 0, scale: 0.9, filter: "blur(10px)" }}
              animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
              exit={{ opacity: 0, scale: 0.9, filter: "blur(10px)" }}
              transition={{ duration: 0.5, type: "spring" }}
              key={project.id}
            >
              <Card hover={false} className="p-0 overflow-hidden group focus-within:ring-2 focus-within:ring-primary/50 border-white/5 transition-all duration-500 hover:shadow-[0_0_40px_rgba(59,130,246,0.1)] hover:-translate-y-2">
                <div className={`h-72 w-full bg-gradient-to-br ${project.imageBg} relative overflow-hidden flex items-center justify-center`}>
                   
                   {/* Abstract background pattern */}
                   <div className="absolute inset-0 opacity-20 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI4IiBoZWlnaHQ9IjgiPgo8cmVjdCB3aWR0aD0iOCIgaGVpZ2h0PSI4IiBmaWxsPSIjZmZmIiBmaWxsLW9wYWNpdHk9IjAuMSIvPgo8L3N2Zz4=')] mix-blend-overlay"></div>

                   <motion.div 
                     whileHover={{ scale: 1.1 }}
                     transition={{ duration: 0.5 }}
                     className="w-full h-full flex items-center justify-center relative"
                   >
                     <span className="text-white/40 font-black text-4xl lg:text-5xl mix-blend-overlay uppercase tracking-[0.2em] px-6 text-center leading-tight drop-shadow-2xl">{project.title}</span>
                   </motion.div>
                   
                   {/* Gradient Hover Overlay */}
                   <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500 flex items-end justify-center pb-8 gap-4">
                     <motion.a 
                       whileHover={{ y: -5, scale: 1.1 }}
                       whileTap={{ scale: 0.95 }}
                       href="#" 
                       className="p-3 bg-white text-black rounded-full shadow-[0_0_20px_rgba(255,255,255,0.5)]"
                     >
                       <ExternalLink size={20} />
                     </motion.a>
                     <motion.a 
                       whileHover={{ y: -5, scale: 1.1 }}
                       whileTap={{ scale: 0.95 }}
                       href="#" 
                       className="p-3 bg-white/10 text-white rounded-full backdrop-blur-md border border-white/20 hover:bg-white/20"
                     >
                       <Github size={20} />
                     </motion.a>
                   </div>
                </div>

                {/* Decorative Line */}
                <div className="h-[1px] w-full bg-gradient-to-r from-transparent via-white/10 to-transparent"></div>

                <div className="p-8 relative">
                  <div className="absolute top-0 right-8 -translate-y-1/2 p-2 rounded-full bg-surface border border-white/10">
                    <Sparkles size={16} className="text-primary" />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-primary transition-colors duration-300">{project.title}</h3>
                  <p className="text-white/60 mb-6 font-light leading-relaxed h-16 line-clamp-2">
                    {project.desc}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag, idx) => (
                      <span key={idx} className="bg-primary/10 text-primary border border-primary/20 px-3 py-1 rounded-full text-xs font-medium uppercase tracking-wider">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>
    </Section>
  );
}
