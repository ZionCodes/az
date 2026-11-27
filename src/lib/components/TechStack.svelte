<script>
	import { reveal } from '#lib/actions/reveal.js';
	import ToolLogo from '#lib/components/ToolLogo.svelte';

	// grouped by the job each tool does, so a reader can scan by area
	const groups = [
		{
			area: 'CRM',
			tools: [
				{ id: 'salesforce', name: 'Salesforce' },
				{ id: 'hubspot', name: 'HubSpot' }
			]
		},
		{
			area: 'Data and enrichment',
			tools: [
				{ id: 'clay', name: 'Clay' },
				{ id: 'apollo', name: 'Apollo' }
			]
		},
		{
			area: 'Automation',
			tools: [
				{ id: 'n8n', name: 'n8n' },
				{ id: 'make', name: 'Make' },
				{ id: 'zapier', name: 'Zapier' }
			]
		},
		{
			area: 'Code',
			tools: [
				{ id: 'python', name: 'Python' },
				{ id: 'sql', name: 'SQL' }
			]
		},
		{ area: 'AI', tools: [{ id: 'claude', name: 'Claude' }] },
		{
			area: 'Outbound',
			tools: [
				{ id: 'instantly', name: 'Instantly' },
				{ id: 'smartlead', name: 'Smartlead' }
			]
		}
	];
</script>

<section class="cv-auto py-16 md:py-28">
	<div class="mx-auto max-w-2xl space-y-4 px-6 text-center opacity-0" use:reveal>
		<h2 class="font-heading text-3xl font-semibold lg:text-4xl">Tools I Work With</h2>
		<p class="text-muted-foreground">
			The tools I build in most. If it has an API, I can work with it.
		</p>
	</div>

	<div
		class="mx-auto mt-12 grid max-w-5xl gap-3 px-6 opacity-0 sm:grid-cols-2 lg:grid-cols-3"
		use:reveal={{ delay: 150 }}
	>
		{#each groups as group (group.area)}
			<div class="rounded-xl border bg-card p-4">
				<p class="text-xs font-medium tracking-[0.15em] text-muted-foreground uppercase">
					{group.area}
				</p>
				<ul class="mt-3 space-y-2">
					{#each group.tools as tool (tool.name)}
						<li class="flex items-center gap-2.5 text-sm font-medium text-foreground">
							<span
								class="flex size-8 shrink-0 items-center justify-center rounded-lg border bg-background"
								aria-hidden="true"
							>
								<ToolLogo name={tool.id} class="size-4.5" />
							</span>
							{tool.name}
						</li>
					{/each}
				</ul>
			</div>
		{/each}
	</div>
</section>
