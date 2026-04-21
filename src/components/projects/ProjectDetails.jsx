import React, { useMemo } from 'react';
import { Link, useParams } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft, ExternalLink, Github } from 'lucide-react';
import { projects } from '../../data/projects';
import { Card } from '../common/Card';
import { SectionTitle } from '../common/SectionTitle';

export const ProjectDetails = () => {
	const { id } = useParams();

	const project = useMemo(() => {
		const numericId = Number(id);
		return projects.find((p) => p.id === numericId) ?? null;
	}, [id]);

	if (!project) {
		return (
			<section className="py-24">
				<div className="container mx-auto px-6 md:px-12 max-w-4xl">
					<SectionTitle title="Project Not Found" subtitle="Projects" />
					<p className="text-white/60 font-light mb-8">
						The project you’re looking for doesn’t exist (or the link is outdated).
					</p>
					<Link to="/projects" className="text-primary hover:text-white transition-colors">
						← Back to Projects
					</Link>
				</div>
			</section>
		);
	}

	return (
		<section className="py-24 relative">
			<div className="absolute top-10 left-1/2 -translate-x-1/2 w-[900px] h-[320px] bg-primary/15 rounded-full blur-[140px] pointer-events-none" />

			<div className="container mx-auto px-6 md:px-12 max-w-6xl relative z-10">
				<div className="mb-10">
					<Link
						to="/projects"
						className="inline-flex items-center gap-2 text-white/60 hover:text-white transition-colors"
					>
						<ArrowLeft size={18} /> Back to Projects
					</Link>
				</div>

				<motion.div
					initial={{ opacity: 0, y: 16, filter: 'blur(6px)' }}
					animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
					transition={{ duration: 0.5 }}
				>
					<SectionTitle title={project.title} subtitle={project.category} />

					<div className={`w-full h-72 md:h-96 rounded-3xl bg-gradient-to-br ${project.imageBg} border border-white/10 overflow-hidden relative mb-10`}>
						<div className="absolute inset-0 opacity-25 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI4IiBoZWlnaHQ9IjgiPgo8cmVjdCB3aWR0aD0iOCIgaGVpZ2h0PSI4IiBmaWxsPSIjZmZmIiBmaWxsLW9wYWNpdHk9IjAuMSIvPgo8L3N2Zz4=')] mix-blend-overlay" />
						<div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
						<div className="absolute bottom-8 left-8 right-8 flex flex-col md:flex-row md:items-end md:justify-between gap-6">
							<div>
								<div className="text-white/70 text-sm font-medium mb-2">Client: {project.client}</div>
								<div className="text-white/70 text-sm font-medium">Year: {project.year}</div>
							</div>
							<div className="flex items-center gap-3">
								{project.demoUrl && (
									<a
										href={project.demoUrl}
										target="_blank"
										rel="noopener noreferrer"
										className="px-5 py-2.5 rounded-full bg-white text-black text-sm font-semibold inline-flex items-center gap-2"
									>
										Live Demo <ExternalLink size={16} />
									</a>
								)}
								{project.repoUrl && (
									<a
										href={project.repoUrl}
										target="_blank"
										rel="noopener noreferrer"
										className="px-5 py-2.5 rounded-full bg-white/10 text-white text-sm font-semibold inline-flex items-center gap-2 border border-white/10 backdrop-blur-md"
									>
										Repository <Github size={16} />
									</a>
								)}
							</div>
						</div>
					</div>

					<div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
						<div className="lg:col-span-8">
							<Card hover={false} className="border-white/5">
								<h3 className="text-2xl font-bold text-white mb-4">Overview</h3>
								<p className="text-white/65 font-light leading-relaxed mb-8">
									{project.desc}
								</p>

								<h4 className="text-sm font-bold tracking-widest text-white/40 uppercase mb-4">Highlights</h4>
								<ul className="space-y-3 text-white/65 font-light">
									<li className="flex gap-3"><span className="mt-2 w-1.5 h-1.5 rounded-full bg-primary/70" />Designed for clarity: complex data presented with calm, readable hierarchy.</li>
									<li className="flex gap-3"><span className="mt-2 w-1.5 h-1.5 rounded-full bg-primary/70" />Motion used as feedback: transitions guide attention without slowing navigation.</li>
									<li className="flex gap-3"><span className="mt-2 w-1.5 h-1.5 rounded-full bg-primary/70" />Component-led architecture to support scaling and iteration.</li>
								</ul>
							</Card>
						</div>

						<div className="lg:col-span-4">
							<Card hover={false} className="border-white/5">
								<h3 className="text-2xl font-bold text-white mb-6">Stack</h3>
								<div className="flex flex-wrap gap-2">
									{(project.tags ?? []).map((tag) => (
										<span key={tag} className="px-3 py-1 rounded-full bg-white/[0.03] border border-white/10 text-sm text-white/70">
											{tag}
										</span>
									))}
								</div>
							</Card>
						</div>
					</div>
				</motion.div>
			</div>
		</section>
	);
};

export default ProjectDetails;

