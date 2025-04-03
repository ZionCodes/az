<script lang="ts">
  import { inview } from 'svelte-inview';
  import type { ObserverEventDetails, Options } from 'svelte-inview';
  import { fly, scale } from 'svelte/transition';
  import TaskManagement from '$lib/images/Task Management Airtable.png'

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
  <!-- Masonry Cards -->
<div class="max-w-6xl px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
  <!-- Grid -->
  <div class="grid sm:grid-cols-12 gap-6">
    <div class="sm:self-end col-span-12 sm:col-span-7 md:col-span-8 lg:col-span-5 lg:col-start-3">
      <!-- Card -->
      <a class="group relative block rounded-xl overflow-hidden focus:outline-none" href="#">
        <div class="aspect-w-20 aspect-h-10 sm:aspect-none rounded-xl overflow-hidden">
          <img class="group-hover:scale-110 group-focus:scale-110 transition-transform duration-500 ease-in-out rounded-xl w-full object-cover" src={TaskManagement} alt="Masonry Cards Image">
        </div>
        <div class="absolute bottom-0 start-0 end-0 p-2 sm:p-4">
          <div class="text-sm font-semibold text-gray-800 rounded-lg bg-white p-4 md:text-xl dark:bg-neutral-400 dark:text-neutral-200">
            Workplace personalities
          </div>
        </div>
      </a>
      <!-- End Card -->
    </div>
    <div class="sm:self-end col-span-12 sm:col-span-7 md:col-span-8 lg:col-span-5 lg:col-start-3">
      <!-- Card -->
      <a class="group relative block rounded-xl overflow-hidden focus:outline-none" href="#">
        <div class="aspect-w-20 aspect-h-10 sm:aspect-none rounded-xl overflow-hidden">
          <img class="group-hover:scale-110 group-focus:scale-110 transition-transform duration-500 ease-in-out rounded-xl w-full object-cover" src={TaskManagement} alt="Masonry Cards Image">
        </div>
        <div class="absolute bottom-0 start-0 end-0 p-2 sm:p-4">
          <div class="text-sm font-semibold text-gray-800 rounded-lg bg-white p-4 md:text-xl dark:bg-neutral-400 dark:text-neutral-200">
            Workplace personalities
          </div>
        </div>
      </a>
      <!-- End Card -->
    </div>
    <div class="sm:self-end col-span-12 sm:col-span-7 md:col-span-8 lg:col-span-5 lg:col-start-3">
      <!-- Card -->
      <a class="group relative block rounded-xl overflow-hidden focus:outline-none" href="#">
        <div class="aspect-w-20 aspect-h-10 sm:aspect-none rounded-xl overflow-hidden">
          <img class="group-hover:scale-110 group-focus:scale-110 transition-transform duration-500 ease-in-out rounded-xl w-full object-cover" src={TaskManagement} alt="Masonry Cards Image">
        </div>
        <div class="absolute bottom-0 start-0 end-0 p-2 sm:p-4">
          <div class="text-sm font-semibold text-gray-800 rounded-lg bg-white p-4 md:text-xl dark:bg-neutral-400 dark:text-neutral-200">
            Workplace personalities
          </div>
        </div>
      </a>
      <!-- End Card -->
    </div>
    <div class="sm:self-end col-span-12 sm:col-span-7 md:col-span-8 lg:col-span-5 lg:col-start-3">
      <!-- Card -->
      <a class="group relative block rounded-xl overflow-hidden focus:outline-none" href="#">
        <div class="aspect-w-20 aspect-h-10 sm:aspect-none rounded-xl overflow-hidden">
          <img class="group-hover:scale-110 group-focus:scale-110 transition-transform duration-500 ease-in-out rounded-xl w-full object-cover" src={TaskManagement} alt="Masonry Cards Image">
        </div>
        <div class="absolute bottom-0 start-0 end-0 p-2 sm:p-4">
          <div class="text-sm font-semibold text-gray-800 rounded-lg bg-white p-4 md:text-xl dark:bg-neutral-400 dark:text-neutral-200">
            Workplace personalities
          </div>
        </div>
      </a>
      <!-- End Card -->
    </div>
    
  </div>
  <!-- End Grid -->
</div>
<!-- End Masonry Cards -->
  {/if}
</div>
