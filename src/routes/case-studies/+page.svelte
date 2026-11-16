<script>
	import Header from '#lib/components/Header.svelte';
	import Footer from '#lib/components/Footer.svelte';
	import CaseStudies from '#lib/components/CaseStudies.svelte';

	let { data } = $props();

	const title = 'Automation & GTM Case Studies | Zion Gonet';
	const description =
		'Case studies from automation and GTM builds: the problem, what I built and what changed after it went live.';
	const imageAlt =
		'What changed after each system went live: 10+ hours a week of sales admin saved, 24/7 ad monitoring coverage, 20 accounts per rep distributed automatically.';

	const jsonLd = JSON.stringify({
		'@context': 'https://schema.org',
		'@type': 'BreadcrumbList',
		itemListElement: [
			{
				'@type': 'ListItem',
				position: 1,
				name: 'Home',
				item: 'https://www.automationzion.com/'
			},
			{ '@type': 'ListItem', position: 2, name: 'Case Studies' }
		]
	});
	const jsonLdScriptTag = '<scr' + 'ipt type="application/ld+json">' + jsonLd + '</scr' + 'ipt>';
</script>

<svelte:head>
	<title>{title}</title>
	<meta name="description" content={description} />
	<link rel="canonical" href="https://www.automationzion.com/case-studies" />
	<meta property="og:title" content={title} />
	<meta property="og:site_name" content="AutomationZion" />
	<meta property="og:description" content={description} />
	<meta property="og:type" content="website" />
	<meta property="og:locale" content="en_US" />
	<meta property="og:url" content="https://www.automationzion.com/case-studies" />
	<meta property="og:image" content="https://www.automationzion.com/og/og-case-studies.png" />
	<meta property="og:image:width" content="1200" />
	<meta property="og:image:height" content="630" />
	<meta property="og:image:alt" content={imageAlt} />
	<meta name="twitter:card" content="summary_large_image" />
	<meta name="twitter:title" content={title} />
	<meta name="twitter:description" content={description} />
	<meta name="twitter:image" content="https://www.automationzion.com/og/og-case-studies.png" />
	<meta name="twitter:image:alt" content={imageAlt} />
	<!-- eslint-disable-next-line svelte/no-at-html-tags -- static JSON.stringify output, not user input -->
	{@html jsonLdScriptTag}
</svelte:head>

<div class="flex min-h-screen flex-col">
	<Header />
	<main class="grow">
		<CaseStudies studies={data.caseStudies} headingTag="h1" />
	</main>
	<Footer />
</div>
