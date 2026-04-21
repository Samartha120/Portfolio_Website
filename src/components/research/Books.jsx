import React from 'react';
import { motion } from 'framer-motion';
import { SectionTitle } from '../common/SectionTitle';
import { Card } from '../common/Card';

const books = [
	{
		title: 'Designing Interfaces',
		author: 'Jenifer Tidwell',
		note: 'A timeless reference for interaction patterns and UI structure.',
	},
	{
		title: 'Refactoring UI',
		author: 'Adam Wathan & Steve Schoger',
		note: 'Practical techniques for better visual hierarchy and spacing decisions.',
	},
	{
		title: 'JavaScript: The Good Parts',
		author: 'Douglas Crockford',
		note: 'A concise mental model of the language that still pays dividends.',
	},
];

export const Books = () => {
	return (
		<section className="py-24 relative">
			<div className="container mx-auto px-6 md:px-12 max-w-7xl">
				<SectionTitle title="Reading List" subtitle="Books" />
				<div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
					{books.map((b, idx) => (
						<motion.div
							key={b.title}
							initial={{ opacity: 0, y: 18 }}
							whileInView={{ opacity: 1, y: 0 }}
							viewport={{ once: true, margin: '-80px' }}
							transition={{ duration: 0.55, delay: idx * 0.05 }}
						>
							<Card hover={false} className="border-white/5">
								<h3 className="text-xl font-black text-white mb-2">{b.title}</h3>
								<div className="text-sm text-white/50 font-medium mb-4">{b.author}</div>
								<p className="text-white/60 font-light leading-relaxed">{b.note}</p>
							</Card>
						</motion.div>
					))}
				</div>
			</div>
		</section>
	);
};

export default Books;

