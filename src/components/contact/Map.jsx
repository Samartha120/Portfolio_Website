import React, { useState, useEffect } from 'react';
import { Card } from '../common/Card';
import { MapPin, Navigation } from 'lucide-react';

export const Map = () => {
	const [location, setLocation] = useState({
		name: "Symbiosis, Pune, India",
		url: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d121040.81087179924!2d73.8196868!3d18.5503399!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2c13974bcffc7%3A0xf6432108943d8d58!2sSymbiosis%20International%20University!5e0!3m2!1sen!2sin!4v1776974999855!5m2!1sen!2sin",
		isLive: false
	});

	useEffect(() => {
		if ("geolocation" in navigator) {
			navigator.geolocation.getCurrentPosition(
				(position) => {
					const { latitude, longitude } = position.coords;
					setLocation({
						name: "Your Live Location",
						url: `https://maps.google.com/maps?q=${latitude},${longitude}&z=15&output=embed`,
						isLive: true
					});
				},
				(error) => {
					console.log("Geolocation denied or unavailable, using fallback.");
				}
			);
		}
	}, []);

	return (
		<Card hover={false} className="p-0 overflow-hidden border-white/10 rounded-2xl shadow-xl shadow-black/20 relative group">
			<div className="relative h-[360px] md:h-[420px] w-full">
				<iframe
					title="Location map"
					className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-[1.02]"
					loading="lazy"
					referrerPolicy="no-referrer-when-downgrade"
					src={location.url}
				/>
				{/* Glassmorphic overlay for location tag */}
				<div className="absolute bottom-6 left-6 z-20">
					<div className="flex items-center gap-2 px-5 py-3 rounded-2xl bg-white/10 backdrop-blur-xl border border-white/20 shadow-lg text-sm text-white font-medium">
						{location.isLive ? (
							<Navigation size={16} className="text-primary animate-pulse" />
						) : (
							<MapPin size={16} className="text-primary" />
						)}
						{location.name}
					</div>
				</div>
			</div>
		</Card>
	);
};

export default Map;

