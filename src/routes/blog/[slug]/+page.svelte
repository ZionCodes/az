<script>
	import { page } from '$app/state';
	import Header from '$lib/components/Header.svelte';
	import Footer from '$lib/components/Footer.svelte';
	import PostDetail from '$lib/components/PostDetail.svelte';

	let { data } = $props();
	let post = $derived(data.post);
	let canonicalUrl = $derived(`https://www.automationzion.com${page.url.pathname}`);
	let ogImage = $derived(post.thumbnailUrl || 'https://www.automationzion.com/og/og-blog.png');
</script>

<svelte:head>
	<title>{post.title} — AutomationZion</title>
	<meta name="description" content={post.introduction} />
	<link rel="canonical" href={canonicalUrl} />
	<meta property="og:title" content={post.title} />
	<meta property="og:description" content={post.introduction} />
	<meta property="og:type" content="article" />
	<meta property="article:published_time" content={new Date(post.created).toISOString()} />
	<meta property="og:url" content={canonicalUrl} />
	<meta property="og:image" content={ogImage} />
	<meta name="twitter:card" content="summary_large_image" />
	<meta name="twitter:title" content={post.title} />
	<meta name="twitter:description" content={post.introduction} />
	<meta name="twitter:image" content={ogImage} />
</svelte:head>

<div class="flex min-h-screen flex-col">
	<Header />
	<main class="grow">
		<PostDetail {post} backHref="/blog" backLabel="Back to Blog" />
	</main>
	<Footer />
</div>
