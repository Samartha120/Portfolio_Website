import React from 'react';
import { motion } from 'framer-motion';
import { Section } from '../../components/ui/Section';
import { SectionTitle } from '../../components/ui/SectionTitle';
import { Card } from '../../components/ui/Card';
import { BookOpen, ChevronRight, ArrowUpRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { blogs } from '../../data/Blogs';

const formatDate = (iso) => {
  const d = new Date(iso);
  return d.toLocaleDateString(undefined, { year: 'numeric', month: 'short', day: '2-digit' });
};

export default function InsightsSection() {
  const items = blogs.slice(0, 3).map((b) => ({
    id: b.id,
    type: b.category || 'Blog',
    icon: <BookOpen size={18} className="text-primary" />,
    title: b.title,
    date: formatDate(b.date),
    readTime: b.readTime,
    link: `/blog/${b.id}`,
  }));

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
            <Link to="/blog" className="inline-flex items-center gap-2 text-white/80 font-medium hover:text-white transition-all group pb-1 border-b border-white/20 hover:border-white/40">
              View all posts
              <ArrowUpRight size={18} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
            </Link>
          </div>
        </div>

        <div className="lg:col-span-7 space-y-6">
          {items.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.45, delay: idx * 0.06, ease: 'easeOut' }}
            >
              <Link to={item.link} className="block group">
                <Card hover={false} className="p-6 md:p-8 flex flex-col md:flex-row md:items-center justify-between gap-6 border-white/10 group-hover:border-white/20 group-hover:bg-white/[0.04] transition-all duration-300 ease-out">
                  <div className="flex items-start gap-6">
                    <div className="p-4 rounded-2xl bg-white/[0.03] border border-white/10 transition-transform duration-300 ease-out group-hover:scale-[1.03]">
                      {item.icon}
                    </div>
                    <div>
                      <p className="text-xs text-white/40 mb-2 font-medium tracking-widest uppercase">
                        {item.type} <span className="mx-2">•</span> {item.date}{' '}
                        {item.readTime ? <><span className="mx-2">•</span>{item.readTime}</> : null}
                      </p>
                      <h4 className="text-xl font-semibold text-white/90 group-hover:text-white transition-colors duration-300 leading-tight">{item.title}</h4>
                    </div>
                  </div>
                  <div className="hidden md:flex w-12 h-12 rounded-full border border-white/10 items-center justify-center group-hover:bg-white/[0.04] group-hover:border-white/20 group-hover:text-white/60 text-white/30 transition-all duration-300 ease-out">
                    <ChevronRight size={20} />
                  </div>
                </Card>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </Section>
  );
}
