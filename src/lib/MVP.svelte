<script lang="ts">
    import supabase from '$lib/images/supabase-logo-icon.png';
    import svelte from '$lib/images/svelte-logo.png';
    import SvelteSvg from "$lib/images/svelte-logo.png";
    import SupabaseSvg from "$lib/images/supabase-logo-icon.png";
    import MagicCard from "./MagicCard.svelte";

    import { inview } from 'svelte-inview';
    import type { ObserverEventDetails, Options } from 'svelte-inview';
    import { fly } from 'svelte/transition';

    let isInView: boolean = false; // Initialize visibility state
    const options: Options = {
      rootMargin: '-50px',
      unobserveOnEnter: true,
    };

    const handleChange = ({ detail }: CustomEvent<ObserverEventDetails>) => {
      isInView = detail.inView; // Update visibility state
    };
</script>

<!-- Card Blog -->
<div class="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto" use:inview={options} on:inview_change={handleChange}>
  {#if isInView}
    <!-- Title -->
    <div class="max-w-3xl mb-10 lg:mb-14" transition:fly={{ y: 200, duration: 1000, delay: 1500 }}>
      <h2 class="text-2xl font-bold md:text-4xl md:leading-tight dark:text-white">Beyond automation, I help bring your ideas to life. </h2>
      <p class="mt-1 text-gray-600 dark:text-neutral-400">Whether you need to validate a new concept with a Minimum Viable Product (MVP) or capture leads with a high-converting landing page, I build fast, modern, and scalable web solutions.</p>
    </div>
    <!-- End Title -->
  
  <div class="flex max-w-5xl mx-auto flex-col gap-4 h-[250px] lg:flex-row" transition:fly={{ y: 200, duration: 2000, delay: 500 }}>
    <MagicCard
      class="cursor-pointer flex-col items-center justify-center shadow-2xl whitespace-nowrap text-4xl group hover:border-[#ff770094] transition-all duration-300"
      gradientColor="#4D2506"
    >
      <div
        class="group-hover:text-[#FF7700] transition-all duration-500 flex gap-1.5 justify-center items-center font-semibold"
      >
        <img src={SvelteSvg} alt="svelte_logo" class="size-10 mt-1.5" />
        Svelte
      </div>
      <p class="mt-2 text-base font-normal text-center text-gray-400 whitespace-normal">
        Build modern, high-performance web apps that load fast and look great on any device.
    </p>
    </MagicCard>
    <MagicCard
      class="cursor-pointer flex-col items-center justify-center shadow-2xl whitespace-nowrap text-4xl group hover:border-[#2effbd9e] transition-all duration-300"
      gradientColor="#043634"
      gradientSize={300}
    >
      <div
        class="group-hover:text-[#2EFFBD] transition-all duration-500 flex gap-1.5 justify-center items-center font-semibold"
      >
        <img src={SupabaseSvg} alt="svelte_logo" class="size-10 mt-1.5" />
        Supabase
      </div>
      <p class="mt-2 text-base font-normal text-center text-gray-400 whitespace-normal">
        Power your app with a secure, scalable backend that manages data, auth, and APIs with ease.
    </p>
    </MagicCard>
    
  </div>
  
    <div class="mt-12 text-center">
      <a class="py-3 px-4 inline-flex items-center gap-x-1 text-sm font-medium rounded-full text-neutral-800 shadow-2xs focus:outline-hidden focus:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none bg-[#ff0] hover:shadow-lg" href="#">
        Learn more
        <svg class="shrink-0 size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m9 18 6-6-6-6"/></svg>
      </a>
    </div>
    {/if}
  </div>
  


  
  
  