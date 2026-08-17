import { response } from 'super-sitemap/sveltekit';
import { listPostsByCategory } from '$lib/server/posts.js';

export async function GET({ locals }) {
	const [blogPosts, caseStudies] = await Promise.all([
		listPostsByCategory(locals.pb, 'blog').catch((err) => {
			console.error('Sitemap: failed to load blog posts:', err);
			return [];
		}),
		listPostsByCategory(locals.pb, 'case study').catch((err) => {
			console.error('Sitemap: failed to load case studies:', err);
			return [];
		})
	]);

	const res = await response({
		origin: 'https://www.automationzion.com',
		paramValues: {
			'/blog/[slug]': blogPosts.map((post) => post.slug),
			'/case-studies/[slug]': caseStudies.map((post) => post.slug)
		}
	});

	res.headers.set('cache-control', 'public, max-age=3600, stale-while-revalidate=86400');
	return res;
}
