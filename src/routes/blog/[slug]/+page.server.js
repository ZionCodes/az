import { error } from '@sveltejs/kit';
import { getPostBySlug } from '#lib/server/posts.js';

export async function load({ params, locals, setHeaders }) {
	setHeaders({
		'cache-control': 'public, max-age=300, s-maxage=3600, stale-while-revalidate=86400'
	});

	try {
		return { post: await getPostBySlug(locals.pb, params.slug) };
	} catch (err) {
		if (err.status === 404) {
			throw error(404, 'Post not found');
		}
		console.error('Failed to load blog post:', err);
		throw error(500, 'Something went wrong loading this post');
	}
}
