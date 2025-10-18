<script lang="ts">
    import { inview } from 'svelte-inview';
    import type { ObserverEventDetails, Options } from 'svelte-inview';
    import { scale } from 'svelte/transition';
    import airtable from '$lib/images/airtable.webp';
    import make from '$lib/images/make.png';
    import n8n from '$lib/images/n8n.png';
    import zapier from '$lib/images/zapier.png';
    import python from '$lib/images/python-logo-only.png';
    import javascript from '$lib/images/javascript.png';
    import supabase from '$lib/images/supabase-logo-icon.png';
  
    let isInView: boolean = false;
    const options: Options = {
      rootMargin: '-50px',
      unobserveOnEnter: true,
    };
  
    const handleChange = ({ detail }: CustomEvent<ObserverEventDetails>) => {
      isInView = detail.inView;
    };
  
    const tools = [
      { img: airtable, label: 'Airtable' },
      { img: make, label: 'Make' },
      { img: n8n, label: 'n8n' },
      { img: supabase, label: 'Supabase' },
      { img: zapier, label: 'Zapier' },
      { img: javascript, label: 'Javascript' },
      { img: python, label: 'Python' }
      
    ];
  </script>
  
  <!-- Clients -->
  <div
    class="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto bg-gray-900 overflow-hidden"
    use:inview={options}
    on:inview_change={handleChange}
  >
    {#if isInView}
      <div class="relative w-full">
        <div class="flex animate-scroll gap-6 w-max">
          {#each [...tools, ...tools] as tool, i}
            <div class="flex-shrink-0 min-w-[200px] bg-gray-800 rounded-lg p-4 md:p-7 flex items-center hover:scale-110 transition-transform duration-300">
              <img src={tool.img} alt={tool.label} class="w-12 h-12 object-contain mr-4" />
              <span class="text-white text-lg">{tool.label}</span>
            </div>
          {/each}
        </div>
      </div>
    {/if}
  </div>
  
  <style>
    @keyframes scroll {
      0% {
        transform: translateX(0%);
      }
      100% {
        transform: translateX(-50%);
      }
    }
  
    .animate-scroll {
      animation: scroll 20s linear infinite;
    }
  </style>
  