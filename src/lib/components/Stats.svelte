<script>
	import { reveal } from '#lib/actions/reveal.js';

	const stats = [
		{ value: '3+', label: 'Years building automation and GTM systems', color: 'text-blue-600' },
		{ value: '20+', label: 'Systems shipped and still running', color: 'text-violet-600' },
		{
			value: '10+',
			label: 'Hours a week of commission admin taken off one sales team',
			color: 'text-orange-600'
		}
	];
</script>

<section class="@container py-20 md:py-24">
	<div class="mx-auto max-w-5xl px-6">
		<h2 class="font-heading text-3xl font-medium text-balance opacity-0 md:text-4xl" use:reveal>
			Three Years of Shipped Systems
		</h2>
		<dl
			class="mt-10 grid gap-px overflow-hidden rounded-xl border bg-border opacity-0 @xl:grid-cols-3"
			use:reveal={{ delay: 150 }}
		>
			{#each stats as stat (stat.value)}
				<div class="bg-background p-6 md:p-8">
					<dt class="sr-only">{stat.label}</dt>
					<dd>
						<span class="block font-heading text-5xl font-semibold md:text-6xl {stat.color}"
							>{stat.value}</span
						>
						<span class="mt-3 block max-w-[16rem] text-base text-muted-foreground"
							>{stat.label}</span
						>
					</dd>
				</div>
			{/each}
		</dl>
	</div>
</section>
