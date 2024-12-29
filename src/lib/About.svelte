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
<div class="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto" use:inview={options} on:inview_change={handleChange}>
  {#if isInView}
  <div class="flex justify-center" transition:fly={{ y: 200, duration: 2000, delay: 1000 }}>
    <!-- Card -->
    <a class="group block rounded-xl overflow-hidden focus:outline-none max-w-3xl" href="/">
      <div class="flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-5">
        <div class="shrink-0 relative rounded-xl overflow-hidden w-full sm:w-56 h-44">
          <img class="group-hover:scale-105 group-focus:scale-105 transition-transform duration-500 ease-in-out size-full absolute top-0 start-0 object-cover rounded-xl" src={automationzion} alt="Zion">
        </div>

        <div class="grow">
          <h3 class="text-xl font-semibold text-gray-800 group-hover:text-gray-600 dark:text-neutral-300 dark:group-hover:text-white">
            Zion
          </h3>
          <p class="mt-3 text-gray-600 dark:text-neutral-400">Hi, I’m Zion Gonet, and I work with businesses and individuals to create practical, scalable digital systems and automations that help save time, reduce costs, and eliminate tedious manual tasks.

            With a background in web development, I bring a mix of technical know-how and a passion for solving real-world problems. Whether it’s automating workflows or connecting tools to work seamlessly together, my goal is to make your work life easier and more efficient.
            
            When I’m not crafting solutions, I’m pursuing entrepreneurship, exploring new technologies, and staying inspired by the constantly evolving business and tech world.
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