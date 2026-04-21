import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Card } from '../common/Card';
import { formatDate, truncateText } from '../../utils/helpers';

export const BlogCard = ({ post }) => {
	return (
		<motion.div
			initial={{ opacity: 0, y: 16 }}
			whileInView={{ opacity: 1, y: 0 }}
			viewport={{ once: true, margin: '-80px' }}
			transition={{ duration: 0.5 }}
			className="h-full"
		>
			<Card hover={false} className="h-full border-white/5 group">
				<div className="flex items-center justify-between gap-4 mb-5">
					<span className="inline-flex items-center px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-bold tracking-wider">
						{post.category}
					</span>
					<span className="text-xs text-white/40 font-medium tracking-widest uppercase">
						{post.readTime}
					</span>
				</div>

				<h3 className="text-2xl font-black tracking-tight text-white mb-3 group-hover:text-primary transition-colors">
					{post.title}
				</h3>
				<p className="text-white/60 font-light leading-relaxed mb-6">
					{truncateText(post.excerpt, 160)}
				</p>

				<div className="flex items-center justify-between mt-auto pt-2">
					<span className="text-sm text-white/40 font-medium">{formatDate(post.date)}</span>
					<Link
						to={`/blog/${post.id}`}
						className="text-sm font-bold uppercase tracking-widest text-white/50 group-hover:text-white transition-colors"
					>
						Read →
					</Link>
				</div>
			</Card>
		</motion.div>
	);
};

export default BlogCard;

