import React from 'react';
import { motion } from 'framer-motion';
import { SectionTitle } from '../common/SectionTitle';

const clients = [
	'TechFlow',
	'Nexus Labs',
	'FinEdge',
	'Aether AI',
	'StudioX',
	'CloudScale',
];

export const Clients = () => {
	return (
		<section className="py-24 relative">
			<div className="container mx-auto px-6 md:px-12 max-w-7xl">
				<SectionTitle title="Trusted By" subtitle="Clients" center />

				<div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
					{clients.map((c, idx) => (
						<motion.div
							key={c}
							initial={{ opacity: 0, y: 12 }}
							whileInView={{ opacity: 1, y: 0 }}
							viewport={{ once: true }}
							transition={{ duration: 0.45, delay: idx * 0.03 }}
							className="rounded-2xl border border-white/10 bg-white/[0.03] backdrop-blur-md px-4 py-5 text-center"
						>
							<span className="text-sm font-black tracking-widest uppercase text-white/50">
								{c}
							</span>
						</motion.div>
					))}
				</div>
			</div>
		</section>
	);
};

export default Clients;

