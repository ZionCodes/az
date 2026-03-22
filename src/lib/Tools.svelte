<script lang="ts">
	import { inview } from 'svelte-inview';
	import { fly } from 'svelte/transition';

	import airtable from '$lib/images/airtable.webp?enhanced';
	import notion from '$lib/images/notion.png?enhanced';
	import clay from '$lib/images/Clay Arch Marque.png?enhanced';
	import hubspot from '$lib/images/hubspot.png?enhanced';
	import make from '$lib/images/make.png?enhanced';
	import n8n from '$lib/images/n8n.png?enhanced';
	import salesforce from '$lib/images/Salesforce.png?enhanced';
	import sql from '$lib/images/Sql.png?enhanced';
	import supabase from '$lib/images/supabase-logo-icon.png?enhanced';
	import zapier from '$lib/images/zapier.png?enhanced';
	import javascript from '$lib/images/javascript.png?enhanced';
	import python from '$lib/images/python-logo-only.png?enhanced';
	import uipath from '$lib/images/UiPath.png?enhanced';
	import apify from '$lib/images/apify.svg';

	let isInView = false;

	const options = {
		rootMargin: '-50px',
		unobserveOnEnter: true
	};

	const handleChange = ({ detail }) => {
		isInView = detail.inView;
	};

	const tools = [
		{ img: airtable, label: 'Airtable', enhanced: true },
		{ img: n8n, label: 'n8n', enhanced: true },
		{ img: notion, label: 'Notion', enhanced: true },
		{ img: clay, label: 'Clay', enhanced: true },
		{ img: hubspot, label: 'Hubspot', enhanced: true },
		{ img: apify, label: 'Apify', enhanced: false },
		{ img: zapier, label: 'Zapier', enhanced: true },
		{ img: make, label: 'Make', enhanced: true },
		{ img: salesforce, label: 'Salesforce', enhanced: true },
		{ img: sql, label: 'SQL', enhanced: true },
		{ img: supabase, label: 'Supabase', enhanced: true },
		{ img: javascript, label: 'JavaScript', enhanced: true },
		{ img: python, label: 'Python', enhanced: true },
		{ img: uipath, label: 'UiPath', enhanced: true },
	];
</script>

<!-- svelte-ignore event_directive_deprecated -->
<div
	class="max-w-[85rem] px-4 py-16 sm:px-6 lg:px-8 mx-auto bg-gray-900 overflow-hidden"
	use:inview={options}
	on:inview_change={handleChange}
>
	{#if isInView}
		<div class="space-y-8">
			<div class="max-w-3xl mb-10 lg:mb-14" transition:fly={{ y: 200, duration: 800, delay: 500 }}>
				<p class="text-xs font-mono text-[#ff0] uppercase tracking-[0.2em] mb-3 flex items-center gap-2">
				  <span class="inline-block w-8 h-px bg-[#ff0]"></span>
				  Tech Stack
				</p>
				<h2 class="text-white font-semibold text-2xl md:text-4xl md:leading-tight">
				  Tools I use<br>every day
				</h2>
			</div>
			<div class="relative w-full group">
				<div class="flex animate-scroll-left gap-6 w-max group-hover:[animation-play-state:paused]">
					{#each [...tools, ...tools] as tool}
						<div
							class="flex-shrink-0 min-w-[200px] bg-gray-800 rounded-lg p-4 md:p-6 flex items-center justify-center hover:scale-110 transition-transform duration-300"
						>
							{#if tool.enhanced}
								<enhanced:img
									src={tool.img}
									alt={tool.label}
									class="w-12 h-12 object-contain mr-4"
								/>
							{:else}
								<img
									src={tool.img}
									alt={tool.label}
									class="w-12 h-12 object-contain mr-4"
								/>
							{/if}
							<span class="text-white text-lg font-medium">{tool.label}</span>
						</div>
					{/each}
				</div>
			</div>
		</div>
	{/if}
</div>

<style>
	@keyframes scroll-left {
		0% {
			transform: translateX(0%);
		}
		100% {
			transform: translateX(-50%);
		}
	}

	.animate-scroll-left {
		animation: scroll-left 30s linear infinite;
	}
</style>