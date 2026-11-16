<script>
	import Header from '#lib/components/Header.svelte';
	import Hero from '#lib/components/Hero.svelte';
	import Stats from '#lib/components/Stats.svelte';
	import Services from '#lib/components/Services.svelte';
	import FeatureSection from '#lib/components/FeatureSection.svelte';
	import TechStack from '#lib/components/TechStack.svelte';
	import CaseStudies from '#lib/components/CaseStudies.svelte';
	import HowItWorks from '#lib/components/HowItWorks.svelte';
	import Testimonials from '#lib/components/Testimonials.svelte';
	import CallToAction from '#lib/components/CallToAction.svelte';
	import Footer from '#lib/components/Footer.svelte';
	import profilePhoto from '#lib/assets/images/automationzion-profile.webp';

	let { data } = $props();

	const title = 'Zion Gonet | Automation Engineer & GTM Engineer';
	const description =
		'Automation Engineer and GTM Engineer. The handoffs, updates and follow-ups your team chases by hand, running on their own. Open to roles and client work.';
	const imageAlt =
		'Zion Gonet, Automation Engineer and GTM Engineer. Process and revenue systems, built by one engineer.';

	const jsonLd = JSON.stringify({
		'@context': 'https://schema.org',
		'@graph': [
			{
				'@type': 'WebSite',
				'@id': 'https://www.automationzion.com/#website',
				name: 'AutomationZion',
				alternateName: 'Zion Gonet',
				url: 'https://www.automationzion.com/'
			},
			{
				'@type': 'Person',
				'@id': 'https://www.automationzion.com/#person',
				name: 'Zion Gonet',
				jobTitle: 'Automation Engineer and GTM Engineer',
				description,
				url: 'https://www.automationzion.com/',
				image: `https://www.automationzion.com${profilePhoto}`,
				sameAs: [
					'https://www.linkedin.com/in/zion-gonet/',
					'https://github.com/ZionCodes/',
					'https://x.com/AutomationZion'
				],
				knowsAbout: [
					'Workflow automation',
					'GTM engineering',
					'CRM architecture',
					'Salesforce',
					'HubSpot',
					'AI agents',
					'Outbound engineering',
					'Revenue operations'
				]
			}
		]
	});
	const jsonLdScriptTag = '<scr' + 'ipt type="application/ld+json">' + jsonLd + '</scr' + 'ipt>';
</script>

<svelte:head>
	<title>{title}</title>
	<meta name="description" content={description} />
	<link rel="canonical" href="https://www.automationzion.com/" />
	<meta property="og:title" content={title} />
	<meta property="og:site_name" content="AutomationZion" />
	<meta property="og:description" content={description} />
	<meta property="og:type" content="website" />
	<meta property="og:locale" content="en_US" />
	<meta property="og:url" content="https://www.automationzion.com/" />
	<meta property="og:image" content="https://www.automationzion.com/og/og-home.png" />
	<meta property="og:image:width" content="1200" />
	<meta property="og:image:height" content="630" />
	<meta property="og:image:alt" content={imageAlt} />
	<meta name="twitter:card" content="summary_large_image" />
	<meta name="twitter:title" content={title} />
	<meta name="twitter:description" content={description} />
	<meta name="twitter:image" content="https://www.automationzion.com/og/og-home.png" />
	<meta name="twitter:image:alt" content={imageAlt} />
	<!-- eslint-disable-next-line svelte/no-at-html-tags -- static JSON.stringify output, not user input -->
	{@html jsonLdScriptTag}
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
		<Testimonials />
		<TechStack />
		<CallToAction />
	</main>
	<Footer />
</div>
