<script>
	import Header from '#lib/components/Header.svelte';
	import About from '#lib/components/About.svelte';
	import CallToAction from '#lib/components/CallToAction.svelte';
	import Footer from '#lib/components/Footer.svelte';
	import profilePhoto from '#lib/assets/images/automationzion-profile.webp';

	const title = 'About Zion Gonet | Automation Engineer & GTM Engineer';
	const description =
		"I'm Zion Gonet, an Automation Engineer and GTM Engineer. I've worked inside agencies and directly with clients, owning projects from scoping to the build itself.";
	const imageAlt =
		'I build the systems your work runs on. Zion Gonet, Automation Engineer and GTM Engineer.';

	const jsonLd = JSON.stringify({
		'@context': 'https://schema.org',
		'@type': 'ProfilePage',
		url: 'https://www.automationzion.com/about',
		mainEntity: {
			'@type': 'Person',
			'@id': 'https://www.automationzion.com/#person',
			name: 'Zion Gonet',
			jobTitle: 'Automation Engineer and GTM Engineer',
			description,
			image: `https://www.automationzion.com${profilePhoto}`,
			sameAs: [
				'https://www.linkedin.com/in/zion-gonet/',
				'https://github.com/ZionCodes/',
				'https://x.com/AutomationZion'
			]
		}
	});
	const jsonLdScriptTag = '<scr' + 'ipt type="application/ld+json">' + jsonLd + '</scr' + 'ipt>';
</script>

<svelte:head>
	<title>{title}</title>
	<meta name="description" content={description} />
	<link rel="canonical" href="https://www.automationzion.com/about" />
	<meta property="og:title" content={title} />
	<meta property="og:site_name" content="AutomationZion" />
	<meta property="og:description" content={description} />
	<meta property="og:type" content="profile" />
	<meta property="profile:first_name" content="Zion" />
	<meta property="profile:last_name" content="Gonet" />
	<meta property="og:locale" content="en_US" />
	<meta property="og:url" content="https://www.automationzion.com/about" />
	<meta property="og:image" content="https://www.automationzion.com/og/og-about.png" />
	<meta property="og:image:width" content="1200" />
	<meta property="og:image:height" content="630" />
	<meta property="og:image:alt" content={imageAlt} />
	<meta name="twitter:card" content="summary_large_image" />
	<meta name="twitter:title" content={title} />
	<meta name="twitter:description" content={description} />
	<meta name="twitter:image" content="https://www.automationzion.com/og/og-about.png" />
	<meta name="twitter:image:alt" content={imageAlt} />
	<!-- eslint-disable-next-line svelte/no-at-html-tags -- static JSON.stringify output, not user input -->
	{@html jsonLdScriptTag}
</svelte:head>

<div class="flex min-h-screen flex-col">
	<Header />
	<main class="grow">
		<About />
		<CallToAction />
	</main>
	<Footer />
</div>
