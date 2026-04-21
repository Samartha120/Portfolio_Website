import React from 'react';
import { motion } from 'framer-motion';
import { SectionTitle } from '../common/SectionTitle';
import { Card } from '../common/Card';

const awards = [
	{
		year: '2025',
		title: 'Best Data Visualization Experience',
		org: 'Product Design Awards',
		note: 'Recognized for a high-density analytics UI with exceptional clarity and motion.',
	},
	{
		year: '2024',
		title: 'Front-End Excellence',
		org: 'WebCraft Summit',
		note: 'Awarded for performance-first UI engineering and component-led architecture.',
	},
];

export const Awards = () => {
	return (
		<section className="py-24 relative">
			<div className="container mx-auto px-6 md:px-12 max-w-7xl">
				<SectionTitle title="Recognition" subtitle="Awards" />
				<div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
					{awards.map((a, idx) => (
						<motion.div
							key={a.title}
							initial={{ opacity: 0, y: 18 }}
							whileInView={{ opacity: 1, y: 0 }}
							viewport={{ once: true, margin: '-80px' }}
							transition={{ duration: 0.55, delay: idx * 0.05 }}
						>
							<Card hover={false} className="border-white/5">
								<div className="flex items-start justify-between gap-6 mb-4">
									<div>
										<h3 className="text-2xl font-black text-white mb-1">{a.title}</h3>
										<p className="text-white/50 font-medium">{a.org}</p>
									</div>
									<span className="px-3 py-1 rounded-full bg-white/[0.03] border border-white/10 text-xs text-white/60 font-bold tracking-wider">
										{a.year}
									</span>
								</div>
								<p className="text-white/65 font-light leading-relaxed">{a.note}</p>
							</Card>
						</motion.div>
					))}
				</div>
			</div>
		</section>
	);
};

export default Awards;

