import React from 'react';
import { Bio } from '../components/about/Bio';
import Timeline from '../components/about/Timeline';
import Philosophy from '../components/about/Philosophy';
import Skills from '../components/about/Skills';

export default function About() {
	return (
		<>
			<Bio />
			<Timeline />
			<Philosophy />
			<Skills />
		</>
	);
}

