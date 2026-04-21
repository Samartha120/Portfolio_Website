import React from 'react';
import { motion } from 'framer-motion';
import { SectionTitle } from '../common/SectionTitle';
import { Card } from '../common/Card';

const caseStudies = [
	{
		title: 'Analytics Platform Redesign',
		client: 'TechFlow Corp',
		outcomes: ['-38% time-to-insight', '+22% activation rate', 'WCAG AA-ready UI'],
		summary:
			'Rebuilt the dashboard UI with a composable component system, improving clarity, perceived performance, and accessibility.',
	},
	{
		title: 'Design System for Multi-Product Suite',
		client: 'Nexus UI',
		outcomes: ['50+ reusable components', 'Standardized tokens', 'Faster release cadence'],
		summary:
			'Introduced a token-driven design system to unify product visuals, reduce UI drift, and streamline engineering delivery.',
	},
];

export const CaseStudies = () => {
	return (
		<section className="py-24 bg-surface/30 border-y border-white/5 relative">
			<div className="container mx-auto px-6 md:px-12 max-w-7xl">
				<SectionTitle title="Results" subtitle="Case Studies" center />

				<div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8">
					{caseStudies.map((cs, idx) => (
						<motion.div
							key={cs.title}
							initial={{ opacity: 0, y: 24 }}
							whileInView={{ opacity: 1, y: 0 }}
							viewport={{ once: true, margin: '-80px' }}
							transition={{ duration: 0.6, delay: idx * 0.06 }}
						>
							<Card hover={false} className="border-white/5">
								<div className="flex items-start justify-between gap-6 mb-6">
									<div>
										<h3 className="text-2xl font-black text-white mb-2">{cs.title}</h3>
										<p className="text-white/50 text-sm font-medium tracking-wide">Client: {cs.client}</p>
									</div>
									<span className="px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-bold tracking-wider">
										Case Study
									</span>
								</div>
								<p className="text-white/65 font-light leading-relaxed mb-8">{cs.summary}</p>
								<div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
									{cs.outcomes.map((o) => (
										<div key={o} className="px-4 py-3 rounded-2xl bg-white/[0.03] border border-white/10 text-sm text-white/70 font-medium">
											{o}
										</div>
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

export default CaseStudies;

