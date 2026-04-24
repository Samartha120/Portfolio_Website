import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Section } from '../../components/ui/Section';
import { Button } from '../../components/ui/Button';
import { ArrowRight, Download, Sparkles } from 'lucide-react';

export default function HeroSection() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"]
  });

  const y1 = useTransform(scrollYProgress, [0, 1], [0, 200]);
  const y2 = useTransform(scrollYProgress, [0, 1], [0, -100]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  const handleViewWork = () => {
    const el = document.getElementById('projects');
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };


  return (
    <Section id="home" className="min-h-[100svh] flex items-center justify-center pt-20 overflow-hidden relative" ref={ref}>
      {/* Dynamic Background Elements */}
      <motion.div style={{ y: y1 }} className="absolute top-1/4 left-1/4 w-[400px] h-[400px] bg-primary/20 rounded-full blur-[120px] -z-10 mix-blend-screen pointer-events-none" />
      <motion.div style={{ y: y2 }} className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-secondary/20 rounded-full blur-[140px] -z-10 mix-blend-screen pointer-events-none animate-spin-slow" />
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI0IiBoZWlnaHQ9IjQiPgo8cmVjdCB3aWR0aD0iNCIgaGVpZ2h0PSI0IiBmaWxsPSIjZmZmIiBmaWxsLW9wYWNpdHk9IjAuMDUiLz4KPC9zdmc+')] opacity-20 z-0"></div>

      <motion.div className="flex flex-col items-center text-center w-full relative z-10">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 backdrop-blur-md shadow-[0_0_20px_rgba(255,255,255,0.05)] mb-8 group overflow-hidden"
        >
          <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-primary/10 to-accent/10 opacity-0 group-hover:opacity-100 transition-opacity blur-xl"></span>
          <Sparkles size={14} className="text-accent" />
          <span className="text-sm font-medium text-white/90">Crafting Digital Excellence</span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.2, type: "spring", stiffness: 50 }}
          className="text-6xl md:text-8xl lg:text-9xl font-black tracking-tighter text-white mb-6 leading-[0.9] lg:leading-[0.9]"
        >
          Building <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-white/80 to-white/40">Digital</span> <br className="hidden md:block" />
          <span className="text-transparent bg-clip-text bg-gradient-to-b from-primary via-secondary to-accent relative inline-block group cursor-default">
            Experiences
            <motion.span 
              className="absolute -bottom-2 left-0 w-full h-2 bg-gradient-to-r from-primary to-accent rounded-full blur-md opacity-50"
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ delay: 1, duration: 1 }}
            />
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, filter: "blur(10px)" }}
          animate={{ opacity: 1, filter: "blur(0px)" }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="text-lg md:text-2xl text-white/60 max-w-2xl mx-auto mb-10 font-light leading-relaxed"
        >
          Senior Frontend Engineer specializing in React and modern UI systems.
          Building <strong className="text-white font-medium">accessible, performance‑focused</strong> product experiences.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.7 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-6 w-full"
        >
          <Button
            variant="primary"
            size="lg"
            className="w-full sm:w-auto text-lg h-14 px-8"
            glow
            icon={<ArrowRight size={20} />}
            type="button"
            onClick={handleViewWork}
          >
            View My Work
          </Button>
          <Button
            variant="secondary"
            size="lg"
            className="w-full sm:w-auto text-lg h-14 px-8 group"
            icon={<Download size={20} className="group-hover:text-primary transition-colors" />}
            href="/resume.pdf"
            download="Samartha_Resume.pdf"
            aria-label="Download Resume"
          >
            Download Resume
          </Button>
        </motion.div>
      </motion.div>

      {/* Floating scroll indicator */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        style={{ opacity }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3 z-10"
      >
        <span className="text-[10px] text-white/40 uppercase tracking-[0.2em] font-medium">Scroll down</span>
        <div className="w-[2px] h-16 bg-white/10 relative rounded-full overflow-hidden">
          <motion.div
            animate={{ top: ['-100%', '100%'] }}
            transition={{ repeat: Infinity, duration: 1.5, ease: "linear" }}
            className="absolute left-0 w-full h-[30%] bg-gradient-to-b from-transparent via-white to-transparent"
          />
        </div>
      </motion.div>
    </Section>
  );
}
