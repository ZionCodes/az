<script>
	let { studies = [], loading = false, showViewAll = false, headingTag = 'h2' } = $props();

	const skeletonCount = 2;
</script>

<section class="py-16 md:py-32">
	<div class="mx-auto max-w-5xl px-6">
		<div class="mx-auto max-w-xl space-y-4 text-center">
			<p
				class="flex items-center justify-center gap-2 text-xs tracking-[0.2em] text-muted-foreground uppercase"
			>
				<span class="inline-block h-px w-8 bg-foreground/30"></span>
				Proof of Work
				<span class="inline-block h-px w-8 bg-foreground/30"></span>
			</p>
			<svelte:element this={headingTag} class="font-heading text-3xl font-semibold lg:text-4xl">
				Case Studies
			</svelte:element>
			<p class="text-muted-foreground">
				Real GTM systems, shipped for real teams. Here's what changed.
			</p>
		</div>

		<div class="mt-12 grid gap-6 md:grid-cols-2">
			{#if loading}
				{#each Array(skeletonCount) as _, i (i)}
					<div class="flex flex-col gap-6 rounded-xl border bg-card p-8">
						<div class="flex items-start justify-between gap-4">
							<div class="h-4 w-1/3 animate-pulse rounded bg-muted"></div>
							<div class="h-8 w-14 animate-pulse rounded bg-muted"></div>
						</div>
						<div class="space-y-2">
							<div class="h-5 w-3/4 animate-pulse rounded bg-muted"></div>
							<div class="h-3 w-full animate-pulse rounded bg-muted"></div>
							<div class="h-3 w-2/3 animate-pulse rounded bg-muted"></div>
						</div>
					</div>
				{/each}
			{:else if studies.length === 0}
				<p class="col-span-full py-8 text-center text-muted-foreground">
					No case studies published yet, check back soon.
				</p>
			{:else}
				{#each studies as study (study.id)}
					<a
						href="/case-studies/{study.slug}"
						class="group flex flex-col gap-6 rounded-xl border bg-card p-8 text-card-foreground shadow-sm transition-all hover:-translate-y-0.5 hover:shadow-md"
					>
						<div class="flex items-start justify-between gap-4">
							{#if study.label}
								<span class="text-sm text-muted-foreground">{study.label}</span>
							{/if}
							{#if study.stat}
								<span class="font-heading text-4xl font-semibold text-primary">{study.stat}</span>
							{/if}
						</div>
						<div class="space-y-2">
							<h3 class="font-heading text-xl font-semibold">{study.title}</h3>
							<p class="text-sm text-muted-foreground">{study.introduction}</p>
						</div>
						<span
							class="mt-auto inline-flex items-center gap-1.5 text-sm font-medium text-foreground"
						>
							Read case study
							<svg
								xmlns="http://www.w3.org/2000/svg"
								viewBox="0 0 24 24"
								fill="none"
								stroke="currentColor"
								stroke-width="2"
								stroke-linecap="round"
								stroke-linejoin="round"
								class="size-3.5 duration-150 ease-out group-hover:translate-x-1"
							>
								<path d="M5 12h14M12 5l7 7-7 7" />
							</svg>
						</span>
					</a>
				{/each}
			{/if}
		</div>

		{#if showViewAll}
			<div class="mt-10 flex justify-center">
				<a
					href="/case-studies"
					class="inline-flex items-center gap-2 rounded-full border px-6 py-2.5 text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
				>
					View all case studies
					<svg
						xmlns="http://www.w3.org/2000/svg"
						viewBox="0 0 24 24"
						fill="none"
						stroke="currentColor"
						stroke-width="2"
						stroke-linecap="round"
						stroke-linejoin="round"
						class="size-3.5"
					>
						<path d="M5 12h14M12 5l7 7-7 7" />
					</svg>
				</a>
			</div>
		{/if}
	</div>
</section>
