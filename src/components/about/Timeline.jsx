import React, { useMemo, useState } from 'react';
import { motion } from 'framer-motion';
import { SectionTitle } from '../common/SectionTitle';
import { profile } from '../../data/Profile';
import { cn } from '../../utils/helpers';

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
	const items = useMemo(() => toTimelineItems(), []);
	const [selectedIndex, setSelectedIndex] = useState(0);
	const [hoveredIndex, setHoveredIndex] = useState(null);

	const activeIndex = hoveredIndex ?? selectedIndex;

	return (
		<section className="py-24 bg-surface/30 border-y border-white/5 relative overflow-hidden">
			<div className="absolute -left-64 top-1/3 w-[520px] h-[520px] bg-secondary/10 rounded-full blur-[180px] pointer-events-none" />
			<div className="absolute inset-0 bg-gradient-to-b from-white/[0.02] via-transparent to-transparent pointer-events-none" />
			<div className="container mx-auto px-6 md:px-12 max-w-5xl relative z-10">
				<SectionTitle title="Career Timeline" subtitle="Experience & Education" center />

				<div className="relative">
					<div
						className={cn(
							"absolute left-5 md:left-1/2 md:-translate-x-1/2 top-0 bottom-0 w-px transition-colors duration-300",
							activeIndex != null ? "bg-primary/50" : "bg-white/15"
						)}
					/>

					<div className="space-y-10">
						{items.map((item, idx) => {
							const isLeft = idx % 2 === 0;
							const isActive = idx === activeIndex;
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
										<div
											role="button"
											tabIndex={0}
											onMouseEnter={() => setHoveredIndex(idx)}
											onMouseLeave={() => setHoveredIndex(null)}
											onFocus={() => setHoveredIndex(idx)}
											onBlur={() => setHoveredIndex(null)}
											onClick={() => setSelectedIndex(idx)}
											onKeyDown={(e) => {
												if (e.key === 'Enter' || e.key === ' ') {
													e.preventDefault();
													setSelectedIndex(idx);
												}
											}}
											className={cn(
												"pl-12 md:pl-0 rounded-2xl transition-colors duration-300 cursor-pointer outline-none",
												isActive ? "bg-white/[0.02]" : "hover:bg-white/[0.015]",
												"focus-visible:ring-2 focus-visible:ring-primary/30"
											)}
										>
											<div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-white/50 mb-3">
												<span className={cn("w-2 h-2 rounded-full transition-colors duration-300", isActive ? "bg-primary" : "bg-primary/70")} />
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
										<div className="absolute left-1/2 -translate-x-1/2 -top-10 h-20 w-px">
											<div className={cn("h-full w-full transition-colors duration-300", isActive ? "bg-primary/60" : "bg-white/10")} />
										</div>
										<div
											className={cn(
												"w-10 h-10 rounded-full bg-black/40 border backdrop-blur-md flex items-center justify-center transition-all duration-300",
												isActive ? "border-primary/40" : "border-white/10"
											)}
										>
											<motion.div
												animate={{ scale: isActive ? 1.15 : 1 }}
												transition={{ duration: 0.2, ease: 'easeOut' }}
												className={cn(
													"w-3 h-3 rounded-full transition-colors duration-300",
													isActive ? "bg-primary" : "bg-white/40"
												)}
											/>
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

