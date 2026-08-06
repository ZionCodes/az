import { error } from '@sveltejs/kit';
import { getPostBySlug } from '$lib/server/posts.js';

export async function load({ params, locals }) {
	try {
		return { post: await getPostBySlug(locals.pb, params.slug) };
	} catch (err) {
		throw error(404, 'Case study not found');
	}
}
