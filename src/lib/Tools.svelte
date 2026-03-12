<script lang="ts">
	import { inview } from 'svelte-inview';
	import { fly } from 'svelte/transition';

	import airtable from '$lib/images/airtable.webp';
	import notion from '$lib/images/notion.png';
	import clay from '$lib/images/Clay Arch Marque.png';
	import hubspot from '$lib/images/hubspot.png'
	import make from '$lib/images/make.png';
	import n8n from '$lib/images/n8n.png';
	import salesforce from '$lib/images/Salesforce.png'
	import sql from '$lib/images/Sql.png';
	import supabase from '$lib/images/supabase-logo-icon.png';
	import zapier from '$lib/images/zapier.png';
	import javascript from '$lib/images/javascript.png';
	import python from '$lib/images/python-logo-only.png';	
	import uipath from '$lib/images/UiPath.png';
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
		{ img: airtable, label: 'Airtable' },
		{ img: n8n, label: 'n8n' },
		{ img: notion, label: 'Notion' },
		{ img: clay, label: 'Clay' },
		{ img: hubspot, label: 'Hubspot' },
		{ img: apify, label: 'Apify' },
		{ img: zapier, label: 'Zapier' },
		{ img: make, label: 'Make' },
		{ img: salesforce, label: 'Salesforce' },
		{ img: sql, label: 'SQL' },
		{ img: supabase, label: 'Supabase' },
		{ img: javascript, label: 'JavaScript' },
		{ img: python, label: 'Python' },
		{ img: uipath, label: 'UiPath' },
		
		
	];
</script>

<!-- Tools Section -->
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
			<div class="relative w-full">
				<div class="flex animate-scroll-left gap-6 w-max">
					{#each [...tools, ...tools] as tool}
						<div
							class="flex-shrink-0 min-w-[200px] bg-gray-800 rounded-lg p-4 md:p-6 flex items-center justify-center hover:scale-110 transition-transform duration-300"
						>
							<img src={tool.img} alt={tool.label} class="w-12 h-12 object-contain mr-4" />
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

	@keyframes scroll-right {
		0% {
			transform: translateX(-50%);
		}
		100% {
			transform: translateX(0%);
		}
	}

	.animate-scroll-left {
		animation: scroll-left 30s linear infinite;
	}
</style>
