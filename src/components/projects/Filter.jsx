import React from 'react';
import { motion } from 'framer-motion';
import { cn } from '../../utils/helpers';

export const Filter = ({ options = [], value, onChange }) => {
	if (!options?.length) return null;

	return (
		<div className="flex flex-wrap justify-center gap-3 mb-16">
			{options.map((opt) => {
				const isActive = value === opt;
				return (
					<button
						key={opt}
						onClick={() => onChange?.(opt)}
						className={cn(
							'relative px-6 py-2.5 rounded-full text-sm font-medium transition-colors duration-300 border',
							isActive
								? 'text-black border-transparent'
								: 'text-white/70 hover:text-white hover:bg-white/5 border-white/5'
						)}
					>
						{isActive && (
							<motion.div
								layoutId="active-project-filter"
								className="absolute inset-0 bg-white rounded-full -z-10 shadow-sm shadow-black/20"
								transition={{ type: 'spring', stiffness: 300, damping: 25 }}
							/>
						)}
						<span className="relative z-10">{opt}</span>
					</button>
				);
			})}
		</div>
	);
};

export default Filter;

