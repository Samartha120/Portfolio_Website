import React from 'react';
import { motion } from 'framer-motion';
import { SectionTitle } from '../common/SectionTitle';
import { Card } from '../common/Card';

const stories = [
	{
		name: 'Priya S.',
		role: 'Frontend Engineer → Senior Engineer',
		quote:
			'The sessions were surgical: architecture feedback, UI polish, and a clear plan. I leveled up my portfolio and got the offer in 6 weeks.',
	},
	{
		name: 'Mateo R.',
		role: 'Product Designer → UI Engineer',
		quote:
			'The transition from design to engineering finally clicked. I learned how to build motion systems and reusable components without getting overwhelmed.',
	},
];

export const SuccessStories = () => {
	return (
		<section className="py-24 bg-surface/30 border-y border-white/5 relative">
			<div className="container mx-auto px-6 md:px-12 max-w-7xl">
				<SectionTitle title="Impact" subtitle="Success Stories" center />
				<div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
					{stories.map((s, idx) => (
						<motion.div
							key={s.name}
							initial={{ opacity: 0, y: 18 }}
							whileInView={{ opacity: 1, y: 0 }}
							viewport={{ once: true, margin: '-80px' }}
							transition={{ duration: 0.55, delay: idx * 0.05 }}
						>
							<Card hover={false} className="border-white/5">
								<p className="text-white/80 font-light text-lg leading-relaxed mb-6">“{s.quote}”</p>
								<div className="flex items-center gap-4">
									<div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary/30 to-accent/30 flex items-center justify-center font-bold text-white shadow-inner">
										{s.name.charAt(0)}
									</div>
									<div>
										<div className="font-bold text-white">{s.name}</div>
										<div className="text-xs text-white/40 uppercase tracking-widest">{s.role}</div>
									</div>
								</div>
							</Card>
						</motion.div>
					))}
				</div>
			</div>
		</section>
	);
};

export default SuccessStories;

