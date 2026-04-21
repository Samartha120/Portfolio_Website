import React from 'react';
import { motion } from 'framer-motion';
import { Card } from '../common/Card';
import { Calendar, Users, Mic } from 'lucide-react';

export const WorkShopCard = ({ workshop }) => {
	return (
		<motion.div
			initial={{ opacity: 0, y: 18 }}
			whileInView={{ opacity: 1, y: 0 }}
			viewport={{ once: true, margin: '-80px' }}
			transition={{ duration: 0.55 }}
		>
			<Card hover={false} className="border-white/5">
				<h3 className="text-2xl font-black text-white mb-3">{workshop.title}</h3>
				<div className="flex flex-wrap gap-3 mb-6">
					<span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/[0.03] border border-white/10 text-xs text-white/60">
						<Calendar size={14} /> {workshop.date}
					</span>
					<span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/[0.03] border border-white/10 text-xs text-white/60">
						<Users size={14} /> {workshop.audience}
					</span>
					<span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-xs text-primary font-bold tracking-wider">
						<Mic size={14} /> {workshop.role}
					</span>
				</div>
				<p className="text-white/60 font-light leading-relaxed">
					Designed for real-world teams: patterns, demos, and exercises you can apply immediately.
				</p>
			</Card>
		</motion.div>
	);
};

export default WorkShopCard;

