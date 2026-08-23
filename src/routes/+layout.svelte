<script>
	import './layout.css';
	import favicon from '$lib/assets/favicon.svg';
	import { ModeWatcher } from 'mode-watcher';
	import clashDisplay500 from '$lib/assets/fonts/clash-display-500.woff2?url';
	import satoshi400 from '$lib/assets/fonts/satoshi-400.woff2?url';
	import satoshi500 from '$lib/assets/fonts/satoshi-500.woff2?url';
	import { onMount } from 'svelte';
	import { afterNavigate } from '$app/navigation';
	import { initAnalytics, trackPageview } from '$lib/analytics.js';

	let { children } = $props();

	onMount(() => {
		initAnalytics();
	});

	// afterNavigate also fires once for the initial page load, not just
	// subsequent client-side navigations, so this alone covers every pageview.
	afterNavigate(({ to }) => {
		if (to?.url) trackPageview(to.url);
	});
</script>

<svelte:head>
	<link rel="icon" href={favicon} />
	<!-- Preload the fonts actually used for the earliest-rendered, most
	     shift-prone text (H1 heading weight + regular/medium body text) so
	     the browser fetches them in parallel with HTML parsing instead of
	     discovering them late via CSS -- fixes the CLS caused by fallback
	     font swapping in after layout has already settled. -->
	<link rel="preload" href={clashDisplay500} as="font" type="font/woff2" crossorigin="anonymous" />
	<link rel="preload" href={satoshi400} as="font" type="font/woff2" crossorigin="anonymous" />
	<link rel="preload" href={satoshi500} as="font" type="font/woff2" crossorigin="anonymous" />
</svelte:head>
<ModeWatcher disableTransitions={false} defaultMode="light" />
{@render children()}
