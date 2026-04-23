import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Section } from '../../components/ui/Section';
import { SectionTitle } from '../../components/ui/SectionTitle';
import { Button } from '../../components/ui/Button';
import { Card } from '../../components/ui/Card';
import { Send, CheckCircle, Mail, MapPin, Phone } from 'lucide-react';
import { profile } from '../../data/Profile';

export default function ContactSection() {
  const [formState, setFormState] = useState('idle'); // idle, submitting, success
  
  const handleSubmit = (e) => {
    e.preventDefault();
    setFormState('submitting');
    
    setTimeout(() => {
      setFormState('success');
      setTimeout(() => {
        setFormState('idle');
        e.target.reset();
      }, 3000);
    }, 1500);
  };

  return (
    <Section id="contact" className="relative">
      <SectionTitle 
        title="Let's Work Together" 
        subtitle="Contact" 
        center 
      />
      
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
        <motion.div
           initial={{ opacity: 0, x: -30 }}
           whileInView={{ opacity: 1, x: 0 }}
           viewport={{ once: true }}
           transition={{ duration: 0.5, ease: 'easeOut' }}
           className="lg:col-span-1 space-y-6"
        >
          <Card hover={false} className="p-8 h-full flex flex-col justify-center border-white/5 bg-white/[0.02]">
            <h3 className="text-2xl font-bold text-white mb-8">Get in Touch</h3>
            <div className="space-y-8">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-white/[0.03] border border-white/10 flex items-center justify-center text-white/70">
                  <Mail size={20} />
                </div>
                <div>
                  <p className="text-sm text-white/50 mb-1">Email</p>
                  <p className="text-white font-medium">{profile.email}</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-white/[0.03] border border-white/10 flex items-center justify-center text-white/70">
                  <Phone size={20} />
                </div>
                <div>
                  <p className="text-sm text-white/50 mb-1">Phone</p>
                  <p className="text-white font-medium">{profile.phone}</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-white/[0.03] border border-white/10 flex items-center justify-center text-white/70">
                  <MapPin size={20} />
                </div>
                <div>
                  <p className="text-sm text-white/50 mb-1">Location</p>
                  <p className="text-white font-medium">{profile.location}</p>
                </div>
              </div>
            </div>
          </Card>
        </motion.div>

        <motion.div
           initial={{ opacity: 0, x: 30 }}
           whileInView={{ opacity: 1, x: 0 }}
           viewport={{ once: true }}
           transition={{ duration: 0.5, ease: 'easeOut' }}
           className="lg:col-span-2"
        >
          <Card hover={false} className="p-8 md:p-12 relative overflow-hidden border-white/5">
            <div className="absolute inset-0 bg-gradient-to-b from-white/[0.02] to-transparent -z-10 pointer-events-none" />

            {formState === 'success' ? (
              <motion.div 
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="flex flex-col items-center justify-center py-12 text-center h-[400px]"
              >
                <div className="w-24 h-24 bg-green-500/10 border border-green-500/20 rounded-full flex items-center justify-center mb-6">
                  <CheckCircle size={40} className="text-green-500" />
                </div>
                <h3 className="text-3xl font-bold text-white mb-4">Message Sent!</h3>
                <p className="text-white/60 text-lg">Thank you for reaching out. I'll get back to you shortly.</p>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6 relative z-10">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label htmlFor="name" className="text-xs font-bold uppercase tracking-widest text-white/50 ml-1">Name</label>
                    <input
                      type="text"
                      id="name"
                      required
                      className="w-full bg-black/40 border border-white/10 rounded-xl px-5 py-4 text-white placeholder:text-white/20 focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary/50 transition-all font-light shadow-inner backdrop-blur-sm"
                      placeholder="John Doe"
                    />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="email" className="text-xs font-bold uppercase tracking-widest text-white/50 ml-1">Email</label>
                    <input
                      type="email"
                      id="email"
                      required
                      className="w-full bg-black/40 border border-white/10 rounded-xl px-5 py-4 text-white placeholder:text-white/20 focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary/50 transition-all font-light shadow-inner backdrop-blur-sm"
                      placeholder="john@example.com"
                    />
                  </div>
                </div>
                
                <div className="space-y-2">
                  <label htmlFor="subject" className="text-xs font-bold uppercase tracking-widest text-white/50 ml-1">Subject</label>
                  <input
                    type="text"
                    id="subject"
                    required
                    className="w-full bg-black/40 border border-white/10 rounded-xl px-5 py-4 text-white placeholder:text-white/20 focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary/50 transition-all font-light shadow-inner backdrop-blur-sm"
                    placeholder="Project Inquiry"
                  />
                </div>

                <div className="space-y-2">
                  <label htmlFor="message" className="text-xs font-bold uppercase tracking-widest text-white/50 ml-1">Message</label>
                  <textarea
                    id="message"
                    required
                    rows={5}
                    className="w-full bg-black/40 border border-white/10 rounded-xl px-5 py-4 text-white placeholder:text-white/20 focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary/50 transition-all font-light resize-none shadow-inner backdrop-blur-sm"
                    placeholder="Tell me about your project..."
                  />
                </div>

                <Button 
                  type="submit" 
                  variant="primary" 
                  size="lg" 
                  className="w-full mt-4" 
                  icon={formState === 'submitting' ? null : <Send size={18} />}
                  disabled={formState === 'submitting'}
                >
                  {formState === 'submitting' ? 'Sending...' : 'Send Message'}
                </Button>
              </form>
            )}
          </Card>
        </motion.div>
      </div>
    </Section>
  );
}
