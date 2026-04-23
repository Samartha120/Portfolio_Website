import React from 'react';
import { motion } from 'framer-motion';
import { Card } from '../common/Card';
import { Github } from 'lucide-react';
import { Link } from 'react-router-dom';

export const ProjectCard = ({ project }) => {
	return (
		<Card hover={false} className="p-0 overflow-hidden group border-white/5 transition-all duration-300 ease-out hover:-translate-y-1 hover:border-primary/30 cursor-pointer">
			<div className={
				`h-72 w-full bg-gradient-to-br ${project.imageBg} relative overflow-hidden`
			}>
				{project.image && (
					<img
						src={project.image}
						alt={project.title}
						loading="lazy"
						className="absolute inset-0 w-full h-full object-cover opacity-80"
					/>
				)}
				<div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/35 to-transparent" />
				<div className="absolute inset-0 opacity-15 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI4IiBoZWlnaHQ9IjgiPgo8cmVjdCB3aWR0aD0iOCIgaGVpZ2h0PSI4IiBmaWxsPSIjZmZmIiBmaWxsLW9wYWNpdHk9IjAuMSIvPgo8L3N2Zz4=')] mix-blend-overlay" />

				<motion.div
					whileHover={{ scale: 1.02 }}
					transition={{ duration: 0.35, ease: 'easeOut' }}
					className="absolute inset-0"
				/>

				<div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-out flex flex-col items-center justify-end pb-7 px-6">
					<div className="text-xs text-white/70 font-medium tracking-wide mb-3 text-center">
						{project.category}
						{Array.isArray(project.tags) && project.tags.length > 0 ? (
							<span className="text-white/45"> · {project.tags.slice(0, 3).join(' • ')}</span>
						) : null}
					</div>
					<div className="flex items-center justify-center gap-3">
						<Link
							to={`/projects/${project.id}`}
							className="h-11 px-5 rounded-full bg-primary text-white text-sm font-semibold inline-flex items-center justify-center hover:bg-primary/90 transition-colors"
						>
							View Details
						</Link>
						{project.repoUrl && (
							<a
								href={project.repoUrl}
								target="_blank"
								rel="noopener noreferrer"
								className="h-11 px-5 rounded-full border border-primary/30 bg-white/[0.02] text-white text-sm font-semibold inline-flex items-center justify-center gap-2 hover:bg-white/[0.05] transition-colors"
							>
								GitHub <Github size={16} />
							</a>
						)}
					</div>
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

				<div className="flex items-center gap-4">
					<Link
						to={`/projects/${project.id}`}
						className="text-sm font-medium text-white/55 hover:text-white uppercase tracking-widest transition-colors"
					>
						View Details →
					</Link>
					{project.demoUrl && (
						<a
							href={project.demoUrl}
							target="_blank"
							rel="noopener noreferrer"
							className="text-sm font-medium text-white/55 hover:text-white uppercase tracking-widest transition-colors"
						>
							Live Demo
						</a>
					)}
				</div>
			</div>
		</Card>
	);
};

export default ProjectCard;

