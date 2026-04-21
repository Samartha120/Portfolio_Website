import React from 'react';
import { motion } from 'framer-motion';
import { Section } from '../../components/ui/Section';
import { SectionTitle } from '../../components/ui/SectionTitle';
import { Card } from '../../components/ui/Card';
import { BookOpen, Presentation, ChevronRight, ArrowUpRight } from 'lucide-react';

const insights = [
  {
    type: 'Blog',
    icon: <BookOpen size={18} className="text-primary" />,
    title: 'The Future of State Management in React 19',
    date: 'Oct 24, 2026',
    link: '#',
  },
  {
    type: 'Research',
    icon: <BookOpen size={18} className="text-secondary" />,
    title: 'Optimizing LCP in Graph-Heavy Dashboards',
    date: 'Sep 12, 2026',
    link: '#',
  },
  {
    type: 'Workshop',
    icon: <Presentation size={18} className="text-accent" />,
    title: 'Mastering Framer Motion for Enterprise UIs',
    date: 'Aug 05, 2026',
    link: '#',
  }
];

export default function InsightsSection() {
  return (
    <Section id="insights" className="relative">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24 relative z-10">
        <div className="lg:col-span-5 relative">
          <div className="sticky top-32">
            <SectionTitle 
              title="Thoughts & Speaking" 
              subtitle="Insights" 
            />
            <p className="text-white/60 font-light leading-relaxed mb-10 text-lg">
              I actively contribute to the frontend community through technical writing, 
              research on performance optimization, and conducting specialized masterclasses 
              on modern UI engineering.
            </p>
            <a href="#" className="inline-flex items-center gap-2 text-white font-medium hover:text-primary transition-all group pb-1 border-b border-white/20 hover:border-primary">
              View all publications 
              <ArrowUpRight size={18} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
            </a>
          </div>
        </div>

        <div className="lg:col-span-7 space-y-6">
          {insights.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: idx * 0.1, type: "spring", stiffness: 70 }}
            >
              <a href={item.link} className="block group">
                <Card hover={false} className="p-6 md:p-8 flex flex-col md:flex-row md:items-center justify-between gap-6 border-white/5 group-hover:border-white/20 group-hover:bg-white/[0.05] transition-all duration-300">
                  <div className="flex items-start gap-6">
                    <div className="p-4 rounded-2xl bg-white/[0.03] border border-white/10 group-hover:scale-110 transition-transform duration-500 shadow-inner">
                      {item.icon}
                    </div>
                    <div>
                      <p className="text-xs text-white/40 mb-2 font-medium tracking-widest uppercase">{item.type} <span className="mx-2">•</span> {item.date}</p>
                      <h4 className="text-xl font-bold text-white group-hover:text-primary transition-colors duration-300 leading-tight">{item.title}</h4>
                    </div>
                  </div>
                  <div className="hidden md:flex w-12 h-12 rounded-full border border-white/10 items-center justify-center group-hover:bg-primary group-hover:border-primary group-hover:text-white text-white/30 transition-all duration-500">
                    <ChevronRight size={20} />
                  </div>
                </Card>
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </Section>
  );
}
