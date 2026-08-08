export function slugify(post) {
	const base = post.title
		.toLowerCase()
		.trim()
		.replace(/\s+/g, '-')
		.replace(/[^\w-]+/g, '');

	return `${base}-${post.id}`;
}

// PocketBase record ids are dash-free by default, so the id is always the
// final "-"-delimited segment of a slug built by slugify().
export function idFromSlug(slug) {
	return slug.split('-').pop();
}

export function estimateReadingTime(html = '') {
	const words = html
		.replace(/<[^>]*>/g, ' ')
		.trim()
		.split(/\s+/)
		.filter(Boolean).length;

	return Math.max(1, Math.round(words / 200));
}

function toSummary(post, pb, thumbSize = '400x300') {
	return {
		id: post.id,
		title: post.title,
		introduction: post.introduction,
		label: post.tags ?? post.category,
		stat: post.stat || null,
		created: post.created,
		slug: slugify(post),
		thumbnailUrl: post.thumbnail ? pb.files.getURL(post, post.thumbnail, { thumb: thumbSize }) : null
	};
}

export async function listPostsByCategory(pb, category, { limit } = {}) {
	const filter = `category = "${category}"`;

	const records = limit
		? (await pb.collection('posts').getList(1, limit, { filter, sort: '-created' })).items
		: await pb.collection('posts').getFullList({ filter, sort: '-created' });

	return records.map((post) => toSummary(post, pb));
}

export async function getPostBySlug(pb, slug) {
	const post = await pb.collection('posts').getOne(idFromSlug(slug));

	return {
		...toSummary(post, pb, '800x450'),
		article: post.article,
		readingTime: estimateReadingTime(post.article)
	};
}
