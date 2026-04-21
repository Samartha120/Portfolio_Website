import React from 'react';
import { motion } from 'framer-motion';
import { Section } from '../../components/ui/Section';
import { SectionTitle } from '../../components/ui/SectionTitle';

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
      {/* Decorative Blob */}
      <div className="absolute -left-32 top-1/4 w-96 h-96 bg-primary/10 rounded-full blur-[100px] pointer-events-none" />

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 relative z-10">
        <div className="space-y-8">
          <SectionTitle 
            title="Design & Engineering in Harmony" 
            subtitle="About Me" 
            className="mb-6 md:mb-8"
          />
          <div className="space-y-6 text-white/70 font-light leading-relaxed text-lg tracking-wide">
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="text-white/90 text-xl font-medium"
            >
              I am a passionate software engineer with a sharp eye for design. Over the last 6 years, 
              I have been dedicated to bridging the gap between exceptional design and solid engineering.
            </motion.p>
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              My expertise lies in building responsive, scalable frontend architectures 
              and creating fluid, interactive user experiences. I believe that a perfect application 
              should not only look stunning but also perform flawlessly under the hood.
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
                  <div key={i} className={`w-14 h-14 rounded-full border-2 border-surface bg-gradient-to-br from-white/20 to-white/5 flex items-center justify-center backdrop-blur-md z-${30-i*10} shadow-xl transform transition-transform hover:-translate-y-2 hover:scale-110 relative group`}>
                     <div className="w-full h-full rounded-full bg-black/40 absolute inset-0 -z-10 group-hover:bg-transparent transition-colors"></div>
                  </div>
                ))}
              </div>
              <div className="text-sm border-l border-white/10 pl-6">
                <p className="font-semibold text-white tracking-widest uppercase text-xs mb-1">Trusted by</p>
                <p className="text-white/50">Industry Leaders globally</p>
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
                transition={{ duration: 0.6, delay: idx * 0.15, type: "spring" }}
                className="relative pl-14 group"
              >
                {/* Timeline Dot */}
                <div className="absolute left-0 top-1 w-10 h-10 rounded-full bg-surface border border-white/10 flex items-center justify-center group-hover:border-primary/50 transition-colors duration-300 shadow-[0_0_15px_rgba(0,0,0,0.5)]">
                  <div className="w-3 h-3 rounded-full bg-primary/20 group-hover:bg-primary group-hover:shadow-[0_0_10px_rgba(59,130,246,0.8)] transition-all duration-300" />
                </div>
                
                <div className="bg-white/[0.02] border border-white/[0.05] p-6 rounded-2xl backdrop-blur-sm group-hover:bg-white/[0.04] transition-colors duration-300">
                  <span className="inline-block px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-semibold tracking-wider mb-3">{item.year}</span>
                  <h3 className="text-2xl font-bold text-white mb-1 group-hover:text-primary transition-colors">{item.role}</h3>
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
