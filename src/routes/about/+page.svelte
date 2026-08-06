<script>
	import Header from '$lib/components/Header.svelte';
	import About from '$lib/components/About.svelte';
	import CallToAction from '$lib/components/CallToAction.svelte';
	import Footer from '$lib/components/Footer.svelte';
</script>

<svelte:head>
	<title>About — AutomationZion</title>
</svelte:head>

<div class="flex min-h-screen flex-col">
	<Header />
	<main class="grow">
		<About />
		<CallToAction />
	</main>
	<Footer />
</div>
