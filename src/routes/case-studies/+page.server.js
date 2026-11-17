import { listPostsByCategory } from '#lib/server/posts.js';

export async function load({ locals, setHeaders }) {
	setHeaders({ 'cache-control': 'public, max-age=60, s-maxage=300, stale-while-revalidate=86400' });

	try {
		return { caseStudies: await listPostsByCategory(locals.pb, 'case study') };
	} catch (err) {
		console.error('Failed to load case studies:', err);
		return { caseStudies: [] };
	}
}
