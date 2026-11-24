<script>
	import { reveal } from '#lib/actions/reveal.js';
	import { playOnView } from '#lib/actions/playOnView.js';
	import { testimonials as defaultTestimonials } from '#lib/data/testimonials.js';

	let { items = defaultTestimonials } = $props();

	const accents = ['text-blue-600', 'text-violet-600', 'text-orange-600'];

	let featured = $derived(items[0]);
	let rest = $derived(items.slice(1));

	function initials(name) {
		return name
			.split(' ')
			.filter(Boolean)
			.slice(0, 2)
			.map((part) => part[0].toUpperCase())
			.join('');
	}

	// splits the quote around the one phrase that carries the result, so that
	// phrase alone gets the marker sweep
	function parts(item) {
		const at = item.highlight ? item.quote.indexOf(item.highlight) : -1;
		if (at === -1) return { before: item.quote, mark: '', after: '' };
		return {
			before: item.quote.slice(0, at),
			mark: item.highlight,
			after: item.quote.slice(at + item.highlight.length)
		};
	}
</script>

{#snippet quoteText(item)}
	{@const p = parts(item)}
	“{p.before}{#if p.mark}<span
			class="hl-sweep"
			use:playOnView={{ class: 'hl-play', replayOnHover: false }}>{p.mark}</span
		>{/if}{p.after}”
{/snippet}

{#snippet byline(item, i)}
	<figcaption class="flex flex-wrap items-center justify-between gap-x-6 gap-y-4">
		<div class="flex items-center gap-3 text-left">
			{#if item.avatar}
				<img
					src={item.avatar}
					alt=""
					loading="lazy"
					class="size-10 rounded-full border object-cover"
				/>
			{:else}
				<span
					aria-hidden="true"
					class="flex size-10 items-center justify-center rounded-full border bg-background text-xs font-medium text-muted-foreground"
				>
					{initials(item.name)}
				</span>
			{/if}
			<div>
				<cite class="block text-sm font-medium text-foreground not-italic">{item.name}</cite>
				<span class="block text-xs text-muted-foreground">{item.role}, {item.company}</span>
			</div>
		</div>

		{#if item.result}
			<svelte:element
				this={item.href ? 'a' : 'div'}
				href={item.href}
				class="flex items-baseline gap-2 text-left text-sm"
			>
				<span class="font-heading text-xl font-semibold {accents[i % accents.length]}">
					{item.result.value}
				</span>
				<span
					class={[
						'text-muted-foreground',
						item.href && 'underline-offset-4 hover:text-foreground hover:underline'
					]}
				>
					{item.result.label}
				</span>
			</svelte:element>
		{/if}
	</figcaption>
{/snippet}

{#if items.length > 0}
	<section class="overflow-hidden py-16 md:py-24">
		<div class="mx-auto max-w-5xl px-6">
			<div class="mx-auto max-w-xl space-y-4 text-center opacity-0" use:reveal>
				<h2 class="font-heading text-3xl font-semibold lg:text-4xl">
					From the People I've Built For
				</h2>
			</div>

			<figure
				class="frame relative mx-auto mt-16 max-w-3xl space-y-8 px-6 py-10 opacity-0 md:px-12 md:py-12"
				use:reveal={{ delay: 100 }}
			>
				<span class="rail rail-v left-0"></span>
				<span class="rail rail-v right-0"></span>
				<span class="rail rail-h top-0"></span>
				<span class="rail rail-h bottom-0"></span>

				<blockquote
					class="text-xl leading-snug tracking-tight text-balance text-foreground md:text-2xl md:leading-snug"
				>
					{@render quoteText(featured)}
				</blockquote>
				{@render byline(featured, 0)}
			</figure>

			{#if rest.length > 0}
				<div class={['mx-auto mt-14 grid max-w-3xl gap-4', rest.length > 1 && 'md:grid-cols-2']}>
					{#each rest as item, i (item.quote)}
						<figure
							use:reveal={{ delay: 150 + i * 100 }}
							class="flex flex-col justify-between gap-6 rounded-xl bg-foreground/5 p-6 opacity-0 dark:bg-muted/80"
						>
							<blockquote class="text-base leading-relaxed text-foreground">
								{@render quoteText(item)}
							</blockquote>
							{@render byline(item, i + 1)}
						</figure>
					{/each}
				</div>
			{/if}
		</div>
	</section>
{/if}

<style>
	.rail {
		position: absolute;
		background: color-mix(in oklab, var(--foreground) 22%, transparent);
		pointer-events: none;
	}
	.rail-v {
		top: -2rem;
		bottom: -2rem;
		width: 1px;
		mask-image: linear-gradient(to bottom, transparent, black 18%, black 82%, transparent);
	}
	.rail-h {
		left: -2rem;
		right: -2rem;
		height: 1px;
		mask-image: linear-gradient(to right, transparent, black 12%, black 88%, transparent);
	}
</style>
