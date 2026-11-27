<script>
	import CallToAction from '#lib/components/CallToAction.svelte';
	import automationzion from '#lib/assets/images/zg-avatar.webp';

	let { post, backHref, backLabel } = $props();
</script>

<article class="mx-auto max-w-2xl px-6 py-16 md:py-24">
	<a
		href={backHref}
		class="inline-flex items-center gap-1.5 text-sm text-muted-foreground transition-colors hover:text-foreground"
	>
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
			<path d="m15 18-6-6 6-6" />
		</svg>
		{backLabel}
	</a>

	{#if post.label}
		<p
			class="mt-8 flex items-center gap-2 text-xs tracking-[0.2em] text-muted-foreground uppercase"
		>
			<span class="inline-block h-px w-8 bg-foreground/30"></span>
			{post.label}
		</p>
	{/if}

	<h1 class="mt-4 font-heading text-2xl font-medium text-foreground md:text-4xl md:leading-tight">
		{post.title}
	</h1>

	<div class="mt-8 flex items-center gap-3 border-b pb-8">
		<img
			src={automationzion}
			alt="Zion Gonet"
			width="40"
			height="40"
			class="size-10 rounded-full object-cover"
		/>
		<div>
			<p class="text-sm font-semibold text-foreground">Zion Gonet</p>
			<ul class="mt-0.5 flex gap-x-3 text-xs text-muted-foreground">
				{#if post.created}
					<li>
						{new Date(post.created).toLocaleDateString('en-US', {
							month: 'short',
							day: 'numeric',
							year: 'numeric'
						})}
					</li>
				{/if}
				<li>{post.readingTime} min read</li>
			</ul>
		</div>
	</div>

	{#if post.thumbnailUrl}
		<img
			src={post.thumbnailUrl}
			alt={post.title}
			fetchpriority="high"
			class="mt-10 aspect-video w-full rounded-2xl object-cover"
		/>
	{/if}

	<div class="article-content mt-10 leading-relaxed text-foreground/80">
		<!-- article HTML is only ever written by the site owner via an authenticated PocketBase session,
		     never from public input; revisit with a sanitizer (e.g. DOMPurify) if that ever changes -->
		<!-- eslint-disable-next-line svelte/no-at-html-tags -->
		{@html post.article}
	</div>
</article>

<CallToAction location="post_cta" />

<style>
	.article-content :global(h2) {
		margin-top: 2rem;
		margin-bottom: 0.75rem;
		font-family: var(--font-heading);
		font-size: 1.5rem;
		font-weight: 600;
		color: var(--foreground);
	}
	.article-content :global(h3) {
		margin-top: 1.5rem;
		margin-bottom: 0.5rem;
		font-family: var(--font-heading);
		font-size: 1.25rem;
		font-weight: 600;
		color: var(--foreground);
	}
	.article-content :global(p) {
		margin-top: 1rem;
	}
	.article-content :global(a) {
		color: var(--foreground);
		text-decoration: underline;
		text-underline-offset: 3px;
	}
	.article-content :global(ul),
	.article-content :global(ol) {
		margin-top: 1rem;
		padding-left: 1.5rem;
	}
	.article-content :global(ul) {
		list-style: disc;
	}
	.article-content :global(ol) {
		list-style: decimal;
	}
	.article-content :global(li) {
		margin-top: 0.375rem;
	}
	.article-content :global(blockquote) {
		margin-top: 1.25rem;
		border-left: 2px solid var(--border);
		padding-left: 1rem;
		font-style: italic;
		color: var(--muted-foreground);
	}
	.article-content :global(code) {
		border-radius: 0.25rem;
		background: var(--muted);
		padding: 0.125rem 0.375rem;
		font-size: 0.875em;
	}
	.article-content :global(pre) {
		margin-top: 1rem;
		overflow-x: auto;
		border-radius: 0.5rem;
		background: var(--muted);
		padding: 1rem;
	}
	.article-content :global(pre code) {
		background: transparent;
		padding: 0;
	}
	.article-content :global(img) {
		margin-top: 1.5rem;
		border-radius: 0.75rem;
	}
	.article-content :global(strong) {
		color: var(--foreground);
		font-weight: 600;
	}
	.article-content :global(figure) {
		margin-top: 1.5rem;
	}
	.article-content :global(figure img) {
		width: 100%;
		height: auto;
		border: 1px solid var(--border);
		background: #fff;
	}
	.article-content :global(figcaption) {
		margin-top: 0.5rem;
		font-size: 0.875rem;
		font-style: italic;
		color: var(--muted-foreground);
	}
	.article-content :global(.img-pending-box) {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		gap: 0.25rem;
		aspect-ratio: 16 / 9;
		border: 1px dashed var(--border);
		border-radius: 0.75rem;
		background: var(--muted);
		padding: 1rem;
		text-align: center;
		font-size: 0.875rem;
		font-weight: 500;
		color: var(--muted-foreground);
	}
	.article-content :global(.img-pending-box span) {
		font-size: 0.75rem;
		font-weight: 400;
	}
	.article-content :global(.table-scroll) {
		margin-top: 1.25rem;
		overflow-x: auto;
		border: 1px solid var(--border);
		border-radius: 0.75rem;
	}
	.article-content :global(table) {
		width: 100%;
		border-collapse: collapse;
		font-size: 0.875rem;
		line-height: 1.5;
	}
	.article-content :global(th),
	.article-content :global(td) {
		padding: 0.625rem 0.875rem;
		text-align: left;
		vertical-align: top;
	}
	.article-content :global(th) {
		background: var(--muted);
		font-weight: 600;
		color: var(--foreground);
	}
	.article-content :global(tr + tr td),
	.article-content :global(tbody tr:first-child td) {
		border-top: 1px solid var(--border);
	}
</style>
