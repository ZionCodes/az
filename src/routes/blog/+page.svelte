<script>
	import Header from '$lib/components/Header.svelte';
	import Footer from '$lib/components/Footer.svelte';
	import Blog from '$lib/components/Blog.svelte';

	let { data } = $props();
</script>

<svelte:head>
	<title>Blog | Zion Gonet</title>
	<meta
		name="description"
		content="Breakdowns, walkthroughs and honest takes on GTM systems, CRM architecture, automation and building revenue infrastructure that actually works."
	/>
	<meta property="og:title" content="Blog | Zion Gonet" />
	<meta property="og:site_name" content="AutomationZion" />
	<meta
		property="og:description"
		content="Breakdowns, walkthroughs, and honest takes on GTM systems, CRM architecture, automation, and building revenue infrastructure that actually works."
	/>
	<link rel="canonical" href="https://www.automationzion.com/blog" />
	<meta property="og:type" content="website" />
	<meta property="og:url" content="https://www.automationzion.com/blog" />
	<meta property="og:image" content="https://www.automationzion.com/og/og-blog.png" />
	<meta property="og:image:width" content="1200" />
	<meta property="og:image:height" content="630" />
	<meta name="twitter:card" content="summary_large_image" />
	<meta name="twitter:title" content="Blog | Zion Gonet" />
	<meta name="twitter:description" content="Honest takes on GTM systems and CRM architecture." />
	<meta name="twitter:image" content="https://www.automationzion.com/og/og-blog.png" />
</svelte:head>

<div class="flex min-h-screen flex-col">
	<Header />
	<main class="grow">
		<Blog posts={data.posts} />
	</main>
	<Footer />
</div>
