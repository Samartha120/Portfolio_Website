import React from 'react';
import { motion } from 'framer-motion';
import { SectionTitle } from '../common/SectionTitle';
import { Card } from '../common/Card';
import { Users, GraduationCap, MessageSquare, Target } from 'lucide-react';

const offerings = [
	{
		icon: <Target size={22} />,
		title: 'Career Strategy',
		desc: 'Resume, portfolio, interview prep, and a plan to move into senior/lead roles.',
	},
	{
		icon: <GraduationCap size={22} />,
		title: 'Technical Mentorship',
		desc: 'React architecture, component design, performance, and mastering motion patterns.',
	},
	{
		icon: <MessageSquare size={22} />,
		title: 'Design Critique',
		desc: 'UI reviews with actionable improvements for hierarchy, layout, and accessibility.',
	},
	{
		icon: <Users size={22} />,
		title: 'Team Coaching',
		desc: 'Process + patterns to help teams ship consistent UI faster with fewer regressions.',
	},
];

export const MentorShipList = () => {
	return (
		<section className="py-24 relative">
			<div className="container mx-auto px-6 md:px-12 max-w-7xl">
				<SectionTitle title="Mentorship" subtitle="How I Help" center />
				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
					{offerings.map((o, idx) => (
						<motion.div
							key={o.title}
							initial={{ opacity: 0, y: 20 }}
							whileInView={{ opacity: 1, y: 0 }}
							viewport={{ once: true, margin: '-80px' }}
							transition={{ duration: 0.55, delay: idx * 0.05 }}
						>
							<Card hover={false} className="h-full border-white/5 group">
								<div className="p-4 rounded-2xl bg-white/[0.03] border border-white/10 text-white group-hover:text-primary group-hover:bg-primary/10 group-hover:border-primary/30 transition-colors duration-500 mb-6 inline-flex">
									{o.icon}
								</div>
								<h3 className="text-xl font-bold text-white mb-2">{o.title}</h3>
								<p className="text-white/60 font-light leading-relaxed">{o.desc}</p>
							</Card>
						</motion.div>
					))}
				</div>
			</div>
		</section>
	);
};

export default MentorShipList;

