import { getFeaturedCaseStudies } from '$lib/server/posts.js';

export async function load({ locals, setHeaders }) {
	setHeaders({ 'cache-control': 'public, max-age=60, stale-while-revalidate=300' });

	try {
		return { caseStudies: await getFeaturedCaseStudies(locals.pb) };
	} catch (err) {
		console.error('Failed to load case studies:', err);
		return { caseStudies: [] };
	}
}
