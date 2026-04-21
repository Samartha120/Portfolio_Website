import React from 'react';
import { Card } from '../common/Card';

export const Map = () => {
	return (
		<Card hover={false} className="p-0 overflow-hidden border-white/5">
			<div className="relative">
				<div className="absolute inset-0 bg-gradient-to-b from-black/20 to-black/70 z-10 pointer-events-none" />
				<iframe
					title="Location map"
					className="w-full h-[360px] md:h-[420px] grayscale contrast-125 opacity-90"
					loading="lazy"
					referrerPolicy="no-referrer-when-downgrade"
					src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.0869179444014!2d-122.40140768468146!3d37.79361737975647!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80858064d72f4b61%3A0x0!2sSan%20Francisco%2C%20CA!5e0!3m2!1sen!2sus!4v1710000000000"
				/>
				<div className="absolute bottom-5 left-5 z-20">
					<div className="px-4 py-2 rounded-full bg-black/60 border border-white/10 backdrop-blur-md text-sm text-white/70">
						San Francisco, CA
					</div>
				</div>
			</div>
		</Card>
	);
};

export default Map;

