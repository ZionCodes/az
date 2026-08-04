<script>
	import Header from '$lib/components/Header.svelte';
	import Hero from '$lib/components/Hero.svelte';
	import Stats from '$lib/components/Stats.svelte';
	import Services from '$lib/components/Services.svelte';
	import HowItWorks from '$lib/components/HowItWorks.svelte';
</script>

<div class="flex min-h-screen flex-col">
	<Header />
	<main class="grow">
		<Hero />
		<Stats />
		<Services />
		<HowItWorks />
	</main>
</div>
