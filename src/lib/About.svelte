<script lang="ts">
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
  <div class="flex justify-center" transition:fly={{ y: 200, duration: 2000, delay: 1000 }}>
    <!-- Card -->
    <a class="group block rounded-xl overflow-hidden focus:outline-none max-w-3xl" href="/">
      <div class="flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-5">
        <div class="shrink-0 relative rounded-xl overflow-hidden w-full sm:w-56 h-44">
          <img class="group-hover:scale-105 group-focus:scale-105 transition-transform duration-500 ease-in-out size-full absolute top-0 start-0 object-cover rounded-xl" src="https://images.unsplash.com/photo-1540575861501-7cf05a4b125a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=320&q=80" alt="Zion">
        </div>

        <div class="grow">
          <h3 class="text-xl font-semibold text-gray-800 group-hover:text-gray-600 dark:text-neutral-300 dark:group-hover:text-white">
            Zion
          </h3>
          <p class="mt-3 text-gray-600 dark:text-neutral-400">My name is Zion Gonet, and I collaborate with businesses and individuals worldwide to design thoughtful, scalable digital systems and automations that save time and amplify impact.

            With a background in building web applications, I bring a unique blend of technical expertise and a passion for problem-solving to every project. From automating workflows to integrating powerful tools, my mission is to help others work smarter, not harder.

            When I’m not developing solutions, I enjoy exploring new technologies, sharing knowledge with the community, and staying inspired by the ever-evolving world of innovation.
          </p>
        </div>
      </div>
    </a>
    <!-- End Card -->
  </div>
  {/if}
    <!-- Grid -->
    
    <!-- End Grid -->
</div>
<!-- End Card Blog -->