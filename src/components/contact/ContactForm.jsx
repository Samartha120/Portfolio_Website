import React, { useMemo, useState } from 'react';
import { motion } from 'framer-motion';
import { Send, CheckCircle } from 'lucide-react';
import { Card } from '../common/Card';
import { Button } from '../common/Button';
import { sendEmail } from '../../services/emailService';
import { trackEvent } from '../../services/Analytics';

const initialState = { name: '', email: '', subject: '', message: '' };

export const ContactForm = () => {
	const [values, setValues] = useState(initialState);
	const [status, setStatus] = useState('idle'); // idle | sending | success | error
	const [error, setError] = useState(null);

	const canSubmit = useMemo(() => {
		return (
			values.name.trim().length > 1 &&
			values.email.trim().includes('@') &&
			values.subject.trim().length > 2 &&
			values.message.trim().length > 8
		);
	}, [values]);

	const onChange = (e) => {
		const { name, value } = e.target;
		setValues((v) => ({ ...v, [name]: value }));
	};

	const onSubmit = async (e) => {
		e.preventDefault();
		if (!canSubmit || status === 'sending') return;

		setStatus('sending');
		setError(null);
		trackEvent('contact_submit', { email: values.email });

		try {
			await sendEmail({
				from_name: values.name,
				reply_to: values.email,
				subject: values.subject,
				message: values.message,
			});

			setStatus('success');
			setValues(initialState);
			setTimeout(() => setStatus('idle'), 3500);
		} catch (err) {
			setStatus('error');
			setError('Something went wrong. Please try again in a moment.');
			// eslint-disable-next-line no-console
			console.error(err);
		}
	};

	return (
		<Card hover={false} className="border-white/5 p-0 overflow-hidden">
			<div className="relative p-8 md:p-12">
				<div className="absolute top-0 right-0 w-64 h-64 bg-primary/20 rounded-full blur-[90px] -z-10 pointer-events-none" />
				<div className="absolute bottom-0 left-0 w-64 h-64 bg-secondary/20 rounded-full blur-[90px] -z-10 pointer-events-none" />

				{status === 'success' ? (
					<motion.div
						initial={{ opacity: 0, scale: 0.95 }}
						animate={{ opacity: 1, scale: 1 }}
						className="py-10 flex flex-col items-center text-center"
					>
						<div className="w-20 h-20 rounded-full bg-accent/10 border border-accent/20 flex items-center justify-center mb-6">
							<CheckCircle size={36} className="text-accent" />
						</div>
						<h3 className="text-3xl font-black text-white mb-3">Message sent</h3>
						<p className="text-white/60 font-light">Thanks for reaching out — I’ll respond shortly.</p>
					</motion.div>
				) : (
					<form onSubmit={onSubmit} className="space-y-6">
						<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
							<div className="space-y-2">
								<label className="text-xs font-bold uppercase tracking-widest text-white/50 ml-1" htmlFor="name">Name</label>
								<input
									id="name"
									name="name"
									value={values.name}
									onChange={onChange}
									required
									className="w-full bg-black/40 border border-white/10 rounded-xl px-5 py-4 text-white placeholder:text-white/20 focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary/50 transition-all font-light shadow-inner backdrop-blur-sm"
									placeholder="Alex Reed"
								/>
							</div>
							<div className="space-y-2">
								<label className="text-xs font-bold uppercase tracking-widest text-white/50 ml-1" htmlFor="email">Email</label>
								<input
									id="email"
									name="email"
									value={values.email}
									onChange={onChange}
									type="email"
									required
									className="w-full bg-black/40 border border-white/10 rounded-xl px-5 py-4 text-white placeholder:text-white/20 focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary/50 transition-all font-light shadow-inner backdrop-blur-sm"
									placeholder="alex@company.com"
								/>
							</div>
						</div>

						<div className="space-y-2">
							<label className="text-xs font-bold uppercase tracking-widest text-white/50 ml-1" htmlFor="subject">Subject</label>
							<input
								id="subject"
								name="subject"
								value={values.subject}
								onChange={onChange}
								required
								className="w-full bg-black/40 border border-white/10 rounded-xl px-5 py-4 text-white placeholder:text-white/20 focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary/50 transition-all font-light shadow-inner backdrop-blur-sm"
								placeholder="Project inquiry"
							/>
						</div>

						<div className="space-y-2">
							<label className="text-xs font-bold uppercase tracking-widest text-white/50 ml-1" htmlFor="message">Message</label>
							<textarea
								id="message"
								name="message"
								value={values.message}
								onChange={onChange}
								required
								rows={5}
								className="w-full bg-black/40 border border-white/10 rounded-xl px-5 py-4 text-white placeholder:text-white/20 focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary/50 transition-all font-light shadow-inner backdrop-blur-sm resize-none"
								placeholder="Tell me a bit about your timeline, goals, and constraints…"
							/>
						</div>

						{status === 'error' && (
							<p className="text-sm text-red-300 font-medium">{error}</p>
						)}

						<div className="pt-2">
							<Button
								type="submit"
								size="lg"
								glow
								disabled={!canSubmit || status === 'sending'}
								icon={<Send size={18} />}
								className="w-full justify-center"
							>
								{status === 'sending' ? 'Sending…' : 'Send Message'}
							</Button>
							<p className="text-xs text-white/40 mt-3">
								Uses EmailJS simulation in this project; wire credentials via `.env` to send real emails.
							</p>
						</div>
					</form>
				)}
			</div>
		</Card>
	);
};

export default ContactForm;

