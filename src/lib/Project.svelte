<script lang="ts">
  import { inview } from 'svelte-inview';
  import type { ObserverEventDetails, Options } from 'svelte-inview';
  import { fly, scale } from 'svelte/transition';

  let isInView: boolean = false; // Initialize visibility state
  const options: Options = {
    rootMargin: '-50px',
    unobserveOnEnter: true,
  };

  const handleChange = ({ detail }: CustomEvent<ObserverEventDetails>) => {
    isInView = detail.inView; // Update visibility state
  };
</script>

<div class="flex flex-col items-center mx-auto gap-y-4 mt-16 mb-16" use:inview={options} on:inview_change={handleChange}>
  {#if isInView}
  <a class="group block w-full max-w-3xl rounded-xl overflow-hidden focus:outline-none border border-gray-700" transition:scale={{ duration: 1000, delay: 1000 }} href="/">
    <div class="flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-5">
      <div class="shrink-0 relative rounded-xl overflow-hidden w-full sm:w-56 h-44">
        <img class="group-hover:scale-105 group-focus:scale-105 transition-transform duration-500 ease-in-out size-full absolute top-0 start-0 object-cover rounded-xl" src="https://images.unsplash.com/photo-1540575861501-7cf05a4b125a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=320&q=80" alt="project">
      </div>

      <div class="grow">
        <h3 class="text-xl font-semibold text-gray-800 group-hover:text-gray-600 dark:text-neutral-300 dark:group-hover:text-white">
          Studio by Preline
        </h3>
        <p class="mt-3 text-gray-600 dark:text-neutral-400">
          Produce professional, reliable streams easily leveraging Preline's innovative broadcast studio
        </p>
        <p class="mt-4 inline-flex items-center gap-x-1 text-sm text-blue-600 decoration-2 group-hover:underline group-focus:underline font-medium dark:text-blue-500">
          Read more
          <svg class="shrink-0 size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m9 18 6-6-6-6"/></svg>
        </p>
      </div>
    </div>
  </a>
  {/if}
</div>
