import React from 'react';
import { motion } from 'framer-motion';
import { Section } from '../../components/ui/Section';
import { SectionTitle } from '../../components/ui/SectionTitle';
import { profile } from '../../data/Profile';

const timeline = [
  {
    year: '2022 - Present',
    role: 'Senior Frontend Engineer',
    company: 'TechFlow Solutions',
    desc: 'Leading a team of 4 frontend developers. Architected a scalable React/Next.js dashboard utilized by 100k+ MAU, optimizing performance by 40%.',
  },
  {
    year: '2019 - 2022',
    role: 'UI/UX Developer',
    company: 'Creative StudioX',
    desc: 'Built pixel-perfect, accessible web interfaces. Bridged the gap between design and engineering, implementing comprehensive design systems.',
  },
  {
    year: '2017 - 2019',
    role: 'B.Sc. Computer Science',
    company: 'University of Technology',
    desc: 'Graduated with First Class Honors. Specialized in Human-Computer Interaction and Software Engineering paradigms.',
  }
];

export default function AboutSection() {
  return (
    <Section id="about" className="bg-surface relative overflow-hidden">
      <div className="absolute -left-40 top-1/4 w-96 h-96 bg-white/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 relative z-10">
        <div className="space-y-8">
          <SectionTitle 
            title="Design & Engineering in Harmony" 
            subtitle="About Me" 
            className="mb-6 md:mb-8"
          />
          <div className="space-y-6 text-white/70 font-light leading-relaxed text-lg">
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="text-white/90 text-xl font-medium"
            >
              {profile.bio}
            </motion.p>
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              I focus on accessible UI, performance, and maintainable component systems — the kind of work that scales from a personal site to production SaaS.
            </motion.p>
            
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="pt-8 flex items-center gap-6"
            >
              <div className="flex -space-x-4">
                {[...Array(3)].map((_, i) => (
                  <div
                    key={i}
                    className="w-14 h-14 rounded-full border border-white/10 bg-white/[0.03] flex items-center justify-center z-10 shadow-md shadow-black/30 transform transition-transform duration-300 hover:-translate-y-1 hover:scale-[1.03] relative"
                  >
                    <div className="w-8 h-8 rounded-full bg-white/5 border border-white/10" />
                  </div>
                ))}
              </div>
              <div className="text-sm border-l border-white/10 pl-6">
                <p className="font-semibold text-white tracking-widest uppercase text-xs mb-1">Trusted by</p>
                <p className="text-white/50">teams shipping production UI</p>
              </div>
            </motion.div>
          </div>
        </div>

        <div className="relative pt-4">
          <div className="absolute left-[20px] top-4 bottom-4 w-[1px] bg-gradient-to-b from-primary via-white/10 to-transparent"></div>
          
          <div className="space-y-12">
            {timeline.map((item, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.55, delay: idx * 0.08, ease: "easeOut" }}
                className="relative pl-14 group"
              >
                {/* Timeline Dot */}
                <div className="absolute left-0 top-1 w-10 h-10 rounded-full bg-surface border border-white/10 flex items-center justify-center group-hover:border-white/20 transition-colors duration-300 shadow-md shadow-black/30">
                  <div className="w-3 h-3 rounded-full bg-primary/40 group-hover:bg-primary transition-colors duration-300" />
                </div>
                
                <div className="bg-white/[0.02] border border-white/[0.06] p-6 rounded-2xl group-hover:bg-white/[0.03] transition-colors duration-300">
                  <span className="inline-block px-3 py-1 rounded-full bg-white/[0.04] text-white/70 text-xs font-semibold tracking-wider mb-3 border border-white/10">{item.year}</span>
                  <h3 className="text-2xl font-semibold text-white/90 mb-1">{item.role}</h3>
                  <p className="text-white/50 text-sm mb-4 font-medium tracking-wide">{item.company}</p>
                  <p className="text-white/60 font-light leading-relaxed">{item.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </Section>
  );
}
