import { listPostsByCategory } from '$lib/server/posts.js';

export async function load({ locals }) {
	const fetchPosts = () =>
		listPostsByCategory(locals.pb, 'blog').catch((err) => {
			console.error('Failed to load blog posts:', err);
			return [];
		});

	return {
		streamed: {
			posts: fetchPosts()
		}
	};
}
