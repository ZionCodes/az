<script>
	import Header from '#lib/components/Header.svelte';
	import Footer from '#lib/components/Footer.svelte';
	import Blog from '#lib/components/Blog.svelte';

	let { data } = $props();

	const title = 'Automation & GTM Engineering Breakdowns | Zion Gonet';
	const description =
		"Breakdowns and walkthroughs on CRM architecture, outbound engineering, AI workflows and automation, written from systems I've built.";
	const imageAlt =
		'The Journal: Breakdowns, decoded. CRM architecture, outbound engineering and automation.';

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
			{ '@type': 'ListItem', position: 2, name: 'Blog' }
		]
	});
	const jsonLdScriptTag = '<scr' + 'ipt type="application/ld+json">' + jsonLd + '</scr' + 'ipt>';
</script>

<svelte:head>
	<title>{title}</title>
	<meta name="description" content={description} />
	<link rel="canonical" href="https://www.automationzion.com/blog" />
	<meta property="og:title" content={title} />
	<meta property="og:site_name" content="AutomationZion" />
	<meta property="og:description" content={description} />
	<meta property="og:type" content="website" />
	<meta property="og:locale" content="en_US" />
	<meta property="og:url" content="https://www.automationzion.com/blog" />
	<meta property="og:image" content="https://www.automationzion.com/og/og-blog.png" />
	<meta property="og:image:width" content="1200" />
	<meta property="og:image:height" content="630" />
	<meta property="og:image:alt" content={imageAlt} />
	<meta name="twitter:card" content="summary_large_image" />
	<meta name="twitter:title" content={title} />
	<meta name="twitter:description" content={description} />
	<meta name="twitter:image" content="https://www.automationzion.com/og/og-blog.png" />
	<meta name="twitter:image:alt" content={imageAlt} />
	<!-- eslint-disable-next-line svelte/no-at-html-tags -- static JSON.stringify output, not user input -->
	{@html jsonLdScriptTag}
</svelte:head>

<div class="flex min-h-screen flex-col">
	<Header />
	<main class="grow">
		<Blog posts={data.posts} />
	</main>
	<Footer />
</div>
