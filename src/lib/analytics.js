import { browser, dev } from '$app/env';
import { PUBLIC_GA_MEASUREMENT_ID } from '$app/env/public';

const PRODUCTION_HOSTNAMES = ['automationzion.com', 'www.automationzion.com'];

function shouldTrack() {
	return (
		browser &&
		!dev &&
		!!PUBLIC_GA_MEASUREMENT_ID &&
		PRODUCTION_HOSTNAMES.includes(window.location.hostname)
	);
}

export function initAnalytics() {
	if (!shouldTrack()) return;

	// The tag is the heaviest script on the page, so it waits for the first
	// interaction or a few idle seconds instead of competing with first paint.
	// Events queue in dataLayer in the meantime and are sent once it loads.
	const interactionEvents = ['pointerdown', 'keydown', 'touchstart', 'scroll'];
	let loaded = false;
	function loadTag() {
		if (loaded) return;
		loaded = true;
		for (const type of interactionEvents) window.removeEventListener(type, loadTag);
		const script = document.createElement('script');
		script.async = true;
		script.src = `https://www.googletagmanager.com/gtag/js?id=${PUBLIC_GA_MEASUREMENT_ID}`;
		document.head.appendChild(script);
	}
	for (const type of interactionEvents) {
		window.addEventListener(type, loadTag, { once: true, passive: true });
	}
	setTimeout(loadTag, 4000);

	window.dataLayer = window.dataLayer || [];
	window.gtag = function gtag() {
		window.dataLayer.push(arguments);
	};
	window.gtag('js', new Date());
	// send_page_view is disabled here because SvelteKit navigates client-side;
	// page views are sent manually from afterNavigate so route changes are tracked.
	window.gtag('config', PUBLIC_GA_MEASUREMENT_ID, { send_page_view: false });

	// Blog/case-study body content is raw HTML from PocketBase, so its mailto
	// links can't carry onclick handlers directly — delegate from the document
	// instead. Harmless no-op on pages with no .article-content mailto links.
	document.addEventListener('click', (event) => {
		if (event.target.closest('.article-content a[href^="mailto:"]')) {
			trackEvent('contact_click', { location: 'article_body' });
		}
	});
}

export function trackPageview(url) {
	if (!shouldTrack() || typeof window.gtag !== 'function') return;

	window.gtag('event', 'page_view', {
		page_path: url.pathname + url.search,
		page_location: url.href,
		page_title: document.title
	});
}

export function trackEvent(name, params = {}) {
	if (!shouldTrack() || typeof window.gtag !== 'function') return;

	window.gtag('event', name, params);
}
