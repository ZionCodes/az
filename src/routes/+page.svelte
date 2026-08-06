<script>
	import Header from '$lib/components/Header.svelte';
	import Hero from '$lib/components/Hero.svelte';
	import Stats from '$lib/components/Stats.svelte';
	import Services from '$lib/components/Services.svelte';
	import FeatureSection from '$lib/components/FeatureSection.svelte';
	import TechStack from '$lib/components/TechStack.svelte';
	import CaseStudies from '$lib/components/CaseStudies.svelte';
	import HowItWorks from '$lib/components/HowItWorks.svelte';
	import CallToAction from '$lib/components/CallToAction.svelte';
	import Footer from '$lib/components/Footer.svelte';

	let { data } = $props();
</script>

<div class="flex min-h-screen flex-col">
	<Header />
	<main class="grow">
		<Hero />
		<Stats />
		<Services />
		<FeatureSection />
		<HowItWorks />
		{#await data.streamed.caseStudies}
			<CaseStudies loading={true} />
		{:then caseStudies}
			<CaseStudies studies={caseStudies} showViewAll={true} />
		{:catch}
			<CaseStudies studies={[]} />
		{/await}
		<TechStack />
		<CallToAction />
	</main>
	<Footer />
</div>
