import React from 'react';
import { motion } from 'framer-motion';
import { Card } from '../common/Card';

export const ExpertiseCard = ({ icon, title, description, bullets = [] }) => {
	return (
		<motion.div
			initial={{ opacity: 0, y: 20 }}
			whileInView={{ opacity: 1, y: 0 }}
			viewport={{ once: true, margin: '-80px' }}
			transition={{ duration: 0.55, type: 'spring', stiffness: 90 }}
			className="h-full"
		>
			<Card hover={false} className="h-full group border-white/[0.06]">
				<div className="flex items-start gap-5">
					<div className="relative">
						<div className="absolute inset-0 bg-primary/25 blur-xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
						<div className="relative p-4 rounded-2xl bg-white/[0.03] border border-white/10 text-white group-hover:bg-primary/10 group-hover:border-primary/30 group-hover:text-primary transition-colors duration-500">
							{icon}
						</div>
					</div>

					<div className="flex-1">
						<h3 className="text-xl font-bold text-white mb-2 group-hover:text-primary transition-colors">
							{title}
						</h3>
						<p className="text-white/60 font-light leading-relaxed mb-5">
							{description}
						</p>
						{bullets.length > 0 && (
							<ul className="space-y-2">
								{bullets.map((b) => (
									<li key={b} className="text-sm text-white/60 font-light flex items-start gap-3">
										<span className="mt-2 w-1.5 h-1.5 rounded-full bg-white/30" />
										<span>{b}</span>
									</li>
								))}
							</ul>
						)}
					</div>
				</div>
			</Card>
		</motion.div>
	);
};

export default ExpertiseCard;

