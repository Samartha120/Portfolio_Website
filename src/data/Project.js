import { projects } from './projects';

export const projectCategories = Array.from(
	new Set(['All', ...projects.map((p) => p.category)])
);

export const getProjectById = (id) => {
	const numericId = Number(id);
	return projects.find((p) => p.id === numericId) ?? null;
};

