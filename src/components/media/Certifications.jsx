import React from 'react';
import { motion } from 'framer-motion';
import { SectionTitle } from '../common/SectionTitle';
import { Card } from '../common/Card';

const certifications = [
	{
		year: '2025',
		title: 'AWS Certified Developer – Associate',
		org: 'Amazon Web Services',
	},
	{
		year: '2024',
		title: 'Professional Scrum Master I',
		org: 'Scrum.org',
	},
	{
		year: '2023',
		title: 'Web Accessibility Specialist',
		org: 'International Association of Accessibility Professionals',
	},
];

export const Certifications = () => {
	return (
		<section className="py-24 bg-surface/30 border-y border-white/5 relative">
			<div className="container mx-auto px-6 md:px-12 max-w-7xl">
				<SectionTitle title="Credentials" subtitle="Certifications" />
				<div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
					{certifications.map((c, idx) => (
						<motion.div
							key={c.title}
							initial={{ opacity: 0, y: 18 }}
							whileInView={{ opacity: 1, y: 0 }}
							viewport={{ once: true, margin: '-80px' }}
							transition={{ duration: 0.55, delay: idx * 0.05 }}
						>
							<Card hover={false} className="border-white/5">
								<div className="text-xs font-bold uppercase tracking-widest text-white/40 mb-3">{c.year}</div>
								<h3 className="text-xl font-black text-white mb-2">{c.title}</h3>
								<p className="text-white/60 font-light">{c.org}</p>
							</Card>
						</motion.div>
					))}
				</div>
			</div>
		</section>
	);
};

export default Certifications;

