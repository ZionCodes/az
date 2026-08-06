<script>
	import Header from '$lib/components/Header.svelte';
	import Footer from '$lib/components/Footer.svelte';
	import CaseStudies from '$lib/components/CaseStudies.svelte';

	let { data } = $props();
</script>

<svelte:head>
	<title>Case Studies — AutomationZion</title>
	<meta
		name="description"
		content="Real GTM systems built and shipped. Outbound infrastructure, CRM architecture, AI agents, and automation pipelines with measurable outcomes."
	/>
</svelte:head>

<div class="flex min-h-screen flex-col">
	<Header />
	<main class="grow">
		{#await data.streamed.caseStudies}
			<CaseStudies loading={true} headingTag="h1" />
		{:then caseStudies}
			<CaseStudies studies={caseStudies} headingTag="h1" />
		{:catch}
			<CaseStudies studies={[]} headingTag="h1" />
		{/await}
	</main>
	<Footer />
</div>
