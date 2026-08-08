<script>
	import { page } from '$app/state';
	import Header from '$lib/components/Header.svelte';
	import Footer from '$lib/components/Footer.svelte';
</script>

<svelte:head>
	<title>{page.status} — AutomationZion</title>
</svelte:head>

<div class="flex min-h-screen flex-col">
	<Header />
	<main class="grow">
		<section class="mx-auto flex max-w-2xl flex-col items-center px-6 py-24 text-center md:py-32">
			<p class="font-heading text-7xl font-semibold text-foreground md:text-8xl">
				{page.status}
			</p>
			<h1 class="mt-4 font-heading text-2xl font-medium text-balance text-foreground md:text-3xl">
				{page.status === 404 ? "This page doesn't exist" : 'Something went wrong'}
			</h1>
			<p class="mt-3 max-w-md text-balance text-muted-foreground">
				{page.status === 404
					? "The page you're looking for may have been moved or never existed."
					: page.error?.message}
			</p>

			<div class="mt-8 flex flex-wrap items-center justify-center gap-3">
				<a
					href="/case-studies"
					class="inline-flex h-10 items-center justify-center gap-2 rounded-full bg-secondary px-6 text-sm font-medium text-secondary-foreground shadow-xs transition-all hover:bg-secondary/80"
				>
					View Case Studies
				</a>
				<a
					href="/"
					class="inline-flex h-10 items-center justify-center gap-2 rounded-full bg-primary px-6 text-sm font-medium text-primary-foreground shadow-xs transition-all hover:bg-primary/90"
				>
					Back to Homepage
					<svg
						xmlns="http://www.w3.org/2000/svg"
						viewBox="0 0 24 24"
						fill="none"
						stroke="currentColor"
						stroke-width="2"
						stroke-linecap="round"
						stroke-linejoin="round"
						class="size-4"
					>
						<path d="M5 12h14M12 5l7 7-7 7" />
					</svg>
				</a>
			</div>
		</section>
	</main>
	<Footer />
</div>
