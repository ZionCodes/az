<script>
	import Header from '$lib/components/Header.svelte';
	import Footer from '$lib/components/Footer.svelte';
	import PostDetail from '$lib/components/PostDetail.svelte';

	let { data } = $props();
	let post = $derived(data.post);
</script>

<svelte:head>
	<title>{post.title} — AutomationZion</title>
	<meta name="description" content={post.introduction} />
</svelte:head>

<div class="flex min-h-screen flex-col">
	<Header />
	<main class="grow">
		<PostDetail {post} backHref="/case-studies" backLabel="Back to Case Studies" />
	</main>
	<Footer />
</div>
