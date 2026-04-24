import React from 'react';
import { motion } from 'framer-motion';
import {
	Users,
	Target,
	Lightbulb,
	LayoutGrid,
	Filter,
	Newspaper,
	Mail,
	Quote,
	CheckCircle2,
	Plus,
	X,
	Upload,
} from 'lucide-react';

import { Section } from '../components/ui/Section';
import { SectionTitle } from '../components/ui/SectionTitle';
import { Card } from '../components/ui/Card';

const fadeInUp = {
	initial: { opacity: 0, y: 14 },
	whileInView: { opacity: 1, y: 0 },
	viewport: { once: true, margin: '-80px' },
	transition: { duration: 0.5, ease: 'easeOut' },
};

function MiniCard({ title, icon, children }) {
	return (
		<motion.div {...fadeInUp}>
			<Card className="h-full" hover>
				<div className="flex items-start gap-4">
					<div className="w-12 h-12 rounded-2xl bg-white/[0.03] border border-white/10 flex items-center justify-center text-white/70 shrink-0">
						{icon}
					</div>
					<div className="min-w-0">
						<h3 className="text-lg font-bold text-white/90">{title}</h3>
						<div className="mt-3 text-sm text-white/60 leading-relaxed">{children}</div>
					</div>
				</div>
			</Card>
		</motion.div>
	);
}

function BulletCard({ children }) {
	return (
		<motion.div
			{...fadeInUp}
			className="rounded-2xl border border-white/10 bg-white/[0.03] shadow-md shadow-black/20 overflow-hidden"
			whileHover={{ y: -2 }}
			transition={{ duration: 0.3, ease: 'easeOut' }}
		>
			<div className="p-5 md:p-6 bg-black/20">
				<div className="flex items-start gap-3">
					<div className="mt-0.5 text-accent/90">
						<CheckCircle2 size={18} />
					</div>
					<p className="text-sm md:text-[15px] text-white/75 leading-relaxed">{children}</p>
				</div>
			</div>
		</motion.div>
	);
}

function Chip({ children, highlighted = false }) {
	return (
		<motion.div
			{...fadeInUp}
			whileHover={{ y: -1 }}
			transition={{ duration: 0.25, ease: 'easeOut' }}
			className={`inline-flex items-center rounded-full border px-4 py-2 text-sm transition-all duration-300 ${
				highlighted
					? 'border-primary/40 bg-primary/10 text-white shadow-[0_0_15px_-3px_rgba(var(--primary-rgb,59,130,246),0.2)]'
					: 'border-white/10 bg-white/[0.03] text-white/70'
			}`}
		>
			{children}
		</motion.div>
	);
}

export default function CaseStudy() {
	const [dynamicResponses, setDynamicResponses] = React.useState([]);

	const handleAddResponse = () => {
		if (dynamicResponses.length < 5) {
			setDynamicResponses([
				...dynamicResponses,
				{ id: Date.now(), image: null, title: `Google Form Response ${dynamicResponses.length + 1}` },
			]);
		}
	};

	const handleRemoveResponse = (id) => {
		setDynamicResponses(dynamicResponses.filter((r) => r.id !== id));
	};

	const handleImageUpload = (id, file) => {
		if (!file) return;
		const reader = new FileReader();
		reader.onload = (e) => {
			setDynamicResponses(
				dynamicResponses.map((r) => (r.id === id ? { ...r, image: e.target.result } : r))
			);
		};
		reader.readAsDataURL(file);
	};

	const personas = [
		{
			title: 'Undergraduate Student',
			goals: ['Showcase skills & projects', 'Stand out for internships', 'Share one clean link'],
			painPoints: ['Unclear structure', 'Too much text', 'Hard-to-find contact info'],
			quote: '“I want a portfolio that feels professional but doesn’t overwhelm.”',
		},
		{
			title: 'Recruiter / Industry Expert',
			goals: ['Scan projects quickly', 'Evaluate credibility fast', 'Reach out without friction'],
			painPoints: ['Slow navigation', 'Hidden projects', 'No clear CTA to contact'],
			quote: '“Show me projects first, then make contacting you effortless.”',
		},
		{
			title: 'Academic / Faculty',
			goals: ['Assess learning & growth', 'See publications/research', 'Review outcomes and impact'],
			painPoints: ['No context on work', 'Messy layout', 'Weak information hierarchy'],
			quote: '“A clean structure helps me understand what you actually did.”',
		},
	];

	const surveyInsights = [
		'Users prefer a clean UI with consistent spacing.',
		'Projects are the most important section for decision-making.',
		'Fast navigation is expected (clear routes + obvious menus).',
		'Contact should be visible and easy to reach from anywhere.',
		'Less text improves engagement; cards work better than long paragraphs.',
	];

	const goals = [
		{ title: 'Improve navigation clarity', icon: <Target size={20} />, desc: 'Make key pages reachable in one click.' },
		{ title: 'Highlight important sections', icon: <LayoutGrid size={20} />, desc: 'Prioritize projects, skills, and credibility signals.' },
		{ title: 'Enable easy communication', icon: <Mail size={20} />, desc: 'Ensure contact is obvious and frictionless.' },
	];

	const ideationIdeas = [
		'Minimal UI design',
		'Card-based layout',
		'Section-based navigation',
		'Project filtering',
		'Blog system',
		'Responsive design',
		'Smooth animations',
		'Clear CTA buttons',
		'Fast navigation',
		'Visual hierarchy focus',
	];

	const prototypeFeatures = [
		{
			title: 'Multi-page routing',
			icon: <LayoutGrid size={20} />,
			body: 'Structured routes for About, Projects, Blog, Contact, and more.',
		},
		{
			title: 'Project filtering',
			icon: <Filter size={20} />,
			body: 'Helps users quickly find relevant work without scrolling forever.',
		},
		{
			title: 'Blog system',
			icon: <Newspaper size={20} />,
			body: 'Supports credibility through writing and detailed blog views.',
		},
		{
			title: 'Contact form (EmailJS)',
			icon: <Mail size={20} />,
			body: 'Allows users to reach out directly via a clean contact form flow.',
		},
	];

	const improvements = [
		{ issue: 'Navigation was confusing', fix: 'Simplified navigation labels and added a dedicated Case Study route.' },
		{ issue: 'Projects were not visible enough', fix: 'Prioritized Projects in the route list and used grid-based layouts for scanning.' },
		{ issue: 'Contact felt unclear', fix: 'Kept contact visible via a clear Contact page + CTA patterns.' },
		{ issue: 'Too much text reduced engagement', fix: 'Converted information into short cards and chips instead of long paragraphs.' },
	];

	return (
		<div className="bg-background relative">
			{/* Hero */}
			<Section className="pt-10 md:pt-14 pb-14 md:pb-20">
				<div className="absolute inset-0 pointer-events-none -z-10">
					<div className="absolute -top-12 right-0 w-[28rem] h-[28rem] bg-primary/15 rounded-full blur-[120px]" />
					<div className="absolute -bottom-20 left-0 w-[28rem] h-[28rem] bg-secondary/15 rounded-full blur-[120px]" />
				</div>

				<motion.div
					initial={{ opacity: 0, y: 14 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.55, ease: 'easeOut' }}
					className="max-w-3xl"
				>
					<div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-white/10 bg-white/[0.03] text-white/70 tracking-widest uppercase text-xs font-semibold mb-6">
						<span className="w-1.5 h-1.5 rounded-full bg-primary" />
						Design Thinking
					</div>
					<h1 className="text-4xl md:text-6xl font-black tracking-tight text-white/90">Case Study</h1>
					<p className="mt-5 text-white/60 leading-relaxed">
						This portfolio was developed using a Design Thinking approach, incorporating user research, ideation, and iterative improvements.
					</p>
				</motion.div>
			</Section>

			{/* Empathy */}
			<Section id="empathy" className="pt-0">
				<SectionTitle title="User Research & Insights" subtitle="Empathy" />
				<motion.p {...fadeInUp} className="max-w-3xl text-white/60">
					Research focused on how different audiences scan a portfolio, what they value most, and what causes drop-off.
				</motion.p>

				<div className="mt-10 grid grid-cols-1 lg:grid-cols-3 gap-6">
					{personas.map((p) => (
						<motion.div key={p.title} {...fadeInUp}>
							<Card className="h-full" hover>
								<div className="flex items-start justify-between gap-4">
									<h3 className="text-xl font-bold text-white/90">{p.title}</h3>
									<div className="w-12 h-12 rounded-2xl bg-white/[0.03] border border-white/10 flex items-center justify-center text-white/70">
										<Users size={20} />
									</div>
								</div>
								<div className="mt-6 grid grid-cols-1 gap-5">
									<div>
										<p className="text-xs font-bold uppercase tracking-widest text-white/50">Goals</p>
										<ul className="mt-3 space-y-2 text-sm text-white/70">
											{p.goals.map((g) => (
												<li key={g} className="flex items-start gap-2">
													<span className="mt-1 w-1.5 h-1.5 rounded-full bg-primary/80" />
													<span>{g}</span>
												</li>
											))}
										</ul>
									</div>
									<div>
										<p className="text-xs font-bold uppercase tracking-widest text-white/50">Pain points</p>
										<ul className="mt-3 space-y-2 text-sm text-white/70">
											{p.painPoints.map((pp) => (
												<li key={pp} className="flex items-start gap-2">
													<span className="mt-1 w-1.5 h-1.5 rounded-full bg-white/20" />
													<span>{pp}</span>
												</li>
											))}
										</ul>
									</div>
								</div>

								<div className="mt-6 rounded-2xl border border-white/10 bg-white/[0.02] p-5">
									<div className="flex items-start gap-3">
										<div className="text-white/50 mt-0.5">
											<Quote size={18} />
										</div>
										<p className="text-sm text-white/70 leading-relaxed">{p.quote}</p>
									</div>
								</div>
							</Card>
						</motion.div>
					))}
				</div>

				<div className="mt-14">
					<motion.div {...fadeInUp} className="flex items-center gap-3 mb-6">
						<div className="w-10 h-10 rounded-2xl bg-white/[0.03] border border-white/10 flex items-center justify-center text-white/70">
							<Users size={18} />
						</div>
						<h3 className="text-xl font-bold text-white/90">Survey Insights</h3>
					</motion.div>
					<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
						{surveyInsights.map((insight) => (
							<BulletCard key={insight}>{insight}</BulletCard>
						))}
					</div>
				</div>
			</Section>

			{/* Define */}
			<Section id="define">
				<SectionTitle title="Problem Statement" subtitle="Define" />
				<motion.p {...fadeInUp} className="max-w-3xl text-white/60">
					A clear problem definition helped prioritize what users needed most and remove anything that caused friction.
				</motion.p>

				<div className="mt-10 grid grid-cols-1 lg:grid-cols-12 gap-6">
					<motion.div {...fadeInUp} className="lg:col-span-5">
						<Card hover={false} className="border-white/10 bg-white/[0.03]">
							<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-white/10 bg-white/[0.03] text-white/70 uppercase tracking-widest text-xs font-semibold">
								<Target size={14} />
								Statement
							</div>
							<p className="mt-5 text-lg md:text-xl font-semibold text-white/85 leading-snug">
								Users need a clean, fast, and professional portfolio website where they can quickly view projects and contact the owner without confusion.
							</p>
							<p className="mt-4 text-sm text-white/55">
								This drove the layout toward clear routes, scan-friendly sections, and an obvious contact flow.
							</p>
						</Card>
					</motion.div>

					<div className="lg:col-span-7 grid grid-cols-1 md:grid-cols-3 gap-6">
						{goals.map((g) => (
							<motion.div key={g.title} {...fadeInUp}>
								<Card className="h-full" hover>
									<div className="flex items-start gap-4">
										<div className="w-12 h-12 rounded-2xl bg-white/[0.03] border border-white/10 flex items-center justify-center text-white/70">
											{g.icon}
										</div>
										<div>
											<h3 className="text-lg font-bold text-white/90">{g.title}</h3>
											<p className="mt-3 text-sm text-white/60 leading-relaxed">{g.desc}</p>
										</div>
									</div>
								</Card>
							</motion.div>
						))}
					</div>
				</div>
			</Section>

			{/* Ideation */}
			<Section id="ideation">
				<SectionTitle title="Ideation & Brainstorming" subtitle="Ideation" />
				<motion.p {...fadeInUp} className="max-w-3xl text-white/60">
					Different design ideas were explored to identify the most effective structure and user experience.
				</motion.p>

				<div className="mt-10">
					<motion.div {...fadeInUp} className="flex flex-wrap gap-3">
						{ideationIdeas.map((idea) => {
							const isHighlighted = ['Minimal UI design', 'Fast navigation', 'Clear CTA buttons'].includes(idea);
							return (
								<Chip key={idea} highlighted={isHighlighted}>
									<div className="flex items-center gap-2">
										<Lightbulb size={16} className={isHighlighted ? 'text-primary' : 'text-white/50'} />
										<span>{idea}</span>
									</div>
								</Chip>
							);
						})}
					</motion.div>
				</div>

				<motion.div {...fadeInUp} className="mt-10">
					<Card hover={false} className="border-white/10">
						<p className="text-white/70 leading-relaxed">
							The final design was selected because it balances simplicity, usability, and modern UI expectations.
						</p>
					</Card>
				</motion.div>
			</Section>

			{/* Prototype */}
			<Section id="prototype">
				<SectionTitle title="Prototype & Implementation" subtitle="Prototype" />
				<motion.p {...fadeInUp} className="max-w-3xl text-white/60">
					The prototype focuses on scan-friendly structure, polished visuals, and simple interaction patterns that reduce friction.
				</motion.p>

				<div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-6">
					{prototypeFeatures.map((f) => (
						<MiniCard key={f.title} title={f.title} icon={f.icon}>
							{f.body}
						</MiniCard>
					))}
				</div>

				<div className="mt-16">
					<motion.div {...fadeInUp} className="flex items-center gap-3 mb-6">
						<div className="w-10 h-10 rounded-2xl bg-white/[0.03] border border-white/10 flex items-center justify-center text-white/70">
							<CheckCircle2 size={18} />
						</div>
						<h3 className="text-xl font-bold text-white/90">Improvements Based on Feedback</h3>
					</motion.div>

					<motion.p {...fadeInUp} className="text-sm text-white/50 mb-8 italic">
						These improvements were directly derived from user survey responses.
					</motion.p>

					<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
						{improvements.map((item) => (
							<motion.div key={item.issue} {...fadeInUp}>
								<Card className="h-full" hover>
									<p className="text-xs font-bold uppercase tracking-widest text-white/50">Issue</p>
									<p className="mt-3 text-white/85 font-semibold leading-snug">{item.issue}</p>
									<p className="mt-6 text-xs font-bold uppercase tracking-widest text-white/50">Fix</p>
									<p className="mt-3 text-sm text-white/60 leading-relaxed">{item.fix}</p>
								</Card>
							</motion.div>
						))}
					</div>
				</div>
			</Section>

			{/* Proof */}
			<Section id="proof">
				<SectionTitle title="Research Proof" subtitle="Proof" />
				<motion.p {...fadeInUp} className="max-w-3xl text-white/60">
					User insights were collected through a structured Google Form survey and analyzed to guide design decisions.
				</motion.p>

				<div className="mt-10 flex flex-col gap-8">
					<div className="flex justify-start">
						<motion.button
							{...fadeInUp}
							onClick={handleAddResponse}
							disabled={dynamicResponses.length >= 5}
							className="flex items-center gap-2 px-5 py-2.5 rounded-xl border border-white/10 bg-white/[0.03] text-sm font-semibold text-white/70 hover:bg-white/[0.08] transition-all hover:scale-[1.02] active:scale-[0.98] disabled:opacity-30 disabled:cursor-not-allowed"
						>
							<Plus size={16} />
							Add Response
						</motion.button>
					</div>

					<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
						{dynamicResponses.map((res) => (
							<motion.div key={res.id} {...fadeInUp}>
								<Card hover={false} className="p-0 overflow-hidden relative group h-full border-white/10 bg-white/[0.02]">
									<button
										onClick={() => handleRemoveResponse(res.id)}
										className="absolute top-3 right-3 z-10 w-8 h-8 rounded-full bg-black/60 border border-white/10 flex items-center justify-center text-white opacity-0 group-hover:opacity-100 transition-all hover:bg-red-500/20 hover:border-red-500/40"
									>
										<X size={14} />
									</button>

									<div className="relative">
										{res.image ? (
											<img src={res.image} className="w-full h-64 object-cover" alt={res.title} />
										) : (
											<label className="flex flex-col items-center justify-center w-full h-64 border-2 border-dashed border-white/10 bg-white/[0.01] cursor-pointer hover:bg-white/[0.04] transition-all group/upload">
												<div className="w-10 h-10 rounded-full bg-white/[0.03] flex items-center justify-center mb-3 group-hover/upload:scale-110 transition-transform">
													<Upload size={18} className="text-white/30" />
												</div>
												<span className="text-xs font-medium text-white/40 group-hover/upload:text-white/60">Click to upload screenshot</span>
												<input
													type="file"
													className="hidden"
													accept="image/*"
													onChange={(e) => handleImageUpload(res.id, e.target.files[0])}
												/>
											</label>
										)}
									</div>

									<div className="p-6">
										<h4 className="text-sm font-bold text-white/90">{res.title}</h4>
									</div>
								</Card>
							</motion.div>
						))}
					</div>
				</div>
			</Section>
		</div>
	);
}
