import React, { useMemo, useState } from 'react';
import { blogs } from '../../data/Blogs';
import BlogCard from './BlogCard';
import { SectionTitle } from '../common/SectionTitle';

export const BlogList = () => {
	const [activeCategory, setActiveCategory] = useState('All');

	const categories = useMemo(() => {
		const set = new Set(blogs.map((b) => b.category));
		return ['All', ...Array.from(set)];
	}, []);

	const filtered = useMemo(() => {
		if (activeCategory === 'All') return blogs;
		return blogs.filter((b) => b.category === activeCategory);
	}, [activeCategory]);

	return (
		<section className="py-24 relative">
			<div className="container mx-auto px-6 md:px-12 max-w-7xl">
				<SectionTitle title="Writing" subtitle="Blog" center />

				<div className="flex flex-wrap justify-center gap-3 mb-12">
					{categories.map((cat) => {
						const isActive = cat === activeCategory;
						return (
							<button
								key={cat}
								onClick={() => setActiveCategory(cat)}
								className={
									isActive
										? 'px-6 py-2.5 rounded-full bg-white text-black text-sm font-semibold shadow-[0_0_20px_rgba(255,255,255,0.25)]'
										: 'px-6 py-2.5 rounded-full bg-white/[0.03] border border-white/10 text-white/70 hover:text-white hover:bg-white/[0.06] transition-colors text-sm font-medium'
								}
							>
								{cat}
							</button>
						);
					})}
				</div>

				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
					{filtered.map((post) => (
						<BlogCard key={post.id} post={post} />
					))}
				</div>
			</div>
		</section>
	);
};

export default BlogList;

