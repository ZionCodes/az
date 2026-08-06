import { listPostsByCategory } from '$lib/server/posts.js';

export async function load({ locals }) {
	const fetchCaseStudies = () =>
		listPostsByCategory(locals.pb, 'case study', { limit: 2 }).catch((err) => {
			console.error('Failed to load case studies:', err);
			return [];
		});

	return {
		streamed: {
			caseStudies: fetchCaseStudies()
		}
	};
}
