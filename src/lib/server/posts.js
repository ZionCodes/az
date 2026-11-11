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
		thumbnailUrl: post.thumbnail
			? pb.files.getURL(post, post.thumbnail, { thumb: thumbSize })
			: null,
		readingTime: estimateReadingTime(post.article)
	};
}

// List views only need enough of `article` to estimate reading time, not the full
// body. PocketBase's `:excerpt()` modifier has a real per-record server-side cost
// that scales with the bound, not just the payload size: at 60000 a 25-post list
// query took 45s+ to resolve, at 8000 it dropped to ~2.3s (matching an unbounded
// fetch's own baseline). 8000 characters is still well past the plain-text length
// of a normal post, so reading-time estimates stay accurate.
const LIST_VIEW_FIELDS =
	'id,collectionId,collectionName,title,introduction,tags,category,stat,created,thumbnail,article:excerpt(8000)';

export async function listPostsByCategory(pb, category, { limit } = {}) {
	const filter = `category = "${category}"`;

	const records = limit
		? (
				await pb
					.collection('posts')
					.getList(1, limit, { filter, sort: '-created', fields: LIST_VIEW_FIELDS })
			).items
		: await pb
				.collection('posts')
				.getFullList({ filter, sort: '-created', fields: LIST_VIEW_FIELDS });

	return records.map((post) => toSummary(post, pb));
}

export async function getFeaturedCaseStudies(pb) {
	const records = await pb.collection('posts').getFullList({
		filter: `category = "case study" && featured = true`,
		sort: '-created',
		fields: LIST_VIEW_FIELDS
	});

	return records.map((post) => toSummary(post, pb));
}

export async function getPostBySlug(pb, slug) {
	const post = await pb.collection('posts').getOne(idFromSlug(slug));

	return {
		...toSummary(post, pb, '800x450'),
		article: post.article
	};
}
