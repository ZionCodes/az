<script>
	import Header from '$lib/components/Header.svelte';
	import About from '$lib/components/About.svelte';
	import CallToAction from '$lib/components/CallToAction.svelte';
	import Footer from '$lib/components/Footer.svelte';
</script>

<svelte:head>
	<title>About Zion Gonet | GTM Systems Engineer</title>
	<meta
		name="description"
		content="I'm Zion Gonet, a GTM Systems Engineer building end-to-end revenue infrastructure across CRMs, automation tools and AI agents."
	/>
	<meta property="og:title" content="About Zion Gonet | GTM Systems Engineer" />
	<meta
		property="og:description"
		content="I'm Zion Gonet, a GTM Systems Engineer building end-to-end revenue infrastructure across CRMs, automation tools and AI agents."
	/>
	<link rel="canonical" href="https://www.automationzion.com/about" />
	<meta property="og:type" content="website" />
	<meta property="og:url" content="https://www.automationzion.com/about" />
	<meta property="og:image" content="https://www.automationzion.com/og/og-about.png" />
	<meta property="og:image:width" content="1200" />
	<meta property="og:image:height" content="630" />
	<meta name="twitter:card" content="summary_large_image" />
	<meta name="twitter:title" content="About Zion Gonet | GTM Systems Engineer" />
	<meta
		name="twitter:description"
		content="I'm Zion Gonet, a GTM Systems Engineer building end-to-end revenue infrastructure."
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
