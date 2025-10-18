<script lang="ts">
  import { inview } from 'svelte-inview';
  import type { ObserverEventDetails, Options } from 'svelte-inview';
  import { fly } from 'svelte/transition';
  import image from '$lib/images/strategy.png'

  let isInView: boolean = false; // Initialize visibility state
  const options: Options = {
    rootMargin: '-80px',
    unobserveOnEnter: true,
  };

  const handleChange = ({ detail }: CustomEvent<ObserverEventDetails>) => {
    isInView = detail.inView; // Update visibility state
  };
</script>

<!-- Approach -->
<div class="bg-gray-900" use:inview={options} on:inview_change={handleChange}>
    <!-- Approach -->
     {#if isInView}
     <div class="max-w-5xl px-4 xl:px-0 py-10 lg:pt-20 lg:pb-20 mx-auto" transition:fly={{ y: 200, duration: 2000, delay: 1000 }}>
      <!-- Title -->
      <div class="max-w-3xl mb-10 lg:mb-14" transition:fly={{ y: 200, duration: 1000, delay: 1000 }}>
        <h2 class="text-white font-semibold text-2xl md:text-4xl md:leading-tight">Approach</h2>
        <p class="mt-1 text-neutral-400">Here’s how I design and build efficient and scalable systems that scale with your business.</p>
      </div>
      <!-- End Title -->
  
      <!-- Grid -->
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 lg:items-center" transition:fly={{ y: 200, duration: 2000, delay: 1000 }}>
        <div class="aspect-w-16 aspect-h-9 lg:aspect-none">
          <img class="w-full object-cover rounded-xl" src={image} transition:fly={{ y: 200, duration: 2000, delay:1000 }} alt="Features">
        </div>
        <!-- End Col -->
  
        <!-- Timeline -->
        <div>
          <!-- Heading -->
          <div class="mb-4">
            <h3 class="text-[#ff0] text-xs font-medium uppercase">
              Steps
            </h3>
          </div>
          <!-- End Heading -->
  
          <!-- Item -->
          <div class="flex gap-x-5 ms-1">
            <!-- Icon -->
            <div class="relative last:after:hidden after:absolute after:top-8 after:bottom-0 after:start-4 after:w-px after:-translate-x-[0.5px] after:bg-gray-800">
              <div class="relative z-10 size-8 flex justify-center items-center">
                <span class="flex shrink-0 justify-center items-center size-8 border border-neutral-800 text-[#ff0] font-semibold text-xs uppercase rounded-full">
                  1
                </span>
              </div>
            </div>
            <!-- End Icon -->
  
            <!-- Right Content -->
            <div class="grow pt-0.5 pb-8 sm:pb-12">
              <p class="text-sm lg:text-base text-neutral-400">
                <span class="text-white">Discovery & Consultation:</span>
                We begin by understanding your business, processes, challenges, and goals to uncover the biggest opportunities for automation and improvement.
              </p>
            </div>
            <!-- End Right Content -->
          </div>
          <!-- End Item -->
  
          <!-- Item -->
          <div class="flex gap-x-5 ms-1">
            <!-- Icon -->
            <div class="relative last:after:hidden after:absolute after:top-8 after:bottom-0 after:start-4 after:w-px after:-translate-x-[0.5px] after:bg-gray-800">
              <div class="relative z-10 size-8 flex justify-center items-center">
                <span class="flex shrink-0 justify-center items-center size-8 border border-neutral-800 text-[#ff0] font-semibold text-xs uppercase rounded-full">
                  2
                </span>
              </div>
            </div>
            <!-- End Icon -->
  
            <!-- Right Content -->
            <div class="grow pt-0.5 pb-8 sm:pb-12">
              <p class="text-sm lg:text-base text-neutral-400">
                <span class="text-white">System Design:</span>
                Based on your goals, I design tailored systems and automation solutions that simplify your processes, improve efficiency, and save time.
              </p>
            </div>
            <!-- End Right Content -->
          </div>
          <!-- End Item -->
  
          <!-- Item -->
          <div class="flex gap-x-5 ms-1">
            <!-- Icon -->
            <div class="relative last:after:hidden after:absolute after:top-8 after:bottom-0 after:start-4 after:w-px after:-translate-x-[0.5px] after:bg-gray-800">
              <div class="relative z-10 size-8 flex justify-center items-center">
                <span class="flex shrink-0 justify-center items-center size-8 border border-neutral-800 text-[#ff0] font-semibold text-xs uppercase rounded-full">
                  3
                </span>
              </div>
            </div>
            <!-- End Icon -->
  
            <!-- Right Content -->
            <div class="grow pt-0.5 pb-8 sm:pb-12">
              <p class="text-sm md:text-base text-neutral-400">
                <span class="text-white">Implementation:</span>
                I bring the solution to life by seamlessly integrating the systems into your workflow, ensuring minimal disruption and maximum impact.
              </p>
            </div>
            <!-- End Right Content -->
          </div>
          <!-- End Item -->
  
          <!-- Item -->
          <div class="flex gap-x-5 ms-1">
            <!-- Icon -->
            <div class="relative last:after:hidden after:absolute after:top-8 after:bottom-0 after:start-4 after:w-px after:-translate-x-[0.5px] after:bg-gray-800">
              <div class="relative z-10 size-8 flex justify-center items-center">
                <span class="flex shrink-0 justify-center items-center size-8 border border-neutral-800 text-[#ff0] font-semibold text-xs uppercase rounded-full">
                  4
                </span>
              </div>
            </div>
            <!-- End Icon -->
  
            <!-- Right Content -->
            <div class="grow pt-0.5 pb-8 sm:pb-12">
              <p class="text-sm md:text-base text-neutral-400">
                <span class="text-white">Optimization & Support:</span>
                Once your system is live, I provide ongoing support and optimization so your setup evolves as your business grows, staying efficient and reliable.
              </p>
            </div>
            <!-- End Right Content -->
          </div>
          <!-- End Item -->
  
          <a class="group inline-flex items-center gap-x-2 py-2 px-3 bg-[#ff0] font-medium text-sm text-neutral-800 rounded-full focus:outline-none" href="https://cal.com/automationzion/chat-with-zion">
            <svg class="shrink-0 size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path><path class="opacity-0 group-hover:opacity-100 group-focus:opacity-100 group-hover:delay-100 transition" d="M14.05 2a9 9 0 0 1 8 7.94"></path><path class="opacity-0 group-hover:opacity-100 group-focus:opacity-100 transition" d="M14.05 6A5 5 0 0 1 18 10"></path></svg>
            Schedule a call
          </a>
        </div>
        <!-- End Timeline -->
      </div>
      <!-- End Grid -->
    </div>
     {/if}
    
</div>
  <!-- End Approach -->