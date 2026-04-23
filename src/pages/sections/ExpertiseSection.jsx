import React from 'react';
import { motion } from 'framer-motion';
import { Section } from '../../components/ui/Section';
import { SectionTitle } from '../../components/ui/SectionTitle';
import { Card } from '../../components/ui/Card';
import { Code2, LayoutTemplate, Smartphone, Layers, Terminal, Sparkles } from 'lucide-react';

const skills = [
  {
    icon: <Code2 size={24} />,
    title: 'Frontend Architecture',
    desc: 'Building scalable, maintainable React and Next.js applications using modern state management.'
  },
  {
    icon: <LayoutTemplate size={24} />,
    title: 'UI/UX Design',
    desc: 'Crafting intuitive, highly accessible interfaces with Figma and translating them into pixel-perfect code.'
  },
  {
    icon: <Sparkles size={24} />,
    title: 'Micro-Interactions',
    desc: 'Enhancing user experience with fluid animations using Framer Motion and GSAP.'
  },
  {
    icon: <Smartphone size={24} />,
    title: 'Responsive Design',
    desc: 'Ensuring seamless performance and flawless layouts across mobile, tablet, and desktop.'
  },
  {
    icon: <Layers size={24} />,
    title: 'Design Systems',
    desc: 'Developing comprehensive, reusable component libraries with Tailwind CSS and Storybook.'
  },
  {
    icon: <Terminal size={24} />,
    title: 'Performance Optimization',
    desc: 'Improving Web Vitals, tree-shaking, and lazy loading for blazing-fast web experiences.'
  }
];

export default function ExpertiseSection() {
  return (
    <Section id="expertise" className="relative">
      <SectionTitle 
        title="My Expertise" 
        subtitle="What I Do" 
        center 
      />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
        {skills.map((skill, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.45, delay: idx * 0.06, ease: 'easeOut' }}
            className="h-full"
          >
            <Card hover={false} className="h-full group flex flex-col items-start gap-6 border-white/10 hover:border-white/20 transition-all duration-300 ease-out">
              <div className="relative">
                <div className="relative p-4 rounded-2xl bg-white/[0.03] border border-white/10 text-white/80 group-hover:text-white transition-colors duration-300">
                  {skill.icon}
                </div>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-white/90 mb-3">{skill.title}</h3>
                <p className="text-white/60 font-light leading-relaxed">
                  {skill.desc}
                </p>
              </div>
            </Card>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}
