import React from 'react';
import { motion } from 'framer-motion';
import { SectionTitle } from '../common/SectionTitle';
import { profile } from '../../data/Profile';

const toTimelineItems = () => {
	const education = (profile.education ?? []).map((e) => ({
		type: 'Education',
		year: e.year,
		title: e.degree,
		org: e.institution,
		details: e.details,
	}));

	const experience = (profile.experience ?? []).map((x) => ({
		type: 'Experience',
		year: x.year,
		title: x.role,
		org: x.company,
		details: x.details,
	}));

	return [...experience, ...education];
};

export const Timeline = () => {
	const items = toTimelineItems();

	return (
		<section className="py-24 bg-surface/30 border-y border-white/5 relative overflow-hidden">
			<div className="absolute -left-40 top-1/3 w-[520px] h-[520px] bg-secondary/15 rounded-full blur-[140px] pointer-events-none" />
			<div className="container mx-auto px-6 md:px-12 max-w-5xl relative z-10">
				<SectionTitle title="Career Timeline" subtitle="Experience & Education" center />

				<div className="relative">
					<div className="absolute left-5 md:left-1/2 md:-translate-x-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-primary via-white/10 to-transparent" />

					<div className="space-y-10">
						{items.map((item, idx) => {
							const isLeft = idx % 2 === 0;
							return (
								<motion.div
									key={`${item.type}-${idx}`}
									initial={{ opacity: 0, y: 24, filter: 'blur(6px)' }}
									whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
									viewport={{ once: true, margin: '-100px' }}
									transition={{ duration: 0.6, delay: idx * 0.05 }}
									className="relative grid grid-cols-1 md:grid-cols-2 gap-6"
								>
									<div className={isLeft ? 'md:pr-10' : 'md:order-2 md:pl-10'}>
										<div className="pl-12 md:pl-0">
											<div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-white/50 mb-3">
												<span className="w-2 h-2 rounded-full bg-primary/70" />
												{item.type}
											</div>
											<div className="text-white/50 text-sm font-medium mb-2">{item.year}</div>
											<h3 className="text-2xl md:text-3xl font-black tracking-tight text-white mb-2">
												{item.title}
											</h3>
											<div className="text-white/60 font-medium mb-4">{item.org}</div>
											<p className="text-white/65 font-light leading-relaxed">{item.details}</p>
										</div>
									</div>

									<div className={isLeft ? 'hidden md:block md:order-2' : 'hidden md:block'} />

									<div className="absolute left-5 md:left-1/2 md:-translate-x-1/2 top-6">
										<div className="w-10 h-10 rounded-full bg-black/40 border border-white/10 backdrop-blur-md flex items-center justify-center shadow-[0_0_18px_rgba(0,0,0,0.5)]">
											<div className="w-3 h-3 rounded-full bg-primary shadow-[0_0_12px_rgba(59,130,246,0.7)]" />
										</div>
									</div>
								</motion.div>
							);
						})}
					</div>
				</div>
			</div>
		</section>
	);
};

export default Timeline;

