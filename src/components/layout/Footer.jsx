import React from 'react';
import { motion } from 'framer-motion';
import { Github, Linkedin, Twitter, Mail } from 'lucide-react';
import { AUTHOR_NAME, GITHUB_URL, LINKEDIN_URL, TWITTER_URL, CONTACT_EMAIL } from '../../utils/constants';

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { icon: <Github size={20} />, href: GITHUB_URL, label: "GitHub" },
    { icon: <Linkedin size={20} />, href: LINKEDIN_URL, label: "LinkedIn" },
    { icon: <Twitter size={20} />, href: TWITTER_URL, label: "Twitter" },
    { icon: <Mail size={20} />, href: `mailto:${CONTACT_EMAIL}`, label: "Email" },
  ];

  return (
    <footer className="relative bg-black border-t border-white/5 pt-20 pb-12 overflow-hidden">
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[300px] bg-primary/20 rounded-t-full blur-[120px] pointer-events-none -z-10 mix-blend-screen" />

      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 mb-16">
          <div className="md:col-span-5 flex flex-col items-start gap-4">
            <span className="text-3xl font-black text-white tracking-tighter group flex items-center gap-1">
              Dev<span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent transition-all duration-300 group-hover:scale-105">Portfolio</span>
            </span>
            <p className="text-lg text-white/50 font-light leading-relaxed max-w-sm">
              Designing & Building digital experiences for the modern web with an uncompromising standard of quality.
            </p>
          </div>

          <div className="md:col-span-3"></div>

          <div className="md:col-span-4 flex justify-start md:justify-end">
            <div className="flex flex-col gap-6 w-full md:w-auto">
              <h4 className="text-sm font-bold tracking-widest text-white/40 uppercase">Connect</h4>
              <div className="flex items-center gap-4 flex-wrap">
                {socialLinks.map((link, idx) => (
                  <motion.a
                    key={idx}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ y: -5, scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    className="p-4 rounded-full bg-white/[0.03] border border-white/10 text-white/70 hover:bg-white/10 hover:border-primary/50 hover:text-white hover:shadow-[0_0_20px_rgba(59,130,246,0.3)] transition-all duration-300 flex items-center justify-center relative group"
                    aria-label={link.label}
                  >
                    {link.icon}
                    <span className="absolute -top-10 left-1/2 -translate-x-1/2 px-3 py-1 bg-white text-black text-xs font-bold rounded opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none whitespace-nowrap">
                      {link.label}
                    </span>
                  </motion.a>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="w-full flex justify-center mb-16 select-none opacity-20 hover:opacity-100 transition-opacity duration-700">
           <span className="text-[12vw] font-black leading-none tracking-tighter text-transparent bg-clip-text bg-gradient-to-b from-white/40 to-transparent blur-[2px] hover:blur-none transition-all duration-700 mix-blend-overlay">
              PORTFOLIO
           </span>
        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="text-sm text-white/50 font-light">
            &copy; {currentYear} {AUTHOR_NAME}. All rights reserved.
          </div>
          <div className="flex items-center gap-6 text-sm text-white/50 font-light">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;