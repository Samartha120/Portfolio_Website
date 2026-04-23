import React, { useMemo, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Section } from '../../components/ui/Section';
import { SectionTitle } from '../../components/ui/SectionTitle';
import { Card } from '../../components/ui/Card';
import { Github } from 'lucide-react';
import { Link } from 'react-router-dom';
import { projects } from '../../data/projects';

export default function ProjectsSection() {
  const [filter, setFilter] = useState('All');

  const categories = useMemo(() => {
    const preferred = ['Web', 'UI', 'Full Stack'];
    const fromData = Array.from(new Set(projects.map((p) => p.category)));
    const rest = fromData.filter((c) => !preferred.includes(c));
    return ['All', ...preferred.filter((c) => fromData.includes(c)), ...rest];
  }, []);

  const filteredProjects = projects.filter(
    (project) => filter === 'All' || project.category === filter
  );

  return (
    <Section id="projects" className="bg-background relative">
      {/* Decorative Blur */}
      <div className="absolute top-1/2 left-0 w-full h-[420px] bg-white/5 blur-[120px] -z-10 pointer-events-none" />

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
                  ? 'text-white' 
                  : 'text-white/70 hover:text-white hover:bg-white/[0.03] border border-white/10'
              }`}
            >
              {isActive && (
                <motion.div
                  layoutId="active-filter"
                  className="absolute inset-0 bg-white/10 rounded-full -z-10 border border-white/10"
                  transition={{ type: "spring", stiffness: 260, damping: 30 }}
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
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 12 }}
              transition={{ duration: 0.4, ease: 'easeOut' }}
              key={project.id}
            >
              <Card hover={false} className="p-0 overflow-hidden group cursor-pointer focus-within:ring-2 focus-within:ring-primary/30 border-white/10 transition-all duration-300 ease-out hover:-translate-y-1 hover:border-primary/30">
                <div className={`h-72 w-full bg-gradient-to-br ${project.imageBg} relative overflow-hidden flex items-center justify-center`}>

                   {project.image && (
                     <img
                       src={project.image}
                       alt={project.title}
                       loading="lazy"
                       className="absolute inset-0 w-full h-full object-cover opacity-80"
                     />
                   )}

                   {/* Abstract background pattern */}
                   <div className="absolute inset-0 opacity-15 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI4IiBoZWlnaHQ9IjgiPgo8cmVjdCB3aWR0aD0iOCIgaGVpZ2h0PSI4IiBmaWxsPSIjZmZmIiBmaWxsLW9wYWNpdHk9IjAuMSIvPgo8L3N2Zz4=')] mix-blend-overlay"></div>
                   <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/35 to-transparent" />

                   <motion.div 
                     whileHover={{ scale: 1.02 }}
                     transition={{ duration: 0.35, ease: 'easeOut' }}
                     className="absolute inset-0"
                   />
                   
                   {/* Hover Overlay */}
                   <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-out flex flex-col items-center justify-end pb-7 px-6">
                     <div className="text-xs text-white/70 font-medium tracking-wide mb-3 text-center">
                       {project.category}
                       {Array.isArray(project.tags) && project.tags.length > 0 ? (
                         <span className="text-white/45"> · {project.tags.slice(0, 3).join(' • ')}</span>
                       ) : null}
                     </div>
                     <div className="flex items-center justify-center gap-3">
                       <Link
                         to={`/projects/${project.id}`}
                         className="h-11 px-5 rounded-full bg-primary text-white text-sm font-semibold inline-flex items-center justify-center hover:bg-primary/90 transition-colors"
                       >
                         View Details
                       </Link>
                       {project.repoUrl && (
                         <a
                           href={project.repoUrl}
                           target="_blank"
                           rel="noopener noreferrer"
                           className="h-11 px-5 rounded-full border border-primary/30 bg-white/[0.02] text-white text-sm font-semibold inline-flex items-center justify-center gap-2 hover:bg-white/[0.05] transition-colors"
                         >
                           GitHub <Github size={16} />
                         </a>
                       )}
                     </div>
                   </div>
                </div>

                {/* Decorative Line */}
                <div className="h-[1px] w-full bg-gradient-to-r from-transparent via-white/10 to-transparent"></div>

                <div className="p-8 relative">
                  <h3 className="text-2xl font-semibold text-white/90 mb-3">{project.title}</h3>
                  <p className="text-white/60 mb-6 font-light leading-relaxed h-16 line-clamp-2">
                    {project.desc}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag, idx) => (
                      <span key={idx} className="bg-white/[0.03] text-white/70 border border-white/10 px-3 py-1 rounded-full text-xs font-medium tracking-wide">
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
