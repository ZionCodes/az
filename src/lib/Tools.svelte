<script lang="ts">
	import { inview } from 'svelte-inview';
	import type { ObserverEventDetails, Options } from 'svelte-inview';
	import { fly } from 'svelte/transition';

	import airtable from '$lib/images/airtable.webp';
	import clay from '$lib/images/Clay Arch Marque.png';
	import hubspot from '$lib/images/hubspot.png'
	import make from '$lib/images/make.png';
	import n8n from '$lib/images/n8n.png';
	import salesforce from '$lib/images/Salesforce.png'
	import supabase from '$lib/images/supabase-logo-icon.png';
	import zapier from '$lib/images/zapier.png';
	import javascript from '$lib/images/javascript.png';
	import python from '$lib/images/python-logo-only.png';	
	import uipath from '$lib/images/UiPath.png'

	let isInView: boolean = false;

	const options: Options = {
		rootMargin: '-50px',
		unobserveOnEnter: true
	};

	const handleChange = ({ detail }: CustomEvent<ObserverEventDetails>) => {
		isInView = detail.inView;
	};

	const tools = [
		{ img: airtable, label: 'Airtable' },
		{ img: clay, label: 'Clay' },
		{ img: hubspot, label: 'Hubspot' },
		{ img: make, label: 'Make' },
		{ img: n8n, label: 'n8n' },
		{ img: salesforce, label: 'Salesforce' },
		{ img: supabase, label: 'Supabase' },
		{ img: zapier, label: 'Zapier' },
		{ img: javascript, label: 'JavaScript' },
		{ img: python, label: 'Python' },
		{ img: uipath, label: 'UiPath' }
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
			<div class="max-w-3xl mb-10 lg:mb-14" transition:fly={{ y: 200, duration: 1000, delay: 1500 }}>
				<h2 class="text-white font-semibold text-2xl md:text-4xl md:leading-tight">Tools</h2>
				<p class="mt-1 text-neutral-400">My go-to toolkit for building efficient, automated systems.</p>
			  </div>
			<div class="relative w-full">
				<div class="flex animate-scroll-left gap-6 w-max">
					{#each [...tools, ...tools] as tool, i}
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
