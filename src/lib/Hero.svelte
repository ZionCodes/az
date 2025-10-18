<script lang="ts">
  import { inview } from 'svelte-inview';
  import { fade, fly } from 'svelte/transition';
  import type { TransitionConfig } from 'svelte/transition';
  import type { Options, ObserverEventDetails } from 'svelte-inview';

  let isInView = false;

  const options: Options = {
    rootMargin: '-50px',
    unobserveOnEnter: true,
  };

  const handleChange = ({ detail }: CustomEvent<ObserverEventDetails>) => {
    isInView = detail.inView;
  };

  // ✅ Combined transition (fade + fly)
  function fadeFly(node: Element, params: any): TransitionConfig {
    const flyTransition = fly(node, { y: 120, duration: 800 });
    const fadeTransition = fade(node, { duration: 800 });

    return {
      duration: Math.max(flyTransition.duration, fadeTransition.duration),
      css: (t) => `${flyTransition.css?.(t)} ${fadeTransition.css?.(t)}`,
    };
  }
</script>

<!-- Hero -->
<div
  class="bg-gradient-to-b from-violet-600/10 via-transparent bg-gray-900"
  use:inview={options}
  on:inview_change={handleChange}
>
  {#if isInView}
  <div
    class="max-w-[85rem] mx-auto px-4 sm:px-6 lg:px-8 py-24 space-y-8"
    transition:fadeFly
  >
    <!-- Announcement Banner -->
    <!-- <div class="flex justify-center">
      <a class="group inline-flex items-center bg-white/10 hover:bg-white/10 border border-white/10 p-1 ps-4 rounded-full shadow-md focus:outline-none focus:bg-white/10" href="/about">
        <p class="me-2 text-white text-sm">
          About
        </p>
        <span class="group-hover:bg-white/10 py-1.5 px-2.5 flex justify-center items-center gap-x-2 rounded-full bg-white/10 font-semibold text-white text-sm">
          <svg class="shrink-0 size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m9 18 6-6-6-6"/></svg>
        </span>
      </a>
    </div> -->
    <!-- End Announcement Banner -->

    <!-- Title -->
    <div class="max-w-3xl text-center mx-auto">
      <h1 class="block font-medium text-gray-200 text-4xl sm:text-5xl md:text-6xl lg:text-7xl">
        Hi, I’m Zion. I Build <span class="text-[#ff0]">Systems that Scale</span>
      </h1>
    </div>
    <!-- End Title -->

    <div class="max-w-3xl text-center mx-auto">
      <p class="text-lg text-white/70">
        I create efficient systems that bring clarity, save time, and help your business grow with confidence.
      </p>
    </div>

    <!-- Buttons -->
    <div class="text-center">
      <a
        class="inline-flex justify-center items-center gap-x-3 text-center bg-gradient-to-tl bg-[#ff0] font-medium shadow-lg shadow-transparent hover:shadow-blue-700/50 border border-transparent text-neutral-800 text-sm rounded-full focus:outline-none focus:shadow-blue-700/50 py-3 px-6"
        href="https://airtable.com/apptczz1Z37dJqKHA/pagw800Gw7i9TAPCz/form"
      >
        Contact
        <svg
          class="shrink-0 size-4"
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        >
          <path d="m9 18 6-6-6-6" />
        </svg>
      </a>
    </div>
    <!-- End Buttons -->
  </div>
  {/if}
</div>
<!-- End Hero -->
