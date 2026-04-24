import React from 'react';
import { motion } from 'framer-motion';
import { Github, Linkedin, Twitter, Mail } from 'lucide-react';
import { profile } from '../../data/Profile';

export const SocialLink = () => {
	const links = [
		{ label: 'GitHub', href: profile.socials?.github, icon: <Github size={18} />, hoverColor: 'group-hover:text-[#111] dark:group-hover:text-white' },
		{ label: 'LinkedIn', href: profile.socials?.linkedin, icon: <Linkedin size={18} />, hoverColor: 'group-hover:text-[#0A66C2]' },
		{ label: 'Twitter', href: profile.socials?.twitter, icon: <Twitter size={18} />, hoverColor: 'group-hover:text-[#1DA1F2]' },
		{ label: 'Email', href: `mailto:${profile.email}`, icon: <Mail size={18} />, hoverColor: 'group-hover:text-[#EA4335]' },
	].filter((l) => Boolean(l.href));

	return (
		<div className="flex flex-wrap gap-3">
			{links.map((link) => (
				<motion.a
					key={link.label}
					href={link.href}
					target={link.href.startsWith('mailto:') ? undefined : '_blank'}
					rel={link.href.startsWith('mailto:') ? undefined : 'noopener noreferrer'}
					whileHover={{ y: -4, scale: 1.05 }}
					whileTap={{ scale: 0.98 }}
					className="group inline-flex items-center gap-2 px-5 py-3 rounded-full bg-white/[0.03] border border-white/10 text-white/70 hover:bg-white/[0.06] hover:border-white/30 transition-colors"
				>
					<span className={`transition-colors duration-300 ${link.hoverColor}`}>{link.icon}</span>
					<span className="text-sm font-medium transition-colors duration-300 group-hover:text-black dark:group-hover:text-white">{link.label}</span>
				</motion.a>
			))}
		</div>
	);
};

export default SocialLink;

