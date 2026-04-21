import React from 'react';
import { SectionTitle } from '../common/SectionTitle';
import { workshops } from '../../data/Workshops';
import WorkShopCard from './WorkShopCard';

export const WorkShopList = () => {
	return (
		<section className="py-24 relative">
			<div className="container mx-auto px-6 md:px-12 max-w-7xl">
				<SectionTitle title="Workshops" subtitle="Speaking & Training" center />
				<div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
					{workshops.map((w) => (
						<WorkShopCard key={w.id} workshop={w} />
					))}
				</div>
			</div>
		</section>
	);
};

export default WorkShopList;

