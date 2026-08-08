import { listPostsByCategory } from '$lib/server/posts.js';

export async function load({ locals }) {
	try {
		return { caseStudies: await listPostsByCategory(locals.pb, 'case study') };
	} catch (err) {
		console.error('Failed to load case studies:', err);
		return { caseStudies: [] };
	}
}
