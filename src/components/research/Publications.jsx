import React from 'react';
import { motion } from 'framer-motion';
import { publications } from '../../data/Publications';
import { SectionTitle } from '../common/SectionTitle';
import { Card } from '../common/Card';
import { ArrowUpRight } from 'lucide-react';

export const Publications = () => {
	return (
		<section className="py-24 relative">
			<div className="container mx-auto px-6 md:px-12 max-w-7xl">
				<SectionTitle title="Publications" subtitle="Research" />
				<div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
					{publications.map((p, idx) => (
						<motion.div
							key={p.id}
							initial={{ opacity: 0, y: 18 }}
							whileInView={{ opacity: 1, y: 0 }}
							viewport={{ once: true, margin: '-80px' }}
							transition={{ duration: 0.55, delay: idx * 0.05 }}
						>
							<a href={p.link} target="_blank" rel="noopener noreferrer" className="block group">
								<Card hover={false} className="border-white/5">
									<div className="flex items-start justify-between gap-6 mb-3">
										<div>
											<div className="text-xs font-bold uppercase tracking-widest text-white/40 mb-2">
												{p.type} • {p.year}
											</div>
											<h3 className="text-2xl font-black text-white group-hover:text-primary transition-colors">
												{p.title}
											</h3>
										</div>
										<div className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-white/40 group-hover:text-white group-hover:bg-primary group-hover:border-primary transition-all">
											<ArrowUpRight size={18} />
										</div>
									</div>
									<p className="text-white/60 font-light">{p.journal}</p>
								</Card>
							</a>
						</motion.div>
					))}
				</div>
			</div>
		</section>
	);
};

export default Publications;

