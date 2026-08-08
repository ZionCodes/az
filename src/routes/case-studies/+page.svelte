<script>
	import Header from '$lib/components/Header.svelte';
	import Footer from '$lib/components/Footer.svelte';
	import CaseStudies from '$lib/components/CaseStudies.svelte';

	let { data } = $props();
</script>

<svelte:head>
	<title>Case Studies | Zion Gonet</title>
	<meta
		name="description"
		content="Real GTM systems built and shipped. Outbound infrastructure, CRM architecture, AI agents and automation pipelines with measurable outcomes."
	/>
	<meta property="og:title" content="Case Studies | Zion Gonet" />
	<meta
		property="og:description"
		content="Real GTM systems built and shipped. Outbound infrastructure, CRM architecture, AI agents and automation pipelines with measurable outcomes."
	/>
	<link rel="canonical" href="https://www.automationzion.com/case-studies" />
	<meta property="og:type" content="website" />
	<meta property="og:url" content="https://www.automationzion.com/case-studies" />
	<meta property="og:image" content="https://www.automationzion.com/og/og-case-studies.png" />
	<meta property="og:image:width" content="1200" />
	<meta property="og:image:height" content="630" />
	<meta name="twitter:card" content="summary_large_image" />
	<meta name="twitter:title" content="Case Studies | Zion Gonet" />
	<meta
		name="twitter:description"
		content="Real GTM systems built and shipped, with measurable outcomes."
	/>
	<meta name="twitter:image" content="https://www.automationzion.com/og/og-case-studies.png" />
</svelte:head>

<div class="flex min-h-screen flex-col">
	<Header />
	<main class="grow">
		<CaseStudies studies={data.caseStudies} headingTag="h1" />
	</main>
	<Footer />
</div>
