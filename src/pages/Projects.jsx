import React, { useMemo, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { SectionTitle } from '../components/common/SectionTitle';
import Filter from '../components/projects/Filter';
import ProjectCard from '../components/projects/ProjectCard';
import { projects } from '../data/projects';

export default function Projects() {
	const categories = useMemo(() => {
		const set = new Set(projects.map((p) => p.category));
		return ['All', ...Array.from(set)];
	}, []);

	const [active, setActive] = useState('All');

	const filtered = useMemo(() => {
		if (active === 'All') return projects;
		return projects.filter((p) => p.category === active);
	}, [active]);

	return (
		<section className="py-24 bg-background relative">
			<div className="absolute top-1/2 left-0 w-full h-[500px] bg-gradient-to-b from-primary/5 via-secondary/5 to-transparent blur-[120px] -z-10 pointer-events-none" />
			<div className="container mx-auto px-6 md:px-12 max-w-7xl relative z-10">
				<SectionTitle title="Projects" subtitle="Selected Work" center />

				<Filter options={categories} value={active} onChange={setActive} />

				<motion.div layout className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
					<AnimatePresence mode="popLayout">
						{filtered.map((project) => (
							<motion.div
								layout
								key={project.id}
								initial={{ opacity: 0, scale: 0.95, filter: 'blur(6px)' }}
								animate={{ opacity: 1, scale: 1, filter: 'blur(0px)' }}
								exit={{ opacity: 0, scale: 0.95, filter: 'blur(6px)' }}
								transition={{ duration: 0.45 }}
							>
								<ProjectCard project={project} />
							</motion.div>
						))}
					</AnimatePresence>
				</motion.div>
			</div>
		</section>
	);
}

