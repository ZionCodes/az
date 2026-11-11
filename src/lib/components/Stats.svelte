<script>
	import { reveal } from '#lib/actions/reveal.js';
	import { playOnView } from '#lib/actions/playOnView.js';

	// same five color families used across the Services cards, so the two
	// sections read as one system rather than introducing a new palette
	const barGradients = [
		'group-hover:from-blue-600 group-hover:to-sky-400',
		'group-hover:from-violet-600 group-hover:to-purple-400',
		'group-hover:from-orange-600 group-hover:to-red-400',
		'group-hover:from-emerald-600 group-hover:to-teal-400',
		'group-hover:from-rose-600 group-hover:to-pink-400'
	];
</script>

<section class="@container py-24">
	<div class="mx-auto max-w-2xl px-6">
		<div class="space-y-4 opacity-0" use:reveal>
			<p class="flex items-center gap-2 text-xs tracking-[0.2em] text-muted-foreground uppercase">
				<span class="inline-block h-px w-8 bg-foreground/30"></span>
				By the Numbers
			</p>
			<h2 class="font-heading text-4xl font-medium text-balance">Built on Real Experience</h2>
			<p class="text-balance text-muted-foreground">
				Years spent deep in automation and GTM systems, with the depth of tooling to back it up.
			</p>
		</div>
		<div
			class="mt-12 grid grid-cols-2 gap-6 text-sm opacity-0 @xl:grid-cols-3"
			use:reveal={{ delay: 150 }}
		>
			<div class="border-y py-6">
				<p class="text-xl text-muted-foreground">
					<span class="font-medium text-blue-600">3+</span> Years building automation and GTM systems.
				</p>
			</div>
			<div class="border-y py-6">
				<p class="text-xl text-muted-foreground">
					<span class="font-medium text-violet-600">20+</span> Systems shipped, end to end.
				</p>
			</div>
			<div class="border-y py-6">
				<p class="text-xl text-muted-foreground">
					<span class="font-medium text-orange-600">10+</span> Tools across the GTM stack.
				</p>
			</div>
		</div>
	</div>
	<div
		aria-hidden={true}
		class="stats-bars mx-auto flex h-72 max-w-5xl items-end justify-between gap-0.5 px-6"
		use:playOnView={{ class: 'stats-play', enterDelay: 100, replayOnHover: false }}
	>
		<!-- eslint-disable-next-line no-unused-vars -- index-only each; item itself is intentionally unused -->
		{#each { length: 48 } as _, i (i)}
			{@const progress = i / 47}
			{@const base = Math.pow(progress, 2.2)}
			{@const noise = Math.sin(i * 0.7) * 0.08 + Math.sin(i * 1.3) * 0.05}
			{@const height = Math.min(1, Math.max(0.05, base + noise * (0.3 + progress * 0.7)))}
			{@const gradient = barGradients[i % barGradients.length]}
			<div
				class="group relative h-full w-px rounded-full duration-200 before:absolute before:inset-0 before:-inset-x-6 hover:mx-2"
				style="--line-height: {height * 100}%; --bar-i: {i};"
			>
				<div
					class="stat-bar-fill absolute inset-0 mt-auto h-(--line-height) rounded-full bg-foreground/15 duration-200 group-hover:bg-gradient-to-t {gradient}"
				></div>
			</div>
		{/each}
	</div>
</section>

<style>
	/* bars rise up from the baseline, staggered left to right, every time the
	   chart scrolls into view (including scrolling away and back) -- mirrors
	   the same play-on-view pattern used for the Services cards */
	.stat-bar-fill {
		transform-origin: bottom;
		transform: scaleY(1);
	}
	@keyframes stat-bar-rise {
		from {
			transform: scaleY(0);
		}
		to {
			transform: scaleY(1);
		}
	}
	.stats-bars:global(.stats-play) .stat-bar-fill {
		animation: stat-bar-rise 0.5s cubic-bezier(0.34, 1.56, 0.64, 1) backwards;
		animation-delay: calc(var(--bar-i) * 14ms);
	}

	@media (prefers-reduced-motion: reduce) {
		.stat-bar-fill {
			animation: none !important;
		}
	}
</style>
