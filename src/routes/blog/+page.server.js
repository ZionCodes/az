import { listPostsByCategory } from '$lib/server/posts.js';

export async function load({ locals, setHeaders }) {
	setHeaders({ 'cache-control': 'public, max-age=60, stale-while-revalidate=300' });

	try {
		return { posts: await listPostsByCategory(locals.pb, 'blog') };
	} catch (err) {
		console.error('Failed to load blog posts:', err);
		return { posts: [] };
	}
}
