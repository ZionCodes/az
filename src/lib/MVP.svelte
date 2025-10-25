<script lang="ts">
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
  
    <div class="mt-12 text-center" transition:fly={{ y: 200, duration: 2000, delay: 2000 }}>
      <a class="group inline-flex items-center gap-x-2 py-2 px-3 bg-[#ff0] font-medium text-sm text-neutral-800 rounded-full focus:outline-none" href="https://cal.com/automationzion/intro-call-web-dev" target="_blank">
        <svg class="shrink-0 size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path><path class="opacity-0 group-hover:opacity-100 group-focus:opacity-100 group-hover:delay-100 transition" d="M14.05 2a9 9 0 0 1 8 7.94"></path><path class="opacity-0 group-hover:opacity-100 group-focus:opacity-100 transition" d="M14.05 6A5 5 0 0 1 18 10"></path></svg>
        Schedule a call
      </a>
    </div>
    {/if}
  </div>
  


  
  
  