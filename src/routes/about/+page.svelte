<script>
	import Header from '#lib/components/Header.svelte';
	import About from '#lib/components/About.svelte';
	import CallToAction from '#lib/components/CallToAction.svelte';
	import Footer from '#lib/components/Footer.svelte';
</script>

<svelte:head>
	<title>About Zion Gonet | Automation Engineer & GTM Engineer</title>
	<meta
		name="description"
		content="I'm Zion Gonet, an Automation Engineer and GTM Engineer. The result is process and revenue infrastructure where nothing slips through the cracks and the numbers can be trusted."
	/>
	<meta property="og:title" content="About Zion Gonet | Automation Engineer & GTM Engineer" />
	<meta property="og:site_name" content="AutomationZion" />
	<meta
		property="og:description"
		content="I'm Zion Gonet, an Automation Engineer and GTM Engineer. The result is process and revenue infrastructure where nothing slips through the cracks and the numbers can be trusted."
	/>
	<link rel="canonical" href="https://www.automationzion.com/about" />
	<meta property="og:type" content="website" />
	<meta property="og:url" content="https://www.automationzion.com/about" />
	<meta property="og:image" content="https://www.automationzion.com/og/og-about.png" />
	<meta property="og:image:width" content="1200" />
	<meta property="og:image:height" content="630" />
	<meta name="twitter:card" content="summary_large_image" />
	<meta name="twitter:title" content="About Zion Gonet | Automation Engineer & GTM Engineer" />
	<meta
		name="twitter:description"
		content="I'm Zion Gonet, an Automation Engineer and GTM Engineer building process and revenue infrastructure where nothing slips through the cracks."
	/>
	<meta name="twitter:image" content="https://www.automationzion.com/og/og-about.png" />
</svelte:head>

<div class="flex min-h-screen flex-col">
	<Header />
	<main class="grow">
		<About />
		<CallToAction />
	</main>
	<Footer />
</div>
