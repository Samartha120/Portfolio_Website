import React from 'react';
import { motion } from 'framer-motion';
import { SectionTitle } from '../common/SectionTitle';
import { Card } from '../common/Card';
import { LayoutTemplate, Gauge, Layers, Sparkles } from 'lucide-react';

const services = [
	{
		icon: <LayoutTemplate size={22} />,
		title: 'UI Engineering',
		desc: 'Premium interfaces with glassmorphism, strong hierarchy, and accessible interaction patterns.',
	},
	{
		icon: <Layers size={22} />,
		title: 'Design Systems',
		desc: 'Component libraries and tokenized styling that keep teams consistent and fast.',
	},
	{
		icon: <Gauge size={22} />,
		title: 'Performance & Quality',
		desc: 'Core Web Vitals, bundle hygiene, and robust UI error handling—polish is measurable.',
	},
	{
		icon: <Sparkles size={22} />,
		title: 'Motion & Micro-Interactions',
		desc: 'Framer Motion patterns that guide attention without feeling distracting or heavy.',
	},
];

export const Services = () => {
	return (
		<section className="py-24 relative">
			<div className="container mx-auto px-6 md:px-12 max-w-7xl">
				<SectionTitle title="Consultancy" subtitle="Services" center />
				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
					{services.map((s, idx) => (
						<motion.div
							key={s.title}
							initial={{ opacity: 0, y: 22 }}
							whileInView={{ opacity: 1, y: 0 }}
							viewport={{ once: true, margin: '-80px' }}
							transition={{ duration: 0.55, delay: idx * 0.05 }}
						>
							<Card hover={false} className="h-full border-white/5 group">
								<div className="p-4 rounded-2xl bg-white/[0.03] border border-white/10 inline-flex text-white group-hover:text-primary group-hover:bg-primary/10 group-hover:border-primary/30 transition-colors duration-500 mb-6">
									{s.icon}
								</div>
								<h3 className="text-xl font-bold text-white mb-2">{s.title}</h3>
								<p className="text-white/60 font-light leading-relaxed">{s.desc}</p>
							</Card>
						</motion.div>
					))}
				</div>
			</div>
		</section>
	);
};

export default Services;

