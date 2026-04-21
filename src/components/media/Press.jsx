import React from 'react';
import { motion } from 'framer-motion';
import { SectionTitle } from '../common/SectionTitle';
import { Card } from '../common/Card';
import { ArrowUpRight } from 'lucide-react';

const press = [
	{
		outlet: 'Frontend Engineering Review',
		title: 'Designing Motion Systems for Analytics Products',
		year: '2025',
		link: '#',
	},
	{
		outlet: 'UI/UX Quarterly',
		title: 'Glassmorphism: Clarity vs. Aesthetics in Data UIs',
		year: '2024',
		link: '#',
	},
];

export const Press = () => {
	return (
		<section className="py-24 relative">
			<div className="container mx-auto px-6 md:px-12 max-w-7xl">
				<SectionTitle title="Mentions" subtitle="Press" />
				<div className="space-y-6">
					{press.map((p, idx) => (
						<motion.div
							key={p.title}
							initial={{ opacity: 0, x: 18 }}
							whileInView={{ opacity: 1, x: 0 }}
							viewport={{ once: true, margin: '-80px' }}
							transition={{ duration: 0.55, delay: idx * 0.05 }}
						>
							<a href={p.link} className="block group" target="_blank" rel="noopener noreferrer">
								<Card hover={false} className="border-white/5 flex flex-col md:flex-row md:items-center justify-between gap-6">
									<div>
										<div className="text-xs font-bold uppercase tracking-widest text-white/40 mb-2">{p.outlet} • {p.year}</div>
										<h3 className="text-2xl font-black text-white group-hover:text-primary transition-colors">{p.title}</h3>
									</div>
									<div className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center text-white/40 group-hover:text-white group-hover:bg-primary group-hover:border-primary transition-all duration-300">
										<ArrowUpRight size={18} />
									</div>
								</Card>
							</a>
						</motion.div>
					))}
				</div>
			</div>
		</section>
	);
};

export default Press;

