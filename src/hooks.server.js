import PocketBase from 'pocketbase';
import { PB_URL } from '$app/env/private';

const pb = new PocketBase(PB_URL);

// The SDK auto-cancels duplicate in-flight requests to the same endpoint by
// default, which fights with a single shared client handling concurrent SSR
// requests. This client never runs in a browser, so that guard is unwanted.
pb.autoCancellation(false);

// posts' listRule/viewRule are public, and this app only ever reads — all
// writes happen through separately-authenticated local scripts. So this
// client stays unauthenticated: no superuser credentials in the runtime
// environment, no auth round-trip on cold starts.
export async function handle({ event, resolve }) {
	event.locals.pb = pb;
	return resolve(event);
}
