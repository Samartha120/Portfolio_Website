import React from 'react';
import { motion } from 'framer-motion';
import { SectionTitle } from '../common/SectionTitle';
import { Card } from '../common/Card';
import { testimonials } from '../../data/testimonials';
import { Quote } from 'lucide-react';

export const Testimonials = () => {
  return (
    <section className="py-24 relative overflow-hidden">
      <div className="container mx-auto px-6 md:px-12 max-w-7xl relative z-10">
        <SectionTitle title="Client Feedback" subtitle="Testimonials" center />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {testimonials.map((test, idx) => (
            <motion.div
              key={test.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
            >
              <Card hover={false} className="p-8 h-full flex flex-col justify-between group">
                <Quote size={40} className="text-white/10 mb-6 group-hover:text-primary/20 transition-colors" />
                <p className="text-white/80 font-light text-lg leading-relaxed mb-8 italic">
                  "{test.text}"
                </p>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary/30 to-accent/30 flex items-center justify-center font-bold text-white shadow-inner">
                    {test.name.charAt(0)}
                  </div>
                  <div>
                    <h4 className="font-bold text-white leading-tight">{test.name}</h4>
                    <span className="text-xs text-white/40 uppercase tracking-widest">{test.role}</span>
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
