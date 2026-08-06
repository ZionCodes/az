<script>
	let { posts = [], loading = false } = $props();

	const skeletonCount = 4;
</script>

<section class="mx-auto max-w-5xl px-6 py-16 md:py-24">
	<div class="mx-auto max-w-xl space-y-4 text-center">
		<p
			class="flex items-center justify-center gap-2 text-xs tracking-[0.2em] text-muted-foreground uppercase"
		>
			<span class="inline-block h-px w-8 bg-foreground/30"></span>
			The Journal
			<span class="inline-block h-px w-8 bg-foreground/30"></span>
		</p>
		<h1 class="font-heading text-3xl font-semibold text-foreground lg:text-4xl">
			Breakdowns, decoded.
		</h1>
		<p class="text-muted-foreground">
			Honest takes on GTM systems, outbound engineering, CRM architecture, and building revenue
			infrastructure that actually works.
		</p>
	</div>

	<div class="mt-12 grid gap-4 lg:grid-cols-2">
		{#if loading}
			{#each Array(skeletonCount) as _, i (i)}
				<div class="flex flex-col gap-4 rounded-xl border bg-card p-4 sm:flex-row sm:items-center">
					<div
						class="aspect-video w-full flex-shrink-0 animate-pulse rounded-lg bg-muted sm:aspect-auto sm:h-36 sm:w-48"
					></div>
					<div class="flex w-full min-w-0 flex-col gap-3">
						<div class="h-4 w-3/4 animate-pulse rounded bg-muted"></div>
						<div class="h-3 w-full animate-pulse rounded bg-muted"></div>
						<div class="h-3 w-2/3 animate-pulse rounded bg-muted"></div>
					</div>
				</div>
			{/each}
		{:else if posts.length === 0}
			<p class="col-span-full py-12 text-center text-muted-foreground">
				No posts yet, check back soon.
			</p>
		{:else}
			{#each posts as post (post.id)}
				<a
					href="/blog/{post.slug}"
					class="group flex flex-col gap-4 rounded-xl border bg-card p-4 transition-all hover:-translate-y-0.5 hover:shadow-md sm:flex-row sm:items-center"
				>
					{#if post.thumbnailUrl}
						<img
							src={post.thumbnailUrl}
							alt={post.title}
							loading="lazy"
							width="192"
							height="144"
							class="aspect-video w-full flex-shrink-0 rounded-lg object-cover transition-transform duration-500 group-hover:scale-105 sm:aspect-auto sm:h-36 sm:w-48"
						/>
					{:else}
						<div
							class="flex aspect-video w-full flex-shrink-0 items-center justify-center rounded-lg bg-muted sm:aspect-auto sm:h-36 sm:w-48"
						>
							<span class="font-heading text-2xl font-medium text-muted-foreground">AZ</span>
						</div>
					{/if}
					<div class="flex min-w-0 flex-col gap-2">
						<h3 class="font-heading text-base leading-snug font-semibold text-foreground">
							{post.title}
						</h3>
						<p class="line-clamp-2 text-sm leading-relaxed text-muted-foreground">
							{post.introduction}
						</p>
					</div>
				</a>
			{/each}
		{/if}
	</div>
</section>
