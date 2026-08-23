import { browser, dev } from '$app/environment';
import { PUBLIC_GA_MEASUREMENT_ID } from '$env/static/public';

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

	const script = document.createElement('script');
	script.async = true;
	script.src = `https://www.googletagmanager.com/gtag/js?id=${PUBLIC_GA_MEASUREMENT_ID}`;
	document.head.appendChild(script);

	window.dataLayer = window.dataLayer || [];
	window.gtag = function gtag() {
		window.dataLayer.push(arguments);
	};
	window.gtag('js', new Date());
	// send_page_view is disabled here because SvelteKit navigates client-side;
	// page views are sent manually from afterNavigate so route changes are tracked.
	window.gtag('config', PUBLIC_GA_MEASUREMENT_ID, { send_page_view: false });
}

export function trackPageview(url) {
	if (!shouldTrack() || typeof window.gtag !== 'function') return;

	window.gtag('event', 'page_view', {
		page_path: url.pathname + url.search,
		page_location: url.href,
		page_title: document.title
	});
}
