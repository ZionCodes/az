<script>
	import { reveal } from '#lib/actions/reveal.js';
	import { testimonials as defaultTestimonials } from '#lib/data/testimonials.js';

	let { items = defaultTestimonials } = $props();

	const accents = ['text-blue-600', 'text-violet-600', 'text-orange-600'];
</script>

{#if items.length > 0}
	<section class="py-16 md:py-24">
		<div class="mx-auto max-w-5xl px-6">
			<div class="mx-auto max-w-xl space-y-4 text-center opacity-0" use:reveal>
				<p
					class="flex items-center justify-center gap-2 text-xs tracking-[0.2em] text-muted-foreground uppercase"
				>
					<span class="inline-block h-px w-8 bg-foreground/30"></span>
					In Their Words
					<span class="inline-block h-px w-8 bg-foreground/30"></span>
				</p>
				<h2 class="font-heading text-3xl font-semibold lg:text-4xl">
					From the People I've Built For
				</h2>
			</div>

			<div class="mt-12 grid gap-4 md:grid-cols-2">
				{#each items as item, i (item.quote)}
					<figure
						use:reveal={{ delay: i * 100 }}
						class={[
							'flex flex-col justify-between gap-8 rounded-xl bg-foreground/5 p-8 opacity-0 dark:bg-muted/80',
							items.length % 2 === 1 && i === items.length - 1 && 'md:col-span-2'
						]}
					>
						<div>
							<p
								class="text-xs font-medium tracking-[0.2em] uppercase {accents[i % accents.length]}"
							>
								{item.company}
							</p>
							<blockquote class="mt-4 text-lg leading-relaxed text-balance text-foreground">
								“{item.quote}”
							</blockquote>
						</div>
						<figcaption class="border-t pt-4 text-sm">
							<span class="font-medium text-foreground">{item.name}</span><span
								class="text-muted-foreground">, {item.role}</span
							>
						</figcaption>
					</figure>
				{/each}
			</div>
		</div>
	</section>
{/if}
