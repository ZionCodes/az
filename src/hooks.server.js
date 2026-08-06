import PocketBase from 'pocketbase';
import { SECRET_EMAIL, SECRET_PASSWORD, PB_URL } from '$env/static/private';

const pb = new PocketBase(PB_URL);

// The SDK auto-cancels duplicate in-flight requests to the same endpoint by
// default, which fights with a single shared client handling concurrent SSR
// requests. This client never runs in a browser, so that guard is unwanted.
pb.autoCancellation(false);

async function ensureAuth() {
	if (pb.authStore.isValid) return;

	try {
		await pb.collection('_superusers').authWithPassword(SECRET_EMAIL, SECRET_PASSWORD);
	} catch (err) {
		console.error('PocketBase auth failed:', err);
	}
}

export async function handle({ event, resolve }) {
	await ensureAuth();
	event.locals.pb = pb;
	return resolve(event);
}
