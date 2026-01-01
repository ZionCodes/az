<script lang="ts">
  import { inview } from 'svelte-inview';
  import type { ObserverEventDetails, Options } from 'svelte-inview';
  import { fly } from 'svelte/transition';
  import automationzion from '$lib/images/automationzion profile.webp'

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
<div
  class="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto"
  use:inview={options}
  on:inview_change={handleChange}
>
  {#if isInView}
    <div
      class="flex justify-center"
      transition:fly={{ y: 200, duration: 2000, delay: 1000 }}
    >
      <!-- Card -->
      <a
        class="group block rounded-xl overflow-hidden focus:outline-none max-w-4xl w-full"
        href="/"
      >
        <div class="flex flex-col sm:flex-row sm:items-stretch gap-6">
          <!-- Image -->
          <div class="relative mx-auto rounded-xl overflow-hidden w-3/4 sm:w-1/2 aspect-square sm:aspect-auto sm:h-auto"
          >
            <img
              class="group-hover:scale-105 group-focus:scale-105 transition-transform duration-500 ease-in-out absolute inset-0 w-full h-full object-cover rounded-xl"
              src={automationzion}
              alt="Zion"
            />
          </div>

          <!-- Text -->
          <div class="w-full sm:w-1/2 flex flex-col justify-center">
            <p class="text-base md:text-lg leading-relaxed text-gray-700 dark:text-neutral-400">
              Hi, I’m Zion Gonet, a generalist and systems thinker who thrives on turning chaos into order. With a background in web development, I bring a unique blend of technical expertise and strategic thinking to solve complex problems. My focus is on creating practical, scalable digital systems and AI agents that eliminate manual tasks, reduce costs boost operational efficiency and increase revenue growth.
              <br /><br />
              When I’m not building systems or web apps, I’m an avid reader constantly exploring new ideas and technologies that shape our world, and the principles and laws that govern our lives.
            </p>
          </div>
        </div>
      </a>
      <!-- End Card -->
    </div>
  {/if}
</div>


<!-- End Card Blog -->