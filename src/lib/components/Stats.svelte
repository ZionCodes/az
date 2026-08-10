<script>
	import { reveal } from '$lib/actions/reveal.js';
</script>

<section class="@container py-24">
	<div class="mx-auto max-w-2xl px-6">
		<div class="space-y-4" use:reveal>
			<p class="flex items-center gap-2 text-xs tracking-[0.2em] text-muted-foreground uppercase">
				<span class="inline-block h-px w-8 bg-foreground/30"></span>
				By the Numbers
			</p>
			<h2 class="font-heading text-4xl font-medium text-balance">Built on Real Experience</h2>
			<p class="text-balance text-muted-foreground">
				Years spent deep in automation and GTM systems, with the depth of tooling to back it up.
			</p>
		</div>
		<div class="mt-12 grid grid-cols-2 gap-6 text-sm @xl:grid-cols-3" use:reveal={{ delay: 150 }}>
			<div class="border-y py-6">
				<p class="text-xl text-muted-foreground">
					<span class="font-medium text-foreground">3+</span> Years building automation and GTM
					systems.
				</p>
			</div>
			<div class="border-y py-6">
				<p class="text-xl text-muted-foreground">
					<span class="font-medium text-foreground">20+</span> Systems shipped, end to end.
				</p>
			</div>
			<div class="border-y py-6">
				<p class="text-xl text-muted-foreground">
					<span class="font-medium text-foreground">10+</span> Tools across the GTM stack.
				</p>
			</div>
		</div>
	</div>
	<div
		aria-hidden={true}
		class="mx-auto flex h-72 max-w-5xl items-end justify-between gap-0.5 px-6"
	>
		{#each { length: 48 } as _, i}
			{@const progress = i / 47}
			{@const base = Math.pow(progress, 2.2)}
			{@const noise = Math.sin(i * 0.7) * 0.08 + Math.sin(i * 1.3) * 0.05}
			{@const height = Math.min(1, Math.max(0.05, base + noise * (0.3 + progress * 0.7)))}
			<div
				class="relative h-full w-px rounded-full duration-200 before:absolute before:inset-0 before:-inset-x-6 after:absolute after:inset-0 after:mt-auto after:h-(--line-height) after:bg-foreground/15 hover:mx-2 hover:after:bg-primary"
				style="--line-height: {height * 100}%"
			></div>
		{/each}
	</div>
</section>
