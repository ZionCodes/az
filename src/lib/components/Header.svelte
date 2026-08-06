<script>
	import logoMarkup from '$lib/assets/images/logo.svg?raw';

	const navLinks = [
		{ label: 'About', href: '/about' },
		{ label: 'Case Studies', href: '/case-studies' },
		{ label: 'Blog', href: '/blog' }
	];

	let scrolled = $state(false);
	let mobileOpen = $state(false);

	$effect(() => {
		const downThreshold = 10;
		const upThreshold = 5;

		function handleScroll() {
			const y = window.scrollY;
			scrolled = scrolled ? y > upThreshold : y > downThreshold;
		}

		window.addEventListener('scroll', handleScroll, { passive: true });
		handleScroll();

		return () => window.removeEventListener('scroll', handleScroll);
	});

	function closeMobileNav() {
		mobileOpen = false;
	}
</script>

<header
	class={[
		'sticky top-0 z-50 mx-auto w-full max-w-4xl border-b border-transparent md:rounded-md md:border md:transition-all md:ease-out',
		scrolled && [
			'border-border bg-background/95 backdrop-blur-sm supports-[backdrop-filter]:bg-background/50',
			'md:top-2 md:max-w-3xl md:shadow'
		]
	]}
>
	<nav
		class={[
			'flex h-14 w-full items-center justify-between px-4 md:h-12 md:transition-all md:ease-out',
			scrolled && 'md:px-2'
		]}
	>
		<a href="/" class="rounded-md p-2 text-foreground hover:bg-muted">
			{@html logoMarkup}
		</a>

		<div class="hidden items-center gap-2 md:flex">
			<div>
				{#each navLinks as { label, href } (href)}
					<a
						{href}
						class="inline-flex h-8 items-center justify-center gap-1.5 rounded-md px-3 text-sm font-medium text-foreground transition-all hover:bg-accent hover:text-accent-foreground"
					>
						{label}
					</a>
				{/each}
			</div>
			<a
				href="mailto:ziongonet@gmail.com"
				class="inline-flex h-8 items-center justify-center gap-1.5 rounded-md bg-primary px-3 text-sm font-medium text-primary-foreground shadow-xs transition-all hover:bg-primary/90"
			>
				Get in touch
			</a>
		</div>

		<div class="md:hidden">
			<button
				type="button"
				aria-controls="mobile-menu"
				aria-expanded={mobileOpen}
				aria-label="Toggle menu"
				onclick={() => (mobileOpen = !mobileOpen)}
				class="inline-flex size-9 items-center justify-center rounded-md border bg-background text-foreground shadow-xs transition-all hover:bg-accent hover:text-accent-foreground"
			>
				{#if mobileOpen}
					<svg
						xmlns="http://www.w3.org/2000/svg"
						class="size-4.5"
						viewBox="0 0 24 24"
						fill="none"
						stroke="currentColor"
						stroke-width="2"
						stroke-linecap="round"
						stroke-linejoin="round"
					>
						<line x1="18" y1="6" x2="6" y2="18" />
						<line x1="6" y1="6" x2="18" y2="18" />
					</svg>
				{:else}
					<svg
						xmlns="http://www.w3.org/2000/svg"
						class="size-4.5"
						viewBox="0 0 24 24"
						fill="none"
						stroke="currentColor"
						stroke-width="2"
						stroke-linecap="round"
						stroke-linejoin="round"
					>
						<line x1="3" y1="6" x2="21" y2="6" />
						<line x1="3" y1="12" x2="21" y2="12" />
						<line x1="3" y1="18" x2="21" y2="18" />
					</svg>
				{/if}
			</button>

			{#if mobileOpen}
				<div
					id="mobile-menu"
					class="fixed inset-0 top-14 z-40 flex flex-col bg-background/95 p-4 backdrop-blur-sm supports-[backdrop-filter]:bg-background/60"
				>
					<div class="grid gap-y-2">
						{#each navLinks as { label, href } (href)}
							<a
								{href}
								onclick={closeMobileNav}
								class="flex h-8 items-center justify-start gap-1.5 rounded-md px-3 text-sm font-medium text-foreground hover:bg-accent hover:text-accent-foreground"
							>
								{label}
							</a>
						{/each}
					</div>
					<div class="mt-12 flex flex-col gap-2">
						<a
							href="mailto:ziongonet@gmail.com"
							onclick={closeMobileNav}
							class="flex h-9 w-full items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground shadow-xs transition-all hover:bg-primary/90"
						>
							Get in touch
						</a>
					</div>
				</div>
			{/if}
		</div>
	</nav>
</header>
