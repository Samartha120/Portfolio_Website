import React from 'react';
import { motion } from 'framer-motion';
import { SectionTitle } from '../common/SectionTitle';
import { Card } from '../common/Card';
import { profile } from '../../data/Profile';

export const Skills = () => {
	const groups = profile.skills ?? [];

	return (
		<section className="py-24 bg-surface/50 border-t border-white/5 relative">
			<div className="container mx-auto px-6 md:px-12 max-w-7xl">
				<SectionTitle title="Skill Stack" subtitle="Capabilities" center />

				<div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8">
					{groups.map((group, idx) => (
						<motion.div
							key={group.category}
							initial={{ opacity: 0, y: 24, filter: 'blur(6px)' }}
							whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
							viewport={{ once: true, margin: '-80px' }}
							transition={{ duration: 0.6, delay: idx * 0.06 }}
							className="h-full"
						>
							<Card hover={false} className="h-full">
								<div className="flex items-center justify-between mb-6">
									<h3 className="text-xl font-black tracking-tight text-white">{group.category}</h3>
									<span className="text-xs font-bold uppercase tracking-widest text-white/40">
										{group.items?.length ?? 0} tools
									</span>
								</div>

								<div className="flex flex-wrap gap-3">
									{(group.items ?? []).map((skill) => (
										<span
											key={skill}
											className="px-4 py-2 rounded-full bg-white/[0.03] border border-white/10 text-sm text-white/70 hover:text-white hover:border-primary/30 hover:bg-primary/10 transition-colors"
										>
											{skill}
										</span>
									))}
								</div>
							</Card>
						</motion.div>
					))}
				</div>
			</div>
		</section>
	);
};

export default Skills;

