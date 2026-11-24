import { error, redirect } from '@sveltejs/kit';
import { getPostBySlug } from '#lib/server/posts.js';

export async function load({ params, locals, setHeaders }) {
	setHeaders({
		'cache-control': 'public, max-age=300, s-maxage=3600, stale-while-revalidate=86400'
	});

	let post;
	try {
		post = await getPostBySlug(locals.pb, params.slug);
	} catch (err) {
		if (err.status === 404) {
			throw error(404, 'Case study not found');
		}
		console.error('Failed to load case study:', err);
		throw error(500, 'Something went wrong loading this case study');
	}

	// a post's slug follows its title, so an old link after a title change
	// forwards to the current address instead of serving a duplicate page
	if (params.slug !== post.slug) throw redirect(301, `/case-studies/${post.slug}`);

	return { post };
}
