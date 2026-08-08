import { listPostsByCategory } from '$lib/server/posts.js';

export async function load({ locals }) {
	try {
		return { posts: await listPostsByCategory(locals.pb, 'blog') };
	} catch (err) {
		console.error('Failed to load blog posts:', err);
		return { posts: [] };
	}
}
