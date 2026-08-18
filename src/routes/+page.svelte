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

<svelte:head>
	<title>Zion Gonet | GTM Systems Engineer for B2B Revenue Teams</title>
	<meta
		name="description"
		content="Data you can trust, tools that talk to each other and no more leads slipping through the cracks. Built by an engineer who's done it for real teams."
	/>
	<meta property="og:title" content="Zion Gonet | GTM Systems Engineer for B2B Revenue Teams" />
	<meta property="og:site_name" content="AutomationZion" />
	<meta
		property="og:description"
		content="Data you can trust, tools that talk to each other and no more leads slipping through the cracks. Built by an engineer who's done it for real teams."
	/>
	<link rel="canonical" href="https://www.automationzion.com/" />
	<meta property="og:type" content="website" />
	<meta property="og:url" content="https://www.automationzion.com/" />
	<meta property="og:image" content="https://www.automationzion.com/og/og-home.png" />
	<meta property="og:image:width" content="1200" />
	<meta property="og:image:height" content="630" />
	<meta name="twitter:card" content="summary_large_image" />
	<meta name="twitter:title" content="Zion Gonet | GTM Systems Engineer for B2B Revenue Teams" />
	<meta
		name="twitter:description"
		content="Data you can trust, tools that talk to each other and no more leads slipping through the cracks."
	/>
	<meta name="twitter:image" content="https://www.automationzion.com/og/og-home.png" />
</svelte:head>

<div class="flex min-h-screen flex-col">
	<Header />
	<main class="grow">
		<Hero />
		<Stats />
		<Services />
		<FeatureSection />
		<HowItWorks />
		<CaseStudies studies={data.caseStudies} showViewAll={true} />
		<TechStack />
		<CallToAction />
	</main>
	<Footer />
</div>
