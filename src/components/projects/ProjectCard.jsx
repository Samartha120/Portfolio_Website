import React from 'react';
import { motion } from 'framer-motion';
import { Card } from '../common/Card';
import { ExternalLink, Github } from 'lucide-react';
import { Link } from 'react-router-dom';

export const ProjectCard = ({ project }) => {
	return (
		<Card hover={false} className="p-0 overflow-hidden group border-white/5 transition-all duration-500 hover:shadow-[0_0_40px_rgba(59,130,246,0.12)] hover:-translate-y-2">
			<div className={`h-72 w-full bg-gradient-to-br ${project.imageBg} relative overflow-hidden flex items-center justify-center`}>
				<div className="absolute inset-0 opacity-20 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI4IiBoZWlnaHQ9IjgiPgo8cmVjdCB3aWR0aD0iOCIgaGVpZ2h0PSI4IiBmaWxsPSIjZmZmIiBmaWxsLW9wYWNpdHk9IjAuMSIvPgo8L3N2Zz4=')] mix-blend-overlay" />

				<motion.div
					whileHover={{ scale: 1.06 }}
					transition={{ duration: 0.5 }}
					className="w-full h-full flex items-center justify-center relative"
				>
					<span className="text-white/40 font-black text-4xl lg:text-5xl mix-blend-overlay uppercase tracking-[0.2em] px-6 text-center leading-tight drop-shadow-2xl">
						{project.title}
					</span>
				</motion.div>

				<div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500 flex items-end justify-center pb-8 gap-4">
					{project.demoUrl && (
						<a
							href={project.demoUrl}
							target="_blank"
							rel="noopener noreferrer"
							className="px-5 py-2.5 rounded-full bg-white text-black text-sm font-semibold flex items-center gap-2"
						>
							Live Demo <ExternalLink size={16} />
						</a>
					)}
					{project.repoUrl && (
						<a
							href={project.repoUrl}
							target="_blank"
							rel="noopener noreferrer"
							className="px-5 py-2.5 rounded-full bg-white/10 text-white text-sm font-semibold flex items-center gap-2 border border-white/10 backdrop-blur-md"
						>
							Code <Github size={16} />
						</a>
					)}
				</div>
			</div>

			<div className="h-[1px] w-full bg-gradient-to-r from-transparent via-white/10 to-transparent" />

			<div className="p-8">
				<div className="flex items-center justify-between gap-4 mb-3">
					<h3 className="text-2xl font-bold text-white group-hover:text-primary transition-colors duration-300">
						{project.title}
					</h3>
					<span className="text-xs font-bold uppercase tracking-widest text-white/40">{project.year}</span>
				</div>

				<p className="text-white/60 mb-6 font-light leading-relaxed">
					{project.desc}
				</p>

				<div className="flex flex-wrap gap-2 mb-6">
					{(project.tags ?? []).slice(0, 5).map((tag) => (
						<span key={tag} className="px-3 py-1 rounded-full bg-white/[0.03] border border-white/10 text-xs text-white/60">
							{tag}
						</span>
					))}
				</div>

				<Link
					to={`/projects/${project.id}`}
					className="text-sm font-medium text-white/50 hover:text-white uppercase tracking-widest transition-colors"
				>
					View Details →
				</Link>
			</div>
		</Card>
	);
};

export default ProjectCard;

