import React from 'react';
import { motion } from 'framer-motion';
import { SectionTitle } from '../common/SectionTitle';
import { Card } from '../common/Card';
import { Sparkles, ShieldCheck, Gauge, Wand2 } from 'lucide-react';

const principles = [
	{
		icon: <Wand2 size={22} />,
		title: 'Craftsmanship First',
		desc: 'I treat UI like product design: intentional spacing, crisp typography, and interactions that feel effortless.',
	},
	{
		icon: <Gauge size={22} />,
		title: 'Performance as a Feature',
		desc: 'I optimize for Core Web Vitals early—motion is expressive, never heavy. Fast is the baseline.',
	},
	{
		icon: <ShieldCheck size={22} />,
		title: 'Accessibility by Default',
		desc: 'Keyboard navigation, contrast, and semantics are built-in—premium products must work for everyone.',
	},
	{
		icon: <Sparkles size={22} />,
		title: 'Systems over Screens',
		desc: 'Reusable components, design tokens, and predictable patterns keep teams moving and UX consistent.',
	},
];

export const Philosophy = () => {
	return (
		<section className="py-24 relative overflow-hidden">
			<div className="absolute right-0 top-1/4 w-[520px] h-[520px] bg-primary/10 rounded-full blur-[140px] pointer-events-none" />
			<div className="container mx-auto px-6 md:px-12 max-w-7xl relative z-10">
				<SectionTitle title="How I Think" subtitle="Philosophy" center />

				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
					{principles.map((p, idx) => (
						<motion.div
							key={p.title}
							initial={{ opacity: 0, y: 24 }}
							whileInView={{ opacity: 1, y: 0 }}
							viewport={{ once: true, margin: '-80px' }}
							transition={{ duration: 0.6, delay: idx * 0.05 }}
							className="h-full"
						>
							<Card hover={false} className="h-full group">
								<div className="flex items-start gap-5">
									<div className="p-4 rounded-2xl bg-white/[0.03] border border-white/10 text-white group-hover:text-primary group-hover:border-primary/30 group-hover:bg-primary/10 transition-colors duration-500">
										{p.icon}
									</div>
									<div>
										<h3 className="text-lg font-bold text-white mb-2">{p.title}</h3>
										<p className="text-white/60 font-light leading-relaxed">{p.desc}</p>
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

export default Philosophy;

