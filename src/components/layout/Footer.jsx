import React from 'react';
import { Github, Linkedin, Twitter, Mail } from 'lucide-react';
import { AUTHOR_NAME, GITHUB_URL, LINKEDIN_URL, TWITTER_URL, CONTACT_EMAIL } from '../../utils/constants';
import { Link } from 'react-router-dom';

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { icon: <Github size={20} />, href: GITHUB_URL, label: "GitHub" },
    { icon: <Linkedin size={20} />, href: LINKEDIN_URL, label: "LinkedIn" },
    { icon: <Twitter size={20} />, href: TWITTER_URL, label: "Twitter" },
    { icon: <Mail size={20} />, href: `mailto:${CONTACT_EMAIL}`, label: "Email" },
  ];

  return (
    <footer className="relative bg-black border-t border-white/10 py-12">
      <div className="container mx-auto px-6 md:px-12">
        <div className="max-w-7xl mx-auto rounded-xl border border-white/10 bg-white/[0.02] p-8 md:p-10 shadow-md shadow-black/30">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-10 items-start">
            <div className="md:col-span-5">
              <Link to="/" className="inline-flex text-2xl font-semibold tracking-tight brand-shift">
                Dev<span className="text-white/40">Portfolio</span>
              </Link>
              <p className="mt-4 text-white/60 leading-relaxed max-w-sm">
                A production-focused portfolio: clear content, sensible motion, and clean UI fundamentals.
              </p>
            </div>

            <div className="md:col-span-3">
              <h4 className="text-xs font-semibold tracking-widest text-white/40 uppercase">Quick Links</h4>
              <div className="mt-4 grid gap-2 text-sm">
                <Link to="/about" className="text-white/60 hover:text-white transition-colors">About</Link>
                <Link to="/projects" className="text-white/60 hover:text-white transition-colors">Projects</Link>
                <Link to="/blog" className="text-white/60 hover:text-white transition-colors">Blog</Link>
                <Link to="/contact" className="text-white/60 hover:text-white transition-colors">Contact</Link>
              </div>
            </div>

            <div className="md:col-span-4 md:flex md:flex-col md:items-start">
              <h4 className="text-xs font-semibold tracking-widest text-white/40 uppercase">Social</h4>
              <div className="mt-4 flex items-center gap-3 flex-wrap">
                {socialLinks.map((link, idx) => (
                  <a
                    key={idx}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/[0.03] border border-white/10 text-white/70 hover:text-white hover:bg-white/[0.06] transition-all duration-300 ease-out"
                    aria-label={link.label}
                  >
                    {link.icon}
                    <span className="text-sm">{link.label}</span>
                  </a>
                ))}
              </div>
            </div>
          </div>

          <div className="mt-10 pt-7 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-3">
            <div className="text-sm text-white/50">
              &copy; {currentYear} {AUTHOR_NAME}. All rights reserved.
            </div>
            <div className="text-sm text-white/50">
              Built with React + Tailwind.
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;