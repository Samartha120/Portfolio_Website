import React from 'react';
import { motion } from 'framer-motion';
import { ContactForm } from '../components/contact/ContactForm';
import SocialLink from '../components/contact/SocialLink';
import Map from '../components/contact/Map';
import { profile } from '../data/Profile';

export default function Contact() {
	return (
		<section className="py-24 bg-background relative">
			<div className="absolute inset-0 bg-gradient-to-b from-primary/10 via-background to-background pointer-events-none -z-10" />
			<div className="container mx-auto px-6 md:px-12 max-w-7xl">
				<div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
					<motion.div
						initial={{ opacity: 0, y: 18 }}
						whileInView={{ opacity: 1, y: 0 }}
						viewport={{ once: true, margin: '-80px' }}
						transition={{ duration: 0.6 }}
						className="lg:col-span-6"
					>
						<h1 className="text-4xl md:text-5xl font-black leading-tight text-white/90">
							Let’s build something that feels premium.
						</h1>
						<p className="mt-4 text-white/60 leading-relaxed">
							Send a message and I’ll get back with next steps. Email delivery is simulated in this demo.
						</p>
						<div className="mt-8">
							<ContactForm />
						</div>
					</motion.div>

					<motion.div
						initial={{ opacity: 0, y: 18 }}
						whileInView={{ opacity: 1, y: 0 }}
						viewport={{ once: true, margin: '-80px' }}
						transition={{ duration: 0.6, delay: 0.05 }}
						className="lg:col-span-6"
					>
						<div className="rounded-3xl border border-white/10 bg-surface/40 backdrop-blur-xl p-6">
							<h2 className="text-lg font-bold text-white/80">Reach me</h2>
							<p className="mt-1 text-white/60">
								{profile?.email ? profile.email : 'hello@example.com'}
							</p>
							<div className="mt-6">
								<SocialLink />
							</div>
							<div className="mt-6">
								<Map />
							</div>
						</div>
					</motion.div>
				</div>
			</div>
		</section>
	);
}

