import { error, redirect } from '@sveltejs/kit';
import { getPostBySlug, idFromSlug, slugify } from '#lib/server/posts.js';

// Old posts that were taken down, mapped to the closest current post
// (or to the blog index when nothing current covers the same ground), so
// existing links and search results land somewhere useful.
const RETIRED = {
	nhs2wy2bx0vle3c: 'jaqt9e61dcve8nn',
	'439gef2v79e0ykk': 'zzoc1b18isxspih',
	'55l107pobyrbc29': null,
	sl31vmsctxen8vn: null
};

export async function load({ params, locals, setHeaders }) {
	const id = idFromSlug(params.slug);

	if (id in RETIRED) {
		const targetId = RETIRED[id];
		if (!targetId) throw redirect(301, '/blog');
		const target = await locals.pb
			.collection('posts')
			.getOne(targetId, { fields: 'id,title' })
			.catch(() => null);
		throw redirect(301, target ? `/blog/${slugify(target)}` : '/blog');
	}

	setHeaders({
		'cache-control': 'public, max-age=300, s-maxage=3600, stale-while-revalidate=86400'
	});

	let post;
	try {
		post = await getPostBySlug(locals.pb, params.slug);
	} catch (err) {
		if (err.status === 404) {
			throw error(404, 'Post not found');
		}
		console.error('Failed to load blog post:', err);
		throw error(500, 'Something went wrong loading this post');
	}

	// a post's slug follows its title, so an old link after a title change
	// forwards to the current address instead of serving a duplicate page
	if (params.slug !== post.slug) throw redirect(301, `/blog/${post.slug}`);

	return { post };
}
