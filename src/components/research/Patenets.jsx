import React from 'react';
import { motion } from 'framer-motion';
import { SectionTitle } from '../common/SectionTitle';
import { Card } from '../common/Card';

const patents = [
	{
		id: 1,
		year: '2025',
		title: 'Adaptive UI Rendering for High-Density Dashboards',
		status: 'Filed',
	},
	{
		id: 2,
		year: '2024',
		title: 'Low-Latency Interaction Models for Visual Analytics',
		status: 'Pending',
	},
];

export const Patenets = () => {
	return (
		<section className="py-24 bg-surface/30 border-y border-white/5 relative">
			<div className="container mx-auto px-6 md:px-12 max-w-7xl">
				<SectionTitle title="Patents" subtitle="Innovation" />
				<div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
					{patents.map((p, idx) => (
						<motion.div
							key={p.id}
							initial={{ opacity: 0, y: 18 }}
							whileInView={{ opacity: 1, y: 0 }}
							viewport={{ once: true, margin: '-80px' }}
							transition={{ duration: 0.55, delay: idx * 0.05 }}
						>
							<Card hover={false} className="border-white/5">
								<div className="flex items-center justify-between gap-4 mb-3">
									<span className="text-xs font-bold uppercase tracking-widest text-white/40">{p.year}</span>
									<span className="px-3 py-1 rounded-full bg-white/[0.03] border border-white/10 text-xs text-white/60 font-medium">
										{p.status}
									</span>
								</div>
								<h3 className="text-2xl font-black text-white">{p.title}</h3>
							</Card>
						</motion.div>
					))}
				</div>
			</div>
		</section>
	);
};

export default Patenets;

