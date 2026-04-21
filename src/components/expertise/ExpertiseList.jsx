import React from 'react';
import { Code2, LayoutTemplate, Gauge, Layers, Sparkles, ShieldCheck } from 'lucide-react';
import { SectionTitle } from '../common/SectionTitle';
import ExpertiseCard from './ExpertiseCard';

const expertise = [
	{
		icon: <LayoutTemplate size={22} />,
		title: 'Premium UI/UX Implementation',
		description: 'Pixel-perfect, glassmorphic interfaces with accessible semantics and refined motion.',
		bullets: ['Design-token driven styling', 'Accessibility and keyboard flows', 'Micro-interactions & transitions'],
	},
	{
		icon: <Code2 size={22} />,
		title: 'Frontend Architecture',
		description: 'Scalable React systems with predictable state, clean boundaries, and maintainable patterns.',
		bullets: ['Route-based code organization', 'Reusable component primitives', 'Testing-ready structure'],
	},
	{
		icon: <Gauge size={22} />,
		title: 'Performance Optimization',
		description: 'Fast, responsive experiences tuned for real-world devices and network conditions.',
		bullets: ['Core Web Vitals improvements', 'Bundle hygiene & lazy loading', 'Animation performance best practices'],
	},
	{
		icon: <Layers size={22} />,
		title: 'Design Systems',
		description: 'Reusable component libraries that keep products consistent and teams shipping quickly.',
		bullets: ['Component APIs & variants', 'Documentation-first mindset', 'Consistent spacing/typography scale'],
	},
	{
		icon: <ShieldCheck size={22} />,
		title: 'Security-minded UI',
		description: 'UI patterns that prevent common pitfalls: safe linking, input hygiene, and UX for auth flows.',
		bullets: ['Safer form patterns', 'Privacy-aware analytics', 'Robust error handling UX'],
	},
	{
		icon: <Sparkles size={22} />,
		title: 'Motion & Interaction',
		description: 'Scroll-based reveals and hover states that feel premium without being distracting.',
		bullets: ['Reveal animations on scroll', 'Hover/press affordances', 'Page transitions'],
	},
];

export const ExpertiseList = () => {
	return (
		<section className="py-24 relative">
			<div className="container mx-auto px-6 md:px-12 max-w-7xl">
				<SectionTitle title="What I Do" subtitle="Expertise" center />
				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
					{expertise.map((item) => (
						<ExpertiseCard key={item.title} {...item} />
					))}
				</div>
			</div>
		</section>
	);
};

export default ExpertiseList;

