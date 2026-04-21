import React, { useMemo } from 'react';
import { Link, useParams } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft } from 'lucide-react';
import { blogs } from '../../data/Blogs';
import { Card } from '../common/Card';
import { SectionTitle } from '../common/SectionTitle';
import { formatDate } from '../../utils/helpers';

export const BlogDetails = () => {
	const { id } = useParams();

	const post = useMemo(() => {
		const numericId = Number(id);
		return blogs.find((b) => b.id === numericId) ?? null;
	}, [id]);

	if (!post) {
		return (
			<section className="py-24">
				<div className="container mx-auto px-6 md:px-12 max-w-4xl">
					<SectionTitle title="Post Not Found" subtitle="Blog" />
					<p className="text-white/60 font-light mb-8">This article doesn’t exist (or the link is outdated).</p>
					<Link to="/blog" className="text-primary hover:text-white transition-colors">← Back to Blog</Link>
				</div>
			</section>
		);
	}

	const paragraphs = post.content ?? [post.excerpt];

	return (
		<section className="py-24 relative">
			<div className="absolute top-10 left-1/2 -translate-x-1/2 w-[900px] h-[320px] bg-secondary/15 rounded-full blur-[140px] pointer-events-none" />

			<div className="container mx-auto px-6 md:px-12 max-w-4xl relative z-10">
				<div className="mb-10">
					<Link to="/blog" className="inline-flex items-center gap-2 text-white/60 hover:text-white transition-colors">
						<ArrowLeft size={18} /> Back to Blog
					</Link>
				</div>

				<motion.div
					initial={{ opacity: 0, y: 16, filter: 'blur(6px)' }}
					animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
					transition={{ duration: 0.5 }}
				>
					<SectionTitle title={post.title} subtitle={post.category} />

					<div className="flex flex-wrap items-center gap-3 mb-10">
						<span className="px-3 py-1 rounded-full bg-white/[0.03] border border-white/10 text-xs text-white/60 font-medium">
							{formatDate(post.date)}
						</span>
						<span className="px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-xs text-primary font-bold tracking-wider">
							{post.readTime}
						</span>
					</div>

					<Card hover={false} className="border-white/5">
						<div className="space-y-6">
							{paragraphs.map((p, idx) => (
								<p key={idx} className="text-lg leading-relaxed font-light text-white/70">
									{p}
								</p>
							))}
						</div>
					</Card>
				</motion.div>
			</div>
		</section>
	);
};

export default BlogDetails;

