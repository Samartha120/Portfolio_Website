import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Card } from '../common/Card';

export const ProjectPreview = ({ project }) => {
	if (!project) return null;

	return (
		<motion.div
			initial={{ opacity: 0, y: 18 }}
			whileInView={{ opacity: 1, y: 0 }}
			viewport={{ once: true, margin: '-80px' }}
			transition={{ duration: 0.55 }}
		>
			<Card hover={false} className="p-0 overflow-hidden group border-white/5">
				<div className={`h-56 w-full bg-gradient-to-br ${project.imageBg} relative overflow-hidden flex items-center justify-center`}>
					<div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
					<span className="text-white/40 font-black text-2xl mix-blend-overlay uppercase tracking-[0.2em] px-6 text-center leading-tight">
						{project.title}
					</span>
				</div>
				<div className="p-6">
					<p className="text-white/60 font-light leading-relaxed mb-4">{project.desc}</p>
					<Link to={`/projects/${project.id}`} className="text-sm font-bold uppercase tracking-widest text-white/50 hover:text-white transition-colors">
						View Details →
					</Link>
				</div>
			</Card>
		</motion.div>
	);
};

export default ProjectPreview;

