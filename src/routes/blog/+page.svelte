<script>
	import Header from '$lib/components/Header.svelte';
	import Footer from '$lib/components/Footer.svelte';
	import Blog from '$lib/components/Blog.svelte';

	let { data } = $props();
</script>

<svelte:head>
	<title>Blog — AutomationZion</title>
	<meta
		name="description"
		content="Breakdowns, walkthroughs, and honest takes on GTM systems, outbound engineering, CRM architecture, and building revenue infrastructure that actually works."
	/>
</svelte:head>

<div class="flex min-h-screen flex-col">
	<Header />
	<main class="grow">
		{#await data.streamed.posts}
			<Blog loading={true} />
		{:then posts}
			<Blog {posts} />
		{:catch}
			<Blog posts={[]} />
		{/await}
	</main>
	<Footer />
</div>
