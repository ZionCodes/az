<script lang="ts">
  import { inview } from 'svelte-inview';
  import type { ObserverEventDetails, Options } from 'svelte-inview';
  import { fly } from 'svelte/transition';
  import Basic from '$lib/images/Make-Basics.png'
  import Foundation from '$lib/images/Make-Foundation.png'
  import Advanced from '$lib/images/Make-Advanced.png'
  import Intermediate from '$lib/images/Make-Intermediate.png'
  import Airtable from '$lib/images/Airtable-Builder.png'

  let isInView: boolean = false; // Initialize visibility state
  const options: Options = {
    rootMargin: '-50px',
    unobserveOnEnter: true,
  };

  const handleChange = ({ detail }: CustomEvent<ObserverEventDetails>) => {
    isInView = detail.inView; // Update visibility state
  };
</script>

<!-- Card Section -->
<div class="max-w-5xl px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto" use:inview={options} on:inview_change={handleChange}>
    <!-- Grid -->
     {#if isInView}
     <div class="grid sm:grid-cols-2 lg:grid-cols-2 gap-0.5 sm:gap-4" transition:fly={{ y: 200, duration: 1000, delay: 1000 }}>

      <!-- Card -->
      <a class="group flex flex-col border shadow-sm rounded-xl hover:shadow-md focus:outline-none focus:shadow-md transition bg-gray-800 dark:border-gray-800 hover:translate-x-3" href="/">
        <div class="p-4 md:p-5">
          <div class="flex gap-x-5">
            <img src={Basic} width="48" height="48" alt="Make Basic Certification">
  
            <div class="grow">
              <h3 class="group-hover:text-blue-600 font-semibold text-gray-800 dark:group-hover:text-neutral-400 dark:text-neutral-200">
                Airtable
              </h3>
              <p class="text-sm text-gray-500 dark:text-neutral-500">
                Airtable Builder
              </p>
            </div>
          </div>
        </div>
      </a>
      <!-- End Card -->
      <!-- Card -->
      <!-- End Card -->
      <!-- Card -->
      <a class="group flex flex-col border shadow-sm rounded-xl hover:shadow-md focus:outline-none focus:shadow-md transition dark:bg-gray-800 dark:border-gray-800 hover:translate-x-3" href="/">
        <div class="p-4 md:p-5">
          <div class="flex gap-x-5">
            <img src={Intermediate} width="48" height="48" alt="Make Basic Certification">
  
            <div class="grow">
              <h3 class="group-hover:text-blue-600 font-semibold text-gray-800 dark:group-hover:text-neutral-400 dark:text-neutral-200">
                Make
              </h3>
              <p class="text-sm text-gray-500 dark:text-neutral-500">
                Make Level 3 - Intermediate
              </p>
            </div>
          </div>
        </div>
      </a>
      <!-- End Card -->
      <!-- Card -->
      <a class="group flex flex-col border shadow-sm rounded-xl hover:shadow-md focus:outline-none focus:shadow-md transition dark:bg-gray-800 dark:border-gray-800 hover:translate-x-3" href="/">
        <div class="p-4 md:p-5">
          <div class="flex gap-x-5">
            <img src={Basic} width="48" height="48" alt="Make Basic Certification">
  
            <div class="grow">
              <h3 class="group-hover:text-blue-600 font-semibold text-gray-800 dark:group-hover:text-neutral-400 dark:text-neutral-200">
                Make
              </h3>
              <p class="text-sm text-gray-500 dark:text-neutral-500">
                Make Level 2 - Basic
              </p>
            </div>
          </div>
        </div>
      </a>
      <!-- End Card -->
      <!-- Card -->
      <a class="group flex flex-col border shadow-sm rounded-xl hover:shadow-md focus:outline-none focus:shadow-md transition dark:bg-gray-800 dark:border-gray-800 hover:translate-x-3" href="/">
        <div class="p-4 md:p-5">
          <div class="flex gap-x-5">
            <img src={Foundation} width="48" height="48" alt="Make Basic Certification">
  
            <div class="grow">
              <h3 class="group-hover:text-blue-600 font-semibold text-gray-800 dark:group-hover:text-neutral-400 dark:text-neutral-200">
                Make 
              </h3>
              <p class="text-sm text-gray-500 dark:text-neutral-500">
                Make Level 1 - Foundation
              </p>
            </div>
          </div>
        </div>
      </a>
      <!-- End Card -->
      
    </div>
     {/if}
    
    <!-- End Grid -->
  </div>
  <!-- End Card Section -->