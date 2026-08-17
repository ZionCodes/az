<script>
	import logoMarkup from '$lib/assets/images/logo.svg?raw';
	import { mode, toggleMode } from 'mode-watcher';

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
		<a
			href="/"
			aria-label="AutomationZion — Home"
			class="rounded-md p-2 text-foreground hover:bg-muted"
		>
			<!-- eslint-disable-next-line svelte/no-at-html-tags -- static inline SVG import, not user data -->
			{@html logoMarkup}
		</a>

		<div class="flex items-center gap-2">
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
					class="hover-smile inline-flex h-8 items-center justify-center gap-1.5 rounded-md bg-primary px-3 text-sm font-medium text-primary-foreground shadow-xs transition-all hover:bg-primary/90"
				>
					Get in touch
				</a>
			</div>

			<button
				type="button"
				aria-label="Toggle color theme"
				onclick={toggleMode}
				class="inline-flex size-8 items-center justify-center rounded-md text-foreground transition-all hover:bg-accent hover:text-accent-foreground"
			>
				{#if mode.current === 'dark'}
					<svg
						xmlns="http://www.w3.org/2000/svg"
						class="size-4"
						viewBox="0 0 24 24"
						fill="none"
						stroke="currentColor"
						stroke-width="2"
						stroke-linecap="round"
						stroke-linejoin="round"
					>
						<circle cx="12" cy="12" r="4" />
						<path
							d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M6.34 17.66l-1.41 1.41M19.07 4.93l-1.41 1.41"
						/>
					</svg>
				{:else}
					<svg
						xmlns="http://www.w3.org/2000/svg"
						class="size-4"
						viewBox="0 0 24 24"
						fill="none"
						stroke="currentColor"
						stroke-width="2"
						stroke-linecap="round"
						stroke-linejoin="round"
					>
						<path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79Z" />
					</svg>
				{/if}
			</button>

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
								class="hover-smile flex h-9 w-full items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground shadow-xs transition-all hover:bg-primary/90"
							>
								Get in touch
							</a>
						</div>
					</div>
				{/if}
			</div>
		</div>
	</nav>
</header>
